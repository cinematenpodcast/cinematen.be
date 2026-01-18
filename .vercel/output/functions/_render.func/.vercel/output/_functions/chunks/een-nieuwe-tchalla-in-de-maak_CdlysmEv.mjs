import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een nieuwe T'Challa in de maak?",
  "date": "2025-01-08T16:34:49.590Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1736349816.jpg",
  "trailer": "",
  "slug": "een-nieuwe-tchalla-in-de-maak",
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
      children: "De Marvel Cinematic Universe heeft ondertussen grote veranderingen doorgemaakt,\nvooral na de dood van Chadwick Boseman in 2020. Veel fans waren verdrietig toen\nze hoorden dat de acteur die T’Challa speelde was overleden. Marvel Studios\nheeft toen besloten om de rol van T’Challa niet opnieuw te casten. In plaats\ndaarvan hebben ze de film “Wakanda Forever” gemaakt, die hommage brengt aan\nChadwick Boseman en laat zien hoe belangrijk hij was voor de film en de fans."
    }), "\n", createVNode(_components.p, {
      children: "“Black Panther: Wakanda Forever” laat zien hoe de andere personages, zoals\nShuri, de zus van T’Challa, met het verlies van hem omgaan. Het verhaal legt wel\nuit dat T’Challa is overleden, maar het focust ook op hoe zijn legacy\nvoortleeft. De keuze om T’Challa niet opnieuw te casten leek een duidelijke\nbeslissing en hommage aan Boseman en zijn personage."
    }), "\n", createVNode(_components.p, {
      children: "Maaaar… recentelijk zijn er geruchten aan het rondgaan dat Marvel mogelijk toch\neen nieuwe T’Challa zal introduceren in de toekomst. De ideeën en plannen van\nMarvel veranderen voortdurend, en het lijkt erop dat ze nu misschien toch\nopnieuw gaan nadenken over de rol van T’Challa."
    }), "\n", createVNode(_components.p, {
      children: "Veel mensen zijn benieuwd naar hoe dit in de volgende films tot stand zal komen.\nZal de zoon van T’Challa, die we geïntroduceerd zagen op het einde van Black\nPanther 2, de mantel van Black Panther nu al overnemen? Of zal een andere acteur\nhet personage op één of andere manier terug tot leven wekken? Of staat de\ntechnologie misschien toch al ver genoeg om Boseman na te bootsen zonder\n“uncanny” neveneffecten? We zijn benieuwd hoe dit allemaal zal uitdraaien."
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

const url = "src/content/nieuws/een-nieuwe-tchalla-in-de-maak.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-tchalla-in-de-maak.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-tchalla-in-de-maak.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
