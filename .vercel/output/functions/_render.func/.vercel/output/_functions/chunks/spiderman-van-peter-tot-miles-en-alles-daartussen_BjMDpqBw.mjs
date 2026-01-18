import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Spider-Man Van Peter tot Miles en Alles Daartussen",
  "date": "2025-08-06T17:16:12.105Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754421106.jpg",
  "trailer": "",
  "slug": "spiderman-van-peter-tot-miles-en-alles-daartussen",
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
      children: "Spider-Man blijft één van onze favoriete superhelden. Zijn verhalen draaien rond\nvriendschap, verantwoordelijkheid en avonturen door verschillende universums.\nIedereen kent Peter Parker, maar sinds “Spider-Man: Into the Spider-Verse” is\nMiles Morales minstens even iconisch geworden."
    }), "\n", createVNode(_components.p, {
      children: "In “Spider-Man: Across the Spider-Verse” volgen we Miles Morales terwijl hij\nweer tussen parallelle universums springt. Hij ontmoet nieuwe bondgenoten zoals\nSpider-Woman Gwen Stacy en sluit zich aan bij de Spider-Society, een groep vol\ndiverse Spider-personages. Unieke versies zoals Spider-Punk en Spider-Man India\nmaken dit een visueel feest."
    }), "\n", createVNode(_components.p, {
      children: "De klassieke Raimi-trilogie met Tobey Maguire toont Peter’s groei als held.\n“Spider-Man 2” blinkt uit in balans tussen actie en emotie, terwijl “Spider-Man\n3” onder zijn eigen gewicht bezwijkt door te veel plotlijnen. Daarna kwam de\nreboot “The Amazing Spider-Man” met Andrew Garfield, die meer focust op Peter’s\ntienerjaren en zijn ouders, maar verstrikt raakt in overbodige subplots."
    }), "\n", createVNode(_components.p, {
      children: "Met Tom Holland kreeg Spider-Man nieuw leven in “Spider-Man: Homecoming”, waar\nwe Peter als dromende scholier volgen. “Spider-Man: Far From Home” toont zijn\nworsteling na Iron Man’s dood. Deze films brachten de held terug voor een\njongere generatie."
    }), "\n", createVNode(_components.p, {
      children: "De Spider-Verse-films verkennen het multiversum het beste door verschillende\nSpider-Man-versies samen te brengen. Wij kijken nu al reikhalzend uit naar\n“Spider-Man: Beyond the Spider-Verse”. Elke film blijft trouw aan de kern: moed,\ntrots en het dragen van verantwoordelijkheid."
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

const url = "src/content/nieuws/spiderman-van-peter-tot-miles-en-alles-daartussen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spiderman-van-peter-tot-miles-en-alles-daartussen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spiderman-van-peter-tot-miles-en-alles-daartussen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
