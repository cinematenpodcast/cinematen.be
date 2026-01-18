import { c as createComponent, d as createAstro } from '../../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../../../chunks/_astro_content_B5yu7hFc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
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
  const allPostsRaw = await getCollection("nieuws");
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
  return Array.from(tagMap.entries()).map(([tag, posts]) => ({
    params: { tag },
    props: { posts }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  return new Response(null, {
    status: 301,
    headers: {
      "Location": `/nieuws/tags/${tag}/1`,
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/tags/[tag].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/tags/[tag].astro";
const $$url = "/nieuws/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
