import type { Metadata } from "next";
import { GuideIndexPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { locales } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "ReStory: Chill Electronics Repairs Guides — Walkthroughs",
  description: "Find ReStory: Chill Electronics Repairs walkthroughs, cleaning steps, parts, devices, story choices, achievements, settings, and known-issue guidance.",
  path: "/guides",
  supportedLocales: locales,
});

export default function Page() {
  return <GuideIndexPage locale="en" />;
}
