import { c as createComponent } from '../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return new Response(null, {
    status: 301,
    headers: {
      "Location": "/reviews&blogs/pages/1",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/index.astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/reviews&blogs/index.astro";
const $$url = "/reviews&blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
