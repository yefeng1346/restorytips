import Link from "next/link";
import { getLocaleCopy, hasLocalizedGuide, localizedPath, siteConfig, type Locale } from "@/lib/site-data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const about = {
    en: "ReStory: Chill Electronics Repairs Wiki is an independent fan-made guide for the Steam game. It organizes repair walkthroughs, device notes, story choices, achievements, and known issues. It is not affiliated with Mandragora, tinyBuild, or Valve.",
    ru: "ReStory: Chill Electronics Repairs Wiki — независимый фанатский справочник по игре в Steam. Здесь собраны ремонты, устройства, сюжетные решения, достижения и известные проблемы. Wiki не связана с Mandragora, tinyBuild или Valve.",
    de: "Die ReStory: Chill Electronics Repairs Wiki ist ein unabhängiger Fan-Leitfaden zum Steam-Spiel. Sie sammelt Reparaturen, Geräte, Story-Entscheidungen, Erfolge und bekannte Probleme. Keine Verbindung zu Mandragora, tinyBuild oder Valve.",
    ja: "リ・ストーリー: 思い出修理屋 Wiki はSteam版のための独立したファンガイドです。修理手順、デバイス、物語の選択、実績、既知の問題を整理しています。Mandragora、tinyBuild、Valveとは提携していません。",
  }[locale];

  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <Link className="brand" href={localizedPath(locale, "/")}>
            <img src="/favicon.png" alt={copy.accessibility.logoAlt} width="30" height="30" loading="lazy" className="pixel" />
            <span>
              ReStory
              <span className="sub">{copy.labels.brandSubtitle}</span>
            </span>
          </Link>
          <p className="footer-about">{about}</p>
          <p className="footer-description">{copy.footerDescription}</p>
        </div>
        <div>
          <h4>{copy.nav.guides}</h4>
          <Link href={localizedPath(locale, "/guides")}>{copy.nav.guides}</Link>
          {[
            { slug: "restory-chill-electronics-repairs-walkthrough", href: "/guides/restory-chill-electronics-repairs-walkthrough", label: copy.nav.beginner },
            { slug: "restory-chill-electronics-repairs-parts-catalog", href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: copy.nav.devices },
            { slug: "restory-chill-electronics-repairs-achievements", href: "/guides/restory-chill-electronics-repairs-achievements", label: copy.nav.achievements },
            { slug: "restory-chill-electronics-repairs-resolution-settings", href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: copy.nav.updates },
          ].filter((item) => hasLocalizedGuide(locale, item.slug)).map((item) => (
            <Link key={item.slug} href={localizedPath(locale, item.href)}>{item.label}</Link>
          ))}
        </div>
        <div>
          <h4>{copy.labels.official}</h4>
          <a href={siteConfig.official.website} target="_blank" rel="noreferrer">tinyBuild ↗</a>
          <a href={siteConfig.official.steam} target="_blank" rel="noreferrer">{copy.labels.steamStore} ↗</a>
          <a href={siteConfig.official.discord} target="_blank" rel="noreferrer">{copy.labels.officialDiscord} ↗</a>
          <a href={siteConfig.official.youtube} target="_blank" rel="noreferrer">{copy.labels.officialYoutube} ↗</a>
          <Link href={localizedPath(locale, "/privacy")}>{copy.labels.privacy}</Link>
          <Link href={localizedPath(locale, "/terms")}>{copy.labels.terms}</Link>
        </div>
      </div>
      <div className="wrap">
        <p className="foot-note">{copy.footerNote}</p>
      </div>
    </footer>
  );
}
