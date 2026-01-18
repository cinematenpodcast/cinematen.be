import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er komt een Scooby-Doo live-action serie op Netflix",
  "date": "2024-04-30T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1714423444.jpg",
  "trailer": "",
  "slug": "scooby-doo-live-action-serie-op-netflix-een-nieuwe-wending-aan-een-geliefde-franchise",
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "terug-naar-het-begin",
    "text": "Terug naar het begin"
  }, {
    "depth": 2,
    "slug": "ruh-roh-lets-go",
    "text": "Ruh roh let’s go"
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
      children: "De geliefde Hanna-Barbera tekenfilmserie Scooby-Doo krijgt een nieuw leven op Netflix met een live-action tv-serie, geproduceerd door Greg Berlanti’s Berlanti Productions en Warner Bros. Television. Het project heeft de aandacht getrokken van meerdere bieders in het competitieve tv-landschap en uiteindelijk heeft Netflix met een premium script-naar-serie verbintenis de deal weten te sluiten."
    }), "\n", createVNode(_components.h2, {
      id: "terug-naar-het-begin",
      children: "Terug naar het begin"
    }), "\n", createVNode(_components.p, {
      children: "Scooby-Doo werd oorspronkelijk gecreëerd door Joe Ruby en Ken Spears in 1969 en introduceerde de avonturen van Fred Jones, Daphne Blake, Velma Dinkley, Shaggy Rogers en hun pratende Deense Dog, Scooby-Doo. De franchise heeft door de jaren heen talloze aanpassingen en spin-offs gehad en wordt beschouwd als een van de grootste TV-cartoons in de geschiedenis."
    }), "\n", createVNode(_components.p, {
      children: "Berlanti Productions en WBTV hebben al succesvolle series zoals “You” en “Chilling Adventures of Sabrina” op Netflix uitgebracht, die goed werden ontvangen door het publiek. Nu voegen ze Scooby-Doo toe aan hun lijst van projecten, die ongetwijfeld voor opwinding zal zorgen onder fans van alle leeftijden."
    }), "\n", createVNode(_components.h2, {
      id: "ruh-roh-lets-go",
      children: "Ruh roh let’s go"
    }), "\n", createVNode(_components.p, {
      children: "Het script voor de live-action serie wordt geschreven door Josh Appelbaum en Scott Rosenberg, bekend van hun werk aan “Cowboy Bebop”, en belooft een eigentijdse herinterpretatie van het geliefde tekenfilmverhaal. De betrokkenheid van ervaren producenten zoals Berlanti, Schechter en anderen geeft aan dat deze nieuwe incarnatie van Scooby-Doo serieus genomen moet worden."
    }), "\n", createVNode(_components.p, {
      children: "Na eerdere live-action en animatiefilms over Scooby-Doo, evenals spin-off series zoals “Velma” van Mindy Kaling, lijkt het erop dat het publiek nog lang niet moe is van de mysterieuze avonturen van dit iconische viertal - en hun hond natuurlijk."
    }), "\n", createVNode(_components.p, {
      children: "In een tijd waarin nostalgie en heropleving van klassiekers hoogtij vieren, is het geen verrassing dat een vernieuwde versie van Scooby-Doo zijn weg vindt naar het moderne streamingpubliek. Met de juiste mix van oude charme en frisse benaderingen belooft Scooby-Doo op Netflix een serie te worden om in de gaten te houden."
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

const url = "src/content/nieuws/er-komt-een-scooby-doo-live-action-serie-op-netflix.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-scooby-doo-live-action-serie-op-netflix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-scooby-doo-live-action-serie-op-netflix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
