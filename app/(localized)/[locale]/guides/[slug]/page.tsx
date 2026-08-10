import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticlePage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import {
  getGuideMeta,
  getLocalizedGuideMeta,
  guideMeta,
  hasLocalizedGuide,
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/lib/site-data";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => guideMeta
      .filter((guide) => hasLocalizedGuide(locale, guide.slug))
      .map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale) return {};
  const guide = getGuideMeta(slug);
  if (!guide || !hasLocalizedGuide(rawLocale, slug)) return {};
  const localizedGuide = getLocalizedGuideMeta(rawLocale, slug) ?? guide;
  return buildPageMetadata({
    title: localizedGuide.seoTitle,
    description: localizedGuide.metaDescription,
    path: `/${rawLocale}/guides/${slug}`,
    alternatePath: `/guides/${slug}`,
    locale: rawLocale,
    keywords: [guide.keyword, ...guide.tags],
    supportedLocales: locales,
    type: "article",
  });
}

export default async function LocalizedGuideArticle({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale || !getGuideMeta(slug) || !hasLocalizedGuide(rawLocale, slug)) notFound();
  return <GuideArticlePage locale={rawLocale as Locale} slug={slug} />;
}
