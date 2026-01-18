import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het einde van de Saw franchise?",
  "date": "2025-03-18T11:19:50.766Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/sawxo.jpg",
  "trailer": "",
  "slug": "het-einde-van-de-saw-franchise",
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
      children: "De nieuwste film van de horrorfranchise Saw, Saw XI, is blijkbaar geannuleerd.\nDe film zou eerst uitkomen in september 2024, maar deze datum werd al naar\nseptember 2025 verschoven. Het plan was om het verhaal van Saw X verder te\nvertellen, dat in 2023 een groot succes was."
    }), "\n", createVNode(_components.p, {
      children: "Volgens berichten was er veel frustratie en ruzie achter de schermen. Dit begon\nin januari 2024 en leidde ertoe dat de film maar niet van de grond kwam. Een\nbron van Bloody Disgusting, die dicht bij de productie staat, heeft gezegd dat\nhet project nu “100% dood” is. Ondanks dat Lionsgate, de studio achter de films,\nniet in detail is gegaan over de situatie, lijkt de strijd tussen de producenten\nde oorzaak van de annulering te zijn."
    }), "\n", createVNode(_components.p, {
      children: "Tobin Bell, die bekend staat om zijn rol als Jigsaw, had moeten terugkeren om\nopnieuw de rol van John Kramer te spelen. Andere acteurs uit de eerdere films,\nzoals Shawnee Smith en Costas Mandylor, zouden ook terugkeren. We tasten nu in\nhet duister over wat er met de franchise gaat gebeuren."
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

const url = "src/content/nieuws/het-einde-van-de-saw-franchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-einde-van-de-saw-franchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-einde-van-de-saw-franchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
