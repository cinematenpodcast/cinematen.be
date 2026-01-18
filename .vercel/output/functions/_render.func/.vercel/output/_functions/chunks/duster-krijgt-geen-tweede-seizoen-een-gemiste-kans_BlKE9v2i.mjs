import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Duster krijgt geen tweede seizoen een gemiste kans?",
  "date": "2025-07-12T10:55:08.369Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1752158866.jpg",
  "trailer": "",
  "slug": "duster-krijgt-geen-tweede-seizoen-een-gemiste-kans",
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
      children: "De nieuwe serie “Duster” van J.J. Abrams en LaToya Morgan wordt na één seizoen\nal geannuleerd. Ondanks positieve recensies van zowel critici als kijkers, heeft\nHBO Max besloten om geen tweede seizoen te maken. Het nieuws kwam kort na de\nlaatste aflevering."
    }), "\n", createVNode(_components.p, {
      children: "“Duster” volgt Jim Ellis (Josh Holloway), een bestuurder voor een criminele\nbende, en FBI-agent Nina Hayes (Rachel Hilson) - de eerste zwarte vrouwelijke\nFBI-agent. Samen werken ze in de jaren ‘70 aan het ontrafelen van misdaden die\nhen persoonlijk raken. De show betekende een hereniging voor Holloway en Abrams,\ndie eerder samenwerkten in “Lost”. Ondanks sterke acteerprestaties en lovende\nkritieken (92% bij critici en 83% bij kijkers op Rotten Tomatoes) trok de serie\nte weinig kijkers. Veel mensen wisten niet eens dat “Duster” bestond, blijkt uit\ncijfers van Nielsen en Luminate."
    }), "\n", createVNode(_components.p, {
      children: "HBO Max gaf aan tevreden te zijn met de show maar toch te stoppen. De annulering\nheeft gevolgen voor Abrams’ andere projecten bij HBO. “Duster” was namelijk het\nenige project dat van de grond kwam na een grote deal tussen Abrams’ Bad Robot\nen HBO. Andere geplande series, zoals een “The Shining”-spin-off, kregen nooit\ngroen licht."
    }), "\n", createVNode(_components.p, {
      children: "De samenwerking tussen Jim en Nina was een sterk punt en wij hoopten op meer\nontwikkeling van deze personages. De finale eindigde met hints voor meer\navonturen, maar die zullen we nu nooit te zien krijgen. Met de annulering blijft\n“The Pitt” het enige origineel van HBO Max. Dit laat ons met vragen over wat had\nkunnen zijn."
    }), "\n", createVNode(_components.p, {
      children: "“Duster” had een interessante plot met kleurrijke personages en verweefde\nhistorische elementen zoals de Watergate-affaire. Helaas zal de serie alleen in\nonze herinnering voortleven als project met veel onbenut potentieel."
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

const url = "src/content/nieuws/duster-krijgt-geen-tweede-seizoen-een-gemiste-kans.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/duster-krijgt-geen-tweede-seizoen-een-gemiste-kans.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/duster-krijgt-geen-tweede-seizoen-een-gemiste-kans.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
