import { getLocaleCopy, getLocalizedHomeMeta, type Locale } from "@/lib/site-data";
import { absoluteUrl, localizedUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";

type Breadcrumb = {
  name: string;
  path: string;
};

type SitePageJsonLdProps = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  article?: boolean;
  breadcrumbs?: Breadcrumb[];
};

function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function SitePageJsonLd({
  locale,
  path,
  title,
  description,
  article = false,
  breadcrumbs = [],
}: SitePageJsonLdProps) {
  const url = absoluteUrl(path);
  const organizationId = `${siteConfig.siteUrl}/#organization`;
  const websiteId = `${siteConfig.siteUrl}/#website`;
  const pageId = `${url}#webpage`;
  const articleId = `${url}#article`;
  const copy = getLocaleCopy(locale);
  const homeMeta = getLocalizedHomeMeta(locale);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "ReStorytips",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon.png"),
      },
      description: copy.home.hero.description,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.siteUrl,
      name: "ReStorytips",
      description: homeMeta.description,
      publisher: { "@id": organizationId },
      inLanguage: locale,
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: title,
      description,
      isPartOf: { "@id": websiteId },
      inLanguage: locale,
      ...(article ? { mainEntity: { "@id": articleId } } : {}),
    },
  ];

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": articleId,
      headline: title,
      description,
      mainEntityOfPage: { "@id": pageId },
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      inLanguage: locale,
    });
  }

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: localizedUrl(locale, breadcrumb.path),
      })),
    });
  }

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
