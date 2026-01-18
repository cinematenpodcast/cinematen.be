import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Peaky Blinders film mist een key personage",
  "date": "2025-02-25T19:46:09.312Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1740502868.jpg",
  "trailer": "",
  "slug": "de-peaky-blinders-film-mist-een-key-personage",
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
      children: "Het populaire Netflix-serie Peaky Blinders krijgt binnenkort een film, genaamd\nThe Immortal Man. Wij kijken ernaar uit, maar niet alle favoriete personages\nzullen terugkeren. Kate Phillips, die Linda Shelby speelt, heeft bevestigd dat\nze niet in de film zal verschijnen. Dit nieuws kwam naar voren tijdens een\ninterview waarin ze sprak over haar andere project, Miss Scarlet and the Duke."
    }), "\n", createVNode(_components.p, {
      children: "Phillips gaf aan dat er gesprekken zijn geweest over haar terugkeer, maar dat\nhet uiteindelijk niet doorging. Ze zei: “Ik ben er niet. Er waren discussies en\ntoen is het niet gelukt.” Ondanks haar afwezigheid op het grote scherm, is ze\nblij met haar tijd in de Peaky Blinders serie en heeft ze vertrouwen in het\nnieuwe filmproject."
    }), "\n", createVNode(_components.p, {
      children: "In de serie was Linda Shelby getrouwd met Arthur Shelby. Haar karakter speelde\neen belangrijke rol, vooral als ze probeerde Arthur’s gewelddadige gedrag onder\ncontrole te houden. In het laatste seizoen was ze echter te zien tijdens een\nafscheidsfeestje van Tommy Shelby, waar ze afscheid nam van de familie."
    }), "\n", createVNode(_components.p, {
      children: "De film zal enkele bekende gezichten uit de serie terugbrengen, zoals Cillian\nMurphy, die de hoofdrol speelt als Tommy Shelby. Ook andere personages zoals\nSophie Rundle, Ned Dennehy, Packy Lee en Ian Peck zullen terugkeren. Nieuwe\ncastleden zoals Rebecca Ferguson en Barry Keoghan worden ook verwacht in de\nfilm."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen officiële releasedatum voor The Immortal Man. De film zal\ngeschreven worden door Steven Knight, de maker van de serie."
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

const url = "src/content/nieuws/de-peaky-blinders-film-mist-een-key-personage.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-peaky-blinders-film-mist-een-key-personage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-peaky-blinders-film-mist-een-key-personage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
