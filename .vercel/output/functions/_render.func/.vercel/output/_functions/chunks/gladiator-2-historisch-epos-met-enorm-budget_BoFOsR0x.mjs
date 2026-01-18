import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gladiator 2: Historisch Epos met Enorm Budget",
  "date": "2024-02-24T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708713618.jpg",
  "trailer": "",
  "slug": "gladiator-2-historisch-epos-met-enorm-budget",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "bijna-een-verdubbeling-van-het-oorspronkelijke-budget",
    "text": "Bijna een verdubbeling van het oorspronkelijke budget"
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
      children: "Ridley Scott’s langverwachte vervolg op “Gladiator”, genaamd “Gladiator 2”, staat op het punt om een van de duurste films te worden van deze tijd. Met een budget dat bijna even hoog is als dat van de grootste Marvel-films, belooft deze epische historische drama zowel fans als critici te verbazen."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn tal van redenen om enthousiast te zijn over Gladiator 2. Het origineel, met Russell Crowe in de hoofdrol, was altijd een van Ridley Scott’s meest memorabele films. Voeg daar een sterrencast aan toe en een budget dat nu Marvel-hoogten heeft bereikt, en je weet dat het resultaat werkelijk magnifiek zal zijn."
    }), "\n", createVNode(_components.h2, {
      id: "bijna-een-verdubbeling-van-het-oorspronkelijke-budget",
      children: "Bijna een verdubbeling van het oorspronkelijke budget"
    }), "\n", createVNode(_components.p, {
      children: "Gladiator 2 speelt zich 15 jaar na het oorspronkelijke verhaal af en richt zich op Lucius, die op zoek is naar de waarheid over zijn biologische vader. Uiteraard zullen er veel gladiatorengevechten en bloeddorstige heersers te zien zijn."
    }), "\n", createVNode(_components.p, {
      children: "Historische drama’s vergen doorgaans veel inspanning, vooral als ze zo’n epische omvang hebben als die van Scott. Desondanks is het nieuwe gemelde budget nog steeds behoorlijk schrikbarend. Oorspronkelijk begroot op $165 miljoen, zou Gladiator 2 nu naar verluidt $310 miljoen hebben gekost, waarmee het in de buurt komt van het budget van Avengers: Infinity War."
    }), "\n", createVNode(_components.p, {
      children: "Als dat waar is, zou het zich kunnen plaatsen tussen de duurste films ooit gemaakt. “Het is uit de hand gelopen,” vertelde een bron aan The Hollywood Reporter. “Het wordt niet goed beheerd.”"
    }), "\n", createVNode(_components.p, {
      children: "Ter vergelijking, Avengers: Infinity War kostte $325 miljoen bij de release - de negende duurste film aller tijden. Als het opgeblazen budget inderdaad correct was, zou Gladiator 2 ook duurder zijn dan sommige van de duurste films van 2023, waaronder Indiana Jones: The Dial of Destiny en Mission: Impossible - Dead Reckoning Part One."
    }), "\n", createVNode(_components.p, {
      children: "De budgetuitbreiding kwam door een paar redenen tot stand. Met name de stakingen in de industrie in 2023 kostten ongeveer $600.000 per week. Dit was niet de enige hobbel die Gladiator 2 moest nemen - de productie zat ook in de problemen nadat vier crewleden in het ziekenhuis belandden en PETA klokkenluideraccounts ontving over dierenmishandeling op de set."
    }), "\n", createVNode(_components.p, {
      children: "Uiteraard wist Marvel’s Infinity War uiteindelijk meer dan $2 miljard aan de wereldwijde box office te verdienen en blijft het een van de meest succesvolle films ooit gemaakt. Als Gladiator 2 zelfs een fractie van dat succes kan evenaren (en met zijn sterrencast misschien wel), dan zou het verrassend hoge budget misschien de moeite waard zijn geweest."
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

const url = "src/content/nieuws/gladiator-2-historisch-epos-met-enorm-budget.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gladiator-2-historisch-epos-met-enorm-budget.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gladiator-2-historisch-epos-met-enorm-budget.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
