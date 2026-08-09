import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { getLocaleCopy, isLocale, locales, siteConfig, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const copy = getLocaleCopy(rawLocale);
  return {
    title: `${copy.gameName} Wiki — Guides, Repairs`,
    description: siteConfig.homepage.meta.description,
    keywords: siteConfig.homepage.meta.keywords,
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale as Locale} />;
}
