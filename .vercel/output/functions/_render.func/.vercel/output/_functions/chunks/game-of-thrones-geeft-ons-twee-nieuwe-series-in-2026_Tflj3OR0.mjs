import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Game of Thrones geeft ons twee nieuwe series in 2026",
  "date": "2025-09-16T14:21:00.281Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758027743.jpg",
  "trailer": "",
  "slug": "game-of-thrones-geeft-ons-twee-nieuwe-series-in-2026",
  "tags": ["TV"]
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
      children: "Wij als Game of Thrones-fans krijgen in 2026 maar liefst twee nieuwe series te\nzien die zich afspelen in de wereld van Westeros. HBO-baas Casey Bloys heeft\nbevestigd dat zowel ‘A Knight of the Seven Kingdoms’ als het derde seizoen van\n‘House of the Dragon’ dat jaar uitkomen."
    }), "\n", createVNode(_components.p, {
      children: "In januari 2026 start ‘A Knight of the Seven Kingdoms’, een prequel die zich 90\njaar vóór de gebeurtenissen van Game of Thrones afspeelt. De serie volgt de\navonturen van ridder Ser Duncan de Lange en zijn jonge hulpje Egg, die eigenlijk\neen jonge Targaryen-prins is. Het verhaal is gebaseerd op de boeken van George\nR.R. Martin en telt zes afleveringen, grotendeels gebaseerd op ‘The Hedge\nKnight’."
    }), "\n", createVNode(_components.p, {
      children: "Later in 2026, waarschijnlijk na 31 mei, volgt dan het derde seizoen van ‘House\nof the Dragon’. Dit seizoen belooft veel actie met de Slag bij de Gullet en\ndraait opnieuw rond de Targaryen-familie en hun draken."
    }), "\n", createVNode(_components.p, {
      children: "De planning is bijzonder omdat dit de eerste keer is dat twee series uit de Game\nof Thrones-wereld in hetzelfde jaar uitkomen. ‘A Knight of the Seven Kingdoms’\nwas oorspronkelijk gepland voor 2025, maar is verschoven naar 2026. De opnames\nzijn reeds afgerond, terwijl ‘House of the Dragon’ seizoen drie momenteel nog in\nproductie is."
    }), "\n", createVNode(_components.p, {
      children: "De keuze om ‘House of the Dragon’ na 31 mei uit te brengen, heeft te maken met\nde eligibility voor de Emmy Awards. Series moeten voor die datum uitgezonden\nzijn om in aanmerking te komen voor nominaties."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar een boeiend jaar vol Westeros-avonturen, maar hopen dat de\nkwaliteit van beide series het wachten meer dan waard zal maken."
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

const url = "src/content/nieuws/game-of-thrones-geeft-ons-twee-nieuwe-series-in-2026.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/game-of-thrones-geeft-ons-twee-nieuwe-series-in-2026.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/game-of-thrones-geeft-ons-twee-nieuwe-series-in-2026.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
