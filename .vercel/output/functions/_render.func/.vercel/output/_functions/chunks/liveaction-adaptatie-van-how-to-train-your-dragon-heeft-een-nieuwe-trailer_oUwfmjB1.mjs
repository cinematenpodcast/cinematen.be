import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Live-Action adaptatie van How to Train Your Dragon heeft een nieuwe trailer",
  "date": "2025-02-12T15:26:22.157Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/how-to-train-your-dragon-remake-featured.jpg",
  "trailer": "22w7z_lT6YM",
  "slug": "liveaction-adaptatie-van-how-to-train-your-dragon-heeft-een-nieuwe-trailer",
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
      children: "De nieuwe live-action film “How to Train Your Dragon” komt uit op 13 juni 2025.\nDit is een remake van de populaire animatiefilm uit 2010 van DreamWorks. De\nregisseur en schrijver van deze film is Dean DeBlois, die ook betrokken was bij\nde originele animatiefilm. De nieuwe film laat voor het eerst de karakters\nHiccup, Astrid, Stoick en Gobber zien in een live-action film met echte acteurs."
    }), "\n", createVNode(_components.p, {
      children: "Mason Thames speelt Hiccup, een Viking jongen die bevriend raakt met een draak\ndie hij Toothless noemt. Nico Parker speelt Astrid, die in de nieuwe film een\ngrotere rol krijgt. Gerard Butler keert terug als Hiccup’s vader, Chief Stoick\nthe Vast, terwijl Nick Frost Gobber speelt."
    }), "\n", createVNode(_components.p, {
      children: "De animatoren hebben hard gewerkt om de draken realistisch te maken zonder ze te\nveel menselijkheid te geven. Ze hebben naar dieren gekeken, zoals honden en\nkatten, om de juiste manieren te vinden om de draken te laten bewegen en hun\npersoonlijkheden te tonen."
    }), "\n", createVNode(_components.p, {
      children: "De franchise is gebaseerd op de boeken van Cressida Cowell en heeft al twee\nvervolgen. Met deze nieuwe live-action film hopen de makers meer diepte en\nachtergrond te geven aan de personages en hun verhalen. Wij kijken uit naar de\nrelease en de avonturen van Hiccup en zijn vrienden in een nieuwe, spannende\nvorm. Alleen de muziek al krijgt ons tot in de cinemazalen."
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

const url = "src/content/nieuws/liveaction-adaptatie-van-how-to-train-your-dragon-heeft-een-nieuwe-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liveaction-adaptatie-van-how-to-train-your-dragon-heeft-een-nieuwe-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liveaction-adaptatie-van-how-to-train-your-dragon-heeft-een-nieuwe-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
