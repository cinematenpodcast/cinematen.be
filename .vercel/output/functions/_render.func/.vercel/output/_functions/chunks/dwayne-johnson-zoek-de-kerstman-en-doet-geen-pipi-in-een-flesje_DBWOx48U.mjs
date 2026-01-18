import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dwayne Johnson zoek de kerstman (en doet geen pipi in een flesje)",
  "date": "2024-06-25T20:37:11.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/red-one-will-try-to-jingle-your-bells-this-november-1719333489.jpg",
  "trailer": "U8XH3W0cMss",
  "slug": "red-one-de-nieuwe-kerstfilm-sensatie",
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
      children: "Dwayne “The Rock” Johnson en Chris Evans slaan de handen ineen in de langverwachte kerstfilm “Red One”. Het verhaal draait om een ontvoerde, gespierde Kerstman (gespeeld door J.K. Simmons) en de noordpoolbeveiliging van Callum Drift (Johnson), die samenwerkt met de louche tracker Jack O’Malley (Evans) om Sinterklaas terug te halen en Kerstmis te redden."
    }), "\n", createVNode(_components.p, {
      children: "“Red One”, gefilmd in 2022 en oorspronkelijk gepland voor een release rond Kerstmis 2023 op Prime Video, werd uitgesteld tot november 2024 vanwege de SAG-AFTRA-staking. Het productieproces werd bemoeilijkt door een oplopend budget en geruchten over Johnson’s gedrag op de set, waaronder zijn herhaalde late aankomsten. Amazon MGM Studios hebben lovende reacties gemeld op beelden van de film tijdens CinemaCon dit jaar."
    }), "\n", createVNode(_components.p, {
      children: "Reindeers lijken opgewonden te raken bij het zien van The Rock, terwijl Chris Evans’ personage, Jack O’Malley, bekendstaat als de beste tracker ter wereld. Lucy Liu speelt ook een rol als hoofd van de Noordpoolbeveiliging. De trailer onthult hilarische situaties, waaronder Jack die snoep steelt van een baby en probeert om via Santa’s technologie een levensgrote Wonder Woman-actiefiguur te bemachtigen."
    }), "\n", createVNode(_components.p, {
      children: "In een wereld waar Kerstmis bedreigd wordt door de ontvoering van een stoere Kerstman en de onwaarschijnlijke reddingsactie van Callum en Jack, worden kijkers meegenomen op een globetrottende avontuurlijke reis. Van sneeuwmannen op tropische stranden tot epische gevechten met Krampus, de actie is grenzeloos en absurd."
    }), "\n", createVNode(_components.p, {
      children: "“Red One” lijkt zowel absurdistisch als potentieel vermakelijk te zijn. De trailer, gelardeerd met lachwekkende momenten en bizarre wendingen, wekt de indruk dat de filmindustrie hiermee een experiment uitvoert. Met een budget van maar liefst $250 miljoen en castleden als The Rock en Chris Evans, lijkt “Red One” een kerstfilm te zijn die alles behalve conventioneel is."
    }), "\n", createVNode(_components.p, {
      children: "De releasedatum in november, ver verwijderd van de kerstdagen, doet de wenkbrauwen fronsen. Desondanks belooft “Red One” een spektakel te worden dat wellicht de grenzen van wat we gewend zijn van een kerstfilm zal verleggen."
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

const url = "src/content/nieuws/dwayne-johnson-zoek-de-kerstman-en-doet-geen-pipi-in-een-flesje.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-johnson-zoek-de-kerstman-en-doet-geen-pipi-in-een-flesje.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-johnson-zoek-de-kerstman-en-doet-geen-pipi-in-een-flesje.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
