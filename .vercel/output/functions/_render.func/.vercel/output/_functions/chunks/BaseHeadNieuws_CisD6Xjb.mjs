import { c as createComponent, d as createAstro, r as renderTemplate, u as unescapeHTML, e as addAttribute } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                      */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseHeadNieuws = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHeadNieuws;
  const { title, thumbnail, content, canonicalURL, publishedDate, modifiedDate, author } = Astro2.props;
  const defaultCanonical = "https://cinematen.be/";
  const finalCanonical = canonicalURL || defaultCanonical;
  const defaultDescription = "Lees het laatste nieuws uit de film- en seriewereld op Cinematen.be";
  const finalDescription = content || defaultDescription;
  const formatDateForMeta = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date.toISOString();
  };
  const formattedPublishedDate = formatDateForMeta(publishedDate);
  const formattedModifiedDate = formatDateForMeta(modifiedDate);
  return renderTemplate(_a || (_a = __template(['<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ3KYRB0T1"><\/script>  <meta name="google-site-verification" content="Ue-nOWKl8b37dpA_44eTIqresdKx1GF8BO1BEfSXwg4"><meta charset="utf-8"><title>', "</title><meta", ' name="description"><meta', ' property="og:title"><meta', ' property="og:description"><meta', ' property="og:image"><meta', ' property="twitter:title"><meta', ' property="twitter:description"><meta', ' property="twitter:image"><meta content="article" property="og:type">', "", "", '<meta content="summary_large_image" name="twitter:card"><meta content="width=device-width, initial-scale=1" name="viewport"><meta', '><link href="/style.css" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com" rel="preconnect"><link crossorigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"><\/script><script type="text/javascript">\n    WebFont.load({\n        google: {\n            families: [\n                "Rubik:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic",\n                "Rubik Mono One:regular",\n            ],\n        },\n    });\n<\/script><script type="text/javascript">\n    !(function (o, c) {\n        var n = c.documentElement,\n            t = " w-mod-";\n        (n.className += t + "js"),\n            ("ontouchstart" in o ||\n                (o.DocumentTouch && c instanceof DocumentTouch)) &&\n                (n.className += t + "touch");\n    })(window, document);\n<\/script><script src="/script.js" defer><\/script><link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon"><link href="/images/webclip.png" rel="apple-touch-icon"><!-- Canonical URL --><link rel="canonical"', '><!-- Structured Data for News Article --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(finalDescription, "content"), addAttribute(title, "content"), addAttribute(finalDescription, "content"), addAttribute(thumbnail, "content"), addAttribute(title, "content"), addAttribute(finalDescription, "content"), addAttribute(thumbnail, "content"), formattedPublishedDate && renderTemplate`<meta${addAttribute(formattedPublishedDate, "content")} property="article:published_time">`, formattedModifiedDate && renderTemplate`<meta${addAttribute(formattedModifiedDate, "content")} property="article:modified_time">`, author && renderTemplate`<meta${addAttribute(author, "content")} property="article:author">`, addAttribute(title, "content"), addAttribute(finalCanonical, "href"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": finalDescription,
    "url": finalCanonical,
    ...formattedPublishedDate && { "datePublished": formattedPublishedDate },
    ...formattedModifiedDate && { "dateModified": formattedModifiedDate },
    ...author && { "author": { "@type": "Person", "name": author } },
    ...thumbnail && { "image": thumbnail },
    "publisher": {
      "@type": "Organization",
      "name": "Cinematen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cinematen.be/images/Cinematelogotrans.png"
      }
    }
  })));
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseHeadNieuws.astro", void 0);

export { $$BaseHeadNieuws as $ };
