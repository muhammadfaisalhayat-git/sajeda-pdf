# SajedaPDF — Duplicate Page Audit

Analysed 29 Jul 2026 against `src/` (440 files), `messages/` (13 locales), `config/tool-content/` and the static export in `out/`.

**Site size:** 99 tools × 13 locales + 6 category pages + 6 static pages + `/workflow` per locale ≈ **1,456 indexable URLs** (sitemap declares 1,365).

---

## Status: items 1, 2, 6, 7 and 10 are fixed

Changes applied on 29 Jul 2026 — see "What was changed" at the end of this document.

| Was | Now |
|---|---|
| 276 tool URLs published another language's copy with a self-referencing canonical | All 276 canonicalise to the locale the copy was written in |
| Sitemap listed all 1,365 URLs including 276 duplicates as originals | 1,180 URLs: duplicates excluded, `/workflow` and 78 category pages added |
| `/` had no canonical and duplicated `/en/` | `/` canonicalises to `/en/` |
| 26 English titles came from a hardcoded map that overrode `metaTitle` | Map deleted; all 99 tools carry a unique `metaTitle` |
| 5 orphan content keys for non-existent tools | Removed |
| 99 Indonesian tool pages were never generated despite `hreflang="id"` | `SUPPORTED_LOCALES` derived from the i18n config; all 13 locales generate |
| English copy averaged 287 words per tool with recognisable AI cadence | Rewritten: 442 words per tool, 16 filler phrases → 2 |

Items 3 (UI string translation), 4, 5, 8 and 9 are unchanged and remain open — 4 and 5 by decision, since the format-variant pages have distinct copy and earn their own keywords.

---

## Summary

| # | Duplicate cluster | Duplicate URLs | Severity |
|---|---|---|---|
| 1 | `zh-TW` serves `zh` (Simplified) content | 99 | Critical |
| 2 | English fallback under 10 localized URLs | 180 | Critical |
| 3 | UI strings untranslated (de/es/fr/ja/ko/id/vi) | ~700 pages affected | High |
| 4 | `ImageToPDFTool` serves 8 slugs | 104 | Medium |
| 5 | `PDFToImageTool` serves 5 slugs | 65 | Medium |
| 6 | Category pages re-list `/tools` content | 78 | Medium |
| 7 | `/` duplicates `/en/`, no canonical | 1 | Medium |
| 8 | Overlapping tool concepts (product-level) | ~20 tools | Medium |
| 9 | Copy-paste code clones | 34 file pairs | Low (tech debt) |
| 10 | Orphan content keys for non-existent tools | 5 | Low |

---

## 1. `zh-TW` is a byte-for-byte duplicate of `zh` — 99 pages

`src/config/tool-content/index.ts` maps Traditional Chinese to the Simplified content map:

```ts
const effectiveLocale = locale === 'zh-TW' ? 'zh' : locale;
```

There is no `zh-TW.ts` content file. Every one of the 99 `zh-TW` tool pages renders the **same Simplified Chinese** title, meta description, description HTML, how-to steps, use cases and FAQ as `zh` — while each still emits a self-referencing canonical.

Verified in the build:

```
out/zh/tools/merge-pdf/index.html      canonical .../zh/tools/merge-pdf/
out/zh-TW/tools/merge-pdf/index.html   canonical .../zh-TW/tools/merge-pdf/
both metadesc: 将多个PDF文件合并成一个文档。免费在线PDF合并器，支持拖放重新排序。
```

Only the chrome differs (nav/footer come from `messages/zh-TW.json`, so `首頁` vs `首页`) — roughly 40 characters of a ~1,200-character page.

**Fix:** either add a real `zh-TW.ts`, or canonicalise `zh-TW` → `zh` (and drop `zh-TW` from the sitemap until translated).

## 2. English content served under localized URLs — 180 pages

`getToolContent()` silently falls back to `toolContentEn`. Coverage against the 99 EN entries:

| locale | translated | falling back to English |
|---|---|---|
| pt | 47 | **52** |
| ko | 56 | **43** |
| de | 70 | **29** |
| fr | 77 | **22** |
| es | 78 | **21** |
| ja | 94 | 5 |
| vi | 95 | 4 |
| ar | 97 | 2 |
| id | 98 | 1 |
| it | 98 | 1 |
| zh | 99 | 0 |

