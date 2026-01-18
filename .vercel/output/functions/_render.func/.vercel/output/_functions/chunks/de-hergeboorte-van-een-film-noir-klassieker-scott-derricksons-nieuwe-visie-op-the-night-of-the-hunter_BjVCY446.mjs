import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een remake van een film noir klassieker: Scott Derrickson's nieuwe visie op The Night of the Hunter",
  "date": "2024-03-28T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1711494764.jpg",
  "trailer": "",
  "slug": "een-remake-van-een-film-noir-klassieker-scott-derricksons-nieuwe-visie-op-the-night-of-the-hunter",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-verhaal",
    "text": "Het Verhaal"
  }, {
    "depth": 2,
    "slug": "nieuwe-interpretatie",
    "text": "Nieuwe Interpretatie"
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
      children: "Scott Derrickson, bekend van films als “The Black Phone” en “Doctor Strange,” slaat opnieuw de handen ineen met zijn schrijfpartner C. Robert Cargill om het thrillerboek “The Night of the Hunter” van Davis Grubb te adapteren. Dit iconische verhaal werd eerder verfilmd tot een van de meest geliefde film noirs aller tijden in 1955 door Charles Laughton."
    }), "\n", createVNode(_components.h2, {
      id: "het-verhaal",
      children: "Het Verhaal"
    }), "\n", createVNode(_components.p, {
      children: "“The Night of the Hunter” volgt de amorele moordenaar Harry Powell, een voormalige gevangene die zich vermomt als gevangenispredikant en de weduwe van zijn overleden celgenoot vermoordt om het geld te vinden dat zij verstopte na hun laatste overval. De kinderen van de weduwe, John en Pearl, die weten waar het geld verborgen is, slaan op de vlucht terwijl Harry vastbesloten is hen op te sporen."
    }), "\n", createVNode(_components.h2, {
      id: "nieuwe-interpretatie",
      children: "Nieuwe Interpretatie"
    }), "\n", createVNode(_components.p, {
      children: "Derrickson en Cargill zullen gezamenlijk het scenario schrijven voor deze hervertelling. Peter Gethers zal produceren via zijn productiebedrijf KramMar Delicious Mystery Productions, terwijl Amy Pascal zal produceren onder haar deal met Pascal Pictures bij Universal Pictures."
    }), "\n", createVNode(_components.p, {
      children: "Na hun succes in Hollywood met horrorfilms, kregen Derrickson en Cargill voor het eerst te maken met blockbuster-filmmaken met de Marvel-film “Doctor Strange” uit 2016. Na het verlaten van het vervolg vanwege creatieve meningsverschillen, kwam het duo bij Universal met de film “The Black Phone” uit 2021, die zowel bij critici als aan de kassa een lowbudget-horrorhit was met $161 miljoen aan wereldwijde opbrengsten."
    }), "\n", createVNode(_components.p, {
      children: "Derrickson en Cargill hebben ook getekend om een vervolg op “The Black Phone” te regisseren, waar ze aan zullen beginnen na de voltooiing van de Apple TV+ actiefilm “The Gorge” met in de hoofdrollen Miles Teller en Anya Taylor-Joy, die momenteel in postproductie is."
    }), "\n", createVNode(_components.p, {
      children: "De aankomende herinterpretatie van “The Night of the Hunter” belooft een frisse kijk op het klassieke verhaal. Het samenspel tussen horror en thriller, gekoppeld aan hun bewezen ervaring in het genre, doet vermoeden dat dit een project is om naar uit te kijken."
    }), "\n", createVNode(_components.p, {
      children: "Als fans van het oorspronkelijke werk en bewonderaars van het vakmanschap van Derrickson en Cargill, kunnen filmliefhebbers en critici alvast reikhalzend uitkijken naar wat deze getalenteerde filmmakers zullen creëren in hun herinterpretatie van deze tijdloze noir-thriller."
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

const url = "src/content/nieuws/de-hergeboorte-van-een-film-noir-klassieker-scott-derricksons-nieuwe-visie-op-the-night-of-the-hunter.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-hergeboorte-van-een-film-noir-klassieker-scott-derricksons-nieuwe-visie-op-the-night-of-the-hunter.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-hergeboorte-van-een-film-noir-klassieker-scott-derricksons-nieuwe-visie-op-the-night-of-the-hunter.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
