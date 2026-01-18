import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "HBO's Green Lantern serie Lanterns heeft zijn lead gevonden",
  "date": "2024-10-10T14:05:27.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1728484950.jpg",
  "trailer": "",
  "slug": "hbos-lanterns-nieuwe-dc-serie-werpt-licht-op-green-lantern-corps",
  "tags": ["tv", "casting", "comics"]
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
      children: "HBO’s aankomende serie “Lanterns”, gebaseerd op de populaire DC-stripreeks Green Lantern, werpt een nieuwe blik op het Green Lantern Corps met focus op personages John Stewart en Hal Jordan. De serie heeft recentelijk acteur Aaron Pierre gecast als John Stewart, een rol waarvoor hij nauw concurreerde met Stephan James."
    }), "\n", createVNode(_components.p, {
      children: "In de serie, geproduceerd door HBO in samenwerking met Warner Bros Television en DC Studios, zullen Pierre en Kyle Chandler naar verwachting de hoofdrollen vertolken als de intergalactische politieagenten John Stewart en Hal Jordan. Het verhaal draait om een duistere moordzaak die hen naar de Amerikaanse Midwest leidt, waar ze hun expertise bundelen om het mysterie te ontrafelen."
    }), "\n", createVNode(_components.p, {
      children: "Met Chris Mundy van Ozark, Damon Lindelof van Watchmen en striptekenaar + King aan boord als schrijvers en uitvoerend producenten, belooft de serie een intrigerende mix te worden van spanning, actie en mysterie. Regisseur James Hawes zal de eerste twee afleveringen leiden en fungeert tevens als uitvoerend producent."
    }), "\n", createVNode(_components.p, {
      children: "Aaron Pierre, bekend van Rebel Ridge en Old, heeft zich snel gevestigd als een veelgevraagde acteur in de entertainmentindustrie. Met een groeiende lijst van prestigieuze projecten op zijn naam, waaronder een aankomende stemrol in Barry Jenkins’ Lion King prequel, belooft Pierre een verfrissende kijk te bieden op het geliefde personage John Stewart."
    }), "\n", createVNode(_components.p, {
      children: "Met de productie in volle gang en nog geen officiële releasedatum aangekondigd, blijft “Lanterns” een van de meest verwachte live-action projecten binnen het uitgebreide DC-universum. Fans kunnen zich verheugen op een mix van intergalactisch avontuur en menselijk drama, allemaal verweven in een meeslepende verhaallijn."
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

const url = "src/content/nieuws/hbos-lanterns-nieuwe-dc-serie-werpt-licht-op-green-lantern-corps.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hbos-lanterns-nieuwe-dc-serie-werpt-licht-op-green-lantern-corps.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hbos-lanterns-nieuwe-dc-serie-werpt-licht-op-green-lantern-corps.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
