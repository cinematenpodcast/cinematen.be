import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zien we Ewan McGregor terug in Ahsoka seizoen 2?",
  "date": "2025-01-20T21:41:13.793Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1737401683.jpg",
  "trailer": "",
  "slug": "zien-we-ewan-mcgregor-terug-in-ahsoka-seizoen-2",
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
      children: "De spannende serie “Ahsoka” op Disney+ krijgt binnenkort een vervolg met seizoen\n2 en er zijn een paar geruchten over de terugkeer van enkele populaire Star\nWars-personages. Twee van de meest besproken acteurs zijn Ewan McGregor als\nObi-Wan Kenobi en Natalie Portman als Padmé Amidala."
    }), "\n", createVNode(_components.p, {
      children: "De show is in ontwikkeling en er is nog geen officiële releasedatum, maar de\nbuzz groeit hierdoor wel enorm. Laatst zei Kristian Harloff, een bekende\nYouTuber en hollywood insider, dat Erwan McGregor waarschijnlijk zou terugkeren.\nHet idee is dat hij mogelijks een “Force Ghost” zou zijn, net zoals Hayden\nChristensen in het eerste seizoen zo ook weer te zien was als Anakin Skywalker."
    }), "\n", createVNode(_components.p, {
      children: "Naast McGregor’s Kenobi is er ook het gerucht dat Natalie Portman zich mogelijk\nbij terug bij het Star Wars team voegt. Ze speelde Padmé Amidala in de\nprequel-trilogie. In de originele films stierf Padmé na de geboorte van haar\nkinderen, Luke en Leia, waardoor haar terugkeer in een nieuwe aflevering toch\nwat vragen oproept."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl het verhaal zich verder ontwikkelt en er meer nieuwe, spannende verhalen\nin het Star Wars-universum worden verteld, zal het belangrijk zijn om de balans\nte vinden tussen het oude en het nieuwe. Het populaire “Star Wars”-universum is\ndoor de jaren heen veranderd, en de beste verhalen hebben vaak gefocust op\nnieuwe personages. Kijk maar naar de recente Skeleton Crew dat volgens ons de\nbeste Star Wars serie is to date!"
    }), "\n", createVNode(_components.p, {
      children: "De productie van Ashoka seizoen 2 is nog aan de gang maar we kunnen niet wachten\nom te ontdekken wat er in het nieuwe seizoen zal gebeuren."
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

const url = "src/content/nieuws/zien-we-ewan-mcgregor-terug-in-ahsoka-seizoen-2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zien-we-ewan-mcgregor-terug-in-ahsoka-seizoen-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zien-we-ewan-mcgregor-terug-in-ahsoka-seizoen-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
