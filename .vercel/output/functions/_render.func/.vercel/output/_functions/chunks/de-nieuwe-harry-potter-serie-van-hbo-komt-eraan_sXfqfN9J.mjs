import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Nieuwe Harry Potter Serie van HBO komt eraan!",
  "date": "2025-07-14T16:04:00.107Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1752508432.jpg",
  "trailer": "",
  "slug": "de-nieuwe-harry-potter-serie-van-hbo-komt-eraan",
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
      children: "HBO en Warner Bros. zijn nu officieel begonnen met de productie van de nieuwe\nHarry Potter TV-serie. Wij kijken uit naar deze hervertelling van het verhaal\nvan Harry, Ron en Hermelien. De serie start met “Harry Potter en de Steen der\nWijzen”, waar we zien hoe Harry ontdekt dat hij een tovenaar is, naar Zweinstein\ngaat en zijn iconische vrienden ontmoet."
    }), "\n", createVNode(_components.p, {
      children: "De eerste aflevering staat gepland voor 2027 en wordt opgenomen in Leavesden,\ndezelfde studio nabij Londen waar de originele films zijn gemaakt. De\nhoofdrollen zijn verdeeld: Dominic McLaughlin speelt Harry Potter, Arabella\nStanton is Hermelien Griffel en Alastair Stout vertolkt Ron Wemel. Ook opvallend\nzijn de castingkeuzes van John Lithgow als Albus Perkamentus en Nick Frost als\nRubeus Hagrid."
    }), "\n", createVNode(_components.p, {
      children: "Het plan is ambitieus: zeven seizoenen die elk één boek uit de reeks behandelen.\nHierdoor kunnen de makers dieper ingaan op details die in de films zijn\nweggelaten. Francesca Gardiner leidt het schrijfteam als hoofdschrijver en\nuitvoerend producent, met ervaring uit series als “Succession” en “His Dark\nMaterials”. Regisseur Mark Mylod, bekend van “Game of Thrones”, neemt meerdere\nafleveringen voor zijn rekening."
    }), "\n", createVNode(_components.p, {
      children: "De sets worden momenteel gebouwd en de eerste beelden zijn al vrijgegeven.\nDaarop zien we Dominic McLaughlin in zijn rol als Harry, compleet met de\niconische bril en bliksemschichtlitteken. De voorlopige productietitel “Dark\nTrain” houdt de exacte invulling nog wat mysterieus."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn benieuwd of de serie kan tippen aan de films, die nog steeds immens\npopulair zijn. Het team lijkt vastbesloten een frisse interpretatie neer te\nzetten. Terwijl de productie vordert, blijven we uitkijken naar meer updates\nover deze terugkeer naar de tovenaarswereld."
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

const url = "src/content/nieuws/de-nieuwe-harry-potter-serie-van-hbo-komt-eraan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-harry-potter-serie-van-hbo-komt-eraan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-harry-potter-serie-van-hbo-komt-eraan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
