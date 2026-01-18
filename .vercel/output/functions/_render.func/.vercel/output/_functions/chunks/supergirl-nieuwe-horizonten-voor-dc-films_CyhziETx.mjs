import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dit is de regisseur van de nieuwe Supergirl film",
  "date": "2024-04-04T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1712174824.jpg",
  "trailer": "",
  "slug": "dit-is-de-regisseur-van-de-nieuwe-supergirl-film",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nieuwe-richting-voor-dc-films",
    "text": "Nieuwe Richting voor DC Films"
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
      children: "DC Comics heeft de filmwereld opgeschud door enkele onverwachte aankondigingen te doen, waaronder de keuze van regisseur voor de aankomende film “Supergirl: Woman of Tomorrow.” Volgens een rapport van Deadline, bevestigd door IGN, is DC in gesprek met regisseur Craig Gillespie om deze nieuwe toevoeging aan het DC Universe te leiden. Hoewel nog niet officieel bevestigd, zou Gillespie met zijn ervaring in films als “Dumb Money,” “Cruella,” en “I, Tonya” mogelijk een sleutelfiguur kunnen worden in de plannen van DC om een nieuw superheldenuniversum voor filmliefhebbers te introduceren."
    }), "\n", createVNode(_components.h2, {
      id: "nieuwe-richting-voor-dc-films",
      children: "Nieuwe Richting voor DC Films"
    }), "\n", createVNode(_components.p, {
      children: "De co-CEO’s van DC Films, James Gunn en Peter Safran, zullen samen produceren aan de “Supergirl” film, terwijl uitvoerend vicepresident Chantal Nong optreedt als uitvoerend producent. Het verhaal is gebaseerd op Tom King’s gelijknamige stripboekenserie en het scenario is geschreven door Ana Nogueira. De productie van de film staat gepland om te beginnen in het vierde kwartaal van 2025, na de voltooiing van de opnames voor Gunn’s “Superman” film."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl het precieze verloop van “Supergirl: Woman of Tomorrow” ten opzichte van de originele stripserie nog een mysterie blijft, weten we wel dat de titelrol zal worden vertolkt door Milly Alcock, bekend van haar rol in “House of the Dragon.” Gunn heeft eerder gesproken over een donkerdere benadering van het personage, waarbij hij aangaf dat deze Supergirl “veel harder is en niet de Supergirl die we gewend zijn.”"
    }), "\n", createVNode(_components.p, {
      children: "Supergirl: Woman of Tomorrow heeft nog geen releasedatum vastgesteld, maar fans kunnen Alcock binnenkort in actie zien. Naar verwachting zal het personage ook verschijnen in minstens één andere DC-film, hoewel de details daarvan nog onbekend zijn."
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

const url = "src/content/nieuws/supergirl-nieuwe-horizonten-voor-dc-films.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/supergirl-nieuwe-horizonten-voor-dc-films.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/supergirl-nieuwe-horizonten-voor-dc-films.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
