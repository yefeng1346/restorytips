import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticlePage } from "@/components/pages";
import { buildPageMetadata } from "@/lib/seo";
import { getGuideMeta, guideMeta } from "@/lib/site-data";

export function generateStaticParams() {
  return guideMeta.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideMeta(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    keywords: [guide.keyword, ...guide.tags],
    path: `/guides/${slug}`,
    supportedLocales:
      slug === "restory-chill-electronics-repairs-walkthrough" ? ["en", "ru", "de", "ja"] : undefined,
    type: "article",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getGuideMeta(slug)) notFound();
  return <GuideArticlePage locale="en" slug={slug} />;
}
