import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface TextEdit {
  pageIndex: number;
  originalText: string;
  newText: string;
  x: number;      // HTML left in pixels
  y: number;      // HTML top in pixels
  width: number;  // HTML width in pixels
  height: number; // HTML height in pixels
  fontSize: number; // HTML font-size in pixels
  fontFamily: string;
  color: string;   // Computed CSS color, e.g. "rgb(0, 0, 0)"
  fontWeight?: string;
  fontStyle?: string;
}

export interface PageDimensions {
  width: number;  // HTML container width in pixels
  height: number; // HTML container height in pixels
}

/**
 * Parses CSS rgb/rgba or hex color string into pdf-lib normalized rgb
 */
function parseColor(colorStr: string): { r: number; g: number; b: number } {
  if (colorStr.startsWith('rgb')) {
    const match = colorStr.match(/\d+/g);
    if (match && match.length >= 3) {
      return {
        r: parseInt(match[0]) / 255,
        g: parseInt(match[1]) / 255,
        b: parseInt(match[2]) / 255,
      };
    }
  } else if (colorStr.startsWith('#')) {
    const hex = colorStr.slice(1);
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16) / 255,
        g: parseInt(hex[1] + hex[1], 16) / 255,
        b: parseInt(hex[2] + hex[2], 16) / 255,
      };
    } else if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16) / 255,
        g: parseInt(hex.slice(2, 4), 16) / 255,
        b: parseInt(hex.slice(4, 6), 16) / 255,
      };
    }
  }
  return { r: 0, g: 0, b: 0 };
}

/**
 * Maps CSS font-family, weight, and style to StandardFonts
 */
function mapStandardFont(
  fontFamily: string,
  fontWeight = 'normal',
  fontStyle = 'normal'
): StandardFonts {
  const family = fontFamily.toLowerCase();
  const isBold = fontWeight === 'bold' || parseInt(fontWeight) >= 600 || family.includes('bold');
  const isItalic = fontStyle === 'italic' || family.includes('italic') || family.includes('oblique');

  if (family.includes('serif') || family.includes('times') || family.includes('georgia')) {
    if (isBold && isItalic) return StandardFonts.TimesRomanBoldItalic;
    if (isBold) return StandardFonts.TimesRomanBold;
    if (isItalic) return StandardFonts.TimesRomanItalic;
    return StandardFonts.TimesRoman;
  }

  if (family.includes('mono') || family.includes('courier') || family.includes('consolas')) {
    if (isBold && isItalic) return StandardFonts.CourierBoldOblique;
    if (isBold) return StandardFonts.CourierBold;
    if (isItalic) return StandardFonts.CourierOblique;
    return StandardFonts.Courier;
  }

  // Default to Helvetica family
  if (isBold && isItalic) return StandardFonts.HelveticaBoldOblique;
  if (isBold) return StandardFonts.HelveticaBold;
  if (isItalic) return StandardFonts.HelveticaOblique;
  return StandardFonts.Helvetica;
}

/**
 * Modifies a PDF document by masking original text coordinates with whiteout
 * and overlaying new edited text with matching styling.
 * 
 * @param pdfBuffer The array buffer of the original PDF document
 * @param edits Array of text edits to apply
 * @param pageDimensions Dimensions of the pages in HTML pixels to scale coordinates
 * @returns ArrayBuffer of the modified PDF document
 */
export async function modifyPdfText(
  pdfBuffer: ArrayBuffer | Uint8Array,
  edits: TextEdit[],
  pageDimensions: Record<number, PageDimensions>
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();

  // Cache loaded fonts to avoid repeating loads
  const fontCache: Record<string, any> = {};

  for (const edit of edits) {
    if (edit.pageIndex < 0 || edit.pageIndex >= pages.length) {
      continue;
    }

    const page = pages[edit.pageIndex];
    const { width: pdfWidth, height: pdfHeight } = page.getSize();
    
    // Get HTML container dimensions for this page
    const dims = pageDimensions[edit.pageIndex];
    if (!dims) {
      continue;
    }

    // Calculate scale factors between HTML rendering and PDF points
    const scaleX = pdfWidth / dims.width;
    const scaleY = pdfHeight / dims.height;

    // Convert coordinates:
    // HTML has origin at top-left, PDF has origin at bottom-left
    const rectX = edit.x * scaleX;
    const rectY = pdfHeight - ((edit.y + edit.height) * scaleY);
    const rectWidth = edit.width * scaleX;
    const rectHeight = edit.height * scaleY;

    // 1. Draw a white masking rectangle over the original text region (Whiteout)
    // Add a tiny padding to ensure we fully cover the anti-aliased edges of the original text
    const padding = 1.0; 
    page.drawRectangle({
      x: rectX - padding,
      y: rectY - padding,
      width: rectWidth + (padding * 2),
      height: rectHeight + (padding * 2),
      color: rgb(1, 1, 1), // White
      borderWidth: 0,
    });

    // 2. Draw the new text inside the masked region
    // Map CSS styles to Standard PDF Fonts
    const fontType = mapStandardFont(edit.fontFamily, edit.fontWeight, edit.fontStyle);
    if (!fontCache[fontType]) {
      fontCache[fontType] = await pdfDoc.embedFont(fontType);
    }
    const font = fontCache[fontType];

    const pdfFontSize = edit.fontSize * scaleX; // Scale font size to PDF points
    const fontColor = parseColor(edit.color);

    // Text drawing in pdf-lib aligns to the baseline of the text.
    // We adjust the Y coordinate slightly so the text sits vertically aligned 
    // inside the bounding box matching the original text.
    const textYAdjustment = (rectHeight - pdfFontSize) / 2;

    page.drawText(edit.newText, {
      x: rectX,
      y: rectY + textYAdjustment + 1.0, // minor offset for baseline
      size: pdfFontSize,
      font: font,
      color: rgb(fontColor.r, fontColor.g, fontColor.b),
    });
  }

  const modifiedPdfBytes = await pdfDoc.save();
  return modifiedPdfBytes;
}
