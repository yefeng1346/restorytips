import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { NativeBanner } from "./native-banner";
import { SitePageJsonLd } from "./seo-json-ld";
import { Taskbar } from "./taskbar";
import { WikiSidebar } from "./wiki-sidebar";
import {
  getLocaleCopy,
  getGuideAnswer,
  getLocalizedGuideMeta,
  guideMeta,
  localizedPath,
  siteConfig,
  type Locale,
} from "@/lib/site-data";
import { getGuideComponent } from "@/lib/mdx";

function PageChrome({
  locale,
  currentPath,
  children,
  pageTitle = siteConfig.gameName,
  pageDescription = siteConfig.homepage.meta.description,
  article = false,
  breadcrumbs = [],
}: {
  locale: Locale;
  currentPath: string;
  children: ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  article?: boolean;
  breadcrumbs?: { name: string; path: string }[];
}) {
  return (
    <>
      <SitePageJsonLd
        locale={locale}
        path={localizedPath(locale, currentPath)}
        title={pageTitle}
        description={pageDescription}
        article={article}
        breadcrumbs={breadcrumbs}
      />
      <SiteHeader locale={locale} currentPath={currentPath} />
      <main id="main" lang={locale}>{children}</main>
      <SiteFooter locale={locale} />
      <Taskbar locale={locale} />
    </>
  );
}

