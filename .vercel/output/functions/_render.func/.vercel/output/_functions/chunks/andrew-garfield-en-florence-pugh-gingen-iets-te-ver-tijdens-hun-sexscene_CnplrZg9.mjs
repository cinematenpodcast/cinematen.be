import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Andrew Garfield en Florence Pugh gingen iets te ver tijdens hun sexscene",
  "date": "2024-10-09T11:31:27.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1728335913.jpg",
  "trailer": "",
  "slug": "de-rol-van-intieme-scènes-in-films-een-diepgaande-analyse",
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
      children: "Filmen van intieme scènes zijn een geheimzinnig aspect van het acteursbestaan. Recente anekdotes van Andrew Garfield en Florence Pugh over hun ervaringen tijdens het filmen van de romantische drama “We Live in Time” lichten de sluier hierrond toch een beetje op."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens een live optreden op Josh Horowitz’s “Happy Sad Confused” podcast onthulde Andrew Garfield een onverwacht komisch voorval tijdens de opnames van een gepassioneerde sexscène met mede-actrice Florence Pugh. De twee, samen met slechts enkele crewleden voor privacy, raakten zo opgeslokt in hun scène dat ze verder gingen dan initieel gepland. Deze onvoorziene wending zorgde voor een humoristisch tafereel achter de schermen, waar cameraman Stuart Bentley ongemakkelijk meer zeer grappig reageerde op de situatie. Garfield en Pugh hoorden de “cut” van de regisseur niet en toen ze uiteindelijk door hadden dat de opname gestopt was zagen ze dat de cameraman zich had omgedraaid en met zijn gezicht in de hoek van de kamer was gaan staan uit ongemakkelijkheid."
    }), "\n", createVNode(_components.p, {
      children: "Garfield benadrukte Pugh’s zelfverzekerdheid en humor tijdens deze ongebruikelijke opname, waarbij hij insinueerde dat hun chemie bijdroeg aan de ongeplande improvisatie."
    }), "\n", createVNode(_components.p, {
      children: "De film “We Live in Time,” onder regie van John Crowley en geschreven door Nick Payne, belicht het aangrijpende verhaal van Almut Brühl (gespeeld door Florence Pugh) en Tobias Durand (vertolkt door Andrew Garfield). Het niet-lineaire narratief volgt hun ontmoeting, liefdesverhaal en tragische wendingen doorheen een decennium van hun leven."
    }), "\n", createVNode(_components.p, {
      children: "Het aangrijpende thema van ovariumkanker brengt diepgaande emoties naar voren en legt de kwetsbaarheid van menselijke relaties bloot. De film belooft een achtbaanrit van lachen en huilen te zijn, met een delicate balans tussen vreugde en verdriet die het publiek zal raken."
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

const url = "src/content/nieuws/andrew-garfield-en-florence-pugh-gingen-iets-te-ver-tijdens-hun-sexscene.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andrew-garfield-en-florence-pugh-gingen-iets-te-ver-tijdens-hun-sexscene.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andrew-garfield-en-florence-pugh-gingen-iets-te-ver-tijdens-hun-sexscene.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
