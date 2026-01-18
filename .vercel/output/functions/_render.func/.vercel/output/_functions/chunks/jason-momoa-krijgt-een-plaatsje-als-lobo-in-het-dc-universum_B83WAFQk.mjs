import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jason Momoa krijgt een plaatsje als Lobo in het DC Universum",
  "date": "2024-12-30T19:00:41.192Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1735582686.jpg",
  "trailer": "",
  "slug": "jason-momoa-krijgt-een-plaatsje-als-lobo-in-het-dc-universum",
  "tags": ["film"]
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
      children: "Jason Momoa, bekend van “Game of Thrones” en “Fast X”, keert terug naar het DC\nUniversum, maar deze keer niet als Aquaman. In plaats daarvan gaat hij een\nvollesdig nieuwe rol spelen. Hij wordt de intergalactische premiejager Lobo.\nLobo is een populaire schurk in de DC Comics wereld die al een lange tijd op het\ngrote scherm zijn opwachting maakt."
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van Jason Momoa als Lobo werd niet zomaar gedaan. Dit nieuws is\nbevestigd door verschillende bronnen, waaronder Deadline, en zelfs door de\nacteur zelf. Lobo is een zeer kleurrijk personage dat bekend staat om zijn ruwe\nen stoere persoonlijkheid met een grote liefde voor geweld en chaos."
    }), "\n", createVNode(_components.p, {
      children: "Fans hadden al een tijdje geruchten gehoord dat Momoa Lobo zou kunnen gaan\nspelen nadat James Gunn en Peter Safran de leiding namen over het DC Universum.\nTijdens de perspromotie voor “Aquaman and the Lost Kingdom” hintten zij al naar\ndeze mogelijkheid."
    }), "\n", createVNode(_components.p, {
      children: "Het zal interessant zijn om te zien hoe Jason Momoa Lobo zal neerzetten. Laten\nwe hopen dat zijn vertolking van Lobo net zo geliefd zal worden als zijn rol als\nAquaman."
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

const url = "src/content/nieuws/jason-momoa-krijgt-een-plaatsje-als-lobo-in-het-dc-universum.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jason-momoa-krijgt-een-plaatsje-als-lobo-in-het-dc-universum.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jason-momoa-krijgt-een-plaatsje-als-lobo-in-het-dc-universum.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
