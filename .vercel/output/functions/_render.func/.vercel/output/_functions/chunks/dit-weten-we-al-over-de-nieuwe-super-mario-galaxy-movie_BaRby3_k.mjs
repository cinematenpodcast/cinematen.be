import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dit weten we al over de nieuwe Super Mario Galaxy Movie",
  "date": "2025-11-12T14:45:19.616Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762957336.jpg",
  "trailer": "FdL2GorGdKc",
  "slug": "dit-weten-we-al-over-de-nieuwe-super-mario-galaxy-movie",
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
      children: "De nieuwe Super Mario-film is officieel aangekondigd onder de titel “The Super\nMario Galaxy Movie”. Dit wordt het vervolg op de enorm populaire “The Super\nMario Bros. Movie” die we eerder zagen. De release is gepland voor 3 april 2026."
    }), "\n", createVNode(_components.p, {
      children: "In deze nieuwe film gaat Mario naar de ruimte, geïnspireerd op het spel Super\nMario Galaxy. We zien hem nieuwe vijanden tegenkomen en nieuwe vrienden maken.\nRosalina is een belangrijk nieuw personage met speciale krachten, en Bowser Jr.\nmaakt zijn entree als de zoon van Bowser, met een vernieuwd uiterlijk in andere\nkleuren."
    }), "\n", createVNode(_components.p, {
      children: "De vertrouwde stemmen keren terug: Chris Pratt als Mario, Anya Taylor-Joy als\nPrincess Peach, Charlie Day als Luigi, Jack Black als Bowser, met Keegan-Michael\nKey en Kevin Michael Richardson als Toad en Kamek. Er komen ook nieuwe acteurs\nbij, waaronder een Marvel-ster en een bekroonde regisseur, though hun\nidentiteiten worden nog geheim gehouden."
    }), "\n", createVNode(_components.p, {
      children: "Nintendo en Illumination werken weer samen aan de productie. Shigeru Miyamoto\nvan Nintendo deelde mee dat het animatiewerk bijna afgerond is. De getoonde\ntrailer geeft ons een glimp van Rosalina’s krachten en het Star Festival in de\nruimte, waar Bowser voor problemen zorgt."
    }), "\n", createVNode(_components.p, {
      children: "We wisten al dat Yoshi en Bowser Jr. in de film zouden verschijnen dankzij\neerdere koekjesverpakkingen, though Yoshi amper in de trailer te zien was.\nOpvallend: Bowser zelf speelt een kleinere rol omdat hij vastzit, waardoor zijn\nzoon de hoofdantagonist wordt."
    }), "\n", createVNode(_components.p, {
      children: "De film belooft groter te worden dan zijn voorganger, met meer werelden en\npersonages. Alles wordt strak geheimgehouden door Nintendo en Illumination, wat\nbetekent dat er nog genoeg verrassingen op ons wachten wanneer we de film over\niets meer dan een jaar in de bioscoop kunnen bekijken."
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

const url = "src/content/nieuws/dit-weten-we-al-over-de-nieuwe-super-mario-galaxy-movie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-weten-we-al-over-de-nieuwe-super-mario-galaxy-movie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-weten-we-al-over-de-nieuwe-super-mario-galaxy-movie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
