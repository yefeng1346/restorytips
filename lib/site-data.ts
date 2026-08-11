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
  sidebarCodes: [],
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
        "15+ Hour Story",
        "50 Steam Achievements",
        "9 Interface & Subtitle Languages",
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
      title: "",
      description: "",
      value: "",
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
      "ReStory: Chill Electronics Repairs walkthrough covers the first repair day, customer orders, disassembly, cleaning, parts, choices, and shop management.",
    description: "Start the shop and follow the repair loop from the first customer order through disassembly, cleaning, replacement, reassembly, and delivery.",
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
      "ReStory: Chill Electronics Repairs cleaning guide covers the repair loop, ultrasonic bath achievements, workspace cleaning, parts, and delivery.",
    description: "Follow the cleaning sequence, review ultrasonic bath achievements, and connect workspace cleaning with each repair order.",
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
      "ReStory: Chill Electronics Repairs endings guide explains the branching story, customer choices, multiple endings, repair orders, and story progression.",
    description: "Track the branching story, customer choices, and multiple endings while keeping repair progress connected to story decisions.",
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
      "ReStory: Chill Electronics Repairs parts catalog covers device families, named hardware, browser sourcing, repair tools, and the shop's spare-part workflow.",
    description: "Use the device and hardware notes to research spare parts, browser listings, tools, and each customer order.",
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
      "ReStory: Chill Electronics Repairs internet plan guide covers the Y2K browser, email orders, spare parts, online work, and the shop's repair workflow.",
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
      "ReStory: Chill Electronics Repairs Atari guide covers Atari 2600, 2800, CX40 joystick, licensed hardware, and the official in-game teardown.",
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
      "ReStory: Chill Electronics Repairs platforms guide covers Steam on Windows and macOS, Steam Deck Playable status, and official launch platform details.",
    description: "Compare the confirmed Windows and macOS Steam release with Steam Deck's Playable label.",
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
      "ReStory: Chill Electronics Repairs demo guide covers the free June 15, 2026 Demo, repair features, customers, customization, online requests, and languages.",
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
      "ReStory: Chill Electronics Repairs system requirements lists official Windows and macOS minimum specs, Steam Deck status, and Steam launch details.",
    description: "Check the official Windows and macOS minimum requirements and compare them with the Steam launch platform information.",
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
      "ReStory: Chill Electronics Repairs controller support guide explains Steam Deck Playable, Steam features, repair input context, and support information.",
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
      "ReStory: Chill Electronics Repairs resolution settings guide covers VSync, 30/60 target framerate, window modes, ultrawide reports, and launch settings.",
    description: "Use the VSync, target-framerate, window-mode, and ultrawide notes collected from launch materials.",
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
      "ReStory: Chill Electronics Repairs mods guide explains the official Steam feature list, community guides, and where to check Workshop support.",
    description: "Review official Steam features, community guides, and the available information about Workshop support.",
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

type HomeCardCopy = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export type QuickLinkCopy = {
  stat: string;
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
};

type HomeCopy = {
  answerKicker: string;
  answerTitle: string;
  answerText: string;
  answerLoopTitle: string;
  answerSteps: readonly string[];
  quickTitle: string;
  quickDescription: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: readonly { question: string; answer: string }[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: readonly string[];
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    videoLabel: string;
  };
  quickLinks: readonly QuickLinkCopy[];
  startTitle: string;
  startCards: readonly HomeCardCopy[];
  aboutTitle: string;
  aboutParagraphs: readonly string[];
  aboutStats: readonly { label: string; value: string }[];
  aboutCta: string;
  glance: readonly { value: string; label: string }[];
  codesTitle: string;
  codeDescription: string;
  codeValue: string;
  finalTitle: string;
  finalDescription: string;
  finalPrimary: string;
  finalSecondary: string;
};

type LegalCopy = {
  privacy: {
    intro: string;
    informationTitle: string;
    information: string;
    advertisingTitle: string;
    advertising: string;
    externalTitle: string;
    external: string;
  };
  terms: {
    intro: string;
    contentTitle: string;
    content: string;
    useTitle: string;
    use: string;
  };
};

type LocaleCopy = {
  gameName: string;
  languageName: string;
  languageNames: Record<Locale, string>;
  nav: NavLabels;
  labels: {
    communityWiki: string;
    quickLookup: string;
    faq: string;
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
    officialGamePage: string;
    officialDiscord: string;
    steamStore: string;
    officialYoutube: string;
    brandSubtitle: string;
    lastUpdated: string;
    theme: string;
    light: string;
    dark: string;
    privacy: string;
    terms: string;
    shortAnswer: string;
    editorialReview: string;
    editorialTeam: string;
    researchStatus: string;
    siteWiki: string;
    live: string;
  };
  home: HomeCopy;
  accessibility: {
    breadcrumb: string;
    primaryNav: string;
    changeLanguage: string;
    taskbar: string;
    wikiSections: string;
    logoAlt: string;
  };
  footerDescription: string;
  footerNote: string;
  currentDate: string;
  legal: LegalCopy;
};

