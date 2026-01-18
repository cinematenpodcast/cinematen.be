import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avatar Fire and Ash blijft de kassa's doen rinkelen",
  "date": "2025-12-29T19:09:30.052Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767032282.jpg",
  "trailer": "",
  "slug": "avatar-fire-and-ash-blijft-de-kassas-doen-rinkelen",
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
      children: "Avatar: Fire and Ash, de derde film in de reeks van James Cameron, is een\nfinancieel kaskraker. In zijn tweede weekend in Amerika haalde de film nog\nsteeds 64 miljoen dollar binnen, een cijfer dat bijna even hoog is als de\nopeningsopbrengst. Over de kerstvakantie verzamelde de film in Amerika alleen al\n88 miljoen dollar. Wereldwijd staat de teller nu op een indrukwekkende 760,3\nmiljoen dollar."
    }), "\n", createVNode(_components.p, {
      children: "De totale Avatar-franchise heeft inmiddels meer dan 6 miljard dollar opgebracht,\nwat het de best verdienende trilogie aller tijden maakt. Series als Star Wars,\nJurassic World en Spider-Man moeten dit laten. De eerste film uit 2009 blijft de\nbest verdienende film ooit met bijna 3 miljard dollar, en het tweede deel, The\nWay of Water, haalde ook ruim 2 miljard dollar binnen."
    }), "\n", createVNode(_components.p, {
      children: "Wat dit weekend opvallend maakte, was dat meerdere nieuwe films de uitdaging met\nAvatar aangingen. Het resultaat was het beste decemberweekend voor de\nbioscoopsector sinds 2021. De animatiefilm David van Angel Studios startte sterk\nmet 22 miljoen dollar, de beste opening ooit voor die studio. De volwassenenfilm\nThe Housemaid met Sydney Sweeney debuteerde met 19 miljoen dollar."
    }), "\n", createVNode(_components.p, {
      children: "Ook The Spongebob Movie: Search for Squarepants deed het goed met een opening\nvan 16 miljoen dollar, een verbetering tegenover de vorige film die tijdens de\npandemie uitkwam. Films die al langer draaien, houden ook stand. Zootopia 2\nverdiende nog 15,1 miljoen dollar en heeft in Amerika al 283,4 miljoen dollar\nbijeengebracht. Five Nights at Freddy’s 2 passeerde de 100 miljoen dollar in\nAmerika, en Wicked: For Good staat op 320,5 miljoen dollar."
    }), "\n", createVNode(_components.p, {
      children: "Een opmerkelijke prestatie kwam van Marty Supreme, die in slechts zes bioscopen\nbijna 875 duizend dollar binnenhaalde en daarmee een record start zette."
    }), "\n", createVNode(_components.p, {
      children: "Terug naar Avatar. Alleen al op eerste kerstdag bracht Fire and Ash 24 miljoen\ndollar op in Amerika. De film heeft nu in Amerika meer dan 150 miljoen dollar en\nwereldwijd meer dan 540 miljoen dollar opgehaald. De grens van 1 miljard dollar\nwordt naar verwachting zeer snel, mogelijk al op nieuwjaarsdag, bereikt."
    }), "\n", createVNode(_components.p, {
      children: "Met een budget van meer dan 400 miljoen dollar verdient de film zijn kosten dus\nsnel terug. James Cameron plant nog twee films, waarbij deel vier voor 2029\ngepland staat. Als deze trend zich doorzet, kan de volledige reeks van vijf\nfilms uiteindelijk 9 à 10 miljard dollar waard worden. Cameron staat op het punt\nom de eerste regisseur ooit te worden met vier opeenvolgende films die elk de\nmagische grens van 1 miljard dollar doorbreken."
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

const url = "src/content/nieuws/avatar-fire-and-ash-blijft-de-kassas-doen-rinkelen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-blijft-de-kassas-doen-rinkelen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-blijft-de-kassas-doen-rinkelen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
