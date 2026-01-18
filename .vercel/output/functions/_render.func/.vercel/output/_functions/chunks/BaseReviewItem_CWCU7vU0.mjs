import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseReviewItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseReviewItem;
  const { title, url, thumbnail, date, schrijver, summary, content, rating } = Astro2.props || {};
  function formatDate(dateString) {
    const date2 = new Date(dateString);
    if (isNaN(date2.getTime())) return "";
    const options = { timeZone: "UTC", hour12: false, hour: "numeric", minute: "numeric" };
    const formattedDate = date2.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timePart = date2.toLocaleTimeString("nl-NL", options);
    return timePart === "00:00" ? formattedDate : `${formattedDate} ${timePart}`;
  }
  const formattedDateTime = formatDate(date);
  function generateStarRating(rating2) {
    const fullStar = "/images/star-full.png";
    const halfStar = "/images/star-half.png";
    const emptyStar = "/images/star-empty.png";
    const stars = [];
    let remainingRating = rating2;
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
  const parsedRating = parseFloat(rating);
  const validatedRating = isNaN(parsedRating) ? 0 : Math.min(Math.max(parsedRating, 0), 5);
  const starRatingImages = generateStarRating(validatedRating);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="blog-item w-inline-block" data-astro-cid-6zn6rfcp> <div class="tile-image-wrapper" data-astro-cid-6zn6rfcp> ${rating && rating > 0 && renderTemplate`<div class="rating-wrapper" data-astro-cid-6zn6rfcp> <div class="rating-container" data-astro-cid-6zn6rfcp> <div class="rating" data-astro-cid-6zn6rfcp> ${starRatingImages.map((starImage) => renderTemplate`<img${addAttribute(starImage, "src")} loading="eager" alt="" class="star-image" data-astro-cid-6zn6rfcp>`)} </div> </div> </div>`} <div class="blog-image-wrap" data-astro-cid-6zn6rfcp> <img${addAttribute(thumbnail, "src")} width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 876px) 89vw, (max-width: 991px) 780px, 40vw" alt="" class="blog-image" data-astro-cid-6zn6rfcp> </div> </div> <div class="blog-content" data-astro-cid-6zn6rfcp> <h3 class="heading-h2" data-astro-cid-6zn6rfcp>${title}</h3> <p class="paragraph-detials-medium" id="summary" data-astro-cid-6zn6rfcp>${summary}</p> <div class="date-time" data-astro-cid-6zn6rfcp> <div class="writer-tag" data-astro-cid-6zn6rfcp> <img${addAttribute(`/images/${schrijver}_profilepic.png`, "src")} width="45px" height="45px" alt="" class="profile-picture" data-astro-cid-6zn6rfcp> <div class="normal-wrapper" data-astro-cid-6zn6rfcp> <div class="title-small" data-astro-cid-6zn6rfcp>${schrijver}</div> ${formattedDateTime && renderTemplate`<p class="paragraph-detials-small" data-astro-cid-6zn6rfcp>${formattedDateTime}</p>`} </div> </div> <div class="lees-meer" data-astro-cid-6zn6rfcp>Lees meer...</div> </div> </div> </a> `;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseReviewItem.astro", void 0);

export { $$BaseReviewItem as $ };
