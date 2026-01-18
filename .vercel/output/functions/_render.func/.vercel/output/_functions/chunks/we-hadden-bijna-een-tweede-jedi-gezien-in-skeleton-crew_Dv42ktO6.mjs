import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "We hadden bijna een tweede Jedi gezien in Skeleton Crew",
  "date": "2025-01-21T06:43:30.118Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/skeleton-crew-yasmine-al-massri-shares-first-look-at-her-jedi-character-that-didnt-make-the-cut---spoilers-ab215697.jpg",
  "trailer": "",
  "slug": "we-hadden-bijna-een-tweede-jedi-gezien-in-skeleton-crew",
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
      children: "De serie “Skeleton Crew” was volgens ons een zeer leuke toevoeging aan de Star\nWars franchise. Het verhaal draait om een groep kinderen die op een rustige\nplaneet wonen. Ze ontdekken een oud ruimteschip en gaan op avontuur in de\nruimte. Maar al snel merken ze dat de ruimte gevaarlijk is, vol boosaardige\npiraten. Samen werken ze samen met Jod Na Nawood, een volwassen man die de Force\nmin of meer beheerst, om weer naar huis te komen."
    }), "\n", createVNode(_components.p, {
      children: "Vandaag kwamen we te weten dat Yasmine Al Massri een rol had in deze serie. In\nde finale kregen het origine verhaal te horen van Jod, die vertelt dat hij zijn\nJedi-meester heeft verloren tijdens Order 66. Die Jedi-meester werd dus in een\nflashback scene gespeeld door Al Massri maar de makers hebben uiteindelijk\nbeslist om de scène te schrappen."
    }), "\n", createVNode(_components.p, {
      children: "Het is mogelijk dat in toekomstige seizoenen we meer ontdekken over Jod en zijn\nverleden. De makers van de show hebben gesuggereerd dat als er meer afleveringen\nkomen, we misschien toch meer te weten komen over Al Massri’s personage en haar\nrelatie tot Jod."
    }), "\n", createVNode(_components.p, {
      children: "“Skeleton Crew” is nu te streamen op Disney+."
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

const url = "src/content/nieuws/we-hadden-bijna-een-tweede-jedi-gezien-in-skeleton-crew.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/we-hadden-bijna-een-tweede-jedi-gezien-in-skeleton-crew.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/we-hadden-bijna-een-tweede-jedi-gezien-in-skeleton-crew.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