const localizedHomeCopy: Record<Locale, HomeCopy> = {
  en: {
    answerKicker: "Short answer",
    answerTitle: "What do you do in ReStory: Chill Electronics Repairs?",
    answerText:
      "ReStory: Chill Electronics Repairs is a cozy, narrative-driven shop management simulation on Steam. You run an electronics repair shop in mid-2000s Tokyo: accept customer orders, disassemble and clean nostalgic devices, replace faulty parts, rebuild them, and hand them back. A Y2K-era browser helps you find spare parts and handle online requests while money, tools, decoration, and customer choices shape the shop and its branching story.",
    answerLoopTitle: "The repair loop",
    answerSteps: ["Accept customer orders", "Disassemble and clean devices", "Replace faulty parts", "Rebuild and deliver"],
    quickTitle: "Find the repair answer fast",
    quickDescription: "Repair steps, device notes, story choices, and launch-build checks in one place.",
    faqTitle: "Frequently asked questions",
    faqDescription: "Confirmed answers about the platform, story length, achievements, languages, and Demo.",
    faqItems: [
      {
        question: "What kind of game is ReStory: Chill Electronics Repairs?",
        answer: "It is a cozy, narrative-driven shop management simulation developed by Mandragora and published by tinyBuild. The game is set in a mid-2000s Tokyo electronics repair shop.",
      },
      {
        question: "Which platforms does ReStory support?",
        answer: "The full release is available on Steam for Windows and macOS. The Steam store lists Steam Deck as Playable.",
      },
      {
        question: "How long is the main story?",
        answer: "The main story is listed as 15+ hours.",
      },
      {
        question: "How many Steam Achievements does ReStory have?",
        answer: "The Steam store lists 50 Steam Achievements.",
      },
      {
        question: "How many languages does ReStory support?",
        answer: "The full release lists 9 interface and subtitle languages.",
      },
      {
        question: "Is there a ReStory Demo?",
        answer: "Yes. The standalone Steam Demo is listed as released on June 15, 2026. Its language and system details are separate from the full release.",
      },
    ],
    hero: siteConfig.homepage.hero,
    quickLinks: [
      { stat: "15+", title: "Beginner Guide", description: "Start the first repair-shop shift and learn the confirmed core loop.", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "first hours" },
      { stat: "4", title: "Repair Workflow", description: "Disassemble, clean, replace faulty parts, and reassemble.", href: "/guides/restory-chill-electronics-repairs-cleaning-guide", label: "confirmed sequence" },
      { stat: "Y2K", title: "Devices & Parts", description: "Browse the research-backed device, browser, and shop-tool notes.", href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: "shop reference" },
      { stat: "50", title: "Story & Achievements", description: "Track customer choices, multiple endings, and Steam achievements.", href: "/guides/restory-chill-electronics-repairs-achievements", label: "Steam Achievements" },
      { stat: "Aug", title: "Known Issues", description: "Review official launch reports and the documented settings notes.", href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: "launch notes" },
      { stat: "▶", title: "Official Media", description: "Watch the official Gameplay Trailer from tinyBuildGAMES.", href: siteConfig.official.gameplayTrailer, label: "YouTube", external: true },
    ],
    startTitle: siteConfig.homepage.start.title,
    startCards: siteConfig.homepage.start.cards,
    aboutTitle: siteConfig.homepage.aboutGame.title,
    aboutParagraphs: siteConfig.homepage.aboutGame.paragraphs,
    aboutStats: siteConfig.homepage.aboutGame.stats,
    aboutCta: siteConfig.homepage.aboutGame.cta,
    glance: [
      { value: "15+", label: "Story hours" },
      { value: "50", label: "Steam Achievements" },
      { value: "9", label: "Languages" },
      { value: "Y2K", label: "Tokyo setting" },
    ],
    codesTitle: siteConfig.homepage.codes.title,
    codeDescription: siteConfig.homepage.codes.description,
    codeValue: "",
    finalTitle: siteConfig.homepage.finalCta.title,
    finalDescription: siteConfig.homepage.finalCta.description,
    finalPrimary: siteConfig.homepage.finalCta.primary,
    finalSecondary: siteConfig.homepage.finalCta.secondary,
  },
  ru: {
    answerKicker: "Короткий ответ",
    answerTitle: "Что вы делаете в ReStory: Chill Electronics Repairs?",
    answerText:
      "ReStory: Chill Electronics Repairs — уютная сюжетная симуляция мастерской в Steam. В Токио середины 2000-х вы принимаете заказы, разбираете и очищаете ностальгические устройства, заменяете неисправные детали, собираете их и возвращаете клиентам. Браузер эпохи Y2K помогает искать запчасти и обрабатывать онлайн-запросы, а деньги, инструменты, декор и выборы клиентов влияют на мастерскую и разветвлённую историю.",
    answerLoopTitle: "Цикл ремонта",
    answerSteps: ["Принять заказ клиента", "Разобрать и очистить устройство", "Заменить неисправные детали", "Собрать и вернуть устройство"],
    quickTitle: "Быстро найдите ответ по ремонту",
    quickDescription: "Ремонт, устройства, выборы сюжета и проблемы запуска в одном месте.",
    faqTitle: "Часто задаваемые вопросы",
    faqDescription: "Краткие ответы о платформе, истории, достижениях, языках и демоверсии.",
    faqItems: [
      {
        question: "Что это за игра ReStory: Chill Electronics Repairs?",
        answer: "Это уютная сюжетная симуляция управления мастерской от Mandragora, изданная tinyBuild. Действие происходит в небольшой мастерской электроники в Токио середины 2000-х.",
      },
      {
        question: "На каких платформах доступна ReStory?",
        answer: "Полная версия доступна в Steam для Windows и macOS. В магазине Steam указано, что игра Playable на Steam Deck.",
      },
      {
        question: "Сколько длится основная история?",
        answer: "Основная история рассчитана более чем на 15 часов.",
      },
      {
        question: "Сколько достижений Steam есть в ReStory?",
        answer: "В магазине Steam указано 50 достижений Steam.",
      },
      {
        question: "Сколько языков поддерживает ReStory?",
        answer: "В полной версии указаны 9 языков интерфейса и субтитров.",
      },
      {
        question: "Есть ли у ReStory демоверсия?",
        answer: "Да. Отдельная демоверсия в Steam указана как выпущенная 15 июня 2026 года. Её языки и системные требования нужно рассматривать отдельно от полной версии.",
      },
    ],
    hero: {
      eyebrow: "Независимая фанатская Wiki",
      title: siteConfig.gameName,
      description: "Управляйте уютной мастерской по ремонту электроники в Токио середины 2000-х. Восстанавливайте приставки, телефоны, камеры и музыкальные устройства, а выборы клиентов влияют на мастерскую и истории.",
      stats: ["Релиз 6 августа 2026", "История на 15+ часов", "50 достижений Steam", "9 языков интерфейса и субтитров"],
      primaryCta: "Начать гайд для новичков",
      secondaryCta: "Открыть руководства",
      tertiaryCta: "Проверить известные проблемы",
      videoLabel: "Официальный трейлер игрового процесса",
    },
    quickLinks: [
      { stat: "15+", title: "Гайд для новичков", description: "Начните первую смену и изучите подтверждённый основной цикл ремонта.", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "первые часы" },
      { stat: "4", title: "Цикл ремонта", description: "Разберите устройство, очистите детали, замените неисправную часть и соберите его.", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "подтверждённая последовательность" },
      { stat: "Y2K", title: "Устройства и детали", description: "Читайте заметки об устройствах, браузере и инструментах мастерской.", href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: "справочник мастерской" },
      { stat: "50", title: "Сюжет и достижения", description: "Следите за выборами клиентов, несколькими концовками и достижениями Steam.", href: "/guides/restory-chill-electronics-repairs-achievements", label: "достижения Steam" },
      { stat: "Авг.", title: "Известные проблемы", description: "Читайте официальные сообщения о запуске и заметки о настройках.", href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: "заметки о запуске" },
      { stat: "▶", title: "Официальные материалы", description: "Посмотрите официальный трейлер игрового процесса от tinyBuildGAMES.", href: siteConfig.official.gameplayTrailer, label: "YouTube", external: true },
    ],
    startTitle: "Ваш путь в ReStory: Chill Electronics Repairs",
    startCards: [
      { number: "1", title: "Гайд для новичков", description: "Откройте мастерскую, примите первый заказ и разберитесь в основном цикле.", href: "/guides/restory-chill-electronics-repairs-walkthrough" },
      { number: "2", title: "Цикл ремонта", description: "Изучите разборку, очистку, замену деталей и сборку устройства.", href: "/guides" },
      { number: "3", title: "Устройства и инструменты", description: "Найдите подтверждённые сведения о браузере, деталях и мастерской.", href: "/guides/restory-chill-electronics-repairs-parts-catalog" },
      { number: "4", title: "Выборы и достижения", description: "Следите за выборами клиентов, историей и достижениями Steam.", href: "/guides/restory-chill-electronics-repairs-achievements" },
    ],
    aboutTitle: "Что такое ReStory: Chill Electronics Repairs?",
    aboutParagraphs: [
      "ReStory: Chill Electronics Repairs — уютная сюжетная симуляция управления мастерской от Mandragora, изданная tinyBuild. Действие происходит в Токио середины 2000-х, где вы работаете за стойкой небольшой мастерской электроники.",
      "Разбирайте устройства, очищайте их, заменяйте неисправные детали и собирайте заново, одновременно управляя деньгами и ища материалы в браузере эпохи Y2K. Разговоры и решения формируют разветвлённую историю с несколькими концовками.",
    ],
    aboutStats: [
      { label: "Разработчик", value: "Mandragora" },
      { label: "Издатель", value: "tinyBuild" },
      { label: "Платформа", value: "Steam для Windows и macOS; Steam Deck — Playable" },
      { label: "Жанр", value: "Уютная сюжетная симуляция управления мастерской" },
      { label: "Продолжительность истории", value: "15+ часов основной истории" },
      { label: "Достижения", value: "50 достижений Steam" },
      { label: "Поддерживаемые языки", value: "9 языков интерфейса и субтитров" },
    ],
    aboutCta: "Открыть все руководства",
    glance: [
      { value: "15+", label: "Часов истории" },
      { value: "50", label: "Достижений Steam" },
      { value: "9", label: "Языков" },
      { value: "Y2K", label: "Токио середины 2000-х" },
    ],
    codesTitle: "",
    codeDescription: "",
    codeValue: "",
    finalTitle: "Готовы освоить ReStory: Chill Electronics Repairs?",
    finalDescription: "От первого устройства на верстаке до последней истории клиента — используйте Wiki для ремонта, поиска деталей и достижений.",
    finalPrimary: "Открыть гайд для новичков",
    finalSecondary: "Играть в Steam",
  },
  de: {
    answerKicker: "Kurzantwort",
    answerTitle: "Was machst du in ReStory: Chill Electronics Repairs?",
    answerText:
      "ReStory: Chill Electronics Repairs ist eine gemütliche, erzählerische Werkstatt-Simulation auf Steam. Du leitest eine Elektronikwerkstatt im Tokio der mittleren 2000er: Kundenaufträge annehmen, nostalgische Geräte zerlegen und reinigen, defekte Teile ersetzen, sie wieder zusammenbauen und zurückgeben. Ein Y2K-Browser hilft bei der Suche nach Ersatzteilen und Online-Anfragen, während Geld, Werkzeuge, Dekoration und Kundenentscheidungen die Werkstatt und die verzweigte Geschichte prägen.",
    answerLoopTitle: "Der Reparaturkreislauf",
    answerSteps: ["Kundenauftrag annehmen", "Gerät zerlegen und reinigen", "Defekte Teile ersetzen", "Zusammenbauen und zurückgeben"],
    quickTitle: "Die passende Reparatur schnell finden",
    quickDescription: "Reparaturschritte, Geräte, Story-Entscheidungen und bekannte Startprobleme an einem Ort.",
    faqTitle: "Häufige Fragen",
    faqDescription: "Kurze Antworten zu Plattform, Storylänge, Erfolgen, Sprachen und Demo.",
    faqItems: [
      {
        question: "Was für ein Spiel ist ReStory: Chill Electronics Repairs?",
        answer: "Es ist eine gemütliche, erzählerische Werkstatt-Simulation von Mandragora, veröffentlicht von tinyBuild. Das Spiel spielt in einer kleinen Elektronikwerkstatt im Tokio der mittleren 2000er.",
      },
      {
        question: "Auf welchen Plattformen ist ReStory verfügbar?",
        answer: "Die Vollversion ist auf Steam für Windows und macOS verfügbar. Im Steam-Store ist Steam Deck als Playable aufgeführt.",
      },
      {
        question: "Wie lang ist die Hauptgeschichte?",
        answer: "Die Hauptgeschichte ist mit mehr als 15 Stunden angegeben.",
      },
      {
        question: "Wie viele Steam-Erfolge gibt es in ReStory?",
        answer: "Im Steam-Store sind 50 Steam-Erfolge aufgeführt.",
      },
      {
        question: "Wie viele Sprachen unterstützt ReStory?",
        answer: "Für die Vollversion sind 9 Interface- und Untertitelsprachen angegeben.",
      },
      {
        question: "Gibt es eine Demo von ReStory?",
        answer: "Ja. Die eigenständige Steam-Demo ist mit dem Veröffentlichungsdatum 15. Juni 2026 angegeben. Ihre Sprach- und Systemangaben sollten getrennt von der Vollversion betrachtet werden.",
      },
    ],
    hero: {
      eyebrow: "Unabhängige Fan-Wiki",
      title: siteConfig.gameName,
      description: "Führe eine gemütliche Elektronikwerkstatt im Tokio der mittleren 2000er. Repariere Konsolen, Telefone, Kameras und Musikgeräte, während Kundenentscheidungen die Werkstatt und ihre Geschichten prägen.",
      stats: ["Veröffentlicht am 6. Aug. 2026", "15+ Stunden Geschichte", "50 Steam-Erfolge", "9 Interface- und Untertitelsprachen"],
      primaryCta: "Einsteiger-Guide starten",
      secondaryCta: "Reparatur-Guides öffnen",
      tertiaryCta: "Bekannte Probleme prüfen",
      videoLabel: "Offizieller Gameplay-Trailer",
    },
    quickLinks: [
      { stat: "15+", title: "Einsteiger-Guide", description: "Starte die erste Schicht und lerne den bestätigten Reparaturkreislauf.", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "erste Stunden" },
      { stat: "4", title: "Reparaturkreislauf", description: "Gerät zerlegen, Teile reinigen, defekte Teile ersetzen und wieder zusammenbauen.", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "bestätigte Reihenfolge" },
      { stat: "Y2K", title: "Geräte und Ersatzteile", description: "Notizen zu Geräten, Browser und Werkzeugen der Werkstatt.", href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: "Werkstatt-Referenz" },
      { stat: "50", title: "Story und Erfolge", description: "Kundenentscheidungen, mehrere Enden und Steam-Erfolge im Blick behalten.", href: "/guides/restory-chill-electronics-repairs-achievements", label: "Steam-Erfolge" },
      { stat: "Aug.", title: "Bekannte Probleme", description: "Offizielle Startberichte und dokumentierte Einstellungsnotizen ansehen.", href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: "Startnotizen" },
      { stat: "▶", title: "Offizielle Medien", description: "Den offiziellen Gameplay-Trailer von tinyBuildGAMES ansehen.", href: siteConfig.official.gameplayTrailer, label: "YouTube", external: true },
    ],
    startTitle: "Deine Reise durch ReStory: Chill Electronics Repairs",
    startCards: [
      { number: "1", title: "Einsteiger-Guide", description: "Öffne die Werkstatt, nimm den ersten Auftrag an und lerne den Kernablauf.", href: "/guides/restory-chill-electronics-repairs-walkthrough" },
      { number: "2", title: "Reparaturkreislauf", description: "Lerne Zerlegen, Reinigen, Ersatzteile und den Zusammenbau kennen.", href: "/guides" },
      { number: "3", title: "Geräte und Werkzeuge", description: "Finde bestätigte Hinweise zu Browser, Ersatzteilen und Werkstatt.", href: "/guides/restory-chill-electronics-repairs-parts-catalog" },
      { number: "4", title: "Entscheidungen und Erfolge", description: "Kundenentscheidungen, Story und Steam-Erfolge verfolgen.", href: "/guides/restory-chill-electronics-repairs-achievements" },
    ],
    aboutTitle: "Was ist ReStory: Chill Electronics Repairs?",
    aboutParagraphs: [
      "ReStory: Chill Electronics Repairs ist eine gemütliche, erzählerische Werkstatt-Simulation von Mandragora, veröffentlicht von tinyBuild. Im Tokio der mittleren 2000er arbeitest du hinter dem Tresen einer kleinen Elektronikwerkstatt.",
      "Zerlege Geräte, reinige sie, ersetze defekte Teile und baue sie wieder zusammen. Verwalte dabei dein Geld und suche mit einem Y2K-Browser nach Ersatzteilen. Gespräche und Entscheidungen führen zu einer verzweigten Geschichte mit mehreren Enden.",
    ],
    aboutStats: [
      { label: "Entwickler", value: "Mandragora" },
      { label: "Publisher", value: "tinyBuild" },
      { label: "Plattform", value: "Steam für Windows und macOS; Steam Deck — Playable" },
      { label: "Genre", value: "Gemütliche erzählerische Werkstatt-Simulation" },
      { label: "Storylänge", value: "15+ Stunden Hauptgeschichte" },
      { label: "Erfolge", value: "50 Steam-Erfolge" },
      { label: "Unterstützte Sprachen", value: "9 Interface- und Untertitelsprachen" },
    ],
    aboutCta: "Alle Guides öffnen",
    glance: [
      { value: "15+", label: "Stunden Geschichte" },
      { value: "50", label: "Steam-Erfolge" },
      { value: "9", label: "Sprachen" },
      { value: "Y2K", label: "Tokio-Setting" },
    ],
    codesTitle: "",
    codeDescription: "",
    codeValue: "",
    finalTitle: "Bereit, ReStory: Chill Electronics Repairs zu meistern?",
    finalDescription: "Vom ersten Gerät auf der Werkbank bis zur letzten Kundengeschichte hilft dir die Wiki bei Reparaturen, Ersatzteilen und Erfolgen.",
    finalPrimary: "Einsteiger-Guide lesen",
    finalSecondary: "Auf Steam spielen",
  },
  ja: {
    answerKicker: "要点",
    answerTitle: "『リ・ストーリー: 思い出修理屋』では何をする？",
    answerText:
      "『リ・ストーリー: 思い出修理屋』は、Steamで遊べる物語重視の修理店シミュレーションです。2000年代半ばの東京で店を営み、客の依頼を受け、懐かしい機器を分解・清掃し、故障部品を交換して組み立て直します。Y2K時代のブラウザで部品やオンライン依頼を探しながら、お金、道具、店内の装飾、客との選択で店と分岐する物語を進めます。",
    answerLoopTitle: "修理の流れ",
    answerSteps: ["客の依頼を受ける", "機器を分解・清掃する", "故障部品を交換する", "組み立てて返却する"],
    quickTitle: "修理の答えをすぐに見つける",
    quickDescription: "修理手順、デバイス情報、ストーリー分岐、発売時の問題をまとめています。",
    faqTitle: "よくある質問",
    faqDescription: "対応プラットフォーム、物語の長さ、実績、言語、デモについての回答です。",
    faqItems: [
      {
        question: "『リ・ストーリー: 思い出修理屋』はどんなゲーム？",
        answer: "Mandragoraが開発し、tinyBuildが発売する、物語重視の修理店シミュレーションです。2000年代半ばの東京にある小さな電子機器修理店が舞台です。",
      },
      {
        question: "対応プラットフォームは？",
        answer: "完全版はWindowsとmacOS向けのSteamでプレイできます。SteamストアではSteam DeckはPlayableと記載されています。",
      },
      {
        question: "メインストーリーの長さは？",
        answer: "メインストーリーは15時間以上と記載されています。",
      },
      {
        question: "Steam実績はいくつありますか？",
        answer: "Steamストアでは50個のSteam実績が記載されています。",
      },
      {
        question: "何言語に対応していますか？",
        answer: "完全版はインターフェースと字幕に9言語対応と記載されています。",
      },
      {
        question: "デモ版はありますか？",
        answer: "はい。独立したSteamデモは2026年6月15日発売と記載されています。デモの言語とシステム要件は完全版とは分けて確認してください。",
      },
    ],
    hero: {
      eyebrow: "独立ファンメイド Wiki",
      title: "リ・ストーリー: 思い出修理屋",
      description: "2000年代半ばの東京で、懐かしい電子機器の修理店を経営します。ゲーム機、携帯電話、カメラ、音楽プレーヤーを修理しながら、客の選択で店と物語が変化します。",
      stats: ["2026年8月6日発売", "15時間以上の物語", "Steam実績50個", "インターフェースと字幕9言語"],
      primaryCta: "初心者ガイドを始める",
      secondaryCta: "修理攻略を見る",
      tertiaryCta: "既知の問題を確認",
      videoLabel: "公式ゲームプレイトレーラー",
    },
    quickLinks: [
      { stat: "15+", title: "初心者ガイド", description: "最初の勤務から確認済みの修理ループまで学べます。", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "最初の数時間" },
      { stat: "4", title: "修理の流れ", description: "分解、清掃、故障部品の交換、組み立てを確認します。", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: "確認済みの順序" },
      { stat: "Y2K", title: "デバイスと部品", description: "デバイス、ブラウザ、修理店の道具に関する情報をまとめています。", href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: "修理店リファレンス" },
      { stat: "50", title: "物語と実績", description: "客の選択、複数エンディング、Steam実績を確認できます。", href: "/guides/restory-chill-electronics-repairs-achievements", label: "Steam実績" },
      { stat: "8月", title: "既知の問題", description: "公式の発売情報と設定に関するメモを確認できます。", href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: "発売時のメモ" },
      { stat: "▶", title: "公式メディア", description: "tinyBuildGAMESの公式ゲームプレイトレーラーを視聴できます。", href: siteConfig.official.gameplayTrailer, label: "YouTube", external: true },
    ],
    startTitle: "リ・ストーリー: 思い出修理屋の進め方",
    startCards: [
      { number: "1", title: "初心者ガイド", description: "店を開き、最初の依頼を受け、基本の修理ループを学びます。", href: "/guides/restory-chill-electronics-repairs-walkthrough" },
      { number: "2", title: "修理の流れ", description: "分解、清掃、部品交換、組み立ての順序を確認します。", href: "/guides" },
      { number: "3", title: "デバイスと道具", description: "ブラウザ、部品、修理店に関する確認済みの情報を探せます。", href: "/guides/restory-chill-electronics-repairs-parts-catalog" },
      { number: "4", title: "選択と実績", description: "客の選択、物語、Steam実績を確認できます。", href: "/guides/restory-chill-electronics-repairs-achievements" },
    ],
    aboutTitle: "リ・ストーリー: 思い出修理屋とは？",
    aboutParagraphs: [
      "リ・ストーリー: 思い出修理屋は、Mandragoraが開発し、tinyBuildが発売する物語重視の修理店シミュレーションです。2000年代半ばの東京にある小さな電子機器修理店が舞台です。",
      "機器を分解して清掃し、故障した部品を交換して組み立て直します。お金を管理しながらY2K時代のブラウザで部品を探し、会話と選択によって複数のエンディングへ進みます。",
    ],
    aboutStats: [
      { label: "開発元", value: "Mandragora" },
      { label: "発売元", value: "tinyBuild" },
      { label: "プラットフォーム", value: "Windows・macOSのSteam、Steam DeckはPlayable" },
      { label: "ジャンル", value: "物語重視の修理店シミュレーション" },
      { label: "物語の長さ", value: "メインストーリー15時間以上" },
      { label: "実績", value: "Steam実績50個" },
      { label: "対応言語", value: "インターフェースと字幕は9言語" },
    ],
    aboutCta: "すべての攻略を見る",
    glance: [
      { value: "15+", label: "物語の時間" },
      { value: "50", label: "Steam実績" },
      { value: "9", label: "対応言語" },
      { value: "Y2K", label: "東京の舞台" },
    ],
    codesTitle: "",
    codeDescription: "",
    codeValue: "",
    finalTitle: "リ・ストーリー: 思い出修理屋を始めましょう",
    finalDescription: "最初のデバイスから最後の客の物語まで、修理、部品、実績に関する情報をWikiで確認できます。",
    finalPrimary: "初心者ガイドを読む",
    finalSecondary: "Steamでプレイ",
  },
};

