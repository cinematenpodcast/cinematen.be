import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Caught Stealing is een verfrissende komedie van Darren Aronofsky",
  "date": "2025-08-27T13:36:31.055Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755627835.jpg",
  "trailer": "",
  "slug": "caught-stealing-is-een-verfrissende-komedie-van-darren-aronofsky",
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
      children: "Vanaf 29 augustus 2025 kunnen we in de bioscoop kijken naar “Caught Stealing”,\neen nieuwe film van Darren Aronofsky. Hij is bekend van serieuze films zoals\n“Black Swan” en “Requiem for a Dream”, maar deze keer pakt hij het anders aan.\nHet is een comedy over misdaad, wat een verrassende wending is voor de\nregisseur."
    }), "\n", createVNode(_components.p, {
      children: "Austin Butler speelt de hoofdrol als Hank Thompson, een voormalig baseballspeler\nwiens carrière eindigde door een auto-ongeluk. Nu werkt hij in een bar in New\nYork, tot zijn buurman Russ – gespeeld door Matt Smith met een opvallende\npunk-mohawk – hem vraagt om op zijn kat te passen. Al snel belandt Hank in de\nproblemen wanneer criminelen, zoals de Russische maffia en twee Joodse gangsters\n(vertolkt door Vincent D’Onofrio en Liev Schreiber), op zoek gaan naar iets in\nRuss’ appartement."
    }), "\n", createVNode(_components.p, {
      children: "Andere bekende gezichten in de film zijn Zoë Kravitz als Hanks vriendin en Bad\nBunny als een gangster. Maar de echte ster is de kat Bud, gespeeld door een\nechte kat genaamd Tonic, die een centrale rol speelt in het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "De film speelt zich af in het New York van 1998, met oude gebouwen en winkels\ndie nu verdwenen zijn. De jaren 90-muziek zal bij velen herkenning oproepen.\nHoewel Aronofsky normaal gesproken serieuze films maakt, is “Caught Stealing”\nluchtiger van toon, al zitten er ook spannende en gewelddadige momenten in\nwaarin Hank voor zijn leven moet rennen."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal is gebaseerd op een boek van Charlie Huston, die ook het script\nschreef. Wat we in de trailer zien, is wat we krijgen: een rechttoe rechtaan\nverhaal over een man die probeert te overleven terwijl hij voor een kat zorgt.\nAustin Butler, die eerder Elvis Presley speelde, laat hier een andere kant van\nzich zien als een gewone man met pech. Matt Smith valt op met zijn\npunk-uiterlijk en de rest van de cast lijkt plezier te hebben in hun rollen."
    }), "\n", createVNode(_components.p, {
      children: "“Caught Stealing” is geen perfecte film – soms is het verhaal wat voorspelbaar –\nmaar het is een leuke, op zichzelf staande film voor volwassenen die niet tot\neen groot franchise behoort. Met veel actie, humor en een vleugje romantiek is\nhet een aanrader voor wie van actiecomedies houdt. We kunnen gewoon ontspannen\nen meegenieten van de avonturen van Hank en zijn kat."
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

const url = "src/content/nieuws/caught-stealing-is-een-verfrissende-komedie-van-darren-aronofsky.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/caught-stealing-is-een-verfrissende-komedie-van-darren-aronofsky.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/caught-stealing-is-een-verfrissende-komedie-van-darren-aronofsky.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
