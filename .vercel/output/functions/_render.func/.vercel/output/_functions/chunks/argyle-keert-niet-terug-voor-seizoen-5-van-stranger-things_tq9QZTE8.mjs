import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Argyle keert niet terug voor seizoen 5 van Stranger Things",
  "date": "2024-01-15T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1705086390.jpg",
  "trailer": "",
  "slug": "argyle-keert-niet-terug-voor-seizoen-5-van-stranger-things",
  "draft": false,
  "tags": ["tv", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "minder-verrassend-maar-toch-jammer",
    "text": "Minder verrassend, maar toch jammer"
  }, {
    "depth": 2,
    "slug": "een-eerbetoon-aan-argyle",
    "text": "Een eerbetoon aan Argyle"
  }, {
    "depth": 2,
    "slug": "toekomst-van-stranger-things",
    "text": "Toekomst van Stranger Things"
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
      children: "Het laatste seizoen van “Stranger Things” moet het stellen zonder een teamlid: acteur Eduardo Franco heeft onlangs bevestigd aan “The Steve Varley Show” (via ScreenRant) dat zijn personage, de stoner Argyle, niet zal terugkeren voor seizoen 5. “Ik heb nooit een telefoontje gekregen, dus ja, dat is het,” vertelde Franco aan Varley nadat de presentator fanbezorgdheden had genoemd over het ontbreken van Argyle op de eerste castfoto voor het nieuwe seizoen. Volgens berichten is de productie van seizoen 5 al begonnen, dus tenzij Matt en Ross Duffer last-minute plannen hebben om Franco later in de show terug te brengen, lijkt het erop dat zijn personage afwezig zal zijn tijdens het slotstuk van de serie."
    }), "\n", createVNode(_components.h2, {
      id: "minder-verrassend-maar-toch-jammer",
      children: "Minder verrassend, maar toch jammer"
    }), "\n", createVNode(_components.p, {
      children: "Het is niet helemaal verrassend dat “Stranger Things” wil bezuinigen op de cast, vooral gezien het feit dat seizoen 4 kritiek kreeg vanwege de overvolle verhaallijnen en uitgebreide cast. Toch was het personage Argyle, de relaxte hippie pizzabezorger, een van de betere toevoegingen aan de show in de afgelopen jaren. Aangezien hij het nieuwste personage was dat werd geïntroduceerd, liet Argyle niet zoveel losse verhaallijnen achter als sommige andere belangrijke helden, maar hij leek ook prima te passen in een universitaire setting als dat is waar de tijdsprong van de show eindigt."
    }), "\n", createVNode(_components.h2, {
      id: "een-eerbetoon-aan-argyle",
      children: "Een eerbetoon aan Argyle"
    }), "\n", createVNode(_components.p, {
      children: "Franco leek dankbaar voor de reactie van fans op zijn afwezigheid en zei: “Het is fijn om te horen dat er enige bezorgdheid is, snap je?” Hoewel Argyle niet zo universeel werd omarmd als een ander nieuweling uit seizoen 4, Eddie Munson (gespeeld door Joseph Quinn), wist hij toch veel fans te verrassen met zijn charmante humor en geweldige gevoel voor humor. Voordat hij in “Stranger Things” verscheen, had Franco opvallende rollen in komedies zoals “The Package” en “Booksmart”. Hij heeft ook gespeeld in “You’re the Worst”, “Lady Dynamite”, “Tacoma FD” en meer. Franco is ongetwijfeld grappig als de hel, en hopelijk zal hij binnenkort weer op ons scherm te zien zijn in een nieuw project."
    }), "\n", createVNode(_components.h2, {
      id: "toekomst-van-stranger-things",
      children: "Toekomst van Stranger Things"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel “Stranger Things” nu weer in het nieuws is, moeten fans nog even geduld hebben voordat het nieuwe seizoen van start gaat. De productie werd in mei 2023 stilgelegd ter ondersteuning van de WGA-staking, en de cast en crew zijn ook berucht druk tijdens het tussenseizoen. Zodra “Stranger Things” uiteindelijk ten einde komt, kunnen fans een nieuw verhaal verwachten uit de wereld die de Duffer Brothers in 2016 introduceerden. Het duo richtte Upside Down Pictures op in 2022 met plannen voor zowel een spin-off als een toneelstuk dat momenteel te zien is in West End in Londen. De releasedatum van “Stranger Things” seizoen 5 is nog niet bekend."
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

const url = "src/content/nieuws/argyle-keert-niet-terug-voor-seizoen-5-van-stranger-things.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/argyle-keert-niet-terug-voor-seizoen-5-van-stranger-things.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/argyle-keert-niet-terug-voor-seizoen-5-van-stranger-things.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
