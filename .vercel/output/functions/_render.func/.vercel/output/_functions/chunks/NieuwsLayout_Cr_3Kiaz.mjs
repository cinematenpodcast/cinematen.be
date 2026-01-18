import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, e as addAttribute, f as renderSlot, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeadNieuws } from './BaseHeadNieuws_CisD6Xjb.mjs';
import { $ as $$NewNavmenu } from './NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BaseHeader, a as $$BaseFooter } from './BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from './BaseScript_FGFGKkyq.mjs';
import { $ as $$BasePodcastBanner } from './BasePodcastBanner_BLzwXdFL.mjs';
import { $ as $$RandomReviews } from './RandomReviews_ClDNyZKP.mjs';

const $$Astro = createAstro();
const $$NieuwsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NieuwsLayout;
  const { frontmatter } = Astro2.props;
  const canonicalURL = `https://cinematen.be${Astro2.url.pathname}`;
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
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadNieuws", $$BaseHeadNieuws, { "title": frontmatter.title, "thumbnail": frontmatter.thumbnail, "content": frontmatter.summary, "canonicalURL": canonicalURL, "publishedDate": frontmatter.date, "modifiedDate": frontmatter.date, "author": "Yorrick" })}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div data-w-id="75dba001-0326-9ad8-ca3e-3734b81d7ff9" class="content"> <div class="container"> <a href="javascript:history.back();" class="terug-knop w-inline-block"> <div class="terug-div"> <img src="https://assets-global.website-files.com/6613d9d7c23cff2286422b25/66145e1f24aa75e6e8efe154_pijl.svg" loading="lazy" width="10" alt="" class="image-4"> <div class="terugknop-text">
Terug
</div> </div> </a> <div class="content-left"> <div class="blog-post-container"> <div id="w-node-_834894ef-45d4-3601-08c4-adde27664434-01535055" class="blog-header"> <div id="w-node-b6eeaddc-234a-634b-164b-ca588e2dae68-01535055" class="blog-image-wrap"> <img${addAttribute(frontmatter.thumbnail, "src")} width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, 42vw" class="blog-image" alt="thumbnail"> </div> <div id="w-node-b6eeaddc-234a-634b-164b-ca588e2dae6a-01535055" class="blog-title"> <h3 class="heading-h2 nieuws-cat"> ${frontmatter.soort} nieuws
</h3> <h1 class="heading-h2 blog-title"> ${frontmatter.title} </h1> <!-- Check if formattedDateTime is not empty before rendering --> ${formattedDateTime && renderTemplate`<p class="paragraph-detials-small"> ${formattedDateTime} </p>`} </div> </div> <div id="w-node-_2957b33b-ee9d-a9a8-80b3-56ea90e637f9-01535055" class="blog-text w-richtext"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div> ${renderComponent($$result, "RandomReviews", $$RandomReviews, { "currentSlug": frontmatter.slug })} </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </div> ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/layouts/NieuwsLayout.astro", void 0);

export { $$NieuwsLayout as default };
