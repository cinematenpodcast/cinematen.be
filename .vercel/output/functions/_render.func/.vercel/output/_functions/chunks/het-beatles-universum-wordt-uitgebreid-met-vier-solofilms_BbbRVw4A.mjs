import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het Beatles-universum wordt uitgebreid met vier solofilms",
  "date": "2024-02-21T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708440621.jpg",
  "trailer": "",
  "slug": "het-beatles-universum-wordt-uitgebreid-met-vier-solofilms",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-unieke-cinematische-ervaring",
    "text": "Een Unieke Cinematische Ervaring"
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
      children: "Het Beatles-verhaal krijgt een nieuwe dimensie met aankomende solofilms over elk van de legendarische bandleden: Paul McCartney, Ringo Starr, George Harrison en John Lennon. De gerenommeerde regisseur Sam Mendes neemt een unieke benadering door in te zoomen op het perspectief van elk bandlid in plaats van een alomvattend verhaal over de hele band. Volgens een verklaring van Sony Pictures zullen de films het verhaal van The Beatles vertellen vanuit het standpunt van elk lid."
    }), "\n", createVNode(_components.p, {
      children: "Mendes, bekend van films als “American Beauty”, “Revolutionary Road” en “Skyfall”, zal als eerste volledige toegang hebben tot zowel de levensverhalen van elk lid als de muziekrechten van de band voor een scenariofilm. Hij zal alle vier de films regisseren en produceren in samenwerking met Neal Street Productions’ Pippa Harris en Julie Pastor."
    }), "\n", createVNode(_components.h2, {
      id: "een-unieke-cinematische-ervaring",
      children: "Een Unieke Cinematische Ervaring"
    }), "\n", createVNode(_components.p, {
      children: "“We streven ernaar om dit een unieke, opwindende en epische filmervaring te maken: vier films, verteld vanuit vier verschillende perspectieven die samen één verhaal vertellen over de meest gevierde band aller tijden,” deelde Harris. “Het is een enorm privilege om de zegen van The Beatles en Apple Corps te hebben voor dit project. Vanaf onze eerste ontmoeting met Tom Rothman en Elizabeth Gabler was het duidelijk dat ze onze passie en ambitie voor dit project deelden, en we kunnen ons geen meer perfecte thuis voorstellen dan Sony Pictures.”"
    }), "\n", createVNode(_components.p, {
      children: "De verwachting is dat de vier films gereed zullen zijn voor bioscooprelease in 2027. De exacte details over de premièreplanning en de volgorde waarin de films zullen uitkomen, zijn nog niet bekendgemaakt, maar een persbericht heeft de aanpak beschreven als “innovatief en baanbrekend”."
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

const url = "src/content/nieuws/het-beatles-universum-wordt-uitgebreid-met-vier-solofilms.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-beatles-universum-wordt-uitgebreid-met-vier-solofilms.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-beatles-universum-wordt-uitgebreid-met-vier-solofilms.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
