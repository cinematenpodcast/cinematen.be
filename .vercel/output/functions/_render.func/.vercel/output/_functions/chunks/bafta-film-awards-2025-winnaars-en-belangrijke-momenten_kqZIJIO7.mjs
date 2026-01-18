import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "BAFTA Film Awards 2025 winnaars en belangrijke momenten",
  "date": "2025-02-20T19:03:28.643Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/bafta-awards-placeholder.jpg",
  "trailer": "",
  "slug": "bafta-film-awards-2025-winnaars-en-belangrijke-momenten",
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
      children: "De BAFTA Film Awards van 2025 hebben de beste films van het afgelopen jaar\ngehuldigd. De films “Conclave” en “The Brutalist” waren de grote winnaars van de\navond, met elk vier prijzen. Andere films zoals “Wicked”, “Emilia Pérez”,\n“Anora”, “Dune: Part Two”, “A Real Pain” en “Wallace and Gromit: Vengeance Most\nFowl” wonnen ieder twee prijzen."
    }), "\n", createVNode(_components.p, {
      children: "Bij de belangrijkste prijzen was “Conclave” de winnaar van de Beste Film. De\nfilm kreeg veel aandacht omdat het de meeste nominaties had, namelijk elf. “The\nBrutalist” won onder andere de prijs voor Beste Acteur, die ging naar Adrien\nBrody. Mikey Madison won de prijs voor Beste Actrice voor haar rol in “Anora”,\nwat een verrassing zorgde, omdat Demi Moore in “The Substance” als een grote\nkanshebber werd gezien."
    }), "\n", createVNode(_components.p, {
      children: "Weer zeer verrassend won “Emilia Pérez” de prijs voor Beste Niet-Engelstalige\nFilm en Zoe Saldaña ontving de prijs voor Beste Vrouwelijke Bijrol voor haar rol\nin de film."
    }), "\n", createVNode(_components.p, {
      children: "“Wicked” werd bekroond met de prijzen voor Beste Production Design en Beste\nKostuumontwerp."
    }), "\n", createVNode(_components.p, {
      children: "Een opmerkelijke afwezigheid bij de prijzen was de film “A Complete Unknown”,\ndie zes nominaties had maar geen prijzen won."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de BAFTA’s was er weinig discussie over politieke onderwerpen. David\nTennant, die het evenement presenteerde, noemde een paar keer president Donald\nTrump in zijn openingsspeech, maar veel van deze opmerkingen werden niet\nuitgezonden. Dit jaar waren er ook weinig controverse en negatieve opmerkingen,\nondanks dat één van de actrices, Karla Sofia Gascón van Emilia Pérez, die\ngenomineerd was voor Beste Actrice, niet aanwezig was vanwege eerdere\nbeschuldigingen."
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

const url = "src/content/nieuws/bafta-film-awards-2025-winnaars-en-belangrijke-momenten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bafta-film-awards-2025-winnaars-en-belangrijke-momenten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bafta-film-awards-2025-winnaars-en-belangrijke-momenten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
