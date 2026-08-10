import type { Locale } from "./site-data";

export type GameMediaKey = "shop" | "workbench" | "device" | "customization";

type MediaText = {
  alt: string;
  caption: string;
  sourceLabel: string;
};

type MediaAsset = {
  src: string;
  width: number;
  height: number;
  sourceHref: string;
};

export type GameMedia = MediaAsset & MediaText;

const steamStoreUrl = "https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/";

const mediaAssets: Record<GameMediaKey, MediaAsset> = {
  shop: {
    src: "/media/restory/repair-shop.jpg",
    width: 1920,
    height: 1080,
    sourceHref: steamStoreUrl,
  },
  workbench: {
    src: "/media/restory/workbench-customization.jpg",
    width: 1920,
    height: 1080,
    sourceHref: steamStoreUrl,
  },
  device: {
    src: "/media/restory/device-disassembly.jpg",
    width: 1920,
    height: 1080,
    sourceHref: steamStoreUrl,
  },
  customization: {
    src: "/media/restory/device-customization.jpg",
    width: 1920,
    height: 1080,
    sourceHref: steamStoreUrl,
  },
};

const mediaText: Record<Locale, Record<GameMediaKey, MediaText>> = {
  en: {
    shop: {
      alt: "ReStory repair shop interior with shelves, electronics, a workbench, and a Tokyo street view",
      caption: "The repair shop interior and its Y2K-era Tokyo atmosphere.",
      sourceLabel: "Official Steam screenshot",
    },
    workbench: {
      alt: "ReStory workbench with a compact device, paint tools, and a repair checklist",
      caption: "A workbench view with a device, paint tools, and an active order.",
      sourceLabel: "Official Steam screenshot",
    },
    device: {
      alt: "ReStory device opened on the repair workbench with internal parts visible",
      caption: "An opened device showing the repair and disassembly view.",
      sourceLabel: "Official Steam screenshot",
    },
    customization: {
      alt: "ReStory handheld device decorated with colorful stickers on the repair bench",
      caption: "Device customization with stickers on the repair bench.",
      sourceLabel: "Official Steam screenshot",
    },
  },
  ru: {
    shop: {
      alt: "Интерьер ремонтной мастерской ReStory со стеллажами, электроникой, верстаком и видом на улицу Токио",
      caption: "Интерьер мастерской и атмосфера Токио эпохи Y2K.",
      sourceLabel: "Официальный скриншот Steam",
    },
    workbench: {
      alt: "Верстак ReStory с небольшим устройством, инструментами для покраски и списком заказа",
      caption: "Верстак с устройством, инструментами для покраски и активным заказом.",
      sourceLabel: "Официальный скриншот Steam",
    },
    device: {
      alt: "Открытое устройство ReStory на верстаке с видимыми внутренними деталями",
      caption: "Открытое устройство в режиме разборки и ремонта.",
      sourceLabel: "Официальный скриншот Steam",
    },
    customization: {
      alt: "Портативное устройство ReStory с яркими наклейками на ремонтном верстаке",
      caption: "Кастомизация устройства с наклейками на ремонтном верстаке.",
      sourceLabel: "Официальный скриншот Steam",
    },
  },
  de: {
    shop: {
      alt: "Innenraum der ReStory-Reparaturwerkstatt mit Regalen, Elektronik, Werkbank und Blick auf eine Straße in Tokio",
      caption: "Der Werkstattinnenraum und die Y2K-Atmosphäre des Tokioter Viertels.",
      sourceLabel: "Offizieller Steam-Screenshot",
    },
    workbench: {
      alt: "ReStory-Werkbank mit einem kleinen Gerät, Lackierwerkzeugen und einer Auftragsliste",
      caption: "Eine Werkbank mit Gerät, Lackierwerkzeugen und aktivem Auftrag.",
      sourceLabel: "Offizieller Steam-Screenshot",
    },
    device: {
      alt: "Geöffnetes ReStory-Gerät auf der Werkbank mit sichtbaren inneren Bauteilen",
      caption: "Ein geöffnetes Gerät in der Reparatur- und Zerlegeansicht.",
      sourceLabel: "Offizieller Steam-Screenshot",
    },
    customization: {
      alt: "Mit bunten Stickern verziertes ReStory-Handgerät auf der Reparaturwerkbank",
      caption: "Geräteanpassung mit Stickern auf der Reparaturwerkbank.",
      sourceLabel: "Offizieller Steam-Screenshot",
    },
  },
  ja: {
    shop: {
      alt: "棚や電子機器、作業台、東京の街並みが見えるリ・ストーリーの修理店内",
      caption: "修理店の内観とY2K時代の東京の雰囲気。",
      sourceLabel: "Steam公式スクリーンショット",
    },
    workbench: {
      alt: "小型デバイス、塗装ツール、作業中の依頼リストがあるリ・ストーリーの作業台",
      caption: "デバイス、塗装ツール、作業中の依頼がある作業台。",
      sourceLabel: "Steam公式スクリーンショット",
    },
    device: {
      alt: "内部パーツが見える状態で修理台に開かれたリ・ストーリーのデバイス",
      caption: "分解と修理の画面で開かれたデバイス。",
      sourceLabel: "Steam公式スクリーンショット",
    },
    customization: {
      alt: "修理台の上でカラフルなステッカーを貼ったリ・ストーリーの携帯デバイス",
      caption: "修理台で行うデバイスのステッカーカスタマイズ。",
      sourceLabel: "Steam公式スクリーンショット",
    },
  },
};

