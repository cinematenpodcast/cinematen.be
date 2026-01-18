import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Julian McMahon (56) overleden na strijd tegen kanker",
  "date": "2025-07-08T09:12:17.561Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-07-08T09-10-21-711Z.jpg",
  "trailer": "",
  "slug": "julian-mcmahon-56-overleden-na-strijd-tegen-kanker",
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
      children: "Julian McMahon is niet meer. De Australische acteur overleed op 56-jarige\nleeftijd in Clearwater, Florida. Zijn vrouw Kelly McMahon bevestigde dat hij na\neen lang gevecht tegen kanker is heengegaan. McMahon was een geliefde\nverschijning in de film- en televisiewereld."
    }), "\n", createVNode(_components.p, {
      children: "Geboren op 27 juli 1968 in Sydney als zoon van voormalig premier Billy McMahon,\nstartte Julian als model maar stapte snel over naar acteren. Zijn eerste grote\nrol kwam in de soap “The Power, the Passion” (1989), gevolgd door “Home and\nAway” (1990-1991)."
    }), "\n", createVNode(_components.p, {
      children: "Wij kennen hem vooral als de iconische Cole Turner in “Charmed” (1998-2006),\nwaar hij die sexy demon speelde die verliefd werd op een van de heksen. Later\nschitterde hij als plastisch chirurg Dr. Christian Troy in “Nip/Tuck”\n(2003-2010), een rol die hem meerdere Emmy-nominaties opleverde. Collega Dylan\nWalsh deelde mooie herinneringen aan hun tijd samen."
    }), "\n", createVNode(_components.p, {
      children: "Ook in de superheldenwereld liet hij zijn sporen na als Doctor Doom in de\n“Fantastic Four”-films (2005 en 2007). Recenter zag je hem nog in “FBI: Most\nWanted” als Jess LaCroix en in Netflix’ “The Residence” als Australische\npremier. Zijn laatste projecten waren “The Surfer” met Nicolas Cage."
    }), "\n", createVNode(_components.p, {
      children: "McMahon laat zijn dochter Madison na. Wij zullen hem herinneren als die\ngepassioneerde acteur die ons jarenlang vermaakte met zijn charismatische\nrollen. Alyssa Milano beschreef hem terecht als een getalenteerd man met wie ze\neen bijzondere band deelde. Een groot verlies voor de acteerwereld."
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

const url = "src/content/nieuws/julian-mcmahon-56-overleden-na-strijd-tegen-kanker.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/julian-mcmahon-56-overleden-na-strijd-tegen-kanker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/julian-mcmahon-56-overleden-na-strijd-tegen-kanker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
