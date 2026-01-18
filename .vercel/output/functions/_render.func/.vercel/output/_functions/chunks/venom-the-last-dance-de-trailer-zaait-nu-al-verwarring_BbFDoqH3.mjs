import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Venom: The Last Dance, de trailer zaait nu al verwarring",
  "date": "2024-06-04T11:39:29.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/eddie-and-venom-will-perform-their-last-tango-this-fall-1717419930.jpg",
  "trailer": "__2bjWbetsA",
  "slug": "venom-the-last-dance---een-diepere-duik-in-de-verwarring-rondom-het-mcu",
  "tags": ["film", "trailer", "comics"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "maar-er-is-nu-al-verwarring-rond-de-film",
    "text": "Maar er is nu al verwarring rond de film"
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
      children: "De aankomende film “Venom: The Last Dance” belooft zowel meer actie als meer verwarring voor Marvel-fans. Tom Hardy keert terug als Eddie Brock, een journalist die een symbiotische band deelt met de alien Venom."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal in de trailer onthult dat Eddie en Venom op de vlucht zijn als voortvluchtigen, met een plot dat hen dwingt tot een cruciale beslissing die mogelijk hun laatste “dans” samen betekent. De spanning stijgt wanneer meer symbioten naar de aarde komen en Venom waarschuwt dat “zijn thuis hen heeft gevonden.”"
    }), "\n", createVNode(_components.h2, {
      id: "maar-er-is-nu-al-verwarring-rond-de-film",
      children: "Maar er is nu al verwarring rond de film"
    }), "\n", createVNode(_components.p, {
      children: "Eén specifiek moment in de trailer heeft Marvel-fans in verwarring gebracht. In een bar wordt Cristo Fernández kort getoond met een stukje alien symbioot op de toonbank, dat vervolgens wordt opgepakt door een personage gespeeld door Chiwetel Ejiofor."
    }), "\n", createVNode(_components.p, {
      children: "Dit fragment lijkt voort te vloeien uit de scène na de aftiteling van “Spider-Man: No Way Home”, die zich in het Marvel Cinematic Universe plaatsvindt in een ander universum dan de ‘Venom’-serie van Sony. In de post-credit scène praat Eddie Brock, gespeeld door Hardy, met het personage van Fernández in een bar. Wanneer Eddie vervolgens terugkeert naar zijn universum - de wereld van de “Venom”-franchise - blijft er een stukje van het symbioot achter in het MCU."
    }), "\n", createVNode(_components.p, {
      children: "Deze scène suggereerde een verhaallijn voor de volgende “Spider-Man” film waarin Tom Holland’s Peter Parker wordt geconfronteerd met het Venom symbioot in zijn wereld."
    }), "\n", createVNode(_components.p, {
      children: "Fans raakten in de war door de suggestie in de trailer van “The Last Dance” dat de bar zich bevindt in het ‘Venom’-universum, niet het MCU, terwijl “No Way Home” het tegenovergestelde leek te impliceren."
    }), "\n", createVNode(_components.p, {
      children: "Sommigen hebben kritiek geuit op de inconsistenties tussen de twee franchises, met vragen over hoe deze verhaallijnen kunnen samenkomen. De mogelijke implicaties van deze discrepantie blijven voorlopig nog onbeantwoord."
    }), "\n", createVNode(_components.p, {
      children: "Dit is echter niet de eerste keer dat er zo’n duidelijke fout in continuïteit wordt begaan in het Sony universum. Eerder verscheen in de post-credits scène van Morbius ook al het personage van de Vulture, die eerder vertolkt werd door Michael Keaton in Spider-Man: Homecoming. Dit sloeg er op dat Morbius zich in de MCU afspeelde maar in een eerdere scène in de film deed Michael Morbius een verwijzing naar Venom. Het is dus duidelijk dat Sony zelf niet goed weet hoe alles nu in elkaar zit."
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

const url = "src/content/nieuws/venom-the-last-dance-de-trailer-zaait-nu-al-verwarring.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/venom-the-last-dance-de-trailer-zaait-nu-al-verwarring.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/venom-the-last-dance-de-trailer-zaait-nu-al-verwarring.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
