import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Paper is de nieuwe Office spin-off",
  "date": "2025-08-07T16:12:49.927Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1754582344.jpg",
  "trailer": "c5v4LJJkvUU",
  "slug": "the-paper-is-de-nieuwe-office-spinoff",
  "tags": ["TV"]
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
      children: "Wij Office-fans krijgen een spin-off te pakken: “The Paper”! Deze nieuwe reeks\ndraait om de Toledo Truthteller, een gure krant uit Ohio die moeite heeft om het\nhoofd boven water te houden. Het team moet creatief aan de slag om verhalen te\nverkopen en lezers te trekken."
    }), "\n", createVNode(_components.p, {
      children: "Domhnall Gleeson kruipt in de huid van Ned Sampson, de nieuwe hoofdredacteur met\ngrote plannen. Hij leidt een bende groentjes: één medewerker heeft enkel\nervaring met een brugklas-paper, een ander beroept zich op zijn tweets. En dan\nis er onze geliefde Oscar Martinez (Oscar Nuñez) die terugkeert, maar niet\nbepaald opgetogen lijkt over de documentaireploeg. De vertrouwde\nmockumentary-stijl van “The Office” blijft overeind."
    }), "\n", createVNode(_components.p, {
      children: "Greg Daniels, de man achter de originele reeks, staat aan het roer samen met\nMichael Koman (“Nathan for You”). De eerste trailer belooft flink wat humor, met\nartikelen vol advertenties en pogingen tot authentieke journalistiek. Ondanks\nzorgen of een spin-off kan werken, geeft de betrokkenheid van Daniels ons toch\nhoop."
    }), "\n", createVNode(_components.p, {
      children: "“The Paper” landt op 4 september 2025 op Peacock met vier afleveringen. Naast\nGleeson en Nuñez zie je Sabrina Impacciatore, Chelsea Frei, Melvin Gregg,\nGbemisola Ikumelo, Alex Edelman en Ramona Young. Wij zijn benieuwd of deze kijk\nin de journalistieke wereld met zijn uitdagingen kan evenaren wat “The Office”\nbetekende. Spin-offs zijn notoir moeilijk, maar met dit team achter de schermen\ngeven wij het een eerlijke kans."
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

const url = "src/content/nieuws/the-paper-is-de-nieuwe-office-spinoff.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-paper-is-de-nieuwe-office-spinoff.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-paper-is-de-nieuwe-office-spinoff.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
