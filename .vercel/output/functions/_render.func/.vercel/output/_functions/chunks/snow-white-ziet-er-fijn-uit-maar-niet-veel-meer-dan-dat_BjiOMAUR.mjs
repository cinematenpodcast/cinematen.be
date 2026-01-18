import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Snow White ziet er fijn uit, maar niet veel meer dan dat…",
  "date": "2024-12-04T22:13:05.163Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733250602.jpg",
  "trailer": "iV46TJKL8cU",
  "slug": "snow-white-ziet-er-fijn-uit-maar-niet-veel-meer-dan-dat",
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
      children: "Disney blijft maar doorgaan met het maken van live-action versies van hun\nklassieke tekenfilms. Dit gaat al een tijd zo en het lijkt niet te stoppen. Veel\nfans hebben gemengde gevoelens over deze films. Aan de ene kant zijn ze\nmisschien een kans om nieuwe verhalen te vertellen. Aan de andere kant lijkt het\nalsof Disney vooral wil profiteren van de oude films die we allemaal leuk\nvinden."
    }), "\n", createVNode(_components.p, {
      children: "Recent is de eerste lange trailer van “Disney’s Snow White” online gekomen. Dit\nzou normaal gesproken een spannend moment zijn voor kijkers. Maar in plaats van\nblijdschap en enthousiast geklets, voelen veel mensen gewoon niks. Niemand is er\necht hyped voor. Dit laat zien dat de magie van de oude verhalen misschien niet\nmeer zo sterk is zoals vroeger."
    }), "\n", createVNode(_components.p, {
      children: "Dus, wat betekent dit voor de toekomst van Disney? Zullen ze blijven doorgaan\nmet het maken van deze remakes, of zullen ze ook nieuwe ideeën en verhalen\nproberen? Het lijkt erop dat we nog veel meer van deze films gaan zien, maar\nhopelijk komen er ook weer nieuwe originele verhalen. Bekijk de trailer van Snow\nWhite en oordeel zelf maar of het nog de moeite is om zulke klassiekers te\nhermaken in Live Action."
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

const url = "src/content/nieuws/snow-white-ziet-er-fijn-uit-maar-niet-veel-meer-dan-dat.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/snow-white-ziet-er-fijn-uit-maar-niet-veel-meer-dan-dat.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/snow-white-ziet-er-fijn-uit-maar-niet-veel-meer-dan-dat.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
