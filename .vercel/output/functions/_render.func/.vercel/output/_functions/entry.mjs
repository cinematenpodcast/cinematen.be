import { renderers } from './renderers.mjs';
import { createExports } from './entrypoint.mjs';
import { manifest } from './manifest_BUv5dU03.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/collectorsbeurs.astro.mjs');
const _page2 = () => import('./pages/ikwilmee.astro.mjs');
const _page3 = () => import('./pages/lees.astro.mjs');
const _page4 = () => import('./pages/listen.astro.mjs');
const _page5 = () => import('./pages/luister.astro.mjs');
const _page6 = () => import('./pages/nieuws/14days.astro.mjs');
const _page7 = () => import('./pages/nieuws/a-knight-of-the-seven-kingdoms-laat-draken-achterwege-voor-toernooien.astro.mjs');
const _page8 = () => import('./pages/nieuws/pages/_page_.astro.mjs');
const _page9 = () => import('./pages/nieuws/star-trek-starfleet-academy-gaat-morgen-van-start.astro.mjs');
const _page10 = () => import('./pages/nieuws/star-trek-wordt-60-jaar-en-trakteert-ons-op-nieuwe-content.astro.mjs');
const _page11 = () => import('./pages/nieuws/starfleet-academy-voelt-meer-aan-als-een-tienerdrama.astro.mjs');
const _page12 = () => import('./pages/nieuws/tags/_tag_/_page_.astro.mjs');
const _page13 = () => import('./pages/nieuws/tags/_tag_.astro.mjs');
const _page14 = () => import('./pages/nieuws.astro.mjs');
const _page15 = () => import('./pages/nieuws.astro2.mjs');
const _page16 = () => import('./pages/nieuws/_---slug_.astro.mjs');
const _page17 = () => import('./pages/privacypolicy.astro.mjs');
const _page18 = () => import('./pages/reviews&blogs/pages/_page_.astro.mjs');
const _page19 = () => import('./pages/reviews&blogs/tags/_tag_.astro.mjs');
const _page20 = () => import('./pages/reviews&blogs.astro.mjs');
const _page21 = () => import('./pages/reviews&blogs/_---slug_.astro.mjs');
const _page22 = () => import('./pages/search.astro.mjs');
const _page23 = () => import('./pages/termsofservice.astro.mjs');
const _page24 = () => import('./pages/watermark_remover.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/collectorsbeurs.astro", _page1],
    ["src/pages/ikwilmee.html", _page2],
    ["src/pages/lees.astro", _page3],
    ["src/pages/listen.astro", _page4],
    ["src/pages/luister.astro", _page5],
    ["src/pages/nieuws/14days.astro", _page6],
    ["src/pages/nieuws/a-knight-of-the-seven-kingdoms-laat-draken-achterwege-voor-toernooien.md", _page7],
    ["src/pages/nieuws/pages/[page].astro", _page8],
    ["src/pages/nieuws/star-trek-starfleet-academy-gaat-morgen-van-start.md", _page9],
    ["src/pages/nieuws/star-trek-wordt-60-jaar-en-trakteert-ons-op-nieuwe-content.md", _page10],
    ["src/pages/nieuws/starfleet-academy-voelt-meer-aan-als-een-tienerdrama.md", _page11],
    ["src/pages/nieuws/tags/[tag]/[page].astro", _page12],
    ["src/pages/nieuws/tags/[tag].astro", _page13],
    ["src/pages/nieuws/index.astro", _page14],
    ["src/pages/nieuws.html", _page15],
    ["src/pages/nieuws/[...slug].astro", _page16],
    ["src/pages/privacypolicy.md", _page17],
    ["src/pages/reviews&blogs/pages/[page].astro", _page18],
    ["src/pages/reviews&blogs/tags/[tag].astro", _page19],
    ["src/pages/reviews&blogs/index.astro", _page20],
    ["src/pages/reviews&blogs/[...slug].astro", _page21],
    ["src/pages/search.astro", _page22],
    ["src/pages/termsofservice.md", _page23],
    ["src/pages/watermark_remover.md", _page24],
    ["src/pages/index.astro", _page25]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "96701b04-e6c0-46cb-83aa-bf56e3f0a6e6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