const localeCopy: Record<Locale, LocaleCopy> = {
  en: {
    gameName: siteConfig.gameName,
    languageName: "English",
    languageNames: { en: "English", ru: "Russian", de: "German", ja: "Japanese" },
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
      faq: "FAQ",
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
      officialGamePage: "tinyBuild game page",
      officialDiscord: "Official Discord",
      steamStore: "Steam Store",
      officialYoutube: "Official YouTube",
      brandSubtitle: "Repair Wiki",
      lastUpdated: "Research snapshot",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      shortAnswer: "Short answer",
      editorialReview: "Editorial review",
      editorialTeam: "ReStorytips Editorial Team",
      researchStatus: "Research-based fan wiki",
      siteWiki: "ReStory Wiki",
      live: "Live",
    },
    home: localizedHomeCopy.en,
    accessibility: {
      breadcrumb: "Breadcrumb",
      primaryNav: "Primary navigation",
      changeLanguage: "Change language",
      taskbar: "Taskbar shortcuts",
      wikiSections: "Wiki sections",
      logoAlt: "ReStorytips logo",
    },
    footerDescription: "Cozy Y2K electronics repair shop simulation set in mid-2000s Tokyo.",
    footerNote: "This is an unofficial fan-made wiki for ReStory: Chill Electronics Repairs. Game names, assets, and trademarks belong to their respective owners.",
    currentDate: "Aug 2026",
    legal: {
      privacy: {
        intro: "This independent fan-made ReStory Wiki provides guides and reference information. No account is required to read the public pages.",
        informationTitle: "Information on this site",
        information: "Google Analytics is enabled to measure visits and page usage through measurement ID G-NGY82QT3YL. Google may process technical and usage data under its own policies. Do not submit private information through guide comments or external links.",
        advertisingTitle: "Advertising",
        advertising: "Public content pages may load Google AdSense with publisher ID ca-pub-4496419024798372. Google’s data processing is governed by its own policies.",
        externalTitle: "External services",
        external: "Official Steam, Discord, YouTube, and tinyBuild links leave this Wiki and are governed by their own policies.",
      },
      terms: {
        intro: "This is an unofficial fan-made Wiki for ReStory: Chill Electronics Repairs. It is not affiliated with Mandragora, tinyBuild, or Valve.",
        contentTitle: "Content status",
        content: "Pages use official sources and identify the current scope of each guide. Game names, assets, and trademarks belong to their respective owners.",
        useTitle: "Use of the site",
        use: "Use the information as a reference, check official announcements for changing launch information, and do not treat this Wiki as an official support channel.",
      },
    },
  },
  ru: {
    gameName: siteConfig.gameName,
    languageName: "Русский",
    languageNames: { en: "Английский", ru: "Русский", de: "Немецкий", ja: "Японский" },
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
      faq: "Частые вопросы",
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
      officialGamePage: "Страница игры tinyBuild",
      officialDiscord: "Официальный Discord",
      steamStore: "Магазин Steam",
      officialYoutube: "Официальный YouTube",
      brandSubtitle: "Wiki о ремонте",
      lastUpdated: "Снимок исследования",
      theme: "Тема",
      light: "Светлая",
      dark: "Тёмная",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      shortAnswer: "Краткий ответ",
      editorialReview: "Редакционная проверка",
      editorialTeam: "Редакция ReStorytips",
      researchStatus: "Фанатская Wiki на основе исследований",
      siteWiki: "Wiki ReStory",
      live: "В эфире",
    },
    home: localizedHomeCopy.ru,
    accessibility: {
      breadcrumb: "Навигационная цепочка",
      primaryNav: "Основная навигация",
      changeLanguage: "Изменить язык",
      taskbar: "Ярлыки панели задач",
      wikiSections: "Разделы Wiki",
      logoAlt: "Логотип ReStorytips",
    },
    footerDescription: "Уютная симуляция ремонта электроники в Токио середины 2000-х.",
    footerNote: "Это неофициальная фанатская Wiki по ReStory: Chill Electronics Repairs. Названия игр, материалы и товарные знаки принадлежат соответствующим владельцам.",
    currentDate: "Авг. 2026",
    legal: {
      privacy: {
        intro: "Эта независимая фанатская Wiki ReStory содержит руководства и справочную информацию. Для чтения открытых страниц аккаунт не требуется.",
        informationTitle: "Информация на сайте",
        information: "Google Analytics используется для измерения посещений и использования страниц через идентификатор G-NGY82QT3YL. Google может обрабатывать технические данные и сведения об использовании в соответствии со своими правилами. Не отправляйте личную информацию через комментарии к руководствам или внешние ссылки.",
        advertisingTitle: "Реклама",
        advertising: "На открытых страницах может загружаться Google AdSense с идентификатором издателя ca-pub-4496419024798372. Обработка данных Google регулируется его собственными правилами.",
        externalTitle: "Внешние сервисы",
        external: "Ссылки на Steam, Discord, YouTube и tinyBuild ведут за пределы Wiki и регулируются политиками соответствующих сервисов.",
      },
      terms: {
        intro: "Это неофициальная фанатская Wiki по ReStory: Chill Electronics Repairs. Она не связана с Mandragora, tinyBuild или Valve.",
        contentTitle: "Статус материалов",
        content: "Страницы используют официальные источники и указывают область каждого руководства. Названия игр, материалы и товарные знаки принадлежат соответствующим владельцам.",
        useTitle: "Использование сайта",
        use: "Используйте информацию как справочную, проверяйте официальные объявления об изменениях запуска и не воспринимайте Wiki как официальный канал поддержки.",
      },
    },
  },
  de: {
    gameName: siteConfig.gameName,
    languageName: "Deutsch",
    languageNames: { en: "Englisch", ru: "Russisch", de: "Deutsch", ja: "Japanisch" },
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
      faq: "Häufige Fragen",
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
      officialGamePage: "tinyBuild-Spielseite",
      officialDiscord: "Offizieller Discord",
      steamStore: "Steam-Store",
      officialYoutube: "Offizielles YouTube",
      brandSubtitle: "Reparatur-Wiki",
      lastUpdated: "Recherche-Stand",
      theme: "Darstellung",
      light: "Hell",
      dark: "Dunkel",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      shortAnswer: "Kurzantwort",
      editorialReview: "Redaktionelle Prüfung",
      editorialTeam: "ReStorytips-Redaktion",
      researchStatus: "Fan-Wiki auf Recherchebasis",
      siteWiki: "ReStory-Wiki",
      live: "Live",
    },
    home: localizedHomeCopy.de,
    accessibility: {
      breadcrumb: "Brotkrümelnavigation",
      primaryNav: "Hauptnavigation",
      changeLanguage: "Sprache ändern",
      taskbar: "Taskbar-Verknüpfungen",
      wikiSections: "Wiki-Bereiche",
      logoAlt: "ReStorytips-Logo",
    },
    footerDescription: "Gemütliche Elektronik-Reparatursimulation im Tokio der mittleren 2000er.",
    footerNote: "Dies ist eine inoffizielle Fan-Wiki zu ReStory: Chill Electronics Repairs. Spielnamen, Assets und Marken gehören ihren jeweiligen Eigentümern.",
    currentDate: "Aug. 2026",
    legal: {
      privacy: {
        intro: "Diese unabhängige Fan-Wiki zu ReStory bietet Guides und Referenzinformationen. Zum Lesen der öffentlichen Seiten ist kein Konto erforderlich.",
        informationTitle: "Informationen auf dieser Website",
        information: "Google Analytics misst Besuche und die Nutzung der Seiten mit der Mess-ID G-NGY82QT3YL. Google kann technische und Nutzungsdaten nach den eigenen Richtlinien verarbeiten. Sende keine privaten Informationen über Guide-Kommentare oder externe Links.",
        advertisingTitle: "Werbung",
        advertising: "Öffentliche Inhaltsseiten können Google AdSense mit der Publisher-ID ca-pub-4496419024798372 laden. Die Datenverarbeitung durch Google richtet sich nach den eigenen Richtlinien.",
        externalTitle: "Externe Dienste",
        external: "Offizielle Links zu Steam, Discord, YouTube und tinyBuild verlassen diese Wiki und unterliegen den Richtlinien der jeweiligen Dienste.",
      },
      terms: {
        intro: "Dies ist eine inoffizielle Fan-Wiki zu ReStory: Chill Electronics Repairs. Sie ist nicht mit Mandragora, tinyBuild oder Valve verbunden.",
        contentTitle: "Status der Inhalte",
        content: "Die Seiten verwenden offizielle Quellen und beschreiben den Umfang jedes Guides. Spielnamen, Assets und Marken gehören ihren jeweiligen Eigentümern.",
        useTitle: "Nutzung der Website",
        use: "Verwende die Informationen als Referenz, prüfe offizielle Ankündigungen zu Änderungen beim Start und betrachte diese Wiki nicht als offiziellen Supportkanal.",
      },
    },
  },
  ja: {
    gameName: "リ・ストーリー: 思い出修理屋",
    languageName: "日本語",
    languageNames: { en: "英語", ru: "ロシア語", de: "ドイツ語", ja: "日本語" },
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
      faq: "よくある質問",
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
      officialGamePage: "tinyBuild公式ゲームページ",
      officialDiscord: "公式Discord",
      steamStore: "Steamストア",
      officialYoutube: "公式YouTube",
      brandSubtitle: "修理Wiki",
      lastUpdated: "調査時点",
      theme: "テーマ",
      light: "ライト",
      dark: "ダーク",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      shortAnswer: "短い答え",
      editorialReview: "編集確認",
      editorialTeam: "ReStorytips編集チーム",
      researchStatus: "調査に基づくファンWiki",
      siteWiki: "ReStory Wiki",
      live: "ライブ",
    },
    home: localizedHomeCopy.ja,
    accessibility: {
      breadcrumb: "パンくずリスト",
      primaryNav: "メインナビゲーション",
      changeLanguage: "言語を変更",
      taskbar: "タスクバーのショートカット",
      wikiSections: "Wikiのセクション",
      logoAlt: "ReStorytipsのロゴ",
    },
    footerDescription: "2000年代半ばの東京を舞台にした、懐かしい電子機器修理店のシミュレーション。",
    footerNote: "これはリ・ストーリー: 思い出修理屋の非公式ファンWikiです。ゲーム名、素材、商標はそれぞれの権利者に帰属します。",
    currentDate: "2026年8月",
    legal: {
      privacy: {
        intro: "この独立したファンメイドWikiは、リ・ストーリー: 思い出修理屋の攻略と参考情報を提供します。公開ページの閲覧にアカウントは必要ありません。",
        informationTitle: "サイト上の情報",
        information: "Google Analyticsは測定ID G-NGY82QT3YLを使い、訪問数とページ利用状況を測定します。Googleは独自のポリシーに基づいて技術情報や利用情報を処理する場合があります。攻略コメントや外部リンクに個人情報を送信しないでください。",
        advertisingTitle: "広告",
        advertising: "公開コンテンツページでは、パブリッシャーID ca-pub-4496419024798372のGoogle AdSenseが読み込まれる場合があります。Googleによるデータ処理は、Googleのポリシーに従います。",
        externalTitle: "外部サービス",
        external: "Steam、Discord、YouTube、tinyBuildへの公式リンクはWikiの外部へ移動し、各サービスのポリシーが適用されます。",
      },
      terms: {
        intro: "これはリ・ストーリー: 思い出修理屋の非公式ファンメイドWikiです。Mandragora、tinyBuild、Valveとは提携していません。",
        contentTitle: "コンテンツの状態",
        content: "各ページでは公式ソースとガイドの対象範囲を示します。ゲーム名、素材、商標はそれぞれの権利者に帰属します。",
        useTitle: "サイトの利用",
        use: "情報は参考として利用し、発売情報の変更については公式発表を確認してください。このWikiを公式サポート窓口として扱わないでください。",
      },
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

export function localizedPagePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const guideMatch = normalized.match(/^\/guides\/([^/]+)$/);
  if (locale !== defaultLocale && guideMatch && !hasLocalizedGuide(locale, guideMatch[1])) {
    return localizedPath(locale, "/guides");
  }
  return localizedPath(locale, normalized);
}

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return guideMeta.find((guide) => guide.slug === slug);
}