export const mediaSectionCopy: Record<Locale, { kicker: string; title: string; description: string }> = {
  en: {
    kicker: "In-game visuals",
    title: "Inside the repair shop",
    description: "Official Steam screenshots show the workbench, device restoration, customization, and the small shop you manage.",
  },
  ru: {
    kicker: "Скриншоты из игры",
    title: "Внутри ремонтной мастерской",
    description: "Официальные скриншоты Steam показывают верстак, восстановление устройств, кастомизацию и небольшую мастерскую.",
  },
  de: {
    kicker: "Bilder aus dem Spiel",
    title: "In der Reparaturwerkstatt",
    description: "Offizielle Steam-Screenshots zeigen Werkbank, Gerätereparatur, Anpassung und die kleine Werkstatt.",
  },
  ja: {
    kicker: "ゲーム内スクリーンショット",
    title: "修理店の中を見てみる",
    description: "Steam公式スクリーンショットで、作業台、デバイス修理、カスタマイズ、店内の様子を紹介します。",
  },
};

const articleMedia: Record<string, GameMediaKey> = {
  "restory-chill-electronics-repairs-walkthrough": "shop",
  "restory-chill-electronics-repairs-cleaning-guide": "device",
  "restory-chill-electronics-repairs-endings": "shop",
  "restory-chill-electronics-repairs-achievements": "customization",
  "restory-chill-electronics-repairs-parts-catalog": "device",
  "restory-chill-electronics-repairs-internet-plan": "workbench",
  "restory-chill-electronics-repairs-atari": "device",
  "restory-chill-electronics-repairs-release-date": "shop",
  "restory-chill-electronics-repairs-platforms": "shop",
  "restory-chill-electronics-repairs-demo": "customization",
  "restory-chill-electronics-repairs-price": "shop",
  "restory-chill-electronics-repairs-system-requirements": "workbench",
  "restory-chill-electronics-repairs-controller-support": "workbench",
  "restory-chill-electronics-repairs-language-support": "customization",
  "restory-chill-electronics-repairs-resolution-settings": "workbench",
  "restory-chill-electronics-repairs-gameplay": "shop",
  "restory-chill-electronics-repairs-trailer": "shop",
  "restory-chill-electronics-repairs-review": "shop",
  "restory-chill-electronics-repairs-mods": "device",
  "restory-chill-electronics-repairs-games-like": "shop",
};

export function getGameMedia(locale: Locale, key: GameMediaKey): GameMedia {
  return { ...mediaAssets[key], ...mediaText[locale][key] };
}

export function getArticleMediaKey(slug: string): GameMediaKey {
  return articleMedia[slug] ?? "shop";
}
