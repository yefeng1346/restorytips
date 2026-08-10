import Image from "next/image";
import { getGameMedia, mediaSectionCopy, type GameMediaKey } from "@/lib/media";
import { siteConfig, type Locale } from "@/lib/site-data";

const gameplayTrailerId = new URL(siteConfig.official.gameplayTrailer).pathname.replace(/^\//, "");

const gameplayTrailerCopy: Record<Locale, { title: string; caption: string }> = {
  en: {
    title: "ReStory: Chill Electronics Repairs official Gameplay Trailer",
    caption: "Official Gameplay Trailer.",
  },
  ru: {
    title: "Официальный геймплейный трейлер ReStory: Chill Electronics Repairs",
    caption: "Официальный геймплейный трейлер.",
  },
  de: {
    title: "Offizieller Gameplay-Trailer zu ReStory: Chill Electronics Repairs",
    caption: "Offizieller Gameplay-Trailer.",
  },
  ja: {
    title: "リ・ストーリー: 思い出修理屋 公式ゲームプレイトレーラー",
    caption: "公式ゲームプレイトレーラー。",
  },
};

const gameplayTrailerPlayerLanguage: Record<Locale, string> = {
  en: "en",
  ru: "ru",
  de: "de",
  ja: "ja",
};

type GameMediaProps = {
  locale: Locale;
  mediaKey: GameMediaKey;
  variant?: "hero" | "article" | "gallery";
  priority?: boolean;
};

export function GameMedia({ locale, mediaKey, variant = "gallery", priority = false }: GameMediaProps) {
  const media = getGameMedia(locale, mediaKey);
  const sizes = variant === "gallery"
    ? "(max-width: 760px) 100vw, 33vw"
    : variant === "hero"
      ? "(max-width: 900px) 100vw, 900px"
      : "(max-width: 760px) 100vw, 760px";

  return (
    <figure className={`game-media game-media--${variant}`}>
      <div className="game-media__image">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          priority={priority}
        />
      </div>
      <figcaption>
        <span>{media.caption}</span>
      </figcaption>
    </figure>
  );
}

export function GameTrailer({ locale }: { locale: Locale }) {
  const copy = gameplayTrailerCopy[locale];

  return (
    <figure className="game-media game-media--hero game-video">
      <div className="game-media__image game-video__frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${gameplayTrailerId}?hl=${gameplayTrailerPlayerLanguage[locale]}&rel=0`}
          title={copy.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>
        <span>{copy.caption}</span>
      </figcaption>
    </figure>
  );
}

export function GameGallery({ locale, mediaKeys }: { locale: Locale; mediaKeys: GameMediaKey[] }) {
  const copy = mediaSectionCopy[locale];

  return (
    <section className="media-section" aria-labelledby="in-game-visuals">
      <span className="section-kicker">{copy.kicker}</span>
      <h2 id="in-game-visuals">{copy.title}</h2>
      <p className="section-intro">{copy.description}</p>
      <div className="media-grid">
        {mediaKeys.map((mediaKey) => (
          <GameMedia key={mediaKey} locale={locale} mediaKey={mediaKey} />
        ))}
      </div>
    </section>
  );
}
