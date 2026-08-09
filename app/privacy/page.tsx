import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy — ReStory Wiki",
  description: "Privacy information for the independent ReStory: Chill Electronics Repairs fan Wiki.",
  path: "/privacy",
});

export default function Page() {
  return <LegalPage locale="en" type="privacy" />;
}
