import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Wars: Skeleton Crew lijkt wel The Goonies in Space",
  "date": "2024-08-10T09:35:58.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/skeleton-crew-is-tapping-into-that-classic-amblin-vibe-1723261192.jpg",
  "trailer": "a6voXgBlmpk",
  "slug": "opstel-over-star-wars-skeleton-crew-en-intergalactische-avonturen",
  "tags": ["tv", "trailer"]
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
      children: "“Star Wars: Skeleton Crew” belooft een originele toevoeging te worden aan het groeiende universum van Star Wars-verhalen. Deze aankomende Disney+ serie, onthuld tijdens de D23 Expo, neemt ons mee op een reis door de ruimte met een mix van avontuur, mysterie en jeugdige energie. De teaser trailer introduceert Jude Law als Jod Na Nawood, een Jedi die een vaderlijke rol op zich neemt ten opzichte van vier jonge avonturiers: Wim, KB, Neel en Fern."
    }), "\n", createVNode(_components.p, {
      children: "De premisse van “Skeleton Crew” doet denken aan klassiekers zoals “The Goonies” en “E.T.”, waarbij een groep jonge helden samenkomt om onbekende werelden te verkennen en uitdagende situaties het hoofd te bieden. Het belooft een verhaal te zijn dat zowel nostalgisch als vernieuwend is, met een focus op de ontdekking van “curieuze en gevaarlijke werelden” door de ogen van kinderen."
    }), "\n", createVNode(_components.p, {
      children: "De serie wordt geleid door een getalenteerd team van regisseurs, waaronder Jon Watts, Lee Isaac Chung, Bryce Dallas Howard, David Lowery en de Daniels, die bekend staan om hun meeslepende vertelstijl. Met praktische creaturen en indrukwekkende visuele effecten lijkt “Skeleton Crew” een frisse kijk te bieden op het Star Wars-universum, met een nadruk op avontuur en verwondering."
    }), "\n", createVNode(_components.p, {
      children: "Met de release gepland voor december 3, 2024, hebben fans hoge verwachtingen van wat deze serie te bieden heeft. Zal Jon Watts, bekend van het succesvol herstarten van de “Spider-Man” franchise, ook hetzelfde kunnen doen voor Star Wars op het kleine scherm? Alleen de tijd zal het leren, maar de veelbelovende start van “Skeleton Crew” doet vermoeden dat we een boeiende en betoverende reis kunnen verwachten door de uitgestrektheid van de melkweg."
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

const url = "src/content/nieuws/star-wars-skeleton-crew-lijkt-wel-the-goonies-in-space.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-wars-skeleton-crew-lijkt-wel-the-goonies-in-space.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-wars-skeleton-crew-lijkt-wel-the-goonies-in-space.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
