import type { Metadata } from "next";
import { GuideIndexPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { locales } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Repair Guides — ReStory: Chill Electronics Repairs Wiki",
  description: "Repair walkthroughs, cleaning workflow, device notes, story choices, achievements, and known issues for ReStory: Chill Electronics Repairs Wiki.",
  path: "/guides",
  supportedLocales: locales,
});

export default function Page() {
  return <GuideIndexPage locale="en" />;
}
