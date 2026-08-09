import Link from "next/link";
import { guideMeta, getLocaleCopy, localizedPath, siteConfig, type Locale } from "@/lib/site-data";

type WikiSidebarProps = {
  locale: Locale;
  activeSlug?: string;
};

export function WikiSidebar({ locale, activeSlug }: WikiSidebarProps) {
  const copy = getLocaleCopy(locale);
  const sidebarItems = [
    { href: "/guides", label: copy.nav.guides, icon: "◉", slug: undefined },
    { href: "/guides/restory-chill-electronics-repairs-walkthrough", label: copy.nav.beginner, icon: "✦", slug: "restory-chill-electronics-repairs-walkthrough" },
    { href: "/guides/restory-chill-electronics-repairs-parts-catalog", label: copy.nav.devices, icon: "◈", slug: "restory-chill-electronics-repairs-parts-catalog" },
    { href: "/guides/restory-chill-electronics-repairs-achievements", label: copy.nav.achievements, icon: "★", slug: "restory-chill-electronics-repairs-achievements" },
    { href: "/guides/restory-chill-electronics-repairs-resolution-settings", label: copy.nav.updates, icon: "◷", slug: "restory-chill-electronics-repairs-resolution-settings" },
  ];

  return (
    <aside className="wiki-side">
      <nav aria-label="Wiki sections">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={localizedPath(locale, item.href)} aria-current={activeSlug === item.slug ? "page" : undefined}>
            <span className="i" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-card">
        <span className="section-kicker">{copy.labels.codes}</span>
        <h3>{copy.labels.codes}</h3>
        <p>{siteConfig.sidebarCodes[0]}</p>
        <small>{copy.home.codeDescription}</small>
      </div>

      <div className="sidebar-card sidebar-card--muted">
        <span className="section-kicker">{copy.labels.official}</span>
        <a href={siteConfig.official.website} target="_blank" rel="noreferrer">
          tinyBuild game page ↗
        </a>
        <a href={siteConfig.official.discord} target="_blank" rel="noreferrer">
          Official Discord ↗
        </a>
      </div>

      {activeSlug && guideMeta.find((guide) => guide.slug === activeSlug) ? (
        <p className="sidebar-note">{copy.labels.lastUpdated}: Aug 2026</p>
      ) : null}
    </aside>
  );
}
