import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Austin Butler als Patrick Bateman in American Psycho",
  "date": "2024-12-11T19:41:10.073Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733944924.jpg",
  "trailer": "",
  "slug": "austin-butler-als-patrick-bateman-in-american-psycho",
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
      children: "We hebben casting nieuws over de nieuwe film ‘American Psycho’ gekregen. De\nbekende regisseur Luca Guadagnino gaat deze film maken en de grote rol van\nPatrick Bateman is nu gegeven aan Austin Butler. Je kent Austin misschien van\nzijn rol als Elvis in de film ‘Elvis’ of als Feyd-Rautha uit Dune."
    }), "\n", createVNode(_components.p, {
      children: "Toen het nieuws over de film bekend werd, waren veel mensen benieuwd wie Patrick\nBateman zou gaan spelen. Veel namen werden besproken. Jacob Elordi, die populair\nis vanwege films zoals ‘Saltburn’ en ‘Priscilla’, werd vaak genoemd als een van\nde mogelijke acteurs. Ook andere acteurs zoals Robert Pattinson en Mike Faist\nwerden in de gesprekken meegenomen. Maar uiteindelijk is het Austin Butler die\ndeze uitdagende rol krijgt."
    }), "\n", createVNode(_components.p, {
      children: "Patrick Bateman is een interessant personage. Hij is een rijke zakenman die in\nNew York City leeft. Maar onder zijn luxe leven schuilt een duistere kant. In de\noriginele film, die in 2000 uitkwam met Christian Bale in de hoofdrol, zagen we\nal hoe complex dit karakter is. Veel mensen zijn benieuwd hoe Austin Butler deze\nrol zal vormgeven en of hij het kan evenaren."
    }), "\n", createVNode(_components.p, {
      children: "Het zal interessant zijn om te zien hoe hij het gaat doen als Patrick Bateman,\ndie zo anders is dan bijvoorbeeld Elvis."
    }), "\n", createVNode(_components.p, {
      children: "Met de keuze voor Austin Butler en de visie van Luca Guadagnino hopen we op een\nfrisse en spannende versie van het verhaal van ‘American Psycho’."
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

const url = "src/content/nieuws/austin-butler-als-patrick-bateman-in-american-psycho.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/austin-butler-als-patrick-bateman-in-american-psycho.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/austin-butler-als-patrick-bateman-in-american-psycho.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
