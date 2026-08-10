import type { Metadata } from "next";
import {
  defaultLocale,
  locales,
  localizedPath,
  siteConfig,
  type Locale,
} from "./site-data";

export function absoluteUrl(path: string): string {
  if (path === "/") return siteConfig.siteUrl;
  const normalizedPath = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
  return new URL(normalizedPath, `${siteConfig.siteUrl}/`).toString();
}

export function localizedUrl(locale: Locale, path: string): string {
  return absoluteUrl(localizedPath(locale, path));
}

export function languageAlternates(path: string, supportedLocales: readonly Locale[] = locales) {
  return {
    ...Object.fromEntries(supportedLocales.map((locale) => [locale, localizedUrl(locale, path)])),
    "x-default": localizedUrl(defaultLocale, path),
  };
}

function openGraphLocale(locale: Locale): string {
  return {
    en: "en_US",
    ru: "ru_RU",
    de: "de_DE",
    ja: "ja_JP",
  }[locale];
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  alternatePath?: string;
  locale?: Locale;
  keywords?: string | string[];
  supportedLocales?: readonly Locale[];
  robots?: Metadata["robots"];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  alternatePath = path,
  locale = defaultLocale,
  keywords,
  supportedLocales,
  robots,
  type = "website",
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const shareImage = absoluteUrl("/media/restory/repair-shop.jpg");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ReStorytips Editorial Team", url: siteConfig.siteUrl }],
    robots,
    alternates: {
      canonical,
      ...(supportedLocales
        ? { languages: languageAlternates(alternatePath, supportedLocales) }
        : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "ReStorytips",
      type,
      locale: openGraphLocale(locale),
      images: [{ url: shareImage, width: 1920, height: 1080, alt: "ReStory electronics repair shop" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
