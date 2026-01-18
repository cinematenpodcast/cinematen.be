import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stephen King's The Monkey lijkt nu al angstaanjagend",
  "date": "2024-08-13T09:19:01.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/stephen-kings-the-monkey-is-coming-to-the-big-screen-1723481908.jpg",
  "trailer": "8pGDA9To3AA",
  "slug": "stephen-kings-the-monkey-een-angstaanjagende-duik-in-het-duistere-rijk-van-de-horror",
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
      children: "De wereld van Stephen King staat bekend om zijn vermogen om lezers en kijkers diep in de duisternis van het menselijke bestaan te trekken. Met elk nieuw verhaal weet hij angsten aan te boren die verstopt liggen in de donkerste hoeken van onze verbeelding. Een van zijn meest recente creaties, “The Monkey,” belooft opnieuw een huiveringwekkende reis te worden voor liefhebbers van het genre."
    }), "\n", createVNode(_components.p, {
      children: "In een exclusieve teaser die onlangs in bioscopen verscheen, krijgen kijkers een eerste glimp te zien van wat komen gaat. Theo James neemt de hoofdrol op zich als de volwassen versies van tweelingbroers Hal en Bill. De beelden tonen James besmeurd met bloed, wat al snel duidt op de duistere en grimmige toon van het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van “The Monkey” begint wanneer de jonge broers hun vaders oude speelgoedaap vinden op zolder. Deze ontdekking lijkt een reeks mysterieuze en gruwelijke sterfgevallen in gang te zetten. In paniek gooien ze de aap weg en proberen ze verder te gaan met hun leven. Jaren later worden de nu vervreemde tweelingbroers gedwongen weer samen te werken wanneer de dood weer toeslaat. Ze moeten een manier vinden om de aap voorgoed te vernietigen."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Osgood Perkins, die eerder lof oogstte de film “Longlegs,” heeft “The Monkey” geschreven en geregisseerd. Hij benadrukt dat de film een eerbetoon is aan Stephen King en diens unieke vermogen om diepgewortelde angsten tot leven te brengen. Met een cast bestaande uit getalenteerde acteurs zoals Tatiana Maslany, Elijah Wood en Colin O’Brien, belooft “The Monkey” een meeslepende en angstaanjagende ervaring te worden voor liefhebbers van het genre."
    }), "\n", createVNode(_components.p, {
      children: "Gefilmd en ingeblikt sinds maart van dit jaar, zal “The Monkey” naar verwachting op 21 februari 2025 in de bioscopen verschijnen."
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

const url = "src/content/nieuws/stephen-kings-the-monkey-een-angstaanjagende-duik-in-het-duistere-rijk-van-de-horror.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stephen-kings-the-monkey-een-angstaanjagende-duik-in-het-duistere-rijk-van-de-horror.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stephen-kings-the-monkey-een-angstaanjagende-duik-in-het-duistere-rijk-van-de-horror.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
