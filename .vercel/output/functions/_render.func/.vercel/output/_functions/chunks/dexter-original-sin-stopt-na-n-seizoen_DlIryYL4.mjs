import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dexter Original Sin stopt na één seizoen",
  "date": "2025-08-22T21:46:49.868Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1755897902.jpg",
  "trailer": "",
  "slug": "dexter-original-sin-stopt-na-n-seizoen",
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
      children: "Paramount heeft besloten om geen tweede seizoen te maken van de prequelserie\nDexter: Original Sin. Dit nieuws kwam op 22 augustus 2025 naar buiten.\nOorspronkelijk waren er plannen voor een vervolg, maar die zijn nu van tafel\ngeveegd. Het eerste en enige seizoen liep tot februari 2025 en sindsdien is het\nstil geweest rond de serie."
    }), "\n", createVNode(_components.p, {
      children: "In Dexter: Original Sin volgen we een jonge Dexter Morgan, gespeeld door Patrick\nGibson, in de jaren ‘90. Zijn adoptievader Harry, vertolkt door Christian\nSlater, leert hem omgaan met zijn moorddadige impulsen. De serie toont hoe\nDexter uitgroeit tot de volwassen versie die we kennen uit de originele show."
    }), "\n", createVNode(_components.p, {
      children: "De reacties op de prequel waren gemengd. Op Rotten Tomatoes haalde de serie een\nscore van 70%, wat betekent dat sommigen het goed vonden, maar anderen minder\novertuigd waren. Wij hadden gehoopt op meer diepgang in de vroege jaren van\nDexter."
    }), "\n", createVNode(_components.p, {
      children: "Paramount richt zich nu volledig op Dexter: Resurrection, een vervolg op Dexter:\nNew Blood. Michael C. Hall speelt opnieuw de volwassen Dexter en de eerste\naflevering trok meer dan 3 miljoen kijkers in het openingsweekend. Deze\nbeslissing volgt op de samenvoeging van Paramount met Skydance, waarbij het\nnieuwe management de focus verlegde."
    }), "\n", createVNode(_components.p, {
      children: "De originele Dexter-serie liep van 2006 tot 2013, waarna de show terugkeerde met\nNew Blood in 2021. Wij kunnen nu verder kijken naar Resurrection, dat elke\nzondag te zien is op Showtime en Paramount+."
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

const url = "src/content/nieuws/dexter-original-sin-stopt-na-n-seizoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dexter-original-sin-stopt-na-n-seizoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dexter-original-sin-stopt-na-n-seizoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
