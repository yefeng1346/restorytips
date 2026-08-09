import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideIndexPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { getLocaleCopy, isLocale, locales, siteConfig, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const copy = getLocaleCopy(rawLocale);
  return buildPageMetadata({
    title: `${copy.nav.guides} — ${copy.gameName} Wiki`,
    description: siteConfig.homepage.meta.description,
    path: `/${rawLocale}/guides`,
    alternatePath: "/guides",
    locale: rawLocale,
    supportedLocales: locales,
  });
}

export default async function LocalizedGuideIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <GuideIndexPage locale={locale as Locale} />;
}
