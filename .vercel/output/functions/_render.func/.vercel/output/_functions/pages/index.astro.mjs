import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as createAstro, b as renderComponent, a as renderHead } from '../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_BSrZkai4.mjs';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$NewNavmenu } from '../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BasePodcastBanner } from '../chunks/BasePodcastBanner_BLzwXdFL.mjs';
import 'clsx';
import { $ as $$BaseNieuwsItem } from '../chunks/BaseNieuwsItem_CTpZQqp3.mjs';
import { $ as $$BaseFeaturedItem } from '../chunks/BaseFeaturedItem_Dlk-C3TW.mjs';
import { $ as $$BaseReviewItem } from '../chunks/BaseReviewItem_CWCU7vU0.mjs';
import { g as getCollection } from '../chunks/_astro_content_B5yu7hFc.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$CategoriesNieuws = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper"> <a href="/nieuws/tags/film" class="categories-pill w-inline-block"> <div class="title-small pink">Film</div> </a><a href="/nieuws/tags/tv" class="categories-pill w-inline-block"> <div class="title-small pink">TV</div> </a><a href="/nieuws/tags/comics" class="categories-pill w-inline-block"> <div class="title-small pink">Comics</div> </a><a href="/nieuws/tags/trailer" class="categories-pill w-inline-block"> <div class="title-small pink">Trailer</div> </a><a href="/nieuws/tags/casting" class="categories-pill w-inline-block"> <div class="title-small pink">Casting</div> </a> </div> </div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/CategoriesNieuws.astro", void 0);

const $$CategoriesReviews = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="categories-block"> <div class="title-large">Categorieën</div> <div class="categories-wrapper"> <a href="/reviews&blogs/tags/film" class="categories-pill w-inline-block"><div class="title-small pink">Film</div></a> <a href="/reviews&blogs/tags/tv" class="categories-pill w-inline-block"><div class="title-small pink">TV</div></a> <a href="/reviews&blogs/tags/blog" class="categories-pill w-inline-block"><div class="title-small pink">Blog</div></a> <a href="/reviews&blogs/tags/vlaams" class="categories-pill w-inline-block"><div class="title-small pink">Vlaams</div></a> <a href="/reviews&blogs/tags/reality" class="categories-pill w-inline-block"><div class="title-small pink">Reality</div></a> <a href="/reviews&blogs/tags/actie" class="categories-pill w-inline-block"><div class="title-small pink">Actie</div></a> <a href="/reviews&blogs/tags/horror" class="categories-pill w-inline-block"><div class="title-small pink">Horror</div></a> <a href="/reviews&blogs/tags/comedy" class="categories-pill w-inline-block"><div class="title-small pink">Comedy</div></a> </div> </div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/CategoriesReviews.astro", void 0);

const $$BasePodcastBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="podcast-banner"> <iframe title="spotify-player" style="border-radius:12px" src="https://open.spotify.com/embed/show/19O8JqKPSbQWek15vG3sig?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe> </div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BasePodcastBlock.astro", void 0);

const $$BaseAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-about" id="over-ons"> <div class="page-padding"> <div class="container-medium"> <div class="padding-bottom padding-large"> <div class="w-layout-grid about_content-wrapper"> <div class="image_container" id="aboutphoto"><img src="/images/cinematen-boys.png" loading="lazy" sizes="100vw" alt="" class="image_blending-effect"></div> <div class="about_content" id="about_content_text"> <h2 class="heading-5">Wat zijn Cinematen?</h2> <div class="margin-top margin-small"> <p>Ben je het beu om door al die streamingdiensten te scrollen zonder enig idee
                                wat je moet kijken? Sta je vaak in de grote inkomhal van de Kinepolis en
                                weet je totaal niet welke film je best kan zien?<br><br>Laat Yorrick
                                &amp; Maarten je film- en tv-gidsen zijn! Met hun hilarische commentaar en
                                &quot;deskundige&quot; meningen weet je altijd wat je moet kijken. En zo
                                niet, dan kun je op zijn minst lachen om hun geflodder.</p> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseAbout.astro", void 0);

