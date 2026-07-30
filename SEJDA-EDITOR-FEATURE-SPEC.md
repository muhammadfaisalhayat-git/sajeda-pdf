# Sejda PDF Editor — Complete Feature Inventory & Implementation Spec

Captured 29 Jul 2026 from `https://www.sejda.com/pdf-editor`. The page ships its entire UI in the initial DOM — every dialog, dropdown, tooltip and error string is present whether or not it is visible — so this inventory is the full feature surface, not just what appears on screen.

Target: `src/components/tools/edit-pdf/EditPDFTool.tsx`.

---

## 0. Read this first — the honest scope

Your current editor is **161 lines**. It is an `<iframe>` pointing at `/pdfjs-annotation-viewer/web/viewer.html`, plus code that reaches into the iframe to hide a Save button whose label is hardcoded as `保存`. It has no toolbar of its own, no state, no undo, no save pipeline.

Sejda's editor is a multi-year commercial product. Feature parity is realistically **3–6 months of focused work**, and one feature — editing text that already exists in the PDF — is harder than everything else combined.

That is not a reason to avoid it. It *is* a reason to build in the order given in §12 rather than starting at the top of the toolbar and working across.

One legal note, stated once: reimplementing *functionality* is fine and normal. Do not copy their CSS, JavaScript, icons, or marketing copy. The feature list below is a spec to build from, not assets to lift.

---

## 1. Architecture — how Sejda's editor actually works

Understanding this determines your whole design.

**Rendering.** PDF.js renders each page to a canvas. That canvas is display-only — nothing is ever edited on it.

**Overlay.** An absolutely-positioned HTML layer sits on top of each page canvas. Every edit — text box, image, signature, shape, whiteout, link, form field — is a DOM element in this layer, positioned in PDF user-space coordinates scaled to the current zoom.

**Server-side commit.** Nothing is written to the PDF in the browser. The overlay is a list of pending operations. **Apply changes** serialises that list and posts it to their backend, which rewrites the PDF with a real server-side library and returns a new file.

This is why their UI says *"Cannot zoom on pages that have changes"* — the overlay's coordinate mapping is pinned at the zoom level where the edits were made.

**The consequence for you:** you have no server. Every operation must be applied client-side with `pdf-lib` + `@pdf-lib/fontkit` (both already in your `package.json`). This is achievable for the *additive* operations. It is the hard constraint for existing-text editing — see §3.

**Recommended architecture for Sajeda:**

```
EditPDFTool
├── state (zustand — already a dependency)
│   ├── document: PDFDocumentProxy (pdfjs)
│   ├── pages[]:  { pageNum, width, height, rotation, canvasRef }
│   ├── objects[]: EditObject[]      ← single flat list, every edit
│   ├── selection: string[]           ← object ids (multi-select)
│   ├── history: { past[], future[] } ← undo/redo
│   └── activeTool: ToolId
├── PageCanvas       — pdfjs render target, one per page
├── OverlayLayer     — absolutely positioned, renders objects[] for that page
├── Toolbar          — 9 tools + Apply changes
├── ContextBar       — properties for current tool / selected object
└── commit()         — objects[] → pdf-lib mutations → Blob
```

`EditObject` is the core type. Everything below is a variant of it:

```ts
type EditObject =
  | { kind: 'text';       page: number; x: number; y: number; w: number; h: number;
      text: string; fontFamily: string; fontSize: number; bold: boolean;
      italic: boolean; color: string; align: 'left'|'center'|'right';
      originalTextRef?: OriginalTextRef }   // set when editing existing text
  | { kind: 'image';      page: number; rect: Rect; src: Blob; rotation: number }
  | { kind: 'signature';  page: number; rect: Rect; sigId: string }
  | { kind: 'stamp';      page: number; rect: Rect; stampId: string }
  | { kind: 'whiteout';   page: number; rect: Rect }
  | { kind: 'shape';      page: number; rect: Rect; shape: 'rect'|'ellipse'|'line'|'arrow';
      stroke: string; fill: string; strokeWidth: number }
  | { kind: 'freehand';   page: number; points: Point[]; color: string;
      width: number; mode: 'draw'|'highlight' }
  | { kind: 'textmarkup'; page: number; quads: Quad[];
      style: 'highlight'|'strikeout'|'underline'; color: string }
  | { kind: 'link';       page: number; rect: Rect; target: LinkTarget }
  | { kind: 'formfield';  page: number; rect: Rect; field: FormFieldSpec }
  | { kind: 'attachment'; page: number; point: Point; file: Blob; name: string };
```

