import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een Kerstmis horrorfilm van de makers van Terrifier",
  "date": "2024-11-08T19:30:13.161Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1731093186.jpg",
  "trailer": "",
  "slug": "een-kerstmis-horrorfilm-van-de-makers-van-terrifier",
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
      children: "Er komen spannende nieuwe horrorfilms aan voor de griezelliefhebbers. Eén van de\nopmerkelijke films is “Silent Night, Deadly Night,” een remake van de beruchte\nkerstslasher uit de jaren 80. Deze film vertelt het verhaal van een man die als\nSanta Claus verkleed is en een moordzuchtige rampage begint. De nieuwe versie\nwordt geproduceerd door het bedrijf achter de populaire “Terrifier” films en\ndeze film zal al snel in productie gaan met Mike P. Nelson als de regisseur. Hij\nis bekend van de remake van “Wrong Turn” en heeft een passie voor het maken van\nspannende horrorfilms."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast is er goed nieuws voor liefhebbers van de “Scary Movie” franchise.\nMarlon Wayans, één van de oorspronkelijke makers van de serie, heeft\naangekondigd dat zij terugkomen voor een nieuwe film. Na bijna twintig jaar zijn\nde Wayans-broers weer betrokken bij deze komische horror serie"
    }), "\n", createVNode(_components.p, {
      children: "Tot slot is er ook een veelbesproken reboot van “The Exorcist,” getiteld “The\nExorcist: Believer.” Deze film staat voor de uitdaging om een goede balans te\nvinden tussen het eren van de originele film uit 1973 en het introduceren van\nnieuwe personages. Veel eerdere vervolgfilms konden niet goed waarmaken wat het\neerste deel zo speciaal maakte. Maar als ze zo blijven proberen zullen ze\nwellicht ooit wel eens raak slagen."
    }), "\n", createVNode(_components.p, {
      children: "Al deze aankondigingen maken duidelijk dat de horror- en slashergenres nog\nsteeds populair zijn. Of het nu gaat om een horrorkomedie zoals “Scary Movie” of\neen spannende slasher zoals “Silent Night, Deadly Night,” het lijkt erop dat we\neen spannend jaar tegemoet gaan voor horrorliefhebbers."
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

const url = "src/content/nieuws/een-kerstmis-horrorfilm-van-de-makers-van-terrifier.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-kerstmis-horrorfilm-van-de-makers-van-terrifier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-kerstmis-horrorfilm-van-de-makers-van-terrifier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
