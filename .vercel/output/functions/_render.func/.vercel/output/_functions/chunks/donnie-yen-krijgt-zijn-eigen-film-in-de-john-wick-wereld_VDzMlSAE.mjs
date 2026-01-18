import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Donnie Yen krijgt zijn eigen film in de John Wick wereld",
  "date": "2025-01-09T21:36:41.023Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1736457017.jpg",
  "trailer": "",
  "slug": "donnie-yen-krijgt-zijn-eigen-film-in-de-john-wick-wereld",
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
      children: "Donnie Yen is sowieso al een grote naam in de wereld van actie films. Maar na\nhet succes van John Wick: Chapter 4, waar hij de rol van Caine speelde, komt er\nnu ook een nieuwe film waarin hij de hoofdrol speelt. Er zij nog niet veel\ndetails vrijgegeven over de film maar wat we al wel weten is dat het verhaal dus\ngaat over Caine, een blinde assassin die zijn leven aan de Hoge Tafel heeft\ngegeven. Nu Caine vrij is van zijn verplichtingen, kan hij eindelijk weer in\ncontact komen met zijn dochter."
    }), "\n", createVNode(_components.p, {
      children: "In de nieuwe film zal Caine waarschijnlijk moeten vechten tegen Akira, een\nandere assassin die wraak wil nemen voor de dood van haar vader. De rol van\nAkira wordt gespeeld door Rina Sawayama."
    }), "\n", createVNode(_components.p, {
      children: "Het team dat verantwoordelijk is voor de John Wick films, waaronder regisseur\nChad Stahelski, is bezig met het sterk uitbreiden van dit universum. Dit\nbetekent dat er ook andere spin-off films in de maak zijn, zoals Ballerina, die\nlater dit jaar al uitkomt in de zalen."
    }), "\n", createVNode(_components.p, {
      children: "Donnie Yen zelf zei dat hij vastbesloten is om iets nieuws en spannends te\nbrengen naar de franchise. De fans hebben veel verwachtingen, en hij wil er\nzeker van zijn dat hij deze kan waarmaken."
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

const url = "src/content/nieuws/donnie-yen-krijgt-zijn-eigen-film-in-de-john-wick-wereld.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/donnie-yen-krijgt-zijn-eigen-film-in-de-john-wick-wereld.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/donnie-yen-krijgt-zijn-eigen-film-in-de-john-wick-wereld.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
