import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, r as renderTemplate, e as addAttribute } from '../../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../../../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../../../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$NewNavmenu } from '../../../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BasePodcastBanner } from '../../../chunks/BasePodcastBanner_BLzwXdFL.mjs';
import { $ as $$BaseNieuwsItem } from '../../../chunks/BaseNieuwsItem_CTpZQqp3.mjs';
import { $ as $$BaseHeadExclude } from '../../../chunks/BaseHeadExclude_hmxA-bO9.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_B5yu7hFc.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const allNieuwsPosts = await getCollection("nieuws");
  const sortedPosts = allNieuwsPosts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  function extractTextFromBody(body) {
    if (!body) return "";
    if (typeof body === "string") {
      return body.replace(/---[\s\S]*?---/g, "").replace(/#{1,6}\s+/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/\s+/g, " ").trim();
    }
    if (body && typeof body === "object") {
      if (body.children && Array.isArray(body.children)) {
        const extractText = (node) => {
          if (!node) return "";
          if (node.type === "text" && node.text) {
            return node.text;
          }
          if (node.children && Array.isArray(node.children)) {
            return node.children.map(extractText).filter(Boolean).join(" ");
          }
          return "";
        };
        const extracted = body.children.map(extractText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
        if (extracted) return extracted;
      }
    }
    return "";
  }
  function extractTextFromMDXFile(slug) {
    try {
      const cleanSlug = slug.replace(/\.mdx$/, "");
      const filePath = join(process.cwd(), "src/content/nieuws", `${cleanSlug}.mdx`);
      const content = readFileSync(filePath, "utf-8");
      if (!content || content.trim().length === 0) {
        return "";
      }
      const withoutFrontmatter = content.replace(/^---[\s\S]*?---\s*\n\n?/m, "");
      const text = withoutFrontmatter.replace(/#{1,6}\s+/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "").replace(/\s+/g, " ").trim();
      if (!text || text.length === 0) {
        return "";
      }
      return text.substring(0, 200) + (text.length > 200 ? "..." : "");
    } catch (e) {
      return "";
    }
  }
  function getCleanId(id) {
    return id ? id.replace(/\.mdx$/, "") : "";
  }
  const mappedPosts = sortedPosts.map((post) => {
    let contentPreview = post.data.bodyPreview || extractTextFromBody(post.data.body) || "";
    if (!contentPreview && post.id) {
      contentPreview = extractTextFromMDXFile(post.id);
    }
    return {
      url: `/nieuws/${getCleanId(post.id)}`,
      frontmatter: post.data,
      rawContent: contentPreview
    };
  });
  return paginate(mappedPosts, { pageSize: 8 });
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
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Film & TV nieuws</h1> <div class="w-layout-grid nieuws-list"> <div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper list"> <a href="/nieuws/tags/film" class="categories-pill w-inline-block"><div class="title-small pink">Film</div></a> <a href="/nieuws/tags/tv" class="categories-pill w-inline-block"><div class="title-small pink">TV</div></a> <a href="/nieuws/tags/comics" class="categories-pill w-inline-block"><div class="title-small pink">Comics</div></a> <a href="/nieuws/tags/trailer" class="categories-pill w-inline-block"><div class="title-small pink">Trailer</div></a> <a href="/nieuws/tags/casting" class="categories-pill w-inline-block"><div class="title-small pink">Casting</div></a> </div> </div> ${page.data.map((post) => renderTemplate`${renderComponent($$result, "BaseNieuwsItem", $$BaseNieuwsItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent || "" })}`)} <div class="pagination-wrapper"> <div class="pagination"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="previous-button w-inline-block"><div class="title-medium">Vorige</div></a>` : null} ${start > 1 ? renderTemplate`<span>... </span>` : null} ${Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
    (number) => number === currentPage ? renderTemplate`<strong class="page-indicator">${number}</strong>` : renderTemplate`<a${addAttribute(`/nieuws/pages/${number}`, "href")}>${number}</a>`
  )} ${end < totalPages ? renderTemplate`<span> ...</span>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="next-button w-inline-block"><div class="title-medium">Volgende</div></a>` : null} </div> </div> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </div></body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/pages/[page].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/pages/[page].astro";
const $$url = "/nieuws/pages/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