Every object needs a stable `id` and a human label for the undo panel (§10).

---

## 2. The toolbar — complete

Nine tools plus the commit button. Exact order on their page:

| # | Tool | Has dropdown | Section below |
|---|---|---|---|
| 1 | **Text** | yes — Find & Replace | §3 |
| 2 | **Links** | no (opens dialog on use) | §4 |
| 3 | **Forms** | yes — large menu | §5 |
| 4 | **Images** | yes — New Image / Delete existing / New Stamp | §6 |
| 5 | **Sign** | yes — saved signatures + New Signature | §7 |
| 6 | **Whiteout** | no | §8 |
| 7 | **Annotate** | yes — Text and Freehand groups | §9 |
| 8 | **Shapes** | yes — Ellipse / Rectangle / Line / Arrow | §9.3 |
| 9 | **Undo** | yes — change list with revert | §10 |
| — | **Apply changes** | primary action, bottom-centre, floating | §11 |

Per-page controls, rendered above each page: **page number**, **delete page**, **zoom in**, **zoom out**, **rotate page**, **Insert page here**. Top-right of the viewport: a **grid/thumbnail toggle**.

---

## 3. Text tool — the hard one

### 3.1 Adding new text

Click anywhere on a page to place a text box, then type. Straightforward: an `EditObject` of kind `text` with no `originalTextRef`.

Properties available while a text object is selected:

- **Font family** — 35 fonts (full list in §3.4)
- **Font size**
- **Bold**, **Italic**
- **Text colour** — 70-swatch palette, hex input, and an **eyedropper** that samples a colour from the document
- **Alignment**

### 3.2 Editing text that already exists in the PDF

This is the feature that makes Sejda's editor notable, and it is genuinely difficult. Click any existing text on the page and it becomes editable in place.

**Why it is hard.** A PDF does not store paragraphs. It stores a content stream of positioning and glyph-drawing operators — `Tf` (set font), `Td`/`TJ`/`Tj` (position and show glyphs) — where each glyph is placed by explicit coordinates and kerning offsets. There is no "line" and no "word". To edit it you must:

1. **Extract** text with positions. `pdfjs` `getTextContent()` gives you items with transform matrices, widths, font names.
2. **Cluster** items into editable runs — group by baseline y, font, and size, with a tolerance. This is heuristic and where most of your bugs will live.
3. **Map** the run back to its byte range in the content stream so you know what to remove.
4. **Identify and extract the embedded font.** The font is a subset embedded in the PDF, usually with a custom encoding. You need it to measure and re-render the replacement text.
5. **Check glyph coverage.** If the user types a character the subset does not contain, you cannot render it — Sejda raises a **Font Replacement dialog** here (§3.3).
6. **Re-encode and re-embed.** Write the new string using the correct encoding, subset the font to include the new glyphs, and rebuild the content stream.
7. **Re-layout.** Longer replacement text overflows; you must re-wrap or re-space.

**Realistic approach with `pdf-lib`:** full content-stream surgery is not practical. Do what most client-side editors do:

- On click, locate the text run and compute its bounding box.
- Draw a **whiteout rectangle** over the original run, sampling the page background colour so it blends.
- Draw the new text on top, using the closest available font from your embedded set.

This is visually correct for the overwhelming majority of real documents (black text, white background) and it is honest — Sejda itself warns *"Whiteout hides but will not completely remove underlying text"*. Document the limitation rather than pretending it is true text replacement.

**Constraints Sejda enforces, which you should copy:**

