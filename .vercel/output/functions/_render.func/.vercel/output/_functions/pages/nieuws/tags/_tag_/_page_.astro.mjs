import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, r as renderTemplate, e as addAttribute } from '../../../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../../../../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../../../../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$NewNavmenu } from '../../../../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BasePodcastBanner } from '../../../../chunks/BasePodcastBanner_BLzwXdFL.mjs';
import { $ as $$BaseNieuwsItem } from '../../../../chunks/BaseNieuwsItem_CTpZQqp3.mjs';
import { $ as $$BaseHeadExclude } from '../../../../chunks/BaseHeadExclude_hmxA-bO9.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_B5yu7hFc.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const allPostsRaw = await getCollection("nieuws");
  function extractTextFromBody(body) {
    if (typeof body === "string") {
      return body;
    }
    if (body && typeof body === "object") {
      if (body.children && Array.isArray(body.children)) {
        const extractText = (node) => {
          if (node.type === "text") return node.text || "";
          if (node.children && Array.isArray(node.children)) {
            return node.children.map(extractText).join(" ");
          }
          return "";
        };
        return body.children.map(extractText).join(" ").replace(/\s+/g, " ").trim();
      }
    }
    return "";
  }
  function getCleanId(id) {
    return id ? id.replace(/\.mdx$/, "") : "";
  }
  const allPosts = allPostsRaw.map((post) => ({
    url: `/nieuws/${getCleanId(post.id)}`,
    frontmatter: post.data,
    rawContent: () => {
      const body = post.data.body;
      const textContent = extractTextFromBody(body);
      if (textContent) {
        return textContent.substring(0, 200) + (textContent.length > 200 ? "..." : "");
      }
      return "";
    }
  }));
  const tagMap = /* @__PURE__ */ new Map();
  allPosts.forEach((post) => {
    if (post.frontmatter.title && post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag) => {
        const formattedTag = tag.toLowerCase().replace(/:/g, "");
        if (!tagMap.has(formattedTag)) {
          tagMap.set(formattedTag, []);
        }
        tagMap.get(formattedTag).push(post);
      });
    }
  });
  const routes = [];
  for (const [tag, posts] of tagMap.entries()) {
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
    const paginatedPages = paginate(sortedPosts, {
      params: { tag },
      props: { tag },
      pageSize: 8
    });
    routes.push(...paginatedPages);
  }
  return routes;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page, tag } = Astro2.props;
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
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Film & TV nieuws - ${tag}</h1> <div class="w-layout-grid nieuws-list"> <div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper list"> <a href="/nieuws/tags/film/1" class="categories-pill w-inline-block"><div class="title-small pink">Film</div></a> <a href="/nieuws/tags/tv/1" class="categories-pill w-inline-block"><div class="title-small pink">TV</div></a> <a href="/nieuws/tags/comics/1" class="categories-pill w-inline-block"><div class="title-small pink">Comics</div></a> <a href="/nieuws/tags/trailer/1" class="categories-pill w-inline-block"><div class="title-small pink">Trailer</div></a> <a href="/nieuws/tags/casting/1" class="categories-pill w-inline-block"><div class="title-small pink">Casting</div></a> </div> </div> ${page.data.map((post) => renderTemplate`${renderComponent($$result, "BaseNieuwsItem", $$BaseNieuwsItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent() })}`)} <div class="pagination-wrapper"> <div class="pagination"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="previous-button w-inline-block"><div class="title-medium">Vorige</div></a>` : null} ${start > 1 ? renderTemplate`<span>... </span>` : null} ${Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
    (number) => number === currentPage ? renderTemplate`<strong class="page-indicator">${number}</strong>` : renderTemplate`<a${addAttribute(`/nieuws/tags/${tag}/${number}`, "href")}>${number}</a>`
  )} ${end < totalPages ? renderTemplate`<span> ...</span>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="next-button w-inline-block"><div class="title-medium">Volgende</div></a>` : null} </div> </div> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </div></body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/tags/[tag]/[page].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/tags/[tag]/[page].astro";
const $$url = "/nieuws/tags/[tag]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
