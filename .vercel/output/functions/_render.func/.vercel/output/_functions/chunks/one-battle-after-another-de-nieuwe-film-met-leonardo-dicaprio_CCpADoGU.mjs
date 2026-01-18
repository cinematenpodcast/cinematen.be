import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "One Battle After Another, de nieuwe film met Leonardo DiCaprio",
  "date": "2025-03-27T19:26:51.603Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/One-Battle-After-Another.jpg",
  "trailer": "Ap-j8e9J5U0",
  "slug": "one-battle-after-another-de-nieuwe-film-met-leonardo-dicaprio",
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
      children: "Leonardo DiCaprio speelt de hoofdrol in de nieuwe film “One Battle After\nAnother”, geschreven en geregisseerd door Paul Thomas Anderson. De film komt op\n26 september 2025 in de bioscoop en laat een sterrencast zien die ook Sean Penn,\nBenicio del Toro, Regina Hall, Teyana Taylor en Chase Infiniti omvat."
    }), "\n", createVNode(_components.p, {
      children: "In “One Battle After Another” speelt DiCaprio de rol van Bob Ferguson, een man\ndie probeert zijn dochter te vinden. Hij is een voormalig activist en werkt\nsamen met oude vrienden om zijn missie te volbrengen. De film laat de\nuitdagingen zien waarmee Bob en zijn vrienden te maken krijgen, terwijl ze\nproberen samen te werken om hun doelen te bereiken."
    }), "\n", createVNode(_components.p, {
      children: "De film is geïnspireerd door de roman “Vineland” van Thomas Pynchon uit 1997.\nHoewel de film elementen van Pynchons verhaal gebruikt, speelt het zich af in de\nhuidige tijd. Anderson, die eerder de film “Licorice Pizza” maakte, werkt\nopnieuw samen met veel talentvolle acteurs en heeft het script zelf geschreven.\nHij produceert de film samen met Sara Murphy en de overleden Adam Somner."
    }), "\n", createVNode(_components.p, {
      children: "De film heeft een budget van meer dan 130 miljoen dollar en is op een bijzondere\nmanier gefilmd. Anderson gebruikte 35mm film en speciale VistaVision camera’s om\nde beelden vast te leggen. Deze aanpak voegt een unieke stijl toe aan de film."
    }), "\n", createVNode(_components.p, {
      children: "DiCaprio maakte zijn YouTube-debuut om de trailer van de film te lanceren."
    }), "\n", createVNode(_components.p, {
      children: "Naast “One Battle After Another” heeft DiCaprio nog andere films gepland. Hij\nwerkt samen met de bekende regisseur Martin Scorsese aan verschillende\nprojecten, waaronder een film over Frank Sinatra en een adaptatie van “Devil in\nthe White City”."
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

const url = "src/content/nieuws/one-battle-after-another-de-nieuwe-film-met-leonardo-dicaprio.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/one-battle-after-another-de-nieuwe-film-met-leonardo-dicaprio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/one-battle-after-another-de-nieuwe-film-met-leonardo-dicaprio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
