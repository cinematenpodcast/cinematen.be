import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Joe Keery van Stranger Things naar nummer 1 op Spotify",
  "date": "2026-01-06T20:05:04.705Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1767726178.jpg",
  "trailer": "",
  "slug": "joe-keery-van-stranger-things-naar-nummer-1-op-spotify",
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
      children: "Joe Keery, die wij kennen als Steve uit Stranger Things, heeft met zijn band Djo\neen nummer 1 hit gescoord op de wereldwijde Spotify-lijst. Zijn liedje “End of\nBeginning” staat bovenaan de lijst van meest gestreamde nummers."
    }), "\n", createVNode(_components.p, {
      children: "Hij stootte Taylor Swift’s nummer “The Fate of Ophelia” van de eerste plek,\nnadat dat 78 dagen op nummer 1 had gestaan. “End of Beginning” komt al uit 2022,\nmaar is nu opnieuw populair geworden. Waarschijnlijk doordat het laatste seizoen\nvan Stranger Things net is afgelopen en wij massaal zijn muziek zijn gaan\nontdekken."
    }), "\n", createVNode(_components.p, {
      children: "Joe speelde bijna tien jaar in Stranger Things en maakte tussen de opnames door\nmuziek. Nu de serie is afgelopen, kan hij zich volledig op zijn muziek storten.\nHet liedje had eerder al succes: in 2024 stond het op plek 11 in een grote\nAmerikaanse hitlijst."
    }), "\n", createVNode(_components.p, {
      children: "Joe deelde een verhaal over een ontmoeting met Taylor Swift. In een opnamestudio\nvertelde ze hem dat ze “End of Beginning” erg goed vond. Joe was verbaasd dat ze\nzijn liedje al kende. Toen hij de studio verliet, stonden er mensen te wachten\nop Taylor Swift. Ze herkenden hem niet meteen, maar iemand zei: “Oh, dat is die\ngozer van die serie.”"
    }), "\n", createVNode(_components.p, {
      children: "Joe Keery zal waarschijnlijk niet terugkeren in de mogelijke nieuwe Stranger\nThings-serie. Hij heeft nu andere projecten, zoals de nieuwe film Cold Storage\ndie in februari uitkomt. En uiteraard gaat hij door met muziek maken, nu zijn\nband Djo succes heeft."
    }), "\n", createVNode(_components.p, {
      children: "In een interview gaf hij aan dat hij het nog moeilijk vindt om te beseffen hoe\nbijzonder dit is. Het belangrijkste voor hem is dat hij in de studio staat en\nmuziek maakt."
    }), "\n", createVNode(_components.p, {
      children: "Het liedje “End of Beginning” gaat over het einde van een hoofdstuk en het begin\nvan een nieuw. Dat past perfect bij Joe’s situatie: het einde van Stranger\nThings en het begin van een succesvolle muziekcarrière."
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

const url = "src/content/nieuws/joe-keery-van-stranger-things-naar-nummer-1-op-spotify.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/joe-keery-van-stranger-things-naar-nummer-1-op-spotify.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/joe-keery-van-stranger-things-naar-nummer-1-op-spotify.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