const $$BaseContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-contact-form background-color-gradient-blue1" id="contact"> <div class="page-padding"> <div class="container-medium"> <div class="padding-vertical padding-xxlarge"> <h2>Contacteer ons!</h2> <div class="margin-top margin-large"> <div class="form-wrapper-2 w-form"> <form action="https://formspree.io/f/xknllzer" id="email-form" method="post" name="email-form" aria-label="Form"> <div class="form-field-wrapper"><input class="form-input-2 w-input" maxlength="256" name="Naam" data-name="Naam" placeholder="Naam" type="text" id="Naam" required=""></div> <div class="form-field-wrapper"><input class="form-input-2 w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required=""></div> <div class="form-field-wrapper"><textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Je boodschap, vraag, compliment, suggestie, feedback, e.d..." class="form-input-2 is-text-area w-input"></textarea></div> <div class="margin-top margin-small"><input type="submit" data-wait="Please wait..." class="button-2 is-form-submit w-button" value="Verzend"></div> </form> </div> <div class="margin-top margin-large"> <a href="mailto:info@cinematen.be" class="button-2 is-form-submit w-button" style="text-decoration: none; display: block; text-align: center; width: 33%; margin-left: auto; margin-right: auto;">Of mail ons!</a> </div> </div> </div> </div> </div> </section>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseContact.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
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
      try {
        const stringified = JSON.stringify(body);
        const textMatches = stringified.match(/"text"\s*:\s*"([^"]+)"/g);
        if (textMatches && textMatches.length > 0) {
          return textMatches.map((m) => {
            const match = m.match(/"text"\s*:\s*"([^"]+)"/);
            return match ? match[1] : "";
          }).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
        }
        const allStringMatches = stringified.match(/"([^"]{20,})"/g);
        if (allStringMatches) {
          const contentStrings = allStringMatches.map((m) => m.replace(/"/g, "")).filter(
            (s) => s.length > 20 && !s.startsWith("http") && !s.startsWith("/") && !s.includes("@") && s.match(/[a-zA-Z]{3,}/)
            // Contains at least one word
          );
          if (contentStrings.length > 0) {
            return contentStrings.slice(0, 3).join(" ").substring(0, 200);
          }
        }
      } catch (e) {
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
  const allNieuwsPostsRaw = await getCollection("nieuws");
  const allNieuwsPosts = allNieuwsPostsRaw.map((post) => {
    let contentPreview = post.data.bodyPreview || extractTextFromBody(post.data.body) || "";
    if (!contentPreview && post.id) {
      const isFirstPost = allNieuwsPostsRaw.indexOf(post) === 0;
      if (isFirstPost) {
        console.log("\n=== DEBUG EXTRACT FROM FILE ===");
        console.log("post.id:", post.id);
        console.log("process.cwd():", process.cwd());
      }
      contentPreview = extractTextFromMDXFile(post.id);
      if (isFirstPost) {
        console.log("contentPreview after extractTextFromMDXFile:", contentPreview.substring(0, 100));
        console.log("===============================\n");
      }
    }
    return {
      url: `/nieuws/${getCleanId(post.id)}`,
      frontmatter: post.data,
      rawContent: contentPreview
    };
  });
  const allRnbPostsRaw = await getCollection("reviews");
  const allRnbPosts = allRnbPostsRaw.map((post) => ({
    url: `/reviews&blogs/${getCleanId(post.id)}`,
    frontmatter: post.data,
    rawContent: () => post.body || ""
  }));
  const canonicalURL = `https://cinematen.be${Astro2.url.pathname}`;
  return renderTemplate`<html lang="nl" data-astro-cid-37fxchfa> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "canonicalURL": canonicalURL, "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body class="body" data-astro-cid-37fxchfa> <div class="page-wrapper" data-astro-cid-37fxchfa> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, { "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "BaseHeader", $$BaseHeader, { "data-astro-cid-37fxchfa": true })} <main class="content" data-astro-cid-37fxchfa> <section class="nieuws-section" data-astro-cid-37fxchfa> <h1 class="nieuws-title" data-astro-cid-37fxchfa>Film & TV nieuws</h1> <div class="container" data-astro-cid-37fxchfa> <div class="w-layout-grid blog-grid" data-astro-cid-37fxchfa> <div class="content-left" data-astro-cid-37fxchfa> ${allNieuwsPosts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).slice(0, 5).map((post) => renderTemplate`<article data-astro-cid-37fxchfa> ${renderComponent($$result, "BaseNieuwsItem", $$BaseNieuwsItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "content": post.rawContent || "", "data-astro-cid-37fxchfa": true })} </article>`)} <nav data-astro-cid-37fxchfa> <a href="/nieuws" class="next-button" data-astro-cid-37fxchfa> <div class="title-medium" data-astro-cid-37fxchfa>Meer nieuws</div> </a> </nav> </div> <aside class="content-right" data-astro-cid-37fxchfa> <div class="stick-wrapper" data-astro-cid-37fxchfa> ${renderComponent($$result, "BasePodcastBlock", $$BasePodcastBlock, { "data-astro-cid-37fxchfa": true })} <section class="featured-articles" data-astro-cid-37fxchfa> <h2 class="title-large xtra" data-astro-cid-37fxchfa>Uitgelicht</h2> <div class="featured-block" data-astro-cid-37fxchfa> ${allRnbPosts.filter((post) => post.frontmatter.featured).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).slice(0, 5).map((post) => renderTemplate`<article data-astro-cid-37fxchfa> ${renderComponent($$result, "BaseFeaturedItem", $$BaseFeaturedItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "featured": post.frontmatter.featured, "rating": post.frontmatter.rating, "asLink": true, "square": true, "data-astro-cid-37fxchfa": true })} </article>`)} </div> </section> ${renderComponent($$result, "CategoriesNieuws", $$CategoriesNieuws, { "data-astro-cid-37fxchfa": true })} </div> </aside> </div> </div> </section> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, { "data-astro-cid-37fxchfa": true })} <section class="reviews-section" data-astro-cid-37fxchfa> <div class="container" data-astro-cid-37fxchfa> <h1 class="nieuws-title" data-astro-cid-37fxchfa>Reviews & Blogs</h1> <div class="w-layout-grid blog-grid" data-astro-cid-37fxchfa> <div class="content-left" data-astro-cid-37fxchfa> ${allRnbPosts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).slice(0, 5).map((post) => renderTemplate`<article data-astro-cid-37fxchfa> ${renderComponent($$result, "BaseReviewItem", $$BaseReviewItem, { "key": post.url, "url": post.url, "schrijver": post.frontmatter.schrijver, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "summary": post.frontmatter.summary, "rating": post.frontmatter.rating, "data-astro-cid-37fxchfa": true })} </article>`)} <nav data-astro-cid-37fxchfa> <a href="/reviews&blogs" class="next-button" data-astro-cid-37fxchfa> <div class="title-medium" data-astro-cid-37fxchfa>Meer Reviews & Blogs</div> </a> </nav> </div> <aside class="content-right" data-astro-cid-37fxchfa> <div class="stick-wrapper" data-astro-cid-37fxchfa> <section class="featured-articles" data-astro-cid-37fxchfa> <h2 class="title-large xtra" data-astro-cid-37fxchfa>Cinematen Top 5</h2> <div class="featured-block" data-astro-cid-37fxchfa> ${allRnbPosts.filter((post) => post.frontmatter.rating !== void 0).filter((post) => post.frontmatter.rating !== null).sort((a, b) => {
    const ratingA = parseFloat(a.frontmatter.rating) || 0;
    const ratingB = parseFloat(b.frontmatter.rating) || 0;
    if (ratingB !== ratingA) {
      return ratingB - ratingA;
    }
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  }).slice(0, 5).map((post) => renderTemplate`<article data-astro-cid-37fxchfa> ${renderComponent($$result, "BaseFeaturedItem", $$BaseFeaturedItem, { "key": post.url, "url": post.url, "title": post.frontmatter.title, "thumbnail": post.frontmatter.thumbnail, "date": post.frontmatter.date, "featured": post.frontmatter.featured, "rating": post.frontmatter.rating, "asLink": true, "square": true, "data-astro-cid-37fxchfa": true })} </article>`)} </div> </section> ${renderComponent($$result, "CategoriesReviews", $$CategoriesReviews, { "data-astro-cid-37fxchfa": true })} </div> </aside> </div> </div> </section> </main> ${renderComponent($$result, "BaseAbout", $$BaseAbout, { "id": "over-ons", "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "BaseContact", $$BaseContact, { "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "BaseFooter", $$BaseFooter, { "data-astro-cid-37fxchfa": true })} </div>  </body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/layouts/BaseLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {})}`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/index.astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