const quickLinks = [
  {
    stat: "15+",
    title: "Beginner Guide",
    description: "Start the first repair-shop shift and learn the confirmed core loop.",
    href: "/guides/restory-chill-electronics-repairs-walkthrough",
    label: "first hours",
  },
  {
    stat: "4",
    title: "Repair Workflow",
    description: "Disassemble, clean, replace faulty parts, and reassemble.",
    href: "/guides/restory-chill-electronics-repairs-cleaning-guide",
    label: "confirmed sequence",
  },
  {
    stat: "Y2K",
    title: "Devices & Parts",
    description: "Browse the research-backed device, browser, and shop-tool notes.",
    href: "/guides/restory-chill-electronics-repairs-parts-catalog",
    label: "shop reference",
  },
  {
    stat: "50",
    title: "Story & Achievements",
    description: "Track customer choices, multiple endings, and Steam achievements.",
    href: "/guides/restory-chill-electronics-repairs-achievements",
    label: "Steam Achievements",
  },
  {
    stat: "Aug",
    title: "Known Issues",
    description: "Separate official launch reports from details still needing verification.",
    href: "/guides/restory-chill-electronics-repairs-resolution-settings",
    label: "launch notes",
  },
  {
    stat: "▶",
    title: "Official Media",
    description: "Watch the official Gameplay Trailer from tinyBuildGAMES.",
    href: siteConfig.official.gameplayTrailer,
    label: "YouTube",
    external: true,
  },
] as const;

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const home = siteConfig.homepage;

  return (
    <PageChrome
      locale={locale}
      currentPath="/"
      pageTitle={locale === "en" ? home.hero.title : copy.gameName}
      pageDescription={locale === "en" ? home.hero.description : copy.home.quickDescription}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <section className="banner">
          <span className="section-kicker">{copy.labels.communityWiki}</span>
          <h1>
            <span className="game">{locale === "en" ? home.hero.title : copy.gameName}</span>
          </h1>
          <p className="sub">{locale === "en" ? home.hero.description : copy.home.quickDescription}</p>
          <div className="cta-row">
            <Link className="btn" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-walkthrough")}>
              {locale === "en" ? home.hero.primaryCta : copy.nav.beginner}
            </Link>
            <Link className="btn" href={localizedPath(locale, "/guides")}>
              {locale === "en" ? home.hero.secondaryCta : copy.nav.guides}
            </Link>
            <Link className="btn danger" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-resolution-settings")}>
              {locale === "en" ? home.hero.tertiaryCta : copy.nav.updates}
            </Link>
          </div>
          <div className="hero-stats">
            {home.hero.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
          <p className="hero-media-link">
            <a href={siteConfig.official.gameplayTrailer} target="_blank" rel="noreferrer">
              {home.hero.videoLabel} ↗
            </a>
          </p>
        </section>

        <div className="notice teal" style={{ marginTop: "1.2rem" }}>
          {locale === "en"
            ? "Launch snapshot · Aug 6, 2026 · Steam currently shows $17.99 and 97% positive reviews. Dynamic figures can change."
            : copy.labels.lastUpdated}
        </div>

        <section>
          <span className="section-kicker">{copy.labels.quickLookup}</span>
          <h2>{copy.home.quickTitle}</h2>
          <p className="section-intro">{copy.home.quickDescription}</p>
          <ul className="quick-grid content-list">
            {quickLinks.map((item) => {
              const isExternal = "external" in item && item.external;
              const linkProps = isExternal ? { target: "_blank", rel: "noreferrer" } : {};
              const href = isExternal ? item.href : localizedPath(locale, item.href);
              return (
                <li key={item.title}>
                  <Link className="quick-card" href={href} {...linkProps}>
                    <span className="quick-stat">{item.stat}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <small>{item.label}</small>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <NativeBanner />

        <section>
          <span className="section-kicker">{copy.labels.startHere}</span>
          <h2>{locale === "en" ? home.start.title : copy.labels.startHere}</h2>
          <ul className="grid cols-2 start-grid content-list">
            {home.start.cards.map((card) => (
              <li key={card.number}>
                <Link className="card start-card" href={localizedPath(locale, card.href)}>
                  <span className="start-card__number">{card.number}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <span className="section-kicker">★</span>
          <h2>{copy.home.aboutTitle}</h2>
          <div className="panel">
            <p>{home.aboutGame.paragraphs[0]}</p>
            <p style={{ marginBottom: 0 }}>{home.aboutGame.paragraphs[1]}</p>
          </div>
        </section>

        <section>
          <span className="section-kicker">{copy.labels.gameAtAGlance}</span>
          <div className="grid cols-4">
            <div className="panel raised stat-pill"><b>15+</b><span>{locale === "en" ? "Story hours" : "Story"}</span></div>
            <div className="panel raised stat-pill"><b>50</b><span>Steam Achievements</span></div>
            <div className="panel raised stat-pill"><b>9</b><span>{locale === "en" ? "Languages" : "Languages"}</span></div>
            <div className="panel raised stat-pill"><b>Y2K</b><span>{locale === "en" ? "Tokyo setting" : "Setting"}</span></div>
          </div>
        </section>

        <section>
          <span className="section-kicker">{copy.labels.aboutGame}</span>
          <div className="grid cols-3">
            {home.aboutGame.stats.map((stat) => (
              <div className="panel stat-pill" key={stat.label}>
                <b className="stat-label">{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="codes-panel">
          <span className="section-kicker">{copy.labels.codes}</span>
          <div className="panel raised code-row">
            <div>
              <h2>{home.codes.title}</h2>
              <p>{locale === "en" ? home.codes.description : copy.home.codeDescription}</p>
            </div>
            <span className="code-value">{siteConfig.sidebarCodes[0]}</span>
          </div>
        </section>

        <section className="panel raised final-cta">
          <h2>{locale === "en" ? home.finalCta.title : copy.home.finalTitle}</h2>
          <p>{locale === "en" ? home.finalCta.description : copy.home.finalDescription}</p>
          <div className="cta-row">
            <Link className="btn" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-walkthrough")}>
              {locale === "en" ? home.finalCta.primary : copy.nav.beginner}
            </Link>
            <a className="btn danger" href={siteConfig.official.steam} target="_blank" rel="noreferrer">
              {locale === "en" ? home.finalCta.secondary : copy.labels.playOnSteam} ↗
            </a>
          </div>
        </section>
      </div>
    </PageChrome>
  );
}

export function GuideIndexPage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  return (
    <PageChrome
      locale={locale}
      currentPath="/guides"
      pageTitle={locale === "en" ? "ReStory Repair Guides" : copy.nav.guides}
      pageDescription={copy.home.quickDescription}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={localizedPath(locale, "/")}>{copy.nav.home}</Link>
          <span className="sep">/</span>
          <span>{copy.nav.guides}</span>
        </nav>
        <section className="banner">
          <span className="section-kicker">{copy.labels.communityWiki}</span>
          <h1><span className="game">{locale === "en" ? "ReStory Repair Guides" : copy.nav.guides}</span></h1>
          <p className="sub">{copy.home.quickDescription}</p>
        </section>

        <div className="wiki-grid">
          <WikiSidebar locale={locale} />
          <div>
            <section style={{ marginTop: 0 }}>
              <span className="section-kicker">{copy.labels.startHere}</span>
              <h2>{copy.home.quickTitle}</h2>
              <ul className="grid cols-2 content-list">
                {guideMeta.map((guide) => (
                  <li key={guide.slug}>
                    <Link className="card guide-card" href={localizedPath(locale, `/guides/${guide.slug}`)}>
                      <span className="chip teal">{guide.category}</span>
                      <h3>{guide.title}</h3>
                      <p>{guide.description}</p>
                      <div className="guide-card__footer">
                        <span>{guide.readTime}</span>
                        <span>{copy.labels.readMore} →</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <NativeBanner />
            <section className="panel raised">
              <span className="section-kicker">{copy.labels.official}</span>
              <h2>{copy.labels.source}</h2>
              <p>{siteConfig.homepage.aboutGame.paragraphs[1]}</p>
              <a className="btn sm" href={siteConfig.official.steam} target="_blank" rel="noreferrer">Steam Store ↗</a>
            </section>
          </div>
        </div>
      </div>
    </PageChrome>
  );
}

export function GuideArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const copy = getLocaleCopy(locale);
  const meta = getLocalizedGuideMeta(locale, slug);
  const Article = getGuideComponent(locale, slug);
  const guideAnswer = locale === "en" ? getGuideAnswer(slug) : undefined;

  if (!meta || !Article) {
    return null;
  }

  const related = guideMeta.filter((guide) => guide.slug !== slug).slice(0, 3);

  return (
    <PageChrome
      locale={locale}
      currentPath={`/guides/${slug}`}
      pageTitle={meta.title}
      pageDescription={meta.description}
      article
      breadcrumbs={[
        { name: copy.nav.home, path: "/" },
        { name: copy.nav.guides, path: "/guides" },
        { name: meta.title, path: `/guides/${slug}` },
      ]}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={localizedPath(locale, "/")}>{copy.nav.home}</Link>
          <span className="sep">/</span>
          <Link href={localizedPath(locale, "/guides")}>{copy.nav.guides}</Link>
          <span className="sep">/</span>
          <span>{meta.title}</span>
        </nav>
        <div className="article-layout">
          <article>
            <header className="article-header">
              <span className="section-kicker">{meta.eyebrow}</span>
              <h1>{meta.title}</h1>
              <p className="sub" style={{ color: "hsl(var(--dim))", maxWidth: "75ch", fontSize: "1.05rem" }}>{meta.description}</p>
              <div className="article-meta">
                <span>{meta.readTime}</span>
                {meta.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
              </div>
              <div className="article-meta article-meta--trust" aria-label={copy.labels.editorialReview}>
                <span>{copy.labels.editorialReview}: ReStorytips Editorial Team</span>
                <span>{copy.labels.researchStatus}</span>
              </div>
            </header>
            {guideAnswer ? (
              <aside className="answer-first" aria-labelledby={`answer-${slug}`}>
                <span className="section-kicker">{copy.labels.shortAnswer}</span>
                <h2 id={`answer-${slug}`}>{meta.title}</h2>
                <p>{guideAnswer.summary}</p>
                <ul className="content-list">
                  {guideAnswer.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </aside>
            ) : null}
            <div className="prose">
              <Article />
            </div>
            <NativeBanner />
            <section>
              <span className="section-kicker">{copy.labels.relatedPages}</span>
              <ul className="grid cols-3 content-list">
                {related.map((guide) => (
                  <li key={guide.slug}>
                    <Link className="card" href={localizedPath(locale, `/guides/${guide.slug}`)}>
                      <h3>{guide.title}</h3>
                      <p>{guide.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <WikiSidebar locale={locale} activeSlug={slug} />
        </div>
      </div>
    </PageChrome>
  );
}

export function LegalPage({ locale, type }: { locale: Locale; type: "privacy" | "terms" }) {
  const copy = getLocaleCopy(locale);
  const title = type === "privacy" ? copy.labels.privacy : copy.labels.terms;
  return (
    <PageChrome
      locale={locale}
      currentPath={`/${type}`}
      pageTitle={title}
      pageDescription={
        type === "privacy"
          ? "Privacy information for the independent ReStory: Chill Electronics Repairs fan Wiki."
          : "Terms for using the independent ReStory: Chill Electronics Repairs fan Wiki."
      }
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={localizedPath(locale, "/")}>{copy.nav.home}</Link>
          <span className="sep">/</span>
          <span>{title}</span>
        </nav>
        <section className="panel legal-page">
          <span className="section-kicker">ReStory Wiki</span>
          <h1>{title}</h1>
          {type === "privacy" ? (
            <>
              <p>This independent fan-made ReStory Wiki is designed to provide guides and reference information. It does not require an account to read the public pages.</p>
              <h2>Information on this site</h2>
              <p>Google Analytics is enabled to measure visits and page usage through measurement ID G-NGY82QT3YL. Google may process technical and usage data under its own policies. Do not submit private information through guide comments or external links.</p>
              <h2>Advertising</h2>
              <p>Public content pages may load Google AdSense with publisher ID ca-pub-4496419024798372 and a third-party native advertising script from effectivecpmnetwork.com. Any data processing by those providers is governed by their own policies.</p>
              <h2>External services</h2>
              <p>Official Steam, Discord, YouTube, and tinyBuild links leave this Wiki and are governed by their own policies.</p>
            </>
          ) : (
            <>
              <p>This is an unofficial fan-made Wiki for ReStory: Chill Electronics Repairs. It is not affiliated with Mandragora, tinyBuild, or Valve.</p>
              <h2>Content status</h2>
              <p>Research-based pages identify unverified details as 待确认. Game names, assets, and trademarks belong to their respective owners.</p>
              <h2>Use of the site</h2>
              <p>Use the information as a reference, check official announcements for changing launch information, and do not treat this Wiki as an official support channel.</p>
            </>
          )}
        </section>
      </div>
    </PageChrome>
  );
}
