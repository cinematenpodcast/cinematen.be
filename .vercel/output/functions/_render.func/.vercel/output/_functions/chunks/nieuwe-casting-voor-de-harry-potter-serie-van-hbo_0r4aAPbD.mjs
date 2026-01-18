import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Casting voor de Harry Potter Serie van HBO",
  "date": "2025-04-14T20:12:15.558Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1744640806.jpg",
  "trailer": "",
  "slug": "nieuwe-casting-voor-de-harry-potter-serie-van-hbo",
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
      children: "HBO heeft recentelijk de eerste officiële castleden bekendgemaakt voor de nieuwe\nHarry Potter TV-serie. Deze serie is een remake van de beroemde boeken\ngeschreven door J.K. Rowling. Het doel van de serie is om de verhalen uit de\nboeken zo goed mogelijk te volgen en elk boek om te zetten in een seizoen."
    }), "\n", createVNode(_components.p, {
      children: "In de aankondiging zei Francesca Gardiner, de showrunner van de serie, dat ze\nblij zijn met het talent dat ze hebben verzameld. John Lithgow speelt Albus\nDumbledore, het hoofd van Hogwarts; Janet McTeer is Professor Minerva\nMcGonagall; Paapa Essiedu speelt Severus Snape en Nick Frost is Rubeus Hagrid.\nDaarnaast zijn nu ook Luke Thallon als Quirinus Quirrell en Paul Whitehouse als\nArgus Filch gecast."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de casting voor Harry Potter en zijn vrienden, Ron en Hermione, nog niet\nis aangekondigd, verwachten wij dat deze rollen door nieuwkomers zullen worden\nvervuld."
    }), "\n", createVNode(_components.p, {
      children: "De serie is gepland om in 2026 uit te komen, bijna 30 jaar na de publicatie van\nhet eerste boek. Met een mix van ervaren acteurs en nieuw talent, is dit een\nspannend moment voor alle Harry Potter-fans."
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

const url = "src/content/nieuws/nieuwe-casting-voor-de-harry-potter-serie-van-hbo.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-casting-voor-de-harry-potter-serie-van-hbo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-casting-voor-de-harry-potter-serie-van-hbo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
