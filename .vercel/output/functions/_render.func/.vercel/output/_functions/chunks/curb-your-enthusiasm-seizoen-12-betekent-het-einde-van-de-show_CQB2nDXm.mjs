import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Curb Your Enthusiasm Seizoen 12 Betekent Het Einde van de Show",
  "date": "2023-12-16T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1702579589.jpg",
  "trailer": "",
  "slug": "curb-your-enthusiasm-seizoen-12-betekent-het-einde-van-de-show",
  "draft": false,
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
      children: "Het is tijd om afscheid te nemen van “Curb Your Enthusiasm”. Na acht seizoenen, een onderbreking van zes jaar en een heropleving van drie seizoenen, maakt Larry David officieel een einde aan zijn rol als Larry David op de populaire HBO-comedyserie."
    }), "\n", createVNode(_components.p, {
      children: "HBO heeft aangekondigd dat het 12e seizoen van “Curb Your Enthusiasm” het laatste zal zijn. Het laatste seizoen bestaat uit 10 afleveringen en gaat op 4 februari in première. De finale van de serie wordt uitgezonden op 7 april."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl de serie altijd open leek te staan voor toekomstige seizoenen, is dit de eerste keer dat HBO de aankomende afleveringen promoot als het “laatste seizoen” van Larry David."
    }), "\n", createVNode(_components.p, {
      children: "David verklaarde in een verklaring: “Nu ‘Curb’ ten einde loopt, krijg ik eindelijk de kans om deze ‘Larry David’-persoonlijkheid van me af te schudden en de persoon te worden die God bedoeld heeft dat ik ben – een bedachtzaam, vriendelijk, zorgzaam en attent mens, zoals ik was voordat ik werd afgeleid door het spelen van dit kwaadaardige personage. Dus ‘Larry David’, ik neem afscheid van je. Je misantropie zal niet gemist worden."
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

const url = "src/content/nieuws/curb-your-enthusiasm-seizoen-12-betekent-het-einde-van-de-show.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/curb-your-enthusiasm-seizoen-12-betekent-het-einde-van-de-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/curb-your-enthusiasm-seizoen-12-betekent-het-einde-van-de-show.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
