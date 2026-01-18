import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avatar’s live-action serie kampt met een groeiend probleem",
  "date": "2025-12-10T20:23:47.516Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1765392377.jpg",
  "trailer": "oZoZ1ivUdjU",
  "slug": "avatars-liveaction-serie-kampt-met-een-groeiend-probleem",
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
      children: "De originele tekenfilmserie “Avatar: The Last Airbender” is enorm populair.\nNetflix maakte er een live-action versie van, met echte acteurs in plaats van\ngetekende figuren."
    }), "\n", createVNode(_components.p, {
      children: "Nu komt er een tweede seizoen aan. In de trailer zagen we het personage Toph, maar we merkten vooral iets anders op: de acteur die Aang speelt, Gordon\nCormier, ziet er een stuk ouder uit. In het verhaal is Aang een jongen van twaalf jaar, maar acteurs groeien nu eenmaal in het echte leven. In een\ntekenfilm verandert het uiterlijk van een personage nooit, en dat is precies het grote verschil tussen animatie en series met echte mensen."
    }), "\n", createVNode(_components.p, {
      children: "Op sociale media werden er grapjes gemaakt over hoe oud Aang er nu uitziet.\nSommigen vergeleken het met de acteurs uit “Stranger Things”, die ook niet meer op tieners leken. Anderen merkten op dat Aang nu ouder lijkt dan de andere\nacteurs in de serie. Dit vormt een probleem voor het verhaal, want de essentie van “Avatar: The Last Airbender” is dat het draait om kinderen in een wereld van volwassenen. Als Aang er ouder uitziet, past dat niet meer bij zijn grappige en onvolwassen gedrag."
    }), "\n", createVNode(_components.p, {
      children: "In het eerste seizoen was Aang al serieuzer dan in de tekenfilm. Als hij er in seizoen twee ook ouder uitziet, wordt het nog moeilijker om hem als een kind te zien. Daardoor verliest het verhaal een stuk van zijn bijzonderheid en dreigt het gewoon nog een fantasy-serie te worden. Seizoen twee komt in 2026 op Netflix."
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

const url = "src/content/nieuws/avatars-liveaction-serie-kampt-met-een-groeiend-probleem.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatars-liveaction-serie-kampt-met-een-groeiend-probleem.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatars-liveaction-serie-kampt-met-een-groeiend-probleem.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