Confirmed in the build — `pt/tools/word-to-pdf` has a Portuguese `<title>` but an English `<meta description>` and English body:

```
pt/tools/word-to-pdf  desc: "Convert Word documents (DOCX) to PDF. Preserve formatting…"
en/tools/word-to-pdf  desc: "Convert Word documents (DOCX) to PDF. Preserve formatting…"   ← identical
```

Same pattern for `ar/tools/find-and-redact`, `ko/tools/rotate-pdf`, and 177 others.

**Worst offenders** (missing in 5+ locales): `word-to-pdf`, `excel-to-pdf`, `pptx-to-pdf`, `rtf-to-pdf`, `xps-to-pdf`, `epub-to-pdf`, `mobi-to-pdf`, `psd-to-pdf`, `pdf-to-svg`, `pdf-to-markdown`, `pdf-reader`, `ocg-manager`, `find-and-redact`, `extract-images`.

**Fix:** make the fallback explicit — emit `<link rel="canonical">` pointing at the English URL (or `noindex`) whenever `getToolContent` falls back, instead of a self-canonical.

## 3. UI strings largely untranslated

`messages/*.json` vs `en.json` (1,859 keys):

| locale | keys | missing | string values identical to English |
|---|---|---|---|
| de | 1,760 | 100 | **816** |
| es | 1,760 | 100 | **807** |
| fr | 1,872 | 100 | **763** |
| ja | 1,872 | 100 | **729** |
| ko | 1,872 | 100 | **729** |
| vi | 1,651 | **760** | 66 |
| id | 1,176 | **712** | 22 |
| it | 1,763 | 106 | 20 |
| zh-TW | 1,759 | 100 | 6 |

Roughly 44% of German/Spanish/French UI copy is verbatim English; Indonesian and Vietnamese are missing ~40% of keys outright and fall back at runtime.

## 4. `ImageToPDFTool` renders 8 separate URLs — 104 pages

`src/app/[locale]/tools/[tool]/page.tsx`:

```
/tools/image-to-pdf   → <ImageToPDFTool />
/tools/jpg-to-pdf     → <ImageToPDFTool imageType="jpg" />
/tools/png-to-pdf     → <ImageToPDFTool imageType="png" />
/tools/webp-to-pdf    → <ImageToPDFTool imageType="webp" />
/tools/bmp-to-pdf     → <ImageToPDFTool imageType="bmp" />
/tools/tiff-to-pdf    → <ImageToPDFTool imageType="tiff" />
/tools/svg-to-pdf     → <ImageToPDFTool imageType="svg" />
/tools/heic-to-pdf    → <ImageToPDFTool imageType="heic" />
```

Note `image-to-pdf` accepts all formats, so the other seven are strict subsets of it. The SEO copy *is* differentiated (highest pairwise word overlap 61%), so this is defensible as a keyword-landing strategy — but the interactive page is identical.

## 5. `PDFToImageTool` renders 5 separate URLs — 65 pages

`pdf-to-jpg`, `pdf-to-png`, `pdf-to-webp`, `pdf-to-bmp`, `pdf-to-tiff` — one component, `outputFormat` prop only.

## 6. Category pages duplicate slices of `/tools` — 78 pages

`/tools/category/{convert-from-pdf, convert-to-pdf, edit-annotate, optimize-repair, organize-manage, secure-pdf}` render the same tool cards already present on `/tools`, with no unique copy. They are **absent from `sitemap.ts`** yet fully crawlable and internally linked. Same for `/workflow` (13 URLs).

## 7. `/` duplicates `/en/`

`out/index.html` is a client-side JS redirect shell (`src/app/page.tsx` → `router.replace('/en')`). It ships:

- the same `<title>Sajeda PDF - Professional PDF Tools</title>` and `<meta description>` as `/en/`
- **no `<link rel="canonical">`**, no `noindex`, no `<meta refresh>`
- an empty `<body>` until JS runs

