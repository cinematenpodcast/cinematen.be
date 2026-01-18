import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Netflix Horrormeester Mike Flanagan brengt Clayface naar de nieuwe DCU",
  "date": "2024-12-12T17:53:25.909Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734018545.jpg",
  "trailer": "",
  "slug": "netflix-horrormeester-mike-flanagan-brengt-clayface-naar-de-nieuwe-dcu",
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
      children: "Mike Flanagan, bekend van zijn werk aan spannende Netflix series zoals “The Fall\nof the House of Usher” en “The Haunting of Hill House”, gaat een film maken over\nClayface, een schurk uit de wereld van Batman. Dit personage is gemaakt van klei\nen kan daardoor van vorm veranderen."
    }), "\n", createVNode(_components.p, {
      children: "In 2021 had Flanagan al het idee om een film over Clayface te maken. Maar soms\nkan het zo zijn dat een idee even moet wachten. Dat is precies wat er gebeurde.\nNu, gelukkig, is het idee voor de Clayface-film weer uit de kast gehaald door\nDCU Chief James Gunn."
    }), "\n", createVNode(_components.p, {
      children: "De film over Clayface zal worden geproduceerd door Matt Reeves. Hij is de\nregisseur van de populaire film “The Batman” en werkt samen met Lynn Harris."
    }), "\n", createVNode(_components.p, {
      children: "Met Flanagan’s stijl van vertellen, kunnen we een verhaal verwachten dat niet\nalleen spannend is, maar ook raakt aan thema’s van verlies en verdriet. Clayface\nis een personage met een interessant verleden, wat betekent dat we ons aan een\nmooie mix van actie en emotie kunnen verwachten."
    }), "\n", createVNode(_components.p, {
      children: "James Gunn blijft zich zo ook omringen door veel belovende en talentvolle\nmensen. Ik denk dat we zo wel eens een gouden tijd voor de DCU tegemoet kunnen\ngaan!"
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

const url = "src/content/nieuws/netflix-horrormeester-mike-flanagan-brengt-clayface-naar-de-nieuwe-dcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-horrormeester-mike-flanagan-brengt-clayface-naar-de-nieuwe-dcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-horrormeester-mike-flanagan-brengt-clayface-naar-de-nieuwe-dcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
