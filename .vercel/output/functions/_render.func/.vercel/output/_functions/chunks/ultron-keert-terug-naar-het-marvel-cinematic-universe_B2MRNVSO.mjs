import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ultron keert terug naar het Marvel Cinematic Universe",
  "date": "2024-08-26T11:11:22.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1723755228.jpg",
  "trailer": "",
  "slug": "ultron-keert-terug-in-het-marvel-cinematic-universe",
  "tags": ["TV", "casting"]
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
      children: "James Spader zal opnieuw in de huid kruipen van de beruchte schurk Ultron in een aankomende serie van Marvel Studios. De acteur, die eerder de stem van Ultron vertolkte in “Avengers: Age of Ultron” uit 2015, zal zijn rol hernemen in de nieuwe Vision-serie."
    }), "\n", createVNode(_components.p, {
      children: "In “Avengers: Age of Ultron” werd Ultron geïntroduceerd als een door Tony Stark en Bruce Banner gecreëerde kunstmatig intelligente entiteit die tegen de mensheid keerde. Hij was verantwoordelijk voor het creëren van Vision, maar diens loyaliteit lag uiteindelijk bij de Aardse helden in plaats van bij Ultron."
    }), "\n", createVNode(_components.p, {
      children: "Naar verluidt zal de Vision-serie onder leiding van showrunner Terry Matalas zich richten op de zoektocht van de ‘White Vision’ naar een nieuw doel in het leven. Het is echter onduidelijk hoe Ultron weer in beeld zal komen, gezien zijn ogenschijnlijke vernietiging aan het einde van de film “Avengers: Age of Ultron”."
    }), "\n", createVNode(_components.p, {
      children: "Paul Bettany zal ook terugkeren als Vision, een karakter dat eigenlijk aan zijn einde kwam in “Avengers: Infinity War”, maar herboren werd als een nieuwe witte versie in “WandaVision” uit 2021."
    }), "\n", createVNode(_components.p, {
      children: "De Marvel Vision-serie staat gepland om te beginnen met filmen in 2025, hoewel er nog geen releasedatum is vastgesteld."
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

const url = "src/content/nieuws/ultron-keert-terug-naar-het-marvel-cinematic-universe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ultron-keert-terug-naar-het-marvel-cinematic-universe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ultron-keert-terug-naar-het-marvel-cinematic-universe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
