import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Superman 2025 Kans op succes of financiële kater?",
  "date": "2025-06-04T20:32:57.061Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749067600.jpg",
  "trailer": "",
  "slug": "superman-2025-kans-op-succes-of-financile-kater",
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
      children: "James Gunn pakt de regie van de nieuwe Superman-film aan, een cruciale eerste\nstap in zijn herstart van het DC-universum. Met een geschat budget van 225\nmiljoen dollar hangt er een zware druk op deze film. Eerdere geruchten over een\nbudget van 363 miljoen dollar werden door Gunn zelf ontkracht."
    }), "\n", createVNode(_components.p, {
      children: "Om de kosten terug te verdienen, moet de film minstens 500 miljoen dollar\nopbrengen aan de internationale kassa. Voor een écht winstgevend succes mikken\nwe echter op meer dan 700 miljoen dollar. Deze cijfers zijn realistisch als je\nbedenkt dat bioscopen doorgaans de helft van de opbrengsten houden en de totale\ninvestering met marketing richting 350 miljoen dollar kan gaan. Ter\nvergelijking: Man of Steel verdiende 668 miljoen dollar met eenzelfde\nproductiebudget."
    }), "\n", createVNode(_components.p, {
      children: "Gunn bouwt verder op zijn succes met de Guardians of the Galaxy-trilogie. Voor\nWarner Bros. is deze film een kans om het tij te keren na tegenvallers zoals\nShazam! Fury of the Gods, The Flash en Blue Beetle. David Corenswet neemt de rol\nvan Clark Kent/Superman over, naast Rachel Brosnahan als Lois Lane en Nicholas\nHoult als Lex Luthor. Gunn schreef zelf het script."
    }), "\n", createVNode(_components.p, {
      children: "De release staat gepland voor 11 juli 2025. We zijn benieuwd naar de nieuwe\ninvulling van Superman en hopen op een frisse start voor het DC-universum."
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

const url = "src/content/nieuws/superman-2025-kans-op-succes-of-financile-kater.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-2025-kans-op-succes-of-financile-kater.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-2025-kans-op-succes-of-financile-kater.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
