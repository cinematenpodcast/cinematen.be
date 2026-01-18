import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hideo Kojima s Death Stranding wordt verfilmd door A24",
  "date": "2023-12-15T00:00:00.000Z",
  "soort": "Film",
  "trailer": "",
  "thumbnail": "/images/article-images/intro-1702565027.jpg",
  "slug": "hideo-kojimas-death-stranding-wordt-verfilmd-door-a24",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-duik-in-de-mysteries-van-death-stranding",
    "text": "Een duik in de mysteries van “Death Stranding”"
  }, {
    "depth": 2,
    "slug": "het-vinden-van-een-regisseur-voor-death-stranding",
    "text": "Het vinden van een regisseur voor “Death Stranding”"
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
      children: "De veelgeprezen indie-studio A24 en geliefde game-ontwikkelaar Hideo Kojima slaan de handen ineen om een live-action verfilming van de videogame “Death Stranding” naar het grote scherm te brengen. De game, die in 2019 werd uitgebracht, had Norman Reedus in de hoofdrol als een koerier die door de gevaarlijke landschappen van het post-apocalyptische Verenigde Staten zwerft en monsters ontwijkt met behulp van een psychische band die hij deelt met een vroeggeboren baby genaamd Lou, die wordt rondgedragen in een draagbaar synthetisch baarmoeder."
    }), "\n", createVNode(_components.h2, {
      id: "een-duik-in-de-mysteries-van-death-stranding",
      children: "Een duik in de mysteries van “Death Stranding”"
    }), "\n", createVNode(_components.p, {
      children: "De officiële synopsis van A24 en Kojima Productions vermeldt niet de psychische jar baby, maar zegt eenvoudigweg dat:"
    }), "\n", createVNode(_components.p, {
      children: "“Het verleden van de apocalyptische gebeurtenis genaamd ‘Death Stranding’ belooft de mysteries te onthullen die de grenzen tussen leven en dood hebben vervaagd en angstaanjagende wezens naar een wereld aan de rand van de afgrond hebben gebracht.”"
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment is de verfilming van “Death Stranding” nog in een vroeg stadium van ontwikkeling, zonder dat er schrijvers, regisseurs of castleden zijn vastgelegd. Wanneer de castingfase wordt bereikt, is het interessant om te zien of er terugkerende gezichten zullen zijn. Naast Reedus speelden ook Margaret Qualley, Mads Mikkelsen en Léa Seydoux personages in het spel, met daarbij optredens van filmmakers Guillermo del Toro en Nicolas Winding Refn."
    }), "\n", createVNode(_components.h2, {
      id: "het-vinden-van-een-regisseur-voor-death-stranding",
      children: "Het vinden van een regisseur voor “Death Stranding”"
    }), "\n", createVNode(_components.p, {
      children: "De vreemde visuele stijl van “Death Stranding” past ongetwijfeld goed bij A24, dat bekend staat om zijn eigenzinnige films. Het is echter belangrijk om de juiste regisseur te vinden die het tot leven kan brengen."
    }), "\n", createVNode(_components.p, {
      children: "De meest voor de hand liggende naam die in gedachten komt, is Guillermo del Toro, die samen met Kojima in 2014 het horrorspel “P.T.” mede-regisseerde. Als je de puzzel oploste in het hart van “P.T.”, ontgrendelde je een teasertrailer voor “Silent Hills”, een nieuw spel in de “Silent Hill” franchise dat een samenwerking zou zijn tussen Kojima en del Toro en waarin Norman Reedus de hoofdrol zou spelen. Ondanks de enorme fanhype, annuleerde game-uitgever Konami “Silent Hills” en probeerde “P.T.” uit de circulatie te halen. Het spel is alleen overleefd dankzij emulators en PlayStation-consoles die het spel hebben gedownload voordat het werd verwijderd. Dit was een van de grootste controverses in de geschiedenis van videogames, dus er is veel fanbehoeften om del Toro en Kojima weer samen te zien werken. In een verklaring bij de aankondiging merkte Kojima echter op dat “Het idee is dat ons publiek wordt geïntroduceerd aan een nieuwe regisseur met een frisse kijk op het materiaal.” Dit suggereert dat ze op zoek zijn naar iemand nieuws om het project te leiden."
    }), "\n", createVNode(_components.p, {
      children: "Het vinden van de juiste regisseur is van cruciaal belang omdat “Death Stranding” bekend staat om zijn unieke en surrealistische beelden. Het zal een filmmaker vereisen die Kojima’s kenmerkende stijl en visie naar het grote scherm kan brengen, terwijl hij ook een boeiend en samenhangend verhaal kan leveren. Gezien de voorkeur van A24 voor onconventioneel vertellen van verhalen, is het waarschijnlijk dat ze op zoek zullen gaan naar een regisseur die een visueel verbluffende en tot nadenken stemmende film kan leveren."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen woord over wie de potentiële kandidaten zouden kunnen zijn voor de regisseursstoel. Het zal interessant zijn om te zien wie A24 en Kojima selecteren voor de klus en hoe zij de complexe thema’s en concepten van het spel zullen interpreteren in een live-action format. Fans van het spel zullen ongetwijfeld vol spanning kijken hoe dit project zich verder ontwikkelt en wie uiteindelijk “Death Stranding” tot leven zal brengen op het grote scherm."
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

const url = "src/content/nieuws/hideo-kojimas-death-stranding-wordt-verfilmd-door-a24.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hideo-kojimas-death-stranding-wordt-verfilmd-door-a24.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hideo-kojimas-death-stranding-wordt-verfilmd-door-a24.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
