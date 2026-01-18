import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Millie Bobby Brown komt misschien ook naar het MCU",
  "date": "2025-03-19T18:50:30.093Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1742407566.jpg",
  "trailer": "",
  "slug": "millie-bobby-brown-komt-misschien-ook-naar-het-mcu",
  "tags": ["Film"]
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
      children: "Millie Bobby Brown, bekend van de populaire serie “Stranger Things”, heeft de\naandacht van het Marvel Cinematic Universe (MCU). Nu “Stranger Things” ten einde\nkomt, heeft ze meer tijd om mogelijk een rol in de MCU te spelen. De regisseurs\nJoe en Anthony Russo, die eerder grote Marvel-films zoals “Avengers: Infinity\nWar” en “Endgame” maakten, hebben al laten weten dat ze haar graag zouden willen\nhebben voor hun nieuwe projecten: “Avengers: Doomsday” en “Avengers: Secret\nWars”."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de promotie voor hun film “The Electric State”, waar Brown de hoofdrol\nspeelt, gaven de Russo Brothers aan dat zij Millie op hun lijst hebben staan\nvoor toekomstige projecten. Ze beschrijven haar als een enthousiaste en lieve\nactrice die het team vrolijk maakt. De Russos denken dat Millie veel potentie\nheeft."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn verschillende personages waar Millie voor in aanmerking zou kunnen\nkomen, vooral uit de X-Men serie. Twee populaire keuzes zijn Kitty Pryde en\nRogue. Kitty Pryde kan door objecten heen bewegen en is een belangrijke jongere\nheld in de X-Men-verhalen. Rogue daarentegen is bekend om haar kracht om de\nkrachten van anderen over te nemen en heeft eerder een tragisch verhaal. Millie\nheeft wel al bewezen dat ze in staat is om sterke en emotionele personages neer\nte zetten. \u000bNa het nieuws dat Sadie Sink zich binnenkort ook zal vervoegen in\nhet MCU is het volgens ons heel waarschijnlijk dat Millie deze kans ook krijgt."
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

const url = "src/content/nieuws/millie-bobby-brown-komt-misschien-ook-naar-het-mcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/millie-bobby-brown-komt-misschien-ook-naar-het-mcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/millie-bobby-brown-komt-misschien-ook-naar-het-mcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
