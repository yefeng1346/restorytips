import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service — ReStory Wiki",
  description: "Terms for using the independent ReStory: Chill Electronics Repairs fan Wiki.",
  path: "/terms",
});

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
