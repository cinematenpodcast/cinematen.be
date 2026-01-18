import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jackass 5 is aangekondigd en dit zijn de andere films die eraan komen",
  "date": "2026-01-08T18:28:11.765Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767891574.jpg",
  "trailer": "",
  "slug": "jackass-5-is-aangekondigd-en-dit-zijn-de-andere-films-die-eraan-komen",
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
      children: "Johnny Knoxville heeft zelf het nieuws bekendgemaakt: er komt een nieuwe\n‘Jackass’-film. ‘Jackass 5’ komt op 26 juni 2026 in de bioscoop. Eerder zei\nKnoxville nog dat ‘Jackass Forever’ zijn laatste film zou zijn, maar dat blijkt\ndus niet het geval."
    }), "\n", createVNode(_components.p, {
      children: "In de vorige film kwamen er al nieuwe, jongere gezichten bij zoals Poopies, Zach\nHolmes en Rachel Wolfson. Voor deze vijfde film zullen zij de zware stunts\novernemen. De oorspronkelijke crew, waaronder Knoxville zelf, doet nog wel mee,\nmaar met minder gevaarlijke acties. Knoxville kreeg tijdens de opnames van de\nvorige film een hersenschudding en zijn dokter heeft zware stunts verboden."
    }), "\n", createVNode(_components.p, {
      children: "Voor liefhebbers van horror is er ook nieuws. De trilogie ‘28 Years Later’ wordt\nverdergezet. Het eerste deel is van regisseur Danny Boyle, het tweede deel ‘The\nBone Temple’ komt in januari 2026 uit en wordt geregisseerd door Nia DaCosta.\nHet derde deel moet nog gemaakt worden. Alle drie de films worden geschreven\ndoor Alex Garland."
    }), "\n", createVNode(_components.p, {
      children: "Ook voor ‘Star Wars’ is er een nieuwe film in de maak. ‘Starfighter’,\ngeregisseerd door Shawn Levy, speelt zich af vijf jaar na ‘The Rise of\nSkywalker’ en gaat over een vader en een zoon. Tom Cruise kwam zelfs even op de\nset een stukje filmen."
    }), "\n", createVNode(_components.p, {
      children: "Verder draait ‘Sirāt’ vanaf 6 februari eerst in New York en Los Angeles, waarna\nde film uitbreidt naar meer steden. De film, over een vader en zoon die hun\nvermiste dochter en zus zoeken op een festival in de Marokkaanse woestijn, heeft\nal prijzen gewonnen."
    }), "\n", createVNode(_components.p, {
      children: "Er wordt ook gewerkt aan een live-action remake van ‘Tangled’ met Teagan Croft\nen Milo Manheim, maar een releasedatum is er nog niet."
    }), "\n", createVNode(_components.p, {
      children: "In het horrorgenre komt ‘Undertone’ op 13 maart 2026 uit. De film volgt een\npodcastmaker die iets engs hoort en vervolgens wordt lastiggevallen. Opvallend\nis dat er maar één actrice in beeld is; alle andere personages zijn alleen\nstemmen."
    }), "\n", createVNode(_components.p, {
      children: "Een andere horrorfilm, ‘Primate’, ging op 9 januari 2026 in premiere. Deze film\nvan regisseur Johannes Roberts gaat over een chimpansee met hondsdolheid die\nmensen aanvalt."
    }), "\n", createVNode(_components.p, {
      children: "Ten slotte is er het project ‘Behemoth!’ van Tony Gilroy. Eerst waren Oscar\nIsaac en David Harbour aangekondigd, maar Harbour doet niet meer mee. In zijn\nplaats komen Pedro Pascal en Olivia Wilde. Wie de rol van Harbour overneemt, is\nnog niet bekend."
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

const url = "src/content/nieuws/jackass-5-is-aangekondigd-en-dit-zijn-de-andere-films-die-eraan-komen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jackass-5-is-aangekondigd-en-dit-zijn-de-andere-films-die-eraan-komen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jackass-5-is-aangekondigd-en-dit-zijn-de-andere-films-die-eraan-komen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
