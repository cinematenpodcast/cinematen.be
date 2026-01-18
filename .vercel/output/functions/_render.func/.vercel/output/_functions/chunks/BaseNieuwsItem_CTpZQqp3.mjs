import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseNieuwsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseNieuwsItem;
  const { title, url, thumbnail, date, content } = Astro2.props;
  function formatDate(dateString) {
    const date2 = new Date(dateString);
    if (isNaN(date2.getTime())) return "";
    const options = { timeZone: "UTC", hour12: false, hour: "numeric", minute: "numeric" };
    const formattedDate = date2.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timePart = date2.toLocaleTimeString("nl-NL", options);
    return timePart === "00:00" ? formattedDate : `${formattedDate} ${timePart}`;
  }
  function cleanContent(content2) {
    if (!content2 || typeof content2 !== "string") return "";
    return content2.replace(/---[\s\S]*?---/g, "").replace(/#{1,6}\s+/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/\s+/g, " ").trim();
  }
  const formattedDateTime = formatDate(date);
  const displayContent = cleanContent(content);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="blog-item w-inline-block" data-astro-cid-iiayp435> <div class="blog-image-wrap" data-astro-cid-iiayp435> <img${addAttribute(thumbnail, "src")} width="Auto" sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 876px) 89vw, (max-width: 991px) 780px, 40vw" alt="" class="blog-image" data-astro-cid-iiayp435> </div> <div id="w-node-_418d31a5-b85b-8a37-3c22-664fffc3beb3-86422b70" class="blog-content" data-astro-cid-iiayp435> <h3 class="heading-h2" data-astro-cid-iiayp435> ${title} </h3> <p class="paragraph-detials-medium" id="summary" data-astro-cid-iiayp435> ${displayContent} </p> <div class="date-time" data-astro-cid-iiayp435> <div class="normal-wrapper" data-astro-cid-iiayp435> <p class="paragraph-detials-small" data-astro-cid-iiayp435> ${formattedDateTime && renderTemplate`<p class="paragraph-detials-small" data-astro-cid-iiayp435>${formattedDateTime}</p>`} </p> </div> <div class="lees-meer" data-astro-cid-iiayp435>Lees meer...</div> </div> </div> </a> `;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseNieuwsItem.astro", void 0);

export { $$BaseNieuwsItem as $ };
