import { c as createComponent, d as createAstro, b as renderComponent, a as renderHead, f as renderSlot, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from './BaseHead_BSrZkai4.mjs';
import { $ as $$NewNavmenu } from './NewNavmenu_Dfz8ih8d.mjs';
import { $ as $$BaseHeader, a as $$BaseFooter } from './BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from './BaseScript_FGFGKkyq.mjs';
/* empty css                                 */

const $$Astro = createAstro();
const $$TermsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TermsLayout;
  const { frontmatter } = Astro2.props;
  const canonicalURL = `https://cinematen.be${Astro2.url.pathname}`;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": frontmatter.title, "description": frontmatter.summary, "canonicalURL": canonicalURL })}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "NewNavmenu", $$NewNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div data-w-id="75dba001-0326-9ad8-ca3e-3734b81d7ff9" class="content"> <div class="container"> <div class="content-left"> <div class="blog-post-container" style="width: 100%"> <div id="w-node-b6eeaddc-234a-634b-164b-ca588e2dae6a-01535055" class="blog-title"> <h1 class="heading-h2 blog-title"> ${frontmatter.title} </h1> </div> <div id="w-node-_2957b33b-ee9d-a9a8-80b3-56ea90e637f9-01535055" class="blog-text w-richtext"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div> </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} </div> ${renderComponent($$result, "BaseScript", $$BaseScript, {})}  </body> </html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/layouts/TermsLayout.astro", void 0);

export { $$TermsLayout as $ };
