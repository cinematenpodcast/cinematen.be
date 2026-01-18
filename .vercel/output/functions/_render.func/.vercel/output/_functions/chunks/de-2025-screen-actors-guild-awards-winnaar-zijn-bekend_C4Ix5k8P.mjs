import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De 2025 Screen Actors Guild Awards winnaar zijn bekend",
  "date": "2025-02-24T11:38:39.709Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/592239_6904781_updates.jpg",
  "trailer": "",
  "slug": "de-2025-screen-actors-guild-awards-winnaar-zijn-bekend",
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
      children: "De 31ste jaarlijkse Screen Actors Guild Awards, vaak afgekort als SAG Awards,\nvonden plaats op zondagavond 23 februari 2025 in Los Angeles. De show werd live\ngestreamd op Netflix."
    }), "\n", createVNode(_components.p, {
      children: "In de filmcategorieën was Conclave de grote winnaar. De film ontving de prijs\nvoor de beste cast. Timothée Chalamet won de prijs voor de beste mannelijke\nacteur voor zijn rol als Bob Dylan in de film A Complete Unknown. Demi Moore\nwerd bekroond tot beste vrouwelijke acteur voor haar rol in The Substance. In de\nondersteunende acteerrollen waren Kieran Culkin en Zoe Saldaña de winnaars.\nCulkin won voor A Real Pain en Saldaña voor Emilia Pérez."
    }), "\n", createVNode(_components.p, {
      children: "Het evenement had ook verrassingen. Ondanks de vele nominaties ging de populaire\nmusical Wicked naar huis zonder enige prijs. Op de televisie was Shōgun de grote\nwinnaar en won verschillende prijzen, waaronder de beste drama-ensemble.\nHiroyuki Sanada werd uitgeroepen tot beste acteur in een drama en Anna Sawai won\nvoor beste actrice in een drama."
    }), "\n", createVNode(_components.p, {
      children: "Only Murders in the Building was de best comedy serie en Martin Short werd\ngekroond tot beste acteur in een comedy voor zijn rol in dezelfde serie. Jean\nSmart won de prijs voor beste actrice in een comedy voor haar rol in Hacks.\nJessica Gunning won de prijs voor beste actrice in een TV-film of beperkte serie\nvoor Baby Reindeer, en Colin Farrell werd benoemd tot beste acteur in een\nTV-film voor The Penguin."
    }), "\n", createVNode(_components.p, {
      children: "De SAG Awards hebben een speciale betekenis voor de filmindustrie. Aangezien\nacteurs de grootste groep stemmers zijn in de Academy of Motion Picture Arts and\nSciences, kan het patroon van de SAG Awards de richting van de Oscars\nbeïnvloeden. De SAG Awards zijn een belangrijke maatstaf voor wie mogelijk\nandere belangrijke prijzen zal winnen."
    }), "\n", createVNode(_components.p, {
      children: "De show werd gepresenteerd door Kristen Bell, die ook genomineerd was voor haar\nrol in de comedy Nobody Wants This. Tijdens de uitreiking werd ook Jane Fonda\ngeëerd met de Life Achievement Award voor haar carrière."
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

const url = "src/content/nieuws/de-2025-screen-actors-guild-awards-winnaar-zijn-bekend.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-2025-screen-actors-guild-awards-winnaar-zijn-bekend.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-2025-screen-actors-guild-awards-winnaar-zijn-bekend.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
