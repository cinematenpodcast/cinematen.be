import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jimmy Olsen krijgt zijn eigen misdaadserie op HBO Max",
  "date": "2025-11-10T22:43:20.231Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1762813407.jpg",
  "trailer": "",
  "slug": "jimmy-olsen-krijgt-zijn-eigen-misdaadserie-op-hbo-max",
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
      children: "Er komt een nieuwe televisieserie aan over Jimmy Olsen, de fotograaf van de\nDaily Planet die we kennen uit de Superman-films. “DC Crime” heet de reeks en\ndie verschijnt op HBO Max. Skyler Gisondo neemt opnieuw de rol van Jimmy Olsen\nvoor zijn rekening, net zoals hij deed in de nieuwe Superman-film van James\nGunn."
    }), "\n", createVNode(_components.p, {
      children: "De serie wordt gemaakt door Dan Perrault en Tony Yacenda, het duo achter de\nNetflix-serie “American Vandal”. Die mockumentary-serie over grappige misdaden\nop een school won een Peabody Award. Daarna maakten ze nog “Players” over\nesport."
    }), "\n", createVNode(_components.p, {
      children: "In “DC Crime” gaat Jimmy Olsen onderzoek doen naar misdaden die verband houden\nmet superschurken. Het eerste seizoen draait rond Gorilla Grodd, een slechte aap\nmet superkrachten die vaak tegen The Flash vecht. Dit personage bestaat al sinds\n1959 in de stripboeken."
    }), "\n", createVNode(_components.p, {
      children: "James Gunn en Peter Safran, de bazen van DC Studios, zijn betrokken bij de\nproductie om ervoor te zorgen dat alles past binnen het DC-universum. Galen\nVaisman van DC Studios houdt toezicht en Warner Bros. Television maakt de serie."
    }), "\n", createVNode(_components.p, {
      children: "Het idee voor de serie ontstond omdat wij de rol van Skyler Gisondo als Jimmy\nOlsen zo goed vonden in de Superman-film. Zijn personage was populair, dus\nbesloten ze er een aparte serie over te maken."
    }), "\n", createVNode(_components.p, {
      children: "Jimmy Olsen werkt in de serie samen met andere verslaggevers van de Daily\nPlanet. Clark Kent en Lois Lane zullen niet te zien zijn. De serie krijgt de\nvorm van een crime-documentaire, maar dan over superhelden en schurken."
    }), "\n", createVNode(_components.p, {
      children: "Gorilla Grodd is een intelligente aap die Gorilla City in Afrika regeert. Hij\nkreeg psychische krachten na een ontmoeting met een alienschip. Het personage\nwas eerder al te zien in de Arrow-verse series."
    }), "\n", createVNode(_components.p, {
      children: "Perrault en Yacenda schrijven, produceren en regisseren de serie zelf, wat een\nidee geeft van de stijl. Omdat zij bekend staan om hun grappige mockumentaries,\nverwachten wij dat “DC Crime” eenzelfde soort humor zal hebben."
    }), "\n", createVNode(_components.p, {
      children: "We weten nog niet precies wanneer de serie te zien zal zijn op HBO Max, hoeveel\nafleveringen ze krijgt of wie er nog meer in meespeelt. De productie bevindt\nzich nog in een vroege ontwikkelingsfase."
    }), "\n", createVNode(_components.p, {
      children: "Dit is één van de nieuwe series die DC Studios maakt naast hun films. Jimmy\nOlsen is een bekend personage uit de Superman-strips sinds 1938, en dit is de\neerste keer dat hij een eigen televisieserie krijgt."
    }), "\n", createVNode(_components.p, {
      children: "De serie speelt zich af in dezelfde wereld als de nieuwe Superman-film, maar\nvertelt een apart verhaal. Zo kunnen we meer te weten komen over andere\npersonages zonder dat Superman zelf altijd aanwezig moet zijn."
    }), "\n", createVNode(_components.p, {
      children: "Wij vinden dit een veelbelovend project. Het combineert superheldenverhalen met\nde populaire crime-documentairestijl, en met ervaren makers en een goede acteur\nin de hoofdrol heeft de serie alle potentie om te slagen."
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

const url = "src/content/nieuws/jimmy-olsen-krijgt-zijn-eigen-misdaadserie-op-hbo-max.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jimmy-olsen-krijgt-zijn-eigen-misdaadserie-op-hbo-max.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jimmy-olsen-krijgt-zijn-eigen-misdaadserie-op-hbo-max.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