- `Text is too small to edit. Please zoom in and try again`
- `Cannot zoom on pages that have changes`
- `Editing a scan? Changing existing text inside scans not supported` — other features still work
- `Complex script alphabets are not supported (eg: Arabic, Devanagari)`
- `Right to left scripts are not fully supported (eg: Arabic, Hebrew)`
- `This font (embedded in the document) does not support this style change. Try changing the font family`
- `Embedded font, characters might be missing`
- `Drag text with your mouse to move it`

### 3.3 Font Replacement dialog

Triggered when the original font lacks a glyph the user typed.

> **Font Replacement** — The original font is missing some of the characters you typed. Choose a replacement font: [list, with a "Very similar" badge on close matches] · ☐ Always use the above replacement choice · **Replace** / **Keep original**

### 3.4 Font list — all 35

Amiri (Arabic), Arial (Liberation Sans), Arimo, Caladea (Cambria), Carlito (Calibri), Calibri (Carlito), Courier, DejaVu Sans (Verdana), DejaVu Serif (Georgia), Droid Serif, EB Garamond, Fira Sans (Trebuchet MS), Helvetica, Inter, Lato, Liberation Sans, Liberation Serif, Liberation Mono, Noto Sans, Noto Sans Chakma, Noto Serif, Noto Serif Tamil, Open Sans, Open Sans Condensed, Oranienbaum, Poppins, PT Sans, PT Sans Caption, PT Sans Narrow, PT Serif, PT Serif Caption, Scheherazade New (Arabic), Selawik (Segoe UI), Roboto, Times New Roman.

Note the deliberate pattern: metric-compatible open substitutes for proprietary fonts — Liberation Sans for Arial, Carlito for Calibri, Caladea for Cambria, DejaVu for Verdana/Georgia. Copy this. It means documents keep their line breaks.

**More fonts…** opens a desktop upsell: *"Local fonts are not yet available in the online editor."* You could actually beat them here — the **Local Font Access API** works in Chromium and would let you offer real system fonts.

### 3.5 Find & Replace

Dialog with: **Find** field, **Replace** field, ☐ **Match case**, ☐ **Include links**, **Replace all**. Error state: `Please enter text to find`. Also `Reached end of the document`.

---

## 4. Links tool

Select an area on the page to create a link. Prompt: `Select page area to create link` / `Add links by making an area selection on the page`.

**Link properties dialog** — four target types:

1. **Link to external URL**
2. **Link to email address** (writes `mailto:`)
3. **Link to phone number** (writes `tel:`)
4. **Link to internal page** (jump within document)

Plus **Delete link** and **Close**. Existing hyperlinks in the document are detected and editable.

`pdf-lib` implementation: a `/Annots` entry of subtype `/Link` with an `/A` action — `/URI` for the first three, `/GoTo` with a page destination for the fourth.

Sejda caps free users at 20 links per task; you have no reason to.

---

## 5. Forms tool

The most feature-dense menu on the page. Three groups:

### 5.1 Add text and symbols

A text option plus three symbol stamps — checkmark, cross, dot — for ticking boxes on forms that have no real fields. Prompt: `Click on the page to place symbol`.

### 5.2 Add new form fields

Six types, each with a tooltip:

| Type | Tooltip |
|---|---|
| Text | Text box (single line) |
| Text multiline | Textarea (multiple lines) |
| Drop-down list | Dropdown list with multiple options |
| Radio button | Radio option |
| Checkbox | Checkbox |
| Signature box | Signature box for others to sign |

**Field properties panel** — the full set:

- **Field name** — with duplicate detection: `Name is already used. There are N other fields with the same name.`
- **Radio group** — `There are N radios in this group.`
- **Field value** (default value)
- **Options (one per line)** — dropdown/list only
- ☐ **Allow multiple selections** — list boxes
- **Divide into N boxes** — comb fields, for character-per-box inputs
- **Max length**
- ☐ **Field is mandatory**
- ☐ **Repeat on all pages**

Placeholder options shown as `Option 1 / Option 2 / Option 3`.

### 5.3 Change existing form fields

