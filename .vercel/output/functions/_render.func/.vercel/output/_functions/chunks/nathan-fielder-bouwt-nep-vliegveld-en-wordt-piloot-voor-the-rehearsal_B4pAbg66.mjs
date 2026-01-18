import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nathan Fielder bouwt nep vliegveld en wordt piloot voor The Rehearsal",
  "date": "2025-05-30T14:14:13.558Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/2025-05-30T14-10-54-204Z.jpg",
  "trailer": "",
  "slug": "nathan-fielder-bouwt-nep-vliegveld-en-wordt-piloot-voor-the-rehearsal",
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
      children: "Nathan Fielder, de Amerikaanse comedian, pakt in het tweede seizoen van zijn\nshow “The Rehearsal” een serieus luchtvaartprobleem aan: de communicatie tussen\npiloten in de cockpit. Volgens hem leiden communicatieproblemen vaak tot\nvliegtuigongelukken omdat co-piloten hun zorgen niet durven uiten tegenover\ncaptains. Om dit te testen, onderging Fielder maandenlange training om\ncommercieel piloot te worden. Hij leerde Boeing 737’s besturen en maakte meer\ndan 120 vlieguren - opvallend veel voor een student - voordat hij solo mocht\nvliegen."
    }), "\n", createVNode(_components.p, {
      children: "In de seizoensfinale vloog Fielder met 150 acteurs aan boord van een echte\nBoeing 737. Door acteurs in plaats van echte passagiers te gebruiken, omzeilde\nhij de commerciële luchtvaartregels. Dit extreme experiment toont hoe ver hij\ngaat voor zijn project. De Federal Aviation Administration (FAA) reageerde\nkritisch op zijn stelling over communicatieproblemen en ontkende dat er data\nzijn die zijn bewering ondersteunen. Fielder noemde de FAA vervolgens een\n“domme” organisatie en bekritiseerde hun trainingsprogramma voor co-piloten, dat\nvolgens hem slechts uit een PowerPoint-presentatie bestaat."
    }), "\n", createVNode(_components.p, {
      children: "We zien ook hoe Fielder een volledig nep vliegveld construeert met acteurs als\npiloten en een gesimuleerde vliegroute. Hiermee wil hij aandacht vestigen op\nnoodsituaties in de luchtvaart. Hoewel hij zich serieus inzet - hij is nu zowel\ncomedian als opgeleid piloot - blijft de effectiviteit van zijn aanpak ter\ndiscussie staan. Zeker omdat luchtvaartautoriteiten zijn methode niet\nondersteunen."
    }), "\n", createVNode(_components.p, {
      children: "“The Rehearsal” startte in 2022 en valt op door zijn unieke aanpak van serieuze\nthema’s. Wij zien een andere kant van Fielder: niet alleen grappig, maar ook\nintens toegewijd. Toch blijft het een uitdaging om échte verandering teweeg te\nbrengen in deze sterk gereguleerde industrie."
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

const url = "src/content/nieuws/nathan-fielder-bouwt-nep-vliegveld-en-wordt-piloot-voor-the-rehearsal.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nathan-fielder-bouwt-nep-vliegveld-en-wordt-piloot-voor-the-rehearsal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nathan-fielder-bouwt-nep-vliegveld-en-wordt-piloot-voor-the-rehearsal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
