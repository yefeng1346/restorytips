import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticlePage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import {
  getGuideMeta,
  getLocalizedGuideMeta,
  guideMeta,
  hasLocalizedGuide,
  isLocale,
  locales,
  type Locale,
} from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => guideMeta.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const guide = getGuideMeta(slug);
  if (!guide) return {};
  const localizedGuide = getLocalizedGuideMeta(rawLocale, slug) ?? guide;
  const isTranslated =
    slug === "restory-chill-electronics-repairs-walkthrough" &&
    (rawLocale === "en" || hasLocalizedGuide(rawLocale, slug));
  return buildPageMetadata({
    title: localizedGuide.seoTitle,
    description: localizedGuide.metaDescription,
    path: `/${rawLocale}/guides/${slug}`,
    alternatePath: `/guides/${slug}`,
    locale: rawLocale,
    keywords: [guide.keyword, ...guide.tags],
    supportedLocales: isTranslated ? locales : undefined,
    robots: rawLocale !== "en" && !isTranslated ? { index: false, follow: true } : undefined,
    type: "article",
  });
}

export default async function LocalizedGuideArticle({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !getGuideMeta(slug)) notFound();
  return <GuideArticlePage locale={rawLocale as Locale} slug={slug} />;
}
