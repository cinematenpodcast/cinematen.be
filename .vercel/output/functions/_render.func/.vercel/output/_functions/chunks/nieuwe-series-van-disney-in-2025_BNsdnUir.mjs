import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe series van Disney+ in 2025",
  "date": "2024-11-12T13:56:25.118Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1731414572.jpg",
  "trailer": "",
  "slug": "nieuwe-series-van-disney-in-2025",
  "tags": ["tv"]
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
      children: "Disney+ heeft ons een spannende blik gegeven op de nieuwe series die in 2025\nzullen uitkomen. Twee van de meest verwachte shows zijn “Andor” seizoen 2 en\n“Alien: Earth”. Deze trailers laten ons zien wat we kunnen verwachten en zorgen\nvoor veel opwinding onder de fans."
    }), "\n", createVNode(_components.p, {
      children: "“Andor” is een onderdeel van het Star Wars-universum en het tweede seizoen\nverschijnt op 22 april 2025. In de teaser zien we Cassian Andor, die moet kiezen\nhoe hij zich moet gedragen: als een dief, een soldaat of een leider. We zien hem\nin gevaarlijke situaties en het lijkt erop dat de strijd tegen het Empire steeds\nserieuzer wordt. Ook zien we een paar bekende gezichten terug, zoals K2SO en\nOrson Krennic, die terugkomt uit de film “Rogue One”. De verhalen in dit seizoen\nzullen leiden naar de gebeurtenissen van die film."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast hebben we “Alien: Earth”, de nieuwe serie die zich afspeelt in het\nAlien-universum. Deze serie zal laten zien hoe een ruimteschip neerstort op\nAarde. Wat nog interessanter is, is dat het schip monsters heeft verzameld van\neen verre maan. Dit kan betekenen dat we niet alleen Xenomorfen, maar misschien\nook andere angstaanjagende wezens zullen zien. Het schip is verbonden met de\nWeyland-Yutani Corporatie, die in de Alien franchise bekend staat als de\nslechtste werkgever in de ruimte."
    }), "\n", createVNode(_components.p, {
      children: "Beide trailers zijn te zien in een nieuwe promovideo. De trailers geven ons niet\nveel details, maar ze zijn genoeg om de nieuwsgierigheid van fans te wekken.\nNaast “Andor” en “Alien: Earth” bevat de promo ook beelden van andere shows die\nin 2025 op Disney+ zullen verschijnen, zoals “Daredevil: Born Again”, “Percy\nJackson en de Olympians” en “Chad Powers”."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat Disney+ veel in petto heeft voor zijn kijkers."
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

const url = "src/content/nieuws/nieuwe-series-van-disney-in-2025.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-series-van-disney-in-2025.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-series-van-disney-in-2025.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
