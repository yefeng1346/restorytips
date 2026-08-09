import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy — ReStory Wiki",
  description:
    "Read the ReStory: Chill Electronics Repairs fan Wiki privacy policy, including public page use, analytics notes, external services, and privacy expectations.",
  path: "/privacy",
});

export default function Page() {
  return <LegalPage locale="en" type="privacy" />;
}
