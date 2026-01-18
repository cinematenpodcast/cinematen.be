import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jack Quad knalt zonder pijn in de trailer van Novocaine",
  "date": "2024-12-12T17:28:25.736Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734017825.jpg",
  "trailer": "-PyOIlJEdqA",
  "slug": "jack-quad-knalt-zonder-pijn-in-de-trailer-van-novocaine",
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
      children: "Paramount Pictures heeft eerste trailer uitgebracht voor een nieuwe film genaamd\n“Novocaine”. De film is een leuke mix van actie en comedy. De hoofdrol is\nweggelegd voor Jack Quaid, die we kennen van de serie “The Boys”. In deze film\nspeelt hij een man die geen pijn kan voelen en zijn nieuwe vriendin moet redden.\nZij is ontvoerd na een mislukte bankoverval. In de trailer zien we al veel\nactie, omdat hij tegen verschillende bad guys moet vechten. Het bijzondere aan\ndeze man is dat hij, omdat hij geen pijn voelt, op een unieke manier in\ngevechten kan handelen."
    }), "\n", createVNode(_components.p, {
      children: "De trailer geeft naar onze mening wel al wat te veel weg van het plot en de\nactie scenes. Hopelijk hebben ze wat overgehouden voor de film zelf."
    }), "\n", createVNode(_components.p, {
      children: "De film zal duidelijk niet alleen vol actie zal zitten, maar ook veel humor zal\nbevatten. We kijken ernaar uit om deze unieke actiekomedie in de bioscoop te\nzien!"
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

const url = "src/content/nieuws/jack-quad-knalt-zonder-pijn-in-de-trailer-van-novocaine.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jack-quad-knalt-zonder-pijn-in-de-trailer-van-novocaine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jack-quad-knalt-zonder-pijn-in-de-trailer-van-novocaine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
