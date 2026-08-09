import type { Metadata } from "next";
import "./globals.css";
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
    icon: "/favicon.png",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
