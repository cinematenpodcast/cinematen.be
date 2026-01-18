import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Peacemaker seizoen 2 brengt multiversum chaos",
  "date": "2025-07-28T21:02:56.449Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1753735724.jpg",
  "trailer": "f6AZTfI54OU",
  "slug": "peacemaker-seizoen-2-brengt-multiversum-chaos",
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
      children: "John Cena keert terug als Peacemaker in een nieuw seizoen binnen het DC\nUniversum. Dit vervolg komt er na de positieve reacties op de eerste reeks en de\nfilm “The Suicide Squad”. James Gunn, de architect van het vernieuwde DC\nUniversum, bevestigt dat seizoen 2 hier deel van uitmaakt."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens Comic-Con 2025 kregen we nieuwe trailers te zien waaruit blijkt dat\nCena’s personage Christopher Smith op de vlucht is voor Rick Flag Sr. Deze\nlaatste wil wraak nemen voor de dood van zijn zoon Rick Flag Jr. De beelden\nonthullen ook dat Peacemaker door verschillende dimensies reist, wat de deur\nopent naar het multiversum."
    }), "\n", createVNode(_components.p, {
      children: "In een teaser horen we Chris Smith zeggen: “Er is een andere dimensie. Die is\nprecies hetzelfde als de onze. Maar het is beter.” Dit suggereert dat zijn\nontmoeting met de Justice League uit het vorige seizoen mogelijk in een\nalternatieve realiteit plaatsvond. Elementen zoals de gebeurtenissen met Rick\nFlag Jr. blijven relevant ondanks de universele veranderingen."
    }), "\n", createVNode(_components.p, {
      children: "We zien een angstaanjagende dimensie vol reusachtige spinachtige monsters en een\nverwijzing naar een fictieve punkband waar Clark Kent eerder fan van bleek. De\ntrailer introduceert ook een nieuwe versie van vijand White Dragon met een\nopgefrist kostuum, terwijl personages zoals Judomaster hun terugkeer maken."
    }), "\n", createVNode(_components.p, {
      children: "Op Comic-Con toonde het panel exclusieve footage van Peacemaker en zijn team in\nactie. Wij kijken uit naar deze nieuwe avonturen wanneer het seizoen debuteert\nop 21 augustus 2025 via HBO Max. Deze multiversum-verhaallijn legt mogelijk de\nbasis voor toekomstige DC-verhalen, waarbij verschillende realiteiten verkend\nworden met Peacemaker en zijn crew."
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

const url = "src/content/nieuws/peacemaker-seizoen-2-brengt-multiversum-chaos.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/peacemaker-seizoen-2-brengt-multiversum-chaos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/peacemaker-seizoen-2-brengt-multiversum-chaos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
