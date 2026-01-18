import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avatar 4 en 5 dit weten we al over de toekomst",
  "date": "2025-12-22T19:17:24.655Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1766424967.jpg",
  "trailer": "",
  "slug": "avatar-4-en-5-dit-weten-we-al-over-de-toekomst",
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
      children: "Avatar 3 ‘Fire & Ash’ draait nu in de bioscoop, maar regisseur James Cameron\nheeft al grote plannen voor meer. Hij wil in totaal vijf Avatar films maken, dus\ner komen nog twee films aan: Avatar 4 en 5. De scripts zijn al geschreven en\nCameron zegt dat het verhaal in zijn hoofd klaar staat."
    }), "\n", createVNode(_components.p, {
      children: "Of de films echt gemaakt worden, hangt af van ons. Cameron en de acteurs hopen\ndat we ‘Fire & Ash’ leuk vinden. Als we met velen gaan kijken, dan gaan ze\nwaarschijnlijk door met deel 4 en 5. Sam Worthington, die Jake Sully speelt,\nzegt dat ze niet zomaar aannemen dat de films succesvol blijven. Ze moeten eerst\nzien of we nog steeds geïnteresseerd zijn. Wij zijn niet echt de grootste Avatar fans…"
    }), "\n", createVNode(_components.p, {
      children: "Er is al een klein stukje gefilmd voor Avatar 4, dat gebeurde al in 2018 of\n2019. Ze filmden toen scènes waar de kinderen van de Sully familie ouder zijn.\nOmdat de jonge acteurs nu zelf ouder zijn geworden, was het nodig om die scènes\nvroeger te maken. In Avatar 4 maken de kinderen dus een tijdssprong."
    }), "\n", createVNode(_components.p, {
      children: "De planning is dat Avatar 4 in 2029 uitkomt en Avatar 5 in 2031. Maar het echte\nfilmen moet nog beginnen en er is nog geen exacte startdatum voor de opnames. Ze\nwachten eerst op onze reacties op ‘Fire & Ash’."
    }), "\n", createVNode(_components.p, {
      children: "James Cameron zal waarschijnlijk zelf regisseren voor Avatar 4 en Avatar 5.\nEerder dacht hij te stoppen, maar nu zegt hij dat hij beide films nog wil doen.\nVoor eventuele films daarna, zoals Avatar 6 en 7, is het nog niet duidelijk wie\nde regie doet."
    }), "\n", createVNode(_components.p, {
      children: "In de toekomstige films wordt het verhaal anders. Cameron zegt dat het geen\nherhaling wordt van de oude films. Het verhaal zal groter worden en de\npersonages gaan naar nieuwe plaatsen."
    }), "\n", createVNode(_components.p, {
      children: "De jonge acteurs zijn enthousiast over de toekomst. Bailey Bass, die Tsireya\nspeelt, zegt dat haar personage opgroeit tot een tiener en volwassene, met een\neigen wil die soms brutaal kan lijken. Jack Champion, die Spider speelt, hoopt\ndat we zijn verhaal in de toekomst willen zien. Hij zegt dat Spider een\ninteressante toekomst heeft die harder en grimmiger wordt. Trinity Bliss, die\nhet jongste Sully kind Tuk speelt, zegt dat Tuk in deel 4 en 5 een echte krijger\nwordt. Tuk groeit door een tienerperiode en de actrice kan niet wachten om de\noudere Tuk te spelen."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, de toekomst van Avatar ziet er groot uit met plannen voor twee nieuwe\nfilms. Het verhaal gaat verder met een tijdssprong en de kinderen worden de\nnieuwe hoofdpersonen. Of alles doorgaat, moet nog blijken. Eerst moet ‘Fire &\nAsh’ laten zien dat we nog steeds van Pandora en de Sully familie houden."
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

const url = "src/content/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
