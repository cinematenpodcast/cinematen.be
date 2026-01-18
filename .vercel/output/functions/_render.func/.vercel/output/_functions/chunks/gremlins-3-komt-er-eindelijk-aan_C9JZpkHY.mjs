import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gremlins 3 komt er eindelijk aan!",
  "date": "2025-11-06T15:07:21.417Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762440631.jpg",
  "trailer": "",
  "slug": "gremlins-3-komt-er-eindelijk-aan",
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
      children: "Warner Bros. heeft officieel bevestigd dat er een nieuwe Gremlins-film komt\nonder de titel Gremlins 3, met release gepland op 19 november 2027. Dat is bijna\n40 jaar na de originele film uit 1984."
    }), "\n", createVNode(_components.p, {
      children: "Chris Columbus, die het verhaal voor de allereerste Gremlins schreef, keert\nterug als regisseur, scenarioschrijver en producent. Steven Spielberg, destijds\nook betrokken, wordt opnieuw producent. Wat we nog niet weten is welke acteurs\nzullen meespelen, maar wel dat de makers opnieuw met poppen willen werken in\nplaats van computerbeelden."
    }), "\n", createVNode(_components.p, {
      children: "Opvallend is dat Joe Dante, regisseur van de eerste twee films, niet meewerkt\naan deze nieuwe film. Hij was wel betrokken bij de recente tekenfilmserie. Dante\ngaf de originele films hun unieke mix van enge en grappige momenten, zoals de\nberuchte magnetronscène."
    }), "\n", createVNode(_components.p, {
      children: "Columbus heeft bewezen dat hij zowel grappige als spannende films kan maken,\ndenk maar aan de eerste twee Harry Potter-films, Home Alone en Mrs. Doubtfire.\nRecent regisseerde hij nog films voor Netflix zoals The Christmas Chronicles 2."
    }), "\n", createVNode(_components.p, {
      children: "De eerste Gremlins was speciaal omdat hij horror, komedie en kerstfilm\ncombineerde, met memorabele poppen en duidelijke regels over de Mogwai. We hopen\ndat Gremlins 3 die magie kan vangen, zeker omdat Columbus het originele DNA zo\ngoed kent."
    }), "\n", createVNode(_components.p, {
      children: "Warner Bros. heeft recent succes met films zoals Barbie en Superman, wat goede\nhoop geeft voor deze nieuwe Gremlins. Na meer dan 30 jaar geruchten lijkt het nu\necht te gaan gebeuren. We kijken er enorm naar uit om te zien of de film de\nerfenis van de originele films kan eren."
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

const url = "src/content/nieuws/gremlins-3-komt-er-eindelijk-aan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gremlins-3-komt-er-eindelijk-aan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gremlins-3-komt-er-eindelijk-aan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
