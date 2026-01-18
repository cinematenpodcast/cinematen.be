import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ridley Scott's Film Napoleon behaalt een belangrijke mijlpaal van $200 miljoen aan wereldwijde opbrengsten",
  "date": "2024-01-05T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704305338.jpg",
  "trailer": "ULE2At6fnAo",
  "slug": "ridley-scotts-film-napoleon-behaalt-een-belangrijke-mijlpaal-van-200-miljoen-aan-wereldwijde-opbrengsten",
  "draft": false,
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
      children: "Ridley Scott’s film “Napoleon” heeft de mijlpaal van $200 miljoen aan wereldwijde kassa-opbrengsten bereikt. Deze biografische film, met Joaquin Phoenix in de hoofdrol, heeft deze prestatie behaald met inbegrip van de cijfers van dinsdag. De film, geproduceerd door Apple Original Films en gedistribueerd door Sony Pictures, maakte zijn debuut tijdens de Thanksgiving-periode en overtrof de verwachtingen met een wereldwijde opening van $78,8 miljoen."
    }), "\n", createVNode(_components.p, {
      children: "Het succes van “Napoleon” is voornamelijk te danken aan de internationale markten, waarbij de film $141,1 miljoen heeft bijgedragen aan het totale wereldwijde bedrag."
    }), "\n", createVNode(_components.p, {
      children: "“Napoleon” verkent de oorsprong en snelle opkomst van de titulaire militaire leider tot keizer, met de focus op zijn complexe relatie met zijn vrouw, Josephine. Ondanks enkele kritische recensies werd het wereldwijde succes van de film versterkt door een strategische promotiecampagne, waaronder wereldpremières in Parijs, het Verenigd Koninkrijk en Madrid in het Prado-museum."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat het internationale succes en de verwachte awards erkenning de investering van Apple in deze grootschalige film en bioscooprelease rechtvaardigen, vooral gezien de opkomst van streamingdiensten en de veranderingen in de industrie."
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

const url = "src/content/nieuws/ridley-scotts-film-napoleon-behaalt-een-belangrijke-mijlpaal-van-200-miljoen-aan-wereldwijde-kassa-opbrengsten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ridley-scotts-film-napoleon-behaalt-een-belangrijke-mijlpaal-van-200-miljoen-aan-wereldwijde-kassa-opbrengsten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ridley-scotts-film-napoleon-behaalt-een-belangrijke-mijlpaal-van-200-miljoen-aan-wereldwijde-kassa-opbrengsten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
