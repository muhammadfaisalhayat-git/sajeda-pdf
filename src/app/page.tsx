import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/lib/i18n/config';
import { getAlternateUrls, getCanonicalUrl } from '@/lib/seo/metadata';
import { RootRedirect } from './RootRedirect';

/**
 * The locale-less root URL renders an empty shell and redirects with JavaScript.
 * Search engines that do not run the redirect would otherwise index it as a thin
 * copy of the English homepage, so the canonical points at /en/ and hreflang
 * alternates route each language to its own homepage.
 */
export const metadata: Metadata = {
  title: `${siteConfig.name} - Professional PDF Tools`,
  description: siteConfig.description,
  alternates: {
    canonical: getCanonicalUrl(defaultLocale, ''),
    languages: getAlternateUrls(''),
  },
};

export default function RootPage() {
  return <RootRedirect />;
}
