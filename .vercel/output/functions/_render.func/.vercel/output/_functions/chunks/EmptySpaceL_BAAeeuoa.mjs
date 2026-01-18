import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import 'clsx';

const $$EmptySpaceS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="empty-space-s"></div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/EmptySpaceS.astro", void 0);

const $$EmptySpaceM = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="empty-space-m"></div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/EmptySpaceM.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="empty-space-l"></div>`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/components/EmptySpaceL.astro", void 0);

export { $$EmptySpaceM as $, $$EmptySpaceS as a };
