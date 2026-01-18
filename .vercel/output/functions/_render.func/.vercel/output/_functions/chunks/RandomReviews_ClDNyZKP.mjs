import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, b as renderComponent, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseFeaturedItem } from './BaseFeaturedItem_Dlk-C3TW.mjs';
import { g as getCollection } from './_astro_content_B5yu7hFc.mjs';
/* empty css                                                                     */

const $$Astro = createAstro();
const $$RandomReviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RandomReviews;
  const { currentSlug } = Astro2.props;
  function getCleanId(id) {
    return id ? id.replace(/\.mdx$/, "") : "";
  }
  const allReviewsRaw = await getCollection("reviews");
  const allReviews = allReviewsRaw.map((post) => ({
    url: `/reviews&blogs/${getCleanId(post.id)}`,
    frontmatter: post.data
  }));
  const filteredReviews = allReviews.filter((post) => post.frontmatter.slug !== currentSlug);
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  const randomReviews = shuffle(filteredReviews).slice(0, 3);
  return renderTemplate`${randomReviews.length > 0 && renderTemplate`${maybeRenderHead()}<section class="random-reviews" data-astro-cid-rqkfu2uj><h2 class="random-reviews-title" style="text-align:center;margin-bottom:32px;" data-astro-cid-rqkfu2uj>Misschien ben je ook wel geïnteresseerd in...</h2><div class="random-reviews-row" data-astro-cid-rqkfu2uj>${randomReviews.map((post) => renderTemplate`<a${addAttribute(post.url, "href")} class="random-review-card" data-astro-cid-rqkfu2uj>${renderComponent($$result, "BaseFeaturedItem", $$BaseFeaturedItem, { "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail || post.frontmatter.poster, "rating": post.frontmatter.rating, "square": true, "data-astro-cid-rqkfu2uj": true })}</a>`)}</div></section>`}`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/RandomReviews.astro", void 0);

export { $$RandomReviews as $ };
