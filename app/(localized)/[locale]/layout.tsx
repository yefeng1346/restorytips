import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { GoogleAdsense } from "@/components/google-adsense";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ThemeInit } from "@/components/theme-init";
import { defaultLocale, isLocale, locales, siteConfig, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: "ReStorytips",
  authors: [{ name: "ReStorytips" }],
  publisher: "ReStorytips",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale) || rawLocale === defaultLocale) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeInit />
        <GoogleAdsense />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