- **Form Edit mode** — toggle between *editing* field definitions and *filling them out*. Status messages: `Form fields now in fill out mode` / `Form fields now in edit mode` / `Make fields editable` / `Stop editing fields` / `Read only field is now editable` / `Read-only form field. Double click to edit`.
- **Change tab order** — dedicated dialog, described below.

### 5.4 Tab order dialog

Sets the order in which Tab moves between fields. Four modes:

- **Sort by rows** — numbered 1,2,3 / 4,5,6 left-to-right
- **Sort by columns** — 1,3,5 / 2,4,6 top-to-bottom
- **Restore original**
- **Custom order** — drag and drop to reorder

Scoped per page, with a page selector. Empty state: `No form fields found`.

### 5.5 Publish for others to fill & sign

Saves the document to the user's Google Drive, shares it publicly, and generates a link that opens it in Sejda for a third party to fill and sign, returned by email. Link does not expire. **Skip this** — it requires Drive OAuth and hosting, and it contradicts your "files never leave your device" positioning, which is your actual differentiator.

### 5.6 Form constraints

- `Sorry, adding form fields on rotated pages is not yet supported`
- `Document contains XFA elements, which are not supported`
- `Document contains unsupported form fields`
- `Unsupported field` / `Field has features that are not supported`
- `There is something wrong with this form field. We cannot update its value`
- `Your text field seems very tall — Did you mean to use a multiline text field instead of a single line text field?`
- Signature box warning: *most browsers (Chrome, Edge, Firefox) don't render signature boxes in their PDF viewers*

---

## 6. Images tool

Menu: **New Image** · **Delete existing image** · **New Stamp**. Saved images appear as thumbnails with an × to remove.

- Prompt: `Click a location on the page to add image`
- Drag to move, drag corners to resize, rotation supported (`Rotating image, please wait...`)
- **Delete existing image** removes an image already in the PDF
- Errors: `Sorry, unsupported image format:` with a list of supported types; `Some images could not be processed and were removed from your edits`

### 6.1 Stamp creator

A compact dialog for approval stamps:

- **Subject** — e.g. "Approved"
- **Author** — e.g. "Alex Appleseed"
- **Date and time** — five choices: *No date and time*, `Feb 3, 2025`, `1:15PM, Feb 3, 2025`, `3 Feb, 2025`, `1:15PM, 3 Feb, 2025`
- **Colour**
- Live preview: `Approved — By Alex Appleseed at 1:15 PM, Feb 03, 2025`
- **Save** — stamps persist and are reusable

---

## 7. Sign tool

Menu lists saved signatures as thumbnails (each with × to delete) plus **New Signature**.

### 7.1 Create signature dialog — four tabs

1. **Type** — type your name, choose from 10+ handwriting-style fonts
2. **Draw** — *"Sign your name using your mouse or touchpad"*
3. **Upload Image**
4. **Camera** — *"Sign on a white piece of paper and hold it in front of the camera"* → **Take picture** → then **choose an image version: Original / Transparent A / Transparent B**

That last step is the clever bit: two different background-removal thresholds, so a photo of ink on paper becomes a clean transparent signature. Implement as two luminance thresholds writing alpha.

Camera errors: `Could not access your camera to capture signature` / `Click 'Allow' in the pop-up above to activate your camera`.

- ☑ **Save signature** — persists for reuse
- Disclaimer: *"Sejda does not guarantee that the signature provided through this tool is legally binding."* Include an equivalent.

### 7.2 Placing

`Click a location on the page to add signature` · `Click to place signature` · `Click again to change signature` · resize by dragging corners.

---

## 8. Whiteout tool

Select a page area; it is covered with an opaque rectangle. Prompt: `Select page area to whiteout`.

Ships with an explicit honesty warning, which you should reproduce:

> `Whiteout hides but will not completely remove underlying text or images. Not suitable for redacting sensitive data`

Point users at your **Find and Redact** tool for real redaction. This is a genuine advantage you already have — Sejda has no true redaction in this editor.

---

## 9. Annotate & Shapes

### 9.1 Text markup

Applies to selected text: **Strike out**, **Highlight**, **Underline**. Prompt: `Select text to annotate`.

### 9.2 Freehand

