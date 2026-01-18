import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Star Trek film met Black Mirror en Andor regisseur",
  "date": "2024-01-11T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704933292.jpg",
  "trailer": "",
  "slug": "nieuwe-star-trek-film-met-black-mirror-en-andor-regisseur",
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
      children: "Paramount Pictures heeft aangekondigd dat er een nieuwe “Star Trek” film in productie is, onder leiding van regisseur Toby Haynes. Haynes is bekend van zijn werk aan de populaire televisieseries “Black Mirror” en “Andor”. Het zal de eerste “Star Trek” film zijn sinds de release van “Star Trek Beyond” in 2016. De film wordt geproduceerd door J.J. Abrams’ productiemaatschappij Bad Robot en geschreven door Seth Grahame-Smith."
    }), "\n", createVNode(_components.p, {
      children: "Het plot van de nieuwe film wordt nog geheim gehouden, maar het is duidelijk dat het verhaal zich vele jaren voor de gebeurtenissen in de originele “Star Trek” film uit 2009 zal afspelen. Deze film zal dienen als een soort oorsprongsverhaal en een nieuwe benadering hebben, vergelijkbaar met de serie “Star Trek: Enterprise” die zich honderd jaar voor de originele televisieshow uit 1966 afspeelde."
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van deze nieuwe film bevestigt tevens dat het langverwachte vierde deel van de Kelvin-verse “Star Trek” filmreeks definitief is geannuleerd. Geruchten over een vierde film begonnen rond te gaan na de release van “Star Trek Beyond”, waarbij Chris Pine en Zachary Quinto, die respectievelijk de jongere versies van Captain Kirk en Commander Spock vertolken, al een contract hadden getekend om in de vierde film te verschijnen. Volgens Deadline zou de vierde film een tijdreisverhaal worden waarin Kirk teruggaat in de tijd om interactie te hebben met zijn overleden vader, gespeeld door Chris Hemsworth."
    }), "\n", createVNode(_components.p, {
      children: "Deze aankondiging werd ook verweven met het nieuws dat regisseur Quentin Tarantino werkte aan een eigen “Star Trek” script, dat naar verluidt somber en gewelddadig zou zijn. Er werd gespeculeerd dat beide films mogelijk zouden worden uitgebracht, hoewel het niet duidelijk was of ze zich in dezelfde continuïteit zouden afspelen. In 2018 verklaarde Paramount ambitieus te zijn en beweerde dat ze gelijktijdig aan drie “Star Trek” films werkten. Echter, na een grote fusie bij Viacom in december 2019 werd duidelijk dat deze films niet van de grond kwamen."
    }), "\n", createVNode(_components.p, {
      children: "Haynes’ versie van de “Star Trek” film lijkt te willen afwijken van de castingproblemen en kiest voor een nieuw verhaal binnen het “Star Trek” universum. Fans van de franchise kijken nu reikhalzend uit naar deze nieuwe film, die de eerste in de reeks zal zijn sinds 2016."
    }), "\n", createVNode(_components.p, {
      children: "Het “Star Trek” universum blijft zich uitbreiden, met onder andere de recent afgesloten serie “Picard” en een vijfde en laatste seizoen van “Star Trek: Discovery” op komst. Daarnaast worden nieuwe seizoenen van “Star Trek: Strange New Worlds” en “Star Trek: Lower Decks” geproduceerd. Ook staat er een direct-to-streaming film op de planning, met in de hoofdrol Michelle Yeoh als haar personage uit de serie “Section 31”."
    }), "\n", createVNode(_components.p, {
      children: "Deze nieuwe “Star Trek” film biedt niet alleen een kans voor fans om terug te keren naar het geliefde universum, maar ook om nieuwe verhalen en avonturen te ontdekken. Met Toby Haynes aan het roer als regisseur en J.J. Abrams als producent, belooft deze film een spannende toevoeging te zijn aan het “Star Trek” universum. Fans kunnen niet wachten om te zien wat deze nieuwe film in petto heeft voor de toekomst van Starfleet en de verre uithoeken van de ruimte."
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

const url = "src/content/nieuws/nieuwe-star-trek-film-met-black-mirror-en-andor-regisseur.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-star-trek-film-met-black-mirror-en-andor-regisseur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-star-trek-film-met-black-mirror-en-andor-regisseur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
