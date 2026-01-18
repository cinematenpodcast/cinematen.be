import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "F1 film rijdt recht naar de top!",
  "date": "2025-06-30T17:53:46.049Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751302048.jpg",
  "trailer": "",
  "slug": "f1-film-rijdt-recht-naar-de-top",
  "tags": ["Film"]
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
      children: "Apple Original Films heeft met “F1: The Movie” een knaller van formaat\nneergezet. Deze film over de wereld van de Formule 1, onder regie van Joseph\nKosinski, heeft tijdens het openingsweekend wereldwijd zo’n 144 miljoen dollar\nbinnengehaald. Daarmee breekt het alle records voor Apple als filmproducent."
    }), "\n", createVNode(_components.p, {
      children: "Van die 144 miljoen kwam 55.6 miljoen uit de Verenigde Staten en 88.4 miljoen\nuit andere landen. Dit betekent ook een persoonlijk record voor hoofdrolspeler\nBrad Pitt, wiens vorige topopening met “World War Z” op 112 miljoen dollar lag."
    }), "\n", createVNode(_components.p, {
      children: "De timing bleek perfect. Concurrenten zoals “M3GAN 2.0” vielen tegen, waardoor\nmeer kijkers naar “F1” trokken. De film scoort bovendien uitstekend bij critici\nen publiek: op Rotten Tomatoes kreeg het 83% van de recensenten en maar liefst\n97% van het publiek achter zich, plus een A CinemaScore."
    }), "\n", createVNode(_components.p, {
      children: "Naast Pitt spelen ook Javier Bardem en Damson Idris mee. Die mix van ervaring en\nnieuw talent werkt duidelijk. IMAX-theaters droegen flink bij aan de opbrengst,\nwat cruciaal is voor een film met dit budget (250 tot 300 miljoen dollar)."
    }), "\n", createVNode(_components.p, {
      children: "De wereldwijde populariteit van Formule 1 – met ruim 750 miljoen fans – bood\nnatuurlijk een stevige basis. De makers zorgden ervoor dat de film de echte\nracesfeer authentiek overbrengt. Wij zijn benieuwd of Apple dit succes kan\nevenaren met toekomstige projecten."
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

const url = "src/content/nieuws/f1-film-rijdt-recht-naar-de-top.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/f1-film-rijdt-recht-naar-de-top.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/f1-film-rijdt-recht-naar-de-top.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
