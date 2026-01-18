import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een nieuwe trailer voor A Minecraft Movie",
  "date": "2024-11-20T12:14:53.676Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1732053735.jpg",
  "trailer": "wJO_vIDZn-I",
  "slug": "een-nieuwe-trailer-voor-a-minecraft-movie",
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
      children: "Er is veel buzz rond de aankomende film “A Minecraft Movie,” die gebaseerd is op\nhet populaire videospel Minecraft. Dit spel, gemaakt door Mojang Studios, is al\nmeer dan tien jaar een groot succes en heeft miljoenen spelers over de hele\nwereld. Veel mensen zijn benieuwd hoe het spel er in filmvorm uit zal zien,\nvooral omdat Minecraft bekend staat om zijn unieke blokachtige, gepixeleerde\nstijl."
    }), "\n", createVNode(_components.p, {
      children: "De eerste trailer van de film heeft veel reacties uitgelokt. Sommige fans zijn\nteleurgesteld omdat de film live-action is, en dat betekent dat echte mensen in\nde film spelen, in plaats van geanimeerde figuren zoals in het spel. Jack Black\nspeelt de hoofdrol als Steve, de bekende Minecraft-personage. Met die eerste\ntrailer ontstonden er al direct zorgen dat de film zich misschien niet aan de\noriginele stijl van het spel houdt. In de eerste beelden waren er bijvoorbeeld\nenkele “fouten” in de weergave van de game-elementen."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig laat de nieuwe trailer zien dat de filmmakers hun huiswerk gedaan\nhebben. We zien bijvoorbeeld de Skeletens en Zombies. Er wordt Redstone gebruikt\nen zelfs de recente toegevoegde Elytra zien we al in actie! Dit geeft fans de\nhoop dat de filmmakers echt aandacht besteden aan de details die het spel zo\ngeliefd maken."
    }), "\n", createVNode(_components.p, {
      children: "Aangezien Minecraft de bestverkochte game ooit is, is het logisch dat er een\nfilm van gemaakt wordt. Wij zijn benieuwd wat “A Minecraft Movie” van\nverwachtingen kan waarmaken!"
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

const url = "src/content/nieuws/een-nieuwe-trailer-voor-a-minecraft-movie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-trailer-voor-a-minecraft-movie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-nieuwe-trailer-voor-a-minecraft-movie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
