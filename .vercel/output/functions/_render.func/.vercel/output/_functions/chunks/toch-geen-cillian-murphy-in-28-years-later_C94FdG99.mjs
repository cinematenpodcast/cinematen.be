import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Toch geen Cillian Murphy in \"28 Years Later\"",
  "date": "2025-01-09T21:55:13.856Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1736457255.jpg",
  "trailer": "",
  "slug": "toch-geen-cillian-murphy-in-28-years-later",
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
      children: "Er is al veel te doen geweest rond de film “28 Years Later”, de nieuwste\ntoevoeging aan de populaire zombiefranchise. Veel mensen verwachtten dat Cillian\nMurphy, die bekend is van de eerdere delen, terug zou keren. In de trailer zagen\nwe een zombie die veel lijkt op zijn personage Jim waardoor veel fans dachten\ndat hij deze zombie speelde, maar dat bleek niet waar te zijn. In werkelijkheid\nis de zombie in de trailer gespeeld door Angus Neill, een kunsthandelaar die pas\nnet begint in de filmwereld."
    }), "\n", createVNode(_components.p, {
      children: "Oké, goed, maar waar was Cillian Murphy dan in de trailer? Je zou denken dat de\nBoyle hem wel kort zou teasen om de kijkers al warm te maken voor dit nieuw\nhoofdstuk."
    }), "\n", createVNode(_components.p, {
      children: "Wel, producer Andrew Macdonald heeft net bevestigd dat Murphy niet in “28 Years\nLater” speelt, maar hij hoopt dat Jim op een gegeven moment weer terugkomt in de\nfranchise. Murphy zelf heeft ook al gezegd dat hij openstaat voor een terugkeer\nin een toekomstige film"
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film zal dus wel veel verschillende bekende gezichten tonen, zoals\nRalph Fiennes en Aaron Taylor-Johnson maar jammer genoeg geen Cillian Murphy.\nToch blijven wij met veel enthousiasme uitkijken naar “28 Years Later” die deze\nzomer in de zalen verschijnt."
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

const url = "src/content/nieuws/toch-geen-cillian-murphy-in-28-years-later.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/toch-geen-cillian-murphy-in-28-years-later.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/toch-geen-cillian-murphy-in-28-years-later.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
