import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, f as renderSlot, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeadNieuws } from '../chunks/BaseHeadNieuws_CisD6Xjb.mjs';
import { $ as $$NewNavmenu } from '../chunks/NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../chunks/BaseScript_FGFGKkyq.mjs';
import { $ as $$BasePodcastBanner } from '../chunks/BasePodcastBanner_BLzwXdFL.mjs';
/* empty css                                             */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$WatermarkLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WatermarkLayout;
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
  formatDate(frontmatter.date);
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadNieuws", $$BaseHeadNieuws, { "title": frontmatter.title, "thumbnail": frontmatter.thumbnail, "content": frontmatter.summary, "canonicalURL": canonicalURL, "publishedDate": frontmatter.date, "modifiedDate": frontmatter.date, "author": "Yorrick" })}<!-- Note: BaseHeadNieuws might use thumbnail for OG tags, which is fine even if not displayed on page -->${renderHead()}</head> <body class="body">  <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div data-w-id="75dba001-0326-9ad8-ca3e-3734b81d7ff9" class="content"> <div class="container"> <div class="content-left"> <div class="blog-post-container" style="width: 100%"> <!-- Title removed as requested --> <div id="w-node-_2957b33b-ee9d-a9a8-80b3-56ea90e637f9-01535055" class="blog-text w-richtext"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </div> ${renderComponent($$result, "BaseScript", $$BaseScript, {})}  </body> </html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/layouts/WatermarkLayout.astro", void 0);

const html = "<h1 id=\"how-to-remove-the-nano-banana-watermark-star\">How to remove the Nano Banana watermark star</h1>\n<p><em>Please use this information ethically and responsibly. Note that removing visible watermarks does not remove embedded metadata or technologies like SynthID, AI provenance is maintained for transparency reasons.</em></p>\n<h3 id=\"step-1\">Step 1</h3>\n<p>Go to <a href=\"https://aistudio.google.com\">aistudio.google.com</a> and login using a google account.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/aistudio-screenshot.webp\" alt=\"aistudio UI\"></p>\n<h3 id=\"step-2\">Step 2</h3>\n<p>Generate an image using Nano Banana. This is our BEFORE example. As you can see there is a little white star watermark in the corner. You could now download that image and use Photoshop te try and remove it. Or you can be smart and just continue this tutorial!</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/nano-banana-screenshot-1.webp\" alt=\"A generated image\"></p>\n<p><em>To use the PRO version you have to have a Google Cloud Project with Billing enabled. But the normal version is still free off charge and has no generation limits.</em></p>\n<h3 id=\"step-3\">Step 3</h3>\n<p>Go to <a href=\"https://requestly.com/\">Requestly.com</a>. There you can choose to install it as an extension on Chrome or install it systemwide.</p>\n<h3 id=\"step-4\">Step 4</h3>\n<p>When installed, open the <a href=\"https://app.requestly.io/\">Requestly dashboard.</a>\nThere click the <strong>Rules</strong> tab.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/requestly-screenshot-1.webp\" alt=\"Click the Rules tab\"></p>\n<h3 id=\"step-5\">Step 5</h3>\n<p>Let’s add a <strong>New Rule</strong>.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/requestly-screenshot-2.webp\" alt=\"Click New Rule\"></p>\n<h3 id=\"step-6\">Step 6</h3>\n<p>Add a <strong>Cancel Request</strong> rule.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/requestly-screenshot-3.webp\" alt=\"Click Cancel Request rule categorie\"></p>\n<h3 id=\"step-7\">Step 7</h3>\n<p>Here fill in the url: <a href=\"https://www.gstatic.com/aistudio/watermark/watermark_v4.png\">https://www.gstatic.com/aistudio/watermark/watermark_v4.png</a></p>\n<p>Then click <strong>Save Rule</strong>.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/requestly-screenshot-4.webp\" alt=\"Add URL and Save Rule\"></p>\n<h3 id=\"step-8\">Step 8</h3>\n<p>And that’s it! You’re done.</p>\n<p>Restart your browser and go have a look at the previously generated image. As you can see the little white star is now gone.</p>\n<p><img src=\"https://www.cinematen.be/images/watermark_remover/nano-banana-screenshot-2.webp\" alt=\"The watermark is gone\"></p>";

				const frontmatter = {"layout":"../layouts/WatermarkLayout.astro","title":"Watermark Workaround Tutorial","slug":"watermark_remover","date":"2024-03-15T00:00:00.000Z","summary":"Tutorial on how to remove watermarks.","thumbnail":""};
				const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/watermark_remover.md";
				const url = "/watermark_remover";
				function rawContent() {
					return "\n# How to remove the Nano Banana watermark star\n\n_Please use this information ethically and responsibly. Note that removing visible watermarks does not remove embedded metadata or technologies like SynthID, AI provenance is maintained for transparency reasons._\n\n### Step 1\n\nGo to [aistudio.google.com](https://aistudio.google.com) and login using a google account.\n\n![aistudio UI](https://www.cinematen.be/images/watermark_remover/aistudio-screenshot.webp)\n\n\n### Step 2\n\nGenerate an image using Nano Banana. This is our BEFORE example. As you can see there is a little white star watermark in the corner. You could now download that image and use Photoshop te try and remove it. Or you can be smart and just continue this tutorial!\n\n![A generated image](https://www.cinematen.be/images/watermark_remover/nano-banana-screenshot-1.webp)\n\n_To use the PRO version you have to have a Google Cloud Project with Billing enabled. But the normal version is still free off charge and has no generation limits._\n\n\n### Step 3\n\nGo to [Requestly.com](https://requestly.com/). There you can choose to install it as an extension on Chrome or install it systemwide.\n\n\n### Step 4\n\nWhen installed, open the [Requestly dashboard.](https://app.requestly.io/)\nThere click the **Rules** tab.\n\n![Click the Rules tab](https://www.cinematen.be/images/watermark_remover/requestly-screenshot-1.webp)\n\n### Step 5\n\nLet's add a **New Rule**.\n\n![Click New Rule](https://www.cinematen.be/images/watermark_remover/requestly-screenshot-2.webp)\n\n\n### Step 6\n\nAdd a **Cancel Request** rule.\n\n![Click Cancel Request rule categorie](https://www.cinematen.be/images/watermark_remover/requestly-screenshot-3.webp)\n\n\n### Step 7\n\nHere fill in the url: https://www.gstatic.com/aistudio/watermark/watermark_v4.png\n\nThen click **Save Rule**.\n\n![Add URL and Save Rule](https://www.cinematen.be/images/watermark_remover/requestly-screenshot-4.webp)\n\n\n### Step 8\n\nAnd that's it! You're done.\n\nRestart your browser and go have a look at the previously generated image. As you can see the little white star is now gone.\n\n![The watermark is gone](https://www.cinematen.be/images/watermark_remover/nano-banana-screenshot-2.webp)\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"how-to-remove-the-nano-banana-watermark-star","text":"How to remove the Nano Banana watermark star"},{"depth":3,"slug":"step-1","text":"Step 1"},{"depth":3,"slug":"step-2","text":"Step 2"},{"depth":3,"slug":"step-3","text":"Step 3"},{"depth":3,"slug":"step-4","text":"Step 4"},{"depth":3,"slug":"step-5","text":"Step 5"},{"depth":3,"slug":"step-6","text":"Step 6"},{"depth":3,"slug":"step-7","text":"Step 7"},{"depth":3,"slug":"step-8","text":"Step 8"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$WatermarkLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
