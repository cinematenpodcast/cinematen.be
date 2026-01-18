import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "David Corenswet onthuld in nieuw Superman pak voor James Gunn's film",
  "date": "2024-05-07T14:45:11.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715013296.jpg",
  "trailer": "",
  "slug": "nieuwe-superman-david-corenswet-onthuld-in-hagelnieuw-pak-voor-james-gunns-film",
  "tags": []
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "de-kop-is-er-af",
    "text": "De kop is er af"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "DC-fans werden op CinemaCon getrakteerd op een exclusieve eerste blik op de iconische Kryptoniaanse held, Superman. De Amerikaanse acteur David Corenswet schittert als Hollywood’s nieuwste ‘Man van Staal’ in James Gunn’s langverwachte reboot van het DC-filmuniversum."
    }), "\n", createVNode(_components.h2, {
      id: "de-kop-is-er-af",
      children: "De kop is er af"
    }), "\n", createVNode(_components.p, {
      children: "James Gunn, tevens hoofd van DC Studios samen met Peter Safran, presenteerde voor het eerst een glimp van het kostuum bij het aankondigen van de start van de filmopnames voor Superman in februari. Maar nu is het moment daar: we krijgen eindelijk de volledige onthulling."
    }), "\n", createVNode(_components.p, {
      children: "De foto, genomen op de set door Jess Miglio, toont Corenswet in zijn volledige superheldenkostuum. En verrassend genoeg, alles wat je ziet is authentiek en in-camera, aldus Gunn op Threads op maandag."
    }), "\n", createVNode(_components.p, {
      children: "Het Superman-ensemble bevat ook bekende namen zoals Rachel Brosnahan als Lois Lane, Nicholas Hoult als Lex Luthor, Skyler Gisondo als Jimmy Olsen, Milly Alcock als Supergirl, Nathan Fillion als Green Lantern Guy Gardner, Isabela Merced als Hawkgirl, Edi Gathegi als Mister Terrific, Anthony Carrigan als Metamorpho, Sean Gunn als Maxwell Lord, Sara Sampaio als Eve Teschmacher, María Gabriela de Faría als Angela Spica, en Wendell Pierce als Perry White."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de aanwezigheid van diverse DC-striphelden, benadrukte Gunn onlangs op Threads nogmaals dat de focus ligt op de essentie: Superman en zijn antagonist Lex Luthor."
    }), "\n", createVNode(_components.p, {
      children: "Eerder bekend als “Superman: Legacy”, vertelt de film het verhaal van Kal-El die worstelt met zijn Kryptoniaanse afkomst en zijn opvoeding als Clark Kent uit Smallville. Gunn legde uit dat hoewel hij initieel de titel “Superman: Legacy” hanteerde, het duidelijk werd dat “Superman” volstond. De film zal verschijnen in de bioscopen op 11 juli 2025."
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

const url = "src/content/nieuws/david-corenswet-onthuld-in-nieuw-superman-pak-voor-james-gunns-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/david-corenswet-onthuld-in-nieuw-superman-pak-voor-james-gunns-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/david-corenswet-onthuld-in-nieuw-superman-pak-voor-james-gunns-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