const localizedGuideOverrides: Partial<Record<Locale, Record<string, Partial<GuideMeta>>>> = {
  ru: {
    "restory-chill-electronics-repairs-walkthrough": {
      category: "Руководство",
      eyebrow: "Первая смена",
      title: "ReStory: Chill Electronics Repairs — гайд для новичков",
      seoTitle: "ReStory: Chill Electronics Repairs — гайд для новичков",
      metaDescription:
        "Гайд для новичков по ReStory: Chill Electronics Repairs — первый заказ, основной цикл ремонта, детали, мастерская и подтверждённые сведения.",
      description:
        "Начните с первого заказа и пройдите основной цикл ремонта: от разборки устройства до его выдачи клиенту.",
      readTime: "7 мин чтения",
      tags: ["Прохождение", "Мастерская", "Сюжет"],
    },
    "restory-chill-electronics-repairs-parts-catalog": {
      category: "Устройства и детали",
      eyebrow: "Справочник мастерской",
      title: "ReStory: Chill Electronics Repairs — каталог деталей",
      keyword: "restory: chill electronics repairs каталог деталей",
      seoTitle: "ReStory: Chill Electronics Repairs — каталог деталей",
      metaDescription:
        "Каталог деталей ReStory: Chill Electronics Repairs: семейства устройств, названное оборудование, браузер эпохи Y2K, запчасти и этапы ремонта.",
      description:
        "Изучите подтверждённые семейства устройств, названия оборудования, источники запчастей и этапы ремонта.",
      readTime: "7 мин чтения",
      tags: ["Устройства", "Детали", "Каталог"],
    },
    "restory-chill-electronics-repairs-achievements": {
      category: "Достижения Steam",
      eyebrow: "Прогресс Steam",
      title: "ReStory: Chill Electronics Repairs — достижения",
      keyword: "restory: chill electronics repairs достижения",
      seoTitle: "ReStory: Chill Electronics Repairs — достижения",
      metaDescription:
        "Гайд по достижениям ReStory: Chill Electronics Repairs: 50 достижений Steam, открытые условия, очистка, заказы, рынок, инструменты и заметки об ошибках.",
      description:
        "Отслеживайте 50 достижений Steam по ремонту, бизнесу, очистке, заказам, инструментам, оформлению, времени и сюжету.",
      readTime: "8 мин чтения",
      tags: ["Достижения", "Steam", "Чек-лист"],
    },
    "restory-chill-electronics-repairs-resolution-settings": {
      category: "Технические настройки",
      eyebrow: "Производительность",
      title: "ReStory: Chill Electronics Repairs — настройки разрешения",
      keyword: "restory: chill electronics repairs настройки разрешения",
      seoTitle: "ReStory: Chill Electronics Repairs — настройки разрешения",
      metaDescription:
        "Настройки разрешения ReStory: Chill Electronics Repairs: VSync, цели 30/60 кадров, оконные режимы, проблемы UltraWide и заметки о запуске.",
      description:
        "Проверьте заметки о VSync, целевой частоте кадров, оконном режиме и проблеме разборки на ультрашироком экране.",
      readTime: "6 мин чтения",
      tags: ["Разрешение", "VSync", "UltraWide"],
    },
    "restory-chill-electronics-repairs-cleaning-guide": {
      category: "Руководство",
      eyebrow: "Рабочий стол",
      title: "ReStory: Chill Electronics Repairs — гайд по очистке",
      keyword: "restory: chill electronics repairs очистка",
      seoTitle: "ReStory: Chill Electronics Repairs — гайд по очистке",
      metaDescription:
        "Гайд по очистке ReStory: Chill Electronics Repairs: место работы, 100 и 1 000 деталей, ультразвуковая ванна и порядок ремонта.",
      description:
        "Разберите устройство, очистите детали, замените неисправный компонент и проверьте цели очистки из Steam.",
      readTime: "6 мин чтения",
      tags: ["Очистка", "Ремонт", "Достижения"],
    },
    "restory-chill-electronics-repairs-endings": {
      category: "Сюжет и достижения",
      eyebrow: "Ветвящийся сюжет",
      title: "ReStory: Chill Electronics Repairs — концовки",
      keyword: "restory: chill electronics repairs концовки",
      seoTitle: "ReStory: Chill Electronics Repairs — концовки",
      metaDescription:
        "Гайд по концовкам ReStory: Chill Electronics Repairs: выборы клиентов, разветвлённый сюжет, несколько концовок и подтверждённые ограничения.",
      description:
        "Отделяйте подтверждённые сюжетные выборы и достижения от неподтверждённых списков концовок и маршрутов.",
      readTime: "6 мин чтения",
      tags: ["Концовки", "Выборы", "Сюжет"],
    },
    "restory-chill-electronics-repairs-internet-plan": {
      category: "Устройства и детали",
      eyebrow: "Браузер эпохи Y2K",
      title: "ReStory: Chill Electronics Repairs — план интернета",
      keyword: "restory: chill electronics repairs план интернета",
      seoTitle: "ReStory: Chill Electronics Repairs — план интернета",
      metaDescription:
        "План интернета ReStory: Chill Electronics Repairs: поиск деталей в браузере эпохи Y2K, онлайн-заказы, счета и подтверждённые сведения.",
      description:
        "Используйте браузер для поиска запчастей и разделяйте подтверждённые функции, типы заказов и неподтверждённые тарифы.",
      readTime: "6 мин чтения",
      tags: ["Интернет", "Заказы", "Детали"],
    },
    "restory-chill-electronics-repairs-atari": {
      category: "Устройства и детали",
      eyebrow: "Лицензированное оборудование",
      title: "ReStory: Chill Electronics Repairs — Atari",
      keyword: "restory: chill electronics repairs Atari",
      seoTitle: "ReStory: Chill Electronics Repairs — Atari",
      metaDescription:
        "Гайд ReStory: Chill Electronics Repairs по Atari: Atari 2600, Atari 2800, CX40, детали разборки и подтверждённые игровые упрощения.",
      description:
        "Соберите подтверждённые заметки об Atari 2600, Atari 2800 и джойстике CX40 без добавления неподтверждённого каталога.",
      readTime: "5 мин чтения",
      tags: ["Atari", "Устройства", "Ремонт"],
    },
    "restory-chill-electronics-repairs-release-date": {
      category: "Дата релиза",
      eyebrow: "Хронология релиза",
      title: "ReStory: Chill Electronics Repairs — дата релиза",
      keyword: "restory: chill electronics repairs дата релиза",
      seoTitle: "ReStory: Chill Electronics Repairs — дата релиза",
      metaDescription:
        "Дата релиза ReStory: Chill Electronics Repairs — 6 августа 2026 года. Сравните Demo, Playtest, полный релиз и изменяющиеся данные Steam.",
      description:
        "Проверьте официальную дату полного релиза и отделите её от Demo, Playtest и последующих обновлений.",
      readTime: "5 мин чтения",
      tags: ["Дата релиза", "Steam", "Хронология"],
    },
    "restory-chill-electronics-repairs-platforms": {
      category: "Платформы",
      eyebrow: "Где играть",
      title: "ReStory: Chill Electronics Repairs — платформы",
      keyword: "restory: chill electronics repairs платформы",
      seoTitle: "ReStory: Chill Electronics Repairs — платформы",
      metaDescription:
        "Платформы ReStory: Chill Electronics Repairs: Steam на Windows и macOS, статус Steam Deck Playable и подтверждённые ограничения страницы.",
      description:
        "Отделяйте подтверждённые платформы Steam и статус Steam Deck от предположений о консолях и мобильных версиях.",
      readTime: "5 мин чтения",
      tags: ["Платформы", "Steam Deck", "macOS"],
    },
    "restory-chill-electronics-repairs-demo": {
      category: "Demo",
      eyebrow: "Пробная версия",
      title: "ReStory: Chill Electronics Repairs — Demo",
      keyword: "restory: chill electronics repairs Demo",
      seoTitle: "ReStory: Chill Electronics Repairs — Demo",
      metaDescription:
        "Гайд по Demo ReStory: Chill Electronics Repairs: дата 15 июня 2026 года, демо-функции, устройства, кастомизация и отличие от полной версии.",
      description:
        "Проверьте, что было подтверждено для Demo, и не переносите её поведение на полный релиз без источника.",
      readTime: "5 мин чтения",
      tags: ["Demo", "Steam", "Функции"],
    },
    "restory-chill-electronics-repairs-price": {
      category: "Цена",
      eyebrow: "Стоимость в Steam",
      title: "ReStory: Chill Electronics Repairs — цена",
      keyword: "restory: chill electronics repairs цена",
      seoTitle: "ReStory: Chill Electronics Repairs — цена",
      metaDescription:
        "Цена ReStory: Chill Electronics Repairs в Steam: проверяйте регион, валюту, скидки, наборы и текущую карточку магазина перед покупкой.",
      description:
        "Смотрите актуальную цену только в официальном Steam-магазине и помечайте региональные и временные изменения.",
      readTime: "5 мин чтения",
      tags: ["Цена", "Steam", "Наборы"],
    },
    "restory-chill-electronics-repairs-system-requirements": {
      category: "Системные требования",
      eyebrow: "Перед установкой",
      title: "ReStory: Chill Electronics Repairs — системные требования",
      keyword: "restory: chill electronics repairs системные требования",
      seoTitle: "ReStory: Chill Electronics Repairs — системные требования",
      metaDescription:
        "Системные требования ReStory: Chill Electronics Repairs: проверенные сведения для Windows и macOS, Steam Deck и неподтверждённые поля.",
      description:
        "Проверяйте только опубликованные требования Steam и отдельно отмечайте поля, которые ещё ожидают подтверждения.",
      readTime: "5 мин чтения",
      tags: ["Требования", "Windows", "macOS"],
    },
    "restory-chill-electronics-repairs-controller-support": {
      category: "Поддержка контроллеров",
      eyebrow: "Управление",
      title: "ReStory: Chill Electronics Repairs — поддержка контроллеров",
      keyword: "restory: chill electronics repairs поддержка контроллеров",
      seoTitle: "ReStory: Chill Electronics Repairs — поддержка контроллеров",
      metaDescription:
        "Поддержка контроллеров ReStory: Chill Electronics Repairs: подтверждённые заметки Steam, Steam Deck, раскладки и известные ограничения.",
      description:
        "Разделяйте статус Steam Deck, настройки Steam Input, сообщения игроков и официально подтверждённое поведение.",
      readTime: "5 мин чтения",
      tags: ["Контроллер", "Steam Deck", "Ввод"],
    },
    "restory-chill-electronics-repairs-language-support": {
      category: "Поддержка языков",
      eyebrow: "Локализация",
      title: "ReStory: Chill Electronics Repairs — языки",
      keyword: "restory: chill electronics repairs поддержка языков",
      seoTitle: "ReStory: Chill Electronics Repairs — языки",
      metaDescription:
        "Поддержка языков ReStory: Chill Electronics Repairs: 9 языков интерфейса и субтитров, сведения Steam и ограничения Demo.",
      description:
        "Проверяйте языки интерфейса и субтитров по официальной карточке Steam и не путайте их с озвучкой.",
      readTime: "5 мин чтения",
      tags: ["Языки", "Субтитры", "Demo"],
    },
    "restory-chill-electronics-repairs-gameplay": {
      category: "Руководство",
      eyebrow: "Основной цикл",
      title: "ReStory: Chill Electronics Repairs — геймплей",
      keyword: "restory: chill electronics repairs геймплей",
      seoTitle: "ReStory: Chill Electronics Repairs — геймплей",
      metaDescription:
        "Геймплей ReStory: Chill Electronics Repairs: разборка, очистка, замена деталей, сборка, магазин, клиенты и браузер эпохи Y2K.",
      description:
        "Разберите основной цикл игры и отделите подтверждённые действия мастерской от неподтверждённых механик.",
      readTime: "6 мин чтения",
      tags: ["Геймплей", "Магазин", "Сюжет"],
    },
    "restory-chill-electronics-repairs-trailer": {
      category: "Официальные материалы",
      eyebrow: "Видео",
      title: "ReStory: Chill Electronics Repairs — трейлер",
      keyword: "restory: chill electronics repairs трейлер",
      seoTitle: "ReStory: Chill Electronics Repairs — трейлер",
      metaDescription:
        "Официальные трейлеры ReStory: Chill Electronics Repairs: Gameplay Trailer, Launch Trailer, устройства, ремонт и ограничения видео.",
      description:
        "Смотрите официальные Gameplay и Launch Trailer и не принимайте кадры из видео за полный список функций.",
      readTime: "5 мин чтения",
      tags: ["Трейлер", "YouTube", "Официально"],
    },
    "restory-chill-electronics-repairs-review": {
      category: "Обзор",
      eyebrow: "Снимок исследования",
      title: "ReStory: Chill Electronics Repairs — обзор",
      keyword: "restory: chill electronics repairs обзор",
      seoTitle: "ReStory: Chill Electronics Repairs — обзор",
      metaDescription:
        "Обзор ReStory: Chill Electronics Repairs на основе официальных материалов: ремонт, магазин, Y2K, сюжет, отзывы Steam и ограничения данных.",
      description:
        "Сопоставьте подтверждённые сильные стороны, динамический снимок Steam и факторы, важные перед покупкой.",
      readTime: "7 мин чтения",
      tags: ["Обзор", "Steam", "Вердикт"],
    },
    "restory-chill-electronics-repairs-mods": {
      category: "Руководство",
      eyebrow: "Статус поддержки",
      title: "ReStory: Chill Electronics Repairs — гайд по модам",
      keyword: "restory: chill electronics repairs моды",
      seoTitle: "ReStory: Chill Electronics Repairs — гайд по модам",
      metaDescription:
        "Статус модов ReStory: Chill Electronics Repairs: Steam Workshop не подтверждён, категория Guides, безопасная проверка и Discord.",
      description:
        "Проверьте отсутствие подтверждённой поддержки Workshop и не публикуйте неизвестные загрузки или установщики.",
      readTime: "4 мин чтения",
      tags: ["Моды", "Workshop", "Поддержка"],
    },
    "restory-chill-electronics-repairs-games-like": {
      category: "Сравнение",
      eyebrow: "Поиск похожих игр",
      title: "Игры, похожие на ReStory: Chill Electronics Repairs",
      keyword: "игры, похожие на ReStory: Chill Electronics Repairs",
      seoTitle: "Игры, похожие на ReStory: Chill Electronics Repairs",
      metaDescription:
        "Как искать игры, похожие на ReStory: Chill Electronics Repairs: ремонт, очистка, управление магазином, сюжет, атмосфера и платформа.",
      description:
        "Сравнивайте похожие игры по конкретным механикам, не превращая алгоритмический список Steam в объективный рейтинг.",
      readTime: "6 мин чтения",
      tags: ["Похожие игры", "Сравнение", "Уютные игры"],
    },
  },
  de: {
    "restory-chill-electronics-repairs-walkthrough": {
      category: "Guide",
      eyebrow: "Erste Schicht",
      title: "ReStory: Chill Electronics Repairs — Einsteiger-Guide",
      seoTitle: "ReStory: Chill Electronics Repairs — Einsteiger-Guide",
      metaDescription:
        "Einsteiger-Guide für ReStory: Chill Electronics Repairs mit dem ersten Auftrag, dem Reparaturkreislauf, Ersatzteilen, Werkstatt und bestätigten Informationen.",
      description:
        "Starte mit dem ersten Auftrag und folge dem Reparaturkreislauf von der Zerlegung bis zur Abgabe des Geräts.",
      readTime: "7 Min. Lesezeit",
      tags: ["Walkthrough", "Werkstatt", "Story"],
    },
    "restory-chill-electronics-repairs-parts-catalog": {
      category: "Geräte und Ersatzteile",
      eyebrow: "Werkstatt-Referenz",
      title: "ReStory: Chill Electronics Repairs — Teilekatalog",
      keyword: "restory: chill electronics repairs Teilekatalog",
      seoTitle: "ReStory: Chill Electronics Repairs — Teilekatalog",
      metaDescription:
        "Teilekatalog für ReStory: Chill Electronics Repairs mit Gerätefamilien, benannter Hardware, Y2K-Browser, Ersatzteilen und Reparaturphasen.",
      description:
        "Finde bestätigte Gerätefamilien, benannte Hardware, Ersatzteilquellen und die einzelnen Phasen des Reparaturablaufs.",
      readTime: "7 Min. Lesezeit",
      tags: ["Geräte", "Ersatzteile", "Katalog"],
    },
    "restory-chill-electronics-repairs-achievements": {
      category: "Steam-Erfolge",
      eyebrow: "Steam-Fortschritt",
      title: "ReStory: Chill Electronics Repairs — Erfolge",
      keyword: "restory: chill electronics repairs Erfolge",
      seoTitle: "ReStory: Chill Electronics Repairs — Erfolge",
      metaDescription:
        "Erfolge-Guide für ReStory: Chill Electronics Repairs mit 50 Steam-Erfolgen, öffentlichen Bedingungen, Reinigung, Aufträgen, Markt und Werkzeugen.",
      description:
        "Verfolge 50 Steam-Erfolge für Reparaturen, Geschäft, Reinigung, Aufträge, Werkzeuge, Anpassung, Zeit, Wettbewerbe und Story.",
      readTime: "8 Min. Lesezeit",
      tags: ["Erfolge", "Steam", "Checkliste"],
    },
    "restory-chill-electronics-repairs-resolution-settings": {
      category: "Technische Einstellungen",
      eyebrow: "Performance",
      title: "ReStory: Chill Electronics Repairs — Auflösungseinstellungen",
      keyword: "restory: chill electronics repairs Auflösungseinstellungen",
      seoTitle: "ReStory: Chill Electronics Repairs — Auflösungseinstellungen",
      metaDescription:
        "Auflösungseinstellungen für ReStory: Chill Electronics Repairs mit VSync, Zielwerten 30/60, Fenstermodi, Ultrawide-Problemen und Startnotizen.",
      description:
        "Prüfe Hinweise zu VSync, Zielbildrate, Fenstermodus und dem Ultrawide-Problem bei der Gerätezerlegung.",
      readTime: "6 Min. Lesezeit",
      tags: ["Auflösung", "VSync", "Ultrawide"],
    },
    "restory-chill-electronics-repairs-cleaning-guide": {
      category: "Guide",
      eyebrow: "Werkbank",
      title: "ReStory: Chill Electronics Repairs — Reinigungs-Guide",
      keyword: "restory: chill electronics repairs Reinigung",
      seoTitle: "ReStory: Chill Electronics Repairs — Reinigungs-Guide",
      metaDescription:
        "Reinigungs-Guide für ReStory: Chill Electronics Repairs mit Werkbank, 100 und 1.000 Teilen, Ultraschallbad und Reparaturablauf.",
      description:
        "Zerlege das Gerät, reinige die Teile, ersetze das fehlerhafte Bauteil und prüfe die bestätigten Reinigungsziele.",
      readTime: "6 Min. Lesezeit",
      tags: ["Reinigung", "Reparatur", "Erfolge"],
    },
    "restory-chill-electronics-repairs-endings": {
      category: "Story und Erfolge",
      eyebrow: "Verzweigte Story",
      title: "ReStory: Chill Electronics Repairs — Enden",
      keyword: "restory: chill electronics repairs Enden",
      seoTitle: "ReStory: Chill Electronics Repairs — Enden",
      metaDescription:
        "Guide zu den Enden von ReStory: Chill Electronics Repairs mit Kundenentscheidungen, verzweigter Story, mehreren Enden und belegten Grenzen.",
      description:
        "Trenne bestätigte Storyentscheidungen und Erfolge von unbelegten Listen zu Enden und Routen.",
      readTime: "6 Min. Lesezeit",
      tags: ["Enden", "Entscheidungen", "Story"],
    },
    "restory-chill-electronics-repairs-internet-plan": {
      category: "Geräte und Ersatzteile",
      eyebrow: "Y2K-Browser",
      title: "ReStory: Chill Electronics Repairs — Internetplan",
      keyword: "restory: chill electronics repairs Internetplan",
      seoTitle: "ReStory: Chill Electronics Repairs — Internetplan",
      metaDescription:
        "Internetplan für ReStory: Chill Electronics Repairs mit Ersatzteilsuche im Y2K-Browser, Online-Aufträgen, Rechnungen und bestätigten Angaben.",
      description:
        "Nutze den Browser zur Ersatzteilsuche und trenne bestätigte Funktionen, Auftragstypen und unbelegte Tarifangaben.",
      readTime: "6 Min. Lesezeit",
      tags: ["Internet", "Aufträge", "Ersatzteile"],
    },
    "restory-chill-electronics-repairs-atari": {
      category: "Geräte und Ersatzteile",
      eyebrow: "Lizenziertes Gerät",
      title: "ReStory: Chill Electronics Repairs — Atari",
      keyword: "restory: chill electronics repairs Atari",
      seoTitle: "ReStory: Chill Electronics Repairs — Atari",
      metaDescription:
        "Atari-Guide für ReStory: Chill Electronics Repairs mit Atari 2600, Atari 2800, CX40, Zerlegungsteilen und belegten Vereinfachungen.",
      description:
        "Sammle bestätigte Hinweise zu Atari 2600, Atari 2800 und CX40, ohne einen unbelegten Katalog zu ergänzen.",
      readTime: "5 Min. Lesezeit",
      tags: ["Atari", "Geräte", "Reparatur"],
    },
    "restory-chill-electronics-repairs-release-date": {
      category: "Veröffentlichungsdatum",
      eyebrow: "Release-Chronologie",
      title: "ReStory: Chill Electronics Repairs — Veröffentlichungsdatum",
      keyword: "restory: chill electronics repairs Veröffentlichungsdatum",
      seoTitle: "ReStory: Chill Electronics Repairs — Veröffentlichungsdatum",
      metaDescription:
        "Das Veröffentlichungsdatum von ReStory: Chill Electronics Repairs ist der 6. August 2026. Vergleiche Demo, Playtest, Release und Steam-Daten.",
      description:
        "Prüfe das offizielle Datum der Vollversion und trenne es von Demo, Playtest und späteren Updates.",
      readTime: "5 Min. Lesezeit",
      tags: ["Release", "Steam", "Chronologie"],
    },
    "restory-chill-electronics-repairs-platforms": {
      category: "Plattformen",
      eyebrow: "Wo du spielen kannst",
      title: "ReStory: Chill Electronics Repairs — Plattformen",
      keyword: "restory: chill electronics repairs Plattformen",
      seoTitle: "ReStory: Chill Electronics Repairs — Plattformen",
      metaDescription:
        "Plattformen von ReStory: Chill Electronics Repairs: Steam für Windows und macOS, Steam-Deck-Status Playable und belegte Grenzen.",
      description:
        "Trenne bestätigte Steam-Plattformen und den Steam-Deck-Status von Annahmen über Konsolen und Mobilversionen.",
      readTime: "5 Min. Lesezeit",
      tags: ["Plattformen", "Steam Deck", "macOS"],
    },
    "restory-chill-electronics-repairs-demo": {
      category: "Demo",
      eyebrow: "Testversion",
      title: "ReStory: Chill Electronics Repairs — Demo",
      keyword: "restory: chill electronics repairs Demo",
      seoTitle: "ReStory: Chill Electronics Repairs — Demo",
      metaDescription:
        "Demo-Guide für ReStory: Chill Electronics Repairs mit dem Datum 15. Juni 2026, Demo-Funktionen, Geräten, Anpassung und Vollversion.",
      description:
        "Prüfe, was für die Demo bestätigt wurde, und übertrage ihr Verhalten nicht ohne Quelle auf die Vollversion.",
      readTime: "5 Min. Lesezeit",
      tags: ["Demo", "Steam", "Funktionen"],
    },
    "restory-chill-electronics-repairs-price": {
      category: "Preis",
      eyebrow: "Steam-Kosten",
      title: "ReStory: Chill Electronics Repairs — Preis",
      keyword: "restory: chill electronics repairs Preis",
      seoTitle: "ReStory: Chill Electronics Repairs — Preis",
      metaDescription:
        "Preis von ReStory: Chill Electronics Repairs auf Steam: Prüfe Region, Währung, Rabatte, Bundles und die aktuelle Shopseite.",
      description:
        "Prüfe den aktuellen Preis ausschließlich im offiziellen Steam-Shop und markiere regionale oder zeitliche Änderungen.",
      readTime: "5 Min. Lesezeit",
      tags: ["Preis", "Steam", "Bundles"],
    },
    "restory-chill-electronics-repairs-system-requirements": {
      category: "Systemanforderungen",
      eyebrow: "Vor der Installation",
      title: "ReStory: Chill Electronics Repairs — Systemanforderungen",
      keyword: "restory: chill electronics repairs Systemanforderungen",
      seoTitle: "ReStory: Chill Electronics Repairs — Systemanforderungen",
      metaDescription:
        "Systemanforderungen für ReStory: Chill Electronics Repairs mit belegten Angaben für Windows, macOS, Steam Deck und offenen Feldern.",
      description:
        "Verwende nur veröffentlichte Steam-Anforderungen und markiere Felder, die noch auf eine Bestätigung warten.",
      readTime: "5 Min. Lesezeit",
      tags: ["Anforderungen", "Windows", "macOS"],
    },
    "restory-chill-electronics-repairs-controller-support": {
      category: "Controller Support",
      eyebrow: "Steuerung",
      title: "ReStory: Chill Electronics Repairs — Controller Support",
      keyword: "restory: chill electronics repairs Controller Support",
      seoTitle: "ReStory: Chill Electronics Repairs — Controller Support",
      metaDescription:
        "Controller Support für ReStory: Chill Electronics Repairs mit Steam-Notizen, Steam Deck, Belegungen und bekannten Einschränkungen.",
      description:
        "Trenne Steam-Deck-Status, Steam-Input-Einstellungen, Spielermeldungen und offiziell bestätigtes Verhalten.",
      readTime: "5 Min. Lesezeit",
      tags: ["Controller", "Steam Deck", "Eingabe"],
    },
    "restory-chill-electronics-repairs-language-support": {
      category: "Sprachunterstützung",
      eyebrow: "Lokalisierung",
      title: "ReStory: Chill Electronics Repairs — Sprachen",
      keyword: "restory: chill electronics repairs Sprachunterstützung",
      seoTitle: "ReStory: Chill Electronics Repairs — Sprachen",
      metaDescription:
        "Sprachunterstützung von ReStory: Chill Electronics Repairs: 9 Sprachen für Oberfläche und Untertitel, Steam-Angaben und Demo-Grenzen.",
      description:
        "Prüfe die Sprachen für Oberfläche und Untertitel auf der offiziellen Steam-Seite und verwechsle sie nicht mit Sprachausgabe.",
      readTime: "5 Min. Lesezeit",
      tags: ["Sprachen", "Untertitel", "Demo"],
    },
    "restory-chill-electronics-repairs-gameplay": {
      category: "Guide",
      eyebrow: "Grundablauf",
      title: "ReStory: Chill Electronics Repairs — Gameplay",
      keyword: "restory: chill electronics repairs Gameplay",
      seoTitle: "ReStory: Chill Electronics Repairs — Gameplay",
      metaDescription:
        "Gameplay von ReStory: Chill Electronics Repairs mit Zerlegen, Reinigen, Teiletausch, Zusammenbau, Laden, Kunden und Y2K-Browser.",
      description:
        "Erkläre den grundlegenden Ablauf und trenne bestätigte Werkstattaktionen von unbelegten Mechaniken.",
      readTime: "6 Min. Lesezeit",
      tags: ["Gameplay", "Laden", "Story"],
    },
    "restory-chill-electronics-repairs-trailer": {
      category: "Offizielle Medien",
      eyebrow: "Video",
      title: "ReStory: Chill Electronics Repairs — Trailer",
      keyword: "restory: chill electronics repairs Trailer",
      seoTitle: "ReStory: Chill Electronics Repairs — Trailer",
      metaDescription:
        "Offizielle Trailer zu ReStory: Chill Electronics Repairs: Gameplay Trailer, Launch Trailer, Geräte, Reparatur und Grenzen von Videos.",
      description:
        "Sieh dir die offiziellen Gameplay- und Launch-Trailer an und behandle Videobilder nicht als vollständige Feature-Liste.",
      readTime: "5 Min. Lesezeit",
      tags: ["Trailer", "YouTube", "Offiziell"],
    },
    "restory-chill-electronics-repairs-review": {
      category: "Review",
      eyebrow: "Recherche-Snapshot",
      title: "ReStory: Chill Electronics Repairs — Review",
      keyword: "restory: chill electronics repairs Review",
      seoTitle: "ReStory: Chill Electronics Repairs — Review",
      metaDescription:
        "Review von ReStory: Chill Electronics Repairs auf Basis offizieller Quellen: Reparatur, Laden, Y2K, Story, Steam-Reviews und Datenlimits.",
      description:
        "Vergleiche belegte Stärken, den dynamischen Steam-Snapshot und wichtige Faktoren vor dem Kauf.",
      readTime: "7 Min. Lesezeit",
      tags: ["Review", "Steam", "Fazit"],
    },
    "restory-chill-electronics-repairs-mods": {
      category: "Guide",
      eyebrow: "Supportstatus",
      title: "ReStory: Chill Electronics Repairs — Mods-Guide",
      keyword: "restory: chill electronics repairs Mods",
      seoTitle: "ReStory: Chill Electronics Repairs — Mods-Guide",
      metaDescription:
        "Modstatus von ReStory: Chill Electronics Repairs: Steam Workshop nicht bestätigt, Guides-Kategorie, sichere Prüfung und Discord.",
      description:
        "Prüfe den fehlenden bestätigten Workshop-Support und veröffentliche keine unbekannten Downloads oder Installer.",
      readTime: "4 Min. Lesezeit",
      tags: ["Mods", "Workshop", "Support"],
    },
    "restory-chill-electronics-repairs-games-like": {
      category: "Vergleich",
      eyebrow: "Ähnliche Spiele finden",
      title: "Spiele wie ReStory: Chill Electronics Repairs",
      keyword: "Spiele wie ReStory: Chill Electronics Repairs",
      seoTitle: "Spiele wie ReStory: Chill Electronics Repairs",
      metaDescription:
        "So findest du Spiele wie ReStory: Chill Electronics Repairs: Reparatur, Reinigung, Ladenverwaltung, Story, Atmosphäre und Plattform.",
      description:
        "Vergleiche ähnliche Spiele nach konkreten Mechaniken und behandle Steam-Vorschläge nicht als objektives Ranking.",
      readTime: "6 Min. Lesezeit",
      tags: ["Ähnliche Spiele", "Vergleich", "Cozy"],
    },
  },
  ja: {
    "restory-chill-electronics-repairs-walkthrough": {
      category: "攻略",
      eyebrow: "最初の勤務",
      title: "リ・ストーリー: 思い出修理屋 — 初心者ガイド",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 初心者ガイド",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の初心者ガイド。最初の依頼、修理の基本ループ、交換部品、店の管理、Steam版の確認済み情報をまとめます。",
      description:
        "最初の依頼から修理の基本ループまで、ゲームの進め方をわかりやすく紹介します。",
      readTime: "7分で読める",
      tags: ["初心者", "修理店", "物語"],
    },
    "restory-chill-electronics-repairs-parts-catalog": {
      category: "デバイスと部品",
      eyebrow: "修理店リファレンス",
      title: "リ・ストーリー: 思い出修理屋 — 部品カタログ",
      keyword: "リ・ストーリー: 思い出修理屋 部品カタログ",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 部品カタログ",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の部品カタログ。デバイスの種類、確認済みの機器、Y2Kブラウザ、交換部品、修理段階を整理します。",
      description:
        "確認できるデバイスの種類、機器名、部品の入手先、修理の各段階をリファレンスとしてまとめます。",
      readTime: "7分で読める",
      tags: ["デバイス", "部品", "カタログ"],
    },
    "restory-chill-electronics-repairs-achievements": {
      category: "Steam実績",
      eyebrow: "Steamの進行",
      title: "リ・ストーリー: 思い出修理屋 — 実績",
      keyword: "リ・ストーリー: 思い出修理屋 実績",
      seoTitle: "リ・ストーリー: 思い出修理屋 — Steam実績",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の実績ガイド。Steam実績50個の公開条件、清掃、依頼、マーケット、道具、ストーリーを整理します。",
      description:
        "修理、店の進行、清掃、依頼、道具、カスタマイズ、時間、競技、ストーリーの実績を確認できます。",
      readTime: "8分で読める",
      tags: ["実績", "Steam", "チェックリスト"],
    },
    "restory-chill-electronics-repairs-resolution-settings": {
      category: "技術設定",
      eyebrow: "パフォーマンス",
      title: "リ・ストーリー: 思い出修理屋 — 解像度設定",
      keyword: "リ・ストーリー: 思い出修理屋 解像度設定",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 解像度設定",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の解像度設定。VSync、30/60の目標値、ウィンドウモード、ウルトラワイド問題を確認します。",
      description:
        "VSync、目標フレームレート、ウィンドウモード、ウルトラワイドでの分解問題に関する情報をまとめます。",
      readTime: "6分で読める",
      tags: ["解像度", "VSync", "ウルトラワイド"],
    },
    "restory-chill-electronics-repairs-cleaning-guide": {
      category: "攻略",
      eyebrow: "作業台",
      title: "リ・ストーリー: 思い出修理屋 — 清掃ガイド",
      keyword: "リ・ストーリー: 思い出修理屋 清掃ガイド",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 清掃ガイド",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の清掃ガイド。作業場所、部品100個と1,000個、超音波洗浄機、修理の順番を確認します。",
      description:
        "デバイスを分解し、部品を清掃し、故障部品を交換して、Steamで確認できる清掃目標を進めます。",
      readTime: "6分で読める",
      tags: ["清掃", "修理", "実績"],
    },
    "restory-chill-electronics-repairs-endings": {
      category: "物語と実績",
      eyebrow: "分岐する物語",
      title: "リ・ストーリー: 思い出修理屋 — エンディング",
      keyword: "リ・ストーリー: 思い出修理屋 エンディング",
      seoTitle: "リ・ストーリー: 思い出修理屋 — エンディング",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のエンディングガイド。お客さんの選択、分岐する物語、複数の結末、確認できる範囲を整理します。",
      description:
        "確認できる物語の選択と実績を、根拠のないエンディング一覧やルート情報と分けて整理します。",
      readTime: "6分で読める",
      tags: ["エンディング", "選択", "物語"],
    },
    "restory-chill-electronics-repairs-internet-plan": {
      category: "デバイスと部品",
      eyebrow: "Y2Kブラウザ",
      title: "リ・ストーリー: 思い出修理屋 — インターネットプラン",
      keyword: "リ・ストーリー: 思い出修理屋 インターネットプラン",
      seoTitle: "リ・ストーリー: 思い出修理屋 — インターネットプラン",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のインターネットプラン。Y2Kブラウザでの部品検索、オンライン依頼、請求、確認済み情報を整理します。",
      description:
        "ブラウザで交換部品を探し、確認済みの機能、依頼の種類、根拠のない料金情報を分けて扱います。",
      readTime: "6分で読める",
      tags: ["インターネット", "依頼", "部品"],
    },
    "restory-chill-electronics-repairs-atari": {
      category: "デバイスと部品",
      eyebrow: "ライセンス機器",
      title: "リ・ストーリー: 思い出修理屋 — Atari",
      keyword: "リ・ストーリー: 思い出修理屋 Atari",
      seoTitle: "リ・ストーリー: 思い出修理屋 — Atari",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のAtariガイド。Atari 2600、Atari 2800、CX40、分解部品、ゲーム内の簡略化を確認します。",
      description:
        "Atari 2600、Atari 2800、CX40ジョイスティックについて確認できる情報だけを整理します。",
      readTime: "5分で読める",
      tags: ["Atari", "デバイス", "修理"],
    },
    "restory-chill-electronics-repairs-release-date": {
      category: "発売日",
      eyebrow: "リリース時系列",
      title: "リ・ストーリー: 思い出修理屋 — 発売日",
      keyword: "リ・ストーリー: 思い出修理屋 発売日",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 発売日",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の発売日は2026年8月6日。Demo、Playtest、正式版、変動するSteam情報を分けて確認します。",
      description:
        "正式版の公式発売日を確認し、Demo、Playtest、その後のアップデートと混同しないように整理します。",
      readTime: "5分で読める",
      tags: ["発売日", "Steam", "時系列"],
    },
    "restory-chill-electronics-repairs-platforms": {
      category: "プラットフォーム",
      eyebrow: "どこで遊べるか",
      title: "リ・ストーリー: 思い出修理屋 — 対応プラットフォーム",
      keyword: "リ・ストーリー: 思い出修理屋 対応プラットフォーム",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 対応プラットフォーム",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の対応プラットフォーム。WindowsとmacOSのSteam版、Steam DeckのPlayable表示、確認済みの範囲を整理します。",
      description:
        "Steamの対応プラットフォームとSteam Deckの状態を、コンソール版やモバイル版の推測と分けて確認します。",
      readTime: "5分で読める",
      tags: ["プラットフォーム", "Steam Deck", "macOS"],
    },
    "restory-chill-electronics-repairs-demo": {
      category: "Demo",
      eyebrow: "体験版",
      title: "リ・ストーリー: 思い出修理屋 — Demo",
      keyword: "リ・ストーリー: 思い出修理屋 Demo",
      seoTitle: "リ・ストーリー: 思い出修理屋 — Demo",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のDemoガイド。2026年6月15日、体験版の機能、デバイス、カスタマイズ、正式版との差を確認します。",
      description:
        "Demoで確認できた内容を整理し、ソースがない状態で正式版の動作へ広げないようにします。",
      readTime: "5分で読める",
      tags: ["Demo", "Steam", "機能"],
    },
    "restory-chill-electronics-repairs-price": {
      category: "価格",
      eyebrow: "Steamの料金",
      title: "リ・ストーリー: 思い出修理屋 — 価格",
      keyword: "リ・ストーリー: 思い出修理屋 価格",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 価格",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のSteam価格。購入前に地域、通貨、セール、バンドル、現在のストア表示を確認します。",
      description:
        "現在の価格は公式Steamストアで確認し、地域や期間による変化を明記します。",
      readTime: "5分で読める",
      tags: ["価格", "Steam", "バンドル"],
    },
    "restory-chill-electronics-repairs-system-requirements": {
      category: "システム要件",
      eyebrow: "インストール前に",
      title: "リ・ストーリー: 思い出修理屋 — システム要件",
      keyword: "リ・ストーリー: 思い出修理屋 システム要件",
      seoTitle: "リ・ストーリー: 思い出修理屋 — システム要件",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のシステム要件。Windows、macOS、Steam Deckの確認済み情報と、まだ確認できない項目を整理します。",
      description:
        "Steamで公開されている要件だけを使い、確認待ちの項目は別に表示します。",
      readTime: "5分で読める",
      tags: ["要件", "Windows", "macOS"],
    },
    "restory-chill-electronics-repairs-controller-support": {
      category: "コントローラー対応",
      eyebrow: "操作方法",
      title: "リ・ストーリー: 思い出修理屋 — コントローラー対応",
      keyword: "リ・ストーリー: 思い出修理屋 コントローラー対応",
      seoTitle: "リ・ストーリー: 思い出修理屋 — コントローラー対応",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のコントローラー対応。Steamの記載、Steam Deck、入力設定、確認できる制限を整理します。",
      description:
        "Steam Deckの表示、Steam Inputの設定、プレイヤー報告、公式に確認できた動作を分けて扱います。",
      readTime: "5分で読める",
      tags: ["コントローラー", "Steam Deck", "入力"],
    },
    "restory-chill-electronics-repairs-language-support": {
      category: "言語対応",
      eyebrow: "ローカライズ",
      title: "リ・ストーリー: 思い出修理屋 — 対応言語",
      keyword: "リ・ストーリー: 思い出修理屋 対応言語",
      seoTitle: "リ・ストーリー: 思い出修理屋 — 対応言語",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の対応言語。インターフェースと字幕9言語、Steamの記載、Demoの範囲を確認します。",
      description:
        "公式Steamページのインターフェースと字幕の言語を確認し、音声対応とは分けて扱います。",
      readTime: "5分で読める",
      tags: ["言語", "字幕", "Demo"],
    },
    "restory-chill-electronics-repairs-gameplay": {
      category: "攻略",
      eyebrow: "基本ループ",
      title: "リ・ストーリー: 思い出修理屋 — ゲームプレイ",
      keyword: "リ・ストーリー: 思い出修理屋 ゲームプレイ",
      seoTitle: "リ・ストーリー: 思い出修理屋 — ゲームプレイ",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のゲームプレイ。分解、清掃、部品交換、組み立て、店、お客さん、Y2Kブラウザを説明します。",
      description:
        "ゲームの基本ループを確認し、作業台で確認できる行動と根拠のない仕組みを分けて整理します。",
      readTime: "6分で読める",
      tags: ["ゲームプレイ", "店", "物語"],
    },
    "restory-chill-electronics-repairs-trailer": {
      category: "公式メディア",
      eyebrow: "動画",
      title: "リ・ストーリー: 思い出修理屋 — トレーラー",
      keyword: "リ・ストーリー: 思い出修理屋 トレーラー",
      seoTitle: "リ・ストーリー: 思い出修理屋 — トレーラー",
      metaDescription:
        "リ・ストーリー: 思い出修理屋の公式トレーラー。Gameplay Trailer、Launch Trailer、デバイス、修理、動画で分かる範囲を整理します。",
      description:
        "公式GameplayとLaunch Trailerを確認し、動画の場面を機能の完全な一覧として扱わないようにします。",
      readTime: "5分で読める",
      tags: ["トレーラー", "YouTube", "公式"],
    },
    "restory-chill-electronics-repairs-review": {
      category: "レビュー",
      eyebrow: "調査スナップショット",
      title: "リ・ストーリー: 思い出修理屋 — レビュー",
      keyword: "リ・ストーリー: 思い出修理屋 レビュー",
      seoTitle: "リ・ストーリー: 思い出修理屋 — レビュー",
      metaDescription:
        "公式資料をもとにしたリ・ストーリー: 思い出修理屋レビュー。修理、店、Y2K、物語、Steamレビュー、データの注意点を確認します。",
      description:
        "確認できる長所、変動するSteamスナップショット、購入前に重要な点を照らし合わせます。",
      readTime: "7分で読める",
      tags: ["レビュー", "Steam", "結論"],
    },
    "restory-chill-electronics-repairs-mods": {
      category: "攻略",
      eyebrow: "対応状況",
      title: "リ・ストーリー: 思い出修理屋 — Modガイド",
      keyword: "リ・ストーリー: 思い出修理屋 Mod",
      seoTitle: "リ・ストーリー: 思い出修理屋 — Modガイド",
      metaDescription:
        "リ・ストーリー: 思い出修理屋のMod対応状況。Steam Workshopは未確認、Guidesのカテゴリー、安全な確認方法、Discordを整理します。",
      description:
        "Workshop対応が確認されていないことを説明し、不明なダウンロードやインストーラーを掲載しません。",
      readTime: "4分で読める",
      tags: ["Mod", "Workshop", "対応状況"],
    },
    "restory-chill-electronics-repairs-games-like": {
      category: "比較",
      eyebrow: "似たゲームを探す",
      title: "リ・ストーリー: 思い出修理屋に似たゲーム",
      keyword: "リ・ストーリー: 思い出修理屋に似たゲーム",
      seoTitle: "リ・ストーリー: 思い出修理屋に似たゲーム",
      metaDescription:
        "リ・ストーリー: 思い出修理屋に似たゲームの探し方。修理、清掃、店の管理、物語、雰囲気、プラットフォームで比較します。",
      description:
        "Steamの候補を客観的なランキングにせず、具体的なゲームシステムで比較します。",
      readTime: "6分で読める",
      tags: ["似たゲーム", "比較", "居心地のよいゲーム"],
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
      "Start the ReStory: Chill Electronics Repairs walkthrough by treating each job as the same repair loop: accept a customer device, disassemble it, clean the separated parts, replace the faulty component, reassemble the device, and deliver the order. The shop also involves money management, a Y2K-era browser for spare parts, offline or online requests, and customer choices that connect repairs to the branching story. For a reliable first playthrough, record the customer request, device category, faulty part, source for the spare, and whether the order was offline or online.",
    points: [
      "Accept the customer device and read the request.",
      "Disassemble, clean, replace the faulty part, then reassemble.",
      "Use the Y2K-era browser for spare-part research and online requests.",
      "Record the customer request, device, faulty part, spare source, and order type.",
    ],
  },
  "restory-chill-electronics-repairs-cleaning-guide": {
    summary:
      "Cleaning belongs between disassembly and faulty-part replacement in the ReStory: Chill Electronics Repairs repair loop. Separate the device, clean the exposed parts, replace the faulty component, and reassemble the order before delivery. The public achievement list confirms cumulative targets for cleaning the workspace, 100 parts, and 1,000 parts, and it identifies the automatic ultrasonic bath as part of the cleaning system. Track the device, part, tool, and repair stage when a cleaning action does not register.",
    points: [
      "Disassemble before starting the cleaning stage.",
      "Clean the separated parts before replacing the faulty component.",
      "Track the workspace, 100-part, and 1,000-part cleaning goals.",
      "Record the device, part, tool, and repair stage if cleaning does not register.",
    ],
  },
  "restory-chill-electronics-repairs-parts-catalog": {
    summary:
      "The ReStory: Chill Electronics Repairs parts catalog is a research reference for device families and named hardware. The confirmed game loop combines device disassembly, cleaning, faulty-part replacement, reassembly, money management, and a Y2K-era browser used to search for supplies. For each job, record the device, customer request, suspected faulty component, browser or shop source, and whether the order was offline or online.",
    points: [
      "Use the browser and shop systems to research spare parts.",
      "Separate confirmed hardware from incomplete inventory fields.",
      "Record device, faulty component, source, and order type for each job.",
      "Record the device, faulty component, source, and order type for each job.",
    ],
  },
  "restory-chill-electronics-repairs-achievements": {
    summary:
      "ReStory: Chill Electronics Repairs has 50 Steam Achievements, and the safest way to use the achievement guide is to group them by the activity they confirm. The public list covers repairs, shop and business progress, cleaning, orders, tools, customization, time, assembly competitions, and story. It confirms cumulative cleaning goals, email-order milestones, and competition achievements. Track achievements alongside normal repair jobs, and record the exact in-game context when an achievement depends on a customer choice, device type, competition, or shop upgrade.",
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
  if (locale === defaultLocale) return guide;
  const override = localizedGuideOverrides[locale]?.[slug];
  return override ? { ...guide, ...override } : undefined;
}

export function hasLocalizedGuide(locale: Locale, slug: string): boolean {
  return locale === defaultLocale || Boolean(localizedGuideOverrides[locale]?.[slug]);
}

export function getGuideLocales(slug: string): Locale[] {
  return locales.filter((locale) => hasLocalizedGuide(locale, slug));
}
