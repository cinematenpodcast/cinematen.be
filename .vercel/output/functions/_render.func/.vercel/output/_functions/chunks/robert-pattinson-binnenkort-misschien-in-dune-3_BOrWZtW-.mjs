import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Robert Pattinson binnenkort misschien in Dune 3",
  "date": "2025-04-09T12:35:30.537Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1744145280.jpg",
  "trailer": "",
  "slug": "robert-pattinson-binnenkort-misschien-in-dune-3",
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
      children: "Robert Pattinson, zou binnenkort een rol spelen in de nieuwe Dune film. Deze\nfilm is een vervolg op Dune: Part One en Dune: Part Two. Denis Villeneuve, de\nregisseur, werkt momenteel aan het script voor deze derde film, die\nwaarschijnlijk Dune: Messiah zal heten. De opnames zijn gepland voor de zomer."
    }), "\n", createVNode(_components.p, {
      children: "In de voorgaande Dune films zagen we grote sterren zoals Timothée Chalamet,\nZendaya en Florence Pugh. De films waren zeer succesvol en hebben samen meer dan\n1,1 miljard dollar opgehaald. Ze hebben ook acht Oscars gewonnen. Pattinson\nwordt genoemd als een mogelijke nieuwe toevoeging aan deze sterrencast."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel het niet zeker is welke rol Pattinson zal spelen, wordt er wel aangegeven\ndat het een belangrijke rol zal zijn. Er zijn al speculaties over de mogelijke\npersonages die hij kan vertolken. Een van de opties is Scytale, een schurk in\nhet verhaal. Dit personage is een shape-shifter en speelt een grote rol in de\nplannen tegen Paul Atreides, die terugkeert in de nieuwe film. Paul, gespeeld\ndoor Timothée Chalamet, zou nu de God Emperor zijn geworden in het Dune verhaal."
    }), "\n", createVNode(_components.p, {
      children: "We verwachten dat de nieuwe Dune film zich zal richten op de gebeurtenissen na\nDune: Part Two. Dit betekent dat het verhaal van Paul verder zal gaan, en dat er\nnieuwe vijanden zullen opduiken. Pattinson’s unieke acteerstijl kan een\ninteressante draai geven aan de nieuwe personages in deze film."
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

const url = "src/content/nieuws/robert-pattinson-binnenkort-misschien-in-dune-3.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-pattinson-binnenkort-misschien-in-dune-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-pattinson-binnenkort-misschien-in-dune-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
