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
import GermanBeginnerGuide from "@/content/de/guides/beginner-guide.mdx";
import GermanAchievementsGuide from "@/content/de/guides/achievements.mdx";
import GermanPartsCatalogGuide from "@/content/de/guides/parts-catalog.mdx";
import GermanResolutionSettingsGuide from "@/content/de/guides/resolution-settings.mdx";
import JapaneseBeginnerGuide from "@/content/ja/guides/beginner-guide.mdx";
import JapaneseAchievementsGuide from "@/content/ja/guides/achievements.mdx";
import JapanesePartsCatalogGuide from "@/content/ja/guides/parts-catalog.mdx";
import JapaneseResolutionSettingsGuide from "@/content/ja/guides/resolution-settings.mdx";
import RussianBeginnerGuide from "@/content/ru/guides/beginner-guide.mdx";
import RussianAchievementsGuide from "@/content/ru/guides/achievements.mdx";
import RussianPartsCatalogGuide from "@/content/ru/guides/parts-catalog.mdx";
import RussianResolutionSettingsGuide from "@/content/ru/guides/resolution-settings.mdx";
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
  ru: {
    "restory-chill-electronics-repairs-walkthrough": RussianBeginnerGuide,
    "restory-chill-electronics-repairs-parts-catalog": RussianPartsCatalogGuide,
    "restory-chill-electronics-repairs-achievements": RussianAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": RussianResolutionSettingsGuide,
  },
  de: {
    "restory-chill-electronics-repairs-walkthrough": GermanBeginnerGuide,
    "restory-chill-electronics-repairs-parts-catalog": GermanPartsCatalogGuide,
    "restory-chill-electronics-repairs-achievements": GermanAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": GermanResolutionSettingsGuide,
  },
  ja: {
    "restory-chill-electronics-repairs-walkthrough": JapaneseBeginnerGuide,
    "restory-chill-electronics-repairs-parts-catalog": JapanesePartsCatalogGuide,
    "restory-chill-electronics-repairs-achievements": JapaneseAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": JapaneseResolutionSettingsGuide,
  },
};

export function getGuideComponent(locale: Locale, slug: string): MdxArticle | undefined {
  return articles[locale][slug];
}
