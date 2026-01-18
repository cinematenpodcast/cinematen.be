import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe TMNT film: de Teenage Mutant Ninja Turtles keren terug in 2026",
  "date": "2024-02-29T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1709146825.jpg",
  "trailer": "",
  "slug": "nieuwe-tmnt-film-de-teenage-mutant-ninja-turtles-keren-terug-in-2026",
  "draft": false,
  "tags": ["film", "comics"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nieuwe-avonturen-en-een-iconische-schurk",
    "text": "Nieuwe Avonturen en Een Iconische Schurk"
  }, {
    "depth": 2,
    "slug": "overbrugging-met-tv-series-en-videogames",
    "text": "Overbrugging met TV-series en Videogames"
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
      children: "De fans van de Teenage Mutant Ninja Turtles kunnen zich verheugen, aangezien Paramount Pictures officieel heeft aangekondigd dat er een vervolg op de film “Teenage Mutant Ninja Turtles: Mutant Mayhem” zal komen in 2026. Regisseur Jeff Rowe zal terugkeren voor deze langverwachte sequel die gepland staat voor release op 9 oktober 2026."
    }), "\n", createVNode(_components.h2, {
      id: "nieuwe-avonturen-en-een-iconische-schurk",
      children: "Nieuwe Avonturen en Een Iconische Schurk"
    }), "\n", createVNode(_components.p, {
      children: "Na het succes van de vorige film, waarbij “Mutant Mayhem” als een van de beste “TMNT” films ooit werd beschouwd, zijn fans ongeduldig om te zien hoe het verhaal verder zal gaan. Hoewel er nog geen details over het plot zijn vrijgegeven, weten we dat de franchise zeker Shredder zal betrekken, de iconische schurk waarmee de Turtles vaak te maken krijgen."
    }), "\n", createVNode(_components.p, {
      children: "In een interview met IGN sprak regisseur Jeff Rowe over zijn enthousiasme voor het introduceren van Shredder in het vervolg. Hij belooft dat de schurk “100 keer enger zal zijn dan Superfly.” Deze aankomende film zal zeker nieuwe uitdagingen en avonturen brengen voor onze geliefde helden in een half-schelp."
    }), "\n", createVNode(_components.h2, {
      id: "overbrugging-met-tv-series-en-videogames",
      children: "Overbrugging met TV-series en Videogames"
    }), "\n", createVNode(_components.p, {
      children: "Terwijl fans moeten wachten tot 2026 om de Turtles weer op het grote scherm te zien, hoeven ze niet al te lang te wachten op meer content. Een animatieserie getiteld “Tales of the Teenage Mutant Ninja Turtles” zal deze zomer op Paramount+ debuteren. Deze serie zal dienen als een brug tussen de twee films en twee seizoenen beslaan, met de stemmen van Nicolas Cantu, Brady Noon, Micah Abbey en Shamon Brown Jr. die terugkeren als de titelschildpadden."
    }), "\n", createVNode(_components.p, {
      children: "Als dat nog niet genoeg is, komt er ook een videogame-spinoff die zich afspeelt in dezelfde wereld als de film. Uitgegeven door Outright Games, zal deze game in 2024 verschijnen voor consoles en pc, waar spelers het kunnen opnemen tegen schurken zoals Rocksteady."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat de Teenage Mutant Ninja Turtles een spannende toekomst tegemoet gaan, gevuld met nieuwe avonturen, uitdagingen en ongetwijfeld epische gevechten tegen hun meest geduchte vijanden."
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

const url = "src/content/nieuws/nieuwe-tmnt-film-de-teenage-mutant-ninja-turtles-keren-terug-in-2026.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-tmnt-film-de-teenage-mutant-ninja-turtles-keren-terug-in-2026.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-tmnt-film-de-teenage-mutant-ninja-turtles-keren-terug-in-2026.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
