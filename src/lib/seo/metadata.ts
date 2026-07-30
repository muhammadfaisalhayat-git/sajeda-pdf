/**
 * SEO Metadata Generation Utilities
 * Provides functions for generating meta tags, Open Graph, and Twitter Card data
 * 
 * @module lib/seo/metadata
 */

import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { type Locale, localeConfig, locales } from '@/lib/i18n/config';
import type { Tool, ToolContent } from '@/types/tool';

/**
 * Base metadata configuration
 */
export interface BaseMetadataOptions {
  locale: Locale;
  path?: string;
}

/**
 * Page-specific metadata options
 */
export interface PageMetadataOptions extends BaseMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  /**
   * Locale the page's copy is actually written in. Defaults to `locale`.
   *
   * Set this when a page renders another language's text (e.g. /zh-TW/ showing
   * Simplified Chinese, or /pt/ showing English) so the canonical points at the
   * original instead of self-referencing. Without it, every untranslated locale
   * publishes a duplicate of the same article as an original.
   */
  canonicalLocale?: Locale;
}

/**
 * Tool page metadata options
 */
export interface ToolMetadataOptions extends BaseMetadataOptions {
  tool: Tool;
  content: ToolContent;
  /** Locale the tool copy is actually written in. See PageMetadataOptions. */
  canonicalLocale?: Locale;
}

/**
 * Generate the canonical URL for a page
 */
export function getCanonicalUrl(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}/${locale}${cleanPath}`;
}

/**
 * Generate alternate language URLs for hreflang tags
 */
export function getAlternateUrls(path: string = ''): Record<string, string> {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const alternates: Record<string, string> = {};

  for (const locale of locales) {
    alternates[locale] = `${siteConfig.url}/${locale}${cleanPath}`;
  }

  // Add x-default pointing to English
  alternates['x-default'] = `${siteConfig.url}/en${cleanPath}`;

  return alternates;
}

/**
 * Generate base metadata for any page
 */
export function generateBaseMetadata(options: PageMetadataOptions): Metadata {
  const { locale, path = '', title, description, keywords = [], image, noIndex = false, canonicalLocale } = options;

  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  // Canonical points at the locale the copy was written in. For fully translated
  // pages that is the current locale; for fallback pages it is the source locale,
  // which consolidates duplicates onto one indexable URL. hreflang alternates stay
  // complete either way so users still land on their own language.
  const canonicalUrl = getCanonicalUrl(canonicalLocale ?? locale, path);
  const ogImage = image || siteConfig.ogImage;
  const ogLocale = getOpenGraphLocale(locale);

  // Ensure description is optimal length (150-160 characters)
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  return {
    title: fullTitle,
    description: optimizedDescription,
    keywords: [...new Set([...keywords, 'PDF', 'PDF tools', 'free', 'online', siteConfig.name])],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: false }
      : {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/images/logo.png',
    },
    appleWebApp: {
      title: siteConfig.name,
      statusBarStyle: 'default',
      capable: true,
    },
    formatDetection: {
      telephone: false,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateUrls(path),
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: canonicalUrl,
      title: fullTitle,
      description: optimizedDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: optimizedDescription,
      images: [ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`],
      creator: siteConfig.creator,
    },
    verification: {
      // Add verification tags if needed
      // google: 'google-site-verification-code',
      // yandex: 'yandex-verification-code',
    },
    category: 'technology',
  };
}

/**
 * Get localized suffix for tool title tag
 */
function getLocalizedSuffix(locale: Locale): string {
  const suffixes: Record<string, string> = {
    en: 'Online - Free & Secure PDF Tool',
    es: 'en Línea - Herramienta PDF Gratis y Segura',
    fr: 'en Ligne - Outil PDF Gratuit et Sécurisé',
    de: 'Online - Kostenloses & Sicheres PDF-Tool',
    ja: 'オンライン - 無料で安全なPDFツール',
    ko: '온라인 - 무료 및 안전한 PDF 도구',
    zh: '在线 - 免费安全的PDF工具',
    'zh-TW': '線上 - 免費安全的PDF工具',
    pt: 'Online - Ferramenta PDF Gratuita e Segura',
    ar: 'عبر الإنترنت - أداة PDF مجانية وآمنة',
    it: 'Online - Strumento PDF Gratuito e Sicuro',
    id: 'Online - Alat PDF Gratis & Aman',
    vi: 'Trực tuyến - Công cụ PDF Miễn phí & Bảo mật',
  };
  return suffixes[locale] || suffixes.en;
}

/**
 * Get the title tag for a tool page.
 *
 * Preference order:
 *   1. `metaTitle` from the tool's content entry - unique per tool, per locale.
 *   2. The content title plus a localised suffix.
 *
 * The suffix fallback is identical for every tool in a locale, so any tool
 * relying on it shares its title shape with every other one. Set `metaTitle` in
 * the locale's tool-content file to give a page a distinct title. English has
 * `metaTitle` on all 99 tools; other locales fall back until translated.
 *
 * A hardcoded English title map used to live here and silently overrode
 * `metaTitle` for 26 tools. It has been removed - tool-content is the single
 * source of truth.
 */
