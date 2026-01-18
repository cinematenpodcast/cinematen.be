import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Krypto is de nieuwe ster van Superman",
  "date": "2025-08-17T10:43:38.774Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1755206433.jpg",
  "trailer": "",
  "slug": "krypto-is-de-nieuwe-ster-van-superman",
  "tags": ["TV"]
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
      children: "James Gunn’s nieuwe Superman-film is een succes bij zowel critici als het\npubliek. De film brengt een frisse kijk op de Man of Steel, vol grappige en\nspannende momenten. We zien gevechten met enorme monsters, een Green Lantern met\nopvallend haar en Lex Luthor als hilarische schurk. Maar de echte blikvanger is\nKrypto, Supermans superhond die schattigheid en humor brengt, al zorgt hij soms\nook voor problemen."
    }), "\n", createVNode(_components.p, {
      children: "De film moest vertrouwen winnen bij wie moe was van standaard superheldenfilms.\nJames Gunn pakte dit aan met een vreugdevolle, lichte toon. Opmerkelijk: de film\nveroorzaakte een stijging in hondenadopties. Krypto inspireert ons dus niet\nalleen als personage, maar ook in het echte leven."
    }), "\n", createVNode(_components.p, {
      children: "Door dit succes krijgt Krypto nu zijn eigen animatieserie “Krypto Saves the Day”\nop HBO Max. De 2D-animatie laat hem avonturen beleven zoals kinderen redden in\nMetropolis. Wij vinden het heerlijk om hem de stad te zien helpen."
    }), "\n", createVNode(_components.p, {
      children: "Deze korte films doen ons denken aan Marvel’s ‘One Shots’ uit het verleden. Net\nals die korte Marvel-verhalen geven ze extra diepte aan de wereld zonder dat we\nalles moeten volgen. Ze vullen Supermans universum aan op een ontspannen manier,\nzonder zware verhaallijnen."
    }), "\n", createVNode(_components.p, {
      children: "Met dit succes lijkt het erop dat de makers de juiste toon te pakken hebben. Wij\nzijn blij met deze positieve benadering die ruimte laat voor luchtige\npersonages."
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

const url = "src/content/nieuws/krypto-is-de-nieuwe-ster-van-superman.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/krypto-is-de-nieuwe-ster-van-superman.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/krypto-is-de-nieuwe-ster-van-superman.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
