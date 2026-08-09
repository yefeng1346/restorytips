import { describe, expect, it } from "vitest";
import { getLocaleCopy, guideMeta, siteConfig } from "../lib/site-data";

describe("ReStory site contract", () => {
  it("uses the researched game identity and official links", () => {
    expect(siteConfig.gameName).toBe("ReStory: Chill Electronics Repairs");
    expect(siteConfig.official.discord).toBe("https://discord.gg/restory");
    expect(siteConfig.official.youtube).toBe("https://www.youtube.com/@tinyBuildGAMES");
    expect(siteConfig.sidebarCodes).toEqual(["暂无"]);
  });

  it("exposes the four researched locales without the old game label", () => {
    expect(siteConfig.locales).toEqual(["en", "ru", "de", "ja"]);
    expect(getLocaleCopy("ja").gameName).toBe("リ・ストーリー: 思い出修理屋");
    expect(JSON.stringify(siteConfig)).not.toContain("TBH");
  });

  it("maps every researched keyword to one SEO-ready article", () => {
    const keywords = [
      "restory: chill electronics repairs walkthrough",
      "restory: chill electronics repairs cleaning guide",
      "restory: chill electronics repairs endings",
      "restory: chill electronics repairs achievements",
      "restory: chill electronics repairs parts catalog",
      "restory: chill electronics repairs internet plan",
      "restory: chill electronics repairs atari",
      "restory: chill electronics repairs release date",
      "restory: chill electronics repairs platforms",
      "restory: chill electronics repairs demo",
      "restory: chill electronics repairs price",
      "restory: chill electronics repairs system requirements",
      "restory: chill electronics repairs controller support",
      "restory: chill electronics repairs language support",
      "restory: chill electronics repairs resolution settings",
      "restory: chill electronics repairs gameplay",
      "restory: chill electronics repairs trailer",
      "restory: chill electronics repairs review",
      "restory: chill electronics repairs mods",
      "restory: chill electronics repairs games like",
    ];

    expect(guideMeta).toHaveLength(keywords.length);
    keywords.forEach((keyword, index) => {
      const page = guideMeta[index];
      expect(page.keyword).toBe(keyword);
      expect(page.seoTitle.toLowerCase()).toContain(keyword);
      expect(page.seoTitle.length).toBeGreaterThanOrEqual(40);
      expect(page.seoTitle.length).toBeLessThanOrEqual(60);
      expect(page.metaDescription.toLowerCase()).toContain(keyword);
      expect(page.metaDescription.length).toBeGreaterThanOrEqual(140);
      expect(page.metaDescription.length).toBeLessThanOrEqual(160);
    });
  });
});
