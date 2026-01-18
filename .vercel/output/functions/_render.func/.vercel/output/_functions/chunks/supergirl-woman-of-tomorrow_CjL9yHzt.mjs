import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Supergirl Woman of Tomorrow is vertrokken",
  "date": "2025-01-28T18:26:52.227Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/supergirl-james-gunn.jpg",
  "trailer": "",
  "slug": "supergirl-woman-of-tomorrow-is-vertrokken",
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
      children: "De opnames van de nieuwe film, Supergirl: Woman of Tomorrow, zijn begonnen. De\nfilm wordt geproduceerd door DC Studios. James Gunn deelde een eerste foto van\nMilly Alcock, die de rol van Supergirl gaat spelen. De foto laat Alcock zien\nterwijl ze op haar acteurstoel zit."
    }), "\n", createVNode(_components.p, {
      children: "De film is gebaseerd op de gelijknamige strip van Tom King, Bilquis Evely en Ana\nNogueira. In deze strip is er een verhaal over een buitenaards meisje genaamd\nRuthye Marye Knoll. Ze vraagt Supergirl om haar te helpen wraak te nemen op de\nschurk Krem of the Yellow Hills, die haar vader heeft vermoord. De strip werd\ngenomineerd voor “Best Limited Series” bij de Eisner Awards van 2022."
    }), "\n", createVNode(_components.p, {
      children: "Naast Milly Alcock zal onze eigenste Matthias Schoenaerts Krem spelen en Eve\nRidley geeft leven aan Ruthye."
    }), "\n", createVNode(_components.p, {
      children: "De film is de tweede in het nieuwe DC-universum, na James Gunn’s Superman die\ndeze zomer in de bioscoop verschijnt. Meer films in dit DC-universum zijn in de\nmaak, zoals een Clayface-film. En zo krijgt het DCU van James Gunn stilletjes\naan meer en meer vorm."
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

const url = "src/content/nieuws/supergirl-woman-of-tomorrow.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/supergirl-woman-of-tomorrow.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/supergirl-woman-of-tomorrow.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
