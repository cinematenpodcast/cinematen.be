import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jason Voorhees maakt comeback met kortfilm",
  "date": "2025-08-09T03:12:49.128Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754585636.jpg",
  "trailer": "",
  "slug": "jason-voorhees-maakt-comeback-met-kortfilm",
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
      children: "De iconische horrorfiguur Jason Voorhees keert terug na jaren van afwezigheid.\nSinds de remake van “Friday the 13th” in 2009 zagen we hem niet meer op het\nscherm, vooral door juridische problemen die nieuwe films blokkeerden. Gelukkig\nkomt daar nu verandering in."
    }), "\n", createVNode(_components.p, {
      children: "Horror Inc. kondigt “Sweet Revenge” aan, een officiële kortfilm van 13 minuten\ndie op 13 augustus 2025 verschijnt op het YouTube-kanaal van Jason Universe.\nSchuyler White kruipt in de huid van Jason, als eerste acteur sinds Derek Mears\nin 2009. White is een ervaren stuntman met horror-ervaring, wat hem de perfecte\nkeuze maakt voor deze fysieke rol."
    }), "\n", createVNode(_components.p, {
      children: "Deze kortfilm markeert de start van Jason Universe, een initiatief om het\npersonage nieuw leven in te blazen. Naast de film komen er merchandise, games en\neen geplande prequelserie “Crystal Lake”. Deze ontwikkelingen werden mogelijk\ndankzij een recente juridische doorbraak waarbij scenarioschrijver Victor Miller\ntoestemming kreeg om verder te werken aan het Jason-verhaal."
    }), "\n", createVNode(_components.p, {
      children: "We hebben lang moeten wachten door de complexe rechtenstrijd rond het originele\nscript uit 1980. Miller kreeg wel de rechten voor het script, maar niet voor de\nvolwassen versie van Jason. Ondanks deze beperkingen zien we nu eindelijk\nbeweging. Hoewel de toekomst onzeker blijft, kunnen we weer even ondergedompeld\nworden in de wereld van deze legendarische slasher."
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

const url = "src/content/nieuws/jason-voorhees-maakt-comeback-met-kortfilm.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jason-voorhees-maakt-comeback-met-kortfilm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jason-voorhees-maakt-comeback-met-kortfilm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
