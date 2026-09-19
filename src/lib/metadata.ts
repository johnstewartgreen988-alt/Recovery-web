import type { Metadata } from "next";

/**
 * Builds a page's metadata with matching Open Graph and Twitter card
 * fields, so each page shows its own title/description when shared on
 * social media instead of falling back to the root layout's defaults.
 */
export function pageMetadata({
  title,
  description,
  noIndex = false,
}: {
  title: string;
  description: string;
  /** Set for pages that shouldn't appear in search results (e.g. thank-you pages). */
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
