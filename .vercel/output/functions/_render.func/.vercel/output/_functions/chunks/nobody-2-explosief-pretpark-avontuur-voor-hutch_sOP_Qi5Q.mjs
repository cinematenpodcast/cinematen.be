import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nobody 2 Explosief Pretpark Avontuur voor Hutch",
  "date": "2025-08-17T16:17:54.038Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755291017.jpg",
  "trailer": "",
  "slug": "nobody-2-explosief-pretpark-avontuur-voor-hutch",
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
      children: "“Nobody 2” is het vervolg op de populaire actiefilm “Nobody” met Bob Odenkirk\nals Hutch Mansell. Deze keer probeert Hutch een familievakantie te plannen in\nPlummerville, een vervallen pretpark uit zijn jeugd. Maar zoals verwacht, loopt\nalles in het honderd."
    }), "\n", createVNode(_components.p, {
      children: "De film opent met Hutch bij een overheidsverhoor, met een wolfshond die later\ncruciaal blijkt. Via flashbacks zien we hoe hij opnieuw in de problemen raakt\ndoor schulden bij de Russische maffia - een erfenis uit de eerste film. Hij moet\nnu werken voor de Barber, die zijn schuld afbetaalde."
    }), "\n", createVNode(_components.p, {
      children: "Hutch’s poging tot familiequalitytime in het pretpark draait uit op chaos. Na\neen conflict tussen zijn zoon Brady en lokale jongeren grijpt Hutch in, wat\nleidt tot een intense vechtpartij. Hier ontdekt hij zijn agressieve kant\nopnieuw, maar zijn impulsieve acties slepen het gezin dieper in de problemen."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Timo Tjahjanto voert de energie op met meer humor en actie. Andere\npersonages krijgen meer ruimte, vooral Hutch’s vrouw Becca die laat zien óók te\nkunnen vechten. Sharon Stone schittert als de over-the-top antagonist Lendina,\ndie het pretpark en lokale politie controleert. Dit dwingt Hutch tot creatieve\noplossingen."
    }), "\n", createVNode(_components.p, {
      children: "De climax is een groots gevecht in het pretpark waar Hutch, zijn vader en\nvrienden vallen en valstrikken inzetten. Deze actiescènes combineren brute\nstrijd met slapstickhumor, versterkt door diverse parklocaties."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal blijft eenvoudig en soms voorspelbaar, maar draait om sfeer en\nplezier. We krijgen precies wat we van een actiefilm verwachten: vechtpartijen,\nschietgevechten en humor. De film breidt de mythologie niet uit, maar houdt vast\naan de basisformule. Hutch blijft de imperfecte held die altijd in problemen\nbelandt."
    }), "\n", createVNode(_components.p, {
      children: "Al met al biedt “Nobody 2” een explosieve mix van actie, humor en\nfamiliedynamiek. Het is een film die ons vermaakt met de perfecte\npretparksetting voor dit wilde avontuur."
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

const url = "src/content/nieuws/nobody-2-explosief-pretpark-avontuur-voor-hutch.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nobody-2-explosief-pretpark-avontuur-voor-hutch.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nobody-2-explosief-pretpark-avontuur-voor-hutch.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
