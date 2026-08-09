import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: siteConfig.homepage.meta.title,
  description: siteConfig.homepage.meta.description,
  keywords: siteConfig.homepage.meta.keywords,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: siteConfig.homepage.meta.title,
    description: siteConfig.homepage.meta.description,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
