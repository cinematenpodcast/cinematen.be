import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as createAstro, s as spreadAttributes, e as addAttribute, b as renderComponent, a as renderHead } from '../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import { $ as $$BaseHeader, a as $$BaseFooter } from '../chunks/BaseFooter_fQFvHGyg.mjs';
import { $ as $$BaseScript } from '../chunks/BaseScript_FGFGKkyq.mjs';
import 'clsx';
import { $ as $$BasePodcastBanner } from '../chunks/BasePodcastBanner_BLzwXdFL.mjs';
/* empty css                                  */
import { join } from 'node:path';
import { $ as $$BaseHeadExclude } from '../chunks/BaseHeadExclude_hmxA-bO9.mjs';
export { renderers } from '../renderers.mjs';

const $$BaseNavmenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="global-styles"></div> <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav_component w-nav"> <div class="navigation-container-full"> <a id="heartbeat" href="https://open.spotify.com/show/19O8JqKPSbQWek15vG3sig?si=065cd2ef2c294d09" target="_blank" class="luister-button-block"> <img src="/images/LogoCleanSmaller.png" loading="lazy" alt="Cinematen logo" class="nav-logo"> <div class="luister-button">Luister nu!</div> </a> <nav role="navigation" data-w-id="cca84ade-6c02-55ef-0d9f-f74099bf65be-a" class="navigation-menu w-nav-menu"> <a href="/" class="navigation-link w-nav-link">Home</a> <a href="/nieuws" class="navigation-link w-nav-link">Nieuws</a> <a href="/reviews&blogs" class="navigation-link w-nav-link">Reviews & Blogs</a> <a href="/#over-ons" class="navigation-link w-nav-link">Over ons</a> <a href="/#contact" class="navigation-link w-nav-link">Contact</a> </nav> <div class="menu-button-2 w-nav-button" aria-label="menu" role="button" tabindex="0"> <div class="w-icon-nav-menu"></div> </div> </div> </div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/BaseNavmenu.astro", void 0);

const $$Astro = createAstro();
const $$SearchField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchField;
  const { id, className } = Astro2.props;
  const bundlePath = join("/", "pagefind/");
  const divProps = {
    ...id ? { id } : {},
    ...className ? { class: className } : {}
  };
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(divProps)} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}></div> `;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/SearchField.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="nl"> <head>${renderComponent($$result, "BaseHeadExclude", $$BaseHeadExclude, {})}${renderHead()}</head> <body class="body"> <div class="page-wrapper"> ${renderComponent($$result, "BaseNavmenu", $$BaseNavmenu, {})} ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})} <div class="content"> <div class="container"> <h1 class="nieuws-title">Zoeken</h1> ${renderComponent($$result, "SearchField", $$SearchField, {})} <div class="search-container"> <input type="text" placeholder="Search..." class="search-bar"> </div> </div> ${renderComponent($$result, "BasePodcastBanner", $$BasePodcastBanner, {})} </div> ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})} ${renderComponent($$result, "BaseScript", $$BaseScript, {})} </div></body></html>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/search.astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
