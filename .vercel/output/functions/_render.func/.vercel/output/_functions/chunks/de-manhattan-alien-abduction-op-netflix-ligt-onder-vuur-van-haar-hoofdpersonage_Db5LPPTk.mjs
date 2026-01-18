import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Manhattan Alien Abduction op Netflix ligt onder vuur van haar hoofdpersonage",
  "date": "2024-11-04T22:24:53.846Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1730757744.jpg",
  "trailer": "",
  "slug": "de-manhattan-alien-abduction-op-netflix-ligt-onder-vuur-van-haar-hoofdpersonage",
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
      children: "De documentaire op Netflix, The Manhattan Alien Abduction, vertelt het verhaal\nvan Linda Napolitano. In 1989 beweerde zij dat ze was ontvoerd door aliens\nvanuit haar appartement in New York City. Dit gebeurde op 30 november, en\nvolgens haar hebben meer dan 20 mensen de ontvoering gezien. Maar de grote vraag\nis: was het echt of verzonnen ze het allemaal?"
    }), "\n", createVNode(_components.p, {
      children: "Linda zei dat ze door drie buitenaardse wezens was ontvoerd. Ze vertelde dat ze\ndoor het raam van haar appartement omhoog werd getild en dat ze in een\nruimteschip werd meegenomen. Na allegedly experimenten met haar te hebben\nuitgevoerd, brachten deze wezens haar terug naar haar slaapkamer. Dit verhaal\ntrok veel aandacht in de media."
    }), "\n", createVNode(_components.p, {
      children: "Een belangrijke speler in dit verhaal was Budd Hopkins, een onderzoeker van\nUFO’s. Hij geloofde Linda en hielp haar haar herinneringen weer op te roepen\ndoor middel van hypnose. Linda vertelde dat een vreemde bult op haar neus bewijs\nwas van een alieninplant. Maar toen een arts probeerde deze bult te onderzoeken,\nwas hij er niet meer. Dit maakte het verhaal nog ingewikkelder (en minder\ngeloofwaardig)."
    }), "\n", createVNode(_components.p, {
      children: "De documentaire laat ook de skeptici aan het woord. Carol Rainey, die getrouwd\nwas met Hopkins, begon te twijfelen aan Linda’s verhaal. Ze vond dat Linda zich\nanders gedroeg dan andere mensen die onder hypnose stonden. Na verloop van tijd\nwerd Rainey een criticus van Linda’s verhaal en geloofde ze dat het allemaal een\nverzinsel was."
    }), "\n", createVNode(_components.p, {
      children: "Linda’s verhaal heeft niet alleen voor opschudding gezorgd, ze heeft ook een\nrechtszaak aangespannen tegen Netflix. Ze zegt dat de documentaire haar in een\nslecht daglicht stelt en dat er dingen zijn gezegd die niet waar zijn. Ze\nbeweert dat Netflix de kritiek van Rainey als expert heeft laten gelden, terwijl\nze volgens Linda gewoon een boze ex-vrouw van Hopkins is. De documentaire is wel\nnog steeds beschikbaar op Netflix, waar mensen zelf de “feiten” kunnen bekijken\nen hun eigen oordeel kunnen vellen."
    }), "\n", createVNode(_components.p, {
      children: "Of je nu gelooft dat aliens echt zijn of niet, de documentaire laat zien hoe\nmensen kunnen reageren op het onbekende en hoe verhalen zich kunnen ontwikkelen\ndoor de jaren heen."
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

const url = "src/content/nieuws/de-manhattan-alien-abduction-op-netflix-ligt-onder-vuur-van-haar-hoofdpersonage.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-manhattan-alien-abduction-op-netflix-ligt-onder-vuur-van-haar-hoofdpersonage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-manhattan-alien-abduction-op-netflix-ligt-onder-vuur-van-haar-hoofdpersonage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
