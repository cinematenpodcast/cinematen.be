import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De trailer voor Sinners brengt Michael B. Jordan en Ryan Coogler weer samen",
  "date": "2024-09-25T12:26:33.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/sinners-looks-incredible-even-if-theyre-playing-coy-1727183902.jpg",
  "trailer": "bKGxHflevuk",
  "slug": "sinners-een-duistere-samensmelting-van-rassenconflicten-en-het-bovennatuurlijke",
  "tags": ["film", "trailer"]
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
      children: "De langverwachte film “Sinners,” een samenwerking tussen regisseur Ryan Coogler en acteur Michael B. Jordan, heeft eindelijk zijn trailer onthuld. Met de focus op het huiveringwekkende samenkomen van raciale geweldpleging en bovennatuurlijke wezens, belooft deze productie een angstaanjagende kijkervaring te bieden voor filmliefhebbers wereldwijd."
    }), "\n", createVNode(_components.p, {
      children: "“Sinners” draait om twee tweelingbroers (gespeeld door Michael B. Jordan) die terugkeren naar hun geboortestad in een poging om hun problematische verleden achter zich te laten en opnieuw te beginnen. Echter, bij hun aankomst ontdekken ze dat een nog groter kwaad op hen wacht. In een setting van de Jim Crow-era Zuidelijke Verenigde Staten, mengt de film elementen van raciale spanningen met bovennatuurlijke verschijnselen, waardoor een unieke en beklemmende sfeer wordt gecreëerd."
    }), "\n", createVNode(_components.p, {
      children: "Naast Jordan worden ook sterren als Hailee Steinfeld, Jack O’Connell, Wunmi Mosaku, Jayme Lawson, Omar Benson Miller en Delroy Lindo in de cast verwelkomd. De film, geschreven en geregisseerd door de met een Academy Award genomineerde filmmaker Coogler, belooft een meeslepende kijkervaring te bieden vol spanning en mysterie."
    }), "\n", createVNode(_components.p, {
      children: "Achter de schermen van “Sinners” vinden we een indrukwekkend team van creatieve talenten, waaronder veel van Coogler’s medewerkers van de succesvolle “Black Panther” franchise. Met namen zoals director of photography Autumn Durald Arkapaw, production designer Hannah Beachler, editor Michael P. Shawver, composer Ludwig Göransson, en costume designer Ruth E. Carter, staat de film garant voor visueel spektakel en artistiek vakmanschap."
    }), "\n", createVNode(_components.p, {
      children: "De release van “Sinners” staat gepland voor 7 maart 2025. Met een mix van sociale commentaar, historische context en bovennatuurlijke elementen, lijkt “Sinners” een project te zijn dat zowel het publiek zal vermaken als uitdagen."
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

const url = "src/content/nieuws/de-trailer-voor-sinners-brengt-michael-b-jordan-en-ryan-coogler-weer-samen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-voor-sinners-brengt-michael-b-jordan-en-ryan-coogler-weer-samen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-voor-sinners-brengt-michael-b-jordan-en-ryan-coogler-weer-samen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
