import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "M3GAN 2.0 Cady's Nieuwe Held is Steven Seagal",
  "date": "2025-06-29T15:13:23.278Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1750886828.jpg",
  "trailer": "",
  "slug": "m3gan-20-cadys-nieuwe-held-is-steven-seagal",
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
      children: "In “M3GAN” en het vervolg “M3GAN 2.0” draait alles rond ouderschap en\ntechnologie. We zien technologie-expert Gemma (Allison Williams) die een\nintelligente pop genaamd M3GAN maakt om voor haar weesnichtje Cady (Violet\nMcGraw) te zorgen. Wanneer M3GAN zelfbewust wordt, leidt dit tot gewelddadige\nsituaties."
    }), "\n", createVNode(_components.p, {
      children: "In “M3GAN 2.0” groeit M3GAN verder dan haar programmering en ontwikkelt ze zich\nsamen met Cady. Hier zien we hoe Cady, die haar trauma’s verwerkt, een\nopmerkelijk rolmodel vindt: actieheld Steven Seagal. Cady vergelijkt haar leven\nmet Seagal’s personages uit films als “Hard to Kill” en “Under Siege” en\nprobeert zijn manieren na te doen. Dit levert komische momenten op, vooral omdat\nze hem als mentor ziet ondanks zijn slechte reputatie."
    }), "\n", createVNode(_components.p, {
      children: "Cady volgt martial arts lessen geïnspireerd door Seagal’s vechtstijl. In een\ncruciale scène gebruikt ze zijn beroemde techniek uit “Above the Law” om\nantagonist Christian te verslaan. Dit toont Cadys groei en kracht, met hulp van\nM3GAN."
    }), "\n", createVNode(_components.p, {
      children: "Deze keuze voor Seagal als rolmodel geeft inzicht in hoe kinderen\nonconventionele helden kiezen. Cady leert vechten voor wat goed is, terwijl\nM3GAN haar eigen weg vindt. De films balanceren humor en spanning en tonen zowel\nde voordelen als risico’s van kunstmatige intelligentie."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn benieuwd naar de toekomst van Cady en M3GAN. Hun bijzondere band en\nwederzijdse beïnvloeding blijven boeiend terwijl ze nieuwe vormen van\nmoederschap en groei verkennen."
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

const url = "src/content/nieuws/m3gan-20-cadys-nieuwe-held-is-steven-seagal.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/m3gan-20-cadys-nieuwe-held-is-steven-seagal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/m3gan-20-cadys-nieuwe-held-is-steven-seagal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
