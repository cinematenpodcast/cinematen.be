import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Trek seizoenen zijn drastisch gekrompen",
  "date": "2025-09-23T19:50:20.834Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758653628.jpg",
  "trailer": "",
  "slug": "star-trek-seizoenen-zijn-drastisch-gekrompen",
  "tags": ["TV"]
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
      children: "Vroeger konden we genieten van maar liefst 26 afleveringen per seizoen van onze\ngeliefde Star Trek-series. Shows als The Next Generation, Deep Space Nine,\nVoyager en Enterprise liepen van september tot juni, wat betekende dat we bijna\neen heel jaar lang wekelijks nieuwe avonturen voorgeschoteld kregen. In die tijd\nstond elke aflevering veel meer op zichzelf, omdat niet iedereen ze in de juiste\nvolgorde keek."
    }), "\n", createVNode(_components.p, {
      children: "Tegenwoordig moeten we het stellen met slechts 10 afleveringen per seizoen,\nzoals bij Star Trek: Strange New Worlds. Na drie seizoenen hebben we maar 30\nafleveringen gezien - een fractie van wat we gewend waren. Schrijver Brannon\nBraga, die in de jaren negentig aan Star Trek werkte, uitte onlangs zijn\nteleurstelling hierover. Hij vergeleek korte seizoenen met kortstondige\ndatingapp-relaties en benadrukte dat langere seizoenen juist voor een sterkere\nband met de personages zorgen."
    }), "\n", createVNode(_components.p, {
      children: "Waar we vroeger maandenlang konden meeleven met de crew van de Voyager, moeten\nwe nu vaak lang wachten op nieuw materiaal. Series worden soms in twee delen\ngesplitst, met maandenlange pauzes ertussen. Star Trek: Prodigy is hier een\nextreem voorbeeld van, met vier afleveringen in 2021, zes in 2022 en vervolgens\neen wachttijd van acht maanden."
    }), "\n", createVNode(_components.p, {
      children: "Deze trend is helaas standaard geworden bij streamingdiensten zoals Paramount+.\nDiscovery kreeg vijf seizoenen met in totaal 65 afleveringen, Picard drie\nseizoenen van elk 10 afleveringen, en de aankomende Starfleet Academy zal\nwaarschijnlijk hetzelfde patroon volgen."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel netwerkseries zoals NCIS en Law & Order nog steeds rond de 22\nafleveringen per seizoen produceren, is sciencefiction simpelweg duurder om te\nmaken. De hoge kosten voor effecten en sets verklaren waarom streamers kiezen\nvoor kortere seizoenen met een hogere productiewaarde. Braga geeft toe dat het\nmaken van 26 afleveringen zwaar werk was, maar hij hoopt stiekem op een\nterugkeer naar die uitgebreide vorm."
    }), "\n", createVNode(_components.p, {
      children: "Voor ons als kijkers betekent dit een fundamenteel andere ervaring. De diepe\nband die we opbouwden tijdens lange seizoenen maakt plaats voor korte, intense\nperiodes die snel voorbij zijn. Of Star Trek ooit weer terugkeert naar zijn\nlangere formaat, blijft een open vraag."
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

const url = "src/content/nieuws/star-trek-seizoenen-zijn-drastisch-gekrompen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-seizoenen-zijn-drastisch-gekrompen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-seizoenen-zijn-drastisch-gekrompen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
