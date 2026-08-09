export const locales = ["en", "ru", "de", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteConfig = {
  siteUrl: "https://www.restorytips.com",
  gameName: "ReStory: Chill Electronics Repairs",
  shortName: "ReStory",
  locales,
  defaultLocale,
  official: {
    website: "https://www.tinybuild.com/games/restory",
    steam: "https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/",
    discord: "https://discord.gg/restory",
    youtube: "https://www.youtube.com/@tinyBuildGAMES",
    gameplayTrailer: "https://youtu.be/JrusjsK51Gw",
  },
  theme: {
    light: {
      navTheme: "166 57% 37%",
      navThemeLight: "166 54% 50%",
    },
    dark: {
      navTheme: "166 72% 54%",
      navThemeLight: "166 66% 65%",
    },
  },
  sidebarCodes: ["暂无"],
  homepage: {
    meta: {
      title: "ReStory: Chill Electronics Repairs Wiki — Guides, Repairs",
      description:
        "ReStory: Chill Electronics Repairs wiki with repair walkthroughs, cleaning guides, device parts, story choices, achievements, settings, and launch issues.",
      keywords:
        "ReStory, Chill Electronics Repairs, repair guide, walkthrough, cleaning, achievements",
    },
    hero: {
      eyebrow: "Independent Fan-Made Community Wiki",
      title: "ReStory: Chill Electronics Repairs",
      description:
        "Run a cozy electronics repair shop in mid-2000s Tokyo. Restore nostalgic consoles, phones, cameras, and music players while customer choices shape the shop and its stories.",
      stats: [
        "Launched Aug 6, 2026",
        "Current Steam Price $17.99",
        "15+ Hour Story",
        "50 Steam Achievements",
        "97% Positive Reviews",
      ],
      primaryCta: "Start Beginner Guide",
      secondaryCta: "Browse Repair Guides",
      tertiaryCta: "Check Known Issues",
      videoLabel: "Official Gameplay Trailer",
    },
    start: {
      eyebrow: "Start Here",
      title: "Your ReStory: Chill Electronics Repairs Journey",
      cards: [
        {
          number: "1",
          title: "Beginner Guide",
          description:
            "Learn the first repair-shop shift, open the shop, use the workbench, and understand the core loop.",
          href: "/guides/restory-chill-electronics-repairs-walkthrough",
        },
        {
          number: "2",
          title: "Cleaning & Repair Workflow",
          description:
            "Follow the confirmed sequence of disassembly, cleaning, part replacement, and reassembly.",
          href: "/guides/restory-chill-electronics-repairs-cleaning-guide",
        },
        {
          number: "3",
          title: "Devices, Parts & Shop Tools",
          description:
            "Find the Y2K-era browser, spare-part research, tools, and nostalgic devices covered by the game.",
          href: "/guides/restory-chill-electronics-repairs-parts-catalog",
        },
        {
          number: "4",
          title: "Choices, Endings & Achievements",
          description:
            "Track customer decisions, the branching story, multiple endings, and Steam Achievements.",
          href: "/guides/restory-chill-electronics-repairs-achievements",
        },
      ],
    },
    aboutGame: {
      title: "What is ReStory: Chill Electronics Repairs?",
      paragraphs: [
        "ReStory: Chill Electronics Repairs is a cozy, narrative-driven shop management simulation developed by Mandragora and published by tinyBuild. Set in mid-2000s Tokyo, it puts you behind the counter of a small electronics repair shop.",
        "Take devices apart, clean them, replace faulty parts, and rebuild them while managing money and searching a Y2K-era web browser for supplies. Conversations and decisions create a branching story with multiple endings.",
      ],
      stats: [
        { label: "Developer", value: "Mandragora" },
        { label: "Publisher", value: "tinyBuild" },
        { label: "Platform", value: "Steam on Windows and macOS; Steam Deck Playable" },
        { label: "Genre", value: "Cozy narrative shop management simulation" },
        { label: "Story Length", value: "15+ hours for the main story" },
        { label: "Achievements", value: "50 Steam Achievements" },
        { label: "Supported Languages", value: "9 interface and subtitle languages" },
      ],
      cta: "Explore All Guides",
    },
    codes: {
      title: "Active Codes",
      description: "No confirmed ReStory redemption codes were found in the research.",
      value: "暂无",
    },
    finalCta: {
      title: "Ready to Master ReStory: Chill Electronics Repairs?",
      description:
        "From your first device on the workbench to the last customer story in Akiba, use the wiki to repair smarter, find parts, unlock achievements, and handle launch-build issues.",
      primary: "Read the Beginner Guide",
      secondary: "Play on Steam",
    },
  },
  legal: {
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
  },
} as const;

export type LocalizedHomeMeta = {
  title: string;
  description: string;
  keywords: string;
};

const localizedHomeMeta: Record<Locale, LocalizedHomeMeta> = {
  en: siteConfig.homepage.meta,
  ru: {
    title: "ReStory: Chill Electronics Repairs Wiki — Гайды",
    description:
      "Фанатская Wiki ReStory: Chill Electronics Repairs с пошаговыми ремонтами, устройствами, выборами сюжета, достижениями, настройками и известными проблемами.",
    keywords: "ReStory, гайд по ремонту, устройства, достижения, Steam",
  },
  de: {
    title: "ReStory: Chill Electronics Repairs Wiki — Guides",
    description:
      "Fan-Wiki zu ReStory: Chill Electronics Repairs mit Reparatur-Guides, Geräten, Story-Entscheidungen, Steam-Erfolgen, Einstellungen und bekannten Problemen.",
    keywords: "ReStory, Reparatur-Guide, Geräte, Erfolge, Steam",
  },
  ja: {
    title: "リ・ストーリー: 思い出修理屋 Wiki — 攻略",
    description:
      "リ・ストーリー: 思い出修理屋のファンWiki。2000年代半ばの東京を舞台にした電子機器修理店の進め方を、初心者向け攻略、分解・清掃・部品交換、機器、ゲーム内ブラウザ、注文、物語の分岐と複数エンディング、Steam実績、設定、既知の問題、発売情報まで確認できます。確認済みの情報を整理しています。",
    keywords: "リ・ストーリー, 攻略, 修理, 実績, Steam",
  },
};

export type GuideMeta = {
  slug: string;
  category: string;
  eyebrow: string;
  title: string;
  keyword: string;
  seoTitle: string;
  metaDescription: string;
  description: string;
  readTime: string;
  tags: string[];
};

export const guideMeta: GuideMeta[] = [
  {
    slug: "restory-chill-electronics-repairs-walkthrough",
    category: "Guide",
    eyebrow: "First shift",
    title: "ReStory: Chill Electronics Repairs Walkthrough",
    keyword: "restory: chill electronics repairs walkthrough",
    seoTitle: "ReStory: Chill Electronics Repairs Walkthrough",
    metaDescription:
      "ReStory: Chill Electronics Repairs walkthrough covers the first repair day, the full repair loop, shop orders, web spare parts, choices, and pending details.",
    description: "Start the shop, follow the confirmed repair loop, and separate verified progression from details still awaiting in-game confirmation.",
    readTime: "7 min read",
    tags: ["Walkthrough", "Shop", "Story"],
  },
  {
    slug: "restory-chill-electronics-repairs-cleaning-guide",
    category: "Guide",
    eyebrow: "Workbench",
    title: "ReStory: Chill Electronics Repairs Cleaning Guide",
    keyword: "restory: chill electronics repairs cleaning guide",
    seoTitle: "ReStory: Chill Electronics Repairs Cleaning Guide",
    metaDescription:
      "ReStory: Chill Electronics Repairs cleaning guide explains the confirmed cleaning loop, ultrasonic bath achievements, reported issues, and pending details.",
    description: "Use the confirmed cleaning sequence, review cleaning achievements, and isolate community workarounds that still need rechecking.",
    readTime: "6 min read",
    tags: ["Cleaning", "Repair", "Achievements"],
  },
  {
    slug: "restory-chill-electronics-repairs-endings",
    category: "Guide",
    eyebrow: "Branching story",
    title: "ReStory: Chill Electronics Repairs Endings",
    keyword: "restory: chill electronics repairs endings",
    seoTitle: "ReStory: Chill Electronics Repairs Endings",
    metaDescription:
      "ReStory: Chill Electronics Repairs endings guide confirms branching stories and multiple endings, explains choice tracking, and marks route details 待确认.",
    description: "Track the confirmed branching story without turning unverified ending names or route conditions into facts.",
    readTime: "6 min read",
    tags: ["Endings", "Choices", "Story"],
  },
  {
    slug: "restory-chill-electronics-repairs-achievements",
    category: "Guide",
    eyebrow: "Steam progress",
    title: "ReStory: Chill Electronics Repairs Achievements",
    keyword: "restory: chill electronics repairs achievements",
    seoTitle: "ReStory: Chill Electronics Repairs Achievements",
    metaDescription:
      "ReStory: Chill Electronics Repairs achievements guide lists 50 Steam Achievements, public conditions, cleaning, orders, market, tools, and bug notes.",
    description: "Browse the 50 Steam Achievements by repair, business, cleaning, orders, tools, customization, time, competitions, and story.",
    readTime: "9 min read",
    tags: ["Achievements", "Steam", "Checklist"],
  },
  {
    slug: "restory-chill-electronics-repairs-parts-catalog",
    category: "Guide",
    eyebrow: "Shop reference",
    title: "ReStory: Chill Electronics Repairs Parts Catalog",
    keyword: "restory: chill electronics repairs parts catalog",
    seoTitle: "ReStory: Chill Electronics Repairs Parts Catalog",
    metaDescription:
      "ReStory: Chill Electronics Repairs parts catalog separates devices from spare parts, covers browser sourcing, named hardware, and pending fields.",
    description: "Separate the confirmed device families and named hardware from the complete part names, prices, and inventory still awaiting verification.",
    readTime: "7 min read",
    tags: ["Parts", "Devices", "Catalog"],
  },
  {
    slug: "restory-chill-electronics-repairs-internet-plan",
    category: "Guide",
    eyebrow: "Y2K browser",
    title: "ReStory: Chill Electronics Repairs Internet Plan",
    keyword: "restory: chill electronics repairs internet plan",
    seoTitle: "ReStory: Chill Electronics Repairs Internet Plan",
    metaDescription:
      "ReStory: Chill Electronics Repairs internet plan guide covers the in-game browser, email orders, spare parts, speed questions, and unverified effects.",
    description: "Interpret Internet Plan as the in-game browser and online-order system, not a real-world broadband product.",
    readTime: "6 min read",
    tags: ["Internet", "Orders", "Parts"],
  },
  {
    slug: "restory-chill-electronics-repairs-atari",
    category: "Guide",
    eyebrow: "Licensed hardware",
    title: "ReStory: Chill Electronics Repairs Atari",
    keyword: "restory: chill electronics repairs atari",
    seoTitle: "ReStory: Chill Electronics Repairs Atari",
    metaDescription:
      "ReStory: Chill Electronics Repairs Atari guide covers the licensed Atari link, 2600/2800, CX40 parts, official teardown notes, and Lynx status.",
    description: "Review the officially described Atari devices and in-game teardown notes without turning them into real-world electronics instructions.",
    readTime: "5 min read",
    tags: ["Atari", "Devices", "Repair"],
  },
  {
    slug: "restory-chill-electronics-repairs-release-date",
    category: "Release Date",
    eyebrow: "Launch timeline",
    title: "ReStory: Chill Electronics Repairs Release Date",
    keyword: "restory: chill electronics repairs release date",
    seoTitle: "ReStory: Chill Electronics Repairs Release Date",
    metaDescription:
      "ReStory: Chill Electronics Repairs release date guide confirms the August 6, 2026 full release and separates Demo, Playtest, and launch timing.",
    description: "The official full release date is August 6, 2026; this timeline separates the Demo, Playtest, and full launch.",
    readTime: "4 min read",
    tags: ["Release Date", "Steam", "Timeline"],
  },
  {
    slug: "restory-chill-electronics-repairs-platforms",
    category: "Platform Availability",
    eyebrow: "Where to play",
    title: "ReStory: Chill Electronics Repairs Platforms",
    keyword: "restory: chill electronics repairs platforms",
    seoTitle: "ReStory: Chill Electronics Repairs Platforms",
    metaDescription:
      "ReStory: Chill Electronics Repairs platforms guide compares Windows, macOS, Steam Deck Playable status, and consoles not announced officially.",
    description: "Compare the confirmed Windows and macOS Steam release with Steam Deck's Playable label and unannounced console availability.",
    readTime: "5 min read",
    tags: ["Platforms", "Steam Deck", "macOS"],
  },
  {
    slug: "restory-chill-electronics-repairs-demo",
    category: "Demo Version",
    eyebrow: "Try it first",
    title: "ReStory: Chill Electronics Repairs Demo Guide",
    keyword: "restory: chill electronics repairs demo",
    seoTitle: "ReStory: Chill Electronics Repairs Demo Guide",
    metaDescription:
      "ReStory: Chill Electronics Repairs demo guide explains the free June 15, 2026 Demo, repair features, language differences, and pending details.",
    description: "The standalone Steam Demo is free and shows repair, customers, customization, online requests, and tips before the full release.",
    readTime: "5 min read",
    tags: ["Demo", "Steam", "Features"],
  },
  {
    slug: "restory-chill-electronics-repairs-price",
    category: "Game Price",
    eyebrow: "Steam cost",
    title: "ReStory: Chill Electronics Repairs Price",
    keyword: "restory: chill electronics repairs price",
    seoTitle: "ReStory: Chill Electronics Repairs Price",
    metaDescription:
      "ReStory: Chill Electronics Repairs price guide explains the $19.99 base price, $17.99 launch offer, regional references, bundles, and updates.",
    description: "At the research snapshot, Steam listed a $19.99 base price and a time-limited $17.99 launch offer; prices can change.",
    readTime: "4 min read",
    tags: ["Price", "Steam", "Bundles"],
  },
  {
    slug: "restory-chill-electronics-repairs-system-requirements",
    category: "System Requirements",
    eyebrow: "Can it run?",
    title: "ReStory: Chill Electronics Repairs System Requirements",
    keyword: "restory: chill electronics repairs system requirements",
    seoTitle: "ReStory: Chill Electronics Repairs System Requirements",
    metaDescription:
      "ReStory: Chill Electronics Repairs system requirements lists Windows and macOS minimum specs, Demo overlap, unlisted recommended specs, and pending tests.",
    description: "Check the confirmed Windows and macOS minimum requirements; recommended settings and performance tests remain unconfirmed.",
    readTime: "6 min read",
    tags: ["Requirements", "Windows", "macOS"],
  },
  {
    slug: "restory-chill-electronics-repairs-controller-support",
    category: "Controller and Language Support",
    eyebrow: "Input check",
    title: "ReStory: Chill Electronics Repairs Controller Support",
    keyword: "restory: chill electronics repairs controller support",
    seoTitle: "ReStory: Chill Electronics Repairs Controller Support",
    metaDescription:
      "ReStory: Chill Electronics Repairs controller support guide separates Steam Deck Playable from confirmed controller support and pending input tests.",
    description: "The official store does not publish a full controller statement or button map; Steam Deck Playable is not proof of native optimization.",
    readTime: "5 min read",
    tags: ["Controller", "Steam Deck", "Input"],
  },
  {
    slug: "restory-chill-electronics-repairs-language-support",
    category: "Controller and Language Support",
    eyebrow: "Localization",
    title: "ReStory: Chill Electronics Repairs Language Support",
    keyword: "restory: chill electronics repairs language support",
    seoTitle: "ReStory: Chill Electronics Repairs Language Support",
    metaDescription:
      "ReStory: Chill Electronics Repairs language support guide lists 9 interface and subtitle languages, compares the 8-language Demo, and notes audio limits.",
    description: "The full release lists nine interface and subtitle languages; the Demo lists eight and does not include Korean.",
    readTime: "5 min read",
    tags: ["Languages", "Subtitles", "Demo"],
  },
  {
    slug: "restory-chill-electronics-repairs-resolution-settings",
    category: "Technical Settings",
    eyebrow: "Performance",
    title: "ReStory: Chill Electronics Repairs Resolution Settings",
    keyword: "restory: chill electronics repairs resolution settings",
    seoTitle: "ReStory: Chill Electronics Repairs Resolution Settings",
    metaDescription:
      "ReStory: Chill Electronics Repairs resolution settings guide covers VSync, 30/60 target framerate, window modes, ultrawide issues, and pending checks.",
    description: "Use the confirmed VSync and target-framerate notes while treating resolution lists, window modes, and configuration paths as pending.",
    readTime: "6 min read",
    tags: ["Resolution", "VSync", "Ultrawide"],
  },
  {
    slug: "restory-chill-electronics-repairs-gameplay",
    category: "Official Videos",
    eyebrow: "Core loop",
    title: "ReStory: Chill Electronics Repairs Gameplay",
    keyword: "restory: chill electronics repairs gameplay",
    seoTitle: "ReStory: Chill Electronics Repairs Gameplay",
    metaDescription:
      "ReStory: Chill Electronics Repairs gameplay guide explains the cozy repair loop, devices, shop management, Y2K web, customer stories, and upgrades.",
    description: "Learn what the repair shop loop includes, from customers and parts to cleaning, assembly, shop management, and branching stories.",
    readTime: "7 min read",
    tags: ["Gameplay", "Shop", "Story"],
  },
  {
    slug: "restory-chill-electronics-repairs-trailer",
    category: "Official Videos",
    eyebrow: "Official media",
    title: "ReStory: Chill Electronics Repairs Trailer",
    keyword: "restory: chill electronics repairs trailer",
    seoTitle: "ReStory: Chill Electronics Repairs Trailer",
    metaDescription:
      "ReStory: Chill Electronics Repairs trailer guide links the official Gameplay and Launch Trailers, summarizes each, and keeps sources official.",
    description: "Watch the official Gameplay and Launch Trailers for a source-backed view of repairs, devices, customers, customization, and launch.",
    readTime: "4 min read",
    tags: ["Trailer", "YouTube", "Official"],
  },
  {
    slug: "restory-chill-electronics-repairs-review",
    category: "Game Review",
    eyebrow: "Research snapshot",
    title: "ReStory: Chill Electronics Repairs Review",
    keyword: "restory: chill electronics repairs review",
    seoTitle: "ReStory: Chill Electronics Repairs Review",
    metaDescription:
      "ReStory: Chill Electronics Repairs review summarizes current Steam sentiment, launch media scores, strengths, concerns, playtime, and dynamic data.",
    description: "Weigh the research snapshot, repair-and-story strengths, and reported issues without treating dynamic ratings or single posts as permanent.",
    readTime: "7 min read",
    tags: ["Review", "Steam", "Verdict"],
  },
  {
    slug: "restory-chill-electronics-repairs-mods",
    category: "Mod Support",
    eyebrow: "Support status",
    title: "ReStory: Chill Electronics Repairs Mods Guide",
    keyword: "restory: chill electronics repairs mods",
    seoTitle: "ReStory: Chill Electronics Repairs Mods Guide",
    metaDescription:
      "ReStory: Chill Electronics Repairs mods guide reports no verified official Workshop or Mod support, separates settings from mods, and flags status.",
    description: "No verified official Workshop or Mod support is documented in the supplied sources; community categories are not an API promise.",
    readTime: "4 min read",
    tags: ["Mods", "Workshop", "Support"],
  },
  {
    slug: "restory-chill-electronics-repairs-games-like",
    category: "Similar Games",
    eyebrow: "Compare the loop",
    title: "ReStory: Chill Electronics Repairs Games Like",
    keyword: "restory: chill electronics repairs games like",
    seoTitle: "ReStory: Chill Electronics Repairs Games Like",
    metaDescription:
      "ReStory: Chill Electronics Repairs games like guide compares repair, cleaning, shop management, story, atmosphere, and controls without rankings.",
    description: "Compare repair objects, cleaning, management, narrative, atmosphere, and controls instead of copying an algorithmic ranking.",
    readTime: "6 min read",
    tags: ["Similar Games", "Comparison", "Cozy"],
  },
];

type NavLabels = {
  home: string;
  guides: string;
  devices: string;
  achievements: string;
  updates: string;
  beginner: string;
  menu: string;
};

type LocaleCopy = {
  gameName: string;
  languageName: string;
  nav: NavLabels;
  labels: {
    communityWiki: string;
    quickLookup: string;
    startHere: string;
    aboutGame: string;
    gameAtAGlance: string;
    officialMedia: string;
    codes: string;
    official: string;
    relatedPages: string;
    latest: string;
    readMore: string;
    playOnSteam: string;
    viewAll: string;
    source: string;
    lastUpdated: string;
    theme: string;
    light: string;
    dark: string;
    privacy: string;
    terms: string;
    shortAnswer: string;
    editorialReview: string;
    researchStatus: string;
  };
  home: {
    quickTitle: string;
    quickDescription: string;
    aboutTitle: string;
    finalTitle: string;
    finalDescription: string;
    codeDescription: string;
  };
};

const localeCopy: Record<Locale, LocaleCopy> = {
  en: {
    gameName: siteConfig.gameName,
    languageName: "English",
    nav: {
      home: "Home",
      guides: "Guides",
      devices: "Devices",
      achievements: "Achievements",
      updates: "Known Issues",
      beginner: "Beginner Guide",
      menu: "Menu",
    },
    labels: {
      communityWiki: "Independent Fan-Made Community Wiki",
      quickLookup: "Quick lookup",
      startHere: "Start Here",
      aboutGame: "About the game",
      gameAtAGlance: "Game at a glance",
      officialMedia: "Official media",
      codes: "Active Codes",
      official: "Official",
      relatedPages: "Related pages",
      latest: "Latest notes",
      readMore: "Read guide",
      playOnSteam: "Play on Steam",
      viewAll: "View all",
      source: "Official source",
      lastUpdated: "Research snapshot",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      shortAnswer: "Short answer",
      editorialReview: "Editorial review",
      researchStatus: "Research-based fan wiki",
    },
    home: {
      quickTitle: "Find the repair answer fast",
      quickDescription: "Repair steps, device notes, story choices, and launch-build checks in one place.",
      aboutTitle: siteConfig.homepage.aboutGame.title,
      finalTitle: siteConfig.homepage.finalCta.title,
      finalDescription: siteConfig.homepage.finalCta.description,
      codeDescription: siteConfig.homepage.codes.description,
    },
  },
  ru: {
    gameName: siteConfig.gameName,
    languageName: "Русский",
    nav: {
      home: "Главная",
      guides: "Руководства",
      devices: "Устройства",
      achievements: "Достижения",
      updates: "Проблемы",
      beginner: "Гайд для новичков",
      menu: "Меню",
    },
    labels: {
      communityWiki: "Независимая фанатская Wiki",
      quickLookup: "Быстрый поиск",
      startHere: "Начать здесь",
      aboutGame: "Об игре",
      gameAtAGlance: "Игра в цифрах",
      officialMedia: "Официальные материалы",
      codes: "Активные коды",
      official: "Официальное",
      relatedPages: "Связанные страницы",
      latest: "Последние заметки",
      readMore: "Открыть гайд",
      playOnSteam: "Играть в Steam",
      viewAll: "Смотреть все",
      source: "Официальный источник",
      lastUpdated: "Снимок исследования",
      theme: "Тема",
      light: "Светлая",
      dark: "Тёмная",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      shortAnswer: "Краткий ответ",
      editorialReview: "Редакционная проверка",
      researchStatus: "Фанатская Wiki на основе исследований",
    },
    home: {
      quickTitle: "Быстро найдите ответ по ремонту",
      quickDescription: "Ремонт, устройства, выборы сюжета и проблемы запуска в одном месте.",
      aboutTitle: "Что такое ReStory: Chill Electronics Repairs?",
      finalTitle: "Готовы освоить ReStory: Chill Electronics Repairs?",
      finalDescription: "От первого устройства на верстаке до последней истории клиента — используйте Wiki для ремонта, деталей и достижений.",
      codeDescription: "В исследовании не найдено подтверждённых кодов ReStory.",
    },
  },
  de: {
    gameName: siteConfig.gameName,
    languageName: "Deutsch",
    nav: {
      home: "Startseite",
      guides: "Guides",
      devices: "Geräte",
      achievements: "Erfolge",
      updates: "Bekannte Probleme",
      beginner: "Einsteiger-Guide",
      menu: "Menü",
    },
    labels: {
      communityWiki: "Unabhängige Fan-Wiki",
      quickLookup: "Schnellsuche",
      startHere: "Hier starten",
      aboutGame: "Über das Spiel",
      gameAtAGlance: "Das Spiel auf einen Blick",
      officialMedia: "Offizielle Medien",
      codes: "Aktive Codes",
      official: "Offiziell",
      relatedPages: "Verwandte Seiten",
      latest: "Neueste Hinweise",
      readMore: "Guide öffnen",
      playOnSteam: "Auf Steam spielen",
      viewAll: "Alle ansehen",
      source: "Offizielle Quelle",
      lastUpdated: "Recherche-Stand",
      theme: "Darstellung",
      light: "Hell",
      dark: "Dunkel",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      shortAnswer: "Kurzantwort",
      editorialReview: "Redaktionelle Prüfung",
      researchStatus: "Fan-Wiki auf Recherchebasis",
    },
    home: {
      quickTitle: "Die passende Reparatur schnell finden",
      quickDescription: "Reparaturschritte, Geräte, Story-Entscheidungen und bekannte Startprobleme an einem Ort.",
      aboutTitle: "Was ist ReStory: Chill Electronics Repairs?",
      finalTitle: "Bereit, ReStory: Chill Electronics Repairs zu meistern?",
      finalDescription: "Vom ersten Gerät auf der Werkbank bis zur letzten Kundengeschichte — die Wiki hilft bei Reparaturen, Teilen und Erfolgen.",
      codeDescription: "In der Recherche wurden keine bestätigten ReStory-Codes gefunden.",
    },
  },
  ja: {
    gameName: "リ・ストーリー: 思い出修理屋",
    languageName: "日本語",
    nav: {
      home: "ホーム",
      guides: "攻略",
      devices: "デバイス",
      achievements: "実績",
      updates: "既知の問題",
      beginner: "初心者ガイド",
      menu: "メニュー",
    },
    labels: {
      communityWiki: "独立ファンメイド・コミュニティ Wiki",
      quickLookup: "クイック検索",
      startHere: "ここから開始",
      aboutGame: "ゲームについて",
      gameAtAGlance: "ゲーム概要",
      officialMedia: "公式メディア",
      codes: "有効なコード",
      official: "公式",
      relatedPages: "関連ページ",
      latest: "最新メモ",
      readMore: "攻略を見る",
      playOnSteam: "Steamでプレイ",
      viewAll: "すべて見る",
      source: "公式ソース",
      lastUpdated: "調査時点",
      theme: "テーマ",
      light: "ライト",
      dark: "ダーク",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      shortAnswer: "短い答え",
      editorialReview: "編集確認",
      researchStatus: "調査に基づくファンWiki",
    },
    home: {
      quickTitle: "修理の答えをすぐに見つける",
      quickDescription: "修理手順、デバイス情報、ストーリー分岐、発売時の問題をまとめています。",
      aboutTitle: "リ・ストーリー: 思い出修理屋とは？",
      finalTitle: "リ・ストーリー: 思い出修理屋を極める準備はできましたか？",
      finalDescription: "最初のデバイスから最後の客の物語まで、修理・パーツ・実績を Wiki で確認できます。",
      codeDescription: "調査で確認できたリ・ストーリーの交換コードはありません。",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleCopy(locale: Locale): LocaleCopy {
  return localeCopy[locale] ?? localeCopy.en;
}

export function getLocalizedHomeMeta(locale: Locale): LocalizedHomeMeta {
  return localizedHomeMeta[locale] ?? localizedHomeMeta.en;
}

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${normalized === "/" ? "" : normalized}` || "/";
}

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return guideMeta.find((guide) => guide.slug === slug);
}

const localizedGuideOverrides: Partial<Record<Locale, Record<string, Partial<GuideMeta>>>> = {
  ru: {
    "restory-chill-electronics-repairs-walkthrough": {
      title: "ReStory: Chill Electronics Repairs — гайд для новичков",
      seoTitle: "ReStory: Chill Electronics Repairs — гайд для новичков",
      metaDescription:
        "Гайд для новичков по ReStory: Chill Electronics Repairs — первый заказ, основной цикл ремонта, детали, мастерская и подтверждённые сведения.",
      description:
        "Начните с первого заказа, пройдите подтверждённый цикл ремонта и отделяйте проверенные сведения от деталей, которые ещё нужно подтвердить.",
    },
  },
  de: {
    "restory-chill-electronics-repairs-walkthrough": {
      title: "ReStory: Chill Electronics Repairs — Einsteiger-Guide",
      seoTitle: "ReStory: Chill Electronics Repairs — Einsteiger-Guide",
      metaDescription:
        "Einsteiger-Guide für ReStory: Chill Electronics Repairs mit dem ersten Auftrag, dem Reparaturkreislauf, Ersatzteilen, Werkstatt und bestätigten Informationen.",
      description:
        "Starte mit dem ersten Auftrag, folge dem bestätigten Reparaturkreislauf und trenne geprüfte Informationen von offenen Details.",
    },
  },
  ja: {
    "restory-chill-electronics-repairs-walkthrough": {
      title: "リ・ストーリー: 思い出修理屋 — 初心者ガイド",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 初心者ガイド",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の初心者ガイド。最初の依頼、修理の基本ループ、交換部品、店の管理、Steam版の確認済み情報をまとめます。",
      description:
        "最初の依頼から確認済みの修理ループまで、ゲーム内で確認できた情報と未確認の詳細を分けて紹介します。",
    },
  },
};

export type GuideAnswer = {
  summary: string;
  points: string[];
};

const guideAnswers: Partial<Record<string, GuideAnswer>> = {
  "restory-chill-electronics-repairs-walkthrough": {
    summary:
      "Start the ReStory: Chill Electronics Repairs walkthrough by treating each job as the same confirmed repair loop: accept a customer device, disassemble it, clean the separated parts, replace the faulty component, reassemble the device, and deliver the order. The shop also involves money management, a Y2K-era browser for spare parts, and offline or online requests. Customer conversations and choices connect repairs to the branching story, but the supplied official material does not confirm a universal first-day route, chapter order, unlock dates, ending count, or every device-to-part relationship. For a reliable first playthrough, record the customer request, device category, faulty part, source for the spare, and whether the order was offline or online. Use the confirmed loop as your route and mark chapter names, exact triggers, and post-story behavior as 待确认 until they are verified in the full release.",
    points: [
      "Accept the customer device and read the request.",
      "Disassemble, clean, replace the faulty part, then reassemble.",
      "Use the Y2K-era browser for spare-part research and online requests.",
      "Treat chapter order, unlock dates, and ending conditions as 待确认.",
    ],
  },
  "restory-chill-electronics-repairs-cleaning-guide": {
    summary:
      "Cleaning belongs between disassembly and faulty-part replacement in the confirmed ReStory: Chill Electronics Repairs repair loop. Separate the device, clean the exposed parts, replace the faulty component, and reassemble the order before delivery. The public achievement list confirms cumulative targets for cleaning the workspace, 100 parts, and 1,000 parts, and it identifies the automatic ultrasonic bath as part of the cleaning system. The supplied research does not confirm a universal keybind, cleaning radius, bath price, unlock day, or a single fix for every sonic-bath issue. Track the device, part, tool, and repair stage when a cleaning action does not register. Community workarounds should remain marked 待确认 until they are re-tested against the current full-release build.",
    points: [
      "Disassemble before starting the cleaning stage.",
      "Clean the separated parts before replacing the faulty component.",
      "Track the workspace, 100-part, and 1,000-part cleaning goals.",
      "Keep controls, prices, unlocks, and workarounds marked 待确认.",
    ],
  },
  "restory-chill-electronics-repairs-parts-catalog": {
    summary:
      "The ReStory: Chill Electronics Repairs parts catalog should be used as a research reference rather than an invented inventory list. The confirmed game loop combines device disassembly, cleaning, faulty-part replacement, reassembly, money management, and a Y2K-era browser used to search for supplies. The available research identifies device families and named hardware in the official material, but it does not confirm every part name, price, stock rule, browser result, or device-to-part mapping. Use the catalog to separate confirmed devices and hardware from fields that still need an in-game check. For each job, record the device, customer request, suspected faulty component, browser or shop source, and whether the order was offline or online. Do not turn one early build, Demo result, or community report into a universal part table until the full-release behavior has been verified.",
    points: [
      "Use the browser and shop systems to research spare parts.",
      "Separate confirmed hardware from incomplete inventory fields.",
      "Record device, faulty component, source, and order type for each job.",
      "Keep complete prices, stock rules, and mappings as 待确认.",
    ],
  },
  "restory-chill-electronics-repairs-achievements": {
    summary:
      "ReStory: Chill Electronics Repairs has 50 Steam Achievements, and the safest way to use the achievement guide is to group them by the activity they confirm. The public list covers repairs, shop and business progress, cleaning, orders, tools, customization, time, assembly competitions, and story. It confirms cumulative cleaning goals, email-order milestones, and competition achievements, but the supplied research does not establish every hidden trigger, route condition, fastest order, or whether a Demo result carries into the full release. Track achievements alongside normal repair jobs instead of forcing an unverified farming route. When an achievement depends on a customer choice, device type, competition, or shop upgrade, record the exact in-game context and label the condition 待确认 until it has been checked in the current release.",
    points: [
      "Use the 50-achievement list as a checklist by activity.",
      "Track cleaning, email orders, repairs, tools, and competitions together.",
      "Record the in-game context for choice- and route-dependent achievements.",
      "Do not treat Demo behavior or one report as a confirmed trigger.",
    ],
  },
  "restory-chill-electronics-repairs-release-date": {
    summary:
      "The official full release date for ReStory: Chill Electronics Repairs is August 6, 2026. The site should keep that date separate from the June 15, 2026 Demo and any earlier Playtest or launch-period announcements. The game is a Steam release for Windows and macOS, and the research snapshot records a Steam Deck Playable label. Release timing, price, review percentage, supported languages, and launch reports can change or depend on the storefront region, so each dynamic figure should carry its source and research context. This page is most useful as a short timeline: Demo, Playtest, full release, and later updates. Do not replace the official date with a community post, and do not present a changing offer or review percentage as a permanent game fact.",
    points: [
      "Full release: August 6, 2026.",
      "Keep the June 15, 2026 Demo separate from the full release.",
      "Use official Steam or publisher material for timing claims.",
      "Mark changing price, reviews, and launch reports with their research context.",
    ],
  },
};

export function getGuideAnswer(slug: string): GuideAnswer | undefined {
  return guideAnswers[slug];
}

export function getLocalizedGuideMeta(locale: Locale, slug: string): GuideMeta | undefined {
  const guide = getGuideMeta(slug);
  if (!guide) return undefined;
  const override = localizedGuideOverrides[locale]?.[slug];
  return override ? { ...guide, ...override } : guide;
}

export function hasLocalizedGuide(locale: Locale, slug: string): boolean {
  return Boolean(localizedGuideOverrides[locale]?.[slug]);
}
