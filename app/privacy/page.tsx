import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Privacy Policy — ReStory Wiki",
  description: "Privacy information for the independent ReStory: Chill Electronics Repairs fan Wiki.",
};

export default function Page() {
  return <LegalPage locale="en" type="privacy" />;
}
