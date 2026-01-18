import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ryan Gosling krijgt misschien een rol in Star Wars",
  "date": "2025-01-22T18:32:13.310Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1737499027.jpg",
  "trailer": "",
  "slug": "ryan-gosling-krijgt-misschien-een-rol-in-star-wars",
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
      children: "Ryan Gosling, die onder andere te zien was in de film “Barbie”, is in gesprek om\neen rol te spelen in een nieuwe Star Wars-film en Shawn Levy, de regisseur van\n“Deadpool 3,” zal de film maken."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog niet helemaal duidelijk waar de film over zal gaan. Het lijkt erop\ndat het een op zichzelf staand verhaal zal zijn. Dit betekent dat de film niet\ndirect verbonden is met de eerdere Star Wars-films die draaien om de\nSkywalker-familie. Ryan Gosling kan zich in een geheel nieuwe rol storten, maar\nwie dat precies zal zijn, is nog een geheim. Als Gosling aan boord komt, kan het\nproject zo snel als deze herfst al in productie gaan."
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

const url = "src/content/nieuws/ryan-gosling-krijgt-misschien-een-rol-in-star-wars.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ryan-gosling-krijgt-misschien-een-rol-in-star-wars.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ryan-gosling-krijgt-misschien-een-rol-in-star-wars.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
