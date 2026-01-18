import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Scarlett Johansson waagt zich aan haar eerste horrorfilm",
  "date": "2025-11-24T23:15:52.363Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1764023866.jpg",
  "trailer": "",
  "slug": "scarlett-johansson-waagt-zich-aan-haar-eerste-horrorfilm",
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
      children: "Scarlett Johansson gaat meespelen in een nieuwe film van The Exorcist-reeks. De\nfilm wordt gemaakt door Mike Flanagan, die zowel het verhaal schrijft als de\nregie doet. Flanagan staat bekend om zijn enge projecten zoals The Haunting of\nHill House en Doctor Sleep."
    }), "\n", createVNode(_components.p, {
      children: "Johansson is natuurlijk bekend als Black Widow uit de Marvel-films en speelde\nonlangs nog in de succesvolle Jurassic World Rebirth. Dit wordt wel de eerste\nkeer dat ze in een horrorfilm verschijnt."
    }), "\n", createVNode(_components.p, {
      children: "Deze nieuwe Exorcist-film is geen vervolg op The Exorcist: Believer uit 2023.\nDie film bracht wel 137 miljoen dollar op, maar werd door velen als tegenvaller\nbeschouwd. Daarom is de oorspronkelijke regisseur David Gordon Green gestopt met\nde reeks."
    }), "\n", createVNode(_components.p, {
      children: "Universal Pictures en Blumhouse Productions proberen nu iets radicaal anders.\nMike Flanagan noemt zijn aanpak een “radical new take” - een compleet nieuw\nverhaal binnen de Exorcist-wereld. Wat er precies gaat gebeuren, houden ze nog\ngeheim."
    }), "\n", createVNode(_components.p, {
      children: "Flanagan is erg enthousiast over de casting van Johansson. Hij noemt haar een\nfantastische actrice die in allerlei filmgenres uit de voeten kan. De studio’s\nhopen uiteraard dat haar sterrenstatus veel kijkers naar de bioscoop zal lokken."
    }), "\n", createVNode(_components.p, {
      children: "The Exorcist is een iconische horrorfilm uit 1973 over een bezeten meisje en de\npriesters die haar proberen te redden. De film was enorm succesvol en won\nmeerdere prijzen, maar de latere films in de reeks konden dat niveau niet altijd\nevenaren."
    }), "\n", createVNode(_components.p, {
      children: "De studio heeft flink geïnvesteerd in de franchise - ze betaalden in 2021 maar\nliefst 400 miljoen dollar voor de rechten van drie films. Na de tegenvallende\nvorige film moet deze nieuwe versie dus wel een succes worden."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks haar drukke schema - ze regisseerde net haar eerste film Eleanor the\nGreat en heeft projecten lopen met Miles Teller en Adam Driver - heeft Johansson\ntijd gemaakt voor deze Exorcist-film."
    }), "\n", createVNode(_components.p, {
      children: "We weten nog niet wanneer de film precies in de bioscoop komt. Flanagan geeft\nwel aan dat The Exorcist een van de redenen was waarom hij filmmaker wilde\nworden. Wij zijn benieuwd naar zijn nieuwe interpretatie en hopen dat hij de\nmagie van de originele film kan vangen."
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

const url = "src/content/nieuws/scarlett-johansson-waagt-zich-aan-haar-eerste-horrorfilm.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/scarlett-johansson-waagt-zich-aan-haar-eerste-horrorfilm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/scarlett-johansson-waagt-zich-aan-haar-eerste-horrorfilm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
