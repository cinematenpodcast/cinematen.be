import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De digitale wereld bloeit over in de onze in Tron Ares trailer",
  "date": "2025-04-06T13:58:43.709Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/TronAresPoster1mainimagebig598.jpg",
  "trailer": "9KVG_X_7Naw",
  "slug": "de-digitale-wereld-bloeit-over-in-de-onze-in-tron-ares-trailer",
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
      children: "Disney heeft onlangs de trailer voor Tron: Ares uitgebracht. Deze film is het\nvervolg op Tron: Legacy, die in 2010 uitkwam, en is ook een vervolg op de\nklassieke film Tron uit 1982."
    }), "\n", createVNode(_components.p, {
      children: "In Tron: Ares speelt Jared Leto de rol van Ares, een speciaal AI-programma dat\nnaar de echte wereld komt om een gevaarlijke missie uit te voeren. Dit is de\neerste keer is dat wij in contact komen met AI-wezens. De trailer laat al veel\ncoole beelden zien, zoals Ares die op een licht motorfiets (light cycle) door\neen stad racet. Hij gebruikt een lichtstraal als wapen en snijdt zo een\npolitieauto netjes doormidden."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geregisseerd door Joachim Rønning en bevat ook rollen voor andere\nbekende acteurs zoals Evan Peters, Gillian Anderson en Hasan Minhaj."
    }), "\n", createVNode(_components.p, {
      children: "De muziek van de film komt van de band Nine Inch Nails en lijkt perfect te\nklinken voor een Tron film. Tron: Ares is dus meer dan alleen een vervolg; het\nis een terugkeer naar een iconische wereld. De film staat op de planning op 10\noktober 2025."
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

const url = "src/content/nieuws/de-digitale-wereld-bloeit-over-in-de-onze-in-tron-ares-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-digitale-wereld-bloeit-over-in-de-onze-in-tron-ares-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-digitale-wereld-bloeit-over-in-de-onze-in-tron-ares-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
