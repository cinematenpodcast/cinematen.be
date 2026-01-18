import { c as createComponent, r as renderTemplate, a as renderHead } from '../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Lees = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ3KYRB0T1"><\/script><meta name="google-site-verification" content="Ue-nOWKl8b37dpA_44eTIqresdKx1GF8BO1BEfSXwg4"><title>Cinematen.be</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Redirecting...</title>', '</head> <body> <p>If you are not redirected automatically, follow this <a href="https://cinematen.be/nieuws/pages/1/">link</a>.</p> </body></html>'])), renderHead());
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/lees.astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/lees.astro";
const $$url = "/lees";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Lees,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
