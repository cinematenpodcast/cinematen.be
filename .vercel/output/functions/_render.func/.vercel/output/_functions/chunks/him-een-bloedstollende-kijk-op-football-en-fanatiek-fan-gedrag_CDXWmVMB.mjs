import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Him een bloedstollende kijk op football en fanatiek fan gedrag",
  "date": "2025-09-21T11:59:16.048Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758222087.jpg",
  "trailer": "",
  "slug": "him-een-bloedstollende-kijk-op-football-en-fanatiek-fan-gedrag",
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
      children: "Jordan Peele staat achter de nieuwe horrorfilm “Him”, geregisseerd door Justin\nTipping. We volgen het verhaal van Cameron Cade, een jonge quarterback met\ndromen van profvoetbal, gespeeld door Tyriq Withers. Zijn droom wordt ruw\nverstoord wanneer een fan hem vlak voor een belangrijk moment met een hamer op\nhet hoofd slaat."
    }), "\n", createVNode(_components.p, {
      children: "Hierna krijgt Cameron een uitnodiging van zijn idool Isaiah White, gespeeld door\nMarlon Wayans. Isaiah, een legende met acht kampioenschappen, nodigt hem uit in\nzijn speciale compound in de woestijn. Deze plek ziet eruit als een geheim\nhoofdkwartier uit een spionnenfilm, maar al snel merken we dat er iets niet\npluis is."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de training gebeuren er rare dingen. Cameron moet naakt een medische\nkeuring ondergaan en we zien fans die Isaiah aanbidden als een god. De film\ntoont hoe ver fans soms gaan in hun liefde voor sportsterren en hoe zwaar de\nsport is voor het lichaam. Speciale effecten laten zien wat er in de hersenen\ngebeurt bij een harde klap."
    }), "\n", createVNode(_components.p, {
      children: "Op het einde volgt een bloedig gevecht tussen Cameron en Isaiah. Daarna tekent\nCameron een contract bij de eigenaar van het footballteam, die met andere\nbelangrijke mensen maskers van varkenshuid draagt. Uiteindelijk doodt Cameron de\nmensen die hem gebruikten."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Justin Tipping deelde een persoonlijke ervaring: toen hij jong was,\nwerd hij aangevallen omdat hij dure sportschoenen droeg, net toen hij naar de\nfilm Scary Movie ging waarin Marlon Wayans speelde. Tipping vertelde dit verhaal\ntijdens de samenwerking en Marlon grapte dat hij blij was met de aanval, anders\nhadden ze niet samengewerkt."
    }), "\n", createVNode(_components.p, {
      children: "“Him” gaat over de prijs van succes en wat atleten opofferen om de beste te\nworden. Marlon Wayans, bekend van komische rollen, speelt hier serieus en eng.\nTyriq Withers, nieuw in grote films, doet het goed als de jonge speler."
    }), "\n", createVNode(_components.p, {
      children: "De film is sinds 19 september in de bioscoop te zien. Het is een unieke\ncombinatie van sport en horror die we niet vaak tegenkomen."
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

const url = "src/content/nieuws/him-een-bloedstollende-kijk-op-football-en-fanatiek-fan-gedrag.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/him-een-bloedstollende-kijk-op-football-en-fanatiek-fan-gedrag.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/him-een-bloedstollende-kijk-op-football-en-fanatiek-fan-gedrag.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
