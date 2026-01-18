import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Productie van het vijfde en laatste seizoen van Stranger Things gestart",
  "date": "2024-01-09T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/everyone-is-back-1704730047.jpg",
  "trailer": "",
  "slug": "productie-van-het-vijfde-en-laatste-seizoen-van-stranger-things-gestart",
  "draft": false,
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
      children: "Netflix heeft officieel aangekondigd dat de productie van het vijfde en laatste seizoen van de geliefde sci-fi serie van start is gegaan."
    }), "\n", createVNode(_components.p, {
      children: "Naast de langverwachte aankondiging deelde de streamingdienst ook een foto van de cast van de jaren 80-serie, waaronder Millie Bobby Brown, David Harbour en Winona Ryder. Ze zijn opnieuw samengekomen in een kamer verlicht door een gloeiend neon “5” teken."
    }), "\n", createVNode(_components.p, {
      children: "De castfoto bevat ook sterren zoals Caleb McLaughlin, Gaten Matarazzo, Noah Schnapp, Joe Keery, Maya Hawke, Natalia Dyer, Charlie Heaton, Sadie Sink, Priah Ferguson, Cara Buono, Amybeth McNulty, Brett Gelman en Finn Wolfhard, die een script lijkt vast te houden."
    }), "\n", createVNode(_components.p, {
      children: "De foto bevatte geen nieuwe gezichten, wat in lijn is met het plan van de Duffer broers om geen nieuwe personages toe te voegen aan het Stranger Things universum in het laatste seizoen. Hoewel vorig jaar juni werd aangekondigd dat Terminator-ster Linda Hamilton zich bij de cast zou voegen voor het laatste deel van de serie."
    }), "\n", createVNode(_components.p, {
      children: "De showrunners bevestigden in augustus 2022, kort nadat seizoen 4 werd uitgebracht, aan Indiewire dat ze bijzonder aandacht besteden aan het afronden van de verhaallijnen van de bestaande personages. “We doen ons best om geen nieuwe personages toe te voegen voor seizoen 5”, zei Matt Duffer destijds, eraan toevoegend dat ze “proberen dat niet te doen zodat we ons kunnen concentreren op de originele personages, denk ik.”"
    }), "\n", createVNode(_components.p, {
      children: "Zijn broer Ross voegde toe: “We hebben hier een geweldige cast van personages en acteurs, en elke keer dat we tijd besteden aan een nieuw personage, nemen we tijd weg van een van de andere acteurs.”"
    }), "\n", createVNode(_components.p, {
      children: "De Duffer broers hebben ook al wat hints gegeven over hun plannen voor het einde van de serie in eerdere interviews en het klinkt emotioneel gezien het einde van het verhaal. In een gesprek met TheWrap in mei 2022 onthulde Ross dat sommige Netflix-executives zelfs emotioneel werden toen ze de plannen voor het laatste seizoen hoorden. “We hebben een outline voor seizoen 5 en we hebben het gepitcht aan Netflix en ze reageerden er erg positief op”, zei hij destijds. “Ik bedoel, het was moeilijk. Het is het einde van het verhaal. Ik zag executives huilen die ik nog nooit eerder had zien huilen en het was wild.”"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel seizoen 5 het laatste seizoen zal zijn van Stranger Things, heeft Netflix nog andere projecten in de werken binnen het Stranger Things universum, waaronder een toneelstuk genaamd “Stranger Things: The First Shadow”, dat zijn première zal beleven in West End in Londen, en een nog titelloze geanimeerde spin-off serie."
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

const url = "src/content/nieuws/productie-van-het-vijfde-en-laatste-seizoen-van-stranger-things-gestart.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/productie-van-het-vijfde-en-laatste-seizoen-van-stranger-things-gestart.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/productie-van-het-vijfde-en-laatste-seizoen-van-stranger-things-gestart.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
