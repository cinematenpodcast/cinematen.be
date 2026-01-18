import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Robert Downey Jr. en de Russo broers dik betaald voor hun terugkeer",
  "date": "2024-08-05T19:07:19.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1722450525.jpg",
  "trailer": "",
  "slug": "robert-downey-jrs-terugkeer-als-doctor-doom-in-het-marvel-cinematic-universe",
  "tags": ["film", "comcis"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "diiiiiiiik-betaald",
    "text": "Diiiiiiiik betaald"
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
      children: "Marvel Studios heeft recent wereldwijd serieuze hype veroorzaakt door de terugkeer van Robert Downey Jr. naar het Marvel Cinematic Universe aan te kondigen. Hij zal de rol van Doctor Doom vertolken, de schurk in “Avengers: Doomsday” en ook verschijnen in “Avengers: Secret Wars”. De nieuwste onthulling werpt echter de vraag op of RDJ’s Doctor Doom ook te zien zal zijn in “The Fantastic Four: First Steps.”"
    }), "\n", createVNode(_components.p, {
      children: "Opvallend afwezig in de huidige castlijst voor “The Fantastic Four: First Steps” is Doctor Doom, ondanks zijn status als aartsvijand van Marvel’s First Family. Marvel Studios lijkt ervoor te kiezen om Doom voor grotere projecten te bewaren. Dit betekent echter niet dat hij geen rol zal spelen wanneer “The Fantastic Four” in 2025 in de bioscopen verschijnt."
    }), "\n", createVNode(_components.p, {
      children: "Mogelijk zal “The Fantastic Four” subtiele verwijzingen bevatten naar Doom door bijvoorbeeld Latveria te noemen of te laten zien hoe hij een belangrijke rol heeft gespeeld in wetenschappelijke innovatie in Amerika in de jaren ‘60. Daarnaast bestaat de kans dat RDJ in een post-credits scène verschijnt, vergelijkbaar met hoe Thanos verscheen aan het einde van de eerste Avengers-film. Kevin Feige heeft duidelijk gemaakt dat de Fantastic Four zullen verschijnen in beide aankomende Avengers-films, dus het teasen van Doom aan het einde van hun eigen film is zeer logisch."
    }), "\n", createVNode(_components.p, {
      children: "Zelfs als deze mogelijkheid niet werkelijkheid wordt, heeft Doctor Doom weinig introductie nodig. Hij is een van de meest iconische schurken in de geschiedenis van Marvel. Fans willen graag zien hoe RDJ Doom neerzet, hopelijk wordt deze versie van Doom niet zomaar een Evil Iron-Man, maar op dat antwoord zullen  we misschien nog een paar jaar moeten wachten."
    }), "\n", createVNode(_components.h2, {
      id: "diiiiiiiik-betaald",
      children: "Diiiiiiiik betaald"
    }), "\n", createVNode(_components.p, {
      children: "Eén ding is zo goed wel als zeker, Robert Downey Jr. en de Russo broers die de films zullen regisseren nemen deze uitdaging al zeker niet voor niets aan. In een recent artikel van Variety werd onthuld dat de Russo broers $80 miljoen krijgen met bonussen wanneer de film meer dan $750 miljoen en $1 miljard opbregen."
    }), "\n", createVNode(_components.p, {
      children: "Robert Downey Jr. krijgt de dikste loonsbrief met een schappelijke $100 miljoen voor zijn terugkeer naar het MCU, ook hij krijgt die dikke performance bonussen wanneer de films ongetwijfeld weer alle Box Office records breken."
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

const url = "src/content/nieuws/robert-downey-jrs-terugkeer-als-doctor-doom-in-het-marvel-cinematic-universe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-downey-jrs-terugkeer-als-doctor-doom-in-het-marvel-cinematic-universe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-downey-jrs-terugkeer-als-doctor-doom-in-het-marvel-cinematic-universe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
