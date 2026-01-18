import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er is een teaser voor Andor seizoen 2 die anders is dan we gewoon zijn van Star Wars",
  "date": "2025-02-24T18:25:06.246Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1740417675.jpg",
  "trailer": "AE4wxt70aUM",
  "slug": "er-is-een-teaser-voor-andor-seizoen-2-die-anders-is-dan-we-gewoon-zijn-van-star-wars",
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
      children: "Andor is een populaire serie uit het Star Wars-universum, en wordt vaak geprezen\ndoor zowel wij als de andere critici. De serie vertelt het verhaal van Cassian\nAndor, een held die we voor het eerst zagen in de film Rogue One. De tweede en\nlaatste seizoen van Andor zal op 22 april 2024 op Disney+ verschijnen."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe seizoen speelt zich af over vier jaar, met tijdsprongen van een jaar\nna elke drie afleveringen. Dit betekent dat de spanning en de conflicten in de\nGalactische Oorlog steeds groter worden. We zullen terugzien naar bekende\npersonages zoals Mon Mothma, Luthen Rael, en de slechterik Deedra Meero, naast\nCassian Andor, gespeeld door Diego Luna. De terugkeer van Orson Krennic, die de\ngrote slechterik speelde in Rogue One, kunnen we ook verwachten."
    }), "\n", createVNode(_components.p, {
      children: "Een teaser trailer is vandaag vrijgegeven, die een blik geeft op wat er komen\ngaat. We zien wat hints van nieuwe gebeurtenissen in de serie, zoals politieke\nintriges en knallende actievolle explosies. De trailer is duidelijk gemaakt om\nook kijkers aan te trekken die niet vertrouwd zijn met Star Wars, door de nadruk\nte leggen op de lovende kritiek van het eerste seizoen en muziek die niet\ntypisch voor de Star Wars franchise is."
    }), "\n", createVNode(_components.p, {
      children: "De laatste seizoen zal naar verwachting de verhalen van de personages verder\nuitbreiden en de setting van Rogue One verder ontwikkelen en eindigen op het\nexacte moment wanneer Rogue One begint. Dus hou maar al een extra gaatje in je\nagenda na de laatste aflevering om meteen Rogue One ook nog eens te bekijken."
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

const url = "src/content/nieuws/er-is-een-teaser-voor-andor-seizoen-2-die-anders-is-dan-we-gewoon-zijn-van-star-wars.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-is-een-teaser-voor-andor-seizoen-2-die-anders-is-dan-we-gewoon-zijn-van-star-wars.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-is-een-teaser-voor-andor-seizoen-2-die-anders-is-dan-we-gewoon-zijn-van-star-wars.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
