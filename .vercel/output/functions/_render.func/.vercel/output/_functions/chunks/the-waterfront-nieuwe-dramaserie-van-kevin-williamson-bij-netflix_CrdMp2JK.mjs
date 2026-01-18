import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Waterfront Nieuwe dramaserie van Kevin Williamson bij Netflix",
  "date": "2025-06-07T22:33:13.939Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1749175065.jpg",
  "trailer": "",
  "slug": "the-waterfront-nieuwe-dramaserie-van-kevin-williamson-bij-netflix",
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
      children: "De nieuwe serie The Waterfront verschijnt op 19 juni 2025 op Netflix. Kevin\nWilliamson, bekend van hitseries zoals Scream, Dawson’s Creek en The Vampire\nDiaries, staat aan het roer. Hij regisseert momenteel ook de nieuwe Scream\n7-film. In deze serie vertolkt Topher Grace de rol van drugsbaron Harlan\nBuckley. Het verhaal speelt zich af in Havenport, North Carolina en draait om de\nmachtige Buckley-familie."
    }), "\n", createVNode(_components.p, {
      children: "De Buckleys beheersen de visserij en restaurants in Havenport, maar hun imperium\nwankelt. Na twee hartaanvallen van Harlan proberen zijn vrouw Belle en zoon Cane\nde zaak te redden. Wanneer hun pogingen mislukken, moet Harlan zelf weer het\nheft in handen nemen. Centraal staat ook Bree Buckley, gespeeld door Melissa\nBenoist. Ze kampt met een drugsverslaving, verloor de voogdij over haar zoon\nDiller en raakt verwikkeld in een gevaarlijke relatie die de hele familie\nbedreigt."
    }), "\n", createVNode(_components.p, {
      children: "Williamson haalde inspiratie uit zijn eigen jeugd in North Carolina. Hij groeide\nop in een vissersgezin dat tijdens de crisis in de jaren ‘80 financiële\nproblemen kreeg. Zijn vader raakte betrokken bij drugstransporten - persoonlijke\nervaringen die nu in de serie verwerkt zijn. Netflix bevestigde de\nautobiografische invloeden, maar houdt details over specifieke gebeurtenissen\nbewust vaag."
    }), "\n", createVNode(_components.p, {
      children: "De achtdelige serie combineert familiedrama met spanning en toont hoe ver mensen\ngaan om hun erfgoed te beschermen. Naast Topher Grace en Melissa Benoist zien we\nHolt McCallany, Maria Bello, Jake Weary en Brady Hepner. De trailer belooft een\nemotionele rollercoaster waarin personages ingrijpende fouten maken en met de\nconsequenties moeten leven."
    }), "\n", createVNode(_components.p, {
      children: "Met zijn talent voor menselijke drama’s lijkt Williamson opnieuw een serie te\nhebben gemaakt die recht naar het hart gaat. Wij kijken uit naar deze nieuwe\naanwinst op Netflix."
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

const url = "src/content/nieuws/the-waterfront-nieuwe-dramaserie-van-kevin-williamson-bij-netflix.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-waterfront-nieuwe-dramaserie-van-kevin-williamson-bij-netflix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-waterfront-nieuwe-dramaserie-van-kevin-williamson-bij-netflix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
