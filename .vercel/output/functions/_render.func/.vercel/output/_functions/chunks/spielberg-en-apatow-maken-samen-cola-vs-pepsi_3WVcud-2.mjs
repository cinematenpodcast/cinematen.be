import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Spielberg en Apatow maken samen Cola vs Pepsi",
  "date": "2024-09-12T15:23:38.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1726085244.jpg",
  "trailer": "",
  "slug": "spielberg-en-apatow-maken-samen-cola-vs-pepsi",
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
      children: "In een onverwachte zet hebben regisseur Judd Apatow en filmmaker Steven Spielberg de handen ineengeslagen voor een nieuw filmproject genaamd “Cola Wars.” Het verhaal, verworven door Sony Pictures voor $1 miljoen, belicht de epische concurrentie tussen Pepsi en Coca-Cola in de jaren 80. Dit historische gevecht om marktdominantie bracht legendarische momenten met zich mee, zoals Michael Jackson’s haar dat vlam vatte tijdens het filmen van een Pepsi-commercial en de beruchte lancering en snelle intrekking van New Coke door Coca-Cola."
    }), "\n", createVNode(_components.p, {
      children: "Het onwaarschijnlijke duo van Judd Apatow en Steven Spielberg staat centraal in deze unieke samenwerking. Apatow, bekend van films zoals “The 40-Year-Old Virgin,” zal de film regisseren, terwijl Spielberg zal optreden als producent via zijn Amblin Entertainment bedrijf. Deze combinatie van creatieve krachten belooft een interessante kijk op een van de meest iconische commerciële rivaliteiten in de geschiedenis."
    }), "\n", createVNode(_components.p, {
      children: "Het script voor deze film wordt opgesteld door Jason Shuman en Ben Queen, waarbij Shuman de voorkeur geeft aan Pepsi en Queen aan Coca-Cola."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl Coca-Cola wereldwijd de nummer één frisdrank is op basis van omzet, volgt Pepsi op de tweede plaats. Beide merken hebben een breed scala aan producten in hun portfolio, variërend van frisdranken tot sportdranken en water."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog te vroeg om details over de cast of releasedatum van de film te onthullen, aangezien het project in vroege pre-productie is. Desondanks belooft “Cola Wars” een boeiende kijk te bieden op een van de meest memorabele hoofdstukken in de geschiedenis van de frisdrankindustrie."
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

const url = "src/content/nieuws/spielberg-en-apatow-maken-samen-cola-vs-pepsi.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spielberg-en-apatow-maken-samen-cola-vs-pepsi.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spielberg-en-apatow-maken-samen-cola-vs-pepsi.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
