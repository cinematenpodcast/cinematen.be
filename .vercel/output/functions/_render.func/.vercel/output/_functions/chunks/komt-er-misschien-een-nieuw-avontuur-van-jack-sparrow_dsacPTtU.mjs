import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Komt er misschien een nieuw avontuur van Jack Sparrow?",
  "date": "2024-12-04T22:32:12.185Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733339622.jpg",
  "trailer": "",
  "slug": "komt-er-misschien-een-nieuw-avontuur-van-jack-sparrow",
  "tags": ["film"]
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
      children: "De “Pirates of the Caribbean” films staan hoog tussen onze favoriete films. Maar\nhet laatste avontuur was wat minder populair. Het verhaal was een boeltje en het\ntop personage van Jack Sparrow werd “verkeerd” en “onherkenbaar” ingevuld door\nde schrijvers."
    }), "\n", createVNode(_components.p, {
      children: "Volgens de laatste berichten is Disney nu toch wel weer aan het nadenken over de\nterugkeer van Johnny Depp als de beroemde piraat Jack Sparrow. Veel mensen\nvragen zich af of Disney dit echt gaat doen. Het lijkt erop dat ze willen\nproberen het succes van de eerdere films terug te krijgen."
    }), "\n", createVNode(_components.p, {
      children: "Zoals het er nu uitziet, bevindt de toekomst van de “Pirates of the\nCaribbean”-franchise zich op een kruispunt waar Johnny Depp centraal staat.\nProducent Jerry Bruckheimer zit op twee verschillende scenario’s voor nieuwe\nfilms in de reeks, waarvan er slechts één ruimte biedt voor Jack Sparrow. De\nmogelijke betrokkenheid van Depp — als Disney überhaupt in staat is om de acteur\nte benaderen, laat staan een overeenkomst met hem te sluiten — zal\nwaarschijnlijk de koers van het volgende deel bepalen."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog niet zeker of dit allemaal waar is, en het kan een tijdje duren\nvoordat we meer informatie krijgen. Maar het lijkt erop dat Disney aan de\ntoekomst van “Pirates of the Caribbean” werkt."
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

const url = "src/content/nieuws/komt-er-misschien-een-nieuw-avontuur-van-jack-sparrow.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/komt-er-misschien-een-nieuw-avontuur-van-jack-sparrow.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/komt-er-misschien-een-nieuw-avontuur-van-jack-sparrow.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
