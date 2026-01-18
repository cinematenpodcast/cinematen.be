import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het langverwachte vervolg op Freaky Friday brengt Jamie Lee Curtis en Lindsay Lohan opnieuw samen op het scherm",
  "date": "2024-03-30T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1711743791.jpg",
  "trailer": "",
  "slug": "het-langverwachte-vervolg-op-freaky-friday-brengt-jamie-lee-curtis-en-lindsay-lohan-opnieuw-samen-op-het-scherm",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "de-terugkeer-van-een-iconisch-duo",
    "text": "De terugkeer van een iconisch duo"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Al sinds de release van de originele film Freaky Friday in 2003, hebben fans gehoopt op een langverwacht vervolg met Jamie Lee Curtis en Lindsay Lohan. Na jaren van speculatie en hints lijkt het er nu eindelijk van te komen. Recente berichten onthullen dat Nisha Ganatra geselecteerd is om het vervolg te regisseren, wat veel opwinding heeft veroorzaakt onder de fans."
    }), "\n", createVNode(_components.h2, {
      id: "de-terugkeer-van-een-iconisch-duo",
      children: "De terugkeer van een iconisch duo"
    }), "\n", createVNode(_components.p, {
      children: "Jamie Lee Curtis en Lindsay Lohan hebben onlangs een selfie gedeeld op Instagram, waarbij ze de anticipatie voor het aankomende vervolg verder aanwakkerden. Curtis, die eerder al enthousiast sprak over de mogelijkheid om opnieuw van plaats te wisselen met Lohan, geeft duidelijk blijk van haar vreugde over de aankomende film. De fans kunnen niet wachten om dit geliefde duo opnieuw samen op het scherm te zien schitteren."
    }), "\n", createVNode(_components.p, {
      children: "De oorspronkelijke film, geregisseerd door Mark Waters, was een enorm succes en blijft geliefd bij zowel oudere als jongere kijkers. De chemie tussen Curtis en Lohan was destijds een van de hoogtepunten van de film, en het publiek kijkt reikhalzend uit naar hoe hun dynamiek verder zal evolueren in het nieuwe hoofdstuk van het verhaal."
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

const url = "src/content/nieuws/het-langverwachte-vervolg-op-freaky-friday-jamie-lee-curtis-en-lindsay-lohan-opnieuw-samen-op-het-scherm.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-langverwachte-vervolg-op-freaky-friday-jamie-lee-curtis-en-lindsay-lohan-opnieuw-samen-op-het-scherm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-langverwachte-vervolg-op-freaky-friday-jamie-lee-curtis-en-lindsay-lohan-opnieuw-samen-op-het-scherm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
