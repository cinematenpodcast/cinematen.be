import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Landman seizoen 2 komt eraan, maar wanneer?",
  "date": "2025-05-26T16:29:08.402Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1748273505.jpg",
  "trailer": "",
  "slug": "landman-seizoen-2-komt-eraan-maar-wanneer",
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
      children: "Paramount+ heeft groen licht gegeven voor een tweede seizoen van Landman. De\nserie, die in november 2024 in première ging, brak records met 35 miljoen\nwereldwijde streams tijdens haar eerste seizoen. Hoewel het vervolg nog geen\nreleasedatum heeft, blijven we benieuwd naar de volgende stap van Tommy Norris,\ngespeeld door Billy Bob Thornton."
    }), "\n", createVNode(_components.p, {
      children: "Thornton vertolkt een oliehandelaar in West Texas die voor een megabedrijf\nlandrechten probeert te verwerven. Zijn werk leidt tot conflicten met de wet en\nethische dilemma’s, wat de spanning in de serie opbouwt. Naast Thornton zien we\nJon Hamm, Demi Moore en Ali Larter terug. Hamm’s personage stierf verrassend\ngenoeg in de finale van seizoen 1, wat mogelijk ruimte maakt voor Moore om een\nprominentere rol te grijpen."
    }), "\n", createVNode(_components.p, {
      children: "Chris McCarthy, CEO van Paramount Global, noemde Landman een van de\nbelangrijkste series van het jaar. De show combineert thema’s als\nindividualisme, arbeidersstrijd en klimaatvraagstukken met de harde realiteit\nvan de energie-industrie. De combinatie van politieke ambitie en menselijke\nfouten lijkt een vruchtbare voedingsbodem voor drama."
    }), "\n", createVNode(_components.p, {
      children: "Qua erkenning sleepte Thornton een Golden Globe-nominatie in de wacht voor Beste\nActeur. Ook Paramount+ vaarde wel bij het succes: de streamingdienst klom naar\nde tweede plaats in de VS wat betreft originele kijkuren in het vierde kwartaal\nvan 2024. Drie van hun series, waaronder Landman, stonden in de wereldwijde SVOD\nTop 10—een prestatie die slechts één andere streamer ooit evenaarde."
    }), "\n", createVNode(_components.p, {
      children: "Helaas moeten we nog even geduld hebben voor concrete details over seizoen 2.\nTot die tijd blijven we achter met vragen: Hoe zal Tommy Norris verder navigeren\ntussen corruptie en persoonlijke moraliteit? En welke rol speelt Demi Moore nu\nHamm’s personage van het toneel is?"
    }), "\n", createVNode(_components.p, {
      children: "Met zijn mix van politieke thriller en karakterdrama blijft Landman een van de\nsterkste troeven van Paramount+. Ter vergelijking: andere hits op het platform\nzijn Tulsa King en Lioness, maar geen enkele haalt dezelfde combinatie van\nsterrencast en maatschappelijke relevantie. Wij blijven benieuwd naar wat Tommy\nNorris en de rest van de cast ons gaan voorschotelen."
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

const url = "src/content/nieuws/landman-seizoen-2-komt-eraan-maar-wanneer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/landman-seizoen-2-komt-eraan-maar-wanneer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/landman-seizoen-2-komt-eraan-maar-wanneer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
