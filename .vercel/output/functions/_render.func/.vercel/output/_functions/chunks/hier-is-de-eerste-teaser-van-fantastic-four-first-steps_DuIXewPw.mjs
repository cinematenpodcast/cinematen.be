import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier is de eerste teaser van Fantastic Four First Steps",
  "date": "2025-02-05T21:22:56.187Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/fantastic-four-first-steps-trailer.jpg",
  "trailer": "AzMo-FgRp64",
  "slug": "hier-is-de-eerste-teaser-van-fantastic-four-first-steps",
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
      children: "De eerste teaser trailer van Fantastic Four: First Steps is verschenen en wij\nzijn hyped. Deze film, die in de Marvel Cinematic Universe (MCU) valt, laat ons\neindelijk kennismaken met de toch wel al bekende superheldenfamilie, de\nFantastic Four. De acteurs zijn Pedro Pascal als Reed Richards (ook wel Mr.\nFantastic genoemd), Vanessa Kirby als Sue Storm (de Invisible Woman), Joseph\nQuinn als Johnny Storm (de Human Torch), en Ebon Moss-Bachrach als Ben Grimm,\noftewel de Thing."
    }), "\n", createVNode(_components.p, {
      children: "In de trailer zien we een originele setting die zich afspeelt in de jaren ‘60,\neen tijd waarin er veel interesse was in de ruimte maar er is duidelijk iets\nanders dan de wereld dat we gewoon zijn van het MCU. De vier hoofdpersonen maken\neen ruimtevlucht die hen hun krachten geeft, en het lijkt erop dat ze tegen\nGalactus moeten strijden, een enorme schurk die de aarde wil verslinden. Deze\nGalactus wordt gespeeld door Ralph Ineson en deze eerste kijk op hem laat een\nindrukwekkend figuur zien, ookal is het nog maar langs achteren."
    }), "\n", createVNode(_components.p, {
      children: "Wat deze film bijzonder maakt, is dat het geen herkomstverhaal bevat zoals veel\nandere superheldenfilms. Het verhaal begint op een punt waar de personages al\nhun krachten al hebben en we zien hoe hun leven er nu uitziet. Dit zorgt ervoor\ndat we meteen in de actie kunnen duiken."
    }), "\n", createVNode(_components.p, {
      children: "De trailer heeft ook een aantal leuke verwijzingen naar de Fantastic\nFour-comics. Zo verschijnt de iconische Fantasticar, het voertuig van de\nfamilie, in een korte scène. We zien ook het Baxter Building, het hoofdkantoor\nvan de Fantastic Four in New York."
    }), "\n", createVNode(_components.p, {
      children: "Een van de meest opvallende dingen in de trailer is hoe goed de CGI van de Thing\neruitziet. Ebon Moss-Bachrach geeft de Thing een nieuwe look die veel mensen\nbeter vinden dan de eerdere versies, deze versie lijkt duidelijk meer op de look\nvan de comics. Tijdens een scène zien we de Thing in de keuken, wat al een\nbeetje liet zien van zijn humor dat hij toevoegt aan het personage."
    }), "\n", createVNode(_components.p, {
      children: "Aan het einde van de trailer zien we de Fantastic Four in hun iconische blauwe\npakken, met een duidelijke retro-vibe die de jaren ‘60 onderstreept. We zijn nu\nal benieuwd! De film komt op 25 juli uit in de zalen!"
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

const url = "src/content/nieuws/hier-is-de-eerste-teaser-van-fantastic-four-first-steps.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-eerste-teaser-van-fantastic-four-first-steps.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-eerste-teaser-van-fantastic-four-first-steps.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
