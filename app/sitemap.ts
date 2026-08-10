import type { MetadataRoute } from "next";
import { absoluteUrl, localizedUrl } from "@/lib/seo";
import { guideMeta, hasLocalizedGuide, locales } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    absoluteUrl("/"),
    absoluteUrl("/guides"),
    ...locales
      .filter((locale) => locale !== "en")
      .flatMap((locale) => [localizedUrl(locale, "/"), localizedUrl(locale, "/guides")]),
    ...guideMeta.map((guide) => absoluteUrl(`/guides/${guide.slug}`)),
    ...locales
      .filter((locale) => locale !== "en")
      .flatMap((locale) =>
        guideMeta
          .filter((guide) => hasLocalizedGuide(locale, guide.slug))
          .map((guide) => localizedUrl(locale, `/guides/${guide.slug}`)),
      ),
  ];

  return [...new Set(urls)].map((url) => ({ url }));
}
