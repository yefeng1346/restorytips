import type { Metadata } from "next";
import { HomePage } from "@/components/pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: siteConfig.homepage.meta.title,
  description: siteConfig.homepage.meta.description,
  keywords: siteConfig.homepage.meta.keywords,
};

export default function Page() {
  return <HomePage locale="en" />;
}
