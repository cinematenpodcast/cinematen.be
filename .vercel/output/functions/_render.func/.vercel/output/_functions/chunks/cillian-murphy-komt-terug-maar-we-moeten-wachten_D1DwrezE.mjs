import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cillian Murphy komt terug, maar we moeten wachten",
  "date": "2025-06-24T16:13:17.803Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1750779395.jpg",
  "trailer": "",
  "slug": "cillian-murphy-komt-terug-maar-we-moeten-wachten",
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
      children: "Cillian Murphy maakt zijn terugkeer in de “28 Days Later”-franchise, maar we\nzullen geduld moeten oefenen. Hij speelde de hoofdrol als Jim in de originele\nfilm uit 2002, waar hij wakker werd in een verlaten stad na een virusuitbraak.\nRegisseur Danny Boyle bevestigde recent dat Murphy niet te zien zal zijn in “28\nYears Later” (juni 2025), maar wel aan het einde van de tweede film “28 Years\nLater: The Bone Temple” (januari 2026)."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe trilogie begint met “28 Years Later”, opgenomen in één keer met een\nfrisse cast waaronder Aaron Taylor-Johnson en Jodie Comer. Murphy fungeert als\nhulpproducent voor de vervolgfilms. Hoewel Jim niet actief meespeelt in het\neerste deel, krijgt hij een grote introductie in de slotscène van “The Bone\nTemple”. Dit zet hem klaar voor een hoofdrol in het derde deel."
    }), "\n", createVNode(_components.p, {
      children: "Boyle gaf aan dat Murphy’s betrokkenheid helpt bij het financieren van de derde\nfilm. Of die er komt, hangt af van het succes van “28 Years Later”. Als die goed\npresteert, krijgt deel drie groen licht. We kijken al lang uit naar Murphy’s\nterugkeer en zijn benieuwd hoe zijn personage de nieuwe verhalen zal\nbeïnvloeden. Verdere details over Jims ontwikkeling blijven nog even geheim."
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

const url = "src/content/nieuws/cillian-murphy-komt-terug-maar-we-moeten-wachten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-komt-terug-maar-we-moeten-wachten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-komt-terug-maar-we-moeten-wachten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
