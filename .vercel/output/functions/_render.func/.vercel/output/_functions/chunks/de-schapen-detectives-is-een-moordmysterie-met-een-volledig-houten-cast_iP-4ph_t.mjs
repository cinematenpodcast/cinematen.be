import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Sheep Detectives is een moordmysterie met een volledig schapen cast",
  "date": "2025-12-18T19:18:34.247Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/dcaf7d59-86e3-41ae-9e35-b527cdeb165b",
  "trailer": "pyZI5oM6hWk",
  "slug": "de-scheep-detectives-is-een-moordmysterie-met-een-volledig-schapen-cast"
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
      children: "Er komt een grappige nieuwe film aan genaamd ‘De Schapen Detectives’. Hierin\nspeelt Hugh Jackman de herder George, die elke avond detectiveverhalen voorleest\naan zijn kudde. Hij denkt dat ze het niet begrijpen, maar wanneer de schapen hem\nop een dag dood aantreffen in het veld, besluiten ze de moord zelf op te lossen\nmet alle kennis die ze uit de boeken hebben opgedaan."
    }), "\n", createVNode(_components.p, {
      children: "Amazon MGM Studios bracht afgelopen donderdag de trailer online en maakte bekend\ndat de film op 8 mei 2026 in de bioscoop komt. Het is een mysteriefilm met een\nongewoon team van detectives."
    }), "\n", createVNode(_components.p, {
      children: "De schapen in de film zijn geen echte dieren, maar CGI-creaties. Normaal\ngesproken vinden wij dat niet altijd even geslaagd, maar in dit geval hebben ze\neen cruciale rol: het oplossen van een moord. Het is een origineel en leuk\nconcept."
    }), "\n", createVNode(_components.p, {
      children: "De cast is behoorlijk indrukwekkend. Naast Hugh Jackman als herder George,\nspelen Nicholas Braun als een niet-zo-bekwame politieagent, Molly Gordon, Hong\nChau, Emma Thompson, Nicholas Galitzine en Julia-Louis Dreyfus mee. De stemmen\nvan de schapen worden ingesproken door een sterrenlijst aan acteurs, met Julia\nLouis-Dreyfus als schaap Lily, en Bryan Cranston, Chris O’Dowd, Regina Hall,\nPatrick Stewart, Bella Ramsey, Brett Goldstein en Rhys Darby."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geregisseerd door Kyle Balda, bekend van zijn werk aan de\nMinions-films en Despicable Me 3. Dit is zijn eerste live-action film. Het\nscript is van Craig Mazin, die ook meeschreef aan series zoals ‘The Last of Us’\nen ‘Chernobyl’. Het verhaal is gebaseerd op het boek ‘Three Bags Full’ uit 2005\nvan Leonie Swann."
    }), "\n", createVNode(_components.p, {
      children: "Op CinemaCon, een grote beurs voor de filmindustrie, lieten Hugh Jackman en Emma\nThompson eerder dit jaar al beelden zien. Jackman omschreef de film als een\nwhodunit met veel hart."
    }), "\n", createVNode(_components.p, {
      children: "Jackman zelf heeft het trouwens druk. Nog voor ‘De Schapen Detectives’ uitkomt,\nis hij te zien in ‘Song Sung Blue’ op 25 december dit jaar en werkt hij aan ‘The\nDeath of Robin Hood’ voor juni 2026."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geproduceerd door Lindsay Doran, Tim Bevan en Eric Fellner. In de\npraktijk moeten de schapen hun geliefde herder wrezen omdat de politie het niet\nvoor elkaar krijgt. Wij zijn benieuwd of deze grappige insteek en de sterrencast\ngaan zorgen voor een geslaagd bioscoopbezoek in het voorjaar van 2026."
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

const url = "src/content/nieuws/de-schapen-detectives-is-een-moordmysterie-met-een-volledig-houten-cast.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-schapen-detectives-is-een-moordmysterie-met-een-volledig-houten-cast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-schapen-detectives-is-een-moordmysterie-met-een-volledig-houten-cast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
