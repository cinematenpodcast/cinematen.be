import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cobra Kai eindigt met een driedelige Netflixgebeurtenis",
  "date": "2024-05-02T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/the-netflix-hit-may-be-timing-its-ending-to-the-new-karate-kid-movie-1714661242.jpg",
  "trailer": "WPUGgxf3tx8",
  "slug": "cobra-kai-het-epische-einde-van-een-iconische-serie",
  "tags": ["tv", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "drie-streamingsgebeurtenissen",
    "text": "Drie “streamingsgebeurtenissen”"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Netflix kondigde aan dat de populaire serie “Cobra Kai” tot een einde zal komen met een uitgebreid drieluik voor het laatste seizoen."
    }), "\n", createVNode(_components.h2, {
      id: "drie-streamingsgebeurtenissen",
      children: "Drie “streamingsgebeurtenissen”"
    }), "\n", createVNode(_components.p, {
      children: "In een recente wending heeft Netflix besloten om het slotseizoen van “Cobra Kai” op te splitsen en uit te brengen als een driedelige streaminggebeurtenis."
    }), "\n", createVNode(_components.p, {
      children: "Het seizoen zal bestaan uit in totaal vijftien afleveringen, verdeeld over drie delen. De eerste vijf afleveringen zullen deze zomer verschijnen, gevolgd door de tweede reeks afleveringen die naar verwachting in november uitkomen. Het hoogtepunt van de serie, aangekondigd als een “finale event”, staat gepland voor een nog niet bekendgemaakte datum in 2025."
    }), "\n", createVNode(_components.p, {
      children: "De serie zal zich voortzetten met Cobra Kai geëlimineerd uit de Vallei, waardoor sensei’s en studenten moeten beslissen of en hoe ze willen deelnemen aan de Sekai Taikai - het wereldkampioenschap karate. Met de spanning die zich opbouwt tussen de verschillende dojos en de dreigende climax van het ultieme karatetoernooi, belooft het laatste seizoen van “Cobra Kai” een episch spektakel te worden dat fans niet willen missen."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl de serie zijn onvermijdelijke einde nadert, wordt ook aangekondigd dat een nieuwe Karate Kid-film in de maak is, met enkele verrassende cameo’s en een crossover die fans van de originele films zeker zal bekoren."
    }), "\n", createVNode(_components.p, {
      children: "“Cobra Kai” heeft bewezen een enorm succes te zijn sinds Netflix de serie overnam van YouTube Premium, en met deze gedurfde nieuwe benadering van het laatste seizoen lijkt de streaminggigant vastbesloten om het afscheid van deze geliefde serie groots aan te pakken."
    }), "\n", createVNode(_components.p, {
      children: "Door de unieke releasestrategieën en de anticipatie op de komende Karate Kid-film, lijkt het erop dat “Cobra Kai” een blijvende impact zal hebben op het publiek en de fans die deze reis van karate, vriendschap en rivaliteit hebben gevolgd."
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

const url = "src/content/nieuws/cobra-kai-eindigt-met-een-driedelige-netflixgebeurtenis.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cobra-kai-eindigt-met-een-driedelige-netflixgebeurtenis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cobra-kai-eindigt-met-een-driedelige-netflixgebeurtenis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
