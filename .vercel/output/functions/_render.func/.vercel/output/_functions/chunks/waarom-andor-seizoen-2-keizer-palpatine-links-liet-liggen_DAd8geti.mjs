import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Waarom Andor seizoen 2 keizer Palpatine links liet liggen",
  "date": "2025-08-28T19:36:40.874Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1756408171.jpg",
  "trailer": "",
  "slug": "waarom-andor-seizoen-2-keizer-palpatine-links-liet-liggen",
  "tags": ["TV"]
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
      children: "Er gingen veel geruchten over wat we in Andor seizoen 2 zouden kunnen zien, maar\nuiteindelijk zijn verschillende plannen niet doorgegaan. De makers Tony Gilroy\nen zijn broer Dan hadden oorspronkelijk een plan voor vijf seizoenen, waarin we\nmeer van de duistere kant van het Star Wars universum zouden zien."
    }), "\n", createVNode(_components.p, {
      children: "Dan Gilroy bevestigde in een podcast dat ze keizer Palpatine in levende lijve\nwilden tonen als de serie vijf seizoenen had gekregen. Palpatine werd vaak\ngenoemd in de serie, maar we zagen hem nooit. Wij hoopten dat hij toch zou\nopduiken, maar dat is niet gebeurd."
    }), "\n", createVNode(_components.p, {
      children: "Er waren geruchten over keizerlijke lijfwachten en Mas Amedda, wat suggereerde\ndat Palpatine misschien zou verschijnen. Helaas is dat niet gebeurd in het\ntweede seizoen."
    }), "\n", createVNode(_components.p, {
      children: "Ook Bodhi Rook, gespeeld door Riz Ahmed, is niet te zien in seizoen 2. Tony\nGilroy legde uit dat het niet in het verhaal paste en de tijdlijn zou verstoren.\nHet tweede seizoen is opgedeeld in vier blokken van drie afleveringen, elk in\neen verschillend jaar, en eindigt vlak voor Rogue One."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig zien we wel Mon Mothma en andere rebellenleiders terug, die belangrijk\nzijn voor Cassian Andors verhaal. De makers wilden niet te veel bekende\npersonages erin stoppen alleen omdat het leuk is – het moest logisch zijn voor\nhet verhaal."
    }), "\n", createVNode(_components.p, {
      children: "Seizoen 2 is nu afgerond en wordt beschouwd als een van de beste Star\nWars-series ooit. Alle afleveringen staan op Disney+."
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

const url = "src/content/nieuws/waarom-andor-seizoen-2-keizer-palpatine-links-liet-liggen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/waarom-andor-seizoen-2-keizer-palpatine-links-liet-liggen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/waarom-andor-seizoen-2-keizer-palpatine-links-liet-liggen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
