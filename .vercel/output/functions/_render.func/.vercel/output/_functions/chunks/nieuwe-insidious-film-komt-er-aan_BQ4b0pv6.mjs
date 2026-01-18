import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Insidious film komt er aan",
  "date": "2024-05-19T11:30:54.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715964320.jpg",
  "trailer": "",
  "slug": "nieuwe-toevoeging-aan-de-insidious-horror-franchise",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "insidious-is-al-14-jaar-oud",
    "text": "Insidious is al 14 jaar oud"
  }, {
    "depth": 4,
    "slug": "toekomst-van-de-serie",
    "text": "Toekomst van de Serie"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h4: "h4",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Een recente aankondiging door Sony heeft de releasedatum van een nieuwe film in de “Insidious” horror franchise onthuld. Deze zesde toevoeging aan de succesvolle reeks, geproduceerd door Blumhouse Productions en Screen Gems, staat gepland voor 29 augustus 2025. De film zal het duistere universum dat James Wan en Leigh Whannell in 2010 hebben gecreëerd verder verkennen."
    }), "\n", createVNode(_components.h4, {
      id: "insidious-is-al-14-jaar-oud",
      children: "Insidious is al 14 jaar oud"
    }), "\n", createVNode(_components.p, {
      children: "Sinds zijn debuut in 2010 heeft de “Insidious” franchise wereldwijd meer dan $730 miljoen aan opbrengsten gegenereerd. De films verkennen het angstaanjagende concept van ‘The Further’, een bovennatuurlijke dimensie bevolkt door kwaadaardige entiteiten die streven naar connectie met onze wereld met verwoestende gevolgen voor degenen die ermee in aanraking komen."
    }), "\n", createVNode(_components.p, {
      children: "Na het succes van “Insidious: The Red Door”, waarin Patrick Wilson niet alleen weer voor de camera stond maar ook zijn regiedebuut maakte, lijkt deze nieuwe toevoeging de rijke mythologie van de franchise verder uit te diepen. De vorige film behaalde een aanzienlijke omzet van $82 miljoen in de Verenigde Staten en $189 miljoen wereldwijd, hoewel dit maar een fractie is van de opbrengsten van de originele film kan de The Red Door wel als een financieel succes worden gezien dankzij zijn bescheiden productiebudget van $16 miljoen."
    }), "\n", createVNode(_components.h4, {
      id: "toekomst-van-de-serie",
      children: "Toekomst van de Serie"
    }), "\n", createVNode(_components.p, {
      children: "Met geruchten over een mogelijke pauze in de serie na het vijfde deel, zoals Jason Blum eerder suggereerde, is de aankondiging van deze nieuwe film een verrassing. Hoewel details over de cast en plot nog schaars zijn, belooft het volgende hoofdstuk van “Insidious” nu al wel spanning en jump scares die fans van de franchise zeker zullen waarderen."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat de duistere wereld van “Insidious” nog veel te bieden heeft, en met een sterke productieachtergrond van Blumhouse Productions en Screen Gems, kunnen horrorliefhebbers zich opmaken voor een angstaanjagende ervaring in de bioscoop."
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

const url = "src/content/nieuws/nieuwe-insidious-film-komt-er-aan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-insidious-film-komt-er-aan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-insidious-film-komt-er-aan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
