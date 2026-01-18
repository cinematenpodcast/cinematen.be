import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een nieuwe trailer en nieuwe hype voor Severance seizoen 2",
  "date": "2024-12-08T07:50:57.936Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1733596586.jpg",
  "trailer": "_UXKlYvLGJY",
  "slug": "een-nieuwe-trailer-en-nieuwe-hype-voor-severance-seizoen-2",
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
      children: "We kijken allemaal uit naar het tweede seizoen van de spannende serie\n“Severance.” Deze sci-fi show heeft ons al verbijsterd met zijn unieke verhaal\nen onverwachte wendingen. Het eerste seizoen eindigde met een spannend\ncliffhanger waar fans nu al drie jaar mee zitten te wachten."
    }), "\n", createVNode(_components.p, {
      children: "De serie, geschreven door Dan Erickson, laat ons kennismaken met een vreemde\nwereld. Mensen zijn daar op een bepaalde manier aangepast, zodat ze hun werk\nkunnen doen zonder zich te herinneren wat er buiten hun kantoor gebeurt en\nomgedraaid."
    }), "\n", createVNode(_components.p, {
      children: "Nu, bijna drie jaar na het eerste seizoen, is het moment eindelijk daar! Apple\nTV+ heeft een nieuwe trailer vrijgegeven voor het tweede seizoen. In deze\ntrailer zien we dat de personages te maken krijgen met de gevolgen van hun\nrebellie. Fans kunnen niet wachten om te zien wat er met de personages zal\ngebeuren en welke geheimen er nog ontdekt gaan worden."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel het wachten lang was, zijn de verwachtingen hoog. Met de nieuwe trailer\nkrijgen we een klein voorproefje van wat komen gaat. We hopen dat het tweede\nseizoen nog beter wordt dan het eerste en dat we spannende nieuwe verhaallijnen\nkrijgen."
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

const url = "src/content/nieuws/een-nieuwe-trailer-en-nieuwe-hype-voor-severance-seizoen-2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-trailer-en-nieuwe-hype-voor-severance-seizoen-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-trailer-en-nieuwe-hype-voor-severance-seizoen-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
