import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avengers Doomsday brengt Captain America terug",
  "date": "2024-12-10T06:40:05.557Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733784425.jpg",
  "trailer": "",
  "slug": "avengers-doomsday-brengt-captain-america-terug",
  "tags": ["film"]
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
      children: "We hebben goed nieuws voor iedereen die van Marvel-films houdt! Een belangrijke\nspeler uit de Marvel-films keert terug voor de nieuwe film “Avengers: Doomsday.”\nDit is een enorme film waarin veel superhelden samenkomen. Het is het eerste\ndeel van een tweeluik dat een einde maakt aan de huidige reeks films, die we de\nMultiverse Saga noemen. Deze saga volgt de gebeurtenissen na de film “Avengers:\nEndgame,” die in 2019 uitkwam en het einde betekende van de Infinity Saga."
    }), "\n", createVNode(_components.p, {
      children: "In “Avengers: Doomsday” keert Captain America, gespeeld door Chris Evans, terug\nnaar het Marvel Cinematic Universe. Het originele plaatje is zo weer compleet\nnadat afgelopen zomer al werd aangekondigd dat Robert Downey Jr. ook terugkeert,\nniet ik de vorm van Tony Stark’s Iron Man maar wel als Victor Von Doom. Betekend\ndit dat we misschien ook een alternatieve versie van Captain America te zien\nzullen krijgen? Of zal onze Steve Rogers gewoonweg weer weggeplukt worden uit\nzijn gezellig leventje met Peggy Carter om mee te vechten tegen Dr. Doom?"
    }), "\n", createVNode(_components.p, {
      children: "We kunnen niet wachten om te zien wat er in “Avengers: Doomsday” allemaal gaat\ngebeuren en hoe de favoriete personages van iedereen terugkomen."
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

const url = "src/content/nieuws/avengers-doomsday-brengt-captain-america-terug.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avengers-doomsday-brengt-captain-america-terug.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avengers-doomsday-brengt-captain-america-terug.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
