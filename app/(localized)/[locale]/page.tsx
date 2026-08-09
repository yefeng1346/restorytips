import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { defaultLocale, getLocalizedHomeMeta, isLocale, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale) return {};
  const homeMeta = getLocalizedHomeMeta(rawLocale);
  return buildPageMetadata({
    title: homeMeta.title,
    description: homeMeta.description,
    keywords: homeMeta.keywords,
    path: `/${rawLocale}`,
    alternatePath: "/",
    locale: rawLocale,
    supportedLocales: locales,
  });
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return <HomePage locale={locale as Locale} />;
}
