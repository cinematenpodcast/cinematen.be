import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Alien Earth breidt het Alien Universum nog meer uit",
  "date": "2024-11-20T15:52:15.795Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1732114522.jpg",
  "trailer": "",
  "slug": "alien-earth-breidt-het-alien-universum-nog-meer-uit",
  "tags": ["tv"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "De spannende wereld van de “Alien”-franchise krijgt een nieuw hoofdstuk met de\naankomende serie “Alien: Earth”. Deze serie, gemaakt door Noah Hawley, zal in de\nzomer van 2025 op Disney+ te zien zijn. Fans van de franchise, die begon met de\niconische film van Ridley Scott in 1979, kunnen zich voorbereiden op heel wat\nnieuwe spannende momenten en avonturen."
    }), "\n", createVNode(_components.p, {
      children: "In “Alien: Earth” volgen we een jonge vrouw en een groep soldaten die betrokken\nzijn bij de opruiming van een geheimzinnig ruimtevaartuig dat op aarde is\nneergestort. Tijdens hun zoektocht naar overlevenden doen ze een angstaanjagende\nontdekking in de vorm van vreemde en gevaarlijke wezens. De serie belooft een\nmix van spanning en horror te bieden die we gewend zijn van eerdere films in de\nfranchise, met zeker de aanwezigheid van de beruchte Xenomorphs."
    }), "\n", createVNode(_components.p, {
      children: "De hoofdrol wordt gespeeld door Sydney Chandler, die eerder te zien was in\n“Don’t Worry Darling”. Daarnaast zien we ook bekende gezichten zoals Alex\nLawther en Timothy Olyphant, die naar verwachting een belangrijke rol zullen\nspelen."
    }), "\n", createVNode(_components.p, {
      children: "Alhoewel de teaser trailer van de serie nog niet veel onthult over het verhaal,\ngeeft het wel een hint over de sfeer: een sombere stem zegt in de promo dat\n“Moeder Aarde iets verwacht”. Wat die verwachting precies inhoudt, is nog niet\nhelemaal duidelijk, maar het verwijst zeker naar de bekende gruwelen die we in\neerdere films hebben gezien."
    }), "\n", createVNode(_components.p, {
      children: "“Alien: Earth” bouwt voort op de rijke geschiedenis van de franchise, die altijd\nspannende, macabere en soms angstaanjagende momenten heeft gekend. De trailer\nheeft een aantal intrigerende beelden, zoals een glimmende Xenomorph-kop. Fans\nvan sci-fi horror kunnen dus iets om naar uit te kijken in de komende maanden."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/nieuws/alien-earth-breidt-het-alien-universum-nog-meer-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/alien-earth-breidt-het-alien-universum-nog-meer-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/alien-earth-breidt-het-alien-universum-nog-meer-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
