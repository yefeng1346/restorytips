import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service — ReStory Wiki",
  description:
    "Review the ReStory: Chill Electronics Repairs fan Wiki terms for unofficial content, research status, official sources, trademarks, external links, and site use.",
  path: "/terms",
});

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
