import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "John Woo De Meester van Actie en Zijn Erfenis",
  "date": "2025-06-09T16:35:40.702Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749482235.jpg",
  "trailer": "",
  "slug": "john-woo-de-meester-van-actie-en-zijn-erfenis",
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
      children: "John Woo is een legende in de actiefilmwereld. Zijn invloed op actiescènes is\nenorm. Woo begon in de jaren ‘80 en brak door met “A Better Tomorrow” in 1986.\nZijn unieke stijl, vol slow motion, inspireerde filmmakers zoals Quentin\nTarantino."
    }), "\n", createVNode(_components.p, {
      children: "Een van zijn bekendste technieken is het gebruik van meerdere camera’s. Hierdoor\nfilmt hij actiescènes vanuit verschillende hoeken. Wij zien shootouts en\nachtervolgingen als een opera. Deze stijl is terug te vinden in “Hard Target”\nuit 1993, met Jean-Claude van Damme. Ondanks productieproblemen was de film een\nsucces en voldeed aan onze verwachtingen."
    }), "\n", createVNode(_components.p, {
      children: "Woo’s films kenmerken zich door creatief locatiegebruik. Hij tovert een omgeving\nom tot spannend actietoneel. In “Hard Boiled” (1992) is er een iconische\nziekenhuisschietpartij, bijna volledig in één shot gefilmd. Dit houdt onze\naandacht vast. Ook gebruikt hij religieuze beelden, zoals duiven in de\nkerkfinale van “The Killer” (1989) met Chow Yun Fat, wat de actie diepgang\ngeeft."
    }), "\n", createVNode(_components.p, {
      children: "Tegenwoordig gebruiken filmmakers zoals Dan Trachtenberg Woo’s technieken.\nTrachtenberg maakte de vernieuwende “Prey” (2022) voor de Predator-franchise,\neen hit op Hulu. Dit leverde hem meer projecten op: “Predator: Badlands” en de\nanimatiefilm “Predator: Killer of Killers”. In “Killer of Killers” is de\nanimatie prachtig, als levende kunst. Trachtenberg implementeert elementen uit\nHong Kong-actiefilms van de jaren ‘80 en ‘90. Door animatie kan hij actiescènes\nmaken die in live-action moeilijk zijn."
    }), "\n", createVNode(_components.p, {
      children: "Trachtenberg werkt met een team gespecialiseerd in actie-vooruitzichten. Zo\ncreëren ze indrukwekkende scènes zonder traditionele beperkingen. De actie in\n“Killer of Killers” lijkt soms op een grote spelshow, wat nieuwe ervaringen\nbiedt. Verhalen van Woo en Trachtenberg draaien om underdogs. Wij verbinden met\nverhalen over overwinning en moed. Vijanden, zoals de Predator, zoeken de\nsterkste tegenstander, waardoor de hoofdpersoon moet groeien."
    }), "\n", createVNode(_components.p, {
      children: "Woo’s stijl en Trachtenbergs methoden tonen het belang van creativiteit. Ze\nverbeterden het actiegenre en vertelden verhalen die ons blijven boeien. Zo\nverhogen ze onze verwachtingen en tonen ze dat actiefilms altijd in beweging\nzijn."
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

const url = "src/content/nieuws/john-woo-de-meester-van-actie-en-zijn-erfenis.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-woo-de-meester-van-actie-en-zijn-erfenis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/john-woo-de-meester-van-actie-en-zijn-erfenis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
