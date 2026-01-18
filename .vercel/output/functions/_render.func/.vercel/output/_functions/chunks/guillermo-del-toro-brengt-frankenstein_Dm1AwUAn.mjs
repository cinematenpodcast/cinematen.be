import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Guillermo del Toro brengt Frankenstein",
  "date": "2025-06-04T17:31:26.940Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-06-04T17-29-50-288Z.jpg",
  "trailer": "x--N03NO130",
  "slug": "guillermo-del-toro-brengt-frankenstein",
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
      children: "Guillermo del Toro, winnaar van meerdere Oscars, heeft een nieuwe film gemaakt\ngebaseerd op Mary Shelley’s “Frankenstein”. Netflix maakte dit officieel bekend\ntijdens hun Tudum-event op 31 mei 2025, waar de eerste teasertrailer in première\nging."
    }), "\n", createVNode(_components.p, {
      children: "Oscar Isaac vertolkt Dr. Victor Frankenstein, de slimme maar egoïstische\nwetenschapper die een monster creëert. Jacob Elordi speelt het monster zelf en\nMia Goth neemt de rol van Elizabeth Lavenza, Victors verloofde, voor haar\nrekening. Andere bekende namen in de cast zijn Ralph Ineson, Christoph Waltz en\nFelix Kammerer."
    }), "\n", createVNode(_components.p, {
      children: "Del Toro, die de film schreef en regisseerde, deelt al jaren zijn fascinatie\nvoor monsters. Hij las “Frankenstein” als kind en was diep onder de indruk. Hij\nbeschouwt deze verfilming als een droomproject waar hij lang aan werkte. In de\nteasertrailer horen we Isaac zeggen: “Een deel van wat ik je zal vertellen is\nfeit, een deel niet, maar het is allemaal waar.” Dit zet ons aan het denken over\nwaarheid binnen het verhaal. Del Toro benadrukt dat zijn film verder gaat dan\nhorror en vragen stelt over familie en menselijke verbinding."
    }), "\n", createVNode(_components.p, {
      children: "Zijn versie van het monster moet meer empathie oproepen dan eerdere\nverfilmingen. Hij ziet het verhaal als een emotionele reis, geen pure\nhorrorfilm. Hij put uit ervaringen met eerdere werken zoals “Pinocchio” en\n“Hellboy”, waarin monster- en menselijkheidsthema’s ook centraal stonden. Wij\nkunnen verwachten dat zijn kenmerkende beeldtaal terugkeert in deze nieuwe\ninterpretatie."
    }), "\n", createVNode(_components.p, {
      children: "De film combineert klassieke elementen met vernieuwde, groots opgezette beelden.\n“Frankenstein” verschijnt in november 2025 op Netflix. Met deze sterke cast, een\ngepassioneerde regisseur en een tijdloos verhaal focust de film niet alleen op\nschrik, maar vooral op de complexe relaties tussen de personages. Wij zijn\nbenieuwd naar deze frisse kijk op een eeuwenoud verhaal."
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

const url = "src/content/nieuws/guillermo-del-toro-brengt-frankenstein.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/guillermo-del-toro-brengt-frankenstein.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/guillermo-del-toro-brengt-frankenstein.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
