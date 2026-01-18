import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lee Sun-kyun, Acteur van \"Parasite,\" Overleden op 48-jarige Leeftijd",
  "date": "2023-12-28T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1703689882.jpg",
  "trailer": "",
  "slug": "lee-sun-kyun-acteur-van-parasite-overleden-op-48-jarige-leeftijd",
  "draft": false,
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
      children: "De Zuid-Koreaanse acteur Lee Sun-kyun, vooral bekend van zijn rol in de met een Oscar bekroonde film “Parasite,” is op 48-jarige leeftijd dood aangetroffen in een auto in Seoul. De acteur stond onder onderzoek vanwege vermeend drugsgebruik, en zijn overlijden wordt behandeld als zelfdoding."
    }), "\n", createVNode(_components.p, {
      children: "Lee werd bewusteloos aangetroffen in een geparkeerde auto in Noord-Seoul. Op de passagiersstoel werd een houtskoolbriket gevonden, welke fatale koolmonoxidevergiftiging kan veroorzaken. Hoewel de politie de officiële doodsoorzaak niet heeft bekendgemaakt, had de manager van de acteur eerder aan de politie gemeld dat Lee van huis was vertrokken nadat hij een bericht had achtergelaten dat leek op een zelfmoordbrief."
    }), "\n", createVNode(_components.p, {
      children: "Voorafgaand aan zijn dood werd Lee ondervraagd door de politie vanwege verdenking van het gebruik van marihuana en andere drugs bij een barhostess. Het onderzoek kreeg veel media-aandacht en kritiek, wat Lee ertoe bracht een rechtszaak aan te spannen tegen twee personen, waaronder de barhostess, waarin hij beweerde dat ze hem afpersten."
    }), "\n", createVNode(_components.p, {
      children: "Zuid-Korea heeft strenge anti-drugswetten en het land kampt al enkele jaren met een hoog aantal druggerelateerde misdrijven. Het heeft ook een van de hoogste zelfmoordcijfers onder ontwikkelde landen, waarbij cyberpesten wordt genoemd als een factor bij verschillende zelfmoorden van beroemdheden."
    }), "\n", createVNode(_components.p, {
      children: "“Parasite,” geregisseerd door Bong Joon-ho, won talrijke prijzen, waaronder de Academy Award voor Beste Film in 2020. Lee had al bekendheid verworven in Zuid-Korea vóór het internationale succes van de film."
    }), "\n", createVNode(_components.p, {
      children: "De acteur laat zijn vrouw, Jeon Hye-jin, en twee zonen achter."
    }), "\n", createVNode(_components.p, {
      children: "Lee Sun-kyun werd geboren op 2 maart 1975 en begon zijn carrière in het theater. Hij speelde verschillende kleine en ondersteunende rollen in het begin van de jaren 2000 voordat hij bekendheid verwierf als hoofdrolspeler in de medische dramaserie “White Tower” en “Coffee Prince,” beide zeer geprezen en immens populair in Korea."
    }), "\n", createVNode(_components.p, {
      children: "Lee gebruikte zijn groeiende succes om zich te richten op verschillende onafhankelijke films met een laag budget en ontving verschillende prijzen, waaronder een Beste Acteur-prijs voor de film “Paju” uit 2009 en de Screen Actors Guild Award voor Uitstekende Prestaties door een Cast in een Film voor “Parasite”."
    }), "\n", createVNode(_components.p, {
      children: "Het nieuws van Lee’s overlijden heeft geleid tot een stortvloed aan reacties op sociale media, waarbij fans anderen aansporen zijn brede oeuvre te waarderen buiten zijn meest bekende rol in “Parasite”. Door zijn kenmerkende stem, die hem de bijnaam “The Voice” gaf, zal zijn aanwezigheid op het grote en kleine scherm zonder twijfel erg worden gemist in de komende jaren."
    }), "\n", createVNode(_components.p, {
      children: "Lee laat zijn vrouw, actrice Jeon Hye-jin, en hun twee zoons achter. De Zuid-Koreaanse filmindustrie en zijn talloze fans rouwen om het verlies van een veelbelovend talent dat veel te vroeg is heengegaan."
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

const url = "src/content/nieuws/lee-sun-kyun-acteur-van-parasite-overleden-op-48-jarige-leeftijd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lee-sun-kyun-acteur-van-parasite-overleden-op-48-jarige-leeftijd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lee-sun-kyun-acteur-van-parasite-overleden-op-48-jarige-leeftijd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
