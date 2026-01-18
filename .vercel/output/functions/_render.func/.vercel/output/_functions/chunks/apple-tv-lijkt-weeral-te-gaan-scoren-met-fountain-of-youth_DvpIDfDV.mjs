import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Apple TV+ lijkt weeral te gaan scoren met Fountain of Youth",
  "date": "2025-04-06T13:13:08.141Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/Apple_TV_Fountain_of_Youth_key_art_graphic_header_16_9_show_home.jpg.og.jpg",
  "trailer": "WocIcqDT8UM",
  "slug": "apple-tv-lijkt-weeral-te-gaan-scoren-met-fountain-of-youth",
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
      children: "Apple TV+ heeft de eerste trailer vrijgegeven voor de film “Fountain of Youth”.\nDeze nieuwe actie-avonturenfilm is gemaakt door regisseur Guy Ritchie. De\nhoofdrollen worden gespeeld door John Krasinski en Natalie Portman. Zij spelen\nde rol van broer en zus, Luke en Charlotte, die op zoek zijn naar de\nlegendarische Bron van de Jeugd. Deze bron staat bekend om zijn magische\neigenschap om mensen hun jeugdigheid terug te geven als ze ervan drinken."
    }), "\n", createVNode(_components.p, {
      children: "In de film zijn Luke en Charlotte geen vrienden. Ze hebben elkaar lange tijd\nniet gesproken, maar het leven dwingt ze om samen te werken aan een grote\noverval. Ze willen de mythische Bron van de Jeugd vinden en daarvoor moeten ze\nhun kennis van de geschiedenis gebruiken. Terwijl ze hun avontuurlijke reis\nmaken, krijgen ze ook hulp van een mysterieuze miljardair. Deze miljardair heeft\nechter waarschijnlijk niet dezelfde doelen als de avontuurlijke broer en zus."
    }), "\n", createVNode(_components.p, {
      children: "De trailer laat al een beetje zien waar de film over gaat. We zien beelden van\nverschillende continenten, wat erop wijst dat het verhaal zich wereldwijd\nafspeelt. Luke, de broer, zegt in de trailer: “Een verhaal, vijf continenten,\ntientallen culturen, over duizenden jaren”."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast zien we Stanley Tucci in de trailer, die de avonturiers waarschuwt.\nHij zegt: “Er is een reden waarom de fontein verborgen is”."
    }), "\n", createVNode(_components.p, {
      children: "De film heeft ook een sterke cast. Naast Krasinski en Portman spelen andere\nbekende acteurs zoals Domhnall Gleeson, Eiza González, Carmen Ejogo en Laz\nAlonso mee. De film is geschreven door James Vanderbilt en is geproduceerd door\nSkydance Media. ele films en series gelanceerd, en “Fountain of Youth” voegt\nzich nu bij deze lijst."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat “Fountain of Youth” het gat dat Indiana Jones heeft\nachtergelaten probeert op te vullen. Wij zijn benieuwd of het Apple TV+ zal\nlukken om hier misschien zelfs een volledige franchise uit te slaan."
    }), "\n", createVNode(_components.p, {
      children: "De film is gepland om op 23 mei 2025 wereldwijd uit te komen op Apple TV+."
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

const url = "src/content/nieuws/apple-tv-lijkt-weeral-te-gaan-scoren-met-fountain-of-youth.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-tv-lijkt-weeral-te-gaan-scoren-met-fountain-of-youth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-tv-lijkt-weeral-te-gaan-scoren-met-fountain-of-youth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
