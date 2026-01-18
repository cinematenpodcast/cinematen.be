import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe wateren voor de Pirates of the Carribean franchise",
  "date": "2024-03-27T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1711475898.jpg",
  "trailer": "",
  "slug": "nieuwe-wateren-voor-de-pirates-of-the-carribean-franchise",
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
      children: "Het beruchte en geliefde franchise “Pirates of the Caribbean” staat op het punt om een frisse start te maken. Producent Jerry Bruckheimer heeft onthuld dat de volgende film in de reeks een reboot zal zijn, wat betekent dat we mogelijk een geheel nieuwe cast zullen zien zonder de iconische Johnny Depp als Captain Jack Sparrow."
    }), "\n", createVNode(_components.p, {
      children: "Na bijna zeven jaar sinds het laatste avontuur van Jack Sparrow op het witte doek in “Pirates of the Caribbean: Dead Men Tell No Tales,” heeft Disney verschillende versies van een zesde film in de franchise overwogen. Recente berichten wijzen erop dat de nieuwe film een verse start zal betekenen, los van de eerdere verhalen die we hebben gezien. Het blijft nog een mysterie welke piraten en schatten ons te wachten staan in deze nieuwe vertelling."
    }), "\n", createVNode(_components.p, {
      children: "In voorgaande jaren zijn er verschillende ideeën en projecten de revue gepasseerd. Zo waren er plannen voor een film met Margot Robbie en zelfs geruchten over een mogelijke terugkeer van Johnny Depp. Echter, de focus lijkt nu te liggen op een compleet nieuwe benadering van de franchise, waarbij Disney bereid is een nieuw pad te bewandelen."
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

const url = "src/content/nieuws/pirates-of-the-caribbean-een-nieuw-avontuur-op-komst.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/pirates-of-the-caribbean-een-nieuw-avontuur-op-komst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/pirates-of-the-caribbean-een-nieuw-avontuur-op-komst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
