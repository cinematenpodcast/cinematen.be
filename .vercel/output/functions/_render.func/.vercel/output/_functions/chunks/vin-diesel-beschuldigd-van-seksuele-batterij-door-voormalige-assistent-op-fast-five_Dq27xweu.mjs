import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Vin Diesel beschuldigd van seksueel geweld door voormalige assistent op Fast Five",
  "date": "2023-12-22T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1703190202.jpg",
  "trailer": "",
  "slug": "vin-diesel-beschuldigd-van-seksueel-geweld-door-voormalige-assistent-op-fast-five",
  "draft": false,
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
      children: "Vin Diesel, de bekende acteur uit filmreeksen als “Fast and Furious”, “Chronicles of Riddick” en “XXX”, staat centraal in juridische beschuldigingen aangevoerd door Asta Jonasson, een ex-productieassistent bij zijn bedrijf One Race. Jonasson klaagt Diesel aan voor meerdere overtredingen waaronder seksueel geweld en genderdiscriminatie. De aanklacht, ingediend in Los Angeles en uitgelicht door Vanity Fair, omvat ook beschuldigingen van emotionele mishandeling, een vijandige werkomgeving, onwettig ontslag, en pogingen tot rechtsgangbelemmering."
    }), "\n", createVNode(_components.p, {
      children: "De kern van de rechtszaak concentreert zich op een incident dat zich in september 2010 afspeelde in het St. Regis Hotel. Jonasson beweert dat ze op een late avond moest wachten terwijl Diesel zich vermaakte met gastvrouwen van een club. Na hun vertrek zou Diesel haar ongewenst hebben benaderd, ondanks haar duidelijke weigering en pogingen om hem te ontwijken. Kort hierna kreeg Jonasson te horen dat ze was ontslagen door Samantha Vincent, Diesel’s zus en de CEO van One Race. Een andere leidinggevende zou zich kort voor dit incident eveneens ongepast hebben gedragen."
    }), "\n", createVNode(_components.p, {
      children: "De aanklacht is ingediend volgend op de implementatie van de Speak Out Act in 2022, een wet die slachtoffers van seksueel misbruik toelaat om eerdere non-disclosure overeenkomsten te negeren en juridische stappen te ondernemen voor incidenten na 2009."
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

const url = "src/content/nieuws/vin-diesel-beschuldigd-van-seksuele-batterij-door-voormalige-assistent-op-fast-five.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/vin-diesel-beschuldigd-van-seksuele-batterij-door-voormalige-assistent-op-fast-five.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/vin-diesel-beschuldigd-van-seksuele-batterij-door-voormalige-assistent-op-fast-five.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
