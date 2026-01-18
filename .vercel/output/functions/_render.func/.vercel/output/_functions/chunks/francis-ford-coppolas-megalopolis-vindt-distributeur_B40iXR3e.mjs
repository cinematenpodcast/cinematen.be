import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Francis Ford Coppola's Megalopolis heeft een distributeur",
  "date": "2024-06-18T11:32:54.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1718646441.jpg",
  "trailer": "",
  "slug": "francis-ford-coppolas-megalopolis-vindt-distributeur",
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
      children: "Francis Ford Coppola’s langverwachte film “Megalopolis” heeft eindelijk een distributeur gevonden voor Noord-Amerika. De filmmaker, bekend van meesterwerken zoals “The Godfather,” financierde, schreef, regisseerde en produceerde deze ambitieuze $120 miljoen dollar kostende film. Na de première op het Cannes Film Festival in mei, waarbij er aanvankelijk geen Noord-Amerikaanse distributeur was, heeft Lionsgate Studios nu bevestigd dat ze “Megalopolis” zullen distribueren in de Verenigde Staten en Canada."
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van de deal komt na maanden van speculatie over welke studio Coppola’s epische passieproject zou distribueren. “Megalopolis” zal op 27 september in de VS worden uitgebracht, inclusief vertoningen in IMAX-theaters. Coppola investeerde naar verluidt zo’n $120 miljoen van zijn eigen geld, opgehaald uit de verkoop van een deel van zijn wijnbedrijf, om dit ambitieuze verhaal te financieren."
    }), "\n", createVNode(_components.p, {
      children: "Met een indrukwekkende cast, waaronder Adam Driver, Aubrey Plaza, Giancarlo Esposito, Nathalie Emmanuel en anderen, biedt de film een grootschalige fabel die machtsstrijd belicht tegen de achtergrond van een gefictionaliseerd New York dat is omgetoverd tot New Rome."
    }), "\n", createVNode(_components.p, {
      children: "Bij de première van de film op het Cannes Film Festival schreef Joshua Rothkopf van The Times dat als “Megalopolis” het laatste werk wordt van de 85-jarige filmmaker, hij niet eindigt met iets tam en verzorgd, maar met een overdreven, levendig verhaal over de wortels van fascisme, dat alleen een kritische kijker een ramp zou noemen."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat “Megalopolis” misschien wel de meest radicale film is die Coppola ooit heeft gemaakt. Lionsgate, al lang een partner van Coppola en zijn American Zoetrope banner, heeft eerder home entertainment releases van zijn films behandeld en kijkt uit naar het brengen van dit unieke werk naar het publiek."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de persconferentie in Cannes sprak Coppola over de gedurfde, stilistische sprong van “Megalopolis”, waarbij hij verklaarde: “Ik wist dat de film anders was dan andere films die er zijn. Het is hoe ik voelde dat de film moest zijn, en omdat ik ervoor betaalde, dacht ik dat ik recht had om het op mijn manier te doen.”"
    }), "\n", createVNode(_components.p, {
      children: "“Megalopolis” belooft een cinematografisch evenement te worden en zal ongetwijfeld discussie oproepen wanneer het later dit jaar in de bioscopen verschijnt."
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

const url = "src/content/nieuws/francis-ford-coppolas-megalopolis-vindt-distributeur.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/francis-ford-coppolas-megalopolis-vindt-distributeur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/francis-ford-coppolas-megalopolis-vindt-distributeur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
