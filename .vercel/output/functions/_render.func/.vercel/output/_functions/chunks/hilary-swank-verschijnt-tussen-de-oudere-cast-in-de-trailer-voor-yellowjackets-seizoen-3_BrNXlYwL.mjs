import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hilary Swank verschijnt tussen de oudere cast in de trailer voor Yellowjackets Seizoen 3",
  "date": "2024-12-08T08:19:42.359Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1733609581.jpg",
  "trailer": "EUB7eqmK4vg",
  "slug": "hilary-swank-verschijnt-tussen-de-oudere-cast-in-de-trailer-voor-yellowjackets-seizoen-3",
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
      children: "In de voorbije seizoenen van “Yellowjackets” leerden we de overlevenden van de\nvliegramp van vlucht 2525 kennen. De serie heeft al wel wat spannende momenten\nen mysterie neergezet en aan het einde van seizoen 2 denken we dat we alle\nhoofdpersonages al hebben zien passeren. Maar nu komt er iets nieuws aan in\nseizoen 3."
    }), "\n", createVNode(_components.p, {
      children: "Een nieuwe trailer laat ons een onbekend personage zien. Deze rol wordt gespeeld\ndoor de bekende actrice Hilary Swank, die je misschien kent van de film “Million\nDollar Baby”. Dit nieuwe personage lijkt ongeveer even oud te zijn als de\n“oudere” cast die de volwassen versies van de overlevende meisjes van de\nvliegtuigramp spelen."
    }), "\n", createVNode(_components.p, {
      children: "Wat opvalt is dat ze op de weg staat met een bloedige gezicht en een zelfgemaakt\nverband om haar arm. Wie is zij? Wat is haar verhaal? En wat heeft ze\nmeegemaakt? De komst van dit nieuwe personage kan de verhaallijn van de serie\nhelemaal veranderen en nog spannender maken."
    }), "\n", createVNode(_components.p, {
      children: "We moeten wachten tot de nieuwe afleveringen uitkomen om te ontdekken wat er\nallemaal in de wildernis is gebeurd na de vliegtuigramp."
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

const url = "src/content/nieuws/hilary-swank-verschijnt-tussen-de-oudere-cast-in-de-trailer-voor-yellowjackets-seizoen-3.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hilary-swank-verschijnt-tussen-de-oudere-cast-in-de-trailer-voor-yellowjackets-seizoen-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hilary-swank-verschijnt-tussen-de-oudere-cast-in-de-trailer-voor-yellowjackets-seizoen-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
