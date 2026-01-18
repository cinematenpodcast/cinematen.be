import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sam Raimi keert terug naar de horror met Send Help",
  "date": "2025-10-14T19:46:13.383Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1760467673.jpg",
  "trailer": "R4wiXj9NmEE",
  "slug": "sam-raimi-keert-terug-naar-de-horror-met-send-help",
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
      children: "Sam Raimi maakt weer een horrorfilm. Zijn nieuwe project heet “Send Help” en\nwordt zijn eerste enge film sinds “Drag Me to Hell” uit 2009. Rachel McAdams\nspeelt de hoofdrol als Linda, een kantoorwerkster die samen met haar baas\nBradley vast komt te zitten op een onbewoond eiland."
    }), "\n", createVNode(_components.p, {
      children: "We kennen McAdams van haar rol als Christine in Raimi’s “Doctor Strange in the\nMultiverse of Madness”, maar nu krijgt ze een veel prominentere rol. De film\nwordt vergeleken met klassiekers als “Misery” en “Cast Away”, maar behoudt\nRaimi’s typische mix van horror en humor."
    }), "\n", createVNode(_components.p, {
      children: "Raimi is natuurlijk de legendarische maker van “The Evil Dead” en regisseerde\neerder ook de originele “Spider-Man” trilogie met Tobey Maguire. Wij hopen dat\nhij ooit nog eens terugkeert naar Spider-Man, maar daar is voorlopig nog niets\nover bekend. Er zijn wel geruchten over een “Doctor Strange 3”, waarbij de vraag\nblijft of Raimi dan evenveel creatieve vrijheid zal krijgen als bij zijn\nhorrorprojecten."
    }), "\n", createVNode(_components.p, {
      children: "In “Send Help” werkt Raimi opnieuw samen met McAdams, wat past bij zijn gewoonte\nom vaste partners te gebruiken. Denk maar aan Bruce Campbell, J.K. Simmons en\nzijn broers Ted en Ivan, die vaak meeschrijven aan zijn films. Ook componist\nDanny Elfman is weer van de partij voor de muziek."
    }), "\n", createVNode(_components.p, {
      children: "De film komt op 30 januari 2026 in de bioscoop. Het verhaal toont hoe de\nmachtsverhouding tussen Linda en Bradley omslaat op het eiland - waar Linda\nbeter kan overleven en zelfs een mes heeft. Bloed en spanning zijn uiteraard\ngegarandeerd, net als Raimi’s kenmerkende balans tussen eng en grappig."
    }), "\n", createVNode(_components.p, {
      children: "Voor McAdams betekent dit een kans om te shinen in een hoofdrol, na haar bijrol\nin de Doctor Strange-film. Wij kijken er naar uit om Raimi’s terugkeer naar zijn\nhorrorroots mee te maken, want zijn unieke stijl - zowel eng als absurd - hebben\nwe veel te lang moeten missen."
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

const url = "src/content/nieuws/sam-raimi-keert-terug-naar-de-horror-met-send-help.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sam-raimi-keert-terug-naar-de-horror-met-send-help.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sam-raimi-keert-terug-naar-de-horror-met-send-help.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