**Highlight** (translucent wide stroke) and **Draw** (opaque pen). `Press ESC to exit freehand highlight mode` / `Press ESC to exit draw mode`.

Useful fallback tip they surface: `Text highlight not working? Try the Annotate > Freehand > Highlight tool` — for scanned pages with no text layer.

### 9.3 Shapes

**Ellipse**, **Rectangle**, **Line**, **Arrow**. Border colour and background fill colour both configurable. Prompts: `Add a shape by making an area selection on the page` / `Click and drag to draw the shape`.

### 9.4 Annotation controls

- **Show annotations** toggle — show or hide all annotations
- `Sorry, adding annotations on rotated pages is not yet supported`

---

## 10. Undo

Not a simple stack — a **reviewable change list**. The dropdown shows every change made, each selectable, with **Revert selected**. Empty state: `No changes found`.

Change types are individually named, which tells you the labels to use:

`Added form field` · `Deleted form field` · `Link to page` · `Whiteout` · `Rectangle` · `Ellipse` · `Line` · `Arrow` · `Signature` · `Image` · `Attachment` · `Text color`

Multi-select is supported across objects: `Selected {n} objects` · `Moving {n} objects` · `Click once to select`.

---

## 11. Apply changes & the save pipeline

**Apply changes** is a floating pill button, bottom-centre, always visible. Flow: Apply changes → processing → Download.

Interstitials:

- **Unused text edits** — *Found "Type your text" edits. Remove before continuing?* · **Keep** / **Remove**. Catches placeholder text boxes the user placed but never typed into.
- **Recover unsaved changes** — *You've previously made edits to this file. Would you like to recover any unsaved changes?* · **Discard**. Implies edits are persisted locally between sessions — do this with IndexedDB.
- `This document contains errors that may prevent your changes from being saved`

---

## 12. Document handling, sessions, and edge cases

### 12.1 Input sources

Local upload · **Dropbox** · **Google Drive** · **OneDrive** · **Web Address (URL)** · **or start with a blank document** · **Recent files** (Drive-backed).

For Sajeda: keep local upload and **add "start with a blank document"** — it is cheap and genuinely useful. Skip the cloud providers; they conflict with your privacy positioning.

### 12.2 Encrypted documents

- **User password** prompt — `Incorrect password`, ☐ *Use this password for all files*
- **Owner password** prompt — lists exactly which permissions are restricted: **Content copying · Editing contents · Organizing pages · Fill forms · Printing · Signing**

You already have `decrypt-pdf` and `remove-restrictions` processors. Wire them into the editor's load path.

### 12.3 Page operations inside the editor

Per page: **Delete page**, **Zoom in**, **Zoom out**, **Rotate page**, **Insert page here**. Plus a **Move page to a new location** dialog — *"Tip: Can also drag and drop the page to the new location"*.

You already have all of these as standalone tools (`delete-pages`, `rotate-pdf`, `add-blank-page`, `organize-pdf`). Reuse the processors.

### 12.4 Scanned document detection

On load, detects a scan and shows: *"Editing scanned documents is not supported. Changing existing text within scanned documents is not supported. However, you can still use other features such as adding new text, images, and annotations."* With ☐ **Don't show anymore**.

**You can beat them here.** You have `tesseract.js` and an `ocr-pdf` processor. Offer *"Run OCR to make this editable"* directly in the dialog.

### 12.5 Other states

- **Browser zoom warning** — *"We detected you are using your browser's zoom. This breaks the editor. Please reset to 100%."*
- `Tap again to place element on page` · `Press ESC to cancel`
- `Looks like you clicked outside the page? Please try clicking a location inside the page`
- `Document contains unsupported features`
- Session expiry, upload failure + retry — both server-model artefacts you do not need

### 12.6 Attachments panel

**New Attachment**, each row with **Add annotation to page**, **Download**, **Remove**, and an "Updated" badge. `Attachment already exists — An attachment with this filename already exists`. Prompt: `Click a location on the page to add attachment`.

You already have `add-attachments`, `extract-attachments` and `edit-attachments` processors to reuse.

### 12.7 Sejda's free-tier limits — all of which you can simply not have

