import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Doctor Strange zien we niet in Avengers Doomsday",
  "date": "2025-01-22T17:58:05.050Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1737565126.jpg",
  "trailer": "",
  "slug": "doctor-strange-zien-we-niet-in-avengers-doomsday",
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
      children: "Doctor Strange, gespeeld door Benedict Cumberbatch, zal niet te zien zijn in de\naankomende film “Avengers: Doomsday” die in mei 2026 uitkomt. Dit is bevestigd\ndoor Cumberbatch zelf. Tijdens een interview vertelde hij dat zijn personage\nniet zal voorkomen in het volgende Avengers teamuitje. Dit is niet omdat hij\nstopt met acteren in het MCU. In feite heeft hij veel te doen in de toekomst."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks het feit dat Doctor Strange niet in “Doomsday” verschijnt, moeten we\nniet panikeren. Hij heeft wel een belangrijke rol in de film, “Avengers: Secret\nWars,” die in mei 2027 uitkomt. Cumberbatch gaf aan dat hij in deze film “heel\nveel” aanwezig zal zijn en dat Doctor Strange een sleutelrol zal spelen in de\ntoekomst van het Marvel Universum."
    }), "\n", createVNode(_components.p, {
      children: "De afwezigheid van Doctor Strange in “Doomsday” doet ons nadenken over wat er\nmet het personage staat te gebeuren want voor zover wij weten komt “Doctor\nStrange 3” uit tussen de twee Avengers-films."
    }), "\n", createVNode(_components.p, {
      children: "We gaan nog even moeten wachten op antwoorden maar by Vishanti: wij zijn al\nhyped!"
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

const url = "src/content/nieuws/doctor-strange-zien-we-niet-in-avengers-doomsday.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/doctor-strange-zien-we-niet-in-avengers-doomsday.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/doctor-strange-zien-we-niet-in-avengers-doomsday.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
