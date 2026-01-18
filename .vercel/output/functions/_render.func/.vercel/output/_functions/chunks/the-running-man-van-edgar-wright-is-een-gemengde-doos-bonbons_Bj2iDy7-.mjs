import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Running Man van Edgar Wright is een gemengde doos bonbons",
  "date": "2025-11-11T19:18:52.140Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762875802.jpg",
  "trailer": "",
  "slug": "the-running-man-van-edgar-wright-is-een-gemengde-doos-bonbons",
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
      children: "Edgar Wright brengt met “The Running Man” een nieuwe actiefilm in de bioscoop op\n14 november 2025. Glen Powell speelt de hoofdrol van Ben Richards, een vader in\neen dystopische toekomst waar een grote tv-zender bijna alles bestuurt. Zonder\nwerk en met een ziek dochtertje dat dure medicijnen nodig heeft, ziet Ben zich\ngedwongen om mee te doen aan een gevaarlijk tv-spel."
    }), "\n", createVNode(_components.p, {
      children: "The Running Man belooft veel geld voor wie wint, maar bijna niemand overleeft de\n30 dagen waarin deelnemers moeten vluchten voor jagers en verraders. Ben moet\nconstant nieuwe plaatsen opzoeken en verschillende mensen vertrouwen - sommigen\nhelpen hem, anderen moet hij bevechten."
    }), "\n", createVNode(_components.p, {
      children: "De film is gebaseerd op Stephen Kings boek en volgt het originele verhaal beter\ndan de eerdere versie met Arnold Schwarzenegger. In tegenstelling tot die film\ntoont deze Ben als een complexer personage die tussen goed en kwaad balanceert."
    }), "\n", createVNode(_components.p, {
      children: "Edgar Wright, bekend van films zoals Shaun of the Dead en Baby Driver, toont\nopnieuw zijn talent voor dynamische actiescènes. Toch vinden we sommige scènes\nte donker en onduidelijk, wat het volgen van de actie bemoeilijkt."
    }), "\n", createVNode(_components.p, {
      children: "Naast Powell zien we Josh Brolin als de sinistere tv-baas Dan Killian, Lee Pace\nals gemaskerde jager en Colman Domingo als spelpresentator. Katy O’Brian en\nMichael Cera verschijnen als bondgenoten van Ben tijdens zijn vlucht."
    }), "\n", createVNode(_components.p, {
      children: "De film heeft een duidelijke maatschappelijke boodschap over economische\nongelijkheid en de ethiek van reality-tv. The Running Man voelt soms aan als een\ncomputerspel waarin Ben van level naar level gaat, compleet met gevechten en\nontsnappingen."
    }), "\n", createVNode(_components.p, {
      children: "De recensies zijn verdeeld: waar de ene criticus slechts 5 op 10 punten geeft,\nwaarderen anderen de film met 3 van de 4 sterren. Met een R-rating wegens geweld\nis dit duidelijk geen film voor jonge kijkers, maar voor wie van actie houdt,\nbiedt The Running Man zeker spanning."
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

const url = "src/content/nieuws/the-running-man-van-edgar-wright-is-een-gemengde-doos-bonbons.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-running-man-van-edgar-wright-is-een-gemengde-doos-bonbons.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-running-man-van-edgar-wright-is-een-gemengde-doos-bonbons.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
