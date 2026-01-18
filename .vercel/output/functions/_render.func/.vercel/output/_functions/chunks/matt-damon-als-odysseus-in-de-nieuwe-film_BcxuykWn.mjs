import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Matt Damon als Odysseus in de nieuwe film",
  "date": "2025-02-20T13:04:09.645Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/Matt-Damon-Unveils-First-Look-as-Odysseus-in-Christopher-Nolans-_The-Odyssey_.webp",
  "trailer": "",
  "slug": "matt-damon-als-odysseus-in-de-nieuwe-film",
  "tags": ["Film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Matt Damon is gekozen om de hoofdrol van Odysseus te spelen in de aankomende\nfilm “The Odyssey”, geregisseerd door Christopher Nolan. Nolan heeft een foto de\nwereld in gestuurd waarin we Damon zien in een volledig oude Griekse soldaat\nuniform. Deze film is een nieuw avontuur dat is gebaseerd op het oude verhaal\ngeschreven door de Griekse dichter Homerus. Het vertelt over de spannende reis\nvan Odysseus naar huis, na de Trojaanse Oorlog. Het verhaal is al meer dan 2000\njaar oud."
    }), "\n", createVNode(_components.p, {
      children: "In “The Odyssey” komt Damon samen met een indrukwekkende cast, waaronder Tom\nHolland, Zendaya, Anne Hathaway, Robert Pattinson en Charlize Theron. Hun\nspecifieke rollen in de film zijn nog niet bekendgemaakt. De film moet gefilmd\nworden op verschillende locaties over de hele wereld, maar een belangrijke plek\nzal Sicilië zijn. Deze soort van eiland wordt soms “geiten eiland” genoemd en\nwordt gezien als een belangrijke locatie in het verhaal van Odysseus."
    }), "\n", createVNode(_components.p, {
      children: "Universal Pictures, het bedrijf dat de film uitbrengt, heeft aangekondigd dat\n“The Odyssey” met nieuwe IMAX-technologie zal worden gefilmd. De productie van\nde film zal binnenkort beginnen, met plannen om op 17 juli 2026 in de bioscoop\nte komen."
    }), "\n", createVNode(_components.p, {
      children: ["Matt Damon Griekse Soldaat\n[", createVNode(_components.a, {
        href: "https://people.com/thmb/7kYLp4IugU7lFsBjnsSQjBZX2rI=/750x0/filters:no_upscale():max_bytes(150000%5D:strip_icc():focal(749x0:751x2):format(webp)/matt-damon-the-odyssey-021725-1-33088753391b490b9dddc2ed4beeb46b.jpg)",
        children: "https://people.com/thmb/7kYLp4IugU7lFsBjnsSQjBZX2rI=/750x0/filters:no_upscale():max_bytes(150000]:strip_icc():focal(749x0:751x2):format(webp)/matt-damon-the-odyssey-021725-1-33088753391b490b9dddc2ed4beeb46b.jpg)"
      })]
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

const url = "src/content/nieuws/matt-damon-als-odysseus-in-de-nieuwe-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/matt-damon-als-odysseus-in-de-nieuwe-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/matt-damon-als-odysseus-in-de-nieuwe-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
