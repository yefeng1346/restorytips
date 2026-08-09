import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideIndexPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { defaultLocale, getLocaleCopy, getLocalizedHomeMeta, isLocale, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale) return {};
  const copy = getLocaleCopy(rawLocale);
  const homeMeta = getLocalizedHomeMeta(rawLocale);
  return buildPageMetadata({
    title: `${copy.nav.guides} — ${copy.gameName} Wiki`,
    description: homeMeta.description,
    path: `/${rawLocale}/guides`,
    alternatePath: "/guides",
    locale: rawLocale,
    supportedLocales: locales,
  });
}

export default async function LocalizedGuideIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return <GuideIndexPage locale={locale as Locale} />;
}
