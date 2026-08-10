import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { defaultLocale, getLocaleCopy, isLocale, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale) return {};
  return buildPageMetadata({
    title: `${getLocaleCopy(rawLocale).labels.privacy} — ${getLocaleCopy(rawLocale).gameName} Wiki`,
    description: getLocaleCopy(rawLocale).legal.privacy.intro,
    path: `/${rawLocale}/privacy`,
    locale: rawLocale,
    robots: { index: false, follow: true },
  });
}

export default async function LocalizedPrivacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return <LegalPage locale={locale as Locale} type="privacy" />;
}
