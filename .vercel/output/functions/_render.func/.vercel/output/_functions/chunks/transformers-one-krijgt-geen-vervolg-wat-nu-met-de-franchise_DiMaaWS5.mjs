import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Transformers One krijgt geen vervolg Wat nu met de franchise?",
  "date": "2025-06-23T06:56:36.066Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-06-23T06-54-38-005Z.jpg",
  "trailer": "",
  "slug": "transformers-one-krijgt-geen-vervolg-wat-nu-met-de-franchise",
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
      children: "De Transformers-franchise heeft tot nu toe negen films uitgebracht, zowel\nlive-action als animatie. De recentste animatiefilm, “Transformers One”, vertelt\nhet verhaal van de oorsprong van Optimus Prime en Megatron op de planeet\nCybertron. Regisseur Josh Cooley toont de vriendschap tussen Orion Pax en D-16,\ndie later iconische personages worden. Ondanks positieve reacties op de film,\nheeft Paramount Animation beslist geen vervolg te maken."
    }), "\n", createVNode(_components.p, {
      children: "Bij een paneldiscussie op BotCon bevestigde Cooley dat de studio niet\ngeïnteresseerd is in een sequel. Dit nieuws kwam hard aan bij ons, vooral omdat\nde film potentieel had voor een nieuwe richting in de franchise. Wereldwijd\nbracht “Transformers One” ongeveer $129,4 miljoen op, maar met een budget tussen\n$75-147 miljoen was dit financieel onvoldoende voor Paramount."
    }), "\n", createVNode(_components.p, {
      children: "Eerdere films zoals “Bumblebee” deden het beter met meer dan $460 miljoen\nopbrengst. Recente Bayverse-stijl films verloren echter kijkers. De trailers\nvoor “Transformers One” werden soms als teleurstellend ervaren, wat mogelijk\nbijdroeg aan de tegenvallende bioscoopbezoeken. Paramount lijkt nu te focussen\nop gegarandeerde megasuccessen in plaats van kwalitatieve Transformers-verhalen."
    }), "\n", createVNode(_components.p, {
      children: "Wij hebben de film via streamingplatforms bekeken en waarderen hem vaak meer dan\nin de bioscoop. Geruchten over crossovers met G.I. Joe blijven vaag zonder\nconcrete updates. De franchise bevindt zich duidelijk in een onzekere fase.\nHoewel wij hopen op nieuwe verhalen, lijkt de studio vooral financiële\nveiligheid te zoeken in plaats van waardevolle inhoud te creëren."
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

const url = "src/content/nieuws/transformers-one-krijgt-geen-vervolg-wat-nu-met-de-franchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/transformers-one-krijgt-geen-vervolg-wat-nu-met-de-franchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/transformers-one-krijgt-geen-vervolg-wat-nu-met-de-franchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
