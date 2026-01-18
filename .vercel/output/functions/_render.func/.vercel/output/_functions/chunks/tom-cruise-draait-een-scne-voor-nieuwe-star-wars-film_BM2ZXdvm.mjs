import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tom Cruise draait een scène voor nieuwe Star Wars film",
  "date": "2026-01-08T23:22:58.154Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767906129.jpg",
  "trailer": "",
  "slug": "tom-cruise-draait-een-scne-voor-nieuwe-star-wars-film",
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
      children: "Er wordt hard gewerkt aan een nieuwe Star Wars film met de titel “Star Wars:\nStarfighter”. De release is gepland voor 28 mei 2027. Tijdens de opnames kreeg\nregisseur Shawn Levy hoog bezoek op de set van niemand minder dan filmster Tom\nCruise."
    }), "\n", createVNode(_components.p, {
      children: "Tom Cruise, bekend van franchises zoals “Mission: Impossible” en “Top Gun:\nMaverick”, arriveerde in november 2025 met zijn eigen helikopter. De crew\nverwelkomde hem door de iconische “Mission: Impossible”-tune te draaien."
    }), "\n", createVNode(_components.p, {
      children: "Shawn Levy was op dat moment een scène aan het voorbereiden, een\nlightsaber-gevecht dat in het water zou plaatsvinden. Levy nodigde Cruise voor\nde grap uit om eens achter de camera te staan, maar Cruise nam dit serieus. Voor\nLevy het wist, stond Cruise tot zijn enkels in het modderige water met een\ncamera in de hand, op zoek naar het perfecte shot."
    }), "\n", createVNode(_components.p, {
      children: "Levy vertelde later: “Nu, als je de film ziet, weet je dat een stukje ervan door\nTom is gefilmd.” Hij voegde eraan toe dat Cruise zijn dure schoenen had verpest,\nmaar dat die enkel wilde helpen om een goede film te maken. Een week eerder was\nook regisseur Steven Spielberg al op de set geweest."
    }), "\n", createVNode(_components.p, {
      children: "“Star Wars: Starfighter” is een belangrijke film omdat het het eerste volledig\nnieuwe verhaal is in lange tijd. Het speelt zich af vijf jaar na “The Rise of\nSkywalker”, een periode in het Star Wars universum waar we nog weinig over\nweten."
    }), "\n", createVNode(_components.p, {
      children: "De hoofdrol is voor Ryan Gosling, die een oom speelt. Zijn neef wordt vertolkt\ndoor Flynn Gray. Andere acteurs in de cast zijn Matt Smith, Mia Goth, Aaron\nPierre, Amy Adams, Simon Bird, Jamael Westman en Daniel Ings."
    }), "\n", createVNode(_components.p, {
      children: "De opnames waren in december 2025 afgerond en nu is de film in post-productie.\nOndertussen zijn er veranderingen bij Lucasfilm. Kathleen Kennedy stapt op als\nbaas en wordt vervangen door Dave Filoni en Lynwen Brennan."
    }), "\n", createVNode(_components.p, {
      children: "Shawn Levy probeert een film te maken die hij zelf graag zou willen zien, een\nadvies dat hij ooit van Steven Spielberg kreeg: “Regisseren alsof je zelf in het\npubliek zit.” Dat hij daarbij hulp kreeg van een grootheid als Tom Cruise is\nbijzonder. Wij kijken alvast uit naar mei 2027 om het resultaat, inclusief de\ndoor Cruise gedraaide scène, te kunnen zien."
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

const url = "src/content/nieuws/tom-cruise-draait-een-scne-voor-nieuwe-star-wars-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-cruise-draait-een-scne-voor-nieuwe-star-wars-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-cruise-draait-een-scne-voor-nieuwe-star-wars-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
