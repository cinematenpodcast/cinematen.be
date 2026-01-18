import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Crow remake met Bill Skarsgård is grote flop bij de Box Office",
  "date": "2024-08-26T13:12:50.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1724518567.jpg",
  "trailer": "",
  "slug": "het-debacle-van-the-crow-remake-bill-skarsgårds-strijd-in-hollywood",
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
      children: "Na een langverwachte release van de remake van “The Crow,” met Bill Skarsgård in de hoofdrol, lijkt het erop dat de film op alle fronten tekortschiet. Ondanks een productiebudget van $50 miljoen, voorspellen critici en publiek een teleurstellende run in de zalen. Met negatieve kritieken die voornamelijk wijzen op problemen met het verhaal en de richting van de film, is de toekomst van deze reboot nu onzeker."
    }), "\n", createVNode(_components.p, {
      children: "Critici hebben de nieuwe versie van “The Crow” niet mals beoordeeld. De film heeft een moeizame start gehad, met slechts een 6% score op Rotten Tomatoes bij de debuutbeoordeling. Deze score is sindsdien iets gestegen naar 22%, maar blijft teleurstellend voor het team achter de productie."
    }), "\n", createVNode(_components.p, {
      children: "Fans en critici uiten zorgen over de constante tegenvallers van Bill Skarsgård, vooral na zijn vorige film “Boy Kills World,” die eveneens zowel commercieel als kritisch geen succes was (Yorrick vond hem wel leuk). Deze opeenvolging van mislukkingen doet twijfels rijzen over zijn vermogen om zowel commerciële als kwalitatief hoogstaande projecten af te leveren."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de recente films van Skarsgård een hobbelige weg hebben gehad, herinneren we ons nog steeds hoe hij roem vergaarde met zijn angstaanjagende vertolking van Pennywise in de moderne “It”-reboot. Fans wereldwijd hopen dat hij met “Nosferatu” zijn vorm zal hervinden en opnieuw zal schitteren aan de box office. Alleen de tijd zal uitwijzen of de acteur zijn geluk kan keren en zijn positie als een mainstream ster kan heroveren."
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

const url = "src/content/nieuws/the-crow-remake-met-bill-skarsg%C3%A5rd-is-grote-flop-bij-de-box-office.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-crow-remake-met-bill-skarsgård-is-grote-flop-bij-de-box-office.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-crow-remake-met-bill-skarsgård-is-grote-flop-bij-de-box-office.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
