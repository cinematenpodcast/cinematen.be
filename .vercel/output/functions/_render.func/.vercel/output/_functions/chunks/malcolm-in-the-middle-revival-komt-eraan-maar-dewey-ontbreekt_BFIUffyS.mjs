import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Malcolm in the Middle revival komt eraan, maar Dewey ontbreekt",
  "date": "2025-06-14T23:32:27.191Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1749761283.jpg",
  "trailer": "",
  "slug": "malcolm-in-the-middle-revival-komt-eraan-maar-dewey-ontbreekt",
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
      children: "Disney+ brengt binnenkort vier nieuwe afleveringen van “Malcolm in the Middle”\nterug. Bryan Cranston, die Hal speelde, heeft tien jaar lang geprobeerd om deze\nrevival te realiseren. Hij overtuigde uiteindelijk bedenker Linwood Boomer om de\nserie nieuw leven in te blazen. Bijna de volledige originele cast keert terug,\ninclusief Frankie Muniz als Malcolm en Jane Kaczmarek als Lois. Maar er is één\nopvallende afwezige: Erik Per Sullivan keert niet terug als Dewey."
    }), "\n", createVNode(_components.p, {
      children: "Cranston vertelt hoe hij Sullivan benaderde: “Ik zei: ‘De show komt terug!’ Hij\nvond het geweldig, maar reageerde met: ‘Oh nee, ik wil het niet doen.‘” Sullivan\nstudeert momenteel aan Harvard en werkt aan zijn masteropleiding. Hij gaf aan\nsinds zijn negende niet meer geacteerd te hebben en geen interesse te hebben om\nDewey opnieuw te spelen. Caleb Ellsworth-Clark neemt de rol over."
    }), "\n", createVNode(_components.p, {
      children: "Frankie Muniz keert wel terug, ondanks zijn carrièreswitch naar professioneel\nautocoureur en eerdere gezondheidsproblemen. De originele serie liep zeven\nseizoenen en toonde het chaotische gezin zonder lachbanden of live publiek. In\nde finale onthulde Lois haar overtuiging dat Malcolm voorbestemd was om\npresident te worden, maar eerst enorme uitdagingen moest overwinnen."
    }), "\n", createVNode(_components.p, {
      children: "We kijken uit naar de nieuwe avonturen van het gezin, ook al moeten we afscheid\nnemen van de originele Dewey. Het wordt interessant om te zien hoe de schrijvers\nde familie weer tot leven brengen en hoe Ellsworth-Clark de iconische rol\ninvult."
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

const url = "src/content/nieuws/malcolm-in-the-middle-revival-komt-eraan-maar-dewey-ontbreekt.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/malcolm-in-the-middle-revival-komt-eraan-maar-dewey-ontbreekt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/malcolm-in-the-middle-revival-komt-eraan-maar-dewey-ontbreekt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
