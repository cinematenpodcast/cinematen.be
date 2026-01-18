import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Wordt dit de nieuwe Snape in de Harry Potter TV-serie?",
  "date": "2024-12-05T05:54:53.424Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1733359292.jpg",
  "trailer": "",
  "slug": "wordt-dit-de-nieuwe-snape-in-de-harry-potter-tvserie",
  "tags": ["tv"]
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
      children: "Er komen spannende geruchten uit Hollywood dat de acteur Paapa Essiedu, die\neerder te zien was in “The Lazarus Project” en “The Outrun”, de rol van Severus\nSnape zou gaan spelen in de aankomende HBO remake reeks van de Harry Potter\nSaga. Dit zou betekenen dat we een nieuwe versie van deze iconische leraar in de\nserie gaan zien. De rol van Snape werd voor het eerst prachtig gespeeld door\nAlan Rickman, die helaas is overleden. Grote schoenen om te vullen dus."
    }), "\n", createVNode(_components.p, {
      children: "Als deze nieuwe serie er uiteindelijk is, hopen we dat de makers het verhaal op\neen frisse en unieke manier kunnen vertellen. Maar we zijn wel benieuwd of ze\nerin zullen slagen om de magie van de originele films en boeken vast te houden,\nterwijl ze dan ook iets nieuws proberen te maken."
    }), "\n", createVNode(_components.p, {
      children: "Nu het hek van de dam is over casting geruchten en we hopelijk binnenkort ook\nofficiële aankondigingen zijn wij bij Cinematen.be heel benieuwd wie de andere\niconische rollen op zich zullen nemen."
    }), "\n", createVNode(_components.p, {
      children: "Je kan in onze oudere podcast afleveringen alvast een paar van onze\ncastingvoorkeuren ontdekken!"
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

const url = "src/content/nieuws/wordt-dit-de-nieuwe-snape-in-de-harry-potter-tvserie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wordt-dit-de-nieuwe-snape-in-de-harry-potter-tvserie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wordt-dit-de-nieuwe-snape-in-de-harry-potter-tvserie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
