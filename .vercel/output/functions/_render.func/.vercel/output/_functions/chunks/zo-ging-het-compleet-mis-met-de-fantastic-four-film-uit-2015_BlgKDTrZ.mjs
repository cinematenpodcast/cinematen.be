import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zo ging het compleet mis met de Fantastic Four film uit 2015",
  "date": "2025-11-15T14:18:37.769Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1763141067.jpg",
  "trailer": "",
  "slug": "zo-ging-het-compleet-mis-met-de-fantastic-four-film-uit-2015",
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
      children: "De Fantastic Four film uit 2015 was een enorme flop. Wij vonden de film niet\ngoed, de beoordelingen waren verschrikkelijk en de opbrengsten vielen zwaar\ntegen. Acteur Miles Teller, die meespeelde, heeft later uitgelegd wat er volgens\nhem fout liep."
    }), "\n", createVNode(_components.p, {
      children: "Miles Teller vertelde dat er ontzettend hard werd gewerkt aan de film, maar dat\néén belangrijke persoon alles verpestte. Hoewel hij geen naam noemde, denken wij\ndat hij regisseur Josh Trank bedoelde. Trank had eerder de veelgeprezen film\nChronicle gemaakt, maar tijdens de productie van Fantastic Four liep het\nvolledig mis. Er waren voortdurend conflicten tussen de regisseur en studio Fox,\nen crewleden klaagden dat Trank slecht communiceerde en vaak alleen in zijn\ntrailer zat."
    }), "\n", createVNode(_components.p, {
      children: "Vlak voor de release postte Trank een bericht waarin hij beweerde dat een\nfantastische versie van de film bestond die niemand ooit zou zien, waarna hij\nhet bericht snel weer verwijderde. Studio Fox greep in en liet nieuwe scènes\nopnemen zonder Trank, met hulp van schrijver Simon Kinberg - die later zelf de\nmatig ontvangen Dark Phoenix zou regisseren."
    }), "\n", createVNode(_components.p, {
      children: "Miles Teller gaf toe dat hij als jonge acteur dacht dat een superheldenfilm\nnoodzakelijk was voor zijn carrière. Hij prees zijn medespelers Michael B.\nJordan, Kate Mara, Jamie Bell en Toby Kebbell, maar toen hij de uiteindelijke\nfilm zag, wist hij meteen dat het mis was. Tegen iemand van de studio zei hij:\n“Ik denk dat we in de problemen zitten.”"
    }), "\n", createVNode(_components.p, {
      children: "Hij kreeg gelijk: de film bracht wereldwijd slechts 168 miljoen dollar op tegen\neen budget van 120 miljoen dollar en scoorde maar 9% op Rotten Tomatoes."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl de acteurs daarna succesvolle carrières voortzetten - Teller in Top Gun:\nMaverick en Jordan als gevestigd ster - ging het met Trank bergafwaarts. Hij\nregisseerde alleen nog Capone, maar heeft wel een nieuwe film in de maak. Trank\ngaf later toe fouten te hebben gemaakt, maar benadrukte dat het een samenwerking\nwas waarin de verkeerde mensen met tegengestelde visies samenwerkten."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig is er nu een nieuwe kans met The Fantastic Four: First Steps met Pedro\nPascal in de hoofdrol, een film die wij wel weten te appreciëren."
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

const url = "src/content/nieuws/zo-ging-het-compleet-mis-met-de-fantastic-four-film-uit-2015.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zo-ging-het-compleet-mis-met-de-fantastic-four-film-uit-2015.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zo-ging-het-compleet-mis-met-de-fantastic-four-film-uit-2015.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
