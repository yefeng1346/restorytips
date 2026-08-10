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
import GermanAtariGuide from "@/content/de/guides/atari.mdx";
import GermanCleaningGuide from "@/content/de/guides/cleaning-guide.mdx";
import GermanControllerSupportGuide from "@/content/de/guides/controller-support.mdx";
import GermanDemoGuide from "@/content/de/guides/demo.mdx";
import GermanEndingsGuide from "@/content/de/guides/endings.mdx";
import GermanGamesLikeGuide from "@/content/de/guides/games-like.mdx";
import GermanGameplayGuide from "@/content/de/guides/gameplay.mdx";
import GermanInternetPlanGuide from "@/content/de/guides/internet-plan.mdx";
import GermanLanguageSupportGuide from "@/content/de/guides/language-support.mdx";
import GermanModsGuide from "@/content/de/guides/mods.mdx";
import GermanPartsCatalogGuide from "@/content/de/guides/parts-catalog.mdx";
import GermanPlatformsGuide from "@/content/de/guides/platforms.mdx";
import GermanPriceGuide from "@/content/de/guides/price.mdx";
import GermanReleaseDateGuide from "@/content/de/guides/release-date.mdx";
import GermanResolutionSettingsGuide from "@/content/de/guides/resolution-settings.mdx";
import GermanReviewGuide from "@/content/de/guides/review.mdx";
import GermanSystemRequirementsGuide from "@/content/de/guides/system-requirements.mdx";
import GermanTrailerGuide from "@/content/de/guides/trailer.mdx";
import JapaneseBeginnerGuide from "@/content/ja/guides/beginner-guide.mdx";
import JapaneseAchievementsGuide from "@/content/ja/guides/achievements.mdx";
import JapaneseAtariGuide from "@/content/ja/guides/atari.mdx";
import JapaneseCleaningGuide from "@/content/ja/guides/cleaning-guide.mdx";
import JapaneseControllerSupportGuide from "@/content/ja/guides/controller-support.mdx";
import JapaneseDemoGuide from "@/content/ja/guides/demo.mdx";
import JapaneseEndingsGuide from "@/content/ja/guides/endings.mdx";
import JapaneseGamesLikeGuide from "@/content/ja/guides/games-like.mdx";
import JapaneseGameplayGuide from "@/content/ja/guides/gameplay.mdx";
import JapaneseInternetPlanGuide from "@/content/ja/guides/internet-plan.mdx";
import JapaneseLanguageSupportGuide from "@/content/ja/guides/language-support.mdx";
import JapaneseModsGuide from "@/content/ja/guides/mods.mdx";
import JapanesePartsCatalogGuide from "@/content/ja/guides/parts-catalog.mdx";
import JapanesePlatformsGuide from "@/content/ja/guides/platforms.mdx";
import JapanesePriceGuide from "@/content/ja/guides/price.mdx";
import JapaneseReleaseDateGuide from "@/content/ja/guides/release-date.mdx";
import JapaneseResolutionSettingsGuide from "@/content/ja/guides/resolution-settings.mdx";
import JapaneseReviewGuide from "@/content/ja/guides/review.mdx";
import JapaneseSystemRequirementsGuide from "@/content/ja/guides/system-requirements.mdx";
import JapaneseTrailerGuide from "@/content/ja/guides/trailer.mdx";
import RussianBeginnerGuide from "@/content/ru/guides/beginner-guide.mdx";
import RussianAchievementsGuide from "@/content/ru/guides/achievements.mdx";
import RussianAtariGuide from "@/content/ru/guides/atari.mdx";
import RussianCleaningGuide from "@/content/ru/guides/cleaning-guide.mdx";
import RussianControllerSupportGuide from "@/content/ru/guides/controller-support.mdx";
import RussianDemoGuide from "@/content/ru/guides/demo.mdx";
import RussianEndingsGuide from "@/content/ru/guides/endings.mdx";
import RussianGamesLikeGuide from "@/content/ru/guides/games-like.mdx";
import RussianGameplayGuide from "@/content/ru/guides/gameplay.mdx";
import RussianInternetPlanGuide from "@/content/ru/guides/internet-plan.mdx";
import RussianLanguageSupportGuide from "@/content/ru/guides/language-support.mdx";
import RussianModsGuide from "@/content/ru/guides/mods.mdx";
import RussianPartsCatalogGuide from "@/content/ru/guides/parts-catalog.mdx";
import RussianPlatformsGuide from "@/content/ru/guides/platforms.mdx";
import RussianPriceGuide from "@/content/ru/guides/price.mdx";
import RussianReleaseDateGuide from "@/content/ru/guides/release-date.mdx";
import RussianResolutionSettingsGuide from "@/content/ru/guides/resolution-settings.mdx";
import RussianReviewGuide from "@/content/ru/guides/review.mdx";
import RussianSystemRequirementsGuide from "@/content/ru/guides/system-requirements.mdx";
import RussianTrailerGuide from "@/content/ru/guides/trailer.mdx";
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
    "restory-chill-electronics-repairs-cleaning-guide": RussianCleaningGuide,
    "restory-chill-electronics-repairs-endings": RussianEndingsGuide,
    "restory-chill-electronics-repairs-parts-catalog": RussianPartsCatalogGuide,
    "restory-chill-electronics-repairs-internet-plan": RussianInternetPlanGuide,
    "restory-chill-electronics-repairs-atari": RussianAtariGuide,
    "restory-chill-electronics-repairs-release-date": RussianReleaseDateGuide,
    "restory-chill-electronics-repairs-platforms": RussianPlatformsGuide,
    "restory-chill-electronics-repairs-demo": RussianDemoGuide,
    "restory-chill-electronics-repairs-price": RussianPriceGuide,
    "restory-chill-electronics-repairs-system-requirements": RussianSystemRequirementsGuide,
    "restory-chill-electronics-repairs-controller-support": RussianControllerSupportGuide,
    "restory-chill-electronics-repairs-language-support": RussianLanguageSupportGuide,
    "restory-chill-electronics-repairs-achievements": RussianAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": RussianResolutionSettingsGuide,
    "restory-chill-electronics-repairs-gameplay": RussianGameplayGuide,
    "restory-chill-electronics-repairs-trailer": RussianTrailerGuide,
    "restory-chill-electronics-repairs-review": RussianReviewGuide,
    "restory-chill-electronics-repairs-mods": RussianModsGuide,
    "restory-chill-electronics-repairs-games-like": RussianGamesLikeGuide,
  },
  de: {
    "restory-chill-electronics-repairs-walkthrough": GermanBeginnerGuide,
    "restory-chill-electronics-repairs-cleaning-guide": GermanCleaningGuide,
    "restory-chill-electronics-repairs-endings": GermanEndingsGuide,
    "restory-chill-electronics-repairs-parts-catalog": GermanPartsCatalogGuide,
    "restory-chill-electronics-repairs-internet-plan": GermanInternetPlanGuide,
    "restory-chill-electronics-repairs-atari": GermanAtariGuide,
    "restory-chill-electronics-repairs-release-date": GermanReleaseDateGuide,
    "restory-chill-electronics-repairs-platforms": GermanPlatformsGuide,
    "restory-chill-electronics-repairs-demo": GermanDemoGuide,
    "restory-chill-electronics-repairs-price": GermanPriceGuide,
    "restory-chill-electronics-repairs-system-requirements": GermanSystemRequirementsGuide,
    "restory-chill-electronics-repairs-controller-support": GermanControllerSupportGuide,
    "restory-chill-electronics-repairs-language-support": GermanLanguageSupportGuide,
    "restory-chill-electronics-repairs-achievements": GermanAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": GermanResolutionSettingsGuide,
    "restory-chill-electronics-repairs-gameplay": GermanGameplayGuide,
    "restory-chill-electronics-repairs-trailer": GermanTrailerGuide,
    "restory-chill-electronics-repairs-review": GermanReviewGuide,
    "restory-chill-electronics-repairs-mods": GermanModsGuide,
    "restory-chill-electronics-repairs-games-like": GermanGamesLikeGuide,
  },
  ja: {
    "restory-chill-electronics-repairs-walkthrough": JapaneseBeginnerGuide,
    "restory-chill-electronics-repairs-cleaning-guide": JapaneseCleaningGuide,
    "restory-chill-electronics-repairs-endings": JapaneseEndingsGuide,
    "restory-chill-electronics-repairs-parts-catalog": JapanesePartsCatalogGuide,
    "restory-chill-electronics-repairs-internet-plan": JapaneseInternetPlanGuide,
    "restory-chill-electronics-repairs-atari": JapaneseAtariGuide,
    "restory-chill-electronics-repairs-release-date": JapaneseReleaseDateGuide,
    "restory-chill-electronics-repairs-platforms": JapanesePlatformsGuide,
    "restory-chill-electronics-repairs-demo": JapaneseDemoGuide,
    "restory-chill-electronics-repairs-price": JapanesePriceGuide,
    "restory-chill-electronics-repairs-system-requirements": JapaneseSystemRequirementsGuide,
    "restory-chill-electronics-repairs-controller-support": JapaneseControllerSupportGuide,
    "restory-chill-electronics-repairs-language-support": JapaneseLanguageSupportGuide,
    "restory-chill-electronics-repairs-achievements": JapaneseAchievementsGuide,
    "restory-chill-electronics-repairs-resolution-settings": JapaneseResolutionSettingsGuide,
    "restory-chill-electronics-repairs-gameplay": JapaneseGameplayGuide,
    "restory-chill-electronics-repairs-trailer": JapaneseTrailerGuide,
    "restory-chill-electronics-repairs-review": JapaneseReviewGuide,
    "restory-chill-electronics-repairs-mods": JapaneseModsGuide,
    "restory-chill-electronics-repairs-games-like": JapaneseGamesLikeGuide,
  },
};

export function getGuideComponent(locale: Locale, slug: string): MdxArticle | undefined {
  return articles[locale][slug];
}
