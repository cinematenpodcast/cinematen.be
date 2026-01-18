import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Jurassic World Film Geregisseerd door Gareth Edwards",
  "date": "2024-02-21T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708478868.jpg",
  "trailer": "",
  "slug": "nieuwe-jurassic-world-film-geregisseerd-door-gareth-edwards",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "opvolger-van-jurassic-world-dominion",
    "text": "Opvolger van Jurassic World Dominion"
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
      children: "Het langverwachte vierde deel van de Jurassic World-franchise heeft eindelijk een regisseur gevonden in de getalenteerde Gareth Edwards. Na het vertrek van David Leitch, bekend van Deadpool 2, nam Edwards de leiding over voor deze aankomende blockbuster. Het is gemeld dat Edwards, die eerder regisseerde voor films zoals Godzilla uit 2014 en Rogue One: A Star Wars Story, indruk heeft gemaakt op producenten Steven Spielberg en Frank Marshall."
    }), "\n", createVNode(_components.p, {
      children: "Het nieuwe Jurassic World-deel, geschreven door David Koepp, die ook verantwoordelijk was voor Jurassic Park en The Lost World: Jurassic Park, zal een “nieuw Jurassic-tijdperk” lanceren met een verhaal dat naar verwachting geen terugkerende personages zal bevatten uit eerdere Jurassic World- of Jurassic Park-films. De releasedatum staat gepland op woensdag 2 juli 2025."
    }), "\n", createVNode(_components.h2, {
      id: "opvolger-van-jurassic-world-dominion",
      children: "Opvolger van Jurassic World Dominion"
    }), "\n", createVNode(_components.p, {
      children: "De meest recente film in de Jurassic World-serie was Jurassic World Dominion, die zijn debuut maakte in 2022. Deze film werd geregisseerd door Colin Trevorrow, die het script samen met Emily Carmichael schreef, gebaseerd op een verhaal van de scenarioschrijvers van de eerste twee Jurassic World-films, Derek Conolly en Trevorrow. Onder de uitvoerend producenten bevonden zich Trevorrow, Steven Spielberg en Alexandra Derbyshire."
    }), "\n", createVNode(_components.p, {
      children: "Dominion bracht onder andere Chris Pratt, Bryce Dallas Howard, Justice Smith en BD Wong terug. Zij werden vergezeld door originele Jurassic Park-sterren Laura Dern, Sam Neill en Jeff Goldblum."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat Universal op zoek is naar een creatieve vernieuwing, aangezien hoewel de afgelopen paar Jurassic World-films commerciële successen waren, ze wisselend werden ontvangen door critici."
    }), "\n", createVNode(_components.p, {
      children: "Jurassic World 4, nog steeds zonder titel, staat gepland om uit te komen in bioscopen op 2 juli 2025. De komst van Gareth Edwards als regisseur belooft een frisse kijk op de geliefde franchise en doet fans reikhalzend uitkijken naar wat er komen gaat."
    }), "\n", createVNode(_components.p, {
      children: "Het nieuws over Gareth Edwards als regisseur van de aankomende Jurassic World-film heeft fans wereldwijd enthousiast gemaakt. Met zijn ervaring in het regisseren van grootschalige en epische films zoals Godzilla en Rogue One: A Star Wars Story, lijkt Edwards de juiste persoon te zijn om een nieuwe draai te geven aan deze geliefde dinosaurusfranchise."
    }), "\n", createVNode(_components.p, {
      children: "Het feit dat David Koepp terugkeert als schrijver voor deze film voorspelt ook veel goeds. Als de originele schrijver van Jurassic Park uit 1993 en The Lost World, brengt Koepp een diepgaande kennis en begrip van het Jurassic Park-universum naar de tafel. De combinatie van Edwards’ visie en Koepp’s verhaaltalent belooft een film die zowel nostalgisch als fris aanvoelt voor zowel oude als nieuwe fans."
    }), "\n", createVNode(_components.p, {
      children: "Met de releasedatum van juli 2025 in zicht, zal de productie van de nieuwe Jurassic World-film naar verwachting snel in een hogere versnelling gaan. Fans kunnen niet wachten om te zien welke nieuwe avonturen en angstaanjagende dinosaurussen hen te wachten staan in deze langverwachte toevoeging aan de franchise."
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

const url = "src/content/nieuws/nieuwe-jurassic-world-film-geregisseerd-door-gareth-edwards.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-jurassic-world-film-geregisseerd-door-gareth-edwards.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-jurassic-world-film-geregisseerd-door-gareth-edwards.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
