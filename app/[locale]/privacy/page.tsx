import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { getLocaleCopy, isLocale, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return buildPageMetadata({
    title: `${getLocaleCopy(rawLocale).labels.privacy} — ${getLocaleCopy(rawLocale).gameName} Wiki`,
    description: "Privacy information for the independent ReStory: Chill Electronics Repairs fan Wiki.",
    path: rawLocale === "en" ? "/privacy" : `/${rawLocale}/privacy`,
    locale: rawLocale,
    robots: rawLocale === "en" ? undefined : { index: false, follow: true },
  });
}

export default async function LocalizedPrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale as Locale} type="privacy" />;
}
