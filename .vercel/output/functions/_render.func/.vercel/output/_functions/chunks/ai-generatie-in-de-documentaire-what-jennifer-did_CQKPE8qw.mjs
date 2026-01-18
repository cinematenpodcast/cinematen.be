import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "AI-generatie in de documentaire What Jennifer Did",
  "date": "2024-04-18T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "https://www.slashfilm.com/img/gallery/a-netflix-true-crime-doc-used-nightmarish-ai-generated-images-of-the-killer/intro-1713478588.jpg",
  "trailer": "",
  "slug": "ai-generatie-in-de-documentaire-what-jennifer-did",
  "tags": []
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ai-in-documentaires-is-dit-oké",
    "text": "AI in documentaires, is dit oké?"
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
      children: "In een recente Netflix-documentaire over een moordcomplot met de naam “What Jennifer Did” is er een opmerkelijke kwestie aan het licht gekomen: het gebruik van mogelijk door AI gegenereerde of gemanipuleerde afbeeldingen. Dit verhaal draait om Jennifer Pan, een vrouw die momenteel gevangenzit in Canada wegens het organiseren van een moordcomplot gericht op haar ouders."
    }), "\n", createVNode(_components.h2, {
      id: "ai-in-documentaires-is-dit-oké",
      children: "AI in documentaires, is dit oké?"
    }), "\n", createVNode(_components.p, {
      children: "Deze Netflix-productie maakte gebruik van foto’s om haar “levendige, gelukkige, zelfverzekerde en zeer oprechte” persoonlijkheid te illustreren, zoals beschreven door een middelbare schoolvriend genaamd Nam Nguyen. Echter, rond de 28-minuten markering van de documentaire vertonen de afbeeldingen alle kenmerken van een AI-gegenereerde foto, met misvormde handen en vingers, vervormde gezichtskenmerken, veranderde objecten op de achtergrond en een overdreven lang voortand."
    }), "\n", createVNode(_components.p, {
      children: "Het gebruik van generatieve AI om een echte persoon te portretteren in een true-crime documentaire zal onvermijdelijk wenkbrauwen doen fronsen. Waar bedrijven soms fictief AI-gegenereerd materiaal als aankleding gebruiken, zoals te zien was in een recente aflevering van HBO’s “True Detective,” betekent het toepassen van deze technologie voor beelden van een werkelijk persoon, vooral van iemand die nog steeds in de gevangenis zit en pas rond 2040 in aanmerking komt voor vervroegde vrijlating, dat er alarmbellen moeten afgaan."
    }), "\n", createVNode(_components.p, {
      children: "Dit gaat niet over het verzinnen van een fictief verhaal voor entertainmentdoeleinden - dit is sleutelen aan de realiteit zelf om een waargebeurd verhaal te manipuleren. Het raadplegen van bronnen en experts om de juistheid van informatie te waarborgen, blijft een cruciaal aspect van documentaireproductie."
    }), "\n", createVNode(_components.p, {
      children: "Netflix is gevraagd om commentaar te geven op deze kwestie, maar heeft nog niet gereageerd, waardoor de vraag naar de rol en ethiek van AI in filmmateriaal onbeantwoord blijft."
    }), "\n", createVNode(_components.p, {
      children: "Het gebruik van AI in media, met name bij het creëren of manipuleren van beeldmateriaal, roept belangrijke vragen op over authenticiteit, ethiek en de presentatie van feiten. De discussie naar aanleiding van de controverse rondom “What Jennifer Did” benadrukt de noodzaak van transparantie en verantwoorde praktijken in de productie van documentaires en andere mediavormen. Het is essentieel dat filmmakers en platforms zoals Netflix duidelijk communiceren over het gebruik van AI en andere technologische hulpmiddelen om het publiek te informeren en vertrouwen te behouden."
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

const url = "src/content/nieuws/ai-generatie-in-de-documentaire-what-jennifer-did.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ai-generatie-in-de-documentaire-what-jennifer-did.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ai-generatie-in-de-documentaire-what-jennifer-did.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
