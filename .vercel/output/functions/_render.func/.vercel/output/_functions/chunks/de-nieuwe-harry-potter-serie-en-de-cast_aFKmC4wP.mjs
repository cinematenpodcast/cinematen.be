import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Nieuwe Harry Potter Serie en de Cast",
  "date": "2025-02-13T06:31:44.758Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1739397856.jpg",
  "trailer": "",
  "slug": "de-nieuwe-harry-potter-serie-en-de-cast",
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
      children: "De nieuwe Harry Potter TV-serie komt eraan en er zijn al spannende nieuwtjes\nover de cast. De rol van Albus Dumbledore, de slimme en mysterieuze hoofd van\nZweinsteins Hogeschool voor Hekserij en Hocus-Pocus, heeft de aandacht\ngetrokken. John Lithgow, een beroemde acteur die al meerdere prijzen heeft\ngewonnen, staat in de belangstelling om deze rol te spelen. Dit zou bijzonder\nzijn, want hij zou de eerste Amerikaanse acteur zijn die Dumbledore speelt."
    }), "\n", createVNode(_components.p, {
      children: "Vroeger waren alle acteurs die Dumbledore speelden Britten. Richard Harris was\nde eerste, gevolgd door Michael Gambon. Jude Law speelde een jongere versie van\nDumbledore in de Fantastic Beasts films. De originele films gingen de wereld\nrond, en nu heeft HBO besloten om een nieuwe serie te maken gebaseerd op de\nboeken van J.K. Rowling."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe serie wil alle zeven boeken in zeven seizoenen behandelen. Dit\nbetekent dat elke serie een jaar zal duren en het verhaal van Harry, Ron en\nHermelien zal volgen. De makers van de serie hebben al gezegd dat ze nieuwe\nacteurs willen zoeken voor de hoofdrollen. Een open casting oproep is gedaan\nvoor kinderen tussen de 9 en 11 jaar oud om te auditeren voor de rollen van\nHarry, Ron en Hermelien."
    }), "\n", createVNode(_components.p, {
      children: "HBO heeft nog niet veel details bekendgemaakt. Het netwerk heeft gezegd dat er\nveel geruchten zijn en dat ze pas bevestigingen geven als er deals zijn\ngesloten. Daarom is het ook nog niet zeker of Lithgow de rol van Dumbledore\ndaadwerkelijk zal krijgen, zelfs al is hij in gesprek voor de rol."
    }), "\n", createVNode(_components.p, {
      children: "De serie begint met de voorbereidingen en wordt verwacht in 2027 op HBO. Het\nverhaal van Harry Potter gaat over een jongen die in een wereld vol magie leeft\nen het opneemt tegen de slechterik Voldemort. Wij hopen dat de nieuwe serie\ntrouw blijft aan de originele boeken en de belangrijke momenten daarin laat\nzien."
    }), "\n", createVNode(_components.p, {
      children: "Tot nu toe zijn er geen andere casting nieuwtjes bekendgemaakt, maar onze\nnieuwsgierigheid blijft groeien. De nieuwe rol van Dumbledore is een groot\nonderdeel van de serie, en wij zijn benieuwd naar hoe de casting verder zal\nverlopen."
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

const url = "src/content/nieuws/de-nieuwe-harry-potter-serie-en-de-cast.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-harry-potter-serie-en-de-cast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-harry-potter-serie-en-de-cast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
