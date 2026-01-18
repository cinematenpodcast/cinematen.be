import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Front Room ziet er angstaanjagend uit",
  "date": "2024-06-24T11:42:42.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-front-room-looks-like-a-crowd-pleasing-horror-movie-1718895858.jpg",
  "trailer": "sljURUzdRIs",
  "slug": "brandy-maakt-haar-terugkeer-naar-horrorfilms-in-the-front-room",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "de-eggers-brothers-maken-hun-regiedebuut",
    "text": "De Eggers Brothers maken hun regiedebuut"
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
      children: "Brandy, de bekende zangeres en actrice, maakt haar langverwachte comeback naar het horrorgenre met haar rol in A24’s aankomende psychologische horror-thriller “The Front Room.” Dit markeert haar eerste optreden in een horrorfilm sinds haar rol in “I Still Know What You Did Last Summer” uit 1998."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal, gebaseerd op Susan Hill’s gelijknamige short story uit 2016, draait om een jong stel dat in verwachting is en gedwongen wordt hun schatrijke maar zieke, vervreemde stiefmoeder in huis te nemen. Maar er lijkt iets zeer mis te zijn met de oude dame wat voor een spannend plot vol vreemde scenes kan zorgen."
    }), "\n", createVNode(_components.h2, {
      id: "de-eggers-brothers-maken-hun-regiedebuut",
      children: "De Eggers Brothers maken hun regiedebuut"
    }), "\n", createVNode(_components.p, {
      children: "Max en Sam Eggers, broers van de gerenommeerde regisseur Robert Eggers, staan aan het roer van deze veelbelovende film als regisseurs. Voor hen betekent dit project hun debuut als regisseurs, wat hoge verwachtingen schept gezien het succes van hun broer met films als “The Witch” en “The Lighthouse.”"
    }), "\n", createVNode(_components.p, {
      children: "Naast Brandy zullen ook Andrew Burnap en Neal Huff een rol vertolken in “The Front Room.” Deze cast belooft een boeiende en angstaanjagende ervaring voor horrorliefhebbers over de hele wereld."
    }), "\n", createVNode(_components.p, {
      children: "“The Front Room” staat gepland voor release op 6 september later dit jaar en belooft kijkers mee te nemen op een huiveringwekkende reis door het onbekende."
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

const url = "src/content/nieuws/the-front-room-ziet-er-angstaanjagend-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-front-room-ziet-er-angstaanjagend-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-front-room-ziet-er-angstaanjagend-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
