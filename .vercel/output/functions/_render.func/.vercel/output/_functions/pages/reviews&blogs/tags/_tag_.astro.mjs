import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, r as renderTemplate } from '../../../chunks/astro/server_Cu2gcJ3R.mjs';
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
async function getStaticPaths() {
  function getCleanId(id) {
    return id ? id.replace(/\.mdx$/, "") : "";
  }
  const allPostsRaw = await getCollection("reviews");
  const allPosts = allPostsRaw.map((post) => ({
    url: `/reviews&blogs/${getCleanId(post.id)}`,
    frontmatter: post.data,
    rawContent: () => {
      const body = post.data.body;
      if (typeof body === "string") {
        return body.substring(0, 200) + "...";
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
  return Array.from(tagMap.entries()).map(([tag, posts]) => ({
    params: { tag },
    props: {
      tagname: tag,
      count: posts.length,
      tagged: posts
    }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  Astro2.params.tag.toLowerCase();
  const { tagged, count: tagcount } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Reviews & Blogs</h1> <div class="w-layout-grid nieuws-list"> <div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper list"> <a href="/reviews&blogs/tags/film" class="categories-pill w-inline-block"><div class="title-small pink">Film</div></a> <a href="/reviews&blogs/tags/tv" class="categories-pill w-inline-block"><div class="title-small pink">TV</div></a> <a href="/reviews&blogs/tags/blog" class="categories-pill w-inline-block"><div class="title-small pink">Blog</div></a> <a href="/reviews&blogs/tags/vlaams" class="categories-pill w-inline-block"><div class="title-small pink">Vlaams</div></a> <a href="/reviews&blogs/tags/reality" class="categories-pill w-inline-block"><div class="title-small pink">Reality</div></a> <a href="/reviews&blogs/tags/actie" class="categories-pill w-inline-block"><div class="title-small pink">Actie</div></a> <a href="/reviews&blogs/tags/horror" class="categories-pill w-inline-block"><div class="title-small pink">Horror</div></a> <a href="/reviews&blogs/tags/comedy" class="categories-pill w-inline-block"><div class="title-small pink">Comedy</div></a> </div> </div> ${tagged.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).map((post) => renderTemplate`${renderComponent($$result, "BaseReviewItem", $$BaseReviewItem, { "key": post.url, "url": post.url, "schrijver": post.frontmatter.schrijver, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent, "summary": post.frontmatter.summary, "rating": post.frontmatter.rating })}`)} <!--div class="pagination-wrapper">
                            <div class="pagination">
                                {page.url.prev ? <a href={page.url.prev} class="previous-button w-inline-block"><div class="title-medium">Vorige</div></a> : null}
                                {start > 1 ? <span>... </span> : null}
                                {Array.from({ length: end - start + 1 }, (_, i) => i + start).map(number =>
                                    number === currentPage ? (
                                        <strong class="page-indicator" key={number}>{number}</strong>
                                    ) : (
                                        <a href={\`/\${number}\`} key={number}>{number}</a>
                                    )
                                )}
                                {end < totalPages ? <span> ...</span> : null}
                                {page.url.next ? <a href={page.url.next} class="next-button w-inline-block"><div class="title-medium">Volgende</div></a> : null}
                            </div>
                        </div !--> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </div></body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/tags/[tag].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/tags/[tag].astro";
const $$url = "/reviews&blogs/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
