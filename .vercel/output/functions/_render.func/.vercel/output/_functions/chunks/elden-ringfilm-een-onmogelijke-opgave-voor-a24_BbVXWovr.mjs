import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Elden Ring-film een onmogelijke opgave voor A24?",
  "date": "2025-05-24T09:53:21.703Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1747959694.jpg",
  "trailer": "",
  "slug": "elden-ringfilm-een-onmogelijke-opgave-voor-a24",
  "tags": ["Film"],
  "summary": "A24 en FromSoftware werken samen aan een live-action Elden Ring film met Alex Garland als regisseur. Maar kan de complexe gamewereld succesvol vertaald worden naar film?"
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
      children: "Er komt een live-action film van Elden Ring, zo bevestigen Bandai Namco en\nDeadline. Het project is een samenwerking tussen FromSoftware, de makers van het\nspel, en filmstudio A24. Alex Garland, bekend van 28 Days Later en Annihilation,\nschrijft het script en regisseert."
    }), "\n", createVNode(_components.p, {
      children: "Elden Ring is een fantasy-game van Hidetaka Miyazaki, mede-bedacht door George\nR.R. Martin. In het spel speel je als een Tarnished die terugkeert naar de Lands\nBetween om de gebroken Elden Ring te herstellen. Deze ring, opgebouwd uit runen\ndie de wereldwetten bepalen, moet je repareren om Elden Lord te worden."
    }), "\n", createVNode(_components.p, {
      children: "De grootste uitdaging? De game heeft een open wereld vol verborgen verhalen en\npersonages die je zelf moet ontdekken. Geen lineair verhaal zoals The Last of Us\nof Fallout, maar een complex web dat spelers zelf ontrafelen. Garland en A24\nstaan bekend om hun experimentele aanpak, denk aan Annihilation met zijn mix van\nsci-fi en horror, of The Green Knight die middeleeuwse folklore\nherinterpreteert. Of dat past bij Miyazaki’s mysterieuze wereld, moet nog\nblijken."
    }), "\n", createVNode(_components.p, {
      children: "Garland werkt momenteel aan een vervolg op 28 Days Later. Wanneer de Elden\nRing-film precies verschijnt, is onduidelijk. Wij kijken er al naar uit, maar\nvragen ons af of een game die draait op player agency überhaupt te vertalen valt\nnaar film. Moet je een hoofdpersonage bedenken? Welk einde kies je uit de game?\nEn hoe breng je de Lands Between visueel tot leven zonder de mystiek te\nverliezen?"
    }), "\n", createVNode(_components.p, {
      children: "A24’s artistieke moed is een pluspunt, maar het risico blijft groot.\nGame-adaptaties hebben vaak moeite om fans tevreden te stellen. Toch hopen we\ndat Garland’s liefde voor complexe verhalen en A24’s visuele durf een unieke\ninterpretatie opleveren. Tot die tijd kunnen we alleen maar speculeren—of\nopnieuw die verschillende game-eindes uitspelen."
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

const url = "src/content/nieuws/elden-ringfilm-een-onmogelijke-opgave-voor-a24.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/elden-ringfilm-een-onmogelijke-opgave-voor-a24.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/elden-ringfilm-een-onmogelijke-opgave-voor-a24.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
