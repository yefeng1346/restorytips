import Link from "next/link";
import { getLocaleCopy, localizedPath, siteConfig, type Locale } from "@/lib/site-data";

export function Taskbar({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);

  return (
    <div className="taskbar" role="navigation" aria-label={copy.accessibility.taskbar}>
      <Link className="start" href={localizedPath(locale, "/")}>
        <img src="/favicon.png" alt={copy.accessibility.logoAlt} width="18" height="18" loading="lazy" className="pixel" />
        <span>ReStory</span>
      </Link>
      <div className="tasks">
        <Link className="task" href={localizedPath(locale, "/guides")}>◉ {copy.nav.guides}</Link>
        {locale === "en" ? <Link className="task" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-parts-catalog")}>◈ {copy.nav.devices}</Link> : null}
        <Link className="task" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-walkthrough")}>✦ {copy.nav.beginner}</Link>
      </div>
      <div className="tray">
        <span className="dot" title={copy.labels.live} />
        <span className="mono">{copy.currentDate}</span>
        <span className="mono" aria-hidden="true">{siteConfig.shortName}</span>
      </div>
    </div>
  );
}
