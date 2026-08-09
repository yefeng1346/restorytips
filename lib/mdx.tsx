import type { ComponentType } from "react";
import AtariGuide from "@/content/en/guides/restory-chill-electronics-repairs-atari.mdx";
import AchievementsGuide from "@/content/en/guides/restory-chill-electronics-repairs-achievements.mdx";
import CleaningGuide from "@/content/en/guides/restory-chill-electronics-repairs-cleaning-guide.mdx";
import ControllerSupportGuide from "@/content/en/guides/restory-chill-electronics-repairs-controller-support.mdx";
import DemoGuide from "@/content/en/guides/restory-chill-electronics-repairs-demo.mdx";
import EndingsGuide from "@/content/en/guides/restory-chill-electronics-repairs-endings.mdx";
import GamesLikeGuide from "@/content/en/guides/restory-chill-electronics-repairs-games-like.mdx";
import GameplayGuide from "@/content/en/guides/restory-chill-electronics-repairs-gameplay.mdx";
import InternetPlanGuide from "@/content/en/guides/restory-chill-electronics-repairs-internet-plan.mdx";
import LanguageSupportGuide from "@/content/en/guides/restory-chill-electronics-repairs-language-support.mdx";
import ModsGuide from "@/content/en/guides/restory-chill-electronics-repairs-mods.mdx";
import PartsCatalogGuide from "@/content/en/guides/restory-chill-electronics-repairs-parts-catalog.mdx";
import PlatformsGuide from "@/content/en/guides/restory-chill-electronics-repairs-platforms.mdx";
import PriceGuide from "@/content/en/guides/restory-chill-electronics-repairs-price.mdx";
import ReleaseDateGuide from "@/content/en/guides/restory-chill-electronics-repairs-release-date.mdx";
import ResolutionSettingsGuide from "@/content/en/guides/restory-chill-electronics-repairs-resolution-settings.mdx";
import ReviewGuide from "@/content/en/guides/restory-chill-electronics-repairs-review.mdx";
import SystemRequirementsGuide from "@/content/en/guides/restory-chill-electronics-repairs-system-requirements.mdx";
import TrailerGuide from "@/content/en/guides/restory-chill-electronics-repairs-trailer.mdx";
import WalkthroughGuide from "@/content/en/guides/restory-chill-electronics-repairs-walkthrough.mdx";
import type { Locale } from "./site-data";

export type MdxArticle = ComponentType<Record<string, unknown>>;

const articles: Record<Locale, Record<string, MdxArticle>> = {
  en: {
    "restory-chill-electronics-repairs-walkthrough": WalkthroughGuide,
    "restory-chill-electronics-repairs-cleaning-guide": CleaningGuide,
    "restory-chill-electronics-repairs-endings": EndingsGuide,
    "restory-chill-electronics-repairs-achievements": AchievementsGuide,
    "restory-chill-electronics-repairs-parts-catalog": PartsCatalogGuide,
    "restory-chill-electronics-repairs-internet-plan": InternetPlanGuide,
    "restory-chill-electronics-repairs-atari": AtariGuide,
    "restory-chill-electronics-repairs-release-date": ReleaseDateGuide,
    "restory-chill-electronics-repairs-platforms": PlatformsGuide,
    "restory-chill-electronics-repairs-demo": DemoGuide,
    "restory-chill-electronics-repairs-price": PriceGuide,
    "restory-chill-electronics-repairs-system-requirements": SystemRequirementsGuide,
    "restory-chill-electronics-repairs-controller-support": ControllerSupportGuide,
    "restory-chill-electronics-repairs-language-support": LanguageSupportGuide,
    "restory-chill-electronics-repairs-resolution-settings": ResolutionSettingsGuide,
    "restory-chill-electronics-repairs-gameplay": GameplayGuide,
    "restory-chill-electronics-repairs-trailer": TrailerGuide,
    "restory-chill-electronics-repairs-review": ReviewGuide,
    "restory-chill-electronics-repairs-mods": ModsGuide,
    "restory-chill-electronics-repairs-games-like": GamesLikeGuide,
  },
  ru: {},
  de: {},
  ja: {},
};

export function getGuideComponent(locale: Locale, slug: string): MdxArticle | undefined {
  return articles[locale][slug] ?? articles.en[slug];
}
