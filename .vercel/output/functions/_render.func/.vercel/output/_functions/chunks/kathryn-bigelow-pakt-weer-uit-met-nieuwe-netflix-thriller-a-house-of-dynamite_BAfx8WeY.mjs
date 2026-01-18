import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kathryn Bigelow pakt weer uit met nieuwe Netflix thriller A House of Dynamite",
  "date": "2025-09-04T12:04:24.983Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1756927667.jpg",
  "trailer": "https://youtu.be/0w6wUqWU3yU?si=onUxtPiYZZ2PyfQz",
  "slug": "kathryn-bigelow-pakt-weer-uit-met-nieuwe-netflix-thriller-a-house-of-dynamite",
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
      children: "Kathryn Bigelow is niet zomaar een regisseur. Ze brak door als eerste vrouw die\neen Oscar voor Beste Regie won met The Hurt Locker en blijft sindsdien films\nmaken die niet alleen boeien maar ook stof doen opwaaien. Van Zero Dark Thirty\ntot Detroit, haar werk lokt altijd discussie uit."
    }), "\n", createVNode(_components.p, {
      children: "Haar film Strange Days uit 1995 is daar een perfect voorbeeld. Samen met James\nCameron en scenarioschrijver Jay Cocks creëerde ze een verhaal dat zich afspeelt\nin Los Angeles op oudejaarsavond 1999. Hoofdpersonage Lenny Nero, gespeeld door\nRalph Fiennes, verkoopt illegale opnames die mensen kunnen beleven alsof ze het\nzelf meemaken. Wanneer hij een opname van een moord in handen krijgt, belandt\nhij in een web van problemen. Angela Bassett speelt Mace, de sterke vrouw die\nhem probeert te helpen."
    }), "\n", createVNode(_components.p, {
      children: "Technisch was Strange Days een pareltje. Er werd speciaal een camera van 8 pond\nontwikkeld die op het hoofd gedragen kon worden, wat zorgde voor intense\nfirst-person perspectieven. Toch flopte de film bij release in de bioscoop. Wij\nvinden het nu een van haar beste en meest visionaire werken."
    }), "\n", createVNode(_components.p, {
      children: "Vandaag werkt Bigelow aan haar nieuwe film: A House of Dynamite. Die draait rond\neen kernaanval op Chicago waarbij de inwoners slechts één uur hebben om te\nreageren. Idris Elba en Rebecca Ferguson spelen de hoofdrollen. De film komt op\n24 oktober 2025 uit op Netflix en de trailer belooft een intense, meeslepende\nthriller."
    }), "\n", createVNode(_components.p, {
      children: "Bigelow begon haar carrière in de kunstwereld en maakte experimentele films\nvoordat ze de overstap naar Hollywood maakte. Point Break is daar een gekend\nvoorbeeld van. Haar films gaan vaak over gemeenschappen die apart leven van de\nrest, en technische innovatie is een terugkerend thema in haar werk."
    }), "\n", createVNode(_components.p, {
      children: "Haar films worden gewaardeerd om hun actie en diepere lagen, maar ze lokken ook\nvaak controverse uit. Zero Dark Thirty kreeg kritiek omdat het marteling zou\ngoedpraten, en Detroit werd als te afstandelijk beschouwd. Toch blijft Bigelow\nfilms maken die ons aan het denken zetten over maatschappelijke thema’s. Wij\nkijken alvast uit naar haar volgende project."
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

const url = "src/content/nieuws/kathryn-bigelow-pakt-weer-uit-met-nieuwe-netflix-thriller-a-house-of-dynamite.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathryn-bigelow-pakt-weer-uit-met-nieuwe-netflix-thriller-a-house-of-dynamite.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathryn-bigelow-pakt-weer-uit-met-nieuwe-netflix-thriller-a-house-of-dynamite.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
