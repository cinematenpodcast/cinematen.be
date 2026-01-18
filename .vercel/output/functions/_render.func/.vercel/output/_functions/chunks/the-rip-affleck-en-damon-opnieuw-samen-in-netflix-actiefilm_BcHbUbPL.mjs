import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Rip Affleck en Damon opnieuw samen in Netflix actiefilm",
  "date": "2025-09-10T15:59:38.211Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1757518503.jpg",
  "trailer": "ARU2WHyOPxE",
  "slug": "the-rip-affleck-en-damon-opnieuw-samen-in-netflix-actiefilm",
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
      children: "Ben Affleck en Matt Damon, twee iconische Hollywood-acteurs, werken opnieuw\nsamen voor een nieuwe film genaamd “The Rip”. De film komt op 16 januari 2026\nuit op Netflix en toont de twee als politieagenten in Miami die tijdens een\nzoekactie een enorme som geld vinden. In plaats van de verwachte 300.000 dollar,\nstuiten ze op miljoenen dollars en moeten ze een snelle beslissing nemen: wat\ndoen ze met het geld en kunnen ze elkaar nog vertrouwen? De spanning stijgt\nwanneer een mysterieuze belt en hen waarschuwt dat ze binnen 30 minuten weg\nmoeten zijn."
    }), "\n", createVNode(_components.p, {
      children: "Joe Carnahan regisseert en schreef het script voor deze actiefilm. Geïnspireerd\ndoor actiefilms uit de jaren 70 en verhalen van een vriend bij de politie in\nMiami, wilde Carnahan een verhaal neerzetten over vertrouwen en morele keuzes.\n“The Rip” is de eerste productie van Artists Equity, het eigen filmbedrijf van\nAffleck en Damon, op het Netflix-platform."
    }), "\n", createVNode(_components.p, {
      children: "Naast Affleck en Damon bevat de cast ook Steven Yeun, Teyana Taylor, Catalina\nSandino Moreno, Sasha Calle, Néstor Carbonell, Lina Esco, Scott Adkins en Kyle\nChandler. Affleck speelt detective sergeant J.D. Byrne en Damon is luitenant\nDane Dumars, beiden werkend voor de politie van Miami."
    }), "\n", createVNode(_components.p, {
      children: "Affleck en Damon werken al sinds hun doorbraak met “Good Will Hunting” samen en\nhebben samen films zoals “The Last Duel” gemaakt. “The Rip” is echter een ander\nsoort project voor hen—een snelle, spannende actiefilm met morele dilemma’s. De\nopnames vonden plaats in Miami en duurden ongeveer drie maanden. Carnahan\nbenadrukt dat de film niet alleen om actie draait, maar ook om de vraag of de\nhoofdpersonen nog de “goede jongens” zijn."
    }), "\n", createVNode(_components.p, {
      children: "Als producers kozen Affleck en Damon zelf voor dit verhaal vanwege de afwijkende\nstijl ten opzichte van hun andere werk. De film is ongeveer twee uur lang en\nbevat actie, achtervolgingen en diepgaande dialogen over goed en kwaad. De\ntrailer laat al veelbelovende scènes zien van spanning en conflict."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken extra uit naar deze film, niet alleen vanwege het sterke acteerduo,\nmaar ook vanwege het intrigerende verhaal over vriendschap en vertrouwen onder\ndruk. “The Rip” is een aanwinst voor het Netflix-aanbod in 2026 en richt zich\nvooral op een volwassen publiek."
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

const url = "src/content/nieuws/the-rip-affleck-en-damon-opnieuw-samen-in-netflix-actiefilm.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-rip-affleck-en-damon-opnieuw-samen-in-netflix-actiefilm.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-rip-affleck-en-damon-opnieuw-samen-in-netflix-actiefilm.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
