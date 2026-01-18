import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brad Pitt en George Clooney schitteren in de trailer voor Wolfs",
  "date": "2024-05-29T16:09:15.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/wolfs-will-attack-theaters-before-streaming-on-apple-tv-1716918682.jpg",
  "trailer": "Y6sGIOY8TBs",
  "slug": "brad-pitt-en-george-clooney-herenigd-in-de-actiekomedie-wolfs",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-langverwachte-reünie",
    "text": "Een langverwachte reünie"
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
      children: "Brad Pitt en George Clooney, twee iconische Hollywoodsterren, slaan opnieuw de handen ineen voor de langverwachte actiekomedie “Wolfs.” De film, geregisseerd door Jon Watts en geproduceerd door Sony en Apple Studios, belooft een onvergetelijke bioscoopervaring te worden."
    }), "\n", createVNode(_components.p, {
      children: "In “Wolfs” spelen Pitt en Clooney de rollen van twee fixers die gedwongen worden om samen te werken aan een complexe opdracht. Het verhaal draait om hun pogingen om een hoogwaardig misdrijf geheim te houden, wat ongetwijfeld tot hilarische en spannende situaties zal leiden. Naast deze twee Hollywoodzwaargewichten bestaat de cast ook uit getalenteerde acteurs zoals Amy Ryan, Austin Abrams en Poorna Jagannathan."
    }), "\n", createVNode(_components.h2, {
      id: "een-langverwachte-reünie",
      children: "Een langverwachte reünie"
    }), "\n", createVNode(_components.p, {
      children: "De chemie tussen Pitt en Clooney is al eerder bewezen in films als de “Ocean’s” franchise en “Burn After Reading.” Fans over de hele wereld kunnen niet wachten om dit dynamische duo samen op het scherm te zien schitteren na een afwezigheid van 16 jaar sinds hun laatste samenwerking. De teaser trailer van “Wolfs” geeft een intrigerend voorproefje van wat komen gaat, met een stoïcijnse Clooney achter het stuur en een nerveuze Pitt op de passagiersstoel."
    }), "\n", createVNode(_components.p, {
      children: "Clooney heeft al laten doorschemeren dat er zelfs gesprekken zijn over een mogelijke vervolgfilm, wat aangeeft dat “Wolfs” niet alleen een eenmalige samenwerking kan zijn. De productie van de film werd door Clooney omschreven als een geweldige ervaring waarbij plezier en professionaliteit hand in hand gingen."
    }), "\n", createVNode(_components.p, {
      children: "“Wolfs” staat gepland voor een bioscooprelease op 20 september en belooft een verfrissende toevoeging te zijn aan het genre van actiekomedies. Met een mix van humor, spanning en actie lijkt deze film alle ingrediënten te hebben voor een kaskraker."
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

const url = "src/content/nieuws/brad-pitt-en-george-clooney-schitteren-in-de-trailer-voor-wolfs.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brad-pitt-en-george-clooney-schitteren-in-de-trailer-voor-wolfs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brad-pitt-en-george-clooney-schitteren-in-de-trailer-voor-wolfs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
