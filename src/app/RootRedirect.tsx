'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n/config';

/**
 * Client-side language redirect for the locale-less root URL.
 *
 * Matches the full browser tag first (so zh-TW readers get /zh-TW rather than /zh),
 * then the primary subtag, then falls back to the default locale.
 *
 * The parent server component sets a canonical pointing at /en/, so this thin
 * redirect shell is never indexed in place of the real homepage.
 */
export function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const supported = locales as readonly string[];

    try {
      const browserLang = navigator.language;

      // Exact match first — preserves regional variants like zh-TW.
      const exact = supported.find(
        (locale) => locale.toLowerCase() === browserLang.toLowerCase()
      );
      if (exact) {
        router.replace(`/${exact}`);
        return;
      }

      // Then the primary subtag: "de-AT" -> "de".
      const primaryLang = browserLang.split('-')[0].toLowerCase();
      const primary = supported.find(
        (locale) => locale.toLowerCase() === primaryLang
      );
      router.replace(`/${primary ?? defaultLocale}`);
    } catch {
      router.replace(`/${defaultLocale}`);
    }
  }, [router]);

  return null;
}

export default RootRedirect;