function getOptimizedToolTitle(_toolId: string, title: string, locale: Locale, metaTitleOverride?: string): string {
  if (metaTitleOverride) {
    return metaTitleOverride;
  }

  const suffix = getLocalizedSuffix(locale);
  return `${title} ${suffix}`;
}

/**
 * Generate metadata for tool pages
 */
export function generateToolMetadata(options: ToolMetadataOptions): Metadata {
  const { locale, tool, content, canonicalLocale } = options;
  const path = `/tools/${tool.slug}`;

  // Enhance keywords with common PDF-related terms
  const enhancedKeywords = [
    ...(content.keywords || []),
    'free',
    'online',
    'no registration',
    'browser-based',
    'secure',
    'private',
  ];

  // Resolve custom optional metaTitle override if defined in ToolContent
  const metaTitleOverride = (content as any).metaTitle;
  const seoTitle = getOptimizedToolTitle(tool.id, content.title, locale, metaTitleOverride);

  return generateBaseMetadata({
    locale,
    canonicalLocale,
    path,
    title: seoTitle,
    description: content.metaDescription,
    keywords: enhancedKeywords,
  });
}

/**
 * Generate metadata for the homepage
 */
export function generateHomeMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  const defaultTitle = `${siteConfig.name} - Professional PDF Tools`;
  const defaultDescription = siteConfig.description;

  return generateBaseMetadata({
    locale,
    path: '',
    title: translations?.title || defaultTitle,
    description: translations?.description || defaultDescription,
    keywords: ['PDF tools', 'merge PDF', 'split PDF', 'compress PDF', 'convert PDF', 'free PDF tools', 'online PDF editor'],
  });
}

/**
 * Generate metadata for the tools listing page
 */
export function generateToolsListMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/tools',
    title: translations?.title || 'All PDF Tools',
    description: translations?.description || 'Browse all 67+ professional PDF tools. Merge, split, compress, convert, edit, and secure your PDF files for free.',
    keywords: ['PDF tools', 'all PDF tools', 'PDF editor', 'PDF converter', 'PDF merger', 'PDF splitter'],
  });
}

/**
 * Generate metadata for the about page
 */
export function generateAboutMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/about',
    title: translations?.title || 'About',
    description: translations?.description || `Learn about ${siteConfig.name} - your free, private, and powerful PDF toolkit. All processing happens in your browser.`,
    keywords: ['about', 'PDF tools', 'privacy', 'browser-based'],
  });
}

/**
 * Generate metadata for the FAQ page
 */
export function generateFaqMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/faq',
    title: translations?.title || 'Frequently Asked Questions',
    description: translations?.description || `Find answers to common questions about ${siteConfig.name}. Learn how to use our PDF tools effectively.`,
    keywords: ['FAQ', 'help', 'questions', 'PDF tools help'],
  });
}

/**
 * Generate metadata for the privacy page
 */
export function generatePrivacyMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/privacy',
    title: translations?.title || 'Privacy Policy',
    description: translations?.description || `${siteConfig.name} privacy policy. Your files never leave your device - all processing happens locally in your browser.`,
    keywords: ['privacy', 'security', 'data protection', 'local processing'],
  });
}

/**
 * Generate metadata for the contact page
 */
export function generateContactMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/contact',
    title: translations?.title || 'Contact Us',
    description: translations?.description || `Get in touch with ${siteConfig.name} team. We'd love to hear from you.`,
    keywords: ['contact', 'support', 'help', 'feedback'],
  });
}

/**
 * Convert locale to Open Graph locale format
 */
export function getOpenGraphLocale(locale: Locale): string {
  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    zh: 'zh_CN',
    'zh-TW': 'zh_TW',
    pt: 'pt_BR',
    ar: 'ar_AR',
    it: 'it_IT',
    id: 'id_ID',
    vi: 'vi_VN',
  };
  return ogLocaleMap[locale] || 'en_US';
}

/**
 * Check if metadata contains all required fields
 */
export function validateMetadata(metadata: Metadata): {
  valid: boolean;
  missingFields: string[];
} {
  const requiredFields = ['title', 'description'];
  const requiredOgFields = ['title', 'description'];
  const requiredTwitterFields = ['card', 'title', 'description'];

  const missingFields: string[] = [];

  // Check base fields
  for (const field of requiredFields) {
    if (!metadata[field as keyof Metadata]) {
      missingFields.push(field);
    }
  }

  // Check Open Graph fields
  if (metadata.openGraph) {
    for (const field of requiredOgFields) {
      if (!metadata.openGraph[field as keyof typeof metadata.openGraph]) {
        missingFields.push(`og:${field}`);
      }
    }
  } else {
    missingFields.push('openGraph');
  }

  // Check Twitter Card fields
  if (metadata.twitter) {
    for (const field of requiredTwitterFields) {
      if (!metadata.twitter[field as keyof typeof metadata.twitter]) {
        missingFields.push(`twitter:${field}`);
      }
    }
  } else {
    missingFields.push('twitter');
  }

  return {
    valid: missingFields.length === 0,
    missingFields,
  };
}
