import { describe, expect, it } from "vitest";
import {
  getGuideLocales,
  getLocalizedGuideMeta,
  getLocaleCopy,
  guideMeta,
  hasLocalizedGuide,
  localizedPagePath,
  siteConfig,
} from "../lib/site-data";

describe("ReStory site contract", () => {
  it("uses the researched game identity and official links", () => {
    expect(siteConfig.gameName).toBe("ReStory: Chill Electronics Repairs");
    expect(siteConfig.official.discord).toBe("https://discord.gg/restory");
    expect(siteConfig.official.youtube).toBe("https://www.youtube.com/@tinyBuildGAMES");
    expect(siteConfig.sidebarCodes).toEqual([]);
  });

  it("keeps the Adsterra Native Banner configuration available", async () => {
    const { readFile } = await import("node:fs/promises");
    const banner = await readFile(new URL("../components/native-banner.tsx", import.meta.url), "utf8");
    expect(banner).toContain('<script async="async" data-cfasync="false"');
    expect(banner).toContain("https://pl30770499.effectivecpmnetwork.com/34a15f6a5d042fa44074d21dd013e6c1/invoke.js");
    expect(banner).toContain("container-34a15f6a5d042fa44074d21dd013e6c1");
  });

  it("exposes the four researched locales without the old game label", () => {
    expect(siteConfig.locales).toEqual(["en", "ru", "de", "ja"]);
    expect(getLocaleCopy("ja").gameName).toBe("リ・ストーリー: 思い出修理屋");
    expect(JSON.stringify(siteConfig)).not.toContain("TBH");
  });

  it("keeps the homepage FAQ complete and localized", () => {
    siteConfig.locales.forEach((locale) => {
      const faq = getLocaleCopy(locale).home.faqItems;
      expect(faq).toHaveLength(6);
      faq.forEach(({ question, answer }) => {
        expect(question).not.toHaveLength(0);
        expect(answer).not.toHaveLength(0);
      });
    });
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

  it("keeps guide availability strict by locale", () => {
    const partsSlug = "restory-chill-electronics-repairs-parts-catalog";
    const walkthroughSlug = "restory-chill-electronics-repairs-walkthrough";
    const cleaningSlug = "restory-chill-electronics-repairs-cleaning-guide";

    expect(hasLocalizedGuide("en", partsSlug)).toBe(true);
    expect(hasLocalizedGuide("ru", partsSlug)).toBe(true);
    expect(hasLocalizedGuide("de", partsSlug)).toBe(true);
    expect(hasLocalizedGuide("ja", partsSlug)).toBe(true);
    expect(getGuideLocales(partsSlug)).toEqual(["en", "ru", "de", "ja"]);
    expect(getGuideLocales(cleaningSlug)).toEqual(["en", "ru", "de", "ja"]);
    expect(getLocalizedGuideMeta("ru", partsSlug)?.title).toContain("каталог деталей");
    expect(getLocalizedGuideMeta("ru", cleaningSlug)?.title).toContain("гайд по очистке");
    expect(getLocalizedGuideMeta("ru", walkthroughSlug)?.title).toContain("гайд для новичков");
    expect(localizedPagePath("ru", `/guides/${partsSlug}`)).toBe(`/ru/guides/${partsSlug}`);
    expect(localizedPagePath("ru", `/guides/${cleaningSlug}`)).toBe(`/ru/guides/${cleaningSlug}`);
    expect(localizedPagePath("ru", "/guides/not-translated")).toBe("/ru/guides");
  });

  it("covers every guide in every supported non-English locale", () => {
    const supportedLocales = ["ru", "de", "ja"] as const;

    supportedLocales.forEach((locale) => {
      expect(guideMeta.every(({ slug }) => hasLocalizedGuide(locale, slug))).toBe(true);
      expect(guideMeta.every(({ slug }) => Boolean(getLocalizedGuideMeta(locale, slug)))).toBe(true);
    });
  });
});
