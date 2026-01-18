import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Daniel Craig misschien Sgt. Rock in het nieuwe DCU",
  "date": "2024-11-21T06:59:08.527Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1732135305.jpg",
  "trailer": "",
  "slug": "daniel-craig-misschien-sgt-rock-in-het-nieuwe-dcu",
  "tags": ["film"]
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
      children: "Daniel Craig, de acteur die vooral bekend is als de vorige James Bond, kan\nbinnenkort een nieuwe rol spelen in een film over een (minder bekende)\nsuperheld, Sgt. Rock. Dit is een personage uit de comics van DC, dat een soldaat\nis uit de Tweede Wereldoorlog. Craig zou samenwerken met regisseur Luca\nGuadagnino. Dit zou hun tweede samenwerking zijn, nadat ze samenwerkten aan de\nfilm “Queer”."
    }), "\n", createVNode(_components.p, {
      children: "Volgens berichten is Guadagnino in gesprek om de film over Sgt. Rock te\nregisseren. Het klinkt als een interessant project, vooral omdat het geen\ntypische superheldenfilm is. Sgt. Rock is geen superheld zoals de bekendere\npersonages, maar eerder een gewone soldaat die in de oorlog moet zien te\noverleven."
    }), "\n", createVNode(_components.p, {
      children: "De geschiedenis van Sgt. Rock gaat terug naar 1959, toen hij voor het eerst\nverscheen in de DC-comics. Hij is de leider van een eenheid genaamd Easy Company\nen heeft met verschillende iconische personages uit de DC-wereld, zoals Batman,\navonturen gehad. De film zou dus ook verbonden kunnen zijn met andere verhalen\nin het DC-universum. De schrijver van het script, Justin Kuritzkes, heeft ook\neerder samengewerkt met Guadagnino."
    }), "\n", createVNode(_components.p, {
      children: "James Gunn en Peter Safran, de nieuwe leiders van DC Films, lijken een andere\nrichting uit te willen gaan met dit nieuwe DCU. Door makers uit de\nonafhankelijke filmwereld aan te trekken, zoals Guadagnino, kan het DCU een\nunieke verhalen presenteren."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog niet zeker wanneer de film zal worden uitgebracht of wat precies het\nverhaal zal zijn. We zijn erg nieuwsgierig of dit project daadwerkelijk van de\ngrond zal komen. Wat het ook wordt, de samenwerking tussen een grote acteur als\nDaniel Craig en een innovatieve regisseur als Luca Guadagnino kan wel eens\nleiden tot een heel interessante film over Sgt. Rock."
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

const url = "src/content/nieuws/daniel-craig-misschien-sgt-rock-in-het-nieuwe-dcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-craig-misschien-sgt-rock-in-het-nieuwe-dcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-craig-misschien-sgt-rock-in-het-nieuwe-dcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
