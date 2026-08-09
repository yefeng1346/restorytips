import type { MetadataRoute } from "next";
import { absoluteUrl, localizedUrl } from "@/lib/seo";
import { guideMeta, locales } from "@/lib/site-data";

const localizedContentSlugs = new Set([
  "restory-chill-electronics-repairs-walkthrough",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    absoluteUrl("/"),
    absoluteUrl("/guides"),
    absoluteUrl("/privacy"),
    absoluteUrl("/terms"),
    ...locales
      .filter((locale) => locale !== "en")
      .flatMap((locale) => [localizedUrl(locale, "/"), localizedUrl(locale, "/guides")]),
    ...guideMeta.map((guide) => absoluteUrl(`/guides/${guide.slug}`)),
    ...locales
      .filter((locale) => locale !== "en")
      .flatMap((locale) =>
        [...localizedContentSlugs].map((slug) => localizedUrl(locale, `/guides/${slug}`)),
      ),
  ];

  return [...new Set(urls)].map((url) => ({ url }));
}
