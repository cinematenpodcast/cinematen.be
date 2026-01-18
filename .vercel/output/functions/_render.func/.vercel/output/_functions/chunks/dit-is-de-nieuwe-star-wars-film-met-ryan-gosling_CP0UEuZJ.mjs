import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dit is de nieuwe Star Wars film met Ryan Gosling",
  "date": "2025-12-27T20:07:36.095Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/2d94e2cb-fd76-41eb-83c9-23aed1cde394",
  "trailer": "",
  "slug": "dit-is-de-nieuwe-star-wars-film-met-ryan-gosling"
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
      children: "Er komt een gloednieuwe Star Wars-film aan genaamd Star Wars: Starfighter. Wij\nkunnen deze in de bioscoop gaan bekijken op 28 mei 2027. Dit wordt de eerste\nnieuwe bioscoopfilm sinds The Rise of Skywalker uit 2019."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geregisseerd door Shawn Levy, die we kennen van films zoals\nDeadpool & Wolverine en The Adam Project. Ryan Gosling speelt de hoofdrol en is\nvol lof over het script. Hij zegt dat het een geweldig verhaal met nieuwe\npersonages is, vol avontuur en hart."
    }), "\n", createVNode(_components.p, {
      children: "Shawn Levy heeft op Instagram laten weten dat de opnames zijn afgerond. Hij\ndeelde een foto waarop hij zelf rent, om aan te geven dat de film nu de fase van\nnabewerking ingaat. De opnames begonnen al in september 2025, toen Levy de\neerste foto deelde van Ryan Gosling en zijn tegenspeler Flynn Gray in kostuum,\nergens aan de Middellandse Zee."
    }), "\n", createVNode(_components.p, {
      children: "Starfighter is een losstaand avontuur dat zich afspeelt ongeveer vijf jaar na\nThe Rise of Skywalker. We gaan nieuwe personages ontmoeten in een tijdperk dat\nwe nog niet in de films hebben gezien. Levy houdt de plotdetails angstvallig\ngeheim en heeft gezegd dat hij heeft geleerd om zijn mond dicht te houden, mede\ndoor zijn werk aan Stranger Things."
    }), "\n", createVNode(_components.p, {
      children: "Naast Ryan Gosling en Flynn Gray speelt een grote cast mee. Amy Adams, Aaron\nPierre, Simon Bird, Jamael Westman en Daniel Ings zijn van de partij. De\nschurken worden vertolkt door Mia Goth en Matt Smith, die we kennen als de elfde\nDoctor Who."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal is geschreven door Jonathan Tropper, die ook het script voor The\nAdam Project schreef. De film wordt geproduceerd door Shawn Levy en Kathleen\nKennedy, de baas van Lucasfilm. Levy noemde de kans om een nieuw Star\nWars-avontuur te bedenken een droom die uitkomt."
    }), "\n", createVNode(_components.p, {
      children: "Voordat Starfighter uitkomt, kunnen we eerst nog The Mandalorian & Grogu\nverwachten op 22 mei 2026. Die film is een spin-off van de gelijknamige serie."
    }), "\n", createVNode(_components.p, {
      children: "Star Wars: Starfighter werd officieel aangekondigd tijdens het Star Wars\nCelebration evenement in 2025. Nu het filmen is afgerond, wordt de film in de\nkomende tijd helemaal afgemaakt. Wij moeten nog even geduld hebben tot mei 2027\nom dit nieuwe ruimteavontuur te kunnen zien."
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

const url = "src/content/nieuws/dit-is-de-nieuwe-star-wars-film-met-ryan-gosling.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-is-de-nieuwe-star-wars-film-met-ryan-gosling.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-is-de-nieuwe-star-wars-film-met-ryan-gosling.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
