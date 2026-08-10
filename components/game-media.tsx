import Image from "next/image";
import { getGameMedia, mediaSectionCopy, type GameMediaKey } from "@/lib/media";
import type { Locale } from "@/lib/site-data";

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
