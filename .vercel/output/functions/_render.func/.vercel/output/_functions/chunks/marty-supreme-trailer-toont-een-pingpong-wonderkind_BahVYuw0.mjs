import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marty Supreme trailer toont een ping-pong wonderkind",
  "date": "2025-08-13T19:13:15.218Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755097718.jpg",
  "trailer": "PI6-qKhzTt8",
  "slug": "marty-supreme-trailer-toont-een-pingpong-wonderkind",
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
      children: "De Safdie broers, bekend van “Good Time” en “Uncut Gems”, gaan nu apart verder\nmet eigen projecten. Benny Safdie werkt aan “The Smashing Machine” met Dwayne\nJohnson, terwijl Josh Safdie een film maakt over een ping-pong wonderkind uit de\njaren ‘50. “Marty Supreme” heet de film, met Timothée Chalamet in de hoofdrol\nals Marty Mauser."
    }), "\n", createVNode(_components.p, {
      children: "De eerste trailer is nu uit. We zien Marty Mauser die hard werkt om een\ntopspeler te worden. Gwyneth Paltrow speelt een belangrijke rol, maar de\ngrootste verrassing is Kevin O’Leary van “Shark Tank”. Dit is zijn eerste\nfilmrol ooit. Hij lijkt als antagonist tegenover Marty te staan, wat interessant\nis gezien zijn kritische imago."
    }), "\n", createVNode(_components.p, {
      children: "O’Leary staat als vierde in de trailer credits, wat wijst op een grote bijdrage.\nJosh Safdie kiest bewust voor niet-acteurs, net zoals hij eerder deed met Kevin\nGarnett in “Uncut Gems”. Voor “Marty Supreme” castte hij zo’n 140 niet-acteurs,\nwaaronder Penn Jillette."
    }), "\n", createVNode(_components.p, {
      children: "De film komt op 25 december 2025 in de bioscoop. Deze mix van drama, sport en\nonverwachte castingkeuzes maakt “Marty Supreme” tot een project om in de gaten\nte houden. Ping-pong als hoofdthema is bijzonder in de wereld van biopics. We\nzijn benieuwd of Safdie opnieuw een meesterwerk aflevert."
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

const url = "src/content/nieuws/marty-supreme-trailer-toont-een-pingpong-wonderkind.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marty-supreme-trailer-toont-een-pingpong-wonderkind.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marty-supreme-trailer-toont-een-pingpong-wonderkind.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
