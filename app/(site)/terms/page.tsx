import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service — ReStory Wiki",
  description:
    "Review the ReStory: Chill Electronics Repairs fan Wiki terms, official sources, trademarks, external links, research status, and site use.",
  path: "/terms",
  robots: { index: false, follow: true },
});

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