**Fix:** add `canonical → /en/` or a server-level 302, since a JS-only redirect leaves a thin duplicate indexable.

## 8. Overlapping tools (product-level duplication)

Not URL duplication, but pages competing for the same job:

- **`pdf-multi-tool`** declares `features: [merge, split, organize, delete, rotate, add-blank, extract, duplicate]` — a superset of **7** standalone tool pages.
- **Merge family:** `merge-pdf`, `alternate-merge`, `combine-single-page`, `grid-combine`, `n-up-pdf`
- **Split family:** `split-pdf`, `extract-pages`, `divide-pages`, `delete-pages` (`split-pdf` already lists `extract-pages` in its own `features`)
- **Rotate:** `rotate-pdf` vs `rotate-custom`
- **Metadata:** `view-metadata`, `edit-metadata`, `remove-metadata`
- **Unlock:** `decrypt-pdf` vs `remove-restrictions` (both shell out to `qpdf --decrypt`; only difference is whether a password is mandatory)
- **Flatten:** `flatten-pdf`, `rasterize-pdf`, `font-to-outline`
- **Compress:** `compress-pdf` vs `linearize-pdf`

## 9. Copy-paste code clones — 34 file pairs ≥72% similar

Highest-similarity component pairs:

| similarity | files |
|---|---|
| 91% | `epub-to-pdf` ↔ `xps-to-pdf` ↔ `mobi-to-pdf` |
| 91% | `rtf-to-pdf` ↔ `pptx-to-pdf` ↔ `excel-to-pdf` |
| 88% | `delete/DeletePagesTool` ↔ `extract/ExtractPagesTool` |
| 86% | `pdf-to-docx/PDFToDocxTool` ↔ `pdf-to-excel/PDFToExcelTool` |
| 82% | `word-to-pdf` ↔ `rtf-to-pdf` / `pptx-to-pdf` / `excel-to-pdf` |
| 80% | `merge/MergePDFTool` ↔ `alternate-merge/AlternateMergeTool` |
| 79% | `rotate/RotatePDFTool` ↔ `rotate-custom/RotateCustomTool` |

`EPUBToPDFTool.tsx` vs `MOBIToPDFTool.tsx` (189 lines each) differ in **15 lines** — icon import, processor import, type name, accepted extensions, and four translation keys.

The processor layer mirrors this: `epub-to-pdf.ts` ↔ `mobi-to-pdf.ts` 92%, `rtf-to-pdf.ts` ↔ `word-to-pdf.ts` 91%, `decrypt.ts` ↔ `remove-restrictions.ts` 79%, `delete.ts` ↔ `extract.ts` 76%.

**Fix:** one `<DocumentConvertTool>` taking `{processor, accept, icon, i18nPrefix}` would collapse the 9-file office/ebook cluster (~1,900 lines) to ~250.

## 10. Orphan content keys — content for tools that don't exist

Present in locale content maps but with **no entry in `config/tools.ts`** and no route, so never rendered:

| key | file(s) | duplicates |
|---|---|---|
| `pdf-to-xlsx` | `fr.ts` | `pdf-to-excel` |
| `repair-pdf-advanced` | `fr.ts` | `repair-pdf` |
| `remove-metadata-full` | `ja.ts`, `zh.ts` | `remove-metadata` |
| `pdf-to-html` | `zh.ts` | — |
| `pdf-to-txt` | `zh.ts` | — |

## Stray build artifacts

Four copies of the build coexist in the working tree (all untracked, all gitignored except the stray):

- `.next/` — dev build
- `out/` — static export, build ID `UgUe6AO0sVUPtISllRYog`
- `_next/` at repo root — **stale duplicate**, build ID `UF7VDTWYq_YVpHvxnX65r`. Not covered by `.gitignore` (which only ignores `.next` and `out`).
- `sajedapdf-build.zip` — **333 MB**

---

## What is clean

- **No duplicate tool `id`s or `slug`s** across 99 entries; `id === slug` for all.
- **No duplicate English `title` or `metaDescription`** — 0 exact collisions across 99 tools.
- **No byte-identical files** in `components/tools/` (96 files) or `lib/pdf/` (90 files).
- **Route/content/renderer alignment is perfect** — 99 tools, 99 EN content entries, 99 switch cases, zero orphans in either direction, zero tools hitting the `comingSoon` fallback.
- **hreflang is complete** — all 13 alternates plus `x-default` on every locale tool page, with correct self-canonicals.

