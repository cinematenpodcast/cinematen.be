import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dwayne \"The Rock\" Johnson gaf geen f*ck op de set van Red One",
  "date": "2024-05-01T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714491619.jpg",
  "trailer": "",
  "slug": "dwayne-the-rock-johnsons-gedrag-op-de-set-van-red-one",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "vertragingen-en-budgetoverschrijdingen",
    "text": "Vertragingen en budgetoverschrijdingen"
  }, {
    "depth": 2,
    "slug": "denail-is-een-rivier-in-egypte",
    "text": "‘Denail’ is een rivier in Egypte"
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
      children: "Dwayne “The Rock” Johnson is tegenwoordig een naam die synoniem staat voor actie en blockbusters in de entertainmentindustrie. Zijn recente rol in de aankomende kerst-actiefilm “Red One” heeft echter geleid tot problemen en onenigheid op de set."
    }), "\n", createVNode(_components.h2, {
      id: "vertragingen-en-budgetoverschrijdingen",
      children: "Vertragingen en budgetoverschrijdingen"
    }), "\n", createVNode(_components.p, {
      children: "Insiders hebben onthuld dat Johnson herhaaldelijk te laat op de set verscheen, vaak tot wel acht uur na het geplande tijdstip. Deze vertragingen dwongen de crew om creatieve manieren te vinden om zijn afwezigheid te overbruggen. Naast de vertraagde aankomsten kwam een vreemde tegenstrijdige gewoonte aan het licht: Johnson zou naar verluidt in waterflessen plassen om tijd te besparen, wat niet goed viel bij het team."
    }), "\n", createVNode(_components.p, {
      children: "Het effect van deze gedragingen was merkbaar op de productie. De oorspronkelijke begroting van de film schoot met minstens $50 miljoen omhoog, gedeeltelijk als gevolg van Johnson’s nalatigheid en vertragingen. Hoewel sommige bronnen beweerden dat dit soort budgetvariaties binnen een normaal bereik vallen, was het duidelijk dat de vertragingen en ongebruikelijke handelingen van Johnson een impact hadden op het financiële aspect van de filmproductie."
    }), "\n", createVNode(_components.h2, {
      id: "denail-is-een-rivier-in-egypte",
      children: "‘Denail’ is een rivier in Egypte"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel bepaalde insiders zich kritisch uitlieten over Johnson’s gedrag, benadrukten anderen de waarde van zijn bijdrage aan het project. Een woordvoerder van Amazon MGM ontkende de beschuldigingen en prees Johnson en Seven Bucks Productions als essentiële partners bij de totstandkoming van “Red One”. Desondanks blijft de vraag over de werkelijke impact van Johnson’s acties op de productie en het uiteindelijke resultaat van de film."
    }), "\n", createVNode(_components.p, {
      children: "“Red One” belooft een sterrencast van formaat te hebben, met naast Johnson en Evans ook namen als JK Simmons, Lucy Liu en Nick Kroll. De film wordt verwacht in november 2024 in de bioscoop te verschijnen, met een latere release op Prime Video."
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

const url = "src/content/nieuws/dwayne-the-rock-johnson-gaf-geen-fck-op-de-set-van-red-one.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-the-rock-johnson-gaf-geen-fck-op-de-set-van-red-one.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-the-rock-johnson-gaf-geen-fck-op-de-set-van-red-one.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
