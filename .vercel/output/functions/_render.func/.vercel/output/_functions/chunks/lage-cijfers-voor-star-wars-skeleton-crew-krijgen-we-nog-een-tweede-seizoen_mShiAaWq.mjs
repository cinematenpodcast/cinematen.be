import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lage cijfers voor Star Wars Skeleton Crew, krijgen we nog een tweede seizoen?",
  "date": "2025-01-14T22:25:12.586Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1736879615.jpg",
  "trailer": "",
  "slug": "lage-cijfers-voor-star-wars-skeleton-crew-krijgen-we-nog-een-tweede-seizoen",
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
      children: "Star Wars: Skeleton Crew is een nieuwe serie die op Disney+ te zien is. De serie\nheeft veel aandacht gekregen, vooral omdat het van de regisseur van Spider-Man,\nJon Watts, is emet de topacteur Jude Law in één van de hoofdrollen. De serie\nvertelt het verhaal over een groep kinderen die op avontuur gaan in het Star\nWars-universum."
    }), "\n", createVNode(_components.p, {
      children: "In de eerste week dat Skeleton Crew op de streamingdienst kwam, waren de\nkijkcijfers de laagste van alle Star Wars-series tot nu toe. De serie heeft\nzelfs niet genoeg kijkers gehad om in de top 10 van Disney+ te komen. Het aantal\nminuten dat naar de eerste twee afleveringen is gekeken, was minder dan 382\nmiljoen. Dit is 20% minder dan de vorige serie, The Acolyte, die ook slecht\npresteerde."
    }), "\n", createVNode(_components.p, {
      children: "De reacties van kijkers op Skeleton Crew zijn gemengd. Wij vinden het alvast een\ngeslaagde serie die een leuk en intrigerend verhaal vertelt zonder al te veel\nonnodig ingewikkelde lore mee te geven. De jonge acteurs in de serie, zoals Ravi\nCabot-Conyers en Ryan Kiera Armstrong, hebben ook veel positieve aandacht\ngekregen. Ze brengen frisse energie naar het verhaal, maar zelfs dat heeft niet\ngeholpen om de kijkers aan te trekken."
    }), "\n", createVNode(_components.p, {
      children: "Vanwege de lage kijkcijfers is er nu onzekerheid over een tweede seizoen van\nSkeleton Crew. Disney heeft niet duidelijk gemaakt wat de toekomst voor de show\nis, en dat is zorgwekkend. Als de kijkcijfers niet verbetert, lijkt het\nmisschien zelfs dat Disney minder nieuwe originele series wil maken en ze alleen\nterug willen grijpen naar bekende verhalen en populaire personages."
    }), "\n", createVNode(_components.p, {
      children: "We hopen dat de makers hun verhaal kunnen voortzetten. De Star Wars-franchise\nkent veel ups en downs, maar Skeleton Crew was nu net één van betere pogingen.\nHet blijft dus afwachten wat de toekomst zal brengen voor deze avontuurlijke\nserie."
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

const url = "src/content/nieuws/lage-cijfers-voor-star-wars-skeleton-crew-krijgen-we-nog-een-tweede-seizoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lage-cijfers-voor-star-wars-skeleton-crew-krijgen-we-nog-een-tweede-seizoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lage-cijfers-voor-star-wars-skeleton-crew-krijgen-we-nog-een-tweede-seizoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
