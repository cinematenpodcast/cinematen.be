import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                        */

const $$Astro = createAstro();
const $$BaseFeaturedItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseFeaturedItem;
  const { title, url, thumbnail, rating, square, asLink } = Astro2.props;
  function generateStarRating(rating2) {
    const fullStar = "/images/star-full.png";
    const halfStar = "/images/star-half.png";
    const emptyStar = "/images/star-empty.png";
    const stars = [];
    let remainingRating = parseFloat(rating2);
    for (let i = 0; i < 5; i++) {
      if (remainingRating >= 1) {
        stars.push(fullStar);
        remainingRating--;
      } else if (remainingRating > 0) {
        stars.push(halfStar);
        remainingRating = 0;
      } else {
        stars.push(emptyStar);
      }
    }
    return stars;
  }
  const showStars = rating !== void 0 && rating !== null && rating > 0;
  const starRatingImages = showStars ? generateStarRating(rating) : [];
  return renderTemplate`${asLink ? renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="featured-card-link" data-astro-cid-l55sm3gw><div class="featured-item-horizontal" data-astro-cid-l55sm3gw><div${addAttribute(`featured-thumb-wrapper${square ? " square" : ""}`, "class")} data-astro-cid-l55sm3gw><div${addAttribute(`thumb-aspect-box${square ? " square" : ""}`, "class")} data-astro-cid-l55sm3gw><img${addAttribute(thumbnail, "src")} alt="feature-thumbnail" class="featured-thumb-img" data-astro-cid-l55sm3gw></div></div><div class="featured-content-box" data-astro-cid-l55sm3gw><div class="title-small-horizontal" data-astro-cid-l55sm3gw>${title}</div>${showStars && renderTemplate`<div class="star-row-horizontal" data-astro-cid-l55sm3gw>${starRatingImages.map((starImage) => renderTemplate`<img${addAttribute(starImage, "src")} loading="eager" alt="ster" class="star-image-horizontal" data-astro-cid-l55sm3gw>`)}</div>`}</div></div></a>` : renderTemplate`<div class="featured-item-horizontal" data-astro-cid-l55sm3gw><div${addAttribute(`featured-thumb-wrapper${square ? " square" : ""}`, "class")} data-astro-cid-l55sm3gw><div${addAttribute(`thumb-aspect-box${square ? " square" : ""}`, "class")} data-astro-cid-l55sm3gw><img${addAttribute(thumbnail, "src")} alt="feature-thumbnail" class="featured-thumb-img" data-astro-cid-l55sm3gw></div></div><div class="featured-content-box" data-astro-cid-l55sm3gw><div class="title-small-horizontal" data-astro-cid-l55sm3gw>${title}</div>${showStars && renderTemplate`<div class="star-row-horizontal" data-astro-cid-l55sm3gw>${starRatingImages.map((starImage) => renderTemplate`<img${addAttribute(starImage, "src")} loading="eager" alt="ster" class="star-image-horizontal" data-astro-cid-l55sm3gw>`)}</div>`}</div></div>`}`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseFeaturedItem.astro", void 0);

export { $$BaseFeaturedItem as $ };
