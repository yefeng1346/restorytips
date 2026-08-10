import { guideMeta, siteConfig } from "@/lib/site-data";

export function GET() {
  const guideLines = guideMeta
    .map(
      (guide) =>
        `- [${guide.title}](${siteConfig.siteUrl}/guides/${guide.slug}): ${guide.description}`,
    )
    .join("\n");

  const body = [
    "# ReStorytips",
    "> Independent fan-made community wiki for ReStory: Chill Electronics Repairs.",
    "",
    "## Primary pages",
    `- [Homepage](${siteConfig.siteUrl}/): Game overview, repair workflow, devices, story choices, achievements, and known issues.`,
    `- [Repair Guides](${siteConfig.siteUrl}/guides): Index of the site's research-based English guides.`,
    "",
    "## English guides",
    guideLines,
    "",
    "## Official sources",
    `- [tinyBuild game page](${siteConfig.official.website})`,
    `- [Steam store page](${siteConfig.official.steam})`,
    `- [Official Discord](${siteConfig.official.discord})`,
    `- [Official YouTube channel](${siteConfig.official.youtube})`,
    "",
    "Content status: details that are not verified in the supplied research are marked Unconfirmed on the relevant page. This site is not affiliated with Mandragora, tinyBuild, or Valve.",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
