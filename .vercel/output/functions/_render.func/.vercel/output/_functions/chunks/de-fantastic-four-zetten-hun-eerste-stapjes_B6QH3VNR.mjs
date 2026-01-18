import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Fantastic Four zetten hun eerste stapjes",
  "date": "2024-07-28T08:23:52.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1722133631.jpg",
  "trailer": "",
  "slug": "het-nieuwe-tijdperk-van-marvels-fantastic-four",
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
      children: "Marvel Studios heeft tijdens een grootschalig evenement op San Diego Comic-Con eindelijk de officiële titel voor hun langverwachte Fantastic Four film onthuld. Met “Fantastic Four: First Steps” is de superheldenfamilie klaar om haar entree te maken in het Marvel Cinematic Universe. Geregisseerd door Matt Shakman, bekend van zijn werk aan “WandaVision,” belooft deze nieuwe interpretatie van het klassieke Marvel-team een unieke ervaring te worden."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van de Fantastic Four begon in 1961 in de comic books, en nu, decennia later, zullen Pedro Pascal, Vanessa Kirby, Joseph Quinn en Ebon Moss-Bachrach de iconische rollen vertolken. De film zal een nostalgische jaren ‘60 setting hebben, wat blijkt uit de pre-gevisualiseerde beelden in 4:3 aspect ratio die tijdens het evenement werden getoond. Deze retrobenadering belooft een frisse kijk op het geliefde superheldenteam."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de presentatie werd ook aangekondigd dat de Fantastic Four een rol zullen spelen in de aankomende Avengers-films, waaronder “Avengers: Doomsday”. Dit opent de deur naar interessante mogelijkheden binnen het MCU en doet fans al speculeren over hoe de verhaallijnen van deze verschillende superheldengroepen met elkaar zullen verweven."
    }), "\n", createVNode(_components.p, {
      children: "De toevoeging van Michael Giacchino als componist geeft de film een extra laag authenticiteit, met hints naar funky jaren ‘60 tunes die de sfeer zullen bepalen. Daarnaast kunnen we John Malkovich en Paul Walter Hauser verwachten in ondersteunende rollen, waardoor de cast nog indrukwekkender wordt."
    }), "\n", createVNode(_components.p, {
      children: "In het verleden zijn er al verschillende pogingen geweest om de Fantastic Four naar het grote scherm te brengen, met wisselend succes. Na eerdere films uit 2005 en 2007, gevolgd door een reboot in 2015, lijkt Marvel nu vastbesloten om een nieuwe visie en energie te brengen naar dit geliefde superheldenteam."
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

const url = "src/content/nieuws/de-fantastic-four-zetten-hun-eerste-stapjes.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-fantastic-four-zetten-hun-eerste-stapjes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-fantastic-four-zetten-hun-eerste-stapjes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