---

# What was changed

## Duplicate removal

**`src/config/tool-content/index.ts`** — new `resolveToolContent(locale, toolId)` returns `{ content, sourceLocale, isFallback }`. `getToolContent` is kept as a thin wrapper so existing callers are unaffected. A `LOCALE_ALIASES` map holds `zh-TW → zh` explicitly, and `isToolContentFallback` exposes the flag for the sitemap.

**`src/lib/seo/metadata.ts`** — `generateBaseMetadata` and `generateToolMetadata` accept `canonicalLocale`. The canonical is built from it, defaulting to the current locale, while hreflang alternates stay complete so readers still land on their own language. The hardcoded 26-entry English title map was deleted; `metaTitle` in tool-content is now the single source of truth.

**`src/app/[locale]/tools/[tool]/page.tsx`** — `generateMetadata` uses `resolveToolContent` and passes `resolved.sourceLocale` as `canonicalLocale`. `SUPPORTED_LOCALES` is now derived from `lib/i18n/config` rather than hand-maintained, which fixes the missing `id` locale.

**`src/app/sitemap.ts`** — excludes tool pages whose copy falls back to another locale, and adds `/workflow` plus the 6 category pages per locale. `getSitemapUrlCount` now counts emitted entries instead of multiplying.

**`src/app/page.tsx`** — converted to a server component that exports metadata with `canonical → /en/`. The redirect moved to a new client component, `src/app/RootRedirect.tsx`, which now matches the full browser tag first so `zh-TW` readers reach `/zh-TW` rather than `/zh`.

**`fr.ts`, `ja.ts`, `zh.ts`** — the 5 orphan content keys removed.

### Result

| | Before | After |
|---|---|---|
| Tool URLs with a self-referencing canonical | 1,287 | 1,011 |
| Tool URLs canonicalised to their source | 0 | 276 |
| Sitemap URLs | 1,365 | 1,180 |
| Category pages in sitemap | 0 | 78 |
| `/workflow` in sitemap | 0 | 13 |
| Locales generating tool pages | 12 | 13 |

## Content rewrite

`src/config/tool-content/en.ts` rebuilt from scratch — all 99 tools, 28,367 → 43,769 words.

Every entry now carries a unique `metaTitle` (≤60 characters), a unique `metaDescription` (70–160 characters, so none is truncated), a three-paragraph description, at least three how-to steps, three use cases and three FAQs. Verified: 0 duplicate titles, 0 duplicate descriptions, 0 over-length descriptions, 0 entries below the structural minimums, and 0 pairs of tools sharing more than 50% of their vocabulary.

The copy leads with the problem rather than the feature — why a page is 25 MB, why transparent PNGs turn black, why booklet page order looks scrambled, why a black rectangle is not redaction. Filler phrases went from 16 to 2, and the two remaining uses of "seamless" describe an actual visible seam between stitched pages.

## Verification

- All 4 modified content files parse and produce valid runtime structures (esbuild + Node).
- `resolveToolContent` exercised across all 13 locales × 99 tools: 1,011 native, 276 fallback, 0 unresolved, correct canonical target in every case.
- TypeScript: all 6 changed files typecheck clean. The 47 remaining errors in the isolated check environment all originate from stubbed third-party modules in files that were not touched.

## Still open

1. Backfill native tool content for `pt` (52), `ko` (43), `de` (29), `fr` (21), `es` (21) — the canonicals are correct now, but these locales still have no copy of their own.
2. Write a real `zh-TW.ts` if Traditional Chinese is a target market.
3. Translate the ~800 UI strings per locale still sitting in English (de, es, fr, ja, ko), and the 700+ missing keys in id and vi.
4. Delete the stale root `_next/` directory and the 333 MB `sajedapdf-build.zip`, and add `_next` to `.gitignore`.
5. Refactor the 9-file office/ebook converter cluster behind one shared component (~1,900 lines → ~250).
