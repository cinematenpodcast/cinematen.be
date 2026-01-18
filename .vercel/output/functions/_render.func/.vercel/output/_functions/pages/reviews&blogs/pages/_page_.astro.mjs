import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, r as renderTemplate, e as addAttribute } from '../../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../../../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../../../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$NewNavmenu } from '../../../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BasePodcastBanner } from '../../../chunks/BasePodcastBanner_BLzwXdFL.mjs';
import { $ as $$BaseReviewItem } from '../../../chunks/BaseReviewItem_CWCU7vU0.mjs';
import { $ as $$BaseHeadExclude } from '../../../chunks/BaseHeadExclude_hmxA-bO9.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_B5yu7hFc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const allReviewPostsRaw = await getCollection("reviews");
  const sortedPostsRaw = allReviewPostsRaw.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  function getCleanId(id) {
    return id ? id.replace(/\.mdx$/, "") : "";
  }
  const sortedPosts = sortedPostsRaw.map((post) => ({
    url: `/reviews&blogs/${getCleanId(post.id)}`,
    frontmatter: post.data,
    rawContent: post.data.summary || ""
  }));
  return paginate(sortedPosts, { pageSize: 8 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const totalPages = page.lastPage;
  const currentPage = page.currentPage;
  const pageNumbersToShow = 5;
  function generatePageNumbers(currentPage2, totalPages2, pageNumbersToShow2) {
    const halfWindow = Math.floor(pageNumbersToShow2 / 2);
    let start2 = Math.max(1, currentPage2 - halfWindow);
    let end2 = Math.min(totalPages2, currentPage2 + halfWindow);
    if (currentPage2 - halfWindow < 1) {
      end2 = Math.min(end2 + (halfWindow - currentPage2 + 1), totalPages2);
    }
    if (currentPage2 + halfWindow > totalPages2) {
      start2 = Math.max(1, start2 - (currentPage2 + halfWindow - totalPages2));
    }
    return { start: start2, end: end2 };
  }
  const { start, end } = generatePageNumbers(currentPage, totalPages, pageNumbersToShow);
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Reviews & Blogs</h1> <div class="w-layout-grid nieuws-list"> <div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper list"> <a href="/reviews&blogs/tags/film" class="categories-pill w-inline-block"><div class="title-small pink">Film</div></a> <a href="/reviews&blogs/tags/tv" class="categories-pill w-inline-block"><div class="title-small pink">TV</div></a> <a href="/reviews&blogs/tags/blog" class="categories-pill w-inline-block"><div class="title-small pink">Blog</div></a> <a href="/reviews&blogs/tags/vlaams" class="categories-pill w-inline-block"><div class="title-small pink">Vlaams</div></a> <a href="/reviews&blogs/tags/reality" class="categories-pill w-inline-block"><div class="title-small pink">Reality</div></a> <a href="/reviews&blogs/tags/actie" class="categories-pill w-inline-block"><div class="title-small pink">Actie</div></a> <a href="/reviews&blogs/tags/horror" class="categories-pill w-inline-block"><div class="title-small pink">Horror</div></a> <a href="/reviews&blogs/tags/comedy" class="categories-pill w-inline-block"><div class="title-small pink">Comedy</div></a> </div> </div> ${page.data.map((post) => renderTemplate`${renderComponent($$result, "BaseReviewItem", $$BaseReviewItem, { "key": post.url, "url": post.url, "schrijver": post.frontmatter.schrijver, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent, "summary": post.frontmatter.summary, "rating": post.frontmatter.rating })}`)} <div class="pagination-wrapper"> <div class="pagination"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="previous-button w-inline-block"><div class="title-medium">Vorige</div></a>` : null} ${start > 1 ? renderTemplate`<span>... </span>` : null} ${Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
    (number) => number === currentPage ? renderTemplate`<strong class="page-indicator">${number}</strong>` : renderTemplate`<a${addAttribute(`./${number}`, "href")}>${number}</a>`
  )} ${end < totalPages ? renderTemplate`<span> ...</span>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="next-button w-inline-block"><div class="title-medium">Volgende</div></a>` : null} </div> </div> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </div></body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/pages/[page].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/pages/[page].astro";
const $$url = "/reviews&blogs/pages/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
