/**
 * English tool content for SEO
 *
 * One entry per tool in config/tools.ts. Every entry owns its own `metaTitle`
 * so no two pages share a title tag, and its own `metaDescription` (kept under
 * 160 characters so it is never truncated by generateBaseMetadata).
 *
 * This file is also the fallback source for locales that have not been translated
 * yet, so the copy here has to stand on its own.
 */

import { ToolContent } from '@/types/tool';

/**
 * English tool content map
 * Each tool has: title, metaTitle, metaDescription, keywords, description,
 * howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentEn: Record<string, ToolContent> = {
  // ==================== ORGANIZE & MANAGE ====================

  'pdf-multi-tool': {
    title: 'PDF Multi Tool',
    metaTitle: 'PDF Multi Tool - Merge, Split & Rotate Pages',
    metaDescription: 'Merge, split, reorder, rotate, delete and extract PDF pages in one workspace. Nothing uploads anywhere - the work happens in your browser.',
    keywords: ['pdf multi tool', 'pdf page editor', 'merge split pdf', 'reorder pdf pages', 'all in one pdf tool'],
    description: `
      <p>Most PDF jobs are not one operation. You get a scanned contract where page 3 is upside down, pages 8 and 9 are blank, and the signature page needs to move to the front. Doing that across three separate tools means three uploads and three downloads.</p>
      <p>The Multi Tool puts every page operation on one screen. You see thumbnails of the whole document, drag pages into a new order, rotate the ones that came in sideways, delete what you do not need, drop in a blank page, or pull a range out into its own file. Changes stack up and you export once at the end.</p>
      <p>Everything runs in the browser tab. Your file is read by JavaScript on your own machine and never sent to a server, which matters when the document is a signed contract or a medical record.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open your PDF', description: 'Drag the file onto the page, or click to browse. You can load up to 10 files if you plan to merge them.' },
      { step: 2, title: 'Work on the page thumbnails', description: 'Drag to reorder, click the rotate handle on a crooked page, select pages to delete, or mark a range to extract.' },
      { step: 3, title: 'Stack up as many changes as you need', description: 'Reorder, then rotate, then delete. Nothing is committed until you export, so you can undo as you go.' },
      { step: 4, title: 'Export the result', description: 'Click Process and save the finished PDF. Extracted ranges come out as separate files.' },
    ],
    useCases: [
      { title: 'Fixing a fresh scan', description: 'A batch scanner produced 40 pages with three sideways and two blank. Rotate, delete, export - one pass instead of three tools.', icon: 'file-check' },
      { title: 'Assembling a submission', description: 'Combine a cover letter, a signed form and an appendix, then move the signature page to the front where the reviewer expects it.', icon: 'book-open' },
      { title: 'Splitting an archive', description: 'A 300-page scanned ledger becomes twelve monthly files, each extracted by page range in one sitting.', icon: 'archive' },
    ],
    faq: [
      { question: 'How many files can I load at once?', answer: 'Up to 10 documents when merging. There is no file size cap, though anything over a few hundred megabytes will depend on how much memory your browser can spare.' },
      { question: 'Do bookmarks survive?', answer: 'When merging, bookmarks from each source document are carried over into the combined file. Deleting a page removes any bookmark that pointed only at that page.' },
      { question: 'Can I undo a change before exporting?', answer: 'Yes. Nothing is written until you click Process, so reordering and deletions can be reversed while you work.' },
      { question: 'Is there a page limit?', answer: 'No hard limit. Documents in the hundreds of pages work fine; thumbnail rendering for a 1,000-page file takes a few seconds to settle.' },
    ],
  },

  'merge-pdf': {
    title: 'Merge PDF',
    metaTitle: 'Merge PDF - Combine PDF Files Into One',
    metaDescription: 'Combine PDF files into a single document and drag them into the order you want. Bookmarks are preserved and nothing is uploaded to a server.',
    keywords: ['merge pdf', 'combine pdf', 'join pdf files', 'pdf merger', 'concatenate pdf'],
    description: `
      <p>Merging is the most common PDF task there is, usually because a document arrived in pieces: a scanned signature page from one person, an invoice from accounting, and a cover sheet you wrote yourself.</p>
      <p>Load the files, drag the thumbnails until the order is right, and merge. Page content is copied across untouched, so text stays selectable and image quality is unchanged - there is no re-compression step. Bookmarks from each source file are kept and nested under the document they came from.</p>
      <p>The merge runs locally in your browser. Nothing is transmitted, which is the difference that matters when you are combining bank statements or HR paperwork.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your files', description: 'Drop in up to 100 PDFs at once, or add them a few at a time. Files appear as cards in the order they were loaded.' },
      { step: 2, title: 'Set the order', description: 'Drag the cards to rearrange. The number on each card shows where its pages will land in the finished document.' },
      { step: 3, title: 'Merge and save', description: 'Click Merge. The combined file downloads with the page count shown on the button so you can sanity-check it.' },
    ],
    useCases: [
      { title: 'Rebuilding a signed contract', description: 'The other party returned only pages 4 and 5 with signatures. Merge them back into your original in the right position.', icon: 'file-text' },
      { title: 'One PDF for an expense claim', description: 'Twelve receipt scans become a single attachment, because most expense systems accept one file per claim.', icon: 'receipt' },
      { title: 'Bundling a portfolio', description: 'Combine project write-ups, certificates and reference letters into one document a hiring manager can scroll through.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'Does merging reduce quality?', answer: 'No. Pages are copied at their original resolution with no re-encoding, so a merged file is usually close to the sum of its inputs in size.' },
      { question: 'What happens to bookmarks and links?', answer: 'Bookmarks are preserved and grouped by source document. Internal links that pointed within a source file are remapped to the new page numbers.' },
      { question: 'Can I merge files that are password protected?', answer: 'Not directly. Remove the password first with the Unlock PDF tool, then merge.' },
      { question: 'How many files at once?', answer: 'Up to 100. Beyond that, merge in groups and then merge the groups.' },
    ],
  },

  'split-pdf': {
    title: 'Split PDF',
    metaTitle: 'Split PDF - Separate Pages Into New Files',
    metaDescription: 'Split a PDF by page range, at fixed intervals, or into single pages. Preview thumbnails before you commit and download the pieces separately.',
    keywords: ['split pdf', 'separate pdf pages', 'divide pdf', 'pdf splitter', 'break up pdf'],
    description: `
      <p>Splitting solves two different problems. Sometimes you want one section out of a long document - chapter 4 of a manual, or the pages a lawyer actually asked for. Sometimes you want a big file broken into predictable chunks because an upload form rejects anything over 10 MB.</p>
      <p>This tool handles both. Enter explicit ranges like 1-3, 7, 12-20 to carve out specific sections, split every N pages for even chunks, or burst the document into one file per page. Thumbnails show you where each cut lands before you run it.</p>
      <p>Output pages keep their original text layer, embedded fonts and images. Splitting a searchable PDF gives you searchable pieces.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the document', description: 'Drop in the PDF. A thumbnail strip appears with page numbers so you can find your cut points.' },
      { step: 2, title: 'Choose how to split', description: 'Type page ranges, split every N pages, or select one file per page.' },
      { step: 3, title: 'Check the preview', description: 'The tool lists exactly which pages go into which output file. Adjust the ranges if a boundary is off by one.' },
      { step: 4, title: 'Download the pieces', description: 'Split and save. Multiple outputs arrive as a ZIP so you are not clicking through ten downloads.' },
    ],
    useCases: [
      { title: 'Sending only what was asked for', description: 'A request for the insurance section means pages 22-31 of a 90-page policy, not the whole thing.', icon: 'scissors' },
      { title: 'Getting under an upload limit', description: 'A portal caps attachments at 10 MB. Split every 25 pages and submit the parts.', icon: 'upload' },
      { title: 'Breaking up a batch scan', description: 'One scanner run produced 60 invoices in a single PDF. One file per page gives you 60 filable documents.', icon: 'files' },
    ],
    faq: [
      { question: 'How do I write page ranges?', answer: 'Comma-separated, with hyphens for spans: 1-3, 7, 12-20. Each comma-separated group becomes its own output file.' },
      { question: 'Do I get one file or several?', answer: 'One output per range or interval. When there is more than one, they are bundled into a ZIP.' },
      { question: 'Is the text still searchable afterwards?', answer: 'Yes. The text layer and embedded fonts are copied across, so search and copy-paste keep working.' },
      { question: 'What if I enter a page number that does not exist?', answer: 'The tool flags the range as out of bounds instead of silently producing an empty file.' },
    ],
  },

  'compress-pdf': {
    title: 'Compress PDF',
    metaTitle: 'Compress PDF - Reduce File Size Online',
    metaDescription: 'Shrink PDF file size by downsampling images and stripping unused data. Pick a quality level, see the before and after, and keep text sharp.',
    keywords: ['compress pdf', 'reduce pdf size', 'shrink pdf', 'pdf optimizer', 'make pdf smaller'],
    description: `
      <p>An oversized PDF is almost always an image problem. A phone photo of a document lands at 4,000 pixels wide, gets embedded at full resolution, and a three-page file balloons to 30 MB. The text itself contributes almost nothing.</p>
      <p>Compression here works on the images: they are downsampled to a sensible DPI for reading or printing and re-encoded, while the text layer and vector graphics are left alone. Unused objects, orphaned fonts and stale metadata get dropped too, which often accounts for a surprising amount of a file grown over many edit-and-resave cycles.</p>
      <p>You choose the trade-off. Low compression is safe for anything going to a printer; high is for email attachments and web upload forms where a slightly softer scan is fine. The tool reports both sizes so you can judge whether the result was worth it.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files. Each is compressed independently with the same settings.' },
      { step: 2, title: 'Pick a quality level', description: 'Low for print-safe savings, medium for general use, high when you need to hit an attachment limit.' },
      { step: 3, title: 'Compress and compare', description: 'The result shows original size, new size and the percentage saved before you download.' },
    ],
    useCases: [
      { title: 'Getting past an email limit', description: 'A 28 MB scanned lease will not send. High compression typically brings that under 5 MB with the text still legible.', icon: 'mail' },
      { title: 'Publishing to a website', description: 'A brochure that loads in two seconds instead of fifteen, because the images no longer carry print resolution nobody will use.', icon: 'globe' },
      { title: 'Cleaning up after many edits', description: 'A file edited and resaved twenty times carries dead objects. Compressing rebuilds it and drops the debris.', icon: 'zap' },
    ],
    faq: [
      { question: 'How much smaller will my file get?', answer: 'It depends entirely on what is inside. Image-heavy scans often drop 60-90%. A text-only PDF may barely change, because there was nothing bulky to remove.' },
      { question: 'Will the text get blurry?', answer: 'No. Text is stored as vectors and fonts, not pixels, and is not touched. Only embedded images are downsampled.' },
      { question: 'Can I still print the result?', answer: 'At low or medium settings, yes. High compression targets screen reading, so a large-format print may show softness in photos.' },
      { question: 'Is compression reversible?', answer: 'No. Image data that is thrown away is gone, so keep your original if you may need the full-resolution version.' },
    ],
  },

  'extract-pages': {
    title: 'Extract Pages',
    metaTitle: 'Extract PDF Pages Into a New File',
    metaDescription: 'Select the PDF pages you want and save them as a new document. Pick pages from thumbnails or type a range. The original stays untouched.',
    keywords: ['extract pdf pages', 'pull pages from pdf', 'save pdf pages', 'copy pdf pages', 'select pdf pages'],
    description: `
      <p>Extracting is the opposite of deleting. Instead of naming the pages you do not want, you name the ones you do - useful when you need five pages out of two hundred and counting the rest would be tedious.</p>
      <p>Click page thumbnails to build a selection, or type a range if you already know the numbers. The pages come out in the order you selected them, so you can reorder while extracting: choosing 5, 2, 9 gives you a three-page file in exactly that sequence.</p>
      <p>Your source file is never modified. Extraction reads it and writes a new document, so the original is still sitting there if you picked the wrong pages.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open the PDF', description: 'Drop in the file. Every page appears as a numbered thumbnail.' },
      { step: 2, title: 'Pick your pages', description: 'Click thumbnails to select, or type ranges like 4-8, 15. Selected pages are highlighted with their position in the output.' },
      { step: 3, title: 'Choose one file or many', description: 'Combine the selection into a single PDF, or write each selected page to its own file.' },
      { step: 4, title: 'Extract and download', description: 'Save the result. Multiple files arrive as a ZIP.' },
    ],
    useCases: [
      { title: 'Answering a records request', description: 'Someone asked for the pages mentioning their account. Extract those eleven pages and send nothing else.', icon: 'ungroup' },
      { title: 'Pulling a chapter for a class', description: 'Twenty pages out of a textbook scan, saved as a standalone handout.', icon: 'book-open' },
      { title: 'Isolating the signature pages', description: 'Extract the executed pages of a contract to file with the registry, leaving the exhibits behind.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'What is the difference between this and Split PDF?', answer: 'Split cuts a document into consecutive chunks. Extract picks arbitrary pages, in any order, into one new file. Use Extract when your selection is not a clean run of pages.' },
      { question: 'Does the original file change?', answer: 'No. A new document is written and your source PDF is left exactly as it was.' },
      { question: 'Can I control the page order in the output?', answer: 'Yes. Pages appear in the order you clicked them, so selecting 9, 3, 1 produces that sequence.' },
      { question: 'Are form fields and annotations carried over?', answer: 'Annotations on the extracted pages come across. Form fields are copied, though a field that was part of a group spanning removed pages may lose its grouping.' },
    ],
  },

  'organize-pdf': {
    title: 'Organize PDF',
    metaTitle: 'Organize PDF - Reorder & Rearrange Pages',
    metaDescription: 'Drag PDF pages into a new order, duplicate the ones you need twice, and delete the rest. A visual page manager that runs in your browser.',
    keywords: ['organize pdf', 'reorder pdf pages', 'rearrange pdf', 'move pdf pages', 'sort pdf pages'],
    description: `
      <p>Page order goes wrong in predictable ways. A duplex scanner puts all the fronts first and all the backs after. Someone appends the cover page at the end. A form needs its instruction sheet moved behind the part people actually fill in.</p>
      <p>This is a drag-and-drop page manager. Every page is a thumbnail you can pick up and drop somewhere else. You can duplicate a page when the same terms sheet needs to appear in two places, and delete pages you no longer want, all in the same session.</p>
      <p>The layout is a grid, so a 60-page document is still navigable - you are not scrolling through a single long column looking for page 47.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the document', description: 'Drop in your PDF. Pages render as a thumbnail grid with page numbers.' },
      { step: 2, title: 'Drag pages where they belong', description: 'Pick up a thumbnail and drop it at its new position. The rest shift to make room.' },
      { step: 3, title: 'Duplicate or delete as needed', description: 'Use the copy handle to repeat a page, or the delete handle to drop it from the output.' },
      { step: 4, title: 'Save the new order', description: 'Click Process. The rebuilt PDF downloads with pages in the sequence shown on screen.' },
    ],
    useCases: [
      { title: 'Fixing a duplex scan', description: 'Pages came out as 1, 3, 5 then 2, 4, 6. Interleave them back into reading order before anyone else sees the file.', icon: 'files' },
      { title: 'Moving the cover to the front', description: 'The designer sent the cover as the last page. One drag and the document opens correctly.', icon: 'layout' },
      { title: 'Repeating a page in a pack', description: 'The signature block needs to appear after each of three schedules. Duplicate it twice and position the copies.', icon: 'copy' },
    ],
    faq: [
      { question: 'Can I duplicate the same page more than once?', answer: 'Yes. Each duplicate is an independent copy you can position separately.' },
      { question: 'Do internal links still work after reordering?', answer: 'Links that pointed to a page within the document are remapped to follow that page to its new position.' },
      { question: 'Is there a limit on document length?', answer: 'No fixed limit. Very long documents take a moment to render all thumbnails, after which dragging is responsive.' },
      { question: 'Can I undo a drag?', answer: 'Yes. Nothing is written until you click Process, so you can keep rearranging or reload to start over.' },
    ],
  },

  'delete-pages': {
    title: 'Delete Pages',
    metaTitle: 'Delete PDF Pages - Remove Pages From a PDF',
    metaDescription: 'Remove unwanted pages from a PDF. Click the pages to drop, or type a range, then save a clean copy. Everything runs locally in your browser.',
    keywords: ['delete pdf pages', 'remove pdf pages', 'erase pdf page', 'drop pages from pdf', 'pdf page remover'],
    description: `
      <p>Scanned documents collect junk: the blank back of a single-sided form, the fax cover sheet, the separator page the copier inserted between jobs. None of it belongs in the version you file or send on.</p>
      <p>Select the pages to remove by clicking thumbnails or typing a range, and the tool writes a copy without them. Remaining pages keep their content exactly as it was - no re-compression, no shifted text.</p>
      <p>If it turns out you want to keep more than you remove, the Extract Pages tool approaches the same job from the other direction and will be faster to use.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open the PDF', description: 'Drop in the file to see every page as a numbered thumbnail.' },
      { step: 2, title: 'Mark pages for removal', description: 'Click the pages you want gone, or type ranges like 2, 5-7, 12. Marked pages are dimmed so you can see what will survive.' },
      { step: 3, title: 'Check the count', description: 'The tool shows how many pages will remain. Worth a glance before committing.' },
      { step: 4, title: 'Save the clean copy', description: 'Click Delete and download. Your original file is untouched.' },
    ],
    useCases: [
      { title: 'Stripping blank backs', description: 'A single-sided document scanned in duplex mode has 30 blank pages. Remove them and halve the file.', icon: 'trash-2' },
      { title: 'Removing internal notes', description: 'Drop the two pages of internal commentary before sending the report to the client.', icon: 'eye-off' },
      { title: 'Clearing separator sheets', description: 'The copier inserted a marker page between each batch. Delete them all in one selection.', icon: 'file-minus' },
    ],
    faq: [
      { question: 'Can I get deleted pages back?', answer: 'Not from the new file, but your original PDF is never modified - reopen it and the pages are still there.' },
      { question: 'When should I use Extract Pages instead?', answer: 'When you are keeping fewer pages than you are removing. Naming five keepers beats naming ninety-five rejects.' },
      { question: 'Does deleting pages shrink the file?', answer: 'Usually, especially if the removed pages held images. Run Compress PDF afterwards to reclaim any leftover unreferenced data.' },
      { question: 'What happens to bookmarks pointing at deleted pages?', answer: 'Bookmarks that targeted a removed page are dropped. The rest are remapped to the new page positions.' },
    ],
  },

  // ==================== EDIT & ANNOTATE ====================

  'edit-pdf': {
    title: 'Edit PDF',
    metaTitle: 'Free PDF Editor - Annotate, Highlight & Redact',
    metaDescription: 'Add text, highlights, shapes, comments and images to a PDF, or redact what should not be there. A browser-based editor with no upload step.',
    keywords: ['edit pdf', 'pdf editor', 'annotate pdf', 'highlight pdf', 'add text to pdf'],
    description: `
      <p>PDFs were designed to be final, which is exactly why editing one is awkward. Most of the time you do not need to rewrite the document - you need to mark it up: highlight the clause that matters, add a note explaining why, fill in a date that was left blank, or black out an account number.</p>
      <p>This editor gives you those tools directly on the page. Draw highlights over text, add free text anywhere, drop in rectangles and arrows to point at something, attach comments, insert an image such as a logo or a photo of a signature, and search the text layer to find what you are looking for in a long document.</p>
      <p>Redaction is a real removal, not a black rectangle laid on top - the underlying text is taken out so it cannot be copied back out of the file. That distinction is the one that gets organisations in trouble.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open your document', description: 'Drop in the PDF. It renders page by page with a toolbar down the side.' },
      { step: 2, title: 'Pick a tool and mark up the page', description: 'Highlight, text, shape, comment, image or redact. Click or drag directly on the page where you want it.' },
      { step: 3, title: 'Adjust what you added', description: 'Select any annotation to move, resize, recolour or delete it. Use search to jump to the next place that needs attention.' },
      { step: 4, title: 'Save the edited PDF', description: 'Download the result. Annotations are written into the file and redactions are applied permanently.' },
    ],
    useCases: [
      { title: 'Reviewing a contract', description: 'Highlight the payment terms, add a comment questioning the notice period, and send it back without printing anything.', icon: 'pocket-knife' },
      { title: 'Filling a form that has no fields', description: 'A scanned application form has no interactive fields. Add text boxes over the blanks and type into them.', icon: 'edit' },
      { title: 'Redacting before disclosure', description: 'Black out account numbers and home addresses so the underlying text is gone, not just hidden.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Can I edit the original text of the document?', answer: 'You can cover text and add your own on top, which handles most corrections. Reflowing existing paragraphs is not supported - PDFs store text as positioned glyphs, not editable flowing text.' },
      { question: 'Is redaction actually secure?', answer: 'Yes. The text objects under the redaction are removed from the file, so the content cannot be recovered by selecting or copying. A black shape drawn in other tools can often be deleted to reveal what is underneath.' },
      { question: 'Do my annotations open correctly in Acrobat?', answer: 'Yes. Highlights, notes and shapes are written as standard PDF annotations that any conforming reader displays.' },
      { question: 'Can other people edit my annotations later?', answer: 'By default yes, since they remain live annotation objects. Run Flatten PDF afterwards to bake them into the page.' },
    ],
  },

  'sign-pdf': {
    title: 'Sign PDF',
    metaTitle: 'Sign PDF Online - Draw or Type a Signature',
    metaDescription: 'Sign a PDF by drawing with your mouse or finger, typing your name, or uploading an image of your signature. Place it anywhere on any page.',
    keywords: ['sign pdf', 'electronic signature pdf', 'e-sign pdf', 'add signature to pdf', 'signature on pdf'],
    description: `
      <p>The print-sign-scan cycle wastes fifteen minutes and produces a worse-looking document than the one you started with. Signing on screen skips all of it.</p>
      <p>There are three ways to produce the signature. Draw it with a mouse, trackpad or finger, which looks most like a real signature on a touchscreen. Type your name and pick from several handwriting-style fonts, which is the fastest option. Or upload a photo or scan of your existing signature, and the tool removes the white background so it sits cleanly on the page.</p>
      <p>Once you have a signature, drag it to position, resize it to match the signature line, and place it as many times as the document needs - initials on each page and a full signature at the end is a common pattern.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open the document', description: 'Drop in the PDF you need to sign.' },
      { step: 2, title: 'Create your signature', description: 'Draw it, type it, or upload an image. Uploaded signatures get their background removed automatically.' },
      { step: 3, title: 'Place and size it', description: 'Drag the signature onto the signature line and pull the corner handles until the scale looks right. Add the date alongside if needed.' },
      { step: 4, title: 'Save the signed PDF', description: 'Download the result. The signature is drawn into the page, not left as a movable object.' },
    ],
    useCases: [
      { title: 'Returning a contract same-day', description: 'Sign, date and email back in two minutes instead of finding a printer and a scanner.', icon: 'pen-tool' },
      { title: 'Signing every page', description: 'Some agreements need initials on each page. Place the signature once and repeat it down the document.', icon: 'files' },
      { title: 'Forms for school or a landlord', description: 'Permission slips and tenancy paperwork signed from a phone, with a finger-drawn signature that looks the part.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Is this legally binding?', answer: 'In many jurisdictions a typed or drawn electronic signature is valid for ordinary agreements, but it varies by country and document type. For anything where identity needs cryptographic proof, use the Digital Signature tool with a certificate instead.' },
      { question: 'What is the difference from a digital signature?', answer: 'This places a visible image of your signature. A digital signature adds a cryptographic seal from an X.509 certificate that proves who signed and detects any later change to the file.' },
      { question: 'Does my signature get stored anywhere?', answer: 'No. It exists only in your browser tab for the length of the session. Nothing is uploaded or saved on a server.' },
      { question: 'Can someone move my signature after I save?', answer: 'No. It is drawn into the page content rather than left as a draggable annotation.' },
    ],
  },

  'crop-pdf': {
    title: 'Crop PDF',
    metaTitle: 'Crop PDF Pages - Trim Margins Online',
    metaDescription: 'Crop PDF pages to remove wide margins or scanner edges. Drag a crop box on the page or enter exact measurements, and apply to every page.',
    keywords: ['crop pdf', 'trim pdf margins', 'cut pdf edges', 'resize pdf page', 'remove pdf whitespace'],
    description: `
      <p>Two things create the need to crop. Academic PDFs come with enormous print margins that waste half the screen on a tablet. Scans come with a black or grey border where the document did not fill the glass, plus whatever was sitting next to it on the platen.</p>
      <p>Drag a crop box over the page preview, or type exact margin values if you need it precise and repeatable. The crop can be applied to every page at once, which is what you want for a uniform document, or to a range when the first page has a different layout.</p>
      <p>Cropping changes the visible page box rather than deleting content, so text stays selectable and searchable right up to the new edge. Nothing is rasterised.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. The first page renders with a draggable crop box.' },
      { step: 2, title: 'Set the crop area', description: 'Drag the handles, or enter top, bottom, left and right margins in millimetres or points for exact control.' },
      { step: 3, title: 'Choose which pages', description: 'Apply to all pages, or restrict to a range if the cover needs different treatment.' },
      { step: 4, title: 'Crop and download', description: 'Save the trimmed PDF. Text within the visible area remains fully selectable.' },
    ],
    useCases: [
      { title: 'Reading papers on a tablet', description: 'Trimming the margins off a two-column journal article roughly doubles the usable text size on a 10-inch screen.', icon: 'crop' },
      { title: 'Cleaning up scans', description: 'Remove the black border and the edge of the desk that came through when the page did not cover the scanner glass.', icon: 'scan' },
      { title: 'Standardising a bundle', description: 'Pages from several sources cropped to one consistent size so the printed pack looks deliberate.', icon: 'layout' },
    ],
    faq: [
      { question: 'Is the cropped-off content deleted?', answer: 'Cropping adjusts the page box, so hidden content technically remains in the file. If the margins contained something sensitive, redact it first, then crop.' },
      { question: 'Can I crop each page differently?', answer: 'Apply one crop to a range, then run the tool again with different values for another range. A single pass uses one crop box.' },
      { question: 'Does cropping reduce file size?', answer: 'Barely. The content is still there, just not displayed. Use Compress PDF if size is the goal.' },
      { question: 'Will the text still be searchable?', answer: 'Yes. Cropping does not rasterise anything - the text layer is untouched.' },
    ],
  },

  'bookmark': {
    title: 'PDF Bookmarks',
    metaTitle: 'Edit PDF Bookmarks - Add & Manage Outlines',
    metaDescription: 'Add, rename, nest and delete PDF bookmarks so long documents are navigable. Import an outline from a text list or export the existing one.',
    keywords: ['pdf bookmarks', 'pdf outline', 'add bookmarks to pdf', 'edit pdf bookmarks', 'pdf navigation pane'],
    description: `
      <p>A 200-page PDF with no bookmarks is a document people scroll through and give up on. The bookmark pane is the table of contents that actually works - one click and the reader is at section 7.3.</p>
      <p>Here you can add bookmarks pointing at any page, rename the ones that came through as Untitled, drag them into a hierarchy so subsections sit under their parents, and delete the noise. If you already have an outline written down, import it as an indented text list instead of clicking through 80 entries.</p>
      <p>You can also export the existing outline, which is a quick way to audit what a document claims to contain before you send it to print.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Any existing bookmark tree is read and displayed.' },
      { step: 2, title: 'Add or edit entries', description: 'Create a bookmark, give it a title, and set the page it jumps to. Double-click an existing title to rename it.' },
      { step: 3, title: 'Build the hierarchy', description: 'Drag entries onto each other to nest them. Depth is unlimited, though two or three levels is what readers actually use.' },
      { step: 4, title: 'Save the outline', description: 'Export the PDF with the new bookmark tree embedded. It opens in the navigation pane of any reader.' },
    ],
    useCases: [
      { title: 'Making a manual usable', description: 'A 180-page product manual gets one bookmark per chapter and procedure, turning it into something support staff can navigate mid-call.', icon: 'bookmark' },
      { title: 'Court and tender bundles', description: 'Many filing rules require a bookmarked index. Build one per tab so the reviewer can jump straight to exhibit C.', icon: 'scale' },
      { title: 'Rebuilding a lost outline', description: 'A conversion stripped the outline. Import your chapter list as indented text and restore it in one step.', icon: 'list' },
    ],
    faq: [
      { question: 'What format does the import expect?', answer: 'A plain text list where indentation sets the level and a trailing number sets the target page, for example "Introduction 1" then an indented "Background 3".' },
      { question: 'How deep can bookmarks nest?', answer: 'There is no enforced limit. Most readers display three or four levels comfortably before the pane gets cramped.' },
      { question: 'Are bookmarks the same as a table of contents page?', answer: 'No. Bookmarks live in the reader sidebar. A table of contents is a printed page inside the document - use the Table of Contents tool for that.' },
      { question: 'Will bookmarks survive if I merge this file later?', answer: 'Yes. The merge tool preserves bookmark trees and nests each source outline under its own heading.' },
    ],
  },

  'table-of-contents': {
    title: 'Table of Contents',
    metaTitle: 'Add a Table of Contents Page to a PDF',
    metaDescription: 'Generate a printable table of contents page for a PDF, built from its bookmarks or from entries you type. Each line links to its page.',
    keywords: ['pdf table of contents', 'add toc to pdf', 'generate pdf contents page', 'pdf index page', 'contents page pdf'],
    description: `
      <p>Bookmarks help on screen. They do nothing once a document is printed and sitting in a binder, which is why reports, tenders and dissertations still need a contents page inside the file.</p>
      <p>This tool builds that page. If the PDF already has a bookmark tree, the entries and page numbers are pulled from it automatically. If not, type the entries yourself. The generated page is inserted at the front, with dot leaders running out to right-aligned page numbers, and each line is a live link when read on screen.</p>
      <p>You can control the heading text, indentation per level, and whether to include page numbers - useful when the document will be repaginated later.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the document', description: 'Drop in the PDF. Existing bookmarks are detected and offered as the source for entries.' },
      { step: 2, title: 'Choose or type the entries', description: 'Generate from bookmarks, or enter titles and page numbers by hand for documents with no outline.' },
      { step: 3, title: 'Set the style', description: 'Pick the heading, indent depth for subsections, and whether dot leaders and page numbers appear.' },
      { step: 4, title: 'Insert and download', description: 'The contents page is added at the front and the updated PDF downloads.' },
    ],
    useCases: [
      { title: 'Reports that get printed', description: 'A board pack goes out on paper. The contents page is the only navigation a reader in the room has.', icon: 'file-text' },
      { title: 'Theses and formal submissions', description: 'Most style guides require a contents page with page numbers. Generate it from bookmarks instead of typing it twice.', icon: 'graduation-cap' },
      { title: 'Merged bundles', description: 'After combining eight documents, add a contents page so readers know what the 200 pages contain.', icon: 'layers' },
    ],
    faq: [
      { question: 'Does the contents page shift my page numbers?', answer: 'Yes - inserting a page pushes everything back by one. The generated entries account for this, so the numbers printed on the page are correct for the new document.' },
      { question: 'Are the entries clickable?', answer: 'Yes. Each line links to its target page when the file is opened in a reader, and prints as plain text on paper.' },
      { question: 'What if I have no bookmarks?', answer: 'Type the entries manually, or build a bookmark tree first with the Bookmarks tool and then generate from it.' },
      { question: 'Can the contents run to more than one page?', answer: 'Yes. Long outlines flow onto additional pages automatically and the page numbering adjusts.' },
    ],
  },

  'page-numbers': {
    title: 'Add Page Numbers',
    metaTitle: 'Add Page Numbers to a PDF Online',
    metaDescription: 'Stamp page numbers onto a PDF. Choose position, a format such as Page 3 of 40, a starting number, and which pages to skip.',
    keywords: ['add page numbers to pdf', 'number pdf pages', 'pdf pagination', 'page numbering pdf', 'stamp page numbers'],
    description: `
      <p>Merged documents almost never carry sensible page numbers. Each source file counted from 1, so the combined 120-page bundle has a dozen page 1s and no way for anyone to cite it.</p>
      <p>This stamps a fresh, continuous sequence onto the pages. Pick a corner or centre position, choose the format - a bare numeral, 3 of 40, Page 3, or a custom pattern - and set the font size and margin so the number sits clear of existing content.</p>
      <p>Two options matter more than they sound. Starting number lets you continue from a previous volume, and skip pages lets the cover and contents stay unnumbered while page 1 lands on the first page of real content, which is what most style guides ask for.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want numbered.' },
      { step: 2, title: 'Place the number', description: 'Choose one of six positions and adjust the margin so the number clears any existing footer.' },
      { step: 3, title: 'Set format and range', description: 'Pick the number format, the starting value, and any pages to leave unnumbered.' },
      { step: 4, title: 'Apply and save', description: 'Check the preview, then stamp the numbers and download.' },
    ],
    useCases: [
      { title: 'Numbering a merged bundle', description: 'Eight documents combined into one now have a single continuous sequence a reviewer can reference.', icon: 'hash' },
      { title: 'Court and discovery paperwork', description: 'Filings often require every page numbered consecutively across the whole bundle, exhibits included.', icon: 'scale' },
      { title: 'Front matter that stays unnumbered', description: 'Skip the cover and contents so numbering starts at the introduction, as academic style guides require.', icon: 'book-open' },
    ],
    faq: [
      { question: 'Can I start at a number other than 1?', answer: 'Yes. Set any starting value - useful when the document continues from an earlier volume that ended at page 84.' },
      { question: 'Will the number sit on top of existing text?', answer: 'It can if the page already has a footer. Increase the margin or move to a different corner; the preview shows the collision before you commit.' },
      { question: 'Can I skip the cover page?', answer: 'Yes. Excluded pages get no stamp, and you can decide whether they still consume a number in the sequence.' },
      { question: 'Are stamped numbers editable later?', answer: 'They become part of the page content, so they are not text you can re-edit. Keep your unnumbered original if you expect to repaginate.' },
    ],
  },

  'add-watermark': {
    title: 'Add Watermark',
    metaTitle: 'Add a Watermark to a PDF - Text or Image',
    metaDescription: 'Stamp text or an image watermark across PDF pages. Control opacity, rotation, position and which pages get marked.',
    keywords: ['add watermark to pdf', 'pdf watermark', 'watermark pdf online', 'draft stamp pdf', 'confidential watermark'],
    description: `
      <p>A watermark answers a question before anyone asks it: is this the final version, and am I allowed to pass it on? A diagonal DRAFT across every page stops a working copy being quoted as final, and a company logo makes an unauthorised copy obvious.</p>
      <p>Add either text or an image. Text watermarks take any string, font size, colour and rotation angle - 45 degrees across the middle is the classic. Image watermarks accept a PNG with transparency, which is what you want for a logo.</p>
      <p>Opacity is the setting that matters. Around 15 to 25 percent keeps the mark clearly visible while leaving the text underneath readable. You can also tile the mark across the page, or restrict it to specific pages so the cover stays clean.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open your PDF', description: 'Drop in the document you want to mark.' },
      { step: 2, title: 'Choose text or image', description: 'Type the watermark text, or upload a PNG or JPG. Transparent PNGs work best for logos.' },
      { step: 3, title: 'Position and fade it', description: 'Set rotation, position, size and opacity. The live preview shows exactly what lands on the page.' },
      { step: 4, title: 'Pick pages and apply', description: 'Mark every page or a chosen range, then apply and download.' },
    ],
    useCases: [
      { title: 'Marking a draft', description: 'A diagonal DRAFT at 20 percent opacity across a contract under negotiation, so no one signs the wrong version.', icon: 'droplet' },
      { title: 'Branding a proposal', description: 'A faint logo in the corner of every page of a client deliverable.', icon: 'image' },
      { title: 'Discouraging redistribution', description: 'Stamp the recipient name across a licensed report so a forwarded copy traces back.', icon: 'shield' },
    ],
    faq: [
      { question: 'What opacity should I use?', answer: 'Between 15 and 25 percent for most documents. Below 10 it disappears on screen; above 40 it starts to fight with the text underneath.' },
      { question: 'Can a watermark be removed later?', answer: 'It is drawn into the page content, so it is not a layer that toggles off. Someone determined could still edit it out - a watermark deters casual reuse rather than enforcing anything.' },
      { question: 'Will it sit behind the text or on top?', answer: 'You choose. Behind reads more cleanly; on top is harder to crop out of a screenshot.' },
      { question: 'Can I watermark only some pages?', answer: 'Yes. Enter a page range, which is how most people leave the cover and contents unmarked.' },
    ],
  },

  'header-footer': {
    title: 'Header and Footer',
    metaTitle: 'Add Headers & Footers to a PDF',
    metaDescription: 'Add header and footer text to PDF pages - document titles, dates, page numbers or file references, positioned left, centre or right.',
    keywords: ['pdf header footer', 'add header to pdf', 'add footer to pdf', 'pdf running head', 'document reference pdf'],
    description: `
      <p>Headers and footers carry the information a page needs to make sense on its own once it is printed and separated from the rest: which document it belongs to, which version, which date, and who produced it.</p>
      <p>You get three slots each in the header and footer - left, centre and right - and can put static text or a dynamic field in any of them. Dynamic fields fill themselves in per page: the page number, the total page count, or the date in your chosen format.</p>
      <p>Font, size and margin are adjustable, so the added text can be sized down to sit unobtrusively above or below the existing layout rather than crowding it.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want to annotate.' },
      { step: 2, title: 'Fill in the slots', description: 'Type text into any of the six positions. Insert page number, page count or date fields where you want them filled automatically.' },
      { step: 3, title: 'Set the type', description: 'Choose font, size and margin so the text clears the existing content.' },
      { step: 4, title: 'Apply and download', description: 'Check the preview and save the updated document.' },
    ],
    useCases: [
      { title: 'Version control on paper', description: 'A footer reading v2.4, reviewed 14 March means nobody works from last month printout.', icon: 'file-text' },
      { title: 'Running heads in long reports', description: 'The chapter title in the header keeps readers oriented 90 pages in.', icon: 'book-open' },
      { title: 'File references for archiving', description: 'A case or matter number in every footer, so a loose page can always be traced back.', icon: 'archive' },
    ],
    faq: [
      { question: 'Which dynamic fields are available?', answer: 'Current page, total pages, and the date in several formats. They are resolved per page when the file is written.' },
      { question: 'Can the header differ on the first page?', answer: 'Apply to a page range to exclude the cover, then run the tool again with different text for that page.' },
      { question: 'Will this overlap the existing content?', answer: 'It can on tightly laid out pages. Increase the margin or reduce the font size; the preview shows the result first.' },
      { question: 'Do I use this or the page numbers tool?', answer: 'Use Add Page Numbers if numbering is all you need - it has more control over sequences. Use this when you also want titles, dates or references.' },
    ],
  },

  'invert-colors': {
    title: 'Invert PDF Colors',
    metaTitle: 'Invert PDF Colors - Dark Mode for PDFs',
    metaDescription: 'Flip a PDF to light text on a dark background for comfortable night reading, with the option to leave photos and diagrams untouched.',
    keywords: ['invert pdf colors', 'pdf dark mode', 'negative pdf', 'night mode pdf', 'white text on black pdf'],
    description: `
      <p>Reading a bright white PDF on a screen at night is tiring, and unlike a web page a PDF has no dark mode of its own. Inverting the colours produces light text on a dark background you can read for an hour without squinting.</p>
      <p>The inversion is applied to the page content, so the file itself is dark - it stays dark in any reader, on any device, including e-readers that have no dark mode setting.</p>
      <p>The option to preserve images is worth using. Inverting a photograph turns it into a negative, which is rarely what anyone wants. Leaving images alone inverts the text and background while photos and logos keep their real colours.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load your PDF', description: 'Drop in the document you want to darken.' },
      { step: 2, title: 'Decide about images', description: 'Turn on preserve images to keep photos and diagrams in their original colours while the text inverts.' },
      { step: 3, title: 'Check a page', description: 'The preview shows the inverted result so you can confirm the contrast is comfortable.' },
      { step: 4, title: 'Convert and download', description: 'Save the dark version. Your original stays as it was.' },
    ],
    useCases: [
      { title: 'Reading in bed', description: 'A 400-page dark-background novel or paper, easier on the eyes than a white page at full brightness.', icon: 'moon' },
      { title: 'E-reader comfort', description: 'Devices with no dark mode will still display a PDF that is already dark.', icon: 'tablet' },
      { title: 'Light sensitivity', description: 'Readers with migraine or photophobia often find inverted contrast the difference between readable and not.', icon: 'eye' },
    ],
    faq: [
      { question: 'Is the text still selectable?', answer: 'Yes. Only the rendered colours change; the text layer, search and copy-paste are unaffected.' },
      { question: 'Why did my photos come out looking strange?', answer: 'They were inverted along with everything else. Re-run with preserve images enabled.' },
      { question: 'Can I invert it back?', answer: 'Running the tool on an inverted file returns it close to the original, though any lossy image re-encoding will not undo perfectly. Keeping your original is safer.' },
      { question: 'Should I print the inverted version?', answer: 'Almost certainly not - it would use an enormous amount of toner. Print the original and keep the inverted copy for screens.' },
    ],
  },

  'background-color': {
    title: 'Change Background Color',
    metaTitle: 'Change PDF Background Color Online',
    metaDescription: 'Set a background colour behind PDF pages - a warm cream for easier reading, or a tint to mark a document as a working copy.',
    keywords: ['pdf background color', 'change pdf background', 'add background to pdf', 'tint pdf pages', 'cream background pdf'],
    description: `
      <p>Pure white at full screen brightness is the harshest background there is. A soft cream or pale grey behind the text lowers the contrast a little and makes long reading sessions noticeably easier, which is why e-readers offer sepia modes.</p>
      <p>This tool paints a colour behind the existing page content. Text, images and vector graphics sit on top unchanged, so nothing is obscured - the white of the page simply becomes the colour you picked.</p>
      <p>A tint also works as a quiet status marker. A pale yellow background on every page of a working draft is impossible to confuse with the white final version, even at a glance across a desk.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want to tint.' },
      { step: 2, title: 'Choose a colour', description: 'Pick from the presets or enter a hex value. Light tints work best - anything dark will fight with black text.' },
      { step: 3, title: 'Select the pages', description: 'Apply to the whole document or a specific range.' },
      { step: 4, title: 'Apply and save', description: 'Check the preview and download the tinted PDF.' },
    ],
    useCases: [
      { title: 'Comfortable long reading', description: 'A cream background on a 200-page report, so an afternoon of reading is less punishing than pure white.', icon: 'palette' },
      { title: 'Marking working copies', description: 'Every draft gets a pale yellow page, so the white version on the desk is unmistakably the final one.', icon: 'file-text' },
      { title: 'Colour-coding a bundle', description: 'Different tints per section make it easy to find the right part of a thick printed pack by flipping the edge.', icon: 'layers' },
    ],
    faq: [
      { question: 'Does this hide any content?', answer: 'No. The colour is drawn behind the existing page, so text and images stay fully visible on top.' },
      { question: 'Which colours actually work?', answer: 'Light, low-saturation tints. Cream, pale grey and soft blue keep black text readable; mid or dark tones do not.' },
      { question: 'Will printing use more ink?', answer: 'Yes - a tinted background means full page coverage on every sheet. Print the original and keep the tinted copy for screen reading.' },
      { question: 'How is this different from inverting colours?', answer: 'Inverting flips every colour to its opposite. This only changes what sits behind the content, leaving the text its original colour.' },
    ],
  },

  'text-color': {
    title: 'Change Text Color',
    metaTitle: 'Change PDF Text Color Online',
    metaDescription: 'Recolour the text in a PDF - darken faded scans, or change body text to a brand colour. Apply to the whole document or selected pages.',
    keywords: ['change pdf text color', 'pdf text colour', 'recolor pdf text', 'darken pdf text', 'edit pdf font color'],
    description: `
      <p>Faded text is the usual reason to reach for this. An old fax, a carbon copy or a scan of a pencil-written form comes through as pale grey that is legible on screen at 200 percent zoom and unreadable in print. Pushing the text to solid black fixes it in one pass.</p>
      <p>The other reason is presentation. A document produced in one house style needs to match another, or a section needs its text in a colour that signals its status.</p>
      <p>The change applies to text objects only. Images, backgrounds and vector artwork keep their colours, so a recoloured document does not lose its diagrams or logos.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load your PDF', description: 'Drop in the document whose text you want to change.' },
      { step: 2, title: 'Pick the new colour', description: 'Choose from presets or enter a hex value. Solid black is the right answer for faded scans.' },
      { step: 3, title: 'Choose the scope', description: 'Recolour all text, or restrict to a page range if only part of the document needs it.' },
      { step: 4, title: 'Apply and download', description: 'Check the preview and save the updated PDF.' },
    ],
    useCases: [
      { title: 'Rescuing a faded fax', description: 'Grey text that vanishes on a printout becomes solid black and legible on paper.', icon: 'type' },
      { title: 'Matching a house style', description: 'Body text moved to the brand colour so a supplied document does not look out of place in a pack.', icon: 'palette' },
      { title: 'Accessibility contrast', description: 'Light grey body text raised to a contrast ratio that meets accessibility guidance.', icon: 'eye' },
    ],
    faq: [
      { question: 'Does this affect images?', answer: 'No. Only text objects are recoloured. Photos, diagrams and logos keep their original colours.' },
      { question: 'Can I recolour only some of the text?', answer: 'The tool works page by page rather than word by word. For a single phrase, cover it and add new text with the PDF Editor instead.' },
      { question: 'What about text baked into a scan?', answer: 'Text inside a scanned image is pixels, not text objects, so this tool cannot reach it. Run OCR first, or adjust the image contrast.' },
      { question: 'Is the change reversible?', answer: 'Not within the new file. Keep your original if you may want the previous colour back.' },
    ],
  },

  'add-stamps': {
    title: 'Add Stamps',
    metaTitle: 'Add Stamps to a PDF - Approved, Paid & Custom',
    metaDescription: 'Place stamps on PDF pages - APPROVED, PAID, CONFIDENTIAL or your own image. Position and size each one exactly where it belongs.',
    keywords: ['add stamp to pdf', 'pdf stamp', 'approved stamp pdf', 'paid stamp pdf', 'custom stamp pdf'],
    description: `
      <p>A stamp is a status marker aimed at a person, not a system. APPROVED in the corner of an invoice tells the next person in the chain that the checking has been done, in a way that a spreadsheet cell somewhere else does not.</p>
      <p>Choose from the common presets - APPROVED, REJECTED, PAID, CONFIDENTIAL, DRAFT, URGENT - or upload your own image, which is how people reproduce a company seal or a department mark. Position it by dragging, and scale it to fit the space available.</p>
      <p>Unlike a watermark, a stamp is meant to be noticed: full opacity, in one spot on one page rather than tiled faintly across all of them.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open the document', description: 'Drop in the PDF you need to stamp.' },
      { step: 2, title: 'Choose a stamp', description: 'Pick a preset, or upload a PNG or JPG of your own mark. Transparent PNGs sit best over existing content.' },
      { step: 3, title: 'Place it', description: 'Drag the stamp to position and resize with the corner handles. Add more stamps on other pages if needed.' },
      { step: 4, title: 'Save', description: 'Download the stamped PDF. The stamp is drawn into the page.' },
    ],
    useCases: [
      { title: 'Approving an invoice', description: 'APPROVED plus a date in the corner, so the accounts team can see at a glance that it has been signed off.', icon: 'stamp' },
      { title: 'Marking confidential documents', description: 'A CONFIDENTIAL stamp on the cover of a board pack before it is distributed.', icon: 'lock' },
      { title: 'Reproducing an office seal', description: 'Upload a scan of the department seal and place it where the paper version would go.', icon: 'badge-check' },
    ],
    faq: [
      { question: 'Can I make my own stamp?', answer: 'Yes. Upload any PNG or JPG. A transparent PNG looks best because the surrounding area does not block the page underneath.' },
      { question: 'How is a stamp different from a watermark?', answer: 'A stamp is opaque, placed once, and meant to draw the eye. A watermark is faint, usually repeated on every page, and meant to sit behind the content.' },
      { question: 'Can I stamp several pages at once?', answer: 'Place a stamp per page where you need it. For the same mark on every page, a watermark at full opacity is quicker.' },
      { question: 'Can the stamp be moved after saving?', answer: 'No. It becomes part of the page content rather than a draggable annotation.' },
    ],
  },

  'remove-annotations': {
    title: 'Remove Annotations',
    metaTitle: 'Remove PDF Annotations, Comments & Highlights',
    metaDescription: 'Strip comments, highlights, sticky notes and links out of a PDF. Remove everything, or choose which annotation types to clear.',
    keywords: ['remove pdf annotations', 'delete pdf comments', 'remove highlights from pdf', 'clear pdf markup', 'strip pdf notes'],
    description: `
      <p>A document that has been through review carries the whole argument with it: three rounds of comments, someone highlighting in yellow and someone else in green, and sticky notes debating a clause that was cut two versions ago. None of that should go to the client.</p>
      <p>This clears the markup and leaves the document. You can remove everything in one pass, or select the types to strip - comments, highlights, sticky notes, drawing markup, or links - which is useful when you want the highlights gone but the hyperlinks working.</p>
      <p>Removing annotations also removes the names attached to them. Reviewer identity is stored in the annotation metadata, so stripping comments is a privacy step as much as a tidiness one.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the reviewed PDF', description: 'Drop in the file. The tool counts the annotations it finds and lists them by type.' },
      { step: 2, title: 'Choose what to remove', description: 'Clear everything, or tick the types you want gone and leave the rest.' },
      { step: 3, title: 'Remove and download', description: 'Save the clean document. Page content is untouched.' },
    ],
    useCases: [
      { title: 'Sending a clean final version', description: 'Three rounds of internal comments removed before the document leaves the building.', icon: 'eraser' },
      { title: 'Reusing last year template', description: 'An annotated draft becomes a blank starting point again in one step.', icon: 'file-text' },
      { title: 'Removing reviewer names', description: 'Comment metadata carries author names. Stripping annotations removes the audit trail of who objected to what.', icon: 'user-x' },
    ],
    faq: [
      { question: 'Does this delete text that was added as an annotation?', answer: 'Yes - free-text annotations are annotations. If someone typed a correction as a text box, it goes with the rest, so check the file afterwards.' },
      { question: 'Are redactions removed too?', answer: 'No. A completed redaction has already removed the underlying content, so there is no annotation left to strip.' },
      { question: 'Can I keep the hyperlinks?', answer: 'Yes. Deselect links and only the visual markup is removed.' },
      { question: 'What about form fields?', answer: 'Form fields survive - they are a separate structure. Use Flatten PDF if you want those made non-editable as well.' },
    ],
  },

  'form-filler': {
    title: 'Fill PDF Forms',
    metaTitle: 'Fill PDF Forms Online - Type Into Any Form',
    metaDescription: 'Fill in interactive PDF forms in your browser, including XFA forms. Type into fields, tick boxes, save your answers, and flatten when done.',
    keywords: ['fill pdf form', 'pdf form filler', 'complete pdf form online', 'xfa form', 'type in pdf form'],
    description: `
      <p>Interactive PDF forms fail in a specific, maddening way: the file opens fine in a browser but the fields are dead, so people print it, write on it by hand, and scan it back in worse condition than it started.</p>
      <p>This tool reads the form structure properly. Text fields, checkboxes, radio groups and dropdowns all work, including XFA forms, which many government and banking documents still use and which most browser viewers refuse to render at all.</p>
      <p>You can save your entries and come back later, which matters for the long forms nobody finishes in one sitting. When it is complete, flatten the form so the answers become part of the page and cannot be altered by whoever receives it.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open the form', description: 'Drop in the PDF. Fillable fields are detected and highlighted so you can see where input is expected.' },
      { step: 2, title: 'Fill it in', description: 'Click into fields and type, tick boxes, choose from dropdowns. Tab moves you to the next field in order.' },
      { step: 3, title: 'Save your progress', description: 'Keep the entered data if the form is long and you need to come back to it.' },
      { step: 4, title: 'Flatten and download', description: 'Flatten to lock the answers into the page, or save with fields still live if the recipient needs to add more.' },
    ],
    useCases: [
      { title: 'Government forms that will not open', description: 'XFA-based tax and immigration forms that browsers cannot render, filled in without installing Acrobat.', icon: 'clipboard-list' },
      { title: 'Onboarding paperwork', description: 'Six HR forms completed on screen, flattened, and returned the same morning.', icon: 'user-check' },
      { title: 'Repeat submissions', description: 'The same monthly return each period - save the entries once and update only what changed.', icon: 'repeat' },
    ],
    faq: [
      { question: 'What is an XFA form and why does it matter?', answer: 'XFA is an XML-based form format Adobe layered on top of PDF. Chrome and Safari show a "please open in Acrobat" message instead of the form. This tool reads the field structure directly, so those forms are usable.' },
      { question: 'Should I flatten before sending?', answer: 'Usually yes. Flattening prevents the recipient from changing your answers, and guarantees the values display in readers that handle form fields badly.' },
      { question: 'Where is my saved data stored?', answer: 'In your own browser. Nothing is sent to a server, so the data stays on the machine you filled the form on.' },
      { question: 'The form has no fields at all - now what?', answer: 'It is probably a scan. Use the PDF Editor to add text boxes over the blanks, or Form Creator to add real fields.' },
    ],
  },

  'form-creator': {
    title: 'Create PDF Forms',
    metaTitle: 'Create a Fillable PDF Form Online',
    metaDescription: 'Turn a flat PDF into a fillable form. Drag text fields, checkboxes and dropdowns onto the page and set names, defaults and required flags.',
    keywords: ['create pdf form', 'fillable pdf', 'make pdf form', 'add form fields to pdf', 'pdf form builder'],
    description: `
      <p>If you send out a flat PDF and ask people to fill it in, you get back photographs of paper at various angles, handwriting you cannot read, and three people who typed their answers into the email instead.</p>
      <p>Adding real form fields fixes that. Drag a text field over each blank, a checkbox onto each tick box, a dropdown where the answer should come from a fixed list. Each field gets a name, so the data has structure if you later export it, plus optional default values and a required flag.</p>
      <p>The result is a standard AcroForm PDF. It opens and fills correctly in Acrobat, Preview, browser viewers and mobile readers - you are not asking recipients to install anything.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the flat PDF', description: 'Drop in the document you want to make fillable.' },
      { step: 2, title: 'Drag fields onto the page', description: 'Place text fields, checkboxes, radio groups and dropdowns over the blanks in your layout.' },
      { step: 3, title: 'Configure each field', description: 'Set the field name, any default value, whether it is required, and the options for dropdowns.' },
      { step: 4, title: 'Export the form', description: 'Download the fillable PDF and send it out. Recipients type directly into it.' },
    ],
    useCases: [
      { title: 'An application form people can actually complete', description: 'Fields over every blank, so answers come back typed and in the right boxes.', icon: 'clipboard-list' },
      { title: 'Standardising a paper process', description: 'A form that was printed and handwritten for years becomes a fillable file with named fields.', icon: 'file-check' },
      { title: 'Registration and consent forms', description: 'Dropdowns for fixed choices and required flags on the fields you cannot process without.', icon: 'user-plus' },
    ],
    faq: [
      { question: 'Which field types can I add?', answer: 'Text fields, checkboxes, radio button groups and dropdowns - the four that cover nearly every real form.' },
      { question: 'Will the form work in Acrobat and on phones?', answer: 'Yes. The output is a standard AcroForm, which is the widely supported form format rather than the XFA variant that browsers struggle with.' },
      { question: 'Why do field names matter?', answer: 'They are the keys when form data is exported, and they identify radio buttons that belong to the same group. Descriptive names save you work later.' },
      { question: 'Can I add fields to a scanned document?', answer: 'Yes. Fields are positioned by coordinates, so they can sit over a scanned image just as well as over real text.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Remove Blank Pages',
    metaTitle: 'Remove Blank Pages From a PDF Automatically',
    metaDescription: 'Find and delete blank pages in a PDF automatically. Adjust the detection threshold so faint scanner speckle still counts as blank.',
    keywords: ['remove blank pages pdf', 'delete empty pages pdf', 'find blank pages', 'clean scanned pdf', 'strip blank pages'],
    description: `
      <p>Scan a stack of single-sided paper in duplex mode and half the output is blank. On a 120-page batch that is 60 pages of nothing, doubling the file size and making the document tedious to read.</p>
      <p>Finding them by hand is the worst kind of work, and scanned blanks are rarely truly blank - they carry faint grey speckle, a dust line, or a shadow from the edge of the sheet, so a naive test for pure white finds nothing.</p>
      <p>That is what the threshold controls. It sets how much ink a page can have and still count as empty. Start at the default, review the detected list, and raise the threshold if pages you consider blank were not caught. Nothing is removed until you confirm the list.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the scanned PDF', description: 'Drop in the file. Every page is analysed for content coverage.' },
      { step: 2, title: 'Set the threshold', description: 'The default catches clean blanks. Raise it for noisy scans where blank pages carry speckle.' },
      { step: 3, title: 'Review what was found', description: 'Detected pages are listed with thumbnails. Untick any that are not actually blank.' },
      { step: 4, title: 'Remove and save', description: 'Delete the confirmed blanks and download the shorter document.' },
    ],
    useCases: [
      { title: 'Cleaning up a duplex scan', description: 'A 120-page batch scan of single-sided paper drops to 60 real pages.', icon: 'file-minus' },
      { title: 'Removing chapter fillers', description: 'A print-ready file has blank versos so chapters start on the right. Strip them for screen reading.', icon: 'book-open' },
      { title: 'Tidying archived documents', description: 'Years of scanned files carry blank separators. Clear them before ingesting into a document system.', icon: 'archive' },
    ],
    faq: [
      { question: 'What counts as a blank page?', answer: 'One whose ink coverage falls under the threshold you set. That deliberately includes scanner noise, faint shadows and dust specks.' },
      { question: 'Could it remove a page I wanted?', answer: 'A page with only a faint watermark or a single line of light grey text might be flagged. That is why you review the list with thumbnails before anything is deleted.' },
      { question: 'Does it detect blank pages in native PDFs too?', answer: 'Yes, and more reliably than in scans - a page with no content objects at all is unambiguous.' },
      { question: 'What threshold should I start with?', answer: 'The default works for most clean scans. Older or dustier documents usually need it raised a step or two.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF Reader',
    metaTitle: 'Online PDF Reader - Open PDFs in Your Browser',
    metaDescription: 'Read PDFs in your browser with page navigation, zoom, rotate, fullscreen and print. Files stay on your device - nothing is uploaded.',
    keywords: ['pdf reader', 'open pdf online', 'pdf viewer', 'read pdf in browser', 'view pdf file'],
    description: `
      <p>Sometimes you just need to look at a file. A PDF arrives on a machine with no reader installed, or the built-in viewer renders the fonts badly, or you would rather not open an unknown document in a desktop application at all.</p>
      <p>This viewer renders the document in the browser tab with the controls you would expect: page navigation and jump-to-page, zoom including fit-width and fit-page, rotation for pages that came in sideways, fullscreen for reading, and print and download.</p>
      <p>The file is opened locally. Nothing is uploaded, which is the safer way to inspect a document you were not expecting - and it means the viewer works with no network connection at all.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open a PDF', description: 'Drop in the file, or click to browse. It renders immediately.' },
      { step: 2, title: 'Move around the document', description: 'Scroll, use the page controls, or jump straight to a page number.' },
      { step: 3, title: 'Adjust the view', description: 'Zoom in or out, fit to width or page, rotate a sideways page, or go fullscreen.' },
      { step: 4, title: 'Print or save', description: 'Send it to a printer or download a copy, both directly from the viewer.' },
    ],
    useCases: [
      { title: 'A machine with no PDF reader', description: 'A shared or locked-down computer can still open the document in a browser tab.', icon: 'book-open' },
      { title: 'Checking an unexpected attachment', description: 'Inspect a document without opening it in a desktop application or sending it anywhere.', icon: 'shield' },
      { title: 'Reading offline', description: 'Once the page is loaded, rendering is local, so the viewer keeps working on a flight.', icon: 'wifi-off' },
    ],
    faq: [
      { question: 'Is my file uploaded to view it?', answer: 'No. The PDF is rendered by JavaScript in your own browser and never leaves your device.' },
      { question: 'Can I search the text?', answer: 'Yes, provided the PDF has a text layer. A scanned image has none until you run OCR on it.' },
      { question: 'How large a file can it open?', answer: 'Limited only by your available memory. Files in the hundreds of megabytes work, though the first render takes a moment.' },
      { question: 'Can I annotate here?', answer: 'This is a viewer. For highlights, comments and text, use the PDF Editor.' },
    ],
  },

  // ==================== CONVERT TO PDF ====================

  'jpg-to-pdf': {
    title: 'JPG to PDF',
    metaTitle: 'JPG to PDF Converter - Photos to PDF',
    metaDescription: 'Turn JPG photos into a PDF. Drop in up to 100 images, set the order and page size, and get one document instead of a folder of files.',
    keywords: ['jpg to pdf', 'jpeg to pdf', 'photo to pdf', 'convert images to pdf', 'pictures to pdf'],
    description: `
      <p>Phone cameras have replaced scanners for everyday paperwork, which means the documents people need to send now arrive as a folder of JPGs. Almost every system that receives paperwork wants a single PDF.</p>
      <p>Drop the photos in, drag them into the right order, and convert. JPEG data is embedded without re-encoding, so the conversion does not add a second round of compression artefacts on top of what the camera already applied.</p>
      <p>Page size and orientation are up to you. Fit the page to each image to avoid borders, or standardise on A4 or Letter when the result is going to a printer or an office filing system that expects consistent pages.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your JPGs', description: 'Drop in up to 100 photos at once. Each becomes one page.' },
      { step: 2, title: 'Order the pages', description: 'Drag thumbnails until the sequence is right. Filename order is rarely page order with camera files.' },
      { step: 3, title: 'Choose the page setup', description: 'Match the page to the image, or force A4 or Letter with portrait or landscape orientation.' },
      { step: 4, title: 'Convert and download', description: 'Save the finished PDF with all images as pages in your chosen order.' },
    ],
    useCases: [
      { title: 'Photographed paperwork', description: 'Eight phone photos of a signed contract become one PDF the other side can file.', icon: 'image-up' },
      { title: 'Receipts for an expense claim', description: 'A month of receipt photos as a single attachment, in date order.', icon: 'receipt' },
      { title: 'Sharing a photo set', description: 'Deliver twenty images as one document that opens the same way on every device.', icon: 'images' },
    ],
    faq: [
      { question: 'Does converting reduce photo quality?', answer: 'No. JPEG data is embedded as-is with no re-compression, so the pages look exactly like the source images.' },
      { question: 'How do I control page order?', answer: 'Drag the thumbnails. Camera filenames often sort in an order that has nothing to do with the document.' },
      { question: 'The photos are different sizes - is that a problem?', answer: 'No. Fit the page to each image for borderless pages of mixed sizes, or force a standard size so every page matches.' },
      { question: 'Should I use this or Image to PDF?', answer: 'This one is tuned for JPG. Image to PDF accepts PNG, WebP, HEIC, TIFF, SVG and BMP too, so use that for a mixed folder.' },
    ],
  },

  'image-to-pdf': {
    title: 'Image to PDF',
    metaTitle: 'Image to PDF - Convert Any Image Format',
    metaDescription: 'Convert JPG, PNG, WebP, HEIC, TIFF, BMP and SVG images into one PDF. Mix formats freely, set the order, and choose the page size.',
    keywords: ['image to pdf', 'convert image to pdf', 'multiple images to pdf', 'photos to pdf', 'mixed image formats to pdf'],
    description: `
      <p>Real folders are mixed. There are iPhone HEICs from one person, screenshots as PNG, scans as TIFF, and a logo someone sent as SVG. Converting each format with a different tool and then merging the results is three jobs too many.</p>
      <p>This accepts all of them in one pass - JPG, PNG, WebP, HEIC and HEIF, TIFF, BMP and SVG - and writes a single PDF. Transparency in PNGs and WebP is composited onto a white page rather than turning black, and SVGs are rendered as vectors so they stay sharp at any zoom level.</p>
      <p>Multi-page TIFFs are expanded into one PDF page per frame, which is the behaviour you want when a fax or a scanner produced a single TIFF holding twelve pages.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your images', description: 'Drop in up to 100 files in any supported format. Mixing formats is fine.' },
      { step: 2, title: 'Set the order', description: 'Drag thumbnails into the sequence you want. Multi-page TIFFs expand in place.' },
      { step: 3, title: 'Choose page size and orientation', description: 'Fit each page to its image, or standardise on A4 or Letter.' },
      { step: 4, title: 'Convert and save', description: 'Download the combined PDF.' },
    ],
    useCases: [
      { title: 'A mixed folder in one pass', description: 'HEICs, PNGs and a TIFF combined into a single document without converting anything twice.', icon: 'images' },
      { title: 'iPhone photos anyone can open', description: 'HEIC files that Windows machines struggle with become a PDF that opens everywhere.', icon: 'smartphone' },
      { title: 'Screenshot documentation', description: 'Fifteen PNG screenshots assembled into a numbered walkthrough.', icon: 'monitor' },
    ],
    faq: [
      { question: 'Which formats are supported?', answer: 'JPG and JPEG, PNG, WebP, HEIC and HEIF, TIFF and TIF, BMP, and SVG.' },
      { question: 'What happens to transparent areas?', answer: 'They are composited onto white. PDF pages have no alpha channel, so transparency has to resolve to something.' },
      { question: 'How are multi-page TIFFs handled?', answer: 'Each frame becomes its own PDF page, in file order.' },
      { question: 'Do SVGs stay sharp?', answer: 'Yes. They are drawn as vectors, so they remain crisp at any zoom or print size.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG to PDF',
    metaTitle: 'PNG to PDF Converter - Keep Transparency Clean',
    metaDescription: 'Convert PNG images to PDF with transparent areas composited onto white instead of black. Screenshots and diagrams stay crisp.',
    keywords: ['png to pdf', 'convert png to pdf', 'screenshot to pdf', 'transparent png to pdf', 'png images to pdf'],
    description: `
      <p>PNG is the screenshot and diagram format. It is lossless, so text inside the image stays sharp rather than developing the fuzzy halos JPEG produces around high-contrast edges - which is exactly what you need when the image is a screenshot of a terminal or a UI.</p>
      <p>The catch is the alpha channel. PDF pages have no transparency, so a naive conversion renders transparent regions as black and ruins a logo or a chart exported with no background. Here transparency is composited onto white first, giving you the result you expected.</p>
      <p>Because PNG is lossless, the pixels are embedded without a quality-reducing re-encode. A screenshot converted to PDF is still pixel-exact.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PNGs', description: 'Drop in up to 100 files. Each becomes one page.' },
      { step: 2, title: 'Arrange the pages', description: 'Drag the thumbnails into the order you want - useful for step-by-step screenshots.' },
      { step: 3, title: 'Choose the page setup', description: 'Fit the page to the image for borderless output, or standardise on A4 or Letter for print.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF with transparency flattened onto white.' },
    ],
    useCases: [
      { title: 'Step-by-step documentation', description: 'Twenty numbered screenshots as one PDF walkthrough, with text in the images still legible.', icon: 'monitor' },
      { title: 'Charts and diagrams', description: 'Exported charts with transparent backgrounds converted without the black boxes.', icon: 'bar-chart' },
      { title: 'Design mock-ups for review', description: 'Lossless mock-up pages delivered as one document a client can annotate.', icon: 'palette' },
    ],
    faq: [
      { question: 'Why do transparent PNGs sometimes turn black in other tools?', answer: 'Because PDF has no alpha channel, so the transparent pixels have to be composited onto something. Tools that skip that step default to black. This one composites onto white.' },
      { question: 'Is any quality lost?', answer: 'No. PNG is lossless and the data is embedded without re-encoding.' },
      { question: 'Will the text inside my screenshots be searchable?', answer: 'No - it is pixels, not text. Run OCR on the resulting PDF if you need to search it.' },
      { question: 'Why are my PNG pages so large?', answer: 'Lossless compression is bulky for photographic content. Run Compress PDF afterwards, or use JPG for photos.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP to PDF',
    metaTitle: 'WebP to PDF Converter Online',
    metaDescription: 'Convert WebP images to PDF so they open anywhere. Handles both lossy and lossless WebP, with transparency composited onto white.',
    keywords: ['webp to pdf', 'convert webp to pdf', 'webp images to pdf', 'webp converter', 'save webp as pdf'],
    description: `
      <p>WebP is what you get when you save an image from a modern website. It is an efficient format, and it is also the format that half the applications on a desktop still refuse to open - which is why people need to convert it before they can use it.</p>
      <p>This turns WebP files into a PDF that opens anywhere. Both variants are handled: lossy WebP, which behaves like JPEG, and lossless WebP, which behaves like PNG and can carry an alpha channel. Transparent areas are composited onto white so nothing comes out black.</p>
      <p>Animated WebP files are converted using their first frame, since a PDF page is a still image.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your WebP files', description: 'Drop in up to 100 images. Lossy and lossless files can be mixed.' },
      { step: 2, title: 'Set the order', description: 'Drag thumbnails into the sequence you want.' },
      { step: 3, title: 'Choose page size and quality', description: 'Fit to image or use a standard page size, and set the embedding quality.' },
      { step: 4, title: 'Convert and save', description: 'Download the PDF.' },
    ],
    useCases: [
      { title: 'Images saved from the web', description: 'A folder of WebP downloads becomes a document that opens in any viewer.', icon: 'globe' },
      { title: 'Sharing with older software', description: 'Send a PDF instead of asking a colleague to install something that reads WebP.', icon: 'share-2' },
      { title: 'Archiving web assets', description: 'Site imagery collected into one PDF for a records copy.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are lossless WebP files handled differently?', answer: 'Yes. Lossless files, including any alpha channel, are decoded and composited onto white; lossy files are treated like JPEG.' },
      { question: 'What happens to an animated WebP?', answer: 'The first frame is used. A PDF page cannot hold an animation.' },
      { question: 'Does converting lose quality?', answer: 'A lossy WebP re-encoded into a PDF can lose a little. Set quality to high to keep the difference invisible.' },
      { question: 'Can I mix WebP with other formats?', answer: 'Not in this tool - use Image to PDF, which accepts every supported format in one pass.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG to PDF',
    metaTitle: 'SVG to PDF - Vector Conversion, No Pixels',
    metaDescription: 'Convert SVG files to PDF as true vectors, so logos and diagrams stay sharp at any print size. Text stays selectable where fonts allow.',
    keywords: ['svg to pdf', 'convert svg to pdf', 'vector to pdf', 'svg print pdf', 'logo svg to pdf'],
    description: `
      <p>The whole point of an SVG is that it has no fixed resolution. Convert it wrongly - by screenshotting it, or through a tool that rasterises - and you throw that away, ending up with a logo that looks acceptable on screen and blurry on a banner.</p>
      <p>This conversion keeps the vectors. Paths, shapes, gradients and strokes are written as PDF drawing operations, so the output scales cleanly from a business card to a billboard. Text elements stay as text where the font can be embedded, which means they remain selectable and searchable.</p>
      <p>That makes the result print-ready. Commercial printers ask for vector PDFs for exactly this reason, and a converted SVG satisfies that requirement.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your SVG files', description: 'Drop in up to 100 files. Each becomes one page.' },
      { step: 2, title: 'Set the page size', description: 'Use the SVG viewBox dimensions, or place the artwork on a standard page size.' },
      { step: 3, title: 'Order the pages', description: 'Drag to arrange if you are converting a set.' },
      { step: 4, title: 'Convert and download', description: 'Save the vector PDF.' },
    ],
    useCases: [
      { title: 'Sending a logo to a printer', description: 'A vector PDF is what print shops ask for, and what survives being scaled to a trade show banner.', icon: 'shapes' },
      { title: 'Diagrams for publication', description: 'Charts exported as SVG stay crisp in a journal PDF at any zoom.', icon: 'git-branch' },
      { title: 'Technical drawings', description: 'Line work that must stay sharp when printed at A1 rather than A4.', icon: 'ruler' },
    ],
    faq: [
      { question: 'Is the output really vector?', answer: 'Yes. Paths are written as PDF drawing operations, not rendered to pixels, so there is no resolution ceiling.' },
      { question: 'What happens to fonts in the SVG?', answer: 'Where the font can be embedded, text stays selectable. Otherwise it is converted to outlines, which looks identical but is no longer searchable.' },
      { question: 'Are embedded raster images kept?', answer: 'Yes, but a raster inside an SVG is still a raster and will pixelate when scaled up. Only the vector parts are resolution-independent.' },
      { question: 'Do CSS styles inside the SVG apply?', answer: 'Inline styles and presentation attributes are honoured. External stylesheets are not, since the file is converted in isolation.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP to PDF',
    metaTitle: 'BMP to PDF Converter - Shrink Bitmap Files',
    metaDescription: 'Convert uncompressed BMP bitmaps to PDF and cut the file size dramatically. Ideal for old scans and Windows-era image archives.',
    keywords: ['bmp to pdf', 'convert bitmap to pdf', 'bmp converter', 'windows bitmap to pdf', 'bmp images to pdf'],
    description: `
      <p>BMP stores pixels with essentially no compression, which is why a single scanned page can occupy 25 MB. Files in this format usually come from older Windows software, medical or industrial imaging systems, and scanner drivers that were configured a decade ago and never revisited.</p>
      <p>Converting to PDF applies proper image compression during embedding, and the size drop is dramatic - often 90 percent or more with no visible difference, because there was no compression to lose in the first place.</p>
      <p>You also get one document instead of a folder of individual bitmaps, which makes the collection far easier to store, index and send.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your BMP files', description: 'Drop in up to 100 bitmaps. Large files are expected with this format.' },
      { step: 2, title: 'Arrange the pages', description: 'Drag into order if the bitmaps are pages of one document.' },
      { step: 3, title: 'Set page size and compression', description: 'Choose the page dimensions and how aggressively to compress during embedding.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF and compare the size to the originals.' },
    ],
    useCases: [
      { title: 'Old scanner output', description: 'A folder of 20 MB bitmaps becomes a PDF of a few megabytes.', icon: 'scan' },
      { title: 'Legacy system exports', description: 'Industrial and medical software that only writes BMP, converted into something shareable.', icon: 'hard-drive' },
      { title: 'Archiving image sets', description: 'Hundreds of loose bitmaps consolidated into indexed PDFs.', icon: 'archive' },
    ],
    faq: [
      { question: 'How much smaller will the PDF be?', answer: 'Typically 85 to 95 percent smaller. BMP is uncompressed, so almost all of the size is redundancy.' },
      { question: 'Does the image quality suffer?', answer: 'At high quality settings the difference is not visible. Lower settings trade sharpness for size in the usual way.' },
      { question: 'Are 1-bit and 8-bit bitmaps supported?', answer: 'Yes - monochrome, greyscale, palette and full-colour BMPs all convert.' },
      { question: 'Can I mix BMP with other formats?', answer: 'Use Image to PDF for mixed folders. This tool is BMP-only.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC to PDF',
    metaTitle: 'HEIC to PDF - iPhone Photos to PDF',
    metaDescription: 'Convert iPhone HEIC and HEIF photos to PDF so they open on any device. No AirDrop, no format setting change, no extra software.',
    keywords: ['heic to pdf', 'iphone photo to pdf', 'heif to pdf', 'convert heic', 'apple photo to pdf'],
    description: `
      <p>iPhones save photos as HEIC, and Windows and older Android devices frequently cannot open them. The photo you took of a document is fine on your phone and useless the moment you email it to someone on a work laptop.</p>
      <p>This converts HEIC and HEIF files into a PDF that opens anywhere. HEIC uses HEVC compression, so decoding is genuinely different from JPEG - the tool handles it in the browser, without asking you to change your camera settings or install anything.</p>
      <p>Multiple photos become multiple pages in the order you choose, which is what you want when the document you photographed ran to more than one sheet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your HEIC photos', description: 'Drop in up to 100 files. HEIF files work the same way.' },
      { step: 2, title: 'Put them in order', description: 'Drag thumbnails. Photos of a multi-page document rarely sort correctly by filename.' },
      { step: 3, title: 'Choose the page setup', description: 'Fit the page to each photo, or use A4 or Letter for a document that will be printed.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF.' },
    ],
    useCases: [
      { title: 'Sending photographed paperwork to a PC user', description: 'Four HEIC photos of a signed form become a PDF anyone can open.', icon: 'smartphone' },
      { title: 'Uploading to a portal that rejects HEIC', description: 'Most upload forms accept PDF and refuse HEIC outright.', icon: 'upload' },
      { title: 'Archiving iPhone photo sets', description: 'A trip or an inspection captured as HEIC, stored as one durable PDF.', icon: 'image' },
    ],
    faq: [
      { question: 'Why can Windows not open HEIC files?', answer: 'HEIC uses HEVC compression, which needs a codec Windows does not always ship. Converting sidesteps the problem entirely.' },
      { question: 'Is quality lost in conversion?', answer: 'A small amount, since HEIC is decoded and re-embedded. At high quality the difference is not visible at normal viewing sizes.' },
      { question: 'Does this handle Live Photos?', answer: 'The still frame is used. The motion component is not something a PDF page can hold.' },
      { question: 'Should I just change my iPhone camera setting instead?', answer: 'Setting Camera to Most Compatible gives you JPEGs going forward, but does nothing for the HEIC photos already on the phone.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF to PDF',
    metaTitle: 'TIFF to PDF - Multi-Page TIFF Converter',
    metaDescription: 'Convert TIFF and TIF files to PDF, expanding multi-page TIFFs into one page each. Built for scanner, fax and archive output.',
    keywords: ['tiff to pdf', 'tif to pdf', 'multipage tiff to pdf', 'scanner tiff converter', 'fax tiff to pdf'],
    description: `
      <p>TIFF is the format of scanners, fax servers and document archives, largely because one TIFF file can hold many pages. That is also the thing most converters get wrong - they read the first page and silently discard the other eleven.</p>
      <p>Here each frame in a multi-page TIFF becomes its own PDF page, in order. A 40-page scanned TIFF converts to a 40-page PDF, which is what anyone opening the file expects.</p>
      <p>Compression schemes common in this world are handled, including the CCITT Group 4 encoding that fax and bitonal document scanners produce, plus LZW and uncompressed TIFFs.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your TIFF files', description: 'Drop in up to 100 files. Single and multi-page TIFFs can be mixed.' },
      { step: 2, title: 'Review the page expansion', description: 'Multi-page files expand into their frames so you can see the real page count.' },
      { step: 3, title: 'Set page size and quality', description: 'Match the page to the scan dimensions, or standardise on A4 or Letter.' },
      { step: 4, title: 'Convert and save', description: 'Download the PDF with every frame as a page.' },
    ],
    useCases: [
      { title: 'Scanner output nobody can open', description: 'A 40-page multi-page TIFF from a departmental scanner becomes a normal PDF.', icon: 'scan' },
      { title: 'Fax archives', description: 'CCITT Group 4 fax TIFFs converted into a searchable-ready document set.', icon: 'printer' },
      { title: 'Records migration', description: 'Decades of TIFF archives converted to PDF for a document management system.', icon: 'archive' },
    ],
    faq: [
      { question: 'Will all pages of my multi-page TIFF convert?', answer: 'Yes. Every frame becomes a PDF page in file order - this is the main reason to use a TIFF-aware converter.' },
      { question: 'Which TIFF compressions are supported?', answer: 'Uncompressed, LZW, PackBits and CCITT Group 3 and 4, which covers scanner and fax output.' },
      { question: 'Can I make the result searchable?', answer: 'Run OCR PDF on the output. A scanned TIFF holds no text layer of its own.' },
      { question: 'Are my bitonal scans still small after conversion?', answer: 'Yes. Bitonal images stay compact; the size is dominated by resolution and page count.' },
    ],
  },

  'txt-to-pdf': {
    title: 'TXT to PDF',
    metaTitle: 'TXT to PDF - Text Files to Formatted PDF',
    metaDescription: 'Turn plain text files into a properly paginated PDF. Choose the font, page size and margins, with monospace for logs and code.',
    keywords: ['txt to pdf', 'text file to pdf', 'convert txt to pdf', 'plain text to pdf', 'log file to pdf'],
    description: `
      <p>Plain text has no pages, no margins and no typography, which is fine in an editor and a problem the moment you need to attach it to something, print it, or put it in a records system. A 4,000-line log file opened in Notepad and sent to a printer produces whatever the printer feels like doing.</p>
      <p>This lays the text out properly: real pages at your chosen size, sensible margins, a font you pick, and line wrapping that respects word boundaries. Existing line breaks are preserved, so indentation and blank-line structure survive.</p>
      <p>For logs, code and anything with aligned columns, choose a monospace font. Proportional fonts destroy column alignment, and that alignment is usually the only structure the file has.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your text files', description: 'Drop in up to 10 .txt files. Each becomes its own PDF.' },
      { step: 2, title: 'Choose the font', description: 'A serif or sans font for prose, monospace for logs, code and anything with columns.' },
      { step: 3, title: 'Set page size and margins', description: 'A4 or Letter, with margins wide enough for binding or annotation if the file will be printed.' },
      { step: 4, title: 'Convert and download', description: 'Save the paginated PDF.' },
    ],
    useCases: [
      { title: 'Log files for a report', description: 'Server output attached as a paginated PDF with page numbers a reviewer can cite.', icon: 'file-text' },
      { title: 'Code listings', description: 'Source files in monospace, with indentation intact, for an appendix or a code review pack.', icon: 'code' },
      { title: 'Notes and transcripts', description: 'Plain-text meeting notes turned into something presentable enough to circulate.', icon: 'notebook' },
    ],
    faq: [
      { question: 'Is my line spacing and indentation kept?', answer: 'Yes. Existing line breaks and leading whitespace are preserved. Lines longer than the page wrap at word boundaries.' },
      { question: 'Which font should I pick?', answer: 'Monospace for anything where columns line up - logs, code, tables. A proportional font is easier to read for prose.' },
      { question: 'What about non-English characters?', answer: 'UTF-8 text is supported, including accented Latin, Cyrillic and Greek. Very large CJK character sets depend on the chosen font having the glyphs.' },
      { question: 'Can I convert several files into one PDF?', answer: 'Each text file becomes its own PDF. Merge them afterwards if you need a single document.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON to PDF',
    metaTitle: 'JSON to PDF - Pretty-Printed & Highlighted',
    metaDescription: 'Convert JSON files to a readable PDF with proper indentation and syntax colouring. Turn API responses and config dumps into shareable documents.',
    keywords: ['json to pdf', 'convert json to pdf', 'json report pdf', 'api response to pdf', 'pretty print json pdf'],
    description: `
      <p>JSON arrives as one enormous line. Minified API responses and config dumps are technically readable and practically not, especially when you need to show them to someone who is not going to paste them into a formatter first.</p>
      <p>This pretty-prints the structure with consistent indentation and nesting, applies syntax colouring so keys, strings, numbers and booleans are visually distinct, and paginates the result. What was an unreadable wall becomes something you can hand to a colleague or attach to a ticket.</p>
      <p>Malformed JSON is reported with the position of the problem rather than silently producing a broken document, which makes the tool useful as a quick validity check too.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your JSON files', description: 'Drop in up to 10 files. Each is parsed and validated first.' },
      { step: 2, title: 'Set formatting options', description: 'Choose the indent width and whether syntax colouring is applied.' },
      { step: 3, title: 'Choose the page setup', description: 'A4 or Letter. Landscape helps for deeply nested structures with long lines.' },
      { step: 4, title: 'Convert and download', description: 'Save the formatted PDF.' },
    ],
    useCases: [
      { title: 'Attaching evidence to a bug report', description: 'The API response that caused the failure, readable, in a document anyone on the ticket can open.', icon: 'bug' },
      { title: 'Documenting configuration', description: 'A config file captured as a dated PDF for a change record.', icon: 'settings' },
      { title: 'Data hand-off to non-developers', description: 'A JSON export made legible for someone who will not be opening a code editor.', icon: 'braces' },
    ],
    faq: [
      { question: 'What happens if my JSON is invalid?', answer: 'The tool reports the parse error and its position instead of writing a broken PDF, so it doubles as a validity check.' },
      { question: 'Are long strings wrapped?', answer: 'Yes, at the page margin, with the indentation of the enclosing level maintained so the structure stays readable.' },
      { question: 'How large a file can it handle?', answer: 'Multi-megabyte files convert, though very large ones produce very long PDFs. Consider extracting the relevant section first.' },
      { question: 'Is the colouring preserved when printing?', answer: 'On a colour printer, yes. In greyscale the tokens still differ in weight, but the distinction is weaker.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD to PDF',
    metaTitle: 'PSD to PDF - Photoshop Files Without Photoshop',
    metaDescription: 'Convert Photoshop PSD and PSB files to PDF using the composite image, so clients can review a design without owning Photoshop.',
    keywords: ['psd to pdf', 'photoshop to pdf', 'convert psd', 'psb to pdf', 'design file to pdf'],
    description: `
      <p>A PSD is only openable by people who own Photoshop, which is rarely the client who needs to approve the design. Sending the working file also means sending every hidden layer, every abandoned version and every note you left for yourself.</p>
      <p>Converting to PDF uses the flattened composite - the image as the file appears when opened - and produces a document anyone can view on any device. Layer structure is not carried across, which in a review context is the point.</p>
      <p>Both PSD and the large-document PSB format are supported, and several files can be converted into a single multi-page PDF, which is how most design reviews want to receive a set of concepts.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PSD or PSB files', description: 'Drop in up to 100 files. Large layered documents take a moment to read.' },
      { step: 2, title: 'Order the pages', description: 'Drag into the sequence you want reviewers to see.' },
      { step: 3, title: 'Set the page size', description: 'Match the document dimensions, or use a standard page size for printing.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF.' },
    ],
    useCases: [
      { title: 'Client review', description: 'Three concepts as a three-page PDF, viewable without any design software.', icon: 'palette' },
      { title: 'Design archive', description: 'A visual record of what a project looked like, without needing the original application to see it.', icon: 'archive' },
      { title: 'Print hand-off', description: 'A flattened composite for a print shop that does not want your layered working file.', icon: 'printer' },
    ],
    faq: [
      { question: 'Are layers preserved?', answer: 'No. The flattened composite is used, which is what makes the output viewable everywhere.' },
      { question: 'What about hidden layers?', answer: 'They are excluded, exactly as they are when the file is opened in Photoshop. The composite reflects visible layers only.' },
      { question: 'Do smart objects and adjustment layers render correctly?', answer: 'They appear as baked into the composite. Their effects show; their editability does not survive.' },
      { question: 'Is PSB supported?', answer: 'Yes. Large Document Format files convert the same way, though very large canvases take longer.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word to PDF',
    metaTitle: 'Word to PDF - Convert DOCX Without Office',
    metaDescription: 'Convert Word DOCX and DOC files to PDF with layout, fonts, tables and images intact. No Microsoft Office required and no upload.',
    keywords: ['word to pdf', 'docx to pdf', 'doc to pdf', 'convert word document', 'word to pdf no office'],
    description: `
      <p>A Word document sent as a .docx is a document you have lost control of. It reflows when the recipient has different fonts, the page breaks land somewhere else, and anyone can edit it. PDF is what you send when the layout is part of the message.</p>
      <p>The conversion here runs a real document engine compiled to WebAssembly, in your browser. Styles, headings, tables, images, headers and footers, footnotes and page breaks are laid out the way the document specifies, rather than approximated by a simplified parser.</p>
      <p>Both DOCX and the older binary DOC format convert. Because it all runs locally, the contract or the salary letter you are converting never leaves your machine - which is not true of most online converters.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your Word file', description: 'Drop in a .docx or .doc. The conversion engine loads on first use, which takes a few seconds.' },
      { step: 2, title: 'Wait for the layout pass', description: 'The document is laid out page by page. Longer files with many images take proportionally longer.' },
      { step: 3, title: 'Download the PDF', description: 'Save the result and check the page breaks landed where you expected.' },
    ],
    useCases: [
      { title: 'Sending a document that must not change', description: 'A quote or contract as a PDF, so it looks the same on the recipient screen as on yours.', icon: 'file-text' },
      { title: 'Applying for something', description: 'Nearly every application portal asks for PDF and rejects DOCX.', icon: 'upload' },
      { title: 'Converting on a machine without Office', description: 'No Word licence, no problem - the conversion runs in the browser.', icon: 'monitor' },
    ],
    faq: [
      { question: 'Will the layout match Word exactly?', answer: 'Very closely. Differences show up mainly with unusual fonts that are not embedded, or very complex floating layouts, so a quick check of the page breaks is worth doing.' },
      { question: 'Is my document uploaded?', answer: 'No. The conversion engine runs in your browser, so the file stays on your device.' },
      { question: 'Are tracked changes and comments included?', answer: 'They convert as they would print - accepted text appears, and comments come through only if the document is set to print markup. Accept or reject changes first for a clean result.' },
      { question: 'Does .doc work as well as .docx?', answer: 'Yes, both are supported. The older binary format is occasionally less predictable with very old files.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel to PDF',
    metaTitle: 'Excel to PDF - Convert XLSX Spreadsheets',
    metaDescription: 'Convert Excel XLSX and XLS files to PDF with tables, formatting and multiple sheets preserved. Choose portrait or landscape and fit to width.',
    keywords: ['excel to pdf', 'xlsx to pdf', 'xls to pdf', 'spreadsheet to pdf', 'convert excel sheet'],
    description: `
      <p>Spreadsheets print badly by default. A sheet 22 columns wide gets sliced into strips across six pages with no headers, in an order nobody can follow - which is why so many finance PDFs look like they were produced by accident.</p>
      <p>The conversion respects the print setup stored in the workbook: print areas, page orientation, scaling and repeated header rows. Cell formatting, number formats, borders, merged cells and colours come through, and each worksheet starts on a new page.</p>
      <p>Formulas are converted to their calculated values, which is normally what you want when sending figures out - the recipient sees the numbers without seeing how they were built.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your spreadsheet', description: 'Drop in an .xlsx or .xls file. All worksheets are read.' },
      { step: 2, title: 'Set the page layout', description: 'Choose orientation and whether to fit columns to the page width - landscape plus fit-to-width solves most wide-sheet problems.' },
      { step: 3, title: 'Choose which sheets', description: 'Convert the whole workbook or only the sheets you need.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF and check no columns were cut off.' },
    ],
    useCases: [
      { title: 'Circulating financial reports', description: 'A monthly pack as PDF, so nobody can accidentally overwrite a formula.', icon: 'table' },
      { title: 'Invoices from a template', description: 'A spreadsheet invoice converted to a PDF you can send and archive.', icon: 'receipt' },
      { title: 'Data appendices', description: 'A results table attached to a report as pages rather than a separate spreadsheet file.', icon: 'file-spreadsheet' },
    ],
    faq: [
      { question: 'How do I stop columns being cut off?', answer: 'Use landscape orientation and enable fit to width. If the sheet is very wide, set a print area in Excel first.' },
      { question: 'Are formulas included?', answer: 'Their results are. Formulas are evaluated to values, which is generally what you want in a distributed document.' },
      { question: 'Do charts convert?', answer: 'Embedded charts are rendered as images in place, though very complex chart types may differ slightly from the Excel rendering.' },
      { question: 'Does each sheet start on a new page?', answer: 'Yes, following the workbook print setup, including repeated header rows where they are configured.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint to PDF',
    metaTitle: 'PowerPoint to PDF - Convert PPTX Slides',
    metaDescription: 'Convert PowerPoint PPTX and PPT files to PDF with one slide per page. Layouts, fonts and images are preserved for handouts and sharing.',
    keywords: ['powerpoint to pdf', 'pptx to pdf', 'ppt to pdf', 'slides to pdf', 'presentation to pdf'],
    description: `
      <p>A PPTX file only looks right on a machine with the same fonts, the same PowerPoint version and enough patience to wait for it to open. As a PDF it looks identical everywhere, opens instantly, and cannot be edited by the audience.</p>
      <p>Each slide becomes one page at the presentation aspect ratio, whether that is 16:9 or 4:3. Layouts, theme fonts, images, charts and tables are preserved, and slide order is kept.</p>
      <p>Animations and transitions do not survive, because a page cannot animate. Slides built around a build sequence will show their final state, so if the reveal matters, split the build across several slides before converting.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your presentation', description: 'Drop in a .pptx or .ppt file.' },
      { step: 2, title: 'Wait for the slides to render', description: 'Each slide is laid out in turn. Decks with many images take longer.' },
      { step: 3, title: 'Download the PDF', description: 'Save the result - one page per slide, in order.' },
    ],
    useCases: [
      { title: 'Sending a deck after the meeting', description: 'A PDF opens on any device and cannot be edited before it is forwarded on.', icon: 'presentation' },
      { title: 'Printed handouts', description: 'One slide per page, ready to print, without PowerPoint reflowing anything.', icon: 'printer' },
      { title: 'Conference submissions', description: 'Most organisers require PDF so the slides display identically on their machine.', icon: 'upload' },
    ],
    faq: [
      { question: 'What happens to animations?', answer: 'They are dropped and each slide shows its final state. Split build sequences across multiple slides first if the progression matters.' },
      { question: 'Are speaker notes included?', answer: 'No, only the slides. Notes are not part of the slide surface being rendered.' },
      { question: 'Is the aspect ratio preserved?', answer: 'Yes. 16:9 decks produce widescreen pages and 4:3 decks produce squarer ones, matching the presentation setup.' },
      { question: 'Do embedded videos convert?', answer: 'The poster frame appears. PDF cannot play embedded video, so the media itself does not carry over.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS to PDF',
    metaTitle: 'XPS to PDF - Convert XPS and OXPS Files',
    metaDescription: 'Convert Microsoft XPS and OXPS documents to PDF with layout and vector graphics intact, so files from Windows print-to-file open anywhere.',
    keywords: ['xps to pdf', 'oxps to pdf', 'convert xps', 'xps viewer alternative', 'microsoft xps to pdf'],
    description: `
      <p>XPS was Microsoft answer to PDF. It never caught on, and the XPS Viewer stopped shipping with Windows by default - so people are left with files they cannot open, usually created years ago by someone choosing Microsoft XPS Document Writer instead of a printer.</p>
      <p>Converting to PDF makes them readable again on any device. Both formats are handled: the original XPS and the later OXPS variant that newer Windows versions produce.</p>
      <p>XPS is a vector format, like PDF, so the conversion is a genuine translation rather than a screenshot. Text stays text, vector graphics stay vectors, and the output remains searchable and sharp at any zoom.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your XPS file', description: 'Drop in an .xps or .oxps document.' },
      { step: 2, title: 'Let it convert', description: 'Pages are translated in order, keeping their original dimensions.' },
      { step: 3, title: 'Download the PDF', description: 'Save the result and open it in any reader.' },
    ],
    useCases: [
      { title: 'Opening old archives', description: 'Documents printed to XPS years ago, readable again without hunting for a viewer.', icon: 'file-box' },
      { title: 'Sharing with non-Windows users', description: 'Nothing outside the Windows ecosystem opens XPS. PDF opens everywhere.', icon: 'share-2' },
      { title: 'Records migration', description: 'Converting an XPS archive into a format a document system can actually index.', icon: 'archive' },
    ],
    faq: [
      { question: 'What is the difference between XPS and OXPS?', answer: 'OXPS is the later, standardised version produced by Windows 8 and newer. Both convert here.' },
      { question: 'Is the text still searchable?', answer: 'Yes. XPS stores real text, and it is carried across as text rather than rasterised.' },
      { question: 'Why can I not open XPS files on Windows any more?', answer: 'The XPS Viewer became an optional feature and is not installed by default on recent builds.' },
      { question: 'Does the layout stay identical?', answer: 'Very closely - both formats describe pages in similar vector terms, so translation is faithful.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF to PDF',
    metaTitle: 'RTF to PDF - Rich Text Format Converter',
    metaDescription: 'Convert RTF documents to PDF with fonts, bold, italics, tables and lists preserved. Useful for legacy and cross-platform text files.',
    keywords: ['rtf to pdf', 'rich text to pdf', 'convert rtf', 'rtf converter', 'rtf document to pdf'],
    description: `
      <p>RTF is the format that was meant to move formatted text between incompatible word processors, so it turns up in legal templates, older case management systems and anything exported by software from the 1990s that is still in production.</p>
      <p>It opens in most editors, but rendering varies and it is still an editable format. Converting to PDF fixes the appearance and makes the document safe to distribute.</p>
      <p>Character and paragraph formatting, fonts, bold and italics, tables, lists, indentation and embedded images are all carried through and laid out onto real pages.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your RTF file', description: 'Drop in the document.' },
      { step: 2, title: 'Set the page size', description: 'Choose A4 or Letter with your preferred margins.' },
      { step: 3, title: 'Convert and download', description: 'Save the PDF.' },
    ],
    useCases: [
      { title: 'Legacy system exports', description: 'Case management and practice software that only exports RTF, converted into something filable.', icon: 'file-type' },
      { title: 'Legal templates', description: 'RTF precedent documents fixed as PDF once they have been completed.', icon: 'scale' },
      { title: 'Cross-platform text', description: 'A formatted document that renders identically regardless of which word processor the recipient uses.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Are tables and lists preserved?', answer: 'Yes. Table structure, borders, bullet and numbered lists and indentation all convert.' },
      { question: 'What about embedded images?', answer: 'Images stored in the RTF are extracted and placed in position.' },
      { question: 'Why convert RTF at all if it opens in Word?', answer: 'Because it renders slightly differently in every editor and stays editable. PDF fixes both.' },
      { question: 'Are fonts embedded in the output?', answer: 'Fonts available to the converter are embedded so the PDF renders consistently. Exotic fonts fall back to a close substitute.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB to PDF',
    metaTitle: 'EPUB to PDF - Convert Ebooks for Printing',
    metaDescription: 'Convert EPUB ebooks to PDF with chapters, images and structure preserved. Choose the page size so reflowable text paginates sensibly.',
    keywords: ['epub to pdf', 'ebook to pdf', 'convert epub', 'epub converter', 'epub to printable pdf'],
    description: `
      <p>EPUB is reflowable by design: text adapts to the screen it is being read on, which is ideal on a phone and impossible to print predictably. PDF is the opposite - fixed pages, identical everywhere.</p>
      <p>Converting means committing to a page size, and that choice is the one that matters. A6 gives you paperback-like pages with comfortable line lengths; A4 fits far more text per page but produces long lines that are harder to read. Pick based on whether the result is for printing or for reading on a tablet.</p>
      <p>Chapter structure becomes PDF bookmarks, so the navigation survives the conversion. Embedded images, tables and inline formatting are carried across.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your EPUB', description: 'Drop in the .epub file. Its chapter structure is read first.' },
      { step: 2, title: 'Choose a page size', description: 'A6 or A5 for print-like pages, A4 or Letter for more text per page.' },
      { step: 3, title: 'Set the type', description: 'Font size and margins, which together determine how many pages you end up with.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF with chapter bookmarks intact.' },
    ],
    useCases: [
      { title: 'Printing an ebook', description: 'A technical manual bought as EPUB, converted to A5 and printed for annotating.', icon: 'book' },
      { title: 'Reading on a device with no EPUB support', description: 'Some tablets and e-readers handle PDF far better than EPUB.', icon: 'tablet' },
      { title: 'Archiving with fixed pagination', description: 'A citable copy where page 47 is always page 47, unlike a reflowable file.', icon: 'archive' },
    ],
    faq: [
      { question: 'Which page size should I choose?', answer: 'A5 or A6 for reading and printing - line lengths stay comfortable. A4 if you want fewer pages and do not mind long lines.' },
      { question: 'Are chapters navigable in the PDF?', answer: 'Yes. The EPUB table of contents becomes a PDF bookmark tree.' },
      { question: 'Will DRM-protected ebooks convert?', answer: 'No. Files with DRM cannot be read by the converter, and removing DRM may breach your licence terms.' },
      { question: 'Why does my page count look wrong?', answer: 'EPUB has no inherent pages, so the count depends entirely on the page size, font size and margins you chose.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI to PDF',
    metaTitle: 'MOBI to PDF - Kindle Ebook Converter',
    metaDescription: 'Convert MOBI, AZW and AZW3 Kindle ebooks to PDF. Chapters and images are preserved, with the page size under your control.',
    keywords: ['mobi to pdf', 'azw to pdf', 'kindle to pdf', 'convert mobi', 'azw3 to pdf'],
    description: `
      <p>MOBI and its Kindle successors AZW and AZW3 are Amazon formats, which means they open on Kindle devices and Kindle apps and essentially nowhere else. If you want to read a MOBI file on a work laptop or print a few pages of it, you need a different format.</p>
      <p>This converts all three variants to PDF. Chapter structure becomes bookmarks, embedded images are placed in position, and the text is paginated at the page size you pick.</p>
      <p>Only files without DRM can be converted. Books purchased from the Kindle store are usually protected, and the conversion will report that rather than producing a broken document.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your ebook', description: 'Drop in a .mobi, .azw or .azw3 file.' },
      { step: 2, title: 'Choose the page size', description: 'A5 for print-like pages, A4 for more text per page.' },
      { step: 3, title: 'Set font size and margins', description: 'These determine both readability and the final page count.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF with chapter bookmarks.' },
    ],
    useCases: [
      { title: 'Reading outside the Kindle app', description: 'A MOBI file readable in any PDF viewer on any device.', icon: 'book-open' },
      { title: 'Printing a section', description: 'Convert, then extract the chapter you actually want on paper.', icon: 'printer' },
      { title: 'Long-term archiving', description: 'A format that will still open in twenty years without a proprietary reader.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can I convert books bought from Amazon?', answer: 'Only if they carry no DRM. Most store purchases are protected, and stripping that protection may breach your licence.' },
      { question: 'What is the difference between MOBI, AZW and AZW3?', answer: 'They are successive generations of the same lineage. AZW3 supports richer formatting. All three convert here.' },
      { question: 'Are chapters preserved?', answer: 'Yes, as a PDF bookmark tree built from the ebook table of contents.' },
      { question: 'Why is the layout different from my Kindle?', answer: 'Kindle reflows text to your device and font settings. A PDF has fixed pages, so the layout reflects the page size you chose here.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DjVu to PDF',
    metaTitle: 'DjVu to PDF - Convert Scanned DjVu Documents',
    metaDescription: 'Convert DjVu and DJV files to PDF with DPI and quality control. Common for scanned books, academic archives and historical documents.',
    keywords: ['djvu to pdf', 'djv to pdf', 'convert djvu', 'djvu converter', 'scanned book to pdf'],
    description: `
      <p>DjVu was built for one job and does it well: compressing scanned pages far smaller than PDF could at the time. That is why digital libraries, university archives and Russian-language book collections are full of DjVu files - and why anyone who finds one needs a converter, since almost no mainstream software opens it.</p>
      <p>Converting to PDF trades some file size for universal access. You control that trade-off through the DPI and quality settings: 300 DPI is right for printing, 150 for screen reading at a much smaller size.</p>
      <p>Multi-page DjVu files convert to multi-page PDFs with page order preserved, which matters because most DjVu files in the wild are entire scanned books.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your DjVu file', description: 'Drop in a .djvu or .djv document.' },
      { step: 2, title: 'Set DPI and quality', description: '300 DPI for print, 150 for screen. Higher settings mean larger files.' },
      { step: 3, title: 'Convert', description: 'Every page is rendered in order. Long scanned books take a while.' },
      { step: 4, title: 'Download the PDF', description: 'Save the result.' },
    ],
    useCases: [
      { title: 'Academic archives', description: 'Digitised journals and monographs distributed as DjVu, converted for reading and citing.', icon: 'graduation-cap' },
      { title: 'Scanned book collections', description: 'A DjVu book turned into a PDF that opens on a phone or a tablet.', icon: 'book' },
      { title: 'Historical documents', description: 'Library scans made accessible to readers with no specialist viewer.', icon: 'landmark' },
    ],
    faq: [
      { question: 'Why is the PDF bigger than the DjVu?', answer: 'DjVu compression is unusually efficient for scanned text. PDF cannot always match it, so expect growth - lower the DPI if size matters more than detail.' },
      { question: 'Which DPI should I choose?', answer: '300 for printing or OCR. 150 for on-screen reading, which typically halves the file size.' },
      { question: 'Is the converted PDF searchable?', answer: 'Not unless the DjVu carried a text layer. Run OCR PDF on the output to add one.' },
      { question: 'Are all pages converted?', answer: 'Yes. Multi-page DjVu files convert page for page, in order.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 to PDF',
    metaTitle: 'FB2 to PDF - FictionBook Ebook Converter',
    metaDescription: 'Convert FB2 and FB2.ZIP FictionBook ebooks to PDF with chapters, cover images and formatting preserved. Batch up to 20 files.',
    keywords: ['fb2 to pdf', 'fictionbook to pdf', 'convert fb2', 'fb2 zip to pdf', 'russian ebook to pdf'],
    description: `
      <p>FB2, or FictionBook, is an XML-based ebook format widely used in Russian-language digital libraries and among fiction collectors. It stores structure cleanly, which makes it a good conversion source - and it is supported by very little mainstream software, which makes conversion necessary.</p>
      <p>Chapters, sections, epigraphs, poem formatting and embedded images all convert, along with the cover. Chapter structure becomes a PDF bookmark tree so navigation survives.</p>
      <p>Compressed .fb2.zip archives are read directly, and up to 20 files can be converted in one batch - useful when a whole series arrives as separate files.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your FB2 files', description: 'Drop in up to 20 .fb2 or .fb2.zip files. Archives are unpacked automatically.' },
      { step: 2, title: 'Choose the page size', description: 'A5 for print-like pages, A4 for more text per page.' },
      { step: 3, title: 'Set the type', description: 'Font size and margins, which set the final page count.' },
      { step: 4, title: 'Convert and download', description: 'Each book becomes its own PDF with chapter bookmarks.' },
    ],
    useCases: [
      { title: 'Reading FB2 on any device', description: 'A format almost nothing supports becomes one that everything supports.', icon: 'book-text' },
      { title: 'Converting a whole series', description: 'Twenty volumes converted in one batch rather than one at a time.', icon: 'library' },
      { title: 'Printing fiction', description: 'A5 pages that read like a paperback when printed and bound.', icon: 'printer' },
    ],
    faq: [
      { question: 'Can I convert .fb2.zip directly?', answer: 'Yes. The archive is unpacked and the FB2 inside is converted - no need to extract it first.' },
      { question: 'Is the cover image included?', answer: 'Yes. The embedded cover becomes the first page.' },
      { question: 'Does poetry formatting survive?', answer: 'Yes. FB2 marks verse and epigraphs explicitly, and that structure is respected in the layout.' },
      { question: 'How many files at once?', answer: 'Up to 20 per batch, each producing its own PDF.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown to PDF',
    metaTitle: 'Markdown to PDF - GFM, Code Highlighting & Themes',
    metaDescription: 'Convert Markdown to PDF with CommonMark and GitHub Flavoured Markdown support, syntax-highlighted code blocks, tables and selectable themes.',
    keywords: ['markdown to pdf', 'md to pdf', 'convert markdown', 'readme to pdf', 'gfm to pdf'],
    description: `
      <p>Markdown is where technical writing actually happens - READMEs, runbooks, design docs, meeting notes. It is also plain text, so sending it to someone who does not read Markdown means sending them a file full of hash symbols and backticks.</p>
      <p>This renders it properly. CommonMark and GitHub Flavoured Markdown are both supported, which means tables, task lists, strikethrough and fenced code blocks all work rather than appearing as literal punctuation. Code blocks get syntax highlighting by language.</p>
      <p>Themes control the finished look - a clean document style for reports, a GitHub-like style for technical docs, or a compact style when you want it to fit on fewer pages. Headings become PDF bookmarks so long documents stay navigable.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your Markdown', description: 'Drop in up to 10 .md, .markdown or .txt files.' },
      { step: 2, title: 'Pick a theme', description: 'Document, GitHub-style or compact, depending on where the PDF is going.' },
      { step: 3, title: 'Set page options', description: 'Page size, margins and whether code blocks are highlighted.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF with headings as bookmarks.' },
    ],
    useCases: [
      { title: 'Documentation hand-off', description: 'A README delivered as a formatted PDF to someone who will not open a repository.', icon: 'file-code' },
      { title: 'Technical reports', description: 'Notes written in Markdown converted into a document with syntax-highlighted examples.', icon: 'file-text' },
      { title: 'Runbooks for print', description: 'An operational procedure printed and pinned up next to the machine it applies to.', icon: 'printer' },
    ],
    faq: [
      { question: 'Which Markdown flavour is supported?', answer: 'CommonMark plus GitHub Flavoured Markdown extensions - tables, task lists, strikethrough and fenced code blocks.' },
      { question: 'Do code blocks get highlighted?', answer: 'Yes, by the language tag on the fence. Untagged blocks render as plain monospace.' },
      { question: 'What happens to embedded images?', answer: 'Images referenced by a URL are fetched where accessible. Local relative paths cannot be resolved, since the converter only receives the text file.' },
      { question: 'Are headings turned into bookmarks?', answer: 'Yes. The heading hierarchy becomes a PDF bookmark tree.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email to PDF',
    metaTitle: 'Email to PDF - Convert EML and MSG Files',
    metaDescription: 'Convert .eml and .msg email files to PDF with headers, inline images, clickable links and attachments embedded in the output.',
    keywords: ['email to pdf', 'eml to pdf', 'msg to pdf', 'outlook email to pdf', 'save email as pdf'],
    description: `
      <p>Emails need to be archived as evidence more often than anyone expects - a disputed instruction, a complaint trail, a record for an audit. Forwarding them is not archiving, and a screenshot loses the headers that establish who sent what and when.</p>
      <p>This converts .eml and .msg files into a PDF that keeps the full header block: from, to, cc, bcc, subject and timestamp. Inline images referenced by CID are resolved and placed correctly instead of appearing as broken references, and links stay clickable.</p>
      <p>Attachments are embedded into the PDF, so the record is self-contained: one file holding the message, its formatting and everything that came with it. Date formatting and time zone handling are configurable, which matters when the timestamp is the point of the exercise.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your email files', description: 'Drop in up to 10 .eml or .msg files. Each becomes its own PDF.' },
      { step: 2, title: 'Choose which headers to show', description: 'Include or omit CC and BCC, and set the date format and time zone.' },
      { step: 3, title: 'Decide about attachments', description: 'Embed them into the PDF as file attachments, or list them by name only.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF record.' },
    ],
    useCases: [
      { title: 'Evidence for a dispute', description: 'The email chain preserved with headers and timestamps intact, in a format a tribunal accepts.', icon: 'scale' },
      { title: 'Compliance archiving', description: 'Correspondence stored in a durable format independent of the mail client.', icon: 'archive' },
      { title: 'Case files', description: 'Client correspondence attached to a matter file as PDF rather than loose message files.', icon: 'folder' },
    ],
    faq: [
      { question: 'What is the difference between EML and MSG?', answer: 'EML is the standard format most clients export. MSG is Outlook proprietary format. Both convert here.' },
      { question: 'Are attachments really inside the PDF?', answer: 'Yes, embedded as PDF file attachments, so the record travels as a single file. You can also choose to list them by name instead.' },
      { question: 'Do inline images work?', answer: 'Yes. Images referenced by CID are resolved and placed where they belong rather than left as broken links.' },
      { question: 'Which headers appear?', answer: 'From, to, subject and date always. CC and BCC are optional, since BCC is sometimes not something you want in a distributed record.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ to PDF',
    metaTitle: 'CBZ to PDF - Comic Book Archive Converter',
    metaDescription: 'Convert CBZ and ZIP comic book archives to PDF. Pages stay in order and you control the page size for tablets or printing.',
    keywords: ['cbz to pdf', 'comic to pdf', 'convert cbz', 'comic book archive to pdf', 'cbz converter'],
    description: `
      <p>A CBZ file is a ZIP archive full of images named in page order, plus a convention that comic readers understand. Outside those readers it is just a ZIP - which is why sharing a CBZ with someone usually ends in confusion.</p>
      <p>This unpacks the archive and assembles the images into a PDF, keeping the page order the filenames imply. Mixed image formats inside the archive are handled, and cover images are placed first.</p>
      <p>Page size is worth thinking about. Fitting each page to its image preserves the original aspect ratio, which is what you want on a tablet. A fixed size like A4 makes the result printable and consistent.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your CBZ files', description: 'Drop in up to 10 .cbz or .zip archives.' },
      { step: 2, title: 'Check the page order', description: 'Pages are ordered by filename. The preview shows the sequence so you can confirm it.' },
      { step: 3, title: 'Choose the page size', description: 'Fit to image for tablets, or a fixed size for printing.' },
      { step: 4, title: 'Convert and download', description: 'Save the PDF.' },
    ],
    useCases: [
      { title: 'Reading comics on any device', description: 'A CBZ becomes a PDF that opens without a specialist reader.', icon: 'book-open' },
      { title: 'Sharing scanned artwork', description: 'An image archive delivered as one document rather than a ZIP the recipient has to unpack.', icon: 'share-2' },
      { title: 'Printing a page set', description: 'Fixed page sizes so the printed output is consistent.', icon: 'printer' },
    ],
    faq: [
      { question: 'How is page order determined?', answer: 'By filename, which is the CBZ convention. The preview lets you confirm before converting.' },
      { question: 'Are CBR files supported?', answer: 'No. CBR uses RAR compression. Repack it as a ZIP or CBZ first.' },
      { question: 'Which image formats inside the archive work?', answer: 'JPG, PNG, WebP and BMP, and they can be mixed within one archive.' },
      { question: 'Will the file get bigger?', answer: 'Slightly, from PDF structure overhead. The images themselves are embedded without a second round of compression.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'PDF to JPG',
    metaTitle: 'PDF to JPG - Convert PDF Pages to Images',
    metaDescription: 'Turn PDF pages into JPG images at the DPI and quality you choose. Convert every page or just the ones you need, and download as a ZIP.',
    keywords: ['pdf to jpg', 'pdf to jpeg', 'convert pdf to image', 'pdf page to picture', 'extract pdf as jpg'],
    description: `
      <p>Sometimes a PDF page needs to be an image: to drop into a slide, post somewhere that will not accept a document, or send to someone whose software will not open a PDF at all.</p>
      <p>Each page is rendered to a JPG at the resolution you set. DPI is the setting that decides whether the result is usable - 96 DPI is fine for a web thumbnail, 150 for screen use, 300 when the image will be printed or run through OCR later.</p>
      <p>JPEG is the right choice for pages that are mostly photographs, since it compresses continuous tone efficiently. For pages that are mostly text or line art, PDF to PNG will look noticeably cleaner at the same size.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in up to 10 files. Pages are listed with thumbnails.' },
      { step: 2, title: 'Choose the pages', description: 'Convert everything, or select specific pages or a range.' },
      { step: 3, title: 'Set DPI and quality', description: '150 DPI for screens, 300 for print. Quality trades sharpness against file size.' },
      { step: 4, title: 'Convert and download', description: 'Save the images. Multiple pages arrive as a ZIP.' },
    ],
    useCases: [
      { title: 'Slides and documents', description: 'A page from a report dropped into a presentation as an image.', icon: 'image' },
      { title: 'Posting where PDFs are not allowed', description: 'Social platforms and many forums accept images only.', icon: 'share-2' },
      { title: 'Preparing pages for OCR', description: 'Export at 300 DPI when the images will be fed to a recognition engine.', icon: 'scan-text' },
    ],
    faq: [
      { question: 'What DPI should I use?', answer: '96 for thumbnails, 150 for general screen use, 300 for printing or OCR. Higher DPI means a larger, sharper image.' },
      { question: 'Should I use JPG or PNG?', answer: 'JPG for photo-heavy pages. PNG for text, charts and line art, where JPEG compression leaves visible artefacts around edges.' },
      { question: 'Do I get one file per page?', answer: 'Yes, one JPG per converted page, bundled as a ZIP when there is more than one.' },
      { question: 'Is the text still selectable?', answer: 'No. An image has no text layer. Keep the original PDF if you need searchable text.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF to PNG',
    metaTitle: 'PDF to PNG - Lossless Page Images',
    metaDescription: 'Convert PDF pages to PNG images with no compression artefacts. Best for text, charts and line art, with optional transparent backgrounds.',
    keywords: ['pdf to png', 'convert pdf to png', 'pdf page to png', 'lossless pdf image', 'pdf to transparent png'],
    description: `
      <p>PNG is lossless, which is exactly what you want when the page is mostly text, a chart or line art. JPEG compression leaves visible halos and mottling around sharp black-on-white edges; PNG produces none of that, so screenshots of documents stay crisp.</p>
      <p>PNG also supports transparency. Rendering a page with a transparent background is how you get a diagram or a logo out of a PDF and onto a coloured slide without a white box around it.</p>
      <p>The trade-off is size. A photographic page as PNG can be several times larger than the same page as JPG. For pages that are mostly photographs, use PDF to JPG instead.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Select pages', description: 'All pages or a specific selection.' },
      { step: 3, title: 'Set DPI and background', description: 'Choose the resolution, and whether the background is white or transparent.' },
      { step: 4, title: 'Convert and save', description: 'Download the PNGs, as a ZIP when there are several.' },
    ],
    useCases: [
      { title: 'Diagrams for a presentation', description: 'A transparent-background PNG that sits on a coloured slide without a white rectangle.', icon: 'chart-no-axes-column' },
      { title: 'Documentation screenshots', description: 'Text pages exported losslessly, so small type stays legible.', icon: 'monitor' },
      { title: 'Print-ready page images', description: '300 DPI PNGs with no compression artefacts for a designer to place.', icon: 'printer' },
    ],
    faq: [
      { question: 'Why choose PNG over JPG?', answer: 'Because PNG is lossless. Text and line art keep sharp edges instead of picking up JPEG halos.' },
      { question: 'How do I get a transparent background?', answer: 'Enable the transparent background option. Anything the page did not draw stays clear.' },
      { question: 'Why are my PNGs so large?', answer: 'Lossless compression handles photographs badly. If the page is mostly photographic, JPG will be far smaller at similar visual quality.' },
      { question: 'Does PNG support multiple pages in one file?', answer: 'No. Each page becomes its own PNG. Use PDF to TIFF if you need one multi-page image file.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF to WebP',
    metaTitle: 'PDF to WebP - Small Images for the Web',
    metaDescription: 'Convert PDF pages to WebP images, typically 25 to 35 percent smaller than JPG at the same quality. Built for web publishing.',
    keywords: ['pdf to webp', 'convert pdf to webp', 'pdf page to webp', 'web optimized pdf images', 'small pdf images'],
    description: `
      <p>If the images are going on a website, WebP is the format to use. At matching visual quality it lands roughly 25 to 35 percent smaller than JPEG, and every current browser supports it, so page weight drops without a fallback strategy.</p>
      <p>Each PDF page is rendered and encoded as WebP at the DPI and quality you choose. It handles both photographic and text-heavy pages reasonably, which JPEG and PNG each only manage for one of the two.</p>
      <p>The one caveat is outside the browser: older desktop applications still do not open WebP. If the recipient will open the file in software rather than a browser, JPG or PNG is the safer choice.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Select the pages', description: 'Convert everything or a chosen range.' },
      { step: 3, title: 'Set quality and DPI', description: 'Quality 80 to 85 is the usual sweet spot for web images.' },
      { step: 4, title: 'Convert and download', description: 'Save the WebP files, as a ZIP for multiple pages.' },
    ],
    useCases: [
      { title: 'Document previews on a site', description: 'Page thumbnails that load fast because they are a third smaller than JPGs.', icon: 'globe' },
      { title: 'Image-heavy web pages', description: 'Lower total page weight and better Core Web Vitals scores.', icon: 'gauge' },
      { title: 'App and CDN assets', description: 'Smaller files mean less bandwidth per request at scale.', icon: 'cloud' },
    ],
    faq: [
      { question: 'How much smaller is WebP than JPG?', answer: 'Typically 25 to 35 percent at comparable visual quality, though it depends on the content of the page.' },
      { question: 'Do all browsers support WebP?', answer: 'All current versions do. Very old browsers do not, and some desktop applications still cannot open it.' },
      { question: 'What quality setting should I use?', answer: '80 to 85 for web use. Above 90 the file grows quickly for a difference few people notice.' },
      { question: 'When should I not use WebP?', answer: 'When the recipient will open the file in desktop software rather than a browser. Use JPG or PNG then.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF to BMP',
    metaTitle: 'PDF to BMP - Uncompressed Bitmap Export',
    metaDescription: 'Convert PDF pages to uncompressed BMP bitmaps for legacy software and imaging systems that accept nothing else.',
    keywords: ['pdf to bmp', 'convert pdf to bitmap', 'pdf page to bmp', 'uncompressed pdf image', 'legacy image format'],
    description: `
      <p>Nobody chooses BMP for its merits. You need it because a piece of software refuses everything else - industrial control systems, older medical and laboratory equipment, embedded displays, and legacy Windows applications that were written when BMP was the obvious choice.</p>
      <p>Each page is rendered to an uncompressed bitmap at the DPI you set. Because there is no compression, there are no artefacts at all, and the files are large: a single A4 page at 300 DPI runs to roughly 25 MB.</p>
      <p>For anything with a modern image decoder, PNG gives you the same lossless quality at a fraction of the size. BMP is the right answer only when compatibility leaves you no choice.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Select pages', description: 'Choose which pages to export. Large bitmaps add up fast.' },
      { step: 3, title: 'Set the DPI', description: 'Use the lowest DPI the target system will accept - file size scales with the square of resolution.' },
      { step: 4, title: 'Convert and download', description: 'Save the bitmaps, as a ZIP for multiple pages.' },
    ],
    useCases: [
      { title: 'Legacy application input', description: 'Software that will only import BMP, still running because replacing it is not an option.', icon: 'hard-drive' },
      { title: 'Industrial and lab equipment', description: 'Imaging and control systems with fixed format requirements.', icon: 'cpu' },
      { title: 'Embedded displays', description: 'Devices with minimal decoders that read raw bitmap data directly.', icon: 'monitor' },
    ],
    faq: [
      { question: 'Why are the files so large?', answer: 'BMP stores every pixel with no compression. An A4 page at 300 DPI is about 25 MB.' },
      { question: 'Should I use PNG instead?', answer: 'Almost always, unless the receiving system specifically requires BMP. PNG is lossless too and far smaller.' },
      { question: 'What DPI do I need?', answer: 'The lowest the target system accepts. Doubling DPI quadruples the file size.' },
      { question: 'Is there any quality loss?', answer: 'None from compression. The only limit is the rendering resolution you chose.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF to TIFF',
    metaTitle: 'PDF to TIFF - Multi-Page Image Export',
    metaDescription: 'Convert a PDF to TIFF, including a single multi-page TIFF holding every page. Built for archiving, fax systems and document imaging.',
    keywords: ['pdf to tiff', 'pdf to tif', 'multipage tiff export', 'pdf to fax format', 'archival tiff'],
    description: `
      <p>TIFF matters in document imaging for one reason above the others: a single TIFF file can hold every page of a document. Records systems, fax gateways and archival workflows are often built around exactly that, and will reject a folder of individual images.</p>
      <p>You can export one multi-page TIFF for the whole document, or separate files per page when the receiving system prefers that. Compression is selectable - LZW for general lossless use, CCITT Group 4 for bitonal scans destined for fax or archival systems, or none where the requirement says so.</p>
      <p>TIFF is also the format most commonly specified in long-term preservation policies, because it is simple, lossless and has been readable by everything for thirty years.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Choose single or multi-page output', description: 'One TIFF containing all pages, or one file per page.' },
      { step: 3, title: 'Set DPI and compression', description: '300 DPI with Group 4 is the standard combination for bitonal archival scans.' },
      { step: 4, title: 'Convert and download', description: 'Save the TIFF output.' },
    ],
    useCases: [
      { title: 'Document management ingestion', description: 'Records systems that expect one multi-page TIFF per document.', icon: 'database' },
      { title: 'Fax gateways', description: 'CCITT Group 4 bitonal TIFF is what fax systems are built around.', icon: 'printer' },
      { title: 'Long-term preservation', description: 'Archival policies frequently name TIFF as the required master format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can I get all pages in one file?', answer: 'Yes. Multi-page TIFF is the main reason to use this format, and it is the default here.' },
      { question: 'Which compression should I choose?', answer: 'LZW for general lossless use. CCITT Group 4 for black-and-white scans, which is what fax and archival systems expect. None only if a specification demands it.' },
      { question: 'What DPI do archival standards require?', answer: 'Commonly 300 DPI for text documents, sometimes 600 for material with fine detail. Check the specific policy you are working to.' },
      { question: 'Is TIFF lossless?', answer: 'With LZW, PackBits or Group 4, yes. TIFF can also hold JPEG-compressed data, which is not.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF to SVG',
    metaTitle: 'PDF to SVG - Vector Export, No Rasterising',
    metaDescription: 'Convert PDF pages to SVG as true vectors, so text and line art stay sharp at any size and remain editable in design software.',
    keywords: ['pdf to svg', 'convert pdf to vector', 'pdf to editable vector', 'pdf to svg online', 'vector export pdf'],
    description: `
      <p>Exporting a PDF page as an image throws away everything that made it a PDF. Exporting it as SVG keeps the vectors: paths stay paths, text stays text, and the result scales from a favicon to a billboard without a soft edge anywhere.</p>
      <p>It is also editable. An SVG opens in Illustrator, Inkscape, Figma or Sketch as objects you can select and modify, which is what you need when a logo only exists inside a PDF and you have to recolour it or pull one element out.</p>
      <p>Because SVG is a web format, the output drops straight into a web page as inline markup - sharp on every display density, with no separate retina asset to manage.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Pages are listed with previews.' },
      { step: 2, title: 'Choose the pages', description: 'Export every page or select individual ones.' },
      { step: 3, title: 'Convert', description: 'Each page is translated into vector paths rather than rendered to pixels.' },
      { step: 4, title: 'Download the SVGs', description: 'Save one SVG per page, bundled as a ZIP for multiple pages.' },
    ],
    useCases: [
      { title: 'Recovering a logo', description: 'The only copy of a client logo lives inside a PDF. Export it as SVG and it becomes editable again.', icon: 'shapes' },
      { title: 'Diagrams for the web', description: 'Technical drawings that stay crisp on any display without multiple raster sizes.', icon: 'git-branch' },
      { title: 'Design edits', description: 'Open the page in Illustrator or Figma and adjust individual elements.', icon: 'palette' },
    ],
    faq: [
      { question: 'Is the output genuinely vector?', answer: 'Yes. Vector content is translated into SVG paths, not rasterised, so there is no resolution limit.' },
      { question: 'What happens to text?', answer: 'It is exported as text where the font can be referenced or embedded, otherwise converted to outlines - visually identical, but no longer editable as type.' },
      { question: 'And images inside the page?', answer: 'They are embedded as raster data within the SVG. A photo does not become vector just because the container is.' },
      { question: 'Can I edit the result?', answer: 'Yes, in any vector editor - Illustrator, Inkscape, Figma or Sketch.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF to Greyscale',
    metaTitle: 'Convert PDF to Greyscale - Cut Printing Costs',
    metaDescription: 'Convert a colour PDF to greyscale to reduce printing costs and file size, while keeping the text fully selectable and searchable.',
    keywords: ['pdf to greyscale', 'pdf to grayscale', 'black and white pdf', 'convert pdf colors', 'monochrome pdf'],
    description: `
      <p>Colour printing costs several times what greyscale does, and a print queue that detects any colour on the page will bill the whole job at the colour rate - even if the only colour is a blue hyperlink in the footer.</p>
      <p>Converting to greyscale removes that. Colours are mapped to their luminance values, so the page keeps its tonal structure while containing no colour at all. Printers charge the mono rate, and file size usually drops too.</p>
      <p>The text layer is not touched. Search, copy and accessibility tools work exactly as they did - this is a colour conversion, not a rasterising step.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Convert', description: 'Colours are mapped to greyscale across the whole document.' },
      { step: 3, title: 'Check the contrast', description: 'Review the preview. Colours of similar lightness can become hard to distinguish once desaturated.' },
      { step: 4, title: 'Download', description: 'Save the greyscale PDF.' },
    ],
    useCases: [
      { title: 'Bulk printing', description: 'A 200-page document printed at mono rates rather than colour, because there is no colour left to detect.', icon: 'printer' },
      { title: 'Fax and scan workflows', description: 'Systems that are monochrome anyway handle a greyscale source more predictably.', icon: 'scan' },
      { title: 'Smaller files', description: 'Dropping colour channels typically reduces size, especially on image-heavy pages.', icon: 'file-down' },
    ],
    faq: [
      { question: 'Is the text still searchable?', answer: 'Yes. Only colour values change; the text layer is untouched.' },
      { question: 'Can I convert it back to colour?', answer: 'No. Colour information is discarded, so keep your original if you might need it.' },
      { question: 'What happens to charts that rely on colour coding?', answer: 'Series with similar lightness can become indistinguishable. Check the result, and consider adding patterns or labels before converting.' },
      { question: 'How much smaller will the file be?', answer: 'Often 20 to 40 percent for image-heavy documents. Text-only files change very little.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF to JSON',
    metaTitle: 'PDF to JSON - Extract Text and Metadata',
    metaDescription: 'Extract PDF text, metadata and page structure into structured JSON for scripts, pipelines and search indexing.',
    keywords: ['pdf to json', 'extract pdf text', 'pdf data extraction', 'pdf text api', 'parse pdf'],
    description: `
      <p>When a PDF is an input to a program rather than something a person reads, you need the content as data. Copying and pasting from a viewer does not scale past the second document.</p>
      <p>This produces structured JSON: the text of each page, the document metadata - title, author, creation and modification dates, producer - and page-level details such as dimensions and rotation. Text is grouped by page so you can address a specific one rather than parsing one long string.</p>
      <p>The output is designed to be consumed directly by a script, whether you are indexing documents for search, feeding text into an analysis pipeline, or checking a batch of files for a particular clause.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files. Each produces its own JSON.' },
      { step: 2, title: 'Choose what to include', description: 'Page text, document metadata, page dimensions, or all of it.' },
      { step: 3, title: 'Extract', description: 'The text layer is read page by page and assembled into the JSON structure.' },
      { step: 4, title: 'Download the JSON', description: 'Save the file and feed it into your pipeline.' },
    ],
    useCases: [
      { title: 'Search indexing', description: 'Extract text from a document set to populate a search index.', icon: 'search' },
      { title: 'Automated checks', description: 'Scan a batch of contracts for a required clause without opening any of them.', icon: 'file-search' },
      { title: 'Feeding an analysis pipeline', description: 'Structured input for text analysis or a machine learning workflow.', icon: 'braces' },
    ],
    faq: [
      { question: 'Does this work on scanned PDFs?', answer: 'No. A scan has no text layer, so extraction returns nothing. Run OCR PDF first, then extract.' },
      { question: 'Is the reading order reliable?', answer: 'For single-column documents, yes. Multi-column layouts and complex tables can interleave, because PDFs store positioned glyphs rather than logical flow.' },
      { question: 'Which metadata fields come through?', answer: 'Title, author, subject, keywords, creator, producer, and creation and modification dates, where the document sets them.' },
      { question: 'Can I get tables as structured data?', answer: 'Use Extract Tables for that. It detects table structure and exports rows and columns rather than a flat text run.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF to Word',
    metaTitle: 'PDF to Word - Convert PDF to Editable DOCX',
    metaDescription: 'Convert a PDF into an editable Word document, keeping paragraphs, headings, tables and images in place. Opens in Word, Docs and LibreOffice.',
    keywords: ['pdf to word', 'pdf to docx', 'convert pdf to editable', 'pdf to doc', 'edit pdf in word'],
    description: `
      <p>PDFs are built to be read, not revised, which is a problem when you have the PDF and need the text - the original document is gone, or was never yours, and retyping four pages is an hour you will not get back.</p>
      <p>This reconstructs an editable Word document from the PDF. Paragraphs are rebuilt as flowing text rather than isolated lines, headings are detected from font size and weight, tables are rebuilt as Word tables, and images are placed in position.</p>
      <p>It will not be a perfect facsimile. PDF stores glyph positions, not document structure, so reconstruction involves inference - complex multi-column layouts and heavily designed pages need cleaning up afterwards. For text-led documents, the result is usually close.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Text-based PDFs convert well; scans need OCR first.' },
      { step: 2, title: 'Convert', description: 'Text is analysed for paragraph, heading and table structure.' },
      { step: 3, title: 'Download the DOCX', description: 'Save the Word file.' },
      { step: 4, title: 'Tidy up in Word', description: 'Check headings and tables. Complex layouts usually need a few adjustments.' },
    ],
    useCases: [
      { title: 'Reusing content you no longer have the source for', description: 'Last year report exists only as a PDF. Convert it and edit this year figures in.', icon: 'file-text' },
      { title: 'Repurposing text', description: 'Pull the wording out of a PDF proposal for a new document without retyping it.', icon: 'copy' },
      { title: 'Filling in a flat form', description: 'A form with no fields becomes a Word document you can type into.', icon: 'edit' },
    ],
    faq: [
      { question: 'How accurate is the conversion?', answer: 'Good for text-led documents. Multi-column layouts, sidebars and heavy design work need manual cleanup, because PDF does not record document structure.' },
      { question: 'Will it work on a scanned PDF?', answer: 'Not directly - a scan is an image. Run OCR PDF first to add a text layer, then convert.' },
      { question: 'Are tables preserved?', answer: 'Detected tables are rebuilt as real Word tables. Tables drawn without ruling lines are harder to detect and may come out as text.' },
      { question: 'Does it open in Google Docs?', answer: 'Yes. The output is standard DOCX, which Word, Google Docs, LibreOffice and Pages all open.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF to PowerPoint',
    metaTitle: 'PDF to PowerPoint - Convert PDF to PPTX Slides',
    metaDescription: 'Convert a PDF into a PowerPoint presentation with one slide per page, so a deck that only exists as a PDF becomes editable again.',
    keywords: ['pdf to powerpoint', 'pdf to pptx', 'pdf to slides', 'convert pdf to presentation', 'edit pdf deck'],
    description: `
      <p>Decks circulate as PDFs. When you need to present one, update three numbers, or reuse two slides in your own deck, the PDF is the wrong end of the pipeline and the original PPTX is usually nowhere to be found.</p>
      <p>This converts each PDF page into a slide. Layout and images are preserved in position, and text is placed in text boxes so you can edit it rather than being handed a flat picture per slide.</p>
      <p>It reconstructs appearance, not the original design system. Master slides, theme colours and animations were never in the PDF, so a converted deck needs restyling if it has to match a template exactly.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Each page becomes one slide.' },
      { step: 2, title: 'Convert', description: 'Pages are analysed for text blocks and images and rebuilt as slide elements.' },
      { step: 3, title: 'Download the PPTX', description: 'Save the presentation.' },
      { step: 4, title: 'Restyle in PowerPoint', description: 'Apply your template and adjust the text boxes that need it.' },
    ],
    useCases: [
      { title: 'Editing a deck you only have as PDF', description: 'Update the figures on three slides without rebuilding the whole presentation.', icon: 'presentation' },
      { title: 'Reusing slides', description: 'Pull two slides out of a supplied PDF deck into your own.', icon: 'copy' },
      { title: 'Presenting from PowerPoint', description: 'Get presenter view and notes, which a PDF viewer does not offer.', icon: 'monitor-play' },
    ],
    faq: [
      { question: 'Will the text be editable?', answer: 'Yes, text is placed in editable text boxes. Positioning may need adjusting since PDF records where glyphs sit, not how they were laid out.' },
      { question: 'Does one page become one slide?', answer: 'Yes, in order, at the page aspect ratio.' },
      { question: 'Do animations come back?', answer: 'No. They were removed when the deck became a PDF and cannot be recovered.' },
      { question: 'Will it match our corporate template?', answer: 'Not automatically. Theme and master information is not stored in a PDF, so apply your template afterwards.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF to Excel',
    metaTitle: 'PDF to Excel - Extract Tables Into a Spreadsheet',
    metaDescription: 'Pull tables out of a PDF into an Excel spreadsheet with rows and columns intact, so numbers land in cells you can calculate with.',
    keywords: ['pdf to excel', 'pdf to xlsx', 'extract pdf tables', 'pdf table to spreadsheet', 'convert pdf to spreadsheet'],
    description: `
      <p>Financial statements, price lists and statistical reports arrive as PDFs, and the numbers in them are read-only. Retyping a 200-row table is slow and introduces errors in exactly the places that matter.</p>
      <p>This detects the table structure and writes it into an XLSX file with values in individual cells - so a column of figures is a column you can sum, not a paragraph of text. Multiple tables can go to separate worksheets, which keeps a multi-table report navigable.</p>
      <p>Detection works best on tables with visible ruling lines or consistent column alignment. Tables held together only by whitespace, and cells spanning several columns, are where you should expect to check the output.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Pages are scanned for table structures.' },
      { step: 2, title: 'Review what was detected', description: 'Confirm the tables found and their column boundaries.' },
      { step: 3, title: 'Choose the sheet layout', description: 'All tables on one sheet, or one worksheet per table.' },
      { step: 4, title: 'Download the XLSX', description: 'Open it in Excel, Google Sheets or LibreOffice and check the totals.' },
    ],
    useCases: [
      { title: 'Financial analysis', description: 'Statement tables from a PDF annual report, in cells you can build a model on.', icon: 'table' },
      { title: 'Price list imports', description: 'A supplier PDF catalogue turned into a spreadsheet ready for your system.', icon: 'file-spreadsheet' },
      { title: 'Research data', description: 'Result tables from a published paper, extracted for your own analysis.', icon: 'chart-line' },
    ],
    faq: [
      { question: 'How accurate is table detection?', answer: 'Reliable for tables with ruling lines or clean column alignment. Whitespace-only tables and merged cells need checking.' },
      { question: 'Does it work on scanned PDFs?', answer: 'Not directly. Run OCR PDF first so there is a text layer to work from.' },
      { question: 'Are numbers real numbers in Excel?', answer: 'Numeric-looking cells are written as numbers so you can calculate with them. Currency symbols and thousands separators may need a format pass.' },
      { question: 'What if I only want the raw table data?', answer: 'Extract Tables exports to CSV, JSON or Markdown, which is often easier to feed into a script.' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF to Markdown',
    metaTitle: 'PDF to Markdown - Convert PDF for Docs and Wikis',
    metaDescription: 'Convert PDF text to Markdown with headings, lists and paragraph structure detected, ready for a wiki, a repository or a static site.',
    keywords: ['pdf to markdown', 'pdf to md', 'convert pdf to markdown', 'pdf to wiki', 'pdf to plain text structure'],
    description: `
      <p>Documentation increasingly lives in Markdown - in repositories, wikis and static site generators. Legacy documentation lives in PDFs. Moving from one to the other by hand is the kind of task that quietly consumes a week.</p>
      <p>This converts the PDF text into Markdown with structure preserved. Headings are detected from font size and weight and written as hash levels, bulleted and numbered lists are recognised and marked up, and paragraphs are joined into single blocks rather than left as one line per PDF line.</p>
      <p>You can restrict the conversion to a page range, which is useful when only one chapter of a long manual needs to move into the new system.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. It needs a text layer, so run OCR first on scans.' },
      { step: 2, title: 'Choose a page range', description: 'Convert the whole document or just the section you need.' },
      { step: 3, title: 'Convert', description: 'Structure is inferred from typography and written as Markdown.' },
      { step: 4, title: 'Download and review', description: 'Save the .md file and check the heading levels came out as you expected.' },
    ],
    useCases: [
      { title: 'Migrating documentation', description: 'A PDF manual moved into a docs site or repository as Markdown.', icon: 'file-code' },
      { title: 'Wiki imports', description: 'Legacy PDFs turned into wiki pages that can be searched and edited.', icon: 'book-open' },
      { title: 'Version-controlled text', description: 'Content in a format where changes produce a readable diff.', icon: 'git-commit' },
    ],
    faq: [
      { question: 'How are headings identified?', answer: 'By relative font size and weight. Documents with consistent typography convert cleanly; inconsistent ones need heading levels adjusted afterwards.' },
      { question: 'Do tables convert?', answer: 'Simple tables become Markdown pipe tables. Complex or merged-cell tables are better handled by Extract Tables.' },
      { question: 'What happens to images?', answer: 'Markdown references text, not binary data. Use Extract Images to pull the images out separately and link them.' },
      { question: 'Will it work on a scan?', answer: 'Only after OCR. Without a text layer there is nothing to convert.' },
    ],
  },

  'ocr-pdf': {
    title: 'OCR PDF',
    metaTitle: 'OCR PDF - Make Scanned PDFs Searchable',
    metaDescription: 'Run OCR on a scanned PDF to add a searchable text layer, so you can find and copy text. Supports multiple languages, entirely in your browser.',
    keywords: ['ocr pdf', 'searchable pdf', 'scanned pdf to text', 'pdf text recognition', 'make pdf searchable'],
    description: `
      <p>A scanned PDF is a photograph of a document. It looks like text to you and is completely opaque to your computer - Ctrl+F finds nothing, you cannot copy a sentence, and screen readers have nothing to read. Which is why a folder of scanned contracts is effectively unsearchable.</p>
      <p>OCR fixes that by recognising the characters in the image and adding an invisible text layer positioned behind them. The page looks identical; search, copy and text selection start working.</p>
      <p>Recognition runs in your browser, which is unusual for OCR and the reason this is safe to use on documents you cannot send to a third-party service. Multiple languages are supported, and picking the right one measurably improves accuracy - the engine uses language models, not just letter shapes.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the scanned PDF', description: 'Drop in the file. Higher-resolution scans give better results - 300 DPI is the usual target.' },
      { step: 2, title: 'Choose the language', description: 'Select the language of the document. This matters more than people expect.' },
      { step: 3, title: 'Run recognition', description: 'Pages are processed in turn. Expect a few seconds per page; the language data downloads once on first use.' },
      { step: 4, title: 'Download the searchable PDF', description: 'The result looks the same but the text is now selectable and searchable.' },
    ],
    useCases: [
      { title: 'Making an archive searchable', description: 'Years of scanned invoices become a set you can search by supplier name.', icon: 'search' },
      { title: 'Quoting from a scanned document', description: 'Copy a clause out of a scanned contract instead of retyping it.', icon: 'copy' },
      { title: 'Accessibility', description: 'Screen readers cannot read an image. A text layer makes the document accessible.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'How accurate is it?', answer: 'On a clean 300 DPI scan of printed text, typically above 95 percent. Accuracy falls with low resolution, skew, faint print and handwriting.' },
      { question: 'Does the page look different afterwards?', answer: 'No. The text layer is invisible and sits behind the image, so the appearance is unchanged.' },
      { question: 'Is my document uploaded for processing?', answer: 'No. Recognition runs in your browser, which is what makes it usable for confidential material.' },
      { question: 'How can I improve the results?', answer: 'Deskew the scan first, make sure the resolution is at least 300 DPI, and select the correct language before running.' },
    ],
  },

  'extract-images': {
    title: 'Extract Images',
    metaTitle: 'Extract Images From a PDF at Full Quality',
    metaDescription: 'Pull the embedded images out of a PDF at their original resolution, filter out icons and specks, and download everything as a ZIP.',
    keywords: ['extract images from pdf', 'pdf image extractor', 'save pdf images', 'get pictures from pdf', 'pdf to images'],
    description: `
      <p>There is an important difference between extracting images and converting pages to images. Converting renders the whole page, including text, at whatever resolution you pick. Extracting pulls out the original embedded image files at the resolution they were stored at - which is often much higher than the page displays.</p>
      <p>That matters when you want the photograph, not a picture of the page it sits on. A brochure page might display an image at 4 inches wide while carrying a 3,000 pixel original.</p>
      <p>The small-image filter is the setting that makes the output usable. Without it you get every bullet glyph, rule and logo fragment on every page - hundreds of files. Filtering by minimum dimensions leaves you with the images you actually wanted.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load your PDFs', description: 'Drop in up to 20 files. Embedded images are catalogued per page.' },
      { step: 2, title: 'Set the size filter', description: 'Choose minimum width and height to exclude icons, bullets and decorative fragments.' },
      { step: 3, title: 'Review the list', description: 'Found images are shown with their dimensions and formats.' },
      { step: 4, title: 'Download as a ZIP', description: 'All images are saved at their original resolution and format.' },
    ],
    useCases: [
      { title: 'Recovering photographs', description: 'Get the full-resolution photos out of a brochure whose source files are long gone.', icon: 'image' },
      { title: 'Reusing figures', description: 'Pull the charts from a published report to reference in a new document.', icon: 'chart-no-axes-column' },
      { title: 'Auditing a document', description: 'See exactly which images a PDF contains, including any that are cropped or hidden on the page.', icon: 'file-search' },
    ],
    faq: [
      { question: 'How is this different from PDF to JPG?', answer: 'PDF to JPG renders whole pages. This extracts the original embedded image files, usually at higher resolution than the page displays.' },
      { question: 'Why did I get hundreds of tiny files?', answer: 'Bullets, rules and logo fragments are all images. Raise the minimum size filter.' },
      { question: 'What formats do the images come out as?', answer: 'Whatever they were stored as - usually JPEG or PNG. No re-encoding, so no quality loss.' },
      { question: 'Can it recover an image that is cropped on the page?', answer: 'Often yes. PDFs frequently store the full image and display only part of it, so the extracted file can contain more than you saw.' },
    ],
  },

  'extract-tables': {
    title: 'Extract Tables',
    metaTitle: 'Extract Tables From a PDF to CSV or JSON',
    metaDescription: 'Detect tables in a PDF and export them as CSV, JSON or Markdown with rows and columns intact, ready for a script or a spreadsheet.',
    keywords: ['extract tables from pdf', 'pdf table to csv', 'pdf table extraction', 'pdf to json table', 'scrape pdf table'],
    description: `
      <p>Table data locked in a PDF is the most common data-entry trap there is. Copying and pasting a table into a spreadsheet produces a single column of mush, because PDFs store where each piece of text sits rather than which cell it belongs to.</p>
      <p>This detects table structure - from ruling lines where they exist, and from column alignment where they do not - and exports real rows and columns. Three output formats cover the usual destinations: CSV for spreadsheets, JSON for scripts, and Markdown for documentation.</p>
      <p>Every detected table is previewed before export, so you can confirm the column boundaries landed correctly rather than discovering a misalignment after you have built something on top of the data.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Pages are analysed for table structures.' },
      { step: 2, title: 'Check the detected tables', description: 'Each is previewed with its rows and columns so you can verify the boundaries.' },
      { step: 3, title: 'Choose the export format', description: 'CSV for spreadsheets, JSON for code, Markdown for docs.' },
      { step: 4, title: 'Download', description: 'Save the extracted data.' },
    ],
    useCases: [
      { title: 'Financial data into a model', description: 'Statement tables exported as CSV and dropped straight into a spreadsheet.', icon: 'table' },
      { title: 'Automated data collection', description: 'JSON output feeding a script that processes many reports on a schedule.', icon: 'braces' },
      { title: 'Documentation', description: 'Markdown tables pasted directly into a wiki page or README.', icon: 'file-code' },
    ],
    faq: [
      { question: 'What makes a table detectable?', answer: 'Ruling lines, or consistent column alignment. Tables held together only by irregular whitespace are the hard case.' },
      { question: 'How are merged cells handled?', answer: 'A merged cell is assigned to its first position and the remaining cells are left empty. Check the preview when your table has spanning headers.' },
      { question: 'Does it work on scanned PDFs?', answer: 'Not directly. OCR the document first so there is text to analyse.' },
      { question: 'Should I use this or PDF to Excel?', answer: 'PDF to Excel produces a formatted spreadsheet. This gives you raw CSV, JSON or Markdown, which is better for scripts and version control.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterize PDF',
    metaTitle: 'Rasterize PDF - Flatten Pages to Images',
    metaDescription: 'Convert PDF pages to flat images at a chosen DPI and re-wrap them as a PDF. Removes text, fonts and hidden layers by turning pages into pictures.',
    keywords: ['rasterize pdf', 'flatten pdf to image', 'convert pdf to image pdf', 'remove pdf text layer', 'pdf image only'],
    description: `
      <p>Rasterising turns every page into a picture of itself. It sounds destructive, and it is - that is the point. Once a page is an image there is no text layer to copy, no fonts to go missing, no form fields to interact with, and no hidden or cropped-off content lurking in the file.</p>
      <p>People reach for this in three situations: printing where a printer keeps mangling unusual fonts, distributing a document where the text should not be extractable, and preparing something to feed into a system that only accepts images.</p>
      <p>You control the DPI, and this is the whole decision. 150 is fine on screen, 300 is right for printing, 600 for fine detail at the cost of a much larger file. Output can be a new PDF of image pages, or the images themselves as PNG, JPEG or WebP.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Set the DPI', description: '150 for screen, 300 for print, 600 for fine detail. Higher means larger.' },
      { step: 3, title: 'Choose the output', description: 'A PDF of rasterised pages, or PNG, JPEG or WebP image files.' },
      { step: 4, title: 'Convert and download', description: 'Save the result.' },
    ],
    useCases: [
      { title: 'Fixing a stubborn print job', description: 'A printer choking on unusual embedded fonts will handle flat images without complaint.', icon: 'printer' },
      { title: 'Preventing text extraction', description: 'Distribute a document where copying the text is not straightforward.', icon: 'lock' },
      { title: 'Guaranteed identical rendering', description: 'An image cannot be re-rendered differently by a different viewer.', icon: 'image' },
    ],
    faq: [
      { question: 'Will the text still be searchable?', answer: 'No. Rasterising removes the text layer entirely. Keep your original, or run OCR afterwards if you need search back.' },
      { question: 'Does the file get bigger?', answer: 'Usually, especially for text-heavy documents where vector text is far more compact than pixels. Lower the DPI or compress afterwards.' },
      { question: 'What DPI should I use?', answer: '150 for screen reading, 300 for printing, 600 only when fine detail genuinely matters.' },
      { question: 'Is this the same as flattening?', answer: 'No. Flatten PDF merges form fields and annotations into the page but keeps the text. Rasterising converts everything to pixels.' },
    ],
  },

  // ==================== PAGE LAYOUT & ASSEMBLY ====================

  'alternate-merge': {
    title: 'Alternate and Mix PDF',
    metaTitle: 'Alternate Merge PDF - Interleave Two Scans',
    metaDescription: 'Interleave pages from two PDFs, taking one from each in turn. Fixes single-sided scans where fronts and backs ended up in separate files.',
    keywords: ['alternate merge pdf', 'interleave pdf pages', 'mix pdf pages', 'combine front and back scans', 'zip merge pdf'],
    description: `
      <p>This exists to solve one specific and very common problem. You have a stack of double-sided paper and a scanner that only does one side. You scan all the fronts, flip the stack, scan all the backs - and end up with two files that need to be interleaved 1, 1, 2, 2, 3, 3 rather than concatenated.</p>
      <p>Alternate merge takes one page from each document in turn. Load the fronts and the backs and you get a correctly ordered double-sided document without dragging 80 thumbnails into position by hand.</p>
      <p>The reverse option handles the flipped stack: when you turn the pile over, the backs come out in the opposite order, so reversing the second document during the merge is usually exactly what you need.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load both documents', description: 'Add the fronts first, then the backs. Up to 10 files can be interleaved.' },
      { step: 2, title: 'Reverse if needed', description: 'If the second stack was scanned after flipping the pile, enable reverse so the backs line up with their fronts.' },
      { step: 3, title: 'Check the preview', description: 'The interleaved order is listed page by page. Confirm page 2 is the back of page 1.' },
      { step: 4, title: 'Merge and download', description: 'Save the correctly ordered document.' },
    ],
    useCases: [
      { title: 'Single-sided scanner, double-sided paper', description: 'Fronts and backs in two files, interleaved into one correct document.', icon: 'combine' },
      { title: 'Translations side by side', description: 'Alternate original and translated pages so each is followed by its counterpart.', icon: 'languages' },
      { title: 'Forms and their attachments', description: 'Interleave each form page with its supporting document.', icon: 'files' },
    ],
    faq: [
      { question: 'What if the two files have different page counts?', answer: 'Interleaving continues until one runs out, then the remaining pages are appended in order.' },
      { question: 'When do I need the reverse option?', answer: 'When you flipped the whole stack before the second scan, which puts the backs in opposite order. This is the usual case.' },
      { question: 'Can I interleave more than two documents?', answer: 'Yes, up to 10. Pages are taken from each in rotation.' },
      { question: 'How is this different from normal merge?', answer: 'A normal merge appends one document after another. This weaves them together page by page.' },
    ],
  },

  'add-attachments': {
    title: 'Add Attachments',
    metaTitle: 'Attach Files to a PDF - Embed Any Format',
    metaDescription: 'Embed files of any type inside a PDF - spreadsheets, images, source data - so one document carries everything that belongs with it.',
    keywords: ['add attachment to pdf', 'embed file in pdf', 'pdf file attachment', 'attach spreadsheet to pdf', 'pdf portfolio'],
    description: `
      <p>PDFs can carry other files inside them, which is one of the format most useful and least known capabilities. The report and the spreadsheet behind its numbers travel as a single document, and cannot be separated in a forwarded email.</p>
      <p>Any file type can be embedded - XLSX, CSV, images, ZIP archives, source documents. Each attachment gets a description, so the recipient understands what they are looking at rather than finding an unexplained file called data_final_v3.</p>
      <p>Attachments appear in the attachments pane of Acrobat and most desktop readers, where they can be opened or saved out. Browser-based viewers vary in whether they surface them, so it is worth mentioning the attachments in the document text as well.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document that will carry the attachments.' },
      { step: 2, title: 'Add the files', description: 'Select any files to embed. There is no format restriction.' },
      { step: 3, title: 'Describe each one', description: 'Add a short description so recipients know what each attachment is for.' },
      { step: 4, title: 'Save', description: 'Download the PDF with the files embedded inside it.' },
    ],
    useCases: [
      { title: 'Report plus source data', description: 'The analysis as pages, the spreadsheet behind it embedded, so the working is always available.', icon: 'paperclip' },
      { title: 'Contracts with schedules', description: 'Supporting documents attached to the agreement rather than sent as separate files.', icon: 'file-text' },
      { title: 'Submissions with evidence', description: 'One file to upload, carrying everything the reviewer needs.', icon: 'package' },
    ],
    faq: [
      { question: 'Which file types can I attach?', answer: 'Any. PDF treats attachments as opaque data, so spreadsheets, images, archives and source files all work.' },
      { question: 'How does the recipient get them out?', answer: 'Through the attachments panel in Acrobat, Preview and most desktop readers. Browser viewers are less consistent, so mention them in the document text.' },
      { question: 'Does this make the PDF much larger?', answer: 'It grows by roughly the size of the attached files, since they are stored as-is.' },
      { question: 'Are attachments encrypted with the document?', answer: 'If you password-protect the PDF afterwards, the attachments are protected too.' },
    ],
  },

  'extract-attachments': {
    title: 'Extract Attachments',
    metaTitle: 'Extract Attachments From a PDF',
    metaDescription: 'Find and save every file embedded in a PDF. Batch process several documents and download all attachments as a ZIP.',
    keywords: ['extract pdf attachments', 'get files from pdf', 'save pdf embedded files', 'pdf attachment extractor', 'pdf portfolio extract'],
    description: `
      <p>Embedded files are easy to miss. Many browser PDF viewers do not show the attachments panel at all, so a document can arrive carrying the spreadsheet you actually needed and you would never know it was there.</p>
      <p>This lists everything embedded in the file with names, sizes and types, and saves it all out as a ZIP. You can run several PDFs at once, which is the practical way to check a whole batch rather than opening each one to look.</p>
      <p>It is also a useful audit step. Attachments are content that travels with a document without appearing on any page, so knowing what is inside a file matters before you forward it on.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load your PDFs', description: 'Drop in up to 10 files. Each is scanned for embedded attachments.' },
      { step: 2, title: 'Review what was found', description: 'Attachments are listed with filename, size and type, grouped by source document.' },
      { step: 3, title: 'Download as a ZIP', description: 'Save everything at once, organised by source file.' },
    ],
    useCases: [
      { title: 'Getting the data behind a report', description: 'The spreadsheet embedded in a published PDF, extracted rather than requested by email.', icon: 'download' },
      { title: 'Unpacking a PDF portfolio', description: 'Multi-document portfolios split back into their component files.', icon: 'package-open' },
      { title: 'Auditing before forwarding', description: 'Check what a document is carrying that does not appear on any page.', icon: 'file-search' },
    ],
    faq: [
      { question: 'Why did I not know there were attachments?', answer: 'Most browser PDF viewers do not display the attachments panel. The files are there; the interface just never mentions them.' },
      { question: 'Can I extract from several PDFs at once?', answer: 'Yes, up to 10 per run, with the output organised by source document.' },
      { question: 'What if the PDF is password protected?', answer: 'Remove the password first with the Unlock PDF tool, then extract.' },
      { question: 'Are the extracted files identical to the originals?', answer: 'Yes. Attachments are stored as opaque data and come out byte for byte.' },
    ],
  },

  'edit-attachments': {
    title: 'Manage Attachments',
    metaTitle: 'Manage PDF Attachments - View, Rename, Remove',
    metaDescription: 'See every file embedded in a PDF, rename them for clarity, and remove the ones that should not be there before you send the document on.',
    keywords: ['manage pdf attachments', 'remove pdf attachment', 'rename pdf attachment', 'edit embedded files pdf', 'pdf attachment manager'],
    description: `
      <p>Attachments accumulate. A document passes through several hands, each adding a supporting file, and by the time it is ready to go out it carries three superseded versions of a spreadsheet and someone internal notes.</p>
      <p>This shows you the full list and lets you act on it: rename attachments so they describe themselves, and remove the ones that should not be distributed. The document pages are untouched - only the embedded file list changes.</p>
      <p>The removal side is a privacy control worth knowing about. Embedded files are invisible in the page content, so a document can leak data through an attachment nobody remembered was there.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document. Every embedded file is listed with its name and size.' },
      { step: 2, title: 'Rename what is unclear', description: 'Give attachments descriptive names so recipients know what they are.' },
      { step: 3, title: 'Remove what should not travel', description: 'Delete superseded versions and anything internal.' },
      { step: 4, title: 'Save', description: 'Download the PDF with the revised attachment list.' },
    ],
    useCases: [
      { title: 'Cleaning up before distribution', description: 'Remove the three old versions of the model before the report goes to the client.', icon: 'file-x' },
      { title: 'Making attachments understandable', description: 'Rename final_v3_actual.xlsx to something a reader can interpret.', icon: 'pencil' },
      { title: 'Pre-release privacy check', description: 'Confirm nothing is riding along that should not leave the building.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'Does removing an attachment shrink the file?', answer: 'Yes, by roughly the size of the file removed, since attachments are stored in full.' },
      { question: 'Can I add attachments here too?', answer: 'Use Add Attachments for that. This tool manages what is already embedded.' },
      { question: 'Are the document pages affected?', answer: 'No. Only the embedded file list changes; page content is untouched.' },
      { question: 'Can removed attachments be recovered?', answer: 'Not from the new file. Keep your original if you may need them.' },
    ],
  },

  'divide-pages': {
    title: 'Divide Pages',
    metaTitle: 'Divide PDF Pages - Split Each Page in Half',
    metaDescription: 'Cut each PDF page into two or more pages horizontally or vertically. Fixes book scans where two pages were captured as one spread.',
    keywords: ['divide pdf pages', 'split pdf page in half', 'separate book scan pages', 'cut pdf page', 'split spread pdf'],
    description: `
      <p>Scan an open book and you capture two pages as one wide image. Read it on a tablet and you are either zooming and panning constantly or squinting at two pages at once. The document needs each spread cut down the middle.</p>
      <p>This divides every page along the axis you choose. A vertical cut splits a landscape spread into two portrait pages. A horizontal cut suits documents printed two-up on a sheet. You can also divide into more than two parts for four-up layouts.</p>
      <p>The cut position is adjustable, because the gutter of a book scan is rarely exactly centred. Nudge the split line until it lands in the gutter rather than through the text.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the scanned document.' },
      { step: 2, title: 'Choose the axis', description: 'Vertical for book spreads, horizontal for two-up printed sheets.' },
      { step: 3, title: 'Set the divisions and position', description: 'Two parts for a spread, more for four-up. Adjust the split line to sit in the gutter.' },
      { step: 4, title: 'Divide and download', description: 'Save the document with each original page split into separate pages.' },
    ],
    useCases: [
      { title: 'Book scans', description: 'A 200-page scan of open spreads becomes 400 single pages that read properly on a tablet.', icon: 'book-open' },
      { title: 'Two-up printed documents', description: 'A booklet printed two pages per sheet, separated back into single pages.', icon: 'columns' },
      { title: 'Wide sheets for smaller screens', description: 'Divide A3 landscape pages into readable A4 portions.', icon: 'scissors' },
    ],
    faq: [
      { question: 'Can I move the split line off centre?', answer: 'Yes, and you usually need to. Book gutters are rarely exactly centred.' },
      { question: 'How many parts can one page become?', answer: 'Two or more. Four is common for four-up layouts.' },
      { question: 'Does dividing lose quality?', answer: 'No. The page content is preserved and the visible area is redefined - nothing is re-rendered.' },
      { question: 'Is this the same as Split PDF?', answer: 'No. Split PDF separates a document into multiple files. This cuts individual pages into smaller pages within one document.' },
    ],
  },

  'add-blank-page': {
    title: 'Add Blank Page',
    metaTitle: 'Insert a Blank Page Into a PDF',
    metaDescription: 'Insert blank pages anywhere in a PDF - for double-sided printing, notes space, or section breaks. Choose position, size and how many.',
    keywords: ['add blank page pdf', 'insert page in pdf', 'add empty page', 'pdf blank page insert', 'double sided printing pdf'],
    description: `
      <p>Blank pages are usually about printing. Duplex printing puts the next section on the back of the last page of the previous one, which is wrong when each chapter is supposed to start on a right-hand page. A blank verso fixes it.</p>
      <p>They also serve as deliberate space: a notes page after each section of a handout, or a separator before an appendix in a bound document.</p>
      <p>Choose where the page goes - at the start, at the end, or after a specific page - how many to insert, and what size. Matching the surrounding pages is the default, which is what you want unless you are inserting a different-format insert on purpose.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document.' },
      { step: 2, title: 'Choose the position', description: 'Start, end, or after a specific page number.' },
      { step: 3, title: 'Set the count and size', description: 'How many blanks, and whether they match the surrounding pages or use a standard size.' },
      { step: 4, title: 'Insert and save', description: 'Download the updated PDF.' },
    ],
    useCases: [
      { title: 'Chapters that start on the right', description: 'A blank verso so each section begins on a recto page when printed double-sided.', icon: 'file-plus' },
      { title: 'Notes pages in a handout', description: 'A blank page after each section for attendees to write on.', icon: 'notebook-pen' },
      { title: 'Section separators', description: 'A blank sheet before each appendix in a bound document.', icon: 'layers' },
    ],
    faq: [
      { question: 'What size will the blank page be?', answer: 'By default it matches the surrounding pages. You can override it with a standard size if you need to.' },
      { question: 'Can I insert several blanks in different places?', answer: 'Run the tool once per position, or use the PDF Multi Tool to do it all in one session.' },
      { question: 'Will page numbers be affected?', answer: 'Existing stamped numbers are page content and do not shift. Re-run Add Page Numbers if you need a corrected sequence.' },
      { question: 'Are the blank pages truly empty?', answer: 'Yes - no content, no watermark, nothing to print.' },
    ],
  },

  'reverse-pages': {
    title: 'Reverse Page Order',
    metaTitle: 'Reverse PDF Page Order',
    metaDescription: 'Flip a PDF so the last page comes first. Fixes documents scanned back to front or fed through a printer in reverse.',
    keywords: ['reverse pdf pages', 'flip pdf order', 'reverse page order pdf', 'backwards pdf fix', 'invert pdf page order'],
    description: `
      <p>Documents come out backwards more often than they should. A sheet feeder that stacks face-up produces a reversed scan. Some printers deliver output in reverse. Occasionally a document was simply assembled the wrong way round.</p>
      <p>Reversing is one click. Page 40 becomes page 1 and so on down the document, with page content untouched.</p>
      <p>Up to 10 files can be reversed in a single run, which matters when a scanning session produced a whole folder in the wrong order rather than one file.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Reverse', description: 'Page order is inverted for each document.' },
      { step: 3, title: 'Download', description: 'Save the corrected files.' },
    ],
    useCases: [
      { title: 'Backwards scans', description: 'A face-up sheet feeder produced a reversed document. One pass fixes it.', icon: 'flip-vertical' },
      { title: 'Reversed print output', description: 'Correcting a file that was assembled in printer output order.', icon: 'printer' },
      { title: 'A batch in the wrong order', description: 'Ten files from one scanning session, all reversed together.', icon: 'files' },
    ],
    faq: [
      { question: 'Does reversing affect page content?', answer: 'No. Only the order changes. Nothing on any page is modified.' },
      { question: 'What happens to bookmarks?', answer: 'They follow their pages to the new positions.' },
      { question: 'Can I reverse only part of the document?', answer: 'Not here - this reverses the whole file. Use Organize PDF to rearrange a specific range.' },
      { question: 'How many files at once?', answer: 'Up to 10 per run, each reversed independently.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotate PDF',
    metaTitle: 'Rotate PDF - Fix Sideways Pages and Save',
    metaDescription: 'Rotate PDF pages 90, 180 or 270 degrees and save the change permanently, so the document opens the right way up for everyone.',
    keywords: ['rotate pdf', 'turn pdf pages', 'fix sideways pdf', 'rotate and save pdf', 'landscape to portrait pdf'],
    description: `
      <p>Rotating a page in a PDF viewer does not save anything. The next person who opens the file sees the same sideways page, because the viewer only changed the display for you.</p>
      <p>This writes the rotation into the document. Turn pages 90 degrees clockwise or anticlockwise, or 180 for pages scanned upside down, and the change is stored so the file opens correctly everywhere.</p>
      <p>You can rotate the whole document or select individual pages, which is the normal case - one or two sheets went through the scanner the wrong way while the rest were fine.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Pages appear as thumbnails at their current orientation.' },
      { step: 2, title: 'Select the pages', description: 'Choose the ones that are wrong, or select all.' },
      { step: 3, title: 'Pick the rotation', description: '90 clockwise, 90 anticlockwise, or 180 for upside-down pages.' },
      { step: 4, title: 'Apply and download', description: 'Save the PDF with the rotation stored permanently.' },
    ],
    useCases: [
      { title: 'Sideways scanner pages', description: 'Three landscape sheets in a portrait document, turned upright and saved.', icon: 'rotate-cw' },
      { title: 'Upside-down scans', description: 'Pages fed in the wrong way, corrected with a 180 degree turn.', icon: 'flip-vertical-2' },
      { title: 'Wide tables and drawings', description: 'Landscape content rotated so it reads correctly in a portrait document.', icon: 'table' },
    ],
    faq: [
      { question: 'Why does rotating in my PDF viewer not stick?', answer: 'Viewers change the display only. Writing the rotation into the file is what makes it permanent.' },
      { question: 'Can I rotate individual pages?', answer: 'Yes. Select any combination of pages and apply the rotation only to them.' },
      { question: 'Does rotating reduce quality?', answer: 'No. It sets a page attribute rather than re-rendering anything.' },
      { question: 'What if I need an angle other than 90 or 180?', answer: 'Use Rotate Custom, which handles arbitrary angles - useful for straightening a crooked scan.' },
    ],
  },

  'rotate-custom': {
    title: 'Rotate by Custom Angle',
    metaTitle: 'Rotate PDF by Any Angle - Straighten Scans',
    metaDescription: 'Rotate PDF pages by any angle, including fractions of a degree, to straighten crooked scans that 90-degree rotation cannot fix.',
    keywords: ['rotate pdf custom angle', 'straighten pdf', 'rotate pdf 5 degrees', 'fix crooked scan', 'precise pdf rotation'],
    description: `
      <p>Standard rotation only offers 90 degree steps, which is no help at all for the most common orientation problem: a page that went through the scanner two degrees off square. Two degrees is enough to look careless and enough to degrade OCR accuracy.</p>
      <p>This accepts any angle, including decimals, so you can enter 1.5 or minus 3.2 and straighten the page properly. A live preview shows the result, so you can nudge the value until the text baselines look level.</p>
      <p>For a whole batch of crooked scans, Deskew PDF detects the angle automatically. Use this tool when you want to set the angle yourself, or when automatic detection has picked the wrong reference line.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document with the crooked pages.' },
      { step: 2, title: 'Enter the angle', description: 'Any value, positive or negative, decimals included. Small corrections are usually under 5 degrees.' },
      { step: 3, title: 'Check the preview', description: 'Adjust until the text baselines sit level against the page edge.' },
      { step: 4, title: 'Apply and save', description: 'Choose which pages to rotate and download the result.' },
    ],
    useCases: [
      { title: 'Straightening a scan', description: 'A page 2.5 degrees off square, corrected so the document looks deliberate.', icon: 'rotate-3d' },
      { title: 'Improving OCR accuracy', description: 'Recognition engines expect horizontal text. Straightening first measurably improves results.', icon: 'scan-text' },
      { title: 'Photographed documents', description: 'Phone photos are never perfectly square. A small rotation fixes the tilt.', icon: 'smartphone' },
    ],
    faq: [
      { question: 'What angles can I use?', answer: 'Any value, including decimals, positive or negative. Fine corrections are usually a few degrees or less.' },
      { question: 'Will the corners get cut off?', answer: 'Rotating a rectangle inside a fixed page can clip the corners. The page box is expanded where needed to avoid losing content.' },
      { question: 'Should I use this or Deskew PDF?', answer: 'Deskew detects the angle automatically across a batch. Use this when you want to set the angle yourself, or when detection got it wrong.' },
      { question: 'Does rotating by an odd angle degrade the page?', answer: 'Vector content and text rotate cleanly. Raster images are resampled, so a very large rotation can soften them slightly.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up Pages',
    metaTitle: 'N-Up PDF - Print 2, 4 or 9 Pages Per Sheet',
    metaDescription: 'Place multiple PDF pages on one sheet - 2-up, 4-up, 6-up or 9-up - to save paper on handouts, drafts and reference copies.',
    keywords: ['n-up pdf', '2 pages per sheet pdf', '4 up printing pdf', 'multiple pages one sheet', 'save paper printing pdf'],
    description: `
      <p>Printing a 200-page document to read once uses 200 sheets. At 2-up it uses 100, at 4-up it uses 50, and for a draft you are marking up rather than presenting, 4-up is usually perfectly legible.</p>
      <p>This builds the imposed document for you rather than relying on a printer driver setting that behaves differently on every machine. Layouts from 2-up to 9-up are available, and you control margins and the spacing between the tiled pages.</p>
      <p>Because the result is a normal PDF, it prints identically anywhere, can be shared, and can be checked on screen before a single sheet is used.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want to condense.' },
      { step: 2, title: 'Choose the layout', description: '2-up for readable drafts, 4-up for reference copies, 9-up for thumbnail overviews.' },
      { step: 3, title: 'Set margins and gaps', description: 'Leave a margin if the sheets will be hole-punched or bound.' },
      { step: 4, title: 'Generate and download', description: 'Save the imposed PDF, ready to print.' },
    ],
    useCases: [
      { title: 'Draft review copies', description: 'A long document at 4-up, marked up with a pen for a fraction of the paper.', icon: 'grid-2x2' },
      { title: 'Slide handouts', description: 'Six slides per page for attendees, printed from a converted deck.', icon: 'presentation' },
      { title: 'Contact sheets', description: '9-up thumbnails of a long document as a visual index.', icon: 'layout-grid' },
    ],
    faq: [
      { question: 'Which layout stays readable?', answer: '2-up keeps body text comfortable. 4-up is fine for most documents. 9-up is really a thumbnail overview rather than something to read.' },
      { question: 'Is the text still selectable?', answer: 'Yes. Pages are scaled and placed as vector content, not rasterised.' },
      { question: 'How is this different from the printer 2-up setting?', answer: 'This produces an actual PDF, so the result is identical on any printer and can be checked or shared beforehand.' },
      { question: 'Can I control the reading order?', answer: 'Pages are placed left to right, top to bottom, which matches how the sheet reads.' },
    ],
  },

  'grid-combine': {
    title: 'Grid Combine',
    metaTitle: 'Combine PDFs Into a Grid on One Page',
    metaDescription: 'Arrange pages from multiple PDFs into a grid on a single page. Useful for comparison sheets, contact sheets and visual summaries.',
    keywords: ['combine pdf into grid', 'pdf collage', 'multiple pdfs one page', 'pdf comparison sheet', 'pdf contact sheet'],
    description: `
      <p>Sometimes the point is to see several documents at once. Six design variants laid out side by side make differences obvious in a way that flipping between six separate files never does.</p>
      <p>This takes pages from multiple PDFs and tiles them into a grid on a single page. You set the number of rows and columns, the spacing between cells, and the overall page size - up to 100 source files in one composition.</p>
      <p>Unlike N-Up, which imposes the pages of one document to save paper, this is about assembling material from different sources into one comparison view.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 100 files. The first page of each is used by default.' },
      { step: 2, title: 'Set the grid', description: 'Choose rows and columns - 2 by 3 gives six cells per page.' },
      { step: 3, title: 'Adjust spacing and page size', description: 'Set the gap between cells and the output page dimensions.' },
      { step: 4, title: 'Generate and download', description: 'Save the combined grid document.' },
    ],
    useCases: [
      { title: 'Design comparison', description: 'Six concepts on one sheet so a client can see them together.', icon: 'layout-grid' },
      { title: 'Visual index', description: 'A contact sheet of many documents as a single reference page.', icon: 'grid-3x3' },
      { title: 'Before and after', description: 'Two versions side by side to make the changes obvious.', icon: 'columns-2' },
    ],
    faq: [
      { question: 'How many files can I combine?', answer: 'Up to 100. They flow across as many grid pages as the layout requires.' },
      { question: 'Are the pages scaled to fit?', answer: 'Yes, proportionally, so nothing is distorted. Cells may have space around them where aspect ratios differ.' },
      { question: 'How is this different from N-Up?', answer: 'N-Up imposes pages from one document to save paper. This assembles pages from many documents into a comparison view.' },
      { question: 'Can I use pages other than the first of each file?', answer: 'Extract the pages you want first, then combine those into the grid.' },
    ],
  },

  'combine-single-page': {
    title: 'Combine Into One Page',
    metaTitle: 'Combine PDF Pages Into One Long Page',
    metaDescription: 'Stitch every PDF page into one continuous long page, so the document scrolls without pagination - ideal for phones and web embedding.',
    keywords: ['combine pdf into one page', 'single page pdf', 'continuous scroll pdf', 'long page pdf', 'stitch pdf pages'],
    description: `
      <p>Page breaks exist because paper has edges. On a phone they are pure friction - you scroll, hit a break, lose your place, and scroll again. Content designed for continuous reading works better without them.</p>
      <p>This stitches every page into one tall page. A 10-page document becomes a single page ten times the height, scrolling smoothly from top to bottom with no interruptions.</p>
      <p>The result is not printable in any useful sense - it is one enormous sheet. That is the trade-off: this is for screen reading, embedding in a web page, or capturing a document as a single continuous image.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want stitched together.' },
      { step: 2, title: 'Set the spacing', description: 'Choose a gap between the joined pages, or zero for a seamless run.' },
      { step: 3, title: 'Combine', description: 'All pages are stacked vertically into one page.' },
      { step: 4, title: 'Download', description: 'Save the single-page PDF.' },
    ],
    useCases: [
      { title: 'Reading on a phone', description: 'Continuous scrolling with no page breaks to lose your place at.', icon: 'smartphone' },
      { title: 'Embedding in a web page', description: 'One continuous page behaves better in an iframe than a paginated document.', icon: 'globe' },
      { title: 'Capturing a whole document as one image', description: 'A single-page source converts to a single tall image.', icon: 'image' },
    ],
    faq: [
      { question: 'Can I print the result?', answer: 'Not sensibly. It is one very tall page. Keep your paginated original for printing.' },
      { question: 'Is there a limit on how many pages?', answer: 'PDF has a maximum page dimension, so extremely long documents may need splitting into a few long pages.' },
      { question: 'Is the text still selectable?', answer: 'Yes. Content is repositioned, not rasterised.' },
      { question: 'What spacing should I use?', answer: 'Zero for a seamless flow, or a small gap if you want the original page boundaries to remain visible.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterize PDF',
    metaTitle: 'Posterize PDF - Split One Page Across Sheets',
    metaDescription: 'Split a large PDF page across multiple printable sheets with overlap for taping, so you can print a poster on an ordinary printer.',
    keywords: ['posterize pdf', 'print poster on multiple pages', 'split large pdf page', 'tile pdf for printing', 'a0 poster on a4'],
    description: `
      <p>You have an A0 poster and an A4 printer. Printing to fit produces something the size of a postcard. Posterising goes the other way: the large page is divided across a grid of ordinary sheets that you assemble into the full-size result.</p>
      <p>The overlap setting is what makes it work in practice. A few millimetres of shared content along each edge gives you something to align when taping the sheets together - without it, matching the seams exactly is near impossible.</p>
      <p>Choose the grid to match your output size: 2 by 2 sheets for a poster twice as wide and tall, 3 by 3 for larger. Alignment marks are printed in the overlap so the joins line up.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the large-format document.' },
      { step: 2, title: 'Set the grid', description: 'Choose how many sheets across and down - 2 by 2, 3 by 3, or larger.' },
      { step: 3, title: 'Set the overlap', description: '5 to 10 mm gives you enough shared content to align the sheets when taping.' },
      { step: 4, title: 'Generate and print', description: 'Download the tiled PDF, print all sheets, and assemble along the overlap marks.' },
    ],
    useCases: [
      { title: 'Posters on an office printer', description: 'An A1 design printed across nine A4 sheets and taped together.', icon: 'layout-dashboard' },
      { title: 'Large technical drawings', description: 'An engineering drawing printed at full scale without a plotter.', icon: 'ruler' },
      { title: 'Full-size templates', description: 'A sewing or woodworking pattern printed at 1:1 across several sheets.', icon: 'scissors' },
    ],
    faq: [
      { question: 'How much overlap should I use?', answer: '5 to 10 mm. Enough to align and tape, not so much that you waste printable area.' },
      { question: 'Do I get alignment marks?', answer: 'Yes, printed in the overlap area so you can match the sheets precisely.' },
      { question: 'Will the print be at true scale?', answer: 'Yes, provided you print at 100 percent with no fit-to-page scaling in the print dialog. That setting is the usual cause of a wrong-size result.' },
      { question: 'How is this different from N-Up?', answer: 'N-Up puts many pages on one sheet. This spreads one page across many sheets - the opposite operation.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF Booklet',
    metaTitle: 'PDF Booklet - Saddle-Stitch Imposition',
    metaDescription: 'Reorder PDF pages for booklet printing so that folding and stapling the stack produces a correctly sequenced booklet.',
    keywords: ['pdf booklet', 'saddle stitch pdf', 'booklet imposition', 'print pdf as booklet', 'fold and staple pdf'],
    description: `
      <p>Booklet printing has a counterintuitive requirement. To make a folded, stapled booklet read correctly, the pages must be printed in a scrambled order - on a 16-page booklet, the first sheet carries pages 16 and 1 on one side and 2 and 15 on the other. Working that out by hand is where the mistakes happen.</p>
      <p>This calculates the imposition for you. Give it the document and it reorders and pairs the pages so that printing double-sided, folding the stack down the middle and stapling the spine produces a booklet that reads 1, 2, 3 straight through.</p>
      <p>Page counts are padded to a multiple of four automatically, because a folded sheet always produces four pages. Standard paper sizes are supported, and the preview shows which pages land on which sheet before you print anything.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want as a booklet.' },
      { step: 2, title: 'Choose the paper size', description: 'Pick the sheet you will print on - two booklet pages are placed on each side.' },
      { step: 3, title: 'Review the imposition', description: 'The preview shows the page pairing per sheet. Padding to a multiple of four is added automatically.' },
      { step: 4, title: 'Print double-sided', description: 'Download, print duplex with short-edge binding, fold the stack and staple the spine.' },
    ],
    useCases: [
      { title: 'Event programmes', description: 'A folded A5 booklet from A4 sheets, printed in-house.', icon: 'book' },
      { title: 'Instruction manuals', description: 'A compact stapled booklet to go in the box with a product.', icon: 'book-open' },
      { title: 'Zines and short publications', description: 'Small print runs produced on an office printer.', icon: 'newspaper' },
    ],
    faq: [
      { question: 'Why is the page order scrambled?', answer: 'Because folding reorders them. Sheet one carries the last and first pages together; the imposition accounts for the fold.' },
      { question: 'What if my page count is not a multiple of four?', answer: 'Blank pages are added automatically. A folded sheet always yields four pages, so the total has to be divisible by four.' },
      { question: 'Which duplex setting do I need?', answer: 'Double-sided with short-edge binding. Long-edge binding produces upside-down alternate pages.' },
      { question: 'Does this work for thick documents?', answer: 'Saddle stitching works up to roughly 60 to 80 pages before the fold bulges. Beyond that, split into signatures and bind them separately.' },
    ],
  },

  // ==================== METADATA & INSPECTION ====================

  'view-metadata': {
    title: 'View PDF Metadata',
    metaTitle: 'View PDF Metadata - Author, Dates & Producer',
    metaDescription: 'Inspect the hidden properties of a PDF: author, title, creation and modification dates, producer software and keywords. Export as JSON.',
    keywords: ['view pdf metadata', 'pdf properties', 'pdf document info', 'check pdf author', 'pdf metadata viewer'],
    description: `
      <p>Every PDF carries a block of information that never appears on a page: who created it, with which software, when it was made and when it was last changed. Most people have no idea it is there, and it is frequently more revealing than the document itself.</p>
      <p>This displays all of it - title, author, subject, keywords, creator and producer applications, and both timestamps - along with structural facts like page count, page dimensions and whether the file is encrypted or linearised.</p>
      <p>Worth checking before you send anything out. The author field often holds a full name or an internal username, and the producer field tells the recipient exactly which software your organisation runs.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Nothing is modified - this is read-only.' },
      { step: 2, title: 'Read the properties', description: 'Document metadata, timestamps and structural details are listed together.' },
      { step: 3, title: 'Export if needed', description: 'Save the metadata as JSON for a record or for scripted processing.' },
    ],
    useCases: [
      { title: 'Pre-release privacy check', description: 'Confirm the author field does not carry a name or username you did not intend to publish.', icon: 'file-search' },
      { title: 'Verifying provenance', description: 'Creation dates and producer software help establish where a document came from.', icon: 'shield-question' },
      { title: 'Cataloguing a document set', description: 'Export metadata as JSON to build an index of an archive.', icon: 'database' },
    ],
    faq: [
      { question: 'What information does a PDF actually store?', answer: 'Title, author, subject, keywords, the creating and producing applications, and creation and modification timestamps - plus structural details such as page count and encryption state.' },
      { question: 'Why does this matter?', answer: 'Because it travels with the file. Author names, internal usernames and software versions are routinely disclosed by accident.' },
      { question: 'Is my file changed?', answer: 'No. This tool only reads.' },
      { question: 'How do I remove what I find?', answer: 'Use Edit Metadata to change specific fields, or Remove Metadata to strip everything.' },
    ],
  },

  'edit-metadata': {
    title: 'Edit PDF Metadata',
    metaTitle: 'Edit PDF Metadata - Title, Author & Keywords',
    metaDescription: 'Change the title, author, subject and keywords stored in a PDF, so search results and document systems show the right information.',
    keywords: ['edit pdf metadata', 'change pdf author', 'set pdf title', 'pdf properties editor', 'pdf keywords'],
    description: `
      <p>The title field matters more than most people realise. It is what a browser tab shows, what document management systems index, and what search engines display - so a PDF whose title reads Microsoft Word - untitled2.docx looks careless in every one of those places.</p>
      <p>Here you can set the title, author, subject and keywords properly. Keywords are searchable in document systems, which makes them worth filling in for anything that will be filed and retrieved later.</p>
      <p>The same tool lets you correct or anonymise the author field, which is the field most likely to carry information you did not mean to publish.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Existing metadata is read and shown in editable fields.' },
      { step: 2, title: 'Edit the fields', description: 'Set title, author, subject and keywords. A descriptive title is the highest-value change.' },
      { step: 3, title: 'Save', description: 'Download the PDF with the updated properties.' },
    ],
    useCases: [
      { title: 'Documents that will be published', description: 'A proper title so search results and browser tabs show something meaningful.', icon: 'file-text' },
      { title: 'Document management systems', description: 'Filled-in keywords and subject so the file is findable later.', icon: 'database' },
      { title: 'Anonymising authorship', description: 'Replace a personal name with an organisation before distribution.', icon: 'user-x' },
    ],
    faq: [
      { question: 'Which field matters most?', answer: 'Title. Browsers, search engines and document systems all display it, and it is the field most often left as a filename.' },
      { question: 'Do timestamps change when I edit metadata?', answer: 'The modification date updates, since the file has been rewritten. Creation date is preserved.' },
      { question: 'What format should keywords be in?', answer: 'Comma-separated terms someone might actually search for. There is no strict limit, but a focused list indexes better than a long one.' },
      { question: 'Can I clear a field completely?', answer: 'Yes - leave it empty. To strip everything at once, use Remove Metadata.' },
    ],
  },

  'page-dimensions': {
    title: 'Page Dimensions',
    metaTitle: 'Check PDF Page Dimensions and Orientation',
    metaDescription: 'Measure every page in a PDF in millimetres, inches or points, see the orientation, and find pages that do not match the rest.',
    keywords: ['pdf page dimensions', 'pdf page size checker', 'measure pdf page', 'pdf page mm inches', 'check pdf orientation'],
    description: `
      <p>Mixed page sizes are the reason a print job comes back wrong. A document assembled from several sources can be A4 throughout except for two Letter pages and one landscape insert, and nothing on screen tells you that.</p>
      <p>This lists every page with its exact dimensions in millimetres, inches or points, its orientation, and the standard size it corresponds to where there is one. Pages that differ from the document majority are highlighted, which is the fastest way to find the odd ones in a 200-page file.</p>
      <p>Useful before sending anything to a commercial printer, and useful for diagnosing why a document that looks fine on screen prints with unexpected margins.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Every page is measured.' },
      { step: 2, title: 'Choose your units', description: 'Millimetres, inches or PDF points, depending on who you are talking to.' },
      { step: 3, title: 'Review the report', description: 'Pages are listed with dimensions, orientation and standard-size match. Outliers are flagged.' },
      { step: 4, title: 'Export if needed', description: 'Save the report as JSON for a record or a pre-print check.' },
    ],
    useCases: [
      { title: 'Pre-print checks', description: 'Confirm every page is the size the printer expects before committing to a run.', icon: 'ruler' },
      { title: 'Finding the odd page out', description: 'Locate the two Letter pages in an otherwise A4 document.', icon: 'file-search' },
      { title: 'Diagnosing print problems', description: 'Unexpected margins usually trace back to a page size mismatch.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is a PDF point?', answer: 'One 72nd of an inch, the native PDF unit. A4 is 595 by 842 points; Letter is 612 by 792.' },
      { question: 'Why do my pages differ by a fraction of a millimetre?', answer: 'Rounding between points and millimetres. Differences under half a millimetre are not real inconsistencies.' },
      { question: 'How do I fix mixed sizes?', answer: 'Use Fix Page Size to standardise the whole document onto one page size.' },
      { question: 'Does it report crop boxes as well as page size?', answer: 'The visible page dimensions are reported, which is what a printer works from.' },
    ],
  },

  'compare-pdfs': {
    title: 'Compare PDFs',
    metaTitle: 'Compare Two PDFs - Find the Differences',
    metaDescription: 'Compare two PDF versions side by side or as an overlay, with differences highlighted so you can see exactly what changed.',
    keywords: ['compare pdf', 'pdf diff', 'find pdf differences', 'compare two pdf versions', 'pdf comparison tool'],
    description: `
      <p>Someone returns a contract saying they made a couple of small changes. Reading 30 pages twice to find them is slow, and the change that matters is exactly the one you will skim past.</p>
      <p>This compares two versions and highlights what differs. Side-by-side view puts the documents next to each other with changes marked on both. Overlay view stacks them so shifted text and moved elements become immediately visible - which side-by-side reading tends to hide.</p>
      <p>Both text and visual differences are picked up, so an amended clause and a swapped logo are both caught. Everything is compared locally, which matters when the two versions are drafts of something confidential.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load both versions', description: 'Add the original and the revised document.' },
      { step: 2, title: 'Choose a view', description: 'Side by side for reading, overlay for spotting moved or shifted content.' },
      { step: 3, title: 'Work through the differences', description: 'Changes are highlighted and can be stepped through page by page.' },
      { step: 4, title: 'Export the comparison', description: 'Save a marked-up PDF as a record of what changed.' },
    ],
    useCases: [
      { title: 'Contract redlines', description: 'Find the two clauses that were quietly amended in a returned draft.', icon: 'file-diff' },
      { title: 'Version control', description: 'Confirm what actually changed between revision 4 and revision 5.', icon: 'git-compare' },
      { title: 'Proof checking', description: 'Verify a corrected proof contains only the corrections that were requested.', icon: 'check-check' },
    ],
    faq: [
      { question: 'Which view should I use?', answer: 'Side by side to read the changes. Overlay to catch content that moved or shifted, which side-by-side reading often misses.' },
      { question: 'Does it detect image changes?', answer: 'Yes. Visual differences are compared as well as text, so a replaced image or logo is flagged.' },
      { question: 'Can I compare scanned documents?', answer: 'Visual comparison works. Text comparison needs a text layer, so OCR both files first for that.' },
      { question: 'Are my documents uploaded?', answer: 'No. Both files are compared in your browser.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs to ZIP',
    metaTitle: 'Package Multiple PDFs Into a ZIP Archive',
    metaDescription: 'Bundle many PDFs into one ZIP archive with optional compression. Easier to send and store than dozens of separate attachments.',
    keywords: ['pdf to zip', 'zip pdf files', 'bundle pdfs', 'package pdf archive', 'compress pdfs into zip'],
    description: `
      <p>Thirty separate PDF attachments is an email nobody wants to receive, and many systems cap the number of attachments regardless of total size. One archive solves both.</p>
      <p>This bundles up to 100 PDFs into a single ZIP. Compression is optional and honest about what it achieves: PDFs are already compressed internally, so expect a few percent rather than dramatic savings. The real benefit is having one file instead of a hundred.</p>
      <p>If you actually need the files to be smaller, run Compress PDF on them first and then archive the results - that works on the image data inside each document, which is where the size is.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 100 files.' },
      { step: 2, title: 'Choose compression', description: 'Enable it for a small reduction, or skip it for a faster archive.' },
      { step: 3, title: 'Create and download', description: 'Save the ZIP.' },
    ],
    useCases: [
      { title: 'Sending many documents at once', description: 'One attachment instead of thirty, within any attachment count limit.', icon: 'file-archive' },
      { title: 'Archiving a project', description: 'All documents for a matter stored as a single dated bundle.', icon: 'archive' },
      { title: 'Batch handover', description: 'A complete document set transferred as one file.', icon: 'package' },
    ],
    faq: [
      { question: 'How much smaller will the ZIP be?', answer: 'Usually only a few percent. PDF content is already compressed, so there is little redundancy left for ZIP to remove.' },
      { question: 'Then why bother?', answer: 'Convenience and attachment limits. One file is far easier to send, store and track than a hundred.' },
      { question: 'How do I actually reduce the size?', answer: 'Run Compress PDF on the files first, then archive them. That reduces the image data inside each document.' },
      { question: 'Are folder structures preserved?', answer: 'Files are added flat by name. Rename beforehand if the grouping matters.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================

  'fix-page-size': {
    title: 'Fix Page Size',
    metaTitle: 'Fix PDF Page Size - Standardise Every Page',
    metaDescription: 'Standardise every page in a PDF to one size, so a document assembled from mixed sources prints consistently.',
    keywords: ['fix pdf page size', 'standardize pdf pages', 'resize pdf pages', 'uniform pdf page size', 'a4 pdf conversion'],
    description: `
      <p>Documents assembled from several sources end up with mixed page sizes: A4 from one contributor, Letter from another, a landscape insert from a third. On screen the difference barely registers. In a printer it produces inconsistent margins, unexpected scaling and occasionally a paper tray change halfway through the job.</p>
      <p>This resizes every page to a single target - A4, Letter, Legal or a custom size. Content is scaled proportionally and centred, so nothing is distorted or cropped.</p>
      <p>Worth running before any print job that came from multiple contributors, and before submitting to a system that requires a specific page size.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Current page sizes are detected and listed.' },
      { step: 2, title: 'Choose the target size', description: 'A4, Letter, Legal or custom dimensions.' },
      { step: 3, title: 'Set the scaling behaviour', description: 'Fit content within the new page and centre it, preserving aspect ratio.' },
      { step: 4, title: 'Apply and download', description: 'Save the standardised document.' },
    ],
    useCases: [
      { title: 'Print jobs from mixed sources', description: 'A bundle of A4 and Letter pages standardised so the whole run prints consistently.', icon: 'printer' },
      { title: 'Submission requirements', description: 'Portals and registries that require a specific page size throughout.', icon: 'upload' },
      { title: 'Professional-looking bundles', description: 'A merged document where every page is the same size, as though it were produced as one.', icon: 'layout' },
    ],
    faq: [
      { question: 'Will content be cropped?', answer: 'No. It is scaled proportionally to fit and centred, so nothing is lost - though smaller content may sit within wider margins.' },
      { question: 'Does this distort the pages?', answer: 'No. Aspect ratio is preserved, which is why fitting a landscape page into portrait leaves space above and below.' },
      { question: 'How do I see what sizes I currently have?', answer: 'Run Page Dimensions first. It lists every page and flags the outliers.' },
      { question: 'Is text still selectable afterwards?', answer: 'Yes. Content is scaled as vector data, not rasterised.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearize PDF',
    metaTitle: 'Linearize PDF for Fast Web View',
    metaDescription: 'Restructure a PDF for fast web view so the first page displays before the whole file has downloaded. Ideal for large documents online.',
    keywords: ['linearize pdf', 'fast web view pdf', 'optimize pdf for web', 'progressive pdf loading', 'pdf streaming'],
    description: `
      <p>A normal PDF stores the information a viewer needs to start rendering at the end of the file, which means a browser has to download the whole thing before it can show page 1. On a 50 MB document over a slow connection, the reader watches a blank screen and gives up.</p>
      <p>Linearising reorganises the internal structure so the first page and the objects it needs come first. A viewer can then render page 1 as soon as the opening chunk has arrived, and fetch the rest in the background or on demand.</p>
      <p>The file size barely changes - this is a reordering, not a compression. It only matters for documents served over a network; a file that is downloaded before opening sees no benefit.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Linearise', description: 'The internal object order is rebuilt for progressive loading.' },
      { step: 3, title: 'Download', description: 'Save the optimised files and serve them from your site.' },
    ],
    useCases: [
      { title: 'Documents published on a website', description: 'A large report where the first page appears immediately instead of after a full download.', icon: 'globe' },
      { title: 'Slow or mobile connections', description: 'Readers on limited bandwidth see content rather than a blank viewer.', icon: 'signal' },
      { title: 'Document portals', description: 'Faster perceived load times across a whole library of files.', icon: 'server' },
    ],
    faq: [
      { question: 'Will the file get smaller?', answer: 'Barely. Linearising reorders content rather than compressing it. Use Compress PDF for size.' },
      { question: 'How do I know it worked?', answer: 'View Metadata reports whether a file is linearised, and Acrobat shows Fast Web View as Yes in document properties.' },
      { question: 'Does it help for files that are downloaded first?', answer: 'No. The benefit only appears when a viewer streams the file over a network.' },
      { question: 'Does the document look any different?', answer: 'No. Content and appearance are identical; only the internal layout changes.' },
    ],
  },

  'repair-pdf': {
    title: 'Repair PDF',
    metaTitle: 'Repair a Damaged or Corrupted PDF File',
    metaDescription: 'Fix PDFs that will not open by rebuilding the internal structure and recovering the readable pages. Works on truncated and damaged files.',
    keywords: ['repair pdf', 'fix corrupted pdf', 'recover pdf file', 'damaged pdf repair', 'pdf will not open'],
    description: `
      <p>A PDF that will not open is usually not destroyed. Most often the cross-reference table - the index that tells a viewer where each object lives - is damaged or missing, while the page content is sitting there intact. Transfers that failed halfway, unreliable storage and buggy software that wrote the file badly all produce this.</p>
      <p>Repair works by scanning the file for the objects it can find and rebuilding the index from scratch, rather than trusting the broken one. Pages that are still readable are recovered; anything genuinely absent cannot be invented.</p>
      <p>How much comes back depends on the damage. A bad index with intact content usually recovers fully. A file truncated at 60 percent gives you roughly the first 60 percent of the pages. Either way it is worth trying before you conclude the document is gone.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add the damaged files', description: 'Drop in up to 10 PDFs, including ones that refuse to open elsewhere.' },
      { step: 2, title: 'Run the repair', description: 'The file is scanned for recoverable objects and the structure is rebuilt.' },
      { step: 3, title: 'Check what was recovered', description: 'The report shows how many pages came back and what could not be read.' },
      { step: 4, title: 'Download the repaired file', description: 'Save the rebuilt PDF and verify the pages you needed are present.' },
    ],
    useCases: [
      { title: 'A file that will not open', description: 'The viewer reports the file is damaged, but the content is intact behind a broken index.', icon: 'wrench' },
      { title: 'An interrupted download or transfer', description: 'Recover whatever portion of the document did arrive.', icon: 'download' },
      { title: 'Recovering from failing storage', description: 'Salvage readable pages from a file rescued off a failing drive.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Can every damaged PDF be repaired?', answer: 'No. Structural damage with intact content usually recovers fully. Content that was never written or has been overwritten cannot be reconstructed.' },
      { question: 'Will I lose pages?', answer: 'Only the ones that are genuinely unreadable. The report tells you exactly what was recovered.' },
      { question: 'What actually causes this?', answer: 'A damaged or missing cross-reference table, most often from an interrupted transfer, storage faults, or software that wrote the file incorrectly.' },
      { question: 'Should I keep the broken original?', answer: 'Yes, until you have confirmed the repaired file contains everything you need.' },
    ],
  },

  'deskew-pdf': {
    title: 'Deskew PDF',
    metaTitle: 'Deskew PDF - Auto-Straighten Scanned Pages',
    metaDescription: 'Detect and correct the tilt in scanned PDF pages automatically. Straighter pages look better and give measurably better OCR results.',
    keywords: ['deskew pdf', 'straighten scanned pdf', 'fix tilted pdf', 'auto straighten pdf', 'correct pdf skew'],
    description: `
      <p>Paper never goes through a scanner perfectly square. A degree or two of tilt is normal, invisible on any single page, and obvious across forty of them - the document reads as sloppy even though nothing is wrong with the content.</p>
      <p>It also costs you accuracy. OCR engines expect horizontal text lines, and recognition rates fall measurably on skewed pages. Deskewing before OCR is one of the cheapest accuracy improvements available.</p>
      <p>Detection is automatic and per page, because different sheets in the same batch tilt by different amounts. The angle is measured from the dominant text baselines, and each page is corrected by its own value. Up to 10 files can be processed in one run.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your scanned PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Let it detect the angles', description: 'Each page is measured independently from its text baselines.' },
      { step: 3, title: 'Review the corrections', description: 'Detected angles are listed per page so you can spot any that look wrong.' },
      { step: 4, title: 'Apply and download', description: 'Save the straightened document.' },
    ],
    useCases: [
      { title: 'Cleaning up a batch scan', description: 'Forty pages, each tilted differently, corrected in one pass.', icon: 'scan' },
      { title: 'Preparing for OCR', description: 'Straightening first measurably improves recognition accuracy.', icon: 'scan-text' },
      { title: 'Archival scanning', description: 'Digitised records that look deliberate rather than rushed.', icon: 'archive' },
    ],
    faq: [
      { question: 'How is the angle detected?', answer: 'From the dominant text baselines on each page, measured page by page since tilt varies across a batch.' },
      { question: 'What if it gets a page wrong?', answer: 'Pages dominated by images or unusual layouts can mislead the detector. Use Rotate Custom to set the angle by hand for those.' },
      { question: 'Does correcting the tilt degrade the image?', answer: 'Rotation resamples raster content, so there is a very slight softening. It is far outweighed by the readability and OCR gains.' },
      { question: 'Should I deskew before or after OCR?', answer: 'Before, always. OCR accuracy depends on horizontal text lines.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF to PDF/A',
    metaTitle: 'Convert PDF to PDF/A for Archiving',
    metaDescription: 'Convert to PDF/A-1b, 2b or 3b for long-term archiving. Fonts are embedded and external dependencies removed so the file stays readable.',
    keywords: ['pdf to pdfa', 'pdfa conversion', 'archival pdf', 'pdf/a-1b', 'long term pdf preservation'],
    description: `
      <p>PDF/A is the ISO standard for documents that must still open correctly decades from now. Its rules exist to remove anything that depends on the outside world: fonts must be embedded rather than referenced, colour must be defined unambiguously, and JavaScript, external links and encryption are prohibited.</p>
      <p>The result is a file that renders identically on any conforming viewer, now or in thirty years - which is why courts, government archives, libraries and regulated industries mandate it.</p>
      <p>Three conformance levels are available. PDF/A-1b is the strictest and most widely required. 2b permits JPEG 2000 compression and transparency. 3b additionally allows embedded source files, which is useful when the original spreadsheet must be archived alongside the document.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Choose the conformance level', description: '1b for the strictest and most commonly mandated, 2b for modern compression, 3b to keep embedded source files.' },
      { step: 3, title: 'Convert', description: 'Fonts are embedded, colour spaces defined, and prohibited features removed.' },
      { step: 4, title: 'Download', description: 'Save the PDF/A-compliant file.' },
    ],
    useCases: [
      { title: 'Court and regulatory filing', description: 'Many jurisdictions require PDF/A for electronic submissions.', icon: 'scale' },
      { title: 'Institutional archives', description: 'Libraries and government archives specify PDF/A as the preservation format.', icon: 'landmark' },
      { title: 'Long-term business records', description: 'Documents that must remain readable well beyond the life of current software.', icon: 'archive' },
    ],
    faq: [
      { question: 'Which level should I choose?', answer: '1b unless you have been told otherwise - it is the strictest and the most widely mandated. Check the specification you are filing against.' },
      { question: 'What gets removed in conversion?', answer: 'JavaScript, embedded multimedia, encryption and external font references. All of these would compromise long-term readability.' },
      { question: 'Will the document look different?', answer: 'Visually it should be identical. Embedding fonts can increase the file size noticeably.' },
      { question: 'Can I convert PDF/A back to a normal PDF?', answer: 'It already is a normal PDF - just one that follows extra rules. Any reader opens it.' },
    ],
  },

  'font-to-outline': {
    title: 'Font to Outline',
    metaTitle: 'Convert PDF Fonts to Outlines',
    metaDescription: 'Convert PDF text to vector outlines so it renders identically everywhere, with no font substitution. Standard practice for print hand-off.',
    keywords: ['pdf font to outline', 'convert text to curves pdf', 'outline pdf fonts', 'flatten pdf fonts', 'print ready pdf'],
    description: `
      <p>Font problems in print are expensive and are always discovered late. A font is not embedded, or the print system has a different version of it, and the substituted typeface reflows the text - so the job comes back with a broken layout after the plates have been made.</p>
      <p>Converting text to outlines eliminates the possibility. Each glyph becomes a vector shape, so there is no font to be missing or substituted. The page renders identically on every device and RIP, which is why print shops routinely ask for outlined files.</p>
      <p>The cost is that the text stops being text. It cannot be searched, selected, copied or read by a screen reader. Outline for the print master and keep the original for everything else.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files.' },
      { step: 2, title: 'Convert the text', description: 'Every glyph is replaced with an equivalent vector path.' },
      { step: 3, title: 'Download', description: 'Save the outlined PDF for print hand-off.' },
      { step: 4, title: 'Keep the original', description: 'Retain the text version for search, accessibility and future edits.' },
    ],
    useCases: [
      { title: 'Commercial print hand-off', description: 'Guaranteed identical rendering with no font substitution risk.', icon: 'printer' },
      { title: 'Unusual or licensed fonts', description: 'Distribute a design without shipping the font file itself.', icon: 'type' },
      { title: 'Signage and large format', description: 'Vector outlines scale cleanly to any size on any output device.', icon: 'maximize' },
    ],
    faq: [
      { question: 'What do I lose?', answer: 'Searchable and selectable text, and screen reader access. The visual result is identical.' },
      { question: 'Does the file get bigger?', answer: 'Often yes. A vector path per glyph takes more space than a character referencing an embedded font.' },
      { question: 'Can it be reversed?', answer: 'No. Once glyphs are shapes there is no character data to recover. Keep the original.' },
      { question: 'Is this the same as rasterising?', answer: 'No. Outlining keeps everything as vectors at infinite resolution. Rasterising converts to pixels.' },
    ],
  },

  'ocg-manager': {
    title: 'Layer Manager',
    metaTitle: 'Manage PDF Layers - View, Toggle & Delete OCGs',
    metaDescription: 'Inspect and control PDF layers (optional content groups). Toggle visibility, rename, or delete layers - including hidden ones you did not know existed.',
    keywords: ['pdf layers', 'optional content groups', 'ocg manager', 'toggle pdf layers', 'remove pdf layer'],
    description: `
      <p>PDFs can contain layers, formally called optional content groups. CAD exports use them for electrical, plumbing and structural plans on one drawing. Maps use them for roads, labels and terrain. Multilingual documents sometimes hold each language in its own layer.</p>
      <p>Most viewers hide this entirely, so a document can carry content that is present in the file but not visible on screen - which is a real disclosure risk. A drawing distributed with a hidden internal-notes layer still contains those notes.</p>
      <p>This lists every layer, shows its visibility state, and lets you toggle, rename or delete them. Deleting removes the content from the file rather than just hiding it, which is what you want before sending a drawing outside your organisation.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. All optional content groups are listed with their current visibility.' },
      { step: 2, title: 'Inspect the layers', description: 'Toggle each one to see what it contains, including any that were hidden by default.' },
      { step: 3, title: 'Rename or delete', description: 'Give layers clearer names, or delete the ones that should not be in the file at all.' },
      { step: 4, title: 'Save', description: 'Download the PDF with the revised layer set.' },
    ],
    useCases: [
      { title: 'CAD drawing hand-off', description: 'Delete the internal-notes layer before the drawing goes to a contractor.', icon: 'layers' },
      { title: 'Checking for hidden content', description: 'Find layers that are present in the file but not shown on screen.', icon: 'eye-off' },
      { title: 'Multilingual documents', description: 'Keep the language layer you need and remove the rest.', icon: 'languages' },
    ],
    faq: [
      { question: 'What is an optional content group?', answer: 'The PDF term for a layer - a named set of content whose visibility can be toggled. CAD, mapping and multilingual documents use them heavily.' },
      { question: 'Does deleting a layer remove the content?', answer: 'Yes. The content is removed from the file, not just hidden - which is the point when the layer holds something confidential.' },
      { question: 'Why can I not see layers in my usual viewer?', answer: 'Most browser viewers do not expose the layers panel at all, so hidden content stays invisible and undiscovered.' },
      { question: 'Can I add new layers?', answer: 'Yes, though most workflows use this to inspect and remove what is already there.' },
    ],
  },

  // ==================== SECURE PDF ====================

  'encrypt-pdf': {
    title: 'Encrypt PDF',
    metaTitle: 'Password Protect a PDF with AES Encryption',
    metaDescription: 'Encrypt a PDF with a password using AES-256. Set separate open and permissions passwords, all handled in your browser.',
    keywords: ['encrypt pdf', 'password protect pdf', 'pdf password', 'secure pdf', 'aes 256 pdf'],
    description: `
      <p>Email is not a secure channel, and attachments get forwarded. Encrypting the document means the content is unreadable without the password, wherever the file ends up.</p>
      <p>Two passwords do different jobs. The user password is required to open the document at all - without it, the content cannot be read. The owner password controls permissions such as printing and copying while still allowing the file to be opened. You can set either or both.</p>
      <p>Encryption uses AES-256, the current standard, and happens in your browser - so the password is never transmitted and the unencrypted file never leaves your machine. Send the password by a different channel from the file itself; emailing both together defeats the exercise.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you want to protect.' },
      { step: 2, title: 'Set the passwords', description: 'A user password to control opening, an owner password to control permissions, or both.' },
      { step: 3, title: 'Choose the permissions', description: 'Decide whether printing, copying, editing and annotating are allowed.' },
      { step: 4, title: 'Encrypt and download', description: 'Save the protected file, and send the password separately.' },
    ],
    useCases: [
      { title: 'Sending confidential documents', description: 'Salary letters, medical records and contracts that stay unreadable if forwarded.', icon: 'lock' },
      { title: 'Regulated data', description: 'Encryption at rest is frequently a compliance requirement for stored documents.', icon: 'shield' },
      { title: 'Controlled distribution', description: 'Readable but not printable or copyable, using an owner password.', icon: 'file-lock' },
    ],
    faq: [
      { question: 'What is the difference between the two passwords?', answer: 'The user password is needed to open the file. The owner password governs what can be done once it is open. Use both for the strongest control.' },
      { question: 'How strong is AES-256?', answer: 'Very. The practical weak point is the password, so use a long one - encryption cannot compensate for guessable credentials.' },
      { question: 'What if I forget the password?', answer: 'The document cannot be recovered. Store the password somewhere reliable before you send the file.' },
      { question: 'Is my password sent anywhere?', answer: 'No. Encryption runs in your browser and the password never leaves your device.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Unlock PDF',
    metaTitle: 'Unlock PDF - Remove a Known Password',
    metaDescription: 'Remove password protection from a PDF you have the password for, so you can open and edit it without entering the password each time.',
    keywords: ['unlock pdf', 'remove pdf password', 'decrypt pdf', 'pdf password remover', 'open protected pdf'],
    description: `
      <p>An encrypted document you work with daily gets tedious - a password prompt every time you open it, and most other tools refuse to touch it at all. If you know the password, there is no reason to keep re-entering it.</p>
      <p>Provide the password and this removes the encryption, producing a normal PDF you can open, edit, merge and process like any other file.</p>
      <p>It requires the correct password. This is not a password recovery tool - AES-256 cannot be broken by guessing, and a tool that claimed otherwise would be lying. If you have lost the password, the document cannot be opened.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the encrypted PDF', description: 'Drop in the protected file.' },
      { step: 2, title: 'Enter the password', description: 'Type the password you use to open the document.' },
      { step: 3, title: 'Remove the encryption', description: 'The document is decrypted and rewritten without protection.' },
      { step: 4, title: 'Download', description: 'Save the unprotected PDF.' },
    ],
    useCases: [
      { title: 'Documents you open constantly', description: 'A bank statement you reference weekly, without the password prompt every time.', icon: 'unlock' },
      { title: 'Preparing a file for other tools', description: 'Most PDF tools refuse encrypted files. Decrypt first, then merge or convert.', icon: 'wrench' },
      { title: 'Long-term archiving', description: 'A stored document that will still be readable when the password has been forgotten.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can this open a PDF whose password I do not know?', answer: 'No. The correct password is required. AES encryption cannot be bypassed, and any tool claiming otherwise is misrepresenting what it does.' },
      { question: 'Is the password sent to a server?', answer: 'No. Decryption happens in your browser.' },
      { question: 'What if the file has restrictions but opens without a password?', answer: 'That is an owner password, not a user password. Use Remove Restrictions for those.' },
      { question: 'Is it legal to do this?', answer: 'For your own documents, or with the owner permission, yes. Removing protection from someone else document without authorisation generally is not.' },
    ],
  },

  'remove-restrictions': {
    title: 'Remove Restrictions',
    metaTitle: 'Remove PDF Restrictions - Enable Printing & Copying',
    metaDescription: 'Remove owner-password restrictions from a PDF that opens without a password, so printing, copying and editing work again.',
    keywords: ['remove pdf restrictions', 'unlock pdf printing', 'enable pdf copying', 'remove pdf permissions', 'pdf secured document'],
    description: `
      <p>This is the frustrating category: a PDF that opens perfectly but refuses to let you print it, copy a line of text, or fill in its form. Acrobat shows SECURED in the title bar, and no password was ever needed to open it.</p>
      <p>Those are owner-password restrictions. Unlike an open password, they are enforced by the viewer as a matter of convention rather than by encrypting the content - which is why the document displays fine but the print button is greyed out.</p>
      <p>This removes the permission flags so the document behaves normally. No password is needed in the usual case. Where an owner password is set, providing it produces a cleaner result. If the file requires a password just to open, use Unlock PDF instead.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the restricted PDF', description: 'Drop in a file that opens without a password but blocks printing or copying.' },
      { step: 2, title: 'Add the owner password if you have it', description: 'Optional. Providing it produces a cleaner result where one is set.' },
      { step: 3, title: 'Remove the restrictions', description: 'Permission flags are cleared and the document is rewritten.' },
      { step: 4, title: 'Download', description: 'Save the unrestricted PDF - printing, copying and editing now work.' },
    ],
    useCases: [
      { title: 'A document that will not print', description: 'A statement or ticket with printing disabled for no good reason.', icon: 'printer' },
      { title: 'Quoting from a report', description: 'Copy text from a document where selection was blocked.', icon: 'copy' },
      { title: 'Forms locked against filling', description: 'Restore the ability to complete a form that was flagged as read-only.', icon: 'edit' },
    ],
    faq: [
      { question: 'How is this different from Unlock PDF?', answer: 'Unlock PDF removes a password required to open the file. This removes restrictions on a file that already opens freely.' },
      { question: 'Why can restrictions be removed without a password?', answer: 'Because they are permission flags the viewer chooses to honour, not encryption of the content. The content was never protected.' },
      { question: 'Is this legal?', answer: 'For your own documents, or ones you are licensed to use, generally yes. Copyright and licence terms still apply to what you do with the content.' },
      { question: 'Does the document content change?', answer: 'No. Only the permission settings are cleared.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitize PDF',
    metaTitle: 'Sanitize PDF - Strip Metadata, Scripts & Hidden Data',
    metaDescription: 'Remove metadata, JavaScript, embedded files and annotations from a PDF in one pass, so nothing hidden travels with the document.',
    keywords: ['sanitize pdf', 'clean pdf metadata', 'remove pdf javascript', 'strip hidden pdf data', 'pdf privacy clean'],
    description: `
      <p>A PDF carries more than its pages. Author names and internal usernames sit in the metadata. Annotations record who commented and when. Embedded files ride along invisibly. JavaScript can be present and executable. None of it appears when you read the document, and all of it travels when you send it.</p>
      <p>Sanitising removes the lot in one pass: metadata, annotations and comments, embedded files and attachments, and any scripts. What remains is the visible page content and nothing else.</p>
      <p>This is the step to run before publishing anything externally, and the step most organisations skip - which is why document metadata is a recurring source of accidental disclosure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document. The tool reports what hidden data it found.' },
      { step: 2, title: 'Choose what to remove', description: 'Metadata, annotations, embedded files, scripts - or all of it.' },
      { step: 3, title: 'Sanitise', description: 'The selected data is stripped and the file rewritten.' },
      { step: 4, title: 'Verify and download', description: 'Save the cleaned file, then check it with View Metadata.' },
    ],
    useCases: [
      { title: 'Publishing externally', description: 'A report going on a website, with no author names or internal traces left in it.', icon: 'globe' },
      { title: 'Freedom of information responses', description: 'Documents released publicly, stripped of internal metadata and comments.', icon: 'scale' },
      { title: 'Removing executable content', description: 'JavaScript in a PDF from an untrusted source, removed before the file is opened widely.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'What exactly gets removed?', answer: 'Document metadata, annotations and comments, embedded files and attachments, and any JavaScript. Page content is untouched.' },
      { question: 'Is this the same as redaction?', answer: 'No. Sanitising removes hidden data outside the page content. Redaction removes specific visible content - use Find and Redact for that.' },
      { question: 'Will the document look different?', answer: 'The pages will not. Comments and highlights disappear, since those are annotations.' },
      { question: 'How do I confirm it worked?', answer: 'Run View Metadata on the result. The fields should be empty.' },
    ],
  },

  'remove-metadata': {
    title: 'Remove Metadata',
    metaTitle: 'Remove PDF Metadata - Strip Author and Dates',
    metaDescription: 'Strip the author, title, dates, keywords and producer information from a PDF, so no identifying details travel with the file.',
    keywords: ['remove pdf metadata', 'strip pdf author', 'clear pdf properties', 'anonymize pdf', 'pdf metadata cleaner'],
    description: `
      <p>The author field is the one that catches people out. It is populated automatically from the operating system account name, which means a PDF exported from a work laptop routinely carries a full name or an internal username - and nobody notices, because it never appears on a page.</p>
      <p>This clears the document information: title, author, subject, keywords, creator and producer applications, and the creation and modification timestamps. What remains is the page content.</p>
      <p>If you also want annotations, embedded files and scripts gone, Sanitize PDF does all of that in one pass. Use this tool when metadata is specifically what you want removed.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the file. Current metadata is shown so you can see what is there.' },
      { step: 2, title: 'Remove', description: 'All document information fields are cleared.' },
      { step: 3, title: 'Verify and download', description: 'Save the file and confirm with View Metadata that the fields are empty.' },
    ],
    useCases: [
      { title: 'Anonymous submissions', description: 'Blind peer review and anonymous tender processes where authorship must not be inferable.', icon: 'user-x' },
      { title: 'Publishing documents', description: 'No internal usernames or software versions disclosed to the public.', icon: 'globe' },
      { title: 'Removing timestamps', description: 'Creation and modification dates cleared where they would reveal more than intended.', icon: 'calendar-x' },
    ],
    faq: [
      { question: 'Which fields are cleared?', answer: 'Title, author, subject, keywords, creator, producer, and the creation and modification dates.' },
      { question: 'Why is my name in there at all?', answer: 'Most authoring software fills the author field from your operating system account automatically.' },
      { question: 'Does this remove annotations too?', answer: 'No, only metadata. Use Sanitize PDF to remove annotations, embedded files and scripts as well.' },
      { question: 'Can removed metadata be recovered?', answer: 'Not from the new file. Keep your original if the information matters to you.' },
    ],
  },

  'find-and-redact': {
    title: 'Find and Redact',
    metaTitle: 'Redact PDF Text - Search and Black Out Securely',
    metaDescription: 'Search a PDF for text or a pattern and redact every match across all pages. Content is removed, not just covered with a black box.',
    keywords: ['redact pdf', 'black out pdf text', 'pdf redaction tool', 'remove text from pdf', 'regex redact pdf'],
    description: `
      <p>The classic redaction failure is a black rectangle drawn over text. The rectangle is a graphic sitting on top; the text is still underneath, still selectable, still copyable. Organisations have disclosed exactly what they were trying to hide this way, repeatedly and publicly.</p>
      <p>This removes the content. Matching text objects are deleted from the file and a black box is drawn where they were - so copying the area yields nothing, because there is nothing left to copy.</p>
      <p>Search runs across the whole document, which is what makes it practical. Redacting one account number that appears on 40 pages is one operation. Regular expression support handles patterns rather than fixed strings, so every card number or national insurance number in a document can be caught in a single pass. Matches are previewed before anything is applied.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document you need to redact.' },
      { step: 2, title: 'Search for what must go', description: 'Enter text, or a regular expression to match a pattern such as a card or reference number format.' },
      { step: 3, title: 'Review the matches', description: 'Every hit is listed with its page and surrounding context. Deselect any false positives.' },
      { step: 4, title: 'Apply and download', description: 'Confirmed matches are removed from the file and blacked out on the page.' },
    ],
    useCases: [
      { title: 'Disclosure and FOI responses', description: 'Personal details removed from documents before public release, properly rather than cosmetically.', icon: 'scale' },
      { title: 'Removing account numbers', description: 'One number appearing on 40 pages, caught by a single search.', icon: 'credit-card' },
      { title: 'Pattern-based redaction', description: 'A regular expression that matches every national insurance number in a document at once.', icon: 'search' },
    ],
    faq: [
      { question: 'Is the text really gone?', answer: 'Yes. The text objects are deleted from the file. Selecting or copying the redacted area returns nothing.' },
      { question: 'Why is a black rectangle not enough?', answer: 'Because it is a graphic drawn on top. The text underneath remains in the file and can be copied or recovered - a well-documented cause of accidental disclosure.' },
      { question: 'Can I redact by pattern?', answer: 'Yes. Regular expressions let you match formats rather than fixed strings, which is how you catch every instance of an identifier type.' },
      { question: 'Does it work on scanned documents?', answer: 'Text search needs a text layer, so OCR first. Note that OCR text sits behind the image, so also confirm the visible image is covered.' },
    ],
  },

  'flatten-pdf': {
    title: 'Flatten PDF',
    metaTitle: 'Flatten PDF - Lock Forms and Annotations',
    metaDescription: 'Flatten PDF form fields and annotations into the page so the values cannot be changed and display correctly in every viewer.',
    keywords: ['flatten pdf', 'flatten pdf form', 'lock pdf fields', 'make pdf non editable', 'flatten annotations'],
    description: `
      <p>A completed form is still editable. The values you typed sit in live form fields, so the recipient can change a figure and forward it on with nobody able to tell. Annotations behave the same way - a signature added as an annotation can be dragged off the page.</p>
      <p>Flattening merges all of it into the page content. Field values become part of the page, annotations become part of the page, and there is nothing left to interact with. It also fixes the viewer problem: some readers render form fields poorly or not at all, and flattened content displays identically everywhere.</p>
      <p>It is a one-way operation. Once flattened, the values are text on a page rather than field data, so keep the fillable version if you will need to produce it again.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add your PDFs', description: 'Drop in up to 10 files. Form fields and annotations are detected.' },
      { step: 2, title: 'Choose what to flatten', description: 'Form fields, annotations, or both.' },
      { step: 3, title: 'Flatten and download', description: 'Save the file with everything merged into the page.' },
    ],
    useCases: [
      { title: 'Returning a completed form', description: 'Values locked in so the recipient cannot alter them.', icon: 'lock' },
      { title: 'Fixing display problems', description: 'Fields that render inconsistently across viewers become plain page content.', icon: 'monitor' },
      { title: 'Archiving', description: 'A record where the values are fixed rather than stored as live field data.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can flattening be undone?', answer: 'No. Field values become page content permanently. Keep the fillable original.' },
      { question: 'Do the values look any different?', answer: 'No. They render in the same position with the same appearance - they simply stop being editable.' },
      { question: 'Should I flatten before signing?', answer: 'Flatten the form content first, then sign. Signing first and flattening afterwards can invalidate a digital signature.' },
      { question: 'How is this different from rasterising?', answer: 'Flattening keeps the text as text. Rasterising converts the whole page to pixels.' },
    ],
  },

  'change-permissions': {
    title: 'Change Permissions',
    metaTitle: 'Change PDF Permissions - Print, Copy & Edit Flags',
    metaDescription: 'Set what a PDF allows: printing, copying text, editing and annotating. Control document permissions without requiring an open password.',
    keywords: ['pdf permissions', 'change pdf restrictions', 'disable pdf printing', 'pdf copy protection', 'set pdf permissions'],
    description: `
      <p>Sometimes you want a document read but not reused: readable by anyone, not printable, not copyable. PDF permissions cover exactly that - printing, text copying, editing, and annotating, each set independently.</p>
      <p>Be clear about what these are. Permission flags are instructions that conforming viewers choose to honour. Acrobat and most readers respect them; a tool designed to ignore them can. They are a policy signal and a deterrent, not encryption.</p>
      <p>If the content genuinely must not be read by the wrong people, encrypt the document with a user password. Permissions are for controlling what legitimate recipients can do with a file they are allowed to open.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document. Current permission settings are shown.' },
      { step: 2, title: 'Set the permissions', description: 'Allow or block printing, copying, editing and annotating individually.' },
      { step: 3, title: 'Add an owner password', description: 'Optional but recommended - without one, the flags are trivially cleared.' },
      { step: 4, title: 'Apply and download', description: 'Save the PDF with the new permissions.' },
    ],
    useCases: [
      { title: 'Read-only distribution', description: 'A document readers can open but not print or copy from.', icon: 'file-lock' },
      { title: 'Protecting a licensed report', description: 'Discourage copying of content you sell, while keeping it readable.', icon: 'shield' },
      { title: 'Locking a final version', description: 'Block editing and annotating so the approved version stays approved.', icon: 'check-check' },
    ],
    faq: [
      { question: 'Are permissions actually enforced?', answer: 'By conforming viewers, yes. They are not cryptographic, so a tool built to ignore them can. Treat them as policy rather than protection.' },
      { question: 'Do I need an owner password?', answer: 'Strongly recommended. Without one, the permission flags can be cleared by anyone in seconds.' },
      { question: 'What if I need real protection?', answer: 'Use Encrypt PDF with a user password. That encrypts the content rather than requesting good behaviour.' },
      { question: 'Can I still open the file myself?', answer: 'Yes. Permissions do not restrict opening, only what can be done afterwards.' },
    ],
  },

  'digital-sign-pdf': {
    title: 'Digital Signature',
    metaTitle: 'Digitally Sign a PDF with a Certificate',
    metaDescription: 'Apply a cryptographic digital signature to a PDF using an X.509 certificate in PFX, P12 or PEM format, with a visible signature and timestamp.',
    keywords: ['digital signature pdf', 'sign pdf certificate', 'x509 pdf signature', 'pfx sign pdf', 'cryptographic pdf signature'],
    description: `
      <p>A drawn signature is a picture. It proves nothing about who applied it and nothing about whether the document changed afterwards. A digital signature is different: it uses a private key to produce a cryptographic seal over the document contents, which establishes both identity and integrity.</p>
      <p>If a single byte changes after signing, verification fails. That is what makes digital signatures acceptable where a legal or regulatory standard requires proof rather than the appearance of one.</p>
      <p>Certificates in PFX, P12 and PEM formats are supported. You can include a visible signature block on the page, a stated reason for signing, a location, and a timestamp establishing when the signature was applied. The private key is used in your browser and never transmitted.</p>
    `,
    howToUse: [
      { step: 1, title: 'Load the PDF', description: 'Drop in the document to be signed.' },
      { step: 2, title: 'Provide your certificate', description: 'Upload a PFX, P12 or PEM file and enter its password.' },
      { step: 3, title: 'Configure the signature', description: 'Choose whether it appears on the page, and set the reason, location and timestamp.' },
      { step: 4, title: 'Sign and download', description: 'Save the signed PDF. Any subsequent change will invalidate the signature.' },
    ],
    useCases: [
      { title: 'Legally significant agreements', description: 'Contracts where a cryptographic signature is required rather than an image of one.', icon: 'file-signature' },
      { title: 'Regulatory submissions', description: 'Filings that mandate a certificate-based signature.', icon: 'scale' },
      { title: 'Tamper-evident documents', description: 'Certificates and official records where any later modification must be detectable.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'How is this different from Sign PDF?', answer: 'Sign PDF places an image of your signature. This applies a cryptographic seal using your private key, which proves identity and detects any later change.' },
      { question: 'Where do I get a certificate?', answer: 'From a certificate authority, or your organisation IT if it operates its own. Self-signed certificates work technically but are not trusted by default in readers.' },
      { question: 'Is my private key uploaded?', answer: 'No. The certificate is used in your browser and neither the key nor its password is transmitted.' },
      { question: 'What happens if the document is edited afterwards?', answer: 'Verification fails and readers show the signature as invalid. That is the intended behaviour.' },
    ],
  },

  'validate-signature': {
    title: 'Validate Signature',
    metaTitle: 'Validate PDF Digital Signatures',
    metaDescription: 'Check the digital signatures on a PDF - signer identity, certificate details, validity dates and whether the document has been altered since signing.',
    keywords: ['validate pdf signature', 'verify pdf signature', 'check pdf certificate', 'pdf signature integrity', 'is pdf signed'],
    description: `
      <p>A signature block on a page is a graphic. It can be copied, faked, or left over from a document that has since been modified. The only way to know whether a signature means anything is to verify it cryptographically.</p>
      <p>This checks each signature in the document and reports what it finds: who signed, which certificate was used and by whom it was issued, the validity period, whether the certificate had expired at the time of signing, and whether the document has been altered since.</p>
      <p>That last point is the one that matters most. Integrity checking is what distinguishes a real signature from a picture of one, and it is the check almost nobody performs.</p>
    `,
    howToUse: [
      { step: 1, title: 'Add the signed PDFs', description: 'Drop in up to 10 files. Every signature in each is examined.' },
      { step: 2, title: 'Read the report', description: 'Signer, certificate issuer, validity dates and integrity status are listed per signature.' },
      { step: 3, title: 'Check for modifications', description: 'The report states whether the document has changed since it was signed.' },
      { step: 4, title: 'Export if needed', description: 'Save the validation report as JSON for a compliance record.' },
    ],
    useCases: [
      { title: 'Verifying a received contract', description: 'Confirm the signature is real and the document has not been altered since signing.', icon: 'shield-check' },
      { title: 'Compliance auditing', description: 'Batch-validate a set of signed records and keep the report as evidence.', icon: 'clipboard-check' },
      { title: 'Detecting tampering', description: 'Establish whether a document changed after it was signed.', icon: 'search-check' },
    ],
    faq: [
      { question: 'What does a valid signature actually tell me?', answer: 'That the document has not changed since signing, and that the signature was produced with the private key belonging to that certificate.' },
      { question: 'Why might a signature show as invalid?', answer: 'The document was modified after signing, the certificate had expired or been revoked, or the issuing authority is not trusted.' },
      { question: 'Can I validate several files at once?', answer: 'Yes, up to 10 per run, with a report for each.' },
      { question: 'Does an expired certificate invalidate the signature?', answer: 'Not necessarily. If a trusted timestamp shows the signature was made while the certificate was valid, it can still verify. The report shows both dates.' },
    ],
  },
};
