import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ted krijgt een tweede seizoen",
  "date": "2024-05-10T18:24:46.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1715275582.jpg",
  "trailer": "",
  "slug": "ted-seizoen-2-een-kijkje-in-de-anticipatie",
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "internationaal-succes-en-vernieuwing",
    "text": "Internationaal Succes en Vernieuwing"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Seth MacFarlane’s “Ted” is terug voor een tweede seizoen op Peacock, nadat het in januari van dit jaar records verbrak als de meest bekeken originele serie op de streamingdienst. De komedieserie, een prequel op de gelijknamige film uit 2012, heeft wereldwijd succes geboekt en zal nu worden voortgezet als een doorlopend programma."
    }), "\n", createVNode(_components.p, {
      children: "In de eerste zeven afleveringen van “Ted” volgen we het verhaal van Ted, de pratende teddybeer vertolkt door MacFarlane, en John, een 16-jarige versie gespeeld door Max Burkholder, die samen in 1993 avonturen beleven. In deze prequel zien we hoe Ted geen moment van roem meer heeft, maar nog steeds nauw verbonden is met John, waarbij ze elkaars slechte invloeden blijven versterken."
    }), "\n", createVNode(_components.h2, {
      id: "internationaal-succes-en-vernieuwing",
      children: "Internationaal Succes en Vernieuwing"
    }), "\n", createVNode(_components.p, {
      children: "Na de première van “Ted” in januari bleef de serie twee maanden lang de topstreamingkomedie in de Verenigde Staten. Peacock heeft aangekondigd dat het de meest bekeken originele serie op de dienst is geworden, met sterke prestaties in landen zoals het Verenigd Koninkrijk, Australië en Canada."
    }), "\n", createVNode(_components.p, {
      children: "De vernieuwing van “Ted” tot een doorlopend programma komt kort na de première en solide kijkcijfers van het eerste seizoen. De betrokken partijen, waaronder Universal Studio Group’s UCP, Fuzzy Door Productions en MRC, werken samen onder leiding van MacFarlane, Paul Corrigan en Brad Walsh als co-showrunners en uitvoerend producenten Erica Huggins, Alana Kleiman, Jason Clark en Aimee Carlson."
    }), "\n", createVNode(_components.p, {
      children: "Ted’s terugkeer belooft meer vulgaire humor en komische capriolen, en fans over de hele wereld kunnen niet wachten om te zien welke nieuwe avonturen er zullen komen."
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

const url = "src/content/nieuws/ted-krijgt-een-tweede-seizoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ted-krijgt-een-tweede-seizoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ted-krijgt-een-tweede-seizoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
