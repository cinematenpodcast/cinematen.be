import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Rory McCann, The Hound, vervangt Ray Stevenson in Ahsoka seizoen 2",
  "date": "2025-01-10T14:22:59.977Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1736517179.jpg",
  "trailer": "",
  "slug": "rory-mccann-the-hound-vervangt-ray-stevenson-in-ahsoka-seizoen-2",
  "tags": ["tv"]
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
      children: "Ahsoka, de populaire Star Wars-serie, komt binnenkort terug voor een tweede\nseizoen. Ray Stevenson, die de rol van de voormalige Jedi Baylan Skoll speelde,\noverleed in mei 2023. Dit was slechts enkele maanden voor de première van het\neerste seizoen. Zijn personage was technisch gezien een slechterik, maar hij was\nook erg geliefd. De show moet nu beslissen hoe ze verder gaan met zijn rol, en\nze hebben gekozen voor Rory McCann om de rol van Baylan Skoll over te nemen."
    }), "\n", createVNode(_components.p, {
      children: "Rory McCann is vooral bekend van zijn rol als Sandor “The Hound” Clegane in de\nhitserie Game of Thrones. De keuze om Rory te casten is goedgekeurd door de\nweduwe van Ray Stevenson, wat aangeeft dat zelfs de familie achter deze\nbeslissing staat."
    }), "\n", createVNode(_components.p, {
      children: "Productie van het tweede seizoen begint binnenkort, maar er is nog geen datum\nvoor wanneer het seizoen uitkomt. Fans zijn benieuwd naar hoe het verhaal van\nBaylan Skoll zich verder zal ontwikkelen, vooral omdat zijn karakter misschien\nwel een aantal belangrijke wendingen in het verhaal van Ahsoka kan brengen."
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

const url = "src/content/nieuws/rory-mccann-the-hound-vervangt-ray-stevenson-in-ahsoka-seizoen-2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/rory-mccann-the-hound-vervangt-ray-stevenson-in-ahsoka-seizoen-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/rory-mccann-the-hound-vervangt-ray-stevenson-in-ahsoka-seizoen-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
