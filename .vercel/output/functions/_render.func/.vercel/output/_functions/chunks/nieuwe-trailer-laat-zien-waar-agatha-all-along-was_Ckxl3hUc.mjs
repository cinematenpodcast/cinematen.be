import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe trailer laat zien waar Agatha All Along was",
  "date": "2024-08-10T13:06:57.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/harkness-takes-hold-1723263482.jpg",
  "trailer": "R9pXbNz6Vbw",
  "slug": "agatha-all-along-een-diepgaande-blik-op-marvels-nieuwe-serie",
  "tags": ["tv", "trailer", "comics"]
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
      children: "Na haar optreden als de intrigante Agnes in “WandaVision,” keert Hahn terug als de krachtige heks Agatha Harkness. De nieuwe serie volgt Agatha terwijl ze een coven van heksen samenstelt om de mysterieuze Witches’ Road te bewandelen. Deze weg wordt omschreven als een magische beproeving waar heksen beloond worden met datgene wat ze missen als ze het overleven."
    }), "\n", createVNode(_components.p, {
      children: "In de trailer van “Agatha All Along” zien we een kwetsbare Agatha die haar krachten kwijt is na een confrontatie met Wanda Maximoff. Met de hulp van een intrigerende tiener genaamd Teen (zeer origineel hoor), begint Agatha aan een reis vol onbekende gevaren en uitdagingen. De serie belooft een diepgaand verhaal te bieden over kracht, verlies en wederopstanding in een boeiende setting."
    }), "\n", createVNode(_components.p, {
      children: "Onder leiding van showrunner Jac Schaeffer, bekend van “WandaVision,” en regisseurs Rachel Goldberg en Gandja Montiero, belooft “Agatha All Along” misschien wel een visueel en emotioneel meeslepende kijkervaring te worden voor het publiek."
    }), "\n", createVNode(_components.p, {
      children: "Met de eerste twee afleveringen gepland voor release op Disney+ op 18 september 2024, markeert deze serie het begin van een nieuw hoofdstuk in het Marvel Cinematic Universe."
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

const url = "src/content/nieuws/nieuwe-trailer-laat-zien-waar-agatha-all-along-was.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-trailer-laat-zien-waar-agatha-all-along-was.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-trailer-laat-zien-waar-agatha-all-along-was.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
