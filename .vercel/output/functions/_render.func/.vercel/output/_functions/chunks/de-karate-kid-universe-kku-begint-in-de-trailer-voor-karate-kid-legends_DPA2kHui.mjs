import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Karate Kid Universe (KKU?) begint in de trailer voor Karate Kid Legends",
  "date": "2024-12-17T15:32:12.860Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734446352.jpg",
  "trailer": "uPzOyzsnmio",
  "slug": "de-karate-kid-universe-kku-begint-in-de-trailer-voor-karate-kid-legends",
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
      children: "De Karate Kid-filmserie krijgt een interessant nieuw hoofdstuk. Jackie Chan en\nRalph Macchio komen terug in een nieuwe film, genaamd “Karate Kid: Legends”.\nDeze film verschijnt op 30 mei 2025 in de bioscoop. Ben Wang is de nieuwe Kid in\ndeze Karate Kid film."
    }), "\n", createVNode(_components.p, {
      children: "De Karate Kid-franchise is al heel lang populair. De serie begon in de jaren ‘80\nmet een klassieker over karate en vriendschap. Deze film was zo goed dat het\nleidde tot verschillende sequels en spin-offs. Een van de bekendste spin-offs is\nde serie “Cobra Kai”. Deze serie blies het verhaal van de originele film weer\nnieuw leven in en bracht de oude personages terug."
    }), "\n", createVNode(_components.p, {
      children: "In “Karate Kid: Legends” komt Ralph Macchio terug als Daniel LaRusso. Hij was de\nOG Karate Kid. Maar in deze film ontmoet hij ook Jackie Chan, die de rol speelt\nvan Mr. Han. Mr. Han was de leraar in de versie van de Karate Kid uit 2010 met\nJaden Smith. Wel een interessante take door deze twee personages samen te\nzetten."
    }), "\n", createVNode(_components.p, {
      children: "De eerste trailer van de film is net verschenen en geeft de fans een klein\nkijkje in wat ze kunnen verwachten."
    }), "\n", createVNode(_components.p, {
      children: "We zijn nu al heel benieuwd of deze film een knaller van een reboot zal zijn en\nhet geslaagde werk van Cobra Kai kan verderzetten."
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

const url = "src/content/nieuws/de-karate-kid-universe-kku-begint-in-de-trailer-voor-karate-kid-legends.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-karate-kid-universe-kku-begint-in-de-trailer-voor-karate-kid-legends.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-karate-kid-universe-kku-begint-in-de-trailer-voor-karate-kid-legends.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
