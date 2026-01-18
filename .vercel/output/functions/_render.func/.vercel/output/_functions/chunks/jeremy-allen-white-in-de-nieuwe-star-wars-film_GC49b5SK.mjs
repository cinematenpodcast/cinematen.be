import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jeremy Allen White in de nieuwe Star Wars film",
  "date": "2024-12-10T09:46:15.526Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733787292.jpg",
  "trailer": "",
  "slug": "jeremy-allen-white-in-de-nieuwe-star-wars-film",
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
      children: "Jeremy Allen White, bekend van de populaire serie “The Bear” en de film “The\nIron Claw”, is toegevoegd aan de cast van de aanstaande Star Wars film. Deze\nfilm heet “The Mandalorian and Grogu” en komt in 2026 uit. Het verhaal speelt\nzich af in de wereld van de succesvolle tv-serie “The Mandalorian”."
    }), "\n", createVNode(_components.p, {
      children: "In deze film kunnen we weer de avonturen van Mando en Grogu, ook wel bekend als\nBaby Yoda, volgen."
    }), "\n", createVNode(_components.p, {
      children: "Jeremy Allen White zal waarschijnlijk de rol van Rotta, Jabba the Hutt’s zoon,\nspelen. Het is altijd leuk om nieuwe gezichten te zien in Star Wars. Met een\ncast zoals die van Jeremy Allen White, Pedro Pascal kan deze film wel eens een\nklepper worden. We kijken ernaar uit om te zien hoe deze nieuwe avonturen zich\nontvouwen en wat voor spannende momenten er op ons wachten in “The Mandalorian\nand Grogu”. Maar het wordt nog wel eventjes geduld hebben tot 2026."
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

const url = "src/content/nieuws/jeremy-allen-white-in-de-nieuwe-star-wars-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeremy-allen-white-in-de-nieuwe-star-wars-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeremy-allen-white-in-de-nieuwe-star-wars-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
