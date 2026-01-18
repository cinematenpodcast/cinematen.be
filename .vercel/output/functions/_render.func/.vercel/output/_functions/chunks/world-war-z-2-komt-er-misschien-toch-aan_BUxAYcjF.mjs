import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "World War Z 2 komt er misschien toch aan!",
  "date": "2025-08-15T11:13:21.557Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755212826.jpg",
  "trailer": "",
  "slug": "world-war-z-2-komt-er-misschien-toch-aan",
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
      children: "“World War Z” verscheen in 2013 en werd een wereldwijde hit. De film, gebaseerd\nop Max Brooks’ boek, volgde VN-werknemer Gerry Lane terwijl hij de\nzombiepandemie probeerde te stoppen. Met 540 miljoen dollar wereldwijde\nopbrengst werd het de grootste zombiefilm ooit, ondanks de hoge productiekosten\nvan 190 miljoen dollar en uitgebreide herschrijvingen en heropnames."
    }), "\n", createVNode(_components.p, {
      children: "Paramount annuleerde het geplande vervolg “World War Z 2” in 2019, maar nu lijkt\ner nieuw leven in het project te komen. David Ellison, de nieuwe CEO van\nParamount na de fusie met Skydance, heeft openlijk interesse getoond om de\nfranchise nieuw leven inblazen. Hij benadrukte dat grote franchises zoals “World\nWar Z” prioriteit krijgen bij de studio."
    }), "\n", createVNode(_components.p, {
      children: "Paramount Skydance wil jaarlijks 15 films uitbrengen, met plannen om uit te\nbreiden naar 20. Bekende reeksen zoals “Top Gun 3”, “Star Trek” en\n“Transformers” maken hier deel van uit, allemaal gericht op bioscoopreleases.\nEerdere pogingen voor een vervolg mislukten: in 2015 met regisseur J.A. Bayona\nen schrijver Steven Knight, en later in 2019 onder David Fincher. Fincher\nvergeleek zijn visie destijds zelfs met “The Last of Us”."
    }), "\n", createVNode(_components.p, {
      children: "De vernieuwde interesse komt mogelijk door het succes van Brad Pitts recente\nfilm “F1”, die met 575 miljoen dollar zelfs “World War Z” overtreft. Dit toont\naan dat zowel Pitt als zombiethema’s nog steeds publiek trekken. Er is nog geen\nofficiële releasedatum, maar wij blijven de ontwikkelingen op de voet volgen."
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

const url = "src/content/nieuws/world-war-z-2-komt-er-misschien-toch-aan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/world-war-z-2-komt-er-misschien-toch-aan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/world-war-z-2-komt-er-misschien-toch-aan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
