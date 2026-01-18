import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "And Just Like That… eindigt met een tweedelige finale",
  "date": "2025-08-01T19:13:19.555Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1754074090.jpg",
  "trailer": "",
  "slug": "and-just-like-that-eindigt-met-een-tweedelige-finale",
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
      children: "HBO Max heeft beslist dat “And Just Like That…” stopt na het derde seizoen. De\nspin-off van “Sex and the City” krijgt een tweedelige finale om de reeks af te\nsluiten. Michael Patrick King, de maker, deelde op Instagram dat dit het einde\nbetekent van het “Sex and the City”-universum. Hij vertelde dat het schrijven\nvan de laatste aflevering hem deed inzien dat dit het perfecte moment was om te\nstoppen. Samen met Sarah Jessica Parker, Kristin Davis en Cynthia Nixon kozen ze\nervoor om het laatste seizoen uit te breiden naar 12 afleveringen voor een\nwaardig afscheid."
    }), "\n", createVNode(_components.p, {
      children: "Sarah Jessica Parker bedankte ons allemaal via Instagram voor het volgen van\nCarrie Bradshaw’s verhaal al meer dan 27 jaar. Ze noemde de rol een essentieel\ndeel van haar leven en benadrukte de krachtige vriendschappen in de serie -\nzowel tussen Miranda en Charlotte als met nieuwe personages zoals Seema en LTW."
    }), "\n", createVNode(_components.p, {
      children: "De show opende met een schokkend moment: de dood van Carrie’s geliefde Mr. Big.\nDit zette de toon voor thema’s als rouw en moderne liefde. In het derde seizoen\nzien we Carrie in een afstandsrelatie met Aidan, terwijl Charlotte en Miranda\nworstelen met liefde, verslaving en gezondheidsproblemen."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de serie populair blijft, uitten we massaal kritiek op bepaalde\nverhaallijnen. Sociale media stonden vol met discussies waar we onze frustraties\ndeelden terwijl we bleven kijken. Dit “hate-watching” zorgde voor eindeloze\ngesprekken over wat wel en niet werkte in de serie. De terugkeer van de\npersonages verliep bewogen, vooral zonder Kim Cattrall als Samantha. Haar\npersonage verscheen enkel kort via een cameo, met verdere contacten tussen haar\nen Carrie die via tekstberichten werden afgehandeld."
    }), "\n", createVNode(_components.p, {
      children: "Wij kunnen het verhaal volgen tot de laatste twee afleveringen die op 14\naugustus worden uitgezonden. Dit betekent het definitieve einde van Carrie\nBradshaw en haar vriendengroep."
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

const url = "src/content/nieuws/and-just-like-that-eindigt-met-een-tweedelige-finale.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/and-just-like-that-eindigt-met-een-tweedelige-finale.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/and-just-like-that-eindigt-met-een-tweedelige-finale.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
