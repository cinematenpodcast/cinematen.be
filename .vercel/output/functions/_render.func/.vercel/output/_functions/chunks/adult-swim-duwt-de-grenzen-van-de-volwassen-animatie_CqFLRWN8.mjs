import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adult Swim duwt de grenzen van de volwassen animatie",
  "date": "2025-12-18T17:28:09.527Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1766059895.jpg",
  "trailer": "",
  "slug": "adult-swim-duwt-de-grenzen-van-de-volwassen-animatie",
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
      children: "Het afgelopen jaar bracht een hoop nieuws van de zenders die tekenfilms voor\nvolwassenen maken. Adult Swim heeft op het Annecy International Animation Film\nFestival een stortvloed aan nieuwe projecten aangekondigd, terwijl Fox ook niet\nstil zit met een vervolg voor een nieuwe serie."
    }), "\n", createVNode(_components.p, {
      children: "Op het grote animatiefestival in Annecy liet Michael Ouweleen, de baas van Adult\nSwim, van zich horen. Voor hem is dit festival de perfecte plek om te tonen waar\nhet netwerk mee bezig is, omdat ze constant op zoek zijn naar nieuwe manieren om\nanimatie te maken."
    }), "\n", createVNode(_components.p, {
      children: "Een van de meest bijzondere aankondigingen is de special The Elephant. Dit wordt\neen uniek experiment waar bekende makers als Rebecca Sugar (Steven Universe),\nIan Jones-Quartey (OK K.O.!), Patrick McHale (Over the Garden Wall) en Pendleton\nWard (Adventure Time) aan meewerken. De twist? Iedere maker werkt aan een deel\nvan het verhaal zonder te weten wat de anderen doen. Achteraf worden alle delen\ntot één geheel gesmeed. Er komt ook een documentaire over het creatieproces."
    }), "\n", createVNode(_components.p, {
      children: "Naast experimenten zijn er ook nieuwe comedyseries. Keeping Up With The Joneses\nvolgt een familie die probeert bij te blijven bij hun superrijke buren in\nDallas, waaronder Jerry Jones, de eigenaar van de Dallas Cowboys. De serie komt\nvan het trio Hugh Davidson, Rachel Ramras en Larry Dorf."
    }), "\n", createVNode(_components.p, {
      children: "Ook mogen we Heist_Safari verwachten, een serie bedacht door Genndy Tartakovsky\nover drie kikkers die een bank beroven. Dit concept werd vorig jaar al live\ngepitcht aan de baas van Adult Swim tijdens hetzelfde festival."
    }), "\n", createVNode(_components.p, {
      children: "Geliefde series krijgen uiteraard meer ruimte. HAHA, You Clowns krijgt twee\nextra seizoenen, wat maker Joe Cappa de kans geeft langer met de Campbell Boys\nen hun vader Tom te werken. De baas van Adult Swim gaf aan dat zij het geweldig\nvinden dat wij zo van de serie houden en erover praten."
    }), "\n", createVNode(_components.p, {
      children: "Ook voor Smiling Friends is er goed nieuws: naast een eerste blik op seizoen\ndrie, zijn seizoen vier en vijf al in productie. De prijswinnende actieserie\nNinja Kamui krijgt eveneens twee extra seizoenen."
    }), "\n", createVNode(_components.p, {
      children: "Een opvallende nieuwe aanwinst is Women Wearing Shoulder Pads, een volledig\nSpaanstalige stop-motion serie met Engelse ondertitels. De serie speelt zich af\nin de jaren 80 in Quito, Ecuador, en volgt een groep vrouwen."
    }), "\n", createVNode(_components.p, {
      children: "Ook bij Fox is er beweging. De serie Krapopolis, bedacht door Dan Harmon (Rick\nand Morty), krijgt een tweede seizoen nog voordat het eerste is begonnen. De\nserie, over een familie van mensen, goden en monsters die de eerste steden\nprobeert te besturen, heeft stemmen van onder andere Hannah Waddingham en\nRichard Ayoade."
    }), "\n", createVNode(_components.p, {
      children: "Al met al is het duidelijk dat de wereld van volwassen animatie volop bruist,\nmet nieuwe experimenten, frisse komedies en meer afleveringen van de series waar\nwij zo van houden."
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

const url = "src/content/nieuws/adult-swim-duwt-de-grenzen-van-de-volwassen-animatie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adult-swim-duwt-de-grenzen-van-de-volwassen-animatie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adult-swim-duwt-de-grenzen-van-de-volwassen-animatie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
