import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "John Candy I Like Me is een emotioneel eerbetoon",
  "date": "2025-09-04T17:58:10.157Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1757006665.jpg",
  "trailer": "hatkPBCcYUI",
  "slug": "john-candy-i-like-me-is-een-emotioneel-eerbetoon",
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
      children: "Er komt een nieuwe documentaire over het leven van de legendarische acteur John\nCandy. De film, genaamd “John Candy: I Like Me”, wordt geproduceerd door Ryan\nReynolds en geregisseerd door Colin Hanks. Ryan Reynolds, zelf een bekende\nCanadese acteur, is al zijn hele leven een fan van Candy. Colin Hanks, de zoon\nvan Tom Hanks, kende John Candy nog uit zijn kindertijd."
    }), "\n", createVNode(_components.p, {
      children: "John Candy was een iconische grappige acteur die meespeelde in klassiekers zoals\n“Planes, Trains and Automobiles”, “Uncle Buck” en “Home Alone”. Helaas overleed\nhij in 1994 op 43-jarige leeftijd aan een hartaanval, net zoals zijn vader. Wij\nwaren daar enorm verdrietig om, want hij liet een groot gat achter in de\nfilmwereld."
    }), "\n", createVNode(_components.p, {
      children: "De documentaire toont wie John Candy echt was, met medewerking van zijn familie,\nvrienden en collega’s zoals Catherine O’Hara en Bill Murray. Er zijn nooit\neerder vertoonde video’s en persoonlijke verhalen te zien. Colin Hanks twijfelde\neerst of hij de regie wou doen, maar de kinderen van Candy, Chris en Jen,\novertuigden hem uiteindelijk."
    }), "\n", createVNode(_components.p, {
      children: "De titel van de documentaire is afkomstig uit een bekende scène uit “Planes,\nTrains and Automobiles”, waar Candy de zin “I like me” uitspreekt. De film opent\nhet filmfestival van Toronto op 4 september 2025 – een grote eer – en is daarna\nvanaf 10 oktober te streamen op Amazon Prime Video."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken er naar uit om meer te leren over de man achter de lach, en hopen dat\ndeze documentaire een passend eerbetoon is aan een acteur die ons zo vaak aan\nhet lachen maakte."
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

const url = "src/content/nieuws/john-candy-i-like-me-is-een-emotioneel-eerbetoon.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-candy-i-like-me-is-een-emotioneel-eerbetoon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-candy-i-like-me-is-een-emotioneel-eerbetoon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
