import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De eerste trailer van 28 Years Later",
  "date": "2024-12-10T13:27:25.855Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733823491.jpg",
  "trailer": "mcvLKldPM08",
  "slug": "de-eerste-trailer-van-28-years-later",
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
      children: "De eerste trailer van de film 28 Years Later is nu beschikbaar. Deze nieuwe film\nis een vervolg op de bekende films 28 Days Later en 28 Weeks Later. De nieuwe\nfilm wordt gemaakt door regisseur Danny Boyle en schrijver Alex Garland, die ons\n22 jaar geleden al een verhaal gaven over een wereld vol met zombies en\ngevaarlijke virussen. We weten ondertussen dus wel dat ze samen iets speciaals\nkunnen maken."
    }), "\n", createVNode(_components.p, {
      children: "In de nieuwe film worden we meegenomen in een angstaanjagend verhaal dat zich\nafspeelt in hetzelfde universum als de vorige films. De trailer bevat spannende\nbeelden die laten zien hoe de wereld veranderd is in de jaren die zijn\nverstreken. We gaan duidelijk een film krijgen die een stevige indruk zal\nachterlaten. Aaron Taylor-Johnson zien we samen met een jonge kerel door de\nwildernis ploegen, vechtend tegen zombies met pijl en boog. We krijgen ook een\nglimps te zien van Ralph Fiennes. Enkel Cillian Murphy ontbreekt nog in de\ntrailer, hopelijk houden ze zijn reveal tot de film zelf."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat de wereld van de zombie films nog steeds springlevend is en\nwe zijn er klaar voor. De film is eindelijk op weg naar de bioscoop maar we\nmoeten nog even geduld hebben. De release staat gepland voor de zomer van 2025."
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

const url = "src/content/nieuws/de-eerste-trailer-van-28-years-later.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-eerste-trailer-van-28-years-later.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-eerste-trailer-van-28-years-later.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