30 files/hour · 3 tasks/hour · 50 MB/file · 5 MB/image · 200 pages · 20 links/task · single file per task · 10 pages per OCR task. Plus a save counter: *"2 free saves left"*, *"No free saves left"*.

Your `tools.ts` already sets `maxFileSize: Infinity`. **Say so in the editor UI.** "No limits, no watermark, no account, nothing uploaded" is a stronger pitch than any single feature on this list.

---

## 13. Gap analysis — Sajeda today vs. Sejda

| Feature | Sejda | Sajeda now | Notes |
|---|---|---|---|
| Add text | ✅ | ⚠️ via iframe | No control over it |
| Edit existing text | ✅ | ❌ | The hard one — §3.2 |
| Find & replace | ✅ | ❌ | |
| 35 fonts + substitutes | ✅ | ❌ | |
| Colour picker + eyedropper | ✅ | ❌ | |
| Links (4 target types) | ✅ | ❌ | |
| Form field creation (6 types) | ✅ | ⚠️ separate tool | `form-creator` exists |
| Form field properties | ✅ | ⚠️ partial | No comb, mandatory, repeat |
| Tab order editor | ✅ | ❌ | |
| Images + delete existing | ✅ | ❌ | |
| Stamps | ✅ | ⚠️ separate tool | `add-stamps` exists |
| Signature — type/draw/upload | ✅ | ⚠️ separate tool | `sign-pdf` exists |
| Signature — **camera** | ✅ | ❌ | Incl. transparency variants |
| Whiteout | ✅ | ❌ | |
| Highlight/strike/underline | ✅ | ⚠️ via iframe | |
| Freehand draw & highlight | ✅ | ⚠️ via iframe | |
| Shapes (4) | ✅ | ⚠️ via iframe | |
| Reviewable undo list | ✅ | ❌ | |
| Multi-select objects | ✅ | ❌ | |
| Page ops in editor | ✅ | ❌ | Processors exist |
| Attachments | ✅ | ⚠️ separate tools | |
| Encrypted doc handling | ✅ | ❌ | Processors exist |
| Scan detection | ✅ | ❌ | + you could offer OCR |
| Session recovery | ✅ | ❌ | |
| **True redaction** | ❌ | ✅ | `find-and-redact` |
| **No limits / no upload** | ❌ | ✅ | Your core advantage |

You already own a surprising amount of the underlying logic — it lives in standalone tools instead of the editor.

---

## 14. Build order

**Phase 1 — Replace the iframe with a real canvas + overlay.** Nothing user-visible ships until this exists. pdfjs render, overlay layer, coordinate mapping, zustand store, object model, selection, drag, resize, undo/redo, `commit()` with pdf-lib. *This is the foundation; budget for it properly.*

**Phase 2 — Additive tools, in this order.** Each is independently shippable once Phase 1 exists: whiteout → shapes → freehand → text markup → new text → images → signature (reuse `sign-pdf`) → stamps (reuse `add-stamps`).

**Phase 3 — Structured features.** Links with the 4-target dialog → form field creation and properties → tab order editor → attachments.

**Phase 4 — Document-level.** Page ops in-editor (reuse existing processors) → encrypted document load path → scan detection with an OCR offer → session recovery via IndexedDB.

**Phase 5 — Existing-text editing.** Last, deliberately. Extract with `getTextContent()`, cluster into runs, then whiteout-and-redraw. Ship it labelled as approximate, with the same constraint warnings Sejda uses.

**Quick wins to fold in anywhere:** blank-document start, no-limits messaging, "run OCR to make this editable", Local Font Access API for real system fonts.

---

## 15. Where you can be better than Sejda

1. **Nothing is uploaded.** Their entire pipeline is server-side; yours is not. This is the whole pitch.
2. **No limits.** No 3-tasks-per-hour, no 50 MB cap, no save counter.
3. **Real redaction** in the editor — they only have whiteout, and warn about it.
4. **OCR on the spot** when a scan is detected, instead of a dead end.
5. **Real local fonts** via the Local Font Access API, which they explicitly gate behind their desktop app.
