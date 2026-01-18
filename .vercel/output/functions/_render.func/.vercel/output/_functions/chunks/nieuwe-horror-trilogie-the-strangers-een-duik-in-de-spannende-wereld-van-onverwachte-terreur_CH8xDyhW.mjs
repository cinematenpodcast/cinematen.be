import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe horror trilogie The Strangers komt er aan",
  "date": "2024-03-02T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/never-talk-to-strangers-1709229026.jpg",
  "trailer": "3pZUQmZdOi4",
  "slug": "nieuwe-horror-trilogie-the-strangers-komt-er aan",
  "draft": false,
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-frisse-start-voor-the-strangers",
    "text": "Een Frisse Start voor The Strangers"
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
      children: "Een enge trilogie is op komst voor horrorliefhebbers over de hele wereld, met “The Strangers: Chapter 1” als het eerste hoofdstuk dat op 17 mei wordt uitgebracht. Regisseur Renny Harlin, bekend van films als “Die Hard 2” en “Cliffhanger,” brengt deze nieuwe reeks films tot leven die voortkomen uit de klassieker uit 2008, “The Strangers.”"
    }), "\n", createVNode(_components.h2, {
      id: "een-frisse-start-voor-the-strangers",
      children: "Een Frisse Start voor The Strangers"
    }), "\n", createVNode(_components.p, {
      children: "In dit nieuwe avontuur draait alles om Madelaine Petsch, die de hoofdrol speelt als een vrouw die samen met haar verloofde naar het Pacific Northwest verhuist om een nieuw leven te beginnen. Hun plannen worden echter bruut verstoord wanneer ze verblijven in een AirBnB in Oregon en geconfronteerd worden met de terreur van drie gemaskerde vreemdelingen."
    }), "\n", createVNode(_components.p, {
      children: "De cast bestaat naast Petsch uit enkele opkomende sterren zoals Froy Gutierrez, Rachel Shenton, Gabriel Basso, en Ema Horvath. Het belooft een huiveringwekkende ervaring te worden waarbij de kijker vanaf het vallen van de avond tot het ochtendgloren wordt meegezogen in een angstaanjagende nacht vol mysterie en terreur."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Renny Harlin en producent Courtney Solomon hebben samengewerkt om niet alleen “Chapter 1” tot leven te brengen, maar ook om nog twee vervolgfilms uit te brengen later in het jaar. De trilogie is gefilmd in Slowakije, waar alle drie de films tegelijkertijd zijn opgenomen onder toezicht van een getalenteerd productieteam."
    }), "\n", createVNode(_components.p, {
      children: "Met een mix van bekende gezichten en opkomende talenten in de cast, belooft “The Strangers” een verfrissende kijk te bieden op het oorspronkelijke concept van willekeurige terreur die toeslaat zonder duidelijke reden. Dit nieuwe hoofdstuk lijkt de oorspronkelijke formule te respecteren, terwijl het tegelijkertijd nieuwe en onverwachte elementen toevoegt om het publiek op het puntje van hun stoel te houden."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, de aankomende release van “The Strangers: Chapter 1” belooft een spannende ervaring te worden voor liefhebbers van het horrorgenre, met de hoop op een vervolg dat evenveel, zo niet meer, rillingen zal bezorgen aan het publiek."
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

const url = "src/content/nieuws/nieuwe-horror-trilogie-the-strangers-een-duik-in-de-spannende-wereld-van-onverwachte-terreur.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-horror-trilogie-the-strangers-een-duik-in-de-spannende-wereld-van-onverwachte-terreur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-horror-trilogie-the-strangers-een-duik-in-de-spannende-wereld-van-onverwachte-terreur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
