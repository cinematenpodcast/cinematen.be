import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, e as addAttribute, f as renderSlot, r as renderTemplate } from '../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../../chunks/BaseHead_BSrZkai4.mjs';
import { $ as $$NewNavmenu } from '../../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$BasePodcastBanner } from '../../chunks/BasePodcastBanner_BLzwXdFL.mjs';
import { $ as $$RandomReviews } from '../../chunks/RandomReviews_ClDNyZKP.mjs';
import { c as client } from '../../chunks/client_D9q0-Dzd.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'react';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import '../../chunks/LinkPreview_Lqvf3AVm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ReviewLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReviewLayout;
  const { frontmatter } = Astro2.props;
  const canonicalURL = `https://cinematen.be${Astro2.url.pathname}`;
  const reviewTitle = `${frontmatter.title} - ${frontmatter.soort || "Review"}`;
  const reviewDescription = `Lees onze ${frontmatter.soort ? frontmatter.soort.toLowerCase() : ""} review van ${frontmatter.title}. Bekijk onze beoordeling en ontdek of deze ${frontmatter.soort ? frontmatter.soort.toLowerCase() : "content"} de moeite waard is.`;
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    const options = {
      timeZone: "UTC",
      hour12: false
    };
    const formattedDate = date.toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    const timePart = date.toLocaleTimeString("nl-NL", options);
    return timePart === "00:00" ? formattedDate : `${formattedDate} ${timePart}`;
  }
  const formattedDateTime = formatDate(frontmatter.date);
  function generateStarRating(rating) {
    const fullStar = "/images/star-full.png";
    const halfStar = "/images/star-half.png";
    const emptyStar = "/images/star-empty.png";
    const stars = [];
    let remainingRating = rating;
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
  const parsedRating = parseFloat(frontmatter.rating);
  const validatedRating = isNaN(parsedRating) ? 0 : Math.min(Math.max(parsedRating, 0), 5);
  const starRatingImages = generateStarRating(validatedRating);
  console.log("Rating:", frontmatter.rating);
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "canonicalURL": canonicalURL, "title": reviewTitle, "description": reviewDescription, "publishedDate": frontmatter.date, "modifiedDate": frontmatter.date, "articleType": "article", "author": frontmatter.schrijver, "image": frontmatter.poster })}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div data-w-id="75dba001-0326-9ad8-ca3e-3734b81d7ff9" class="content"> <div class="container"> <a href="javascript:history.back();" class="terug-knop w-inline-block"> <div class="terug-div"> <img src="https://assets-global.website-files.com/6613d9d7c23cff2286422b25/66145e1f24aa75e6e8efe154_pijl.svg" loading="lazy" width="10" alt="" class="image-4"> <div class="terugknop-text">
Terug
</div> </div> </a> <div class="content-left"> <div class="blog-post-container w-clearfix"> <img${addAttribute(frontmatter.poster, "src")} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 23vw, (max-width: 991px) 300px, 400px" alt="" class="review-poster"> <div id="w-node-_069f2f58-921b-4412-13ba-a31b655496e4-9b14680e" class="review-content-block"> <div id="w-node-_069f2f58-921b-4412-13ba-a31b655496e7-9b14680e" class="review-title"> <div class="review-header-bottom"> <h3 class="heading-h2 review-topic"> ${frontmatter.soort} door ${frontmatter.schrijver} </h3> <h1 class="heading-h2 review-title"> ${frontmatter.title} </h1> ${frontmatter.rating && frontmatter.rating > 0 && renderTemplate`<div class="rating-blue"> ${starRatingImages.map((starImage) => renderTemplate`<img${addAttribute(starImage, "src")} loading="lazy" alt="" class="star-image">`)} </div>`} </div> ${formattedDateTime && renderTemplate`<p class="paragraph-detials-small"> ${formattedDateTime} </p>`} </div> </div> <div id="w-node-_069f2f58-921b-4412-13ba-a31b655496ee-9b14680e" class="review-text w-richtext"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div> </div> ${renderComponent($$result, "RandomReviews", $$RandomReviews, { "currentSlug": frontmatter.slug })} ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </div> ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/layouts/ReviewLayout.astro", void 0);

const components = {
  YouTube: (props) => {
    let videoId = props.id;
    if (props.id.includes("youtube.com") || props.id.includes("youtu.be")) {
      const match = props.id.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
      videoId = match ? match[1] : props.id;
    }
    return /* @__PURE__ */ jsx("div", { style: { margin: "20px 0", position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }, children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: `https://www.youtube-nocookie.com/embed/${videoId}`,
        style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
        title: "YouTube video player",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        allowFullScreen: true
      }
    ) });
  },
  EmptySpaceS: () => /* @__PURE__ */ jsx("div", { style: { height: "20px" } }),
  EmptySpaceM: () => /* @__PURE__ */ jsx("div", { style: { height: "40px" } }),
  EmptySpaceL: () => /* @__PURE__ */ jsx("div", { style: { height: "60px" } })
};
function AdminReview(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });
  const review = data.reviews;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { "data-tina-field": tinaField(review, "body"), children: /* @__PURE__ */ jsx(TinaMarkdown, { content: review.body, components }) }),
    review.trailer && /* @__PURE__ */ jsxs("div", { id: "trailer", "data-tina-field": tinaField(review, "trailer"), children: [
      /* @__PURE__ */ jsx("h2", { style: { textAlign: "center", marginTop: "80px" }, children: "Bekijk hier de trailer:" }),
      /* @__PURE__ */ jsx("div", { className: "video-container", children: /* @__PURE__ */ jsx("div", { className: "video-wrapper", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: `https://www.youtube-nocookie.com/embed/${review.trailer}`,
          title: "YouTube video player",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerPolicy: "strict-origin-when-cross-origin",
          allowFullScreen: true
        }
      ) }) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  let tinaProps;
  try {
    tinaProps = await client.queries.reviews({
      relativePath: `${slug}.mdx`
    });
  } catch (e) {
    console.error(`Error fetching updated content for slug: ${slug}`, e);
    return Astro2.redirect("/404");
  }
  const frontmatter = tinaProps.data.reviews;
  Astro2.response.headers.set("Cache-Control", "public, max-age=60, s-maxage=60");
  return renderTemplate`${renderComponent($$result, "ReviewLayout", $$ReviewLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminReview", AdminReview, { ...tinaProps, "client:tina": true, "client:component-hydration": "tina", "client:component-path": "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/tina/pages/AdminReview", "client:component-export": "default" })} ` })}`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/[...slug].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/[...slug].astro";
const $$url = "/reviews&blogs/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
