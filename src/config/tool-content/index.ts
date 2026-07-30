/**
 * Tool content exports for all languages
 * Requirements: 3.1 - Multi-language support
 */

export { toolContentEn } from './en';
export { toolContentJa } from './ja';
export { toolContentKo } from './ko';
export { toolContentEs } from './es';
export { toolContentFr } from './fr';
export { toolContentDe } from './de';
export { toolContentZh } from './zh';
export { toolContentPt } from './pt';
export { toolContentAr } from './ar';
export { toolContentIt } from './it';
export { toolContentId } from './id';
export { toolContentVn } from './vi';

import { toolContentEn } from './en';
import { toolContentJa } from './ja';
import { toolContentKo } from './ko';
import { toolContentEs } from './es';
import { toolContentFr } from './fr';
import { toolContentDe } from './de';
import { toolContentZh } from './zh';
import { toolContentPt } from './pt';
import { toolContentAr } from './ar';
import { toolContentIt } from './it';
import { toolContentId } from './id';
import { toolContentVn } from './vi';
import { ToolContent } from '@/types/tool';

export type Locale = 'en' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'zh' | 'zh-TW' | 'pt' | 'ar' | 'it' | 'id' | 'vi';

/**
 * Locale -> content map. Note there is deliberately no `zh-TW` entry: Traditional
 * Chinese reuses the Simplified Chinese copy, which is why `resolveToolContent`
 * reports it as a fallback so the page can canonicalise to /zh/.
 */
const CONTENT_MAP: Record<string, Record<string, ToolContent>> = {
  en: toolContentEn,
  ja: toolContentJa,
  ko: toolContentKo,
  es: toolContentEs,
  fr: toolContentFr,
  de: toolContentDe,
  zh: toolContentZh,
  pt: toolContentPt,
  ar: toolContentAr,
  it: toolContentIt,
  id: toolContentId,
  vi: toolContentVn,
};

/**
 * Locales that borrow another locale's copy wholesale rather than falling back
 * to English. zh-TW readers understand Simplified Chinese far better than English,
 * so the content fallback and the SEO canonical both point at /zh/.
 */
const LOCALE_ALIASES: Partial<Record<Locale, Locale>> = {
  'zh-TW': 'zh',
};

/**
 * Result of a tool content lookup.
 *
 * `sourceLocale` is the locale the returned copy was actually written in, which
 * is not always the locale that was requested. When `isFallback` is true the page
 * is showing another language's text and must canonicalise to `sourceLocale`,
 * otherwise search engines treat 13 copies of the same article as 13 originals.
 */
export interface ResolvedToolContent {
  content: ToolContent;
  sourceLocale: Locale;
  isFallback: boolean;
}

/**
 * Resolve tool content along with the locale the copy is actually written in.
 *
 * Resolution order:
 *   1. The requested locale's own content.
 *   2. An aliased locale (zh-TW -> zh).
 *   3. English.
 */
export function resolveToolContent(
  locale: Locale,
  toolId: string
): ResolvedToolContent | undefined {
  // 1. Native content for the requested locale.
  const native = CONTENT_MAP[locale]?.[toolId];
  if (native) {
    return { content: native, sourceLocale: locale, isFallback: false };
  }

  // 2. Aliased locale (Traditional Chinese reuses Simplified Chinese copy).
  const alias = LOCALE_ALIASES[locale];
  if (alias) {
    const aliased = CONTENT_MAP[alias]?.[toolId];
    if (aliased) {
      return { content: aliased, sourceLocale: alias, isFallback: true };
    }
  }

  // 3. English.
  const english = toolContentEn[toolId];
  if (english) {
    return {
      content: english,
      sourceLocale: 'en',
      isFallback: locale !== 'en',
    };
  }

  return undefined;
}

/**
 * Get tool content for a specific locale.
 * Falls back to an aliased locale, then to English.
 *
 * Prefer `resolveToolContent` when generating metadata — this function discards
 * the information needed to emit a correct canonical URL.
 */
export function getToolContent(locale: Locale, toolId: string): ToolContent | undefined {
  return resolveToolContent(locale, toolId)?.content;
}

/**
 * True when the given locale renders another language's copy for this tool.
 * Used to keep fallback pages out of the sitemap.
 */
export function isToolContentFallback(locale: Locale, toolId: string): boolean {
  return resolveToolContent(locale, toolId)?.isFallback ?? false;
}

