import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Trek Kelvin-films Wat is de toekomst?",
  "date": "2025-08-10T09:32:02.104Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754675732.jpg",
  "trailer": "",
  "slug": "star-trek-kelvinfilms-wat-is-de-toekomst",
  "tags": ["Film"]
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
      children: "De laatste Star Trek-film in de Kelvin-tijdlijn, “Star Trek Beyond”, kwam uit in\njuli 2016. Deze film bracht de originele Star Trek-personages terug met een\nnieuwe, jongere cast en verdiende wereldwijd zo’n 343 miljoen dollar. Helaas\nkostte de productie 185 miljoen dollar, wat voor de studio tegenviel. Hierdoor\nkwam de toekomst van de Star Trek-films op losse schroeven te staan."
    }), "\n", createVNode(_components.p, {
      children: "Na “Beyond” verschoof de aandacht naar televisie met “Star Trek: Discovery” in\n2017. Deze serie betekende de terugkeer van Star Trek op tv na 12 jaar\nafwezigheid. Paramount+ (toen nog CBS All Access) lanceerde vervolgens meerdere\nnieuwe series, wat de toekomst van de films nog onzekerder maakte."
    }), "\n", createVNode(_components.p, {
      children: "Al jaren circuleren er plannen voor “Star Trek 4”, met zelfs Quentin Tarantino\nals mogelijke regisseur. Er is ook sprake van een prequelfilm, hoewel details\ndaarover vaag blijven. Simon Pegg, die Scotty speelt, blijft hoopvol. Hij stelt\nvoor om in op de ontwikkeling van de nu oudere en wijzere personages te\nfocussen."
    }), "\n", createVNode(_components.p, {
      children: "Recente veranderingen bij Paramount, zoals een fusie met Skydance, wekken nieuwe\nverwachtingen. Pegg denkt dat dit vers bloed kan betekenen, zeker omdat nieuwe\nCEO David Ellison een franchise-fan is. Hoewel de cast graag weer samenwerkt, is\ner een groot obstakel: Anton Yelchin, die Ensign Chekov speelde, overleed in\n2016. Regisseur J.J. Abrams bevestigde al dat Chekov niet hercast wordt, maar\nhoe de film zijn afwezigheid gaat verklaren is nog onduidelijk."
    }), "\n", createVNode(_components.p, {
      children: "Karl Urban, de vertolker van Doctor McCoy, benadrukt hoe moeilijk het zou zijn\nom zonder Yelchin te werken. De sets zouden vol herinneringen aan hem zijn. Het\nis inmiddels al acht jaar geleden sinds “Beyond”, en mocht film 4 groen licht\nkrijgen, duurt het nog minstens twee tot drie jaar voor hij uitkomt. Dit maakt\nde terugkeer van de cast zonder Yelchin extra uitdagend. Wij blijven hopen op\nduidelijkheid over de toekomst van deze geliefde reeks."
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

const url = "src/content/nieuws/star-trek-kelvinfilms-wat-is-de-toekomst.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-kelvinfilms-wat-is-de-toekomst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-kelvinfilms-wat-is-de-toekomst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
