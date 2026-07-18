import { useEffect, useRef, useState } from "react";
import "./HeroCarousel.css";

/**
 * HeroCarousel — full-bleed image carousel with side + bottom scrims, prev/
 * next arrows, and dot indicators. Ported from _ds_bundle.js
 * `components/media/HeroCarousel.jsx`.
 *
 * This is the ONE genuinely interactive component in this foundation set
 * (active-slide state, click-driven navigation) — implemented as a React
 * island. Render it from an .astro page with a client directive, e.g.:
 *
 *   <HeroCarousel client:load slides={slides} />
 *
 * client:load is recommended over client:visible/client:idle here because
 * the hero is always above the fold — deferring hydration would leave the
 * arrows/dots inert for a beat right when the page is first interactive.
 *
 * Props:
 *   slides       HeroSlide[], required
 *   autoplayMs?  number — auto-advance interval in ms. The source bundle
 *                had NO autoplay (manual arrows/dots only); default here is
 *                0 (disabled) to match. Opt in per-page if wanted.
 */
export interface HeroSlide {
  image: { src: string; alt: string };
  eyebrow?: string;
  /** CSS color value for the eyebrow pill background, e.g. "var(--accent-purple)". */
  eyebrowColor?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  autoplayMs?: number;
}

export default function HeroCarousel({ slides, autoplayMs = 0 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) => setIndex(((next % count) + count) % count);

  useEffect(() => {
    if (!autoplayMs || count <= 1) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplayMs, count]);

  if (count === 0) return null;

  return (
    <div className="cn-hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`cn-hero__slide${i === index ? " cn-hero__slide--active" : ""}`}
          aria-hidden={i !== index}
        >
          <img
            className="cn-hero__image"
            src={s.image.src}
            alt={s.image.alt}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="cn-hero__scrim-side" aria-hidden="true" />
          <div className="cn-hero__scrim-bottom" aria-hidden="true" />
          <div className="cn-hero__content">
            {s.eyebrow && (
              <span
                className="cn-hero__eyebrow"
                style={{ background: s.eyebrowColor || "var(--accent-purple)" }}
              >
                {s.eyebrow}
              </span>
            )}
            <h1 className="cn-hero__title">{s.title}</h1>
            {s.description && <p className="cn-hero__desc">{s.description}</p>}
            {s.ctaLabel && s.ctaHref && (
              <a className="cn-hero__cta" href={s.ctaHref}>
                {s.ctaLabel}
              </a>
            )}
          </div>
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            className="cn-hero__arrow cn-hero__arrow--left"
            aria-label="Vorige slide"
            onClick={() => go(index - 1)}
          >
            &#8249;
          </button>
          <button
            type="button"
            className="cn-hero__arrow cn-hero__arrow--right"
            aria-label="Volgende slide"
            onClick={() => go(index + 1)}
          >
            &#8250;
          </button>
          <div className="cn-hero__dots" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ga naar slide ${i + 1}`}
                className={`cn-hero__dot${i === index ? " cn-hero__dot--active" : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}

      <span className="cn-hero__sr-status" role="status" aria-live="polite">
        {`Slide ${index + 1} van ${count}: ${slides[index].title}`}
      </span>
    </div>
  );
}
