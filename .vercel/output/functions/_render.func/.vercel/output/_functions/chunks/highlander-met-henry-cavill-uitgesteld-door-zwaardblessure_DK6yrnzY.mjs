import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Highlander met Henry Cavill uitgesteld door zwaardblessure",
  "date": "2025-09-12T20:22:07.255Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1757702739.jpg",
  "trailer": "",
  "slug": "highlander-met-henry-cavill-uitgesteld-door-zwaardblessure",
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
      children: "De nieuwe Highlander film met Henry Cavill is later dan gepland. De acteur liep\neen blessure op tijdens zijn training met zwaarden voor de film. Hierdoor moeten\nde opnames worden uitgesteld tot begin 2026."
    }), "\n", createVNode(_components.p, {
      children: "Henry Cavill speelt de hoofdrol in deze hernieuwde versie van de klassieker uit\n1986. Tijdens de voorbereidingen raakte hij gewond, al zijn details over de\nblessure niet bekendgemaakt. De productie besliste om te wachten tot Cavill\nhersteld is."
    }), "\n", createVNode(_components.p, {
      children: "Cavill is niet de enige grote naam in de film. Russell Crowe speelt zijn mentor,\nen andere acteurs zoals Karen Gillan, Djimon Hounsou, Dave Bautista, Marisa\nAbela en Max Zhang maken ook deel uit van de cast. Regisseur Chad Stahelski,\nbekend van John Wick, leidt de film."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich af in New York en Hong Kong en draait rond de strijd\ntussen onsterfelijken. Cavill, die eerder ervaring opdeed met zwaardvechten in\nThe Witcher, trainde extra voor deze rol. Hij is al lang fan van de originele\nHighlander films en series."
    }), "\n", createVNode(_components.p, {
      children: "De vertraging betekent dat wij langer moeten wachten op de film. Cavill werkt\nmomenteel ook aan andere projecten zoals Enola Holmes 3 en In the Grey, die dus\nwaarschijnlijk eerst uitkomen."
    }), "\n", createVNode(_components.p, {
      children: "Stahelski heeft plannen om van Highlander een franchise te maken, met meerdere\nfilms. De eerste film richt zich op “The Gathering”, het moment waarop alle\nonsterfelijken samenkomen om te vechten. Wij hopen dat Cavill snel herstelt,\nzodat de opnames kunnen beginnen en wij deze veelbelovende film kunnen zien."
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

const url = "src/content/nieuws/highlander-met-henry-cavill-uitgesteld-door-zwaardblessure.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/highlander-met-henry-cavill-uitgesteld-door-zwaardblessure.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/highlander-met-henry-cavill-uitgesteld-door-zwaardblessure.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
