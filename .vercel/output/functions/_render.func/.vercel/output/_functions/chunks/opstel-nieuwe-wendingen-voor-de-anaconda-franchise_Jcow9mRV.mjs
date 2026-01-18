import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er is een Chinese versie van de cult klassieker Anaconda",
  "date": "2024-03-29T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/anaconda-but-made-in-china-1711469584.jpg",
  "trailer": "3HuZY5Rbjs0",
  "slug": "er-is-een-chinese-versie-van-de-cult-klassieker-anaconda",
  "draft": false,
  "tags": ["film", "trailer"]
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
      children: "De iconische creature feature film uit 1997, Anaconda, blijft nog bijna 30 jaar later het publiek boeien met nieuwe ontwikkelingen. Na drie vervolgfilms en een spin-off crossover-film is er nu niet alleen een nieuwe film in ontwikkeling, maar wordt de franchise ook nieuw leven ingeblazen met een Chinese remake. De upcoming Anaconda-film, geregisseerd door Xiang Qui Liang en Xiang He Sheng, heeft zojuist zijn eerste trailer uitgebracht, beladen met chaos veroorzaakt door gigantische slangen."
    }), "\n", createVNode(_components.p, {
      children: "In het origineel draait alles om een filmcrew die gegijzeld wordt door een gestoorde jager, die hen dwingt mee te gaan op zijn missie om de grootste en gevaarlijkste slang ter wereld te vangen. De Chinese remake lijkt een soortgelijke verhaallijn te volgen, met de focus op een reptiel genaamd de Scarlet Naga. Een interessante twist in vergelijking met de originele film is dat deze versie zombies lijkt te bevatten."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich af rond een groep circusartiesten die denken onderweg te zijn naar een nieuwe locatie voor hun optreden. Ze raken echter gestrand in een weelderig regenwoud nadat het schip waarop ze reisden en de kapitein die hen leidde, zijn opgegeten en vernietigd door een anaconda. Ze komen in contact met een dodelijke stroper die jaagt op de anaconda en beseft dat hij nu genoeg aas heeft om het beest te vangen. Dankzij hun circusachtergrond hebben de artiesten echter enkele overlevingstrucs achter de hand."
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

const url = "src/content/nieuws/opstel-nieuwe-wendingen-voor-de-anaconda-franchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/opstel-nieuwe-wendingen-voor-de-anaconda-franchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/opstel-nieuwe-wendingen-voor-de-anaconda-franchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
