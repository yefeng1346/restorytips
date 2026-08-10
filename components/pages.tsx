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
  hasLocalizedGuide,
  localizedPath,
  siteConfig,
  type Locale,
} from "@/lib/site-data";
import { getGuideComponent } from "@/lib/mdx";
import { GameGallery, GameMedia } from "./game-media";
import { getArticleMediaKey } from "@/lib/media";

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

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const home = copy.home;

  return (
    <PageChrome
      locale={locale}
      currentPath="/"
      pageTitle={home.hero.title}
      pageDescription={home.hero.description}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <section className="banner">
          <span className="section-kicker">{copy.labels.communityWiki}</span>
          <h1>
            <span className="game">{home.hero.title}</span>
          </h1>
          <p className="sub">{home.hero.description}</p>
          <div className="cta-row">
            <Link className="btn" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-walkthrough")}>
              {home.hero.primaryCta}
            </Link>
            <Link className="btn" href={localizedPath(locale, "/guides")}>
              {home.hero.secondaryCta}
            </Link>
            <Link className="btn danger" href={localizedPath(locale, locale === "en" ? "/guides/restory-chill-electronics-repairs-resolution-settings" : "/guides")}>
              {home.hero.tertiaryCta}
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

        <GameMedia locale={locale} mediaKey="shop" variant="hero" priority />

        <section>
          <span className="section-kicker">{copy.labels.quickLookup}</span>
          <h2>{copy.home.quickTitle}</h2>
          <p className="section-intro">{copy.home.quickDescription}</p>
          <ul className="quick-grid content-list">
            {home.quickLinks.map((item) => {
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

        <NativeBanner label={copy.accessibility.advertisement} />

        <section>
          <span className="section-kicker">{copy.labels.startHere}</span>
          <h2>{home.startTitle}</h2>
          <ul className="grid cols-2 start-grid content-list">
            {home.startCards.map((card) => (
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
          <h2>{home.aboutTitle}</h2>
          <div className="panel">
            <p>{home.aboutParagraphs[0]}</p>
            <p style={{ marginBottom: 0 }}>{home.aboutParagraphs[1]}</p>
          </div>
        </section>

        <section>
          <span className="section-kicker">{copy.labels.gameAtAGlance}</span>
          <div className="grid cols-4">
            {home.glance.map((stat) => (
              <div className="panel raised stat-pill" key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>
            ))}
          </div>
        </section>

        <section>
          <span className="section-kicker">{copy.labels.aboutGame}</span>
          <div className="grid cols-3">
            {home.aboutStats.map((stat) => (
              <div className="panel stat-pill" key={stat.label}>
                <b className="stat-label">{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <GameGallery locale={locale} mediaKeys={["workbench", "device", "customization"]} />

        {home.codeValue ? (
          <section className="codes-panel">
            <span className="section-kicker">{copy.labels.codes}</span>
            <div className="panel raised code-row">
              <div>
                <h2>{home.codesTitle}</h2>
                <p>{home.codeDescription}</p>
              </div>
              <span className="code-value">{home.codeValue}</span>
            </div>
          </section>
        ) : null}

        <section className="panel raised final-cta">
          <h2>{home.finalTitle}</h2>
          <p>{home.finalDescription}</p>
          <div className="cta-row">
            <Link className="btn" href={localizedPath(locale, "/guides/restory-chill-electronics-repairs-walkthrough")}>
              {home.finalPrimary}
            </Link>
            <a className="btn danger" href={siteConfig.official.steam} target="_blank" rel="noreferrer">
              {home.finalSecondary} ↗
            </a>
          </div>
        </section>
      </div>
    </PageChrome>
  );
}

export function GuideIndexPage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale);
  const guides = guideMeta
    .filter((guide) => locale === "en" || hasLocalizedGuide(locale, guide.slug))
    .map((guide) => getLocalizedGuideMeta(locale, guide.slug) ?? guide);
  return (
    <PageChrome
      locale={locale}
      currentPath="/guides"
      pageTitle={locale === "en" ? "ReStory Repair Guides" : copy.nav.guides}
      pageDescription={copy.home.quickDescription}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <nav className="crumbs" aria-label={copy.accessibility.breadcrumb}>
          <Link href={localizedPath(locale, "/")}>{copy.nav.home}</Link>
          <span className="sep">/</span>
          <span>{copy.nav.guides}</span>
        </nav>
        <section className="banner">
          <span className="section-kicker">{copy.labels.communityWiki}</span>
          <h1><span className="game">{locale === "en" ? "ReStory Repair Guides" : copy.nav.guides}</span></h1>
          <p className="sub">{copy.home.quickDescription}</p>
        </section>

        <GameGallery locale={locale} mediaKeys={["shop", "device"]} />

        <div className="wiki-grid">
          <WikiSidebar locale={locale} />
          <div>
            <section style={{ marginTop: 0 }}>
              <span className="section-kicker">{copy.labels.startHere}</span>
              <h2>{copy.home.quickTitle}</h2>
              <ul className="grid cols-2 content-list">
                {guides.map((guide) => (
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
            <NativeBanner label={copy.accessibility.advertisement} />
            <section className="panel raised">
              <span className="section-kicker">{copy.labels.official}</span>
              <h2>{copy.labels.source}</h2>
              <p>{copy.home.aboutParagraphs[1]}</p>
              <a className="btn sm" href={siteConfig.official.steam} target="_blank" rel="noreferrer">{copy.home.finalSecondary} ↗</a>
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

  if (!meta || !Article || (locale !== "en" && !hasLocalizedGuide(locale, slug))) {
    return null;
  }

  const related = guideMeta
    .filter((guide) => guide.slug !== slug && (locale === "en" || hasLocalizedGuide(locale, guide.slug)))
    .map((guide) => getLocalizedGuideMeta(locale, guide.slug) ?? guide)
    .slice(0, 3);

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
        <nav className="crumbs" aria-label={copy.accessibility.breadcrumb}>
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
                <span>{copy.labels.editorialReview}: {copy.labels.editorialTeam}</span>
                <span>{copy.labels.researchStatus}</span>
              </div>
            </header>
            <GameMedia locale={locale} mediaKey={getArticleMediaKey(slug)} variant="article" priority />
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
            <NativeBanner label={copy.accessibility.advertisement} />
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
  const privacy = copy.legal.privacy;
  const terms = copy.legal.terms;
  return (
    <PageChrome
      locale={locale}
      currentPath={`/${type}`}
      pageTitle={title}
      pageDescription={type === "privacy" ? privacy.intro : terms.intro}
    >
      <div className="wrap" style={{ paddingTop: "1.6rem" }}>
        <nav className="crumbs" aria-label={copy.accessibility.breadcrumb}>
          <Link href={localizedPath(locale, "/")}>{copy.nav.home}</Link>
          <span className="sep">/</span>
          <span>{title}</span>
        </nav>
        <section className="panel legal-page">
          <span className="section-kicker">{copy.labels.siteWiki}</span>
          <h1>{title}</h1>
          {type === "privacy" ? (
            <>
              <p>{privacy.intro}</p>
              <h2>{privacy.informationTitle}</h2>
              <p>{privacy.information}</p>
              <h2>{privacy.advertisingTitle}</h2>
              <p>{privacy.advertising}</p>
              <h2>{privacy.externalTitle}</h2>
              <p>{privacy.external}</p>
            </>
          ) : (
            <>
              <p>{terms.intro}</p>
              <h2>{terms.contentTitle}</h2>
              <p>{terms.content}</p>
              <h2>{terms.useTitle}</h2>
              <p>{terms.use}</p>
            </>
          )}
        </section>
      </div>
    </PageChrome>
  );
}
