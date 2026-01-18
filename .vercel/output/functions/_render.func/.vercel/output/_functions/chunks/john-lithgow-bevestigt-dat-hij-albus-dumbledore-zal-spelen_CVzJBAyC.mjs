import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "John Lithgow bevestigt dat hij Albus Dumbledore zal spelen",
  "date": "2025-02-26T12:30:30.704Z",
  "soort": "Tv",
  "thumbnail": "/images/article-images/john-lithgow-Michael-Gambon-Harry-Potter-and-the-Order-of-the-Phoenix-022525-1573f322a87547169e4515e133606100.jpg",
  "trailer": "",
  "slug": "john-lithgow-bevestigt-dat-hij-albus-dumbledore-zal-spelen",
  "tags": ["Tv"]
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
      children: "De populaire Harry Potter-boeken van J.K. Rowling krijgen een remake, deze keer\nop het kleine scherm. HBO en de acteur zelf hebben bevestigd dat acteur John\nLithgow de rol van Albus Dumbledore zal spelen in de nieuwe Harry\nPotter-televisieserie. Lithgow, die 79 jaar oud is, heeft onlangs in een\ninterview zijn enthousiasme over deze rol gedeeld."
    }), "\n", createVNode(_components.p, {
      children: "Lithgow komt in een lange lijn van acteurs die Dumbledore hebben gespeeld.\nRichard Harris speelde de rol in de eerste twee films, en Michael Gambon nam het\nover na het overlijden van Harris. In de nieuwste Fantastic Beasts films zagen\nwe een iets jongere Dumbledore vertolkt worden door Jude Law. John Lithgow’s\ncasting als Dumbledore is bijzonder omdat hij de eerste Amerikaanse acteur is\ndie deze rol in de filmreeks zal spelen."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe serie wil trouw blijven aan de boeken en een grondiger verhaal\nvertellen dan de eerdere films deden. Francesca Gardiner is de showrunner van de\nserie, die naar verwachting zal beginnen met filmen in de zomer van 2025."
    }), "\n", createVNode(_components.p, {
      children: "Lithgow gaf aan dat de beslissing om de rol te aanvaarden niet eenvoudig was.\nHij voelt dat het een grote stap in zijn carrière is, vooral omdat hij zich\nervan bewust is dat het zijn laatste grote rol kan zijn. Tijdens de opnames van\nhet laatste seizoen zou hij 87 jaar oud zijn."
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment is Lithgow de enige bevestigde cast voor de serie. Er zijn\ngeruchten dat acteur Paapa Essiedu ook in de serie zal spelen, mogelijk als\nSeverus Snape, maar daarover is nog niets officieel bevestigd. De serie heeft\nbredere casting-oproepen gedaan voor de jonge hoofdrollen van Harry Potter,\nHermione Granger en Ron Weasley, wat betekent dat de nieuwe acteurs\nwaarschijnlijk onbekend zullen zijn."
    }), "\n", createVNode(_components.p, {
      children: "De serie is momenteel gepland om eind 2026 of begin 2027 uit te komen. HBO heeft\nook een verklaring afgegeven waarin staat dat details over de cast pas worden\nbevestigd als contracten zijn afgesloten."
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

const url = "src/content/nieuws/john-lithgow-bevestigt-dat-hij-albus-dumbledore-zal-spelen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-lithgow-bevestigt-dat-hij-albus-dumbledore-zal-spelen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-lithgow-bevestigt-dat-hij-albus-dumbledore-zal-spelen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
