import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Batman duikt plots op in het nieuwe DCU",
  "date": "2025-01-02T19:17:21.836Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1735833798.jpg",
  "trailer": "",
  "slug": "batman-duikt-plots-op-in-het-nieuwe-dcu",
  "tags": ["tv"]
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
      children: "We hebben plots een eerste blik gekregen op de nieuwe Batman van James Gunn’s\nnieuwe DCU!"
    }), "\n", createVNode(_components.p, {
      children: "In de nieuwste aflevering van “Creature Commandos” zien we een teaser van\nBatman. Hij komt in actie om Doctor Phosphorus te stoppen. We zien de Caped\nCrusader dus nog maar enkel ik een geanimeerde vorm maar net zoals de andere\npersonages uit “Creature Commandos” zal hij vroeger of later ook in een\nlive-action property opduiken. Maar voorlopig hebben we nu dus wel al\nbevestiging dat Batman effectief bestaat in het nieuwe DCU."
    }), "\n", createVNode(_components.p, {
      children: "We kijken uit naar meer verhalen van dit universum, meer personages en\nnatuurlijk meer Batman!"
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

const url = "src/content/nieuws/batman-duikt-plots-op-in-het-nieuwe-dcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/batman-duikt-plots-op-in-het-nieuwe-dcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/batman-duikt-plots-op-in-het-nieuwe-dcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
