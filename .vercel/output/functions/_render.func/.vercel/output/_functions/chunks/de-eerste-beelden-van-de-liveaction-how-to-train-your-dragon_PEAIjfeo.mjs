import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De eerste beelden van de live-action How to Train Your Dragon",
  "date": "2024-11-20T12:48:46.396Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1732041848.jpg",
  "trailer": "5lzoxHSn0C0",
  "slug": "de-eerste-beelden-van-de-liveaction-how-to-train-your-dragon",
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
      children: "Het is eindelijk zover! De live-action versie van de geliefde animatiefilm “How\nto Train Your Dragon” komt eraan. Deze film is gebaseerd op de boeken van\nCressida Cowell en de eerste trailer is te bekijken. Fans van de originele film\nwaren benieuwd naar hoe de personages, vooral de draak Toothless, eruit gingen\nzien in deze nieuwe versie."
    }), "\n", createVNode(_components.p, {
      children: "In de trailer zien we Hiccup, een jongen die in het dorp Berk woont, waar mensen\ngrote angst hebben voor draken. Hiccup is de zoon van de leider van het dorp en\nmoet de verwachting van zijn vader waarmaken door een dappere drakenjager te\nworden. Maar in plaats daarvan maakt hij een vriend van een zeldzame draak\ngenaamd Toothless. De trailer laat veel beelden zien die we herkennen uit de\nanimatiefilm, maar dan met echte mensen en levensechte draken."
    }), "\n", createVNode(_components.p, {
      children: "Gerard Butler komt terug in de rol van Stoick, Hiccup’s vader terwijl de acteurs\nMason Thames Hiccup zal spelen. De regisseur die tevens ook de animatie versie\nheeft gemaakt, Dean DeBlois, heeft geprobeerd om de magie van het origineel vast\nte houden."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat de filmindustrie in de trend van het opnieuw maken van oude\nklassiekers blijft, iets dat eerder vooral door Disney werd gedaan. Wij zijn al\nbenieuwd of we nu ook de andere Dreamworks animatiefilms ooit voorgeschoteld\nzullen krijgen als een live-action remake… Shrek?"
    }), "\n", createVNode(_components.p, {
      children: "Zo, dat is wat we tot nu toe weten over “How to Train Your Dragon”. De film komt\nuit op 13 juni 2025 maar je kan nu de trailer bekijken op Cinematen.be."
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

const url = "src/content/nieuws/de-eerste-beelden-van-de-liveaction-how-to-train-your-dragon.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-eerste-beelden-van-de-liveaction-how-to-train-your-dragon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-eerste-beelden-van-de-liveaction-how-to-train-your-dragon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
