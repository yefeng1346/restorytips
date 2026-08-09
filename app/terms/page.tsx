import type { Metadata } from "next";
import { LegalPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Terms of Service — ReStory Wiki",
  description: "Terms for using the independent ReStory: Chill Electronics Repairs fan Wiki.",
};

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
