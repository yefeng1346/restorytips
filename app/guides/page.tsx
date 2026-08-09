import type { Metadata } from "next";
import { GuideIndexPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Repair Guides — ReStory: Chill Electronics Repairs Wiki",
  description: "Repair walkthroughs, cleaning workflow, device notes, story choices, achievements, and known issues for ReStory: Chill Electronics Repairs.",
};

export default function Page() {
  return <GuideIndexPage locale="en" />;
}
