import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Giancarlo Esposito sluit zich aan bij het Marvel Cinematic Universe",
  "date": "2024-06-01T18:22:59.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1717194686.jpg",
  "trailer": "",
  "slug": "giancarlo-esposito-sluit-zich-aan-bij-de-marvel-cinematic-universe",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-veelzijdige-acteur-in-het-mcu",
    "text": "Een veelzijdige acteur in het MCU"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Giancarlo Esposito, bekend van zijn rollen in series als “Breaking Bad” en “The Mandalorian,” heeft onthuld dat hij binnenkort te zien zal zijn in het Marvel Cinematic Universe. Het is bevestigd dat hij een rol zal spelen in de aankomende film “Captain America: Brave New World,” die gepland staat voor release volgend jaar."
    }), "\n", createVNode(_components.p, {
      children: "Esposito maakte deze aankondiging tijdens een panel op CCXP in Brazilië, waar hij speculaties van fans ontkrachtte over zijn mogelijke rol als Professor X in de verwachte Marvel Cinematic Universe-versie van “X-Men.” Hij benadrukte dat hij een origineel personage zal vertolken in een Marvel-film, wat zorgt voor nieuwe en frisse dynamiek in het universum. De exacte rol die Esposito zal spelen in “Brave New World” blijft nog geheim, maar er wordt gesuggereerd dat het een schurkachtige rol betreft."
    }), "\n", createVNode(_components.p, {
      children: "“Captain America: Brave New World” pakt de verhaallijn op waar “The Falcon and the Winter Soldier” eindigde, met Anthony Mackie die nu de rol van Captain America vervult. Regisseur Julius Onah leidt het project met een cast bestaande uit onder andere Danny Ramirez, Shira Haas, Liv Tyler, Tim Blake Nelson en Rosa Salazar."
    }), "\n", createVNode(_components.p, {
      children: "De film was oorspronkelijk gepland voor release in juli 2024, maar door omstandigheden werd deze datum verplaatst naar Valentijnsdag 2025. Na het afronden van de reguliere opnames voegde Marvel Studios scenarioschrijver Matthew Orton toe om extra pagina’s te schrijven voor de heropnames gepland voor het voorjaar. Het is waarschijnlijk dat Esposito een significante rol zal spelen in deze toegevoegde scènes."
    }), "\n", createVNode(_components.h2, {
      id: "een-veelzijdige-acteur-in-het-mcu",
      children: "Een veelzijdige acteur in het MCU"
    }), "\n", createVNode(_components.p, {
      children: "Giancarlo Esposito heeft zich gevestigd als een veelzijdige acteur met sterke optredens in zowel drama’s als genreseries. Zijn vertolking van Gus Fring in “Breaking Bad” leverde hem drie Emmy-nominaties op, terwijl zijn rol als Moff Gideon in “The Mandalorian” nog twee nominaties opleverde. Daarnaast heeft Esposito diverse andere schurkachtige personages vertolkt in populaire series zoals “The Boys” en animatieseries als “Harley Quinn.”"
    }), "\n", createVNode(_components.p, {
      children: "Naast zijn toetreding tot het Marvel-universum zal Esposito te zien zijn in films als “MaXXXine” en Francis Ford Coppola’s “Megalopolis.” Zijn veelzijdigheid en vermogen om complexe personages tot leven te brengen, maken hem een gewilde acteur in de entertainmentindustrie."
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

const url = "src/content/nieuws/giancarlo-esposito-sluit-zich-aan-bij-het-marvel-cinematic-universe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/giancarlo-esposito-sluit-zich-aan-bij-het-marvel-cinematic-universe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/giancarlo-esposito-sluit-zich-aan-bij-het-marvel-cinematic-universe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
