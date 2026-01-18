import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Beetlejuice Beetlejuice Trailerjuice",
  "date": "2024-05-27T12:22:28.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/who-unloosed-the-juice-in-beetlejuice-2-1716327898.jpg",
  "trailer": "CoZqL9N6Rx4",
  "slug": "beetlejuice-beetlejuice-de-triomfantelijke-terugkeer-van-de-geest-met-het-meeste",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "beetlejuice-beetlejuice-beeeeeeeeeee",
    "text": "Beetlejuice, Beetlejuice, Beeeeeeeeeee…"
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
      children: "De langverwachte sequel op de cultklassieker Beetlejuice, getiteld “Beetlejuice Beetlejuice”, verschijnt op 6 september in de bioscopen. Het is een film die decennia lang in ontwikkelingshel heeft gezeten voordat hij eindelijk tot stand kwam."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal brengt ons terug naar Winter River, waar drie generaties van de familie Deetz samenkomen na een onverwachte familietragedie. Nog steeds achtervolgd door Beetlejuice, wordt Lydia’s leven ondersteboven gekeerd wanneer haar rebelse tienerdochter Astrid een mysterieus model van de stad ontdekt in de zolder en per ongeluk het portaal naar het Hiernamaals opent. Met problemen die zich afspelen in beide rijken, is het slechts een kwestie van tijd voordat iemand de naam Beetlejuice drie keer zegt en de ondeugende demon terugkeert om zijn eigen vorm van chaos te ontketenen."
    }), "\n", createVNode(_components.p, {
      children: "In deze langverwachte sequel keert Michael Keaton terug in de rol van de titulaire “geest met het meeste”, vergezeld door Winona Ryder als Lydia Deetz, Catherine O’Hara als Lydia’s stiefmoeder Delia, Jenna Ortega als Lydia’s dochter Astrid, Justin Theroux als een man genaamd Rory, Monica Bellucci als de vrouw van Beetlejuice en Willem Dafoe als een wetshandhavingsambtenaar in het hiernamaals."
    }), "\n", createVNode(_components.h2, {
      id: "beetlejuice-beetlejuice-beeeeeeeeeee",
      children: "Beetlejuice, Beetlejuice, Beeeeeeeeeee…"
    }), "\n", createVNode(_components.p, {
      children: "“Beetlejuice Beetlejuice” heeft een lange weg afgelegd voorafgaand aan de uiteindelijke release. In 1990 werd Jonathan Gems ingehuurd om een vervolg te schrijven met de titel “Beetlejuice Goes Hawaiian”. Burton overwoog Daniel Waters om dat script te herschrijven, Pamela Norris deed dat wel, en Warner Bros. bood Kevin Smith de kans om nog een herschrijving te doen, wat hij afsloeg. Seth Grahame-Smith werd ingehuurd om in 2011 een nieuwe versie van een vervolg te schrijven en te produceren. Mike Vukadinovich werd in 2017 ingeschakeld om zijn script te herschrijven."
    }), "\n", createVNode(_components.p, {
      children: "Alfred Gough en Miles Millar, mede-bedenkers en co-showrunners van “Wednesday”, hebben het scenario geschreven voor “Beetlejuice 2”. Brad Pitt’s Plan B produceert het vervolg, dat is gefilmd in Londen voordat het naar Vermont en Massachusetts verhuisde."
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

const url = "src/content/nieuws/beetlejuice-beetlejuice-trailerjuice.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/beetlejuice-beetlejuice-trailerjuice.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/beetlejuice-beetlejuice-trailerjuice.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
