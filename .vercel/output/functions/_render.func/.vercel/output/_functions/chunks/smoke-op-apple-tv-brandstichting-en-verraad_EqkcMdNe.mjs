import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Smoke op Apple TV+ Brandstichting en Verraad",
  "date": "2025-06-27T15:13:41.211Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1750971087.jpg",
  "trailer": "",
  "slug": "smoke-op-apple-tv-brandstichting-en-verraad",
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
      children: "Apple TV+ brengt “Smoke”, een nieuwe serie met Taron Egerton en Jurnee Smollett\nin de hoofdrollen. Zij spelen detectives die brandstichtingen onderzoeken in het\nPacific Northwest. Egerton vertolkt brandonderzoeker Dave Gudsen, terwijl\nSmollett politieagent Michelle Calderone neerzet. De serie komt van Dennis\nLehane, de geest achter boeken als “Shutter Island” en “Mystic River”."
    }), "\n", createVNode(_components.p, {
      children: "De verhaallijn is geïnspireerd op waargebeurde misdaden van John Leonard Orr,\neen beruchte brandstichter en massamoordenaar uit de jaren 80. Wat begint als\neen routine-onderzoek krijgt een verrassende wending wanneer wij ontdekken dat\nEgertons personage zélf een van de brandstichters is. Deze twist transformeert\nde serie van een detectiveverhaal naar een kat-en-muisspel waarin Gudsen zijn\neigen daden moet onderzoeken."
    }), "\n", createVNode(_components.p, {
      children: "Naast de hoofdrolspelers telt de cast sterren als Rafe Spall, Ntare Guma Mbaho\nMwine en John Leguizamo. De recensies zijn gemengd: sommigen prijzen de\nacteerprestaties, anderen vinden dat het verhaal aan kracht inboet tegen het\neinde."
    }), "\n", createVNode(_components.p, {
      children: "“Smoke” is nu te streamen op Apple TV+. De serie duikt diep in de emotionele\ncomplexiteit van de personages en hun verborgen motieven. Voor ons, liefhebbers\nvan misdaaddrama’s, biedt dit een intrigerende combinatie van psychologische\ndiepgang en spannende plotwendingen. Wij zijn benieuwd hoe dit verraad zich\nverder ontvouwt."
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

const url = "src/content/nieuws/smoke-op-apple-tv-brandstichting-en-verraad.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/smoke-op-apple-tv-brandstichting-en-verraad.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/smoke-op-apple-tv-brandstichting-en-verraad.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
