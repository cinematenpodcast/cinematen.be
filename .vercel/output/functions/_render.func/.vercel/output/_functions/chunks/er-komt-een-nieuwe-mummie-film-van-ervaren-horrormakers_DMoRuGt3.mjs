import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er komt een nieuwe Mummie film van ervaren horrormakers",
  "date": "2024-12-20T20:40:40.010Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734716658.jpg",
  "trailer": "",
  "slug": "er-komt-een-nieuwe-mummie-film-van-ervaren-horrormakers",
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
      children: "Blumhouse, een bekend filmbedrijf dat vooral horrorfilms maakt, werkt aan een\nnieuwe versie van een Mummie film. Ze hebben Lee Cronin aangesteld om het\nverhaal te schrijven en te regisseren. Lee Cronin heeft al gewerkt aan “Evil\nDead Rise”, dus hij heeft duidelijk al wel wat ervaring met spannende films."
    }), "\n", createVNode(_components.p, {
      children: "Of deze nieuwe film een succes zal zijn, is nog niet duidelijk. De originele\nMummie films hebben een speciaal plaatsje in ons hart dankzij de legendarische\nBrendan Fraser. De remake van een paar jaar geleden met Tom Cruise heeft\nduidelijk geen goede nasmaak nagelaten bij het grote publiek maar misschien\nheeft de horror route meer kans om een goede indruk (en vooral Box Office) na te\nlaten."
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

const url = "src/content/nieuws/er-komt-een-nieuwe-mummie-film-van-ervaren-horrormakers.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-mummie-film-van-ervaren-horrormakers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-mummie-film-van-ervaren-horrormakers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
