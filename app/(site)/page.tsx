import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { locales, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.homepage.meta.title,
  description: siteConfig.homepage.meta.description,
  keywords: siteConfig.homepage.meta.keywords,
  path: "/",
  supportedLocales: locales,
});

export default function Page() {
  return <HomePage locale="en" />;
}
