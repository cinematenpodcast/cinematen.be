import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The First Omen: Een Sinistere Prequel van een horror klassieker",
  "date": "2024-01-04T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-first-omen-trailer-is-ready-to-summon-the-spawn-of-satan-1704218416.jpg",
  "trailer": "H4xk8yLiFwM",
  "slug": "the-first-omen-een-sinistere-prequel-van-een-horror-klassieker",
  "draft": false,
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-getalenteerde-cast-en-regisseur",
    "text": "Een Getalenteerde Cast en Regisseur"
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
      children: "Er is een nieuwe prequel op komst van de bekende horrorfilm “The Omen,” genaamd “The First Omen.” Deze film neemt ons mee terug naar de oorsprong van het sinistere verhaal en belooft een huiveringwekkend avontuur. In “The First Omen” volgen we een jonge Amerikaanse vrouw (gespeeld door Nell Tiger Free) die naar Rome wordt gestuurd om haar leven in dienst van de kerk te beginnen. Echter, al snel wordt zij geconfronteerd met een duisternis die haar eigen geloof doet wankelen. Ze stuit op een angstaanjagend complot dat tot doel heeft om het kwaad in levenden lijve te laten geboren worden."
    }), "\n", createVNode(_components.p, {
      children: "De trailer van “The First Omen” doet al het nodige om de satanische sfeer op te roepen. We zien een klooster en een non die lijkt te bevallen van een kind, vermoedelijk de beruchte Damien zelf. Flitsen van demonische beelden worden getoond, wat belooft dat deze prequel een spannende en vermakelijke horrorfilm zal zijn."
    }), "\n", createVNode(_components.h2, {
      id: "een-getalenteerde-cast-en-regisseur",
      children: "Een Getalenteerde Cast en Regisseur"
    }), "\n", createVNode(_components.p, {
      children: "De cast van “The First Omen” bestaat uit getalenteerde acteurs, waaronder Nell Tiger Free (“Game of Thrones”), Bill Nighy (“Pirates of the Caribbean: Dead Man’s Chest”), en Ralph Ineson (“The Witch”). De film wordt geregisseerd door Arkasha Stevenson, bekend van de serie “Legion.”"
    }), "\n", createVNode(_components.p, {
      children: "“The First Omen” zal op 5 april in de bioscopen verschijnen en hoopt het succes van de eerdere “Omen” films voort te zetten. Met een intrigerende premisse, een getalenteerde cast en een regisseur die bekend staat om zijn werk in het genre, lijkt deze prequel een must-see te worden voor fans van het horrorgenre."
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

const url = "src/content/nieuws/the-first-omen-een-sinistere-prequel-van-een-horror-klassieker.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-first-omen-een-sinistere-prequel-van-een-horror-klassieker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-first-omen-een-sinistere-prequel-van-een-horror-klassieker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
