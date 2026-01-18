import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Heeft Karla Sofía Gascón er voor gezorgd dat ze straks geen Oscarbeeldjes wint?",
  "date": "2025-02-09T12:10:42.459Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/78351433007-20241213-t-072240-z-1406476351-rc-23-obalyuzb-rtrmadp-3-awardssagcelebration.JPG",
  "trailer": "",
  "slug": "heeft-karla-sofa-gascon-er-voor-gezorgd-dat-ze-straks-geen-oscarbeeldjes-wint",
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
      children: "Karla Sofía Gascón, de actrice van de film “Emilia Pérez”, is recentelijk in\nopspraak geraakt door oude social media-posts waarin ze controversiële\nuitspraken deed. Deze tweets zorgden voor veel discussie, vooral nu ze\ngenomineerd is voor een Oscar als beste actrice."
    }), "\n", createVNode(_components.p, {
      children: "Gascón, de eerste openlijk transgender actrice die voor deze prestigieuze prijs\nwordt genomineerd, heeft zich verontschuldigd voor haar eerdere opmerkingen. Ze\nbesloot haar account op X te deactiveren nadat ze zich bedreigd en onder druk\ngezet voelde door de negatieve reacties."
    }), "\n", createVNode(_components.p, {
      children: "De tweets die Gascón hebben in verlegenheid gebracht, bevatten opmerkingen over\nverschillende onderwerpen, waaronder de dood van George Floyd en haar mening\nover de islam. Enkele van de racistische en beledigende tweets die haar\nreputatie aantastten, zijn:"
    }), "\n", createVNode(_components.p, {
      children: "“Islam is geweldig, zonder enige machismo. Vrouwen worden gerespecteerd, maar alleen als ze zich aan bepaalde regels houden. Dit is diep kwetsend voor de mensheid.”"
    }), "\n", createVNode(_components.p, {
      children: "“Ik heb het gevoel dat er in Spanje steeds meer moslims zijn. Elke keer als ik mijn dochter van school haal, zie ik meer vrouwen met bedekte haren.”"
    }), "\n", createVNode(_components.p, {
      children: "“George Floyd was een drugverslaafde oplichter, en zijn dood heeft alleen maar laten zien dat mensen zwarte mensen als apen beschouwen.”"
    }), "\n", createVNode(_components.p, {
      children: "In de wereld van film en entertainment hebben zulke controverses vaak invloed op\nhoe een acteur wordt gezien. Terwijl Gascón zich richt op haar rol in “Emilia\nPérez”, moeten we afwachten wat de impact van deze controversiële tweets is op\nhaar kansen tijdens de Oscars."
    }), "\n", createVNode(_components.p, {
      children: "Wij bij Cinematen hebben al duidelijk gemaakt dat we vinden dat “Emilia Pérez”\ngeen enkele oscarnominatie echt verdient en wij hielden onze vingers al gekruist\ndat deze nominaties dan ook niet werkelijk omgezet zouden worden in gouden\nbeeldjes maar na al deze heisa schatten wij de kansen van Gascón of alle anderen\ndie gekoppeld zijn aan deze film nog zeer laag in."
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

const url = "src/content/nieuws/heeft-karla-sofa-gascon-er-voor-gezorgd-dat-ze-straks-geen-oscarbeeldjes-wint.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/heeft-karla-sofa-gascon-er-voor-gezorgd-dat-ze-straks-geen-oscarbeeldjes-wint.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/heeft-karla-sofa-gascon-er-voor-gezorgd-dat-ze-straks-geen-oscarbeeldjes-wint.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
