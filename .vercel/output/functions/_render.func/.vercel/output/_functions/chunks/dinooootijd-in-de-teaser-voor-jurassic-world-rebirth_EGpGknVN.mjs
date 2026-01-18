import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dinooootijd in de teaser voor Jurassic World Rebirth",
  "date": "2025-02-05T21:48:04.797Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/jurassicrebirth-trailer.jpg",
  "trailer": "jan5CFWs9ic",
  "slug": "dinooootijd-in-de-teaser-voor-jurassic-world-rebirth",
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
      children: "De nieuwste film uit de Jurassic Park franchise, genaamd Jurassic World:\nRebirth, komt op 2 juli in de bioscoop. Dit is het vierde deel van de Jurassic\nWorld serie en de zevende film over de bekende dinoparken en het verhaal speelt\nzich vijf jaar af na de gebeurtenissen in Jurassic World: Dominion."
    }), "\n", createVNode(_components.p, {
      children: "In deze film volgen we een team van wetenschappers dat op een belangrijke missie\ngaat. Ze moeten genetische monsters verzamelen van drie enorme dinosaurussen die\nin de lucht, op het land en in de zee leven. De aarde is veranderd en niet meer\ngeschikt voor dinosaurussen om in te leven. De overgebleven dinosaurussen zijn\nnu enkel nog te vinden in gebieden waar ze ooit gekweekt zijn. Het DNA van deze\nenorme wezens kan mogelijk helpen bij het maken van een levensreddende medicijn\nvoor mensen."
    }), "\n", createVNode(_components.p, {
      children: "Scarlett Johansson speelt de rol van Zora Bennett, een expert die speciale\nopdrachten uitvoert. Jonathan Bailey speelt de paleontoloog Dr. Henry Loomis en\nMahershala Ali is Duncan Kincaid, de teamleider die Zora vertrouwt om naar de\ndino’s te leiden. De film wordt geregisseerd door Gareth Edwards, gekend van\nGodzilla en Rogue One, en het script is geschreven door David Koepp, die ook aan\nhet originele Jurassic Park script heeft gewerkt."
    }), "\n", createVNode(_components.p, {
      children: "In het verhaal worden Zora en Duncan verbonden met een gezin dat vastzit op een\neiland. Dit gezin, geleid door Manuel Garcia-Rulfo, is schipbreuk geleden door\naanval van agressieve zeedinosaurussen. Samen moeten ze geheimen ontdekken die\nal jaren verstopt zijn op het eiland."
    }), "\n", createVNode(_components.p, {
      children: "De trailer geeft al een indruk van de spannende momenten die we kunnen\nverwachten. Fans van de franchise kunnen zich voorbereiden op nieuwe\nontdekkingen en gevaren in deze prachtige wereld."
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

const url = "src/content/nieuws/dinooootijd-in-de-teaser-voor-jurassic-world-rebirth.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dinooootijd-in-de-teaser-voor-jurassic-world-rebirth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dinooootijd-in-de-teaser-voor-jurassic-world-rebirth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
