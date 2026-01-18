import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brigitte Bardot, een legende van de Franse cinema, is overleden",
  "date": "2025-12-28T15:32:38.570Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1766934816.jpg",
  "trailer": "",
  "slug": "brigitte-bardot-een-legende-van-de-franse-cinema-is-overleden",
  "tags": ["TV"]
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
      children: "Triest nieuws: de Franse filmster Brigitte Bardot is overleden. Ze is 91 jaar\ngeworden. Haar stichting voor dieren, de Brigitte Bardot Foundation, heeft het\nnieuws bekendgemaakt."
    }), "\n", createVNode(_components.p, {
      children: "Ze was een enorm beroemde actrice en zangeres, bij ons bekend als ‘BB’. Ze werd\neen wereldster in de jaren 50 en 60. Op 38-jarige leeftijd stopte ze met acteren\nom zich volledig in te zetten voor dieren."
    }), "\n", createVNode(_components.p, {
      children: "President Emmanuel Macron noemde haar een “legende van de eeuw” die een leven\nvan vrijheid liet zien. Ook Marine Le Pen, leider van een Franse politieke\npartij die Bardot vaak steunde, vond haar een moedige en bijzondere vrouw."
    }), "\n", createVNode(_components.p, {
      children: "Bardot werd in 1934 geboren in Parijs in een rijke familie. Op haar 15e stond ze\nop de voorkant van Elle, wat haar kleine filmrolletjes opleverde. Haar grote\ndoorbraak kwam in 1956 met de film ‘And God Created Woman’, geregisseerd door\nhaar toenmalige man Roger Vadim. Haar rol als vrijgevochten tiener maakte haar\ntot een wereldwijd sekssymbool. Haar stijl, met dat blonde haar en die\nafhangende schouderjurk (de ‘Bardot-halslijn’), werd iconisch. Ze speelde in\nbijna 50 films, werkte met regisseurs als Jean-Luc Godard in ‘Contempt’ en\nspeelde in Hollywoodwesterns zoals ‘Shalako’ met Sean Connery."
    }), "\n", createVNode(_components.p, {
      children: "Naast acteren zong ze ook. Ze werkte veel samen met Serge Gainsbourg, die voor\nhaar het lied ‘Je t’aime… moi non plus’ schreef. Bardot was bang voor schandaal\nen hield de release tegen. Later zong Gainsbourg het met Jane Birkin en werd het\neen hit. Filosofen zoals Simone de Beauvoir zagen haar als symbool van vrijheid.\nZelfs The Beatles waren fan: John Lennon en Paul McCartney wilden dat hun\nvriendinnen hun haar Bardot-blond verfden. In 1969 werd haar gezicht het gezicht\nvan ‘Marianne’, het symbool van de Franse republiek."
    }), "\n", createVNode(_components.p, {
      children: "Op 39-jarige leeftijd stopte ze voorgoed met films. Ze wilde zich volledig\nwijden aan dierenbescherming. Ze werd vegetariër, protesteerde tegen de\nzeehondenjacht en richtte in 1986 de Brigitte Bardot Foundation op. Ze schreeu\nbrieven aan wereldleiders en zei ooit: “Ik gaf mijn jeugd en schoonheid aan\nmannen, ik geef mijn wijsheid en ervaring aan dieren.”"
    }), "\n", createVNode(_components.p, {
      children: "Ze was vier keer getrouwd: eerst met Roger Vadim, toen met Jacques Charrier (met\nwie ze zoon Nicolas kreeg), daarna met Gunter Sachs en tenslotte met Bernard\nd’Ormale vanaf 1992. Later in haar leven kwam ze vaak in het nieuws om haar\ncontroversiële uitspraken over moslims en homo’s, waarvoor ze meermaals werd\nveroordeeld."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de controverses blijft ze een van de grootste filmsterren die Frankrijk\nooit heeft voortgebracht. Wij zullen haar herinneren als het blonde icoon uit\nSaint-Tropez dat de wereld veroverde, en als de vrouw die al haar liefde aan\ndieren gaf."
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

const url = "src/content/nieuws/brigitte-bardot-een-legende-van-de-franse-cinema-is-overleden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brigitte-bardot-een-legende-van-de-franse-cinema-is-overleden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brigitte-bardot-een-legende-van-de-franse-cinema-is-overleden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
