import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Bring Her Back teaser geeft ons kippenvel",
  "date": "2025-02-20T12:14:18.555Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/bring-her-back-official-teaser-trailer_fbye.1280.jpg",
  "trailer": "RsKygtA2DMY",
  "slug": "de-bring-her-back-teaser-geeft-ons-kippenvel",
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
      children: "A24 heeft de eerste trailer vrijgegeven voor de aankomende horrorfilm Bring Her\nBack. Dit filmproject is gemaakt door de gebroeders Danny en Michael Philippou,\ndie eerder bekend zijn van de film Talk to Me. Bring Her Back vertelt het\nverhaal van een broer en een zus die een angstaanjagend ritueel ontdekken in het\nafgelegen huis van hun nieuwe pleegmoeder. De trailer begint misschien met een\nschattige kat gaat al snel over in spannende en verontrustende beelden."
    }), "\n", createVNode(_components.p, {
      children: "Wij zien bekende acteurs zoals Sally Hawkins, Billy Barratt, Sora Wong, Jonah\nWren Phillips, Sally-Anne Upton en Stephen Phillips in de cast van de film.\nHoewel de trailer niet veel details onthult, is het duidelijk dat deze film past\nbij het type griezelige verhalen waar A24 om bekend staat, vergelijkbaar met\nandere films zoals The Witch, Hereditary en Midsommar."
    }), "\n", createVNode(_components.p, {
      children: "Talk to Me, de vorige film van de gebroeders Philippou heeft bij ons al een\ngoede indruk nagelaten dus we denken dat deze volgende film ook wel eens op het\nlijstje van horrorkleppers kan komen te staan."
    }), "\n", createVNode(_components.p, {
      children: "Bring Her Back komt op 30 mei 2025 uit in onze zalen."
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

const url = "src/content/nieuws/de-bring-her-back-teaser-geeft-ons-kippenvel.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-bring-her-back-teaser-geeft-ons-kippenvel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-bring-her-back-teaser-geeft-ons-kippenvel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
