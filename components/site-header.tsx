import Link from "next/link";
import { getLocaleCopy, locales, localizedPagePath, localizedPath, siteConfig, type Locale } from "@/lib/site-data";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  locale: Locale;
  currentPath: string;
};

const navItems = [
  { key: "home", href: "/", icon: "⌂" },
  { key: "guides", href: "/guides", icon: "◉" },
  { key: "devices", href: "/guides/restory-chill-electronics-repairs-parts-catalog", icon: "◈" },
  { key: "achievements", href: "/guides/restory-chill-electronics-repairs-achievements", icon: "★" },
  { key: "updates", href: "/guides/restory-chill-electronics-repairs-resolution-settings", icon: "◷" },
  { key: "beginner", href: "/guides/restory-chill-electronics-repairs-walkthrough", icon: "✦" },
] as const;

export function SiteHeader({ locale, currentPath }: SiteHeaderProps) {
  const copy = getLocaleCopy(locale);
  const inputId = `nav-toggle-${locale}`;
  const visibleNavItems = navItems.filter((item) => locale === "en" || item.key === "home" || item.key === "guides" || item.key === "beginner");

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href={localizedPath(locale, "/")}>
          <img src="/favicon.png" alt={copy.accessibility.logoAlt} width="30" height="30" className="pixel" />
          <span>
            ReStory
            <span className="sub">{copy.labels.brandSubtitle}</span>
          </span>
        </Link>

        <input id={inputId} className="nav-toggle vh" type="checkbox" />
        <label className="menu-btn" htmlFor={inputId}>
          ☰ {copy.nav.menu}
        </label>

        <nav className="nav" aria-label={copy.accessibility.primaryNav}>
          {visibleNavItems.map((item) => {
            const label = copy.nav[item.key];
            const isCurrent = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);
            return (
              <Link key={item.key} href={localizedPath(locale, item.href)} aria-current={isCurrent ? "page" : undefined}>
                <span className="i" aria-hidden="true">
                  {item.icon}
                </span>
                {label}
              </Link>
            );
          })}
        </nav>

        <details className="lang">
          <summary aria-label={copy.accessibility.changeLanguage}>
            <span aria-hidden="true">🌐</span>
            <span>{copy.languageName}</span>
          </summary>
          <div className="lang-menu">
            {locales.map((targetLocale) => {
              return (
                <Link key={targetLocale} href={localizedPagePath(targetLocale, currentPath)} aria-current={targetLocale === locale}>
                  <span>{copy.languageNames[targetLocale]}</span>
                  <span className="en">{targetLocale.toUpperCase()}</span>
                </Link>
              );
            })}
          </div>
        </details>

        <ThemeToggle label={`${copy.labels.theme}: ${copy.labels.dark}`} darkText={copy.labels.dark} lightText={copy.labels.light} />
      </div>
    </header>
  );
}

export const reStoryOfficialLinks = siteConfig.official;
