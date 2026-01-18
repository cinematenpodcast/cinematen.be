import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Jurassic World-film in de maak door originele Jurassic Park-schrijver David Koepp",
  "date": "2024-01-22T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1705952054.jpg",
  "trailer": "",
  "slug": "nieuwe-jurassic-world-film-in-de-maak-door-originele-jurassic-park-schrijver-david-koepp",
  "draft": false,
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
      children: "David Koepp, bekend als de oorspronkelijke schrijver van “Jurassic Park”, maakt zijn terugkeer in de dinosauriër-gevulde wereld met een nieuwe film in de “Jurassic World” serie. Deze ontwikkeling, onthuld door The Hollywood Reporter, duidt op een voortzetting van de franchise, ondanks de afsluiting van de “Jurassic World”-trilogie in 2022 met “Jurassic World Dominion”. Universal Pictures heeft plannen voor een release in 2025, en Frank Marshall bevestigt zijn rol als producent."
    }), "\n", createVNode(_components.p, {
      children: "Dit nieuwe project van Koepp, die zowel “Jurassic Park” als “The Lost World” schreef, markeert een nieuw tijdperk voor de serie. Met Steven Spielberg als uitvoerend producent, blijft de regisseur van de nieuwe film nog een vraagteken. Colin Trevorrow en J.A. Bayona waren de regisseurs van de eerdere films in de trilogie."
    }), "\n", createVNode(_components.p, {
      children: "De “Jurassic” serie heeft wereldwijd meer dan 6 miljard dollar opgebracht, en de franchise blijft een financieel succes met inkomsten uit merchandising, themaparkattracties en meer. Koepp, bekend van “Mission: Impossible” en “Spider-Man”, brengt zijn expertise terug naar de franchise, ondanks eerdere betrokkenheid bij minder succesvolle projecten."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film belooft een frisse richting voor “Jurassic World”, mogelijk met nieuwe acteurs, locaties en verhaallijnen. Met de integratie van dinosauriërs in de moderne wereld in “Jurassic World Dominion”, zou de nieuwe film deze nieuwe wereld verder kunnen verkennen."
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

const url = "src/content/nieuws/nieuwe-jurassic-world-film-in-de-maak-door-originele-jurassic-park-schrijver-david-koepp.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-jurassic-world-film-in-de-maak-door-originele-jurassic-park-schrijver-david-koepp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-jurassic-world-film-in-de-maak-door-originele-jurassic-park-schrijver-david-koepp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
