import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Eddington Ari Aster's donkere COVID-komedie met sterrencast",
  "date": "2025-07-18T16:04:06.889Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752853469.jpg",
  "trailer": "",
  "slug": "eddington-ari-asters-donkere-covidkomedie-met-sterrencast",
  "tags": ["Film"]
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
      children: "Ari Aster waagt zich met zijn nieuwe film Eddington aan een mix van moderne\nwestern, thriller en dark comedy. De A24-productie sleepte een sterrencast\nbinnen met Joaquin Phoenix, Pedro Pascal, Emma Stone en Austin Butler in de\nhoofdrollen."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich af in mei 2020 middenin de COVID-19 pandemie. We volgen\nhet leven in Eddington, New Mexico, waar inwoners vastzitten door lockdowns. De\ndrukte in het stadje toont hoe sociale media mensen beïnvloeden en hen de\nrealiteit doen verliezen."
    }), "\n", createVNode(_components.p, {
      children: "Joaquin Phoenix vertolkt Sheriff Joe Cross die zijn positie in de gemeenschap\nprobeert terug te winnen. Hij botst met burgemeester Ted Garcia (Pedro Pascal)\ndie het stadje wil moderniseren met ideeën over maskers en diversiteit. Uit\nfrustratie start Cross een bizarre campagne voor het burgemeesterschap met\nTikTok-video’s en vreemde borden op zijn politieauto, hopend op steun van\nCOVID-moeze inwoners."
    }), "\n", createVNode(_components.p, {
      children: "De film balanceert tussen komische momenten en serieuze thema’s. Wanneer Cross\nen zijn gezin zich in complottheorieën storten, komt een donkere kant naar boven\ndie ons laat nadenken over gemeenschapsdynamieken in crisistijden. De\ngefrustreerde reacties op COVID-maatregelen worden met humor gebracht, maar\ntonen ook echte maatschappelijke spanningen."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de film sterk reageert op wereldgebeurtenissen, merken wij op dat\nbelangrijke groepen zoals activisten onderbelicht blijven. De laatste act schiet\nvolgens sommigen door met schokkende keuzes, waardoor de film afdwaalt van zijn\noorspronkelijke doelstelling."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks kritiekpuntjes blinken de acteurs uit in hun rollen. Phoenix, Pascal,\nStone en Butler geven elk hun personages diepgang en belichten perfect de\nabsurditeit van hun situaties. Eddington toont ons hoe kleine gemeenschappen\nworstelen met grote veranderingen tijdens angstige tijden. De film draait nu in\nde bioscoop."
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

const url = "src/content/nieuws/eddington-ari-asters-donkere-covidkomedie-met-sterrencast.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eddington-ari-asters-donkere-covidkomedie-met-sterrencast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eddington-ari-asters-donkere-covidkomedie-met-sterrencast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
