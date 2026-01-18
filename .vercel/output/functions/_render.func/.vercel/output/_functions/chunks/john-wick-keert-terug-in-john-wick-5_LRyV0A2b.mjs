import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "John Wick keert terug in John Wick 5",
  "date": "2025-04-03T18:12:17.060Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1743530713.jpg",
  "trailer": "",
  "slug": "john-wick-keert-terug-in-john-wick-5",
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
      children: "De populaire filmserie “John Wick” krijgt nog meer sequels. Keanu Reeves zal\nopnieuw de rol van de vechtersbaas John Wick spelen in “John Wick 5”. Dit werd\naangekondigd tijdens CinemaCon in Las Vegas. Er wordt al lange tijd gespeculeerd\nover de terugkeer van Wick, vooral na het einde van “John Wick: Chapter 4”,\nwaarin Wick leek te zijn overleden."
    }), "\n", createVNode(_components.p, {
      children: "Naast de nieuwe film is er interessant nieuws over spin-offs. Er komt een\nanimatiefilm die teruggaat in de tijd voordat de eerste “John Wick”-film\nplaatsvond. Deze animatie zal het verhaal vertellen van Wick’s ‘Onmogelijke\nTaak’, waarin hij al zijn vijanden in één nacht moet uitschakelen om vrij te\nkomen van de hoge tafel, een machtige organisatie."
    }), "\n", createVNode(_components.p, {
      children: "De spinoff “Ballerina”, met Ana de Armas in de hoofdrol, zal ook binnenkort in\nde bioscoop verschijnen. De film gaat over een ballerina die wordt opgeleid tot\nmoordenaar. In een van de teasers konden wij zien dat het karakter Eve Macarro,\ngespeeld door de Armas, in een nepbordeel flink tekeer gaat tegen verschillende\nbad guys. De Armas heeft hard getraind voor deze rol, met wekenlang intensieve\ntraining in de sportschool en met stunts."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens CinemaCon werd ook bevestigd dat Donnie Yen zijn rol als de blinde\nmoordenaar Caine zal hernemen in een aparte film. Yen zal ook de regie en\nproductie van die film op zich nemen."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn nog niet veel details bekend over het verhaal van “John Wick 5” of de\nandere spin-offs, maar het is duidelijk dat de franchise blijft groeien. “John\nWick: Chapter 2” en “Chapter 3” hebben beide hogere opbrengsten gehaald dan de\neerste film, en “Chapter 4” heeft recordbedragen opgeleverd."
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

const url = "src/content/nieuws/john-wick-keert-terug-in-john-wick-5.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-wick-keert-terug-in-john-wick-5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-wick-keert-terug-in-john-wick-5.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
