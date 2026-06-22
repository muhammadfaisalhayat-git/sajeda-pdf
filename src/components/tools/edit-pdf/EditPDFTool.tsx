'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  MousePointer, Type, Link as LinkIcon, CheckSquare, Image as ImageIcon, 
  Signature, Eraser, Square, Circle, ArrowRight, Minus, Paintbrush, 
  Highlighter, Underline, Strikethrough, Trash2, Download, ChevronDown, Check, RefreshCw
} from 'lucide-react';
import { modifyPdfText } from '@/lib/pdf/pdf-modifier';

export interface EditPDFToolProps {
  className?: string;
}

export function EditPDFTool({ className = '' }: EditPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.editPdf');
  
  const [file, setFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Toolbar state
  const [activeTool, setActiveTool] = useState<string>('select');
  
  // Text formatting state
  const [activeSpanId, setActiveSpanId] = useState<string | null>(null);
  const [currentTextColor, setCurrentTextColor] = useState<string>('rgb(0, 0, 0)');
  const [currentFontSize, setCurrentFontSize] = useState<number>(14);
  const [currentFontFamily, setCurrentFontFamily] = useState<string>('Helvetica, sans-serif');

  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Keep track of text modifications across pages
  const editsRef = useRef<Record<string, {
    pageIndex: number;
    originalText: string;
    newText: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize: number;
    fontFamily: string;
    color: string;
    fontWeight: string;
    fontStyle: string;
    spanId: string;
  }>>({});

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setPdfUrl(URL.createObjectURL(selectedFile));
      editsRef.current = {};
      setActiveSpanId(null);
      setActiveTool('select');
    }
  }, []);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  // Set selected tool and send message to the iframe
  const setTool = (tool: string) => {
    setActiveTool(tool);
    setActiveSpanId(null);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'select-tool',
        tool: tool
      }, '*');
    }
  };

  // Set sub-tool (e.g. form inputs)
  const setSubTool = (parentTool: string, subTool: string) => {
    setActiveTool(parentTool);
    setActiveSpanId(null);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'select-tool',
        tool: subTool
      }, '*');
    }
  };

  // Color picker change handler
  const handleColorChange = (color: string) => {
    setCurrentTextColor(color);
    if (!activeSpanId || !iframeRef.current) return;
    
    const doc = iframeRef.current.contentDocument;
    const input = doc?.getElementById(`input-${activeSpanId}`) as HTMLElement;
    if (input) {
      input.style.color = color;
    }
    
    if (editsRef.current[activeSpanId]) {
      editsRef.current[activeSpanId].color = color;
    }
  };

  // Font size change handler
  const handleFontSizeChange = (size: number) => {
    if (size < 6 || size > 72) return;
    setCurrentFontSize(size);
    if (!activeSpanId || !iframeRef.current) return;
    
    const doc = iframeRef.current.contentDocument;
    const input = doc?.getElementById(`input-${activeSpanId}`) as HTMLElement;
    const overlay = doc?.getElementById(`edit-overlay-${activeSpanId}`) as HTMLElement;
    if (input && overlay) {
      input.style.fontSize = `${size}px`;
      
      const height = size * 1.4;
      input.style.height = `${height}px`;
      overlay.style.height = `${height}px`;
      
      if (editsRef.current[activeSpanId]) {
        editsRef.current[activeSpanId].fontSize = size;
        editsRef.current[activeSpanId].height = height;
      }
    }
  };

  // Font family change handler
  const handleFontFamilyChange = (family: string) => {
    setCurrentFontFamily(family);
    if (!activeSpanId || !iframeRef.current) return;
    
    const doc = iframeRef.current.contentDocument;
    const input = doc?.getElementById(`input-${activeSpanId}`) as HTMLElement;
    if (input) {
      input.style.fontFamily = family;
    }
    
    if (editsRef.current[activeSpanId]) {
      editsRef.current[activeSpanId].fontFamily = family;
    }
  };

  // Delete current text box
  const handleDeleteTextEdit = () => {
    if (!activeSpanId || !iframeRef.current) return;
    
    const doc = iframeRef.current.contentDocument;
    const overlay = doc?.getElementById(`edit-overlay-${activeSpanId}`);
    if (overlay) {
      overlay.remove();
    }
    
    const span = doc?.getElementById(activeSpanId);
    if (span) {
      span.style.visibility = 'visible';
    }
    
    if (editsRef.current[activeSpanId]) {
      delete editsRef.current[activeSpanId];
    }
    
    setActiveSpanId(null);
  };

  // Listen to postMessages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument || !iframe.contentWindow) return;
      const doc = iframe.contentDocument;

      if (data.type === 'text-clicked') {
        const {
          spanId, pageIndex, originalText, x, y, width, height,
          fontSize, fontFamily, color, fontWeight, fontStyle
        } = data;

        // Update styling state to match clicked text
        setCurrentTextColor(color);
        setCurrentFontSize(Math.round(fontSize));
        setCurrentFontFamily(fontFamily);
        setActiveSpanId(spanId);

        // Hide the original span
        const span = doc.getElementById(spanId);
        if (span) {
          span.style.visibility = 'hidden';
        }

        // Add or retrieve overlay
        let overlay = doc.getElementById(`edit-overlay-${spanId}`);
        if (!overlay) {
          overlay = doc.createElement('div');
          overlay.id = `edit-overlay-${spanId}`;
          overlay.style.position = 'absolute';
          overlay.style.left = `${x}px`;
          overlay.style.top = `${y}px`;
          overlay.style.width = `${width}px`;
          overlay.style.height = `${height}px`;
          overlay.style.zIndex = '1000';
          overlay.style.display = 'flex';
          overlay.style.alignItems = 'center';

          // Whiteout mask underneath
          const mask = doc.createElement('div');
          mask.id = `mask-${spanId}`;
          mask.style.position = 'absolute';
          mask.style.inset = '-1px -2px';
          mask.style.backgroundColor = 'white';
          mask.style.zIndex = '1';
          overlay.appendChild(mask);

          // Editable input
          const input = doc.createElement('div');
          input.id = `input-${spanId}`;
          input.contentEditable = 'true';
          input.style.position = 'relative';
          input.style.zIndex = '2';
          input.style.width = '100%';
          input.style.height = '100%';
          input.style.border = '1px dashed hsl(var(--color-primary, 220, 90%, 50%))';
          input.style.outline = 'none';
          input.style.backgroundColor = 'transparent';
          input.style.fontSize = `${fontSize}px`;
          input.style.fontFamily = fontFamily;
          input.style.color = color;
          input.style.fontWeight = fontWeight;
          input.style.fontStyle = fontStyle;
          input.style.whiteSpace = 'pre';
          input.style.overflow = 'visible';

          input.textContent = originalText;
          overlay.appendChild(input);

          const pageContainer = doc.querySelector(`.page[data-page-number="${pageIndex + 1}"]`);
          if (pageContainer) {
            pageContainer.appendChild(overlay);
          }

          // Register in edits
          editsRef.current[spanId] = {
            pageIndex,
            originalText,
            newText: originalText,
            x,
            y,
            width,
            height,
            fontSize,
            fontFamily,
            color,
            fontWeight,
            fontStyle,
            spanId
          };

          // Attach listeners to editable input
          input.addEventListener('input', () => {
            if (editsRef.current[spanId]) {
              editsRef.current[spanId].newText = input.textContent || '';
            }
          });

          input.addEventListener('focus', () => {
            setActiveSpanId(spanId);
            setCurrentTextColor(input.style.color || 'rgb(0, 0, 0)');
            setCurrentFontSize(parseFloat(input.style.fontSize) || 14);
            setCurrentFontFamily(input.style.fontFamily || 'Helvetica, sans-serif');
          });

          input.addEventListener('blur', () => {
            input.style.border = 'none';
          });
        }

        const inputEl = doc.getElementById(`input-${spanId}`) as HTMLDivElement;
        if (inputEl) {
          inputEl.style.border = '1px dashed hsl(var(--color-primary, 220, 90%, 50%))';
          setTimeout(() => {
            inputEl.focus();
            const range = doc.createRange();
            range.selectNodeContents(inputEl);
            const sel = iframe.contentWindow?.getSelection();
            if (sel) {
              sel.removeAllRanges();
              sel.addRange(range);
            }
          }, 50);
        }
      }

      if (data.type === 'new-text-clicked') {
        const {
          spanId, pageIndex, x, y, width, height,
          fontSize, fontFamily, color, fontWeight, fontStyle
        } = data;

        setCurrentTextColor(color);
        setCurrentFontSize(Math.round(fontSize));
        setCurrentFontFamily(fontFamily);
        setActiveSpanId(spanId);

        let overlay = doc.getElementById(`edit-overlay-${spanId}`);
        if (!overlay) {
          const newOverlay = doc.createElement('div');
          newOverlay.id = `edit-overlay-${spanId}`;
          newOverlay.style.position = 'absolute';
          newOverlay.style.left = `${x}px`;
          newOverlay.style.top = `${y}px`;
          newOverlay.style.width = `${width}px`;
          newOverlay.style.height = `${height}px`;
          newOverlay.style.zIndex = '1000';
          newOverlay.style.display = 'flex';
          newOverlay.style.alignItems = 'center';

          const input = doc.createElement('div');
          input.id = `input-${spanId}`;
          input.contentEditable = 'true';
          input.style.position = 'relative';
          input.style.zIndex = '2';
          input.style.width = '100%';
          input.style.height = '100%';
          input.style.border = '1px dashed hsl(var(--color-primary, 220, 90%, 50%))';
          input.style.outline = 'none';
          input.style.backgroundColor = 'transparent';
          input.style.fontSize = `${fontSize}px`;
          input.style.fontFamily = fontFamily;
          input.style.color = color;
          input.style.fontWeight = fontWeight;
          input.style.fontStyle = fontStyle;
          input.style.whiteSpace = 'pre';
          input.style.overflow = 'visible';

          input.textContent = '';
          newOverlay.appendChild(input);

          const pageContainer = doc.querySelector(`.page[data-page-number="${pageIndex + 1}"]`);
          if (pageContainer) {
            pageContainer.appendChild(newOverlay);
          }

          editsRef.current[spanId] = {
            pageIndex,
            originalText: '',
            newText: '',
            x,
            y,
            width,
            height,
            fontSize,
            fontFamily,
            color,
            fontWeight,
            fontStyle,
            spanId
          };

          input.addEventListener('input', () => {
            if (editsRef.current[spanId]) {
              editsRef.current[spanId].newText = input.textContent || '';
              // Dynamically adjust text box width as user types
              const tempSpan = doc.createElement('span');
              tempSpan.style.visibility = 'hidden';
              tempSpan.style.position = 'absolute';
              tempSpan.style.fontSize = input.style.fontSize;
              tempSpan.style.fontFamily = input.style.fontFamily;
              tempSpan.style.whiteSpace = 'pre';
              tempSpan.textContent = input.textContent || ' ';
              doc.body.appendChild(tempSpan);
              const textWidth = tempSpan.getBoundingClientRect().width;
              doc.body.removeChild(tempSpan);
              newOverlay.style.width = `${Math.max(width, textWidth + 10)}px`;
              editsRef.current[spanId].width = Math.max(width, textWidth + 10);
            }
          });

          input.addEventListener('focus', () => {
            setActiveSpanId(spanId);
            setCurrentTextColor(input.style.color || 'rgb(0, 0, 0)');
            setCurrentFontSize(parseFloat(input.style.fontSize) || 14);
            setCurrentFontFamily(input.style.fontFamily || 'Helvetica, sans-serif');
          });

          input.addEventListener('blur', () => {
            input.style.border = 'none';
          });

          overlay = newOverlay;
        }

        const inputEl = doc.getElementById(`input-${spanId}`) as HTMLDivElement;
        if (inputEl) {
          inputEl.style.border = '1px dashed hsl(var(--color-primary, 220, 90%, 50%))';
          setTimeout(() => {
            inputEl.focus();
          }, 50);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const downloadPdf = (bytes: ArrayBuffer | Uint8Array, filename: string) => {
    const blob = new Blob([bytes as any], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Compile normal annotations + in-place text edits, then download
  const handleExport = async () => {
    if (!iframeRef.current) return;
    setIsProcessing(true);
    setError(null);
    
    try {
      const win = iframeRef.current.contentWindow as any;
      const app = win?.PDFViewerApplication;
      
      if (!app || !app.pdfDocument) {
        setError('PDF Viewer is not fully loaded yet.');
        setIsProcessing(false);
        return;
      }

      // 1. Export PDF bytes containing the default annotations
      const annotatedPdfBytes = await app.pdfDocument.saveDocument();

      // 2. Fetch page dimensions inside the iframe for accurate mapping coordinates
      const doc = iframeRef.current.contentDocument;
      if (!doc) {
        throw new Error('Could not access iframe document');
      }
      
      const pageElements = doc.querySelectorAll('.page');
      const pageDimensions: Record<number, { width: number; height: number }> = {};
      pageElements.forEach((page) => {
        const pageIdx = parseInt(page.getAttribute('data-page-number') || '1') - 1;
        const rect = page.getBoundingClientRect();
        pageDimensions[pageIdx] = {
          width: rect.width,
          height: rect.height
        };
      });

      const editsArray = Object.values(editsRef.current);

      if (editsArray.length > 0) {
        // 3. Apply custom text replacement masking and drawing
        const finalPdfBytes = await modifyPdfText(annotatedPdfBytes, editsArray, pageDimensions);
        downloadPdf(finalPdfBytes, file?.name || 'edited_document.pdf');
      } else {
        // Just download normal annotations if no text was replaced
        downloadPdf(annotatedPdfBytes, file?.name || 'edited_document.pdf');
      }
    } catch (err) {
      console.error('Export failed:', err);
      setError('Failed to export PDF with edits. Please check your modifications.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleIframeLoad = useCallback(() => {
    setTimeout(() => {
      setIsEditorReady(true);
      // Hide the default toolbar components inside the iframe if access is allowed
      try {
        const iframe = iframeRef.current;
        if (iframe?.contentDocument) {
          const doc = iframe.contentDocument;
          const downloadBtn = doc.getElementById('download');
          const secondaryDownloadBtn = doc.getElementById('secondaryDownload');
          if (downloadBtn) downloadBtn.style.display = 'none';
          if (secondaryDownloadBtn) secondaryDownloadBtn.style.display = 'none';
        }
      } catch (e) {
        console.warn('Could not access iframe content to hide native download buttons');
      }
    }, 1000);
  }, []);

  const handleClear = useCallback(() => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setFile(null);
    setPdfUrl(null);
    setError(null);
    setIsEditorReady(false);
    editsRef.current = {};
    setActiveSpanId(null);
    setActiveTool('select');
  }, [pdfUrl]);

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && pdfUrl && (
        <div className="space-y-4">
          <Card variant="outlined" size="sm" className="shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--color-foreground))]">{file.name}</p>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleClear}>
                {t('buttons.clear') || 'Clear'}
              </Button>
            </div>
          </Card>

          {/* Floating Sejda-style Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white dark:bg-zinc-900 border border-[hsl(var(--color-border))] rounded-xl shadow-md z-10 relative">
            <div className="flex flex-wrap items-center gap-1.5">
              <Button
                variant={activeTool === 'select' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('select')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <MousePointer className="w-4 h-4" />
                <span>{tTools('toolbar.select') || 'Select'}</span>
              </Button>

              <Button
                variant={activeTool === 'text' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('text')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <Type className="w-4 h-4" />
                <span>{tTools('toolbar.text') || 'Text'}</span>
              </Button>

              <Button
                variant={activeTool === 'link' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('link')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <LinkIcon className="w-4 h-4" />
                <span>{tTools('toolbar.link') || 'Link'}</span>
              </Button>

              {/* Forms Dropdown */}
              <div className="relative group">
                <Button
                  variant={activeTool === 'forms' ? 'primary' : 'ghost'}
                  size="sm"
                  className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>Forms</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
                <div className="absolute left-0 mt-1 hidden group-hover:block hover:block bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-md shadow-lg z-50 py-1 min-w-[150px]">
                  <button
                    onClick={() => setSubTool('forms', 'form-text')}
                    className="flex items-center w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    Text Field
                  </button>
                  <button
                    onClick={() => setSubTool('forms', 'form-checkbox')}
                    className="flex items-center w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    Checkbox
                  </button>
                  <button
                    onClick={() => setSubTool('forms', 'form-radio')}
                    className="flex items-center w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    Radio Button
                  </button>
                  <button
                    onClick={() => setSubTool('forms', 'form-dropdown')}
                    className="flex items-center w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    Dropdown
                  </button>
                </div>
              </div>

              <Button
                variant={activeTool === 'image' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('image')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <ImageIcon className="w-4 h-4" />
                <span>{tTools('toolbar.image') || 'Images'}</span>
              </Button>

              <Button
                variant={activeTool === 'sign' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('sign')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <Signature className="w-4 h-4" />
                <span>Sign</span>
              </Button>

              <Button
                variant={activeTool === 'whiteout' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setTool('whiteout')}
                className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
              >
                <Eraser className="w-4 h-4" />
                <span>Whiteout</span>
              </Button>

              {/* Shapes Dropdown */}
              <div className="relative group">
                <Button
                  variant={['rect', 'circle', 'line', 'arrow'].includes(activeTool) ? 'primary' : 'ghost'}
                  size="sm"
                  className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
                >
                  <Square className="w-4 h-4" />
                  <span>Shapes</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
                <div className="absolute left-0 mt-1 hidden group-hover:block hover:block bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-md shadow-lg z-50 py-1 min-w-[150px]">
                  <button
                    onClick={() => setTool('rect')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Square className="w-3.5 h-3.5 text-slate-500" />
                    Rectangle
                  </button>
                  <button
                    onClick={() => setTool('circle')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Circle className="w-3.5 h-3.5 text-slate-500" />
                    Circle
                  </button>
                  <button
                    onClick={() => setTool('line')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5 text-slate-500" />
                    Line
                  </button>
                  <button
                    onClick={() => setTool('arrow')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    Arrow
                  </button>
                </div>
              </div>

              {/* Annotate Dropdown */}
              <div className="relative group">
                <Button
                  variant={['highlight', 'underline', 'strikeout', 'draw'].includes(activeTool) ? 'primary' : 'ghost'}
                  size="sm"
                  className="flex items-center gap-1.5 text-xs font-semibold h-9 px-3 rounded-lg"
                >
                  <Highlighter className="w-4 h-4" />
                  <span>Annotate</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
                <div className="absolute left-0 mt-1 hidden group-hover:block hover:block bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-md shadow-lg z-50 py-1 min-w-[150px]">
                  <button
                    onClick={() => setTool('highlight')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Highlighter className="w-3.5 h-3.5 text-yellow-500" />
                    Highlight
                  </button>
                  <button
                    onClick={() => setTool('underline')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Underline className="w-3.5 h-3.5 text-blue-500" />
                    Underline
                  </button>
                  <button
                    onClick={() => setTool('strikeout')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Strikethrough className="w-3.5 h-3.5 text-red-500" />
                    Strikeout
                  </button>
                  <button
                    onClick={() => setTool('draw')}
                    className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-gray-100 dark:hover:bg-zinc-700 font-medium cursor-pointer"
                  >
                    <Paintbrush className="w-3.5 h-3.5 text-purple-500" />
                    Freehand Draw
                  </button>
                </div>
              </div>
            </div>

            {/* Export Action Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={handleExport}
              disabled={!isEditorReady || isProcessing}
              className="flex items-center gap-1.5 font-bold h-9 px-4 bg-emerald-600 hover:bg-emerald-700 border-none text-white shadow-sm rounded-lg cursor-pointer"
            >
              {isProcessing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>Export PDF</span>
            </Button>
          </div>

          {/* Sub-formatting Toolbar for Text Editing */}
          {activeTool === 'text' && (
            <div className="flex flex-wrap items-center gap-4 px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-[hsl(var(--color-border))] rounded-xl text-sm animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[hsl(var(--color-muted-foreground))]">Font:</span>
                <select
                  value={currentFontFamily}
                  onChange={(e) => handleFontFamilyChange(e.target.value)}
                  className="px-2 py-1 rounded border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold focus:outline-none"
                >
                  <option value="Helvetica, sans-serif">Sans-Serif (Helvetica)</option>
                  <option value="Times New Roman, Times, serif">Serif (Times)</option>
                  <option value="Courier New, Courier, monospace">Monospace (Courier)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[hsl(var(--color-muted-foreground))]">Size:</span>
                <div className="flex items-center border dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 h-7 overflow-hidden">
                  <button
                    onClick={() => handleFontSizeChange(currentFontSize - 1)}
                    className="px-2.5 py-1 hover:bg-gray-100 dark:hover:bg-zinc-700 text-xs font-bold border-r dark:border-zinc-700 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold">{currentFontSize}px</span>
                  <button
                    onClick={() => handleFontSizeChange(currentFontSize + 1)}
                    className="px-2.5 py-1 hover:bg-gray-100 dark:hover:bg-zinc-700 text-xs font-bold border-l dark:border-zinc-700 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[hsl(var(--color-muted-foreground))]">Color:</span>
                <div className="flex items-center gap-1.5">
                  {['rgb(0, 0, 0)', 'rgb(220, 38, 38)', 'rgb(37, 99, 235)', 'rgb(22, 163, 74)', 'rgb(255, 255, 255)'].map((c) => (
                    <button
                      key={c}
                      onClick={() => handleColorChange(c)}
                      className={`w-5 h-5 rounded-full border cursor-pointer ${c === 'rgb(255, 255, 255)' ? 'border-gray-300' : 'border-transparent'} relative flex items-center justify-center`}
                      style={{ backgroundColor: c }}
                    >
                      {currentTextColor === c && (
                        <Check className={`w-3 h-3 ${c === 'rgb(255, 255, 255)' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {activeSpanId && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDeleteTextEdit}
                  className="ml-auto text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-1 text-xs font-bold h-8 px-2.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Box</span>
                </Button>
              )}
            </div>
          )}

          {/* Active Tool Status Helpers */}
          <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] bg-zinc-50 dark:bg-zinc-900 border border-[hsl(var(--color-border))] rounded-lg px-3 py-2">
            {activeTool === 'select' && "Mode: Select. You can scroll, view, and interact with the PDF document."}
            {activeTool === 'text' && "Mode: Text. Click on any text to edit it, or click on empty space to type new text."}
            {['rect', 'circle', 'line', 'arrow'].includes(activeTool) && `Mode: Draw Shape (${activeTool}). Click and drag on pages to draw.`}
            {['highlight', 'underline', 'strikeout', 'draw'].includes(activeTool) && `Mode: Annotate (${activeTool}). Select or draw over content to highlight, strike, or underline.`}
            {activeTool === 'image' && "Mode: Images. Click anywhere on the pages to place stamp images."}
            {activeTool === 'sign' && "Mode: Signature. Place signature overlays on the pages."}
            {activeTool === 'whiteout' && "Mode: Whiteout. Draw a solid white box to erase elements."}
            {activeTool === 'link' && "Mode: Link. Draw rectangle boxes to hyperlink pages."}
          </div>

          {/* PDF Viewer iframe */}
          <div className="relative border border-[hsl(var(--color-border))] rounded-xl overflow-hidden bg-zinc-100/50 shadow-inner">
            <iframe
              ref={iframeRef}
              src={`/pdfjs-annotation-viewer/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`}
              className="w-full h-[750px] border-0"
              title="PDF Editor"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              onLoad={handleIframeLoad}
            />
            {!isEditorReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-zinc-950/80 z-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--color-primary))] mx-auto mb-3"></div>
                  <p className="text-sm font-semibold text-[hsl(var(--color-muted-foreground))]">{t('status.loading') || 'Loading...'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditPDFTool;
