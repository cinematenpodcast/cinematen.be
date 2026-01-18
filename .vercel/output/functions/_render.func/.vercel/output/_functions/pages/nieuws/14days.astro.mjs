import { c as createComponent, b as renderComponent, a as renderHead, r as renderTemplate } from '../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$NewNavmenu } from '../../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BaseNieuwsItem } from '../../chunks/BaseNieuwsItem_CTpZQqp3.mjs';
import { $ as $$BaseHeadExclude } from '../../chunks/BaseHeadExclude_hmxA-bO9.mjs';
import { g as getCollection } from '../../chunks/_astro_content_B5yu7hFc.mjs';
export { renderers } from '../../renderers.mjs';

const $$14Days = createComponent(async ($$result, $$props, $$slots) => {
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
  const allNieuwsPostsRaw = await getCollection("nieuws");
  const allNieuwsPosts = allNieuwsPostsRaw.map((post) => ({
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
  const thresholdDate = /* @__PURE__ */ new Date("2024-09-21");
  const filteredPosts = allNieuwsPosts.filter((post) => new Date(post.frontmatter.date) >= thresholdDate);
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Film & TV nieuws</h1> <div class="w-layout-grid nieuws-list"> ${filteredPosts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).map((post) => renderTemplate`${renderComponent($$result, "BaseNieuwsItem", $$BaseNieuwsItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent })}`)} </div> </div> </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </div> ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/14days.astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/14days.astro";
const $$url = "/nieuws/14days";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$14Days,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
