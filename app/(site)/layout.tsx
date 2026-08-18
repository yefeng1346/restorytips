import type { Metadata } from "next";
import "../globals.css";
import { GoogleAdsense } from "@/components/google-adsense";
import { GoogleAnalytics } from "@/components/google-analytics";
import { ThemeInit } from "@/components/theme-init";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.homepage.meta.title,
  description: siteConfig.homepage.meta.description,
  keywords: siteConfig.homepage.meta.keywords,
  applicationName: "ReStorytips",
  authors: [{ name: "ReStorytips" }],
  publisher: "ReStorytips",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "64x64" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: siteConfig.homepage.meta.title,
    description: siteConfig.homepage.meta.description,
    url: siteConfig.siteUrl,
    siteName: "ReStorytips",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.homepage.meta.title,
    description: siteConfig.homepage.meta.description,
  },
};

export default function SiteRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
