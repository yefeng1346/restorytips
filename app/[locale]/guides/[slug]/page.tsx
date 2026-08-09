import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticlePage } from "@/components/pages";
import { getGuideMeta, guideMeta, isLocale, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => guideMeta.map(({ slug }) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const guide = getGuideMeta(slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.metaDescription,
    keywords: [guide.keyword, ...guide.tags],
  };
}

export default async function LocalizedGuideArticle({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !getGuideMeta(slug)) notFound();
  return <GuideArticlePage locale={rawLocale as Locale} slug={slug} />;
}
