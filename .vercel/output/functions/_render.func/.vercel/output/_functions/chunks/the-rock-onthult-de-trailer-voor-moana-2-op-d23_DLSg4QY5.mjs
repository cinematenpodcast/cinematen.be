import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Rock onthult de trailer voor Moana 2 op D23",
  "date": "2024-08-10T09:15:20.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/moana-2-trailer-reveals-a-better-glimpse-at-the-films-story-1723257845.jpg",
  "trailer": "hDZ7y8RP5HE",
  "slug": "moana-2-een-diepere-duik-in-het-avontuur",
  "tags": ["film", "trailer"]
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
      children: "Disney’s ‘Moana 2’ belooft een spannend vervolg op het originele Oscar-genomineerde verhaal uit 2016. In dit nieuwe avontuur, dat drie jaar na de gebeurtenissen van de eerste film plaatsvindt, volgen we Moana en haar bemanning op zoek naar het verloren eiland Motufetu. Dit eiland, ooit verbonden met de oceaan, is nu verborgen door een jaloerse God van Stormen."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens Disney’s D23 heeft Dwayne The Rock Johnson de trailer onthult aan het grote publiek."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal draait om Moana’s groei als personage en leider. Ze heeft een innerlijke drang om meer te ontdekken en durft hiervoor te gaan, een thema dat resonantie vindt bij zowel jonge als oudere kijkers. De toevoeging van een mysterieuze vijand omringd door paars licht en vleermuizen voegt een nieuwe dimensie toe aan het avontuur. Tijdens haar zoektocht naar andere bewoners en confrontatie met deze dreiging, wordt Moana bijgestaan door haar demigod-vriend Maui."
    }), "\n", createVNode(_components.p, {
      children: "In de trailer zien we Moana in een rol als grote zus, begeleidend haar 3-jarige zus Simea. Deze relatie voegt een persoonlijk element toe aan het verhaal en toont Moana’s zorgzame kant naast haar moed als leider."
    }), "\n", createVNode(_components.p, {
      children: "‘Moana 2’ brengt niet alleen visueel spektakel, maar ook nieuwe muziek en diepgang in Polynesische cultuur. Diverse bekroonde artiesten zoals Abigail Barlow, Emily Bear, Opetaia Foa’i en Mark Mancina leveren hun talent voor de muzikale rijkdom van de film. Het gebruik van de Aloha-geest en Polynesische invloeden voegen een unieke sfeer toe aan het verhaal, waardoor het publiek wordt meegevoerd naar deze betoverende wereld."
    }), "\n", createVNode(_components.p, {
      children: "De regisseurs David Derrick Jr., Jason Hand en Dana Ledoux Miller nemen het stokje over van de oorspronkelijke filmmakers en tillen het verhaal naar nieuwe hoogten. Een getalenteerde stemmencast, waaronder Temuera Morrison, Nicole Scherzinger en Alan Tudyk, ademt leven in de personages en zorgt voor een boeiende kijkervaring."
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

const url = "src/content/nieuws/the-rock-onthult-de-trailer-voor-moana-2-op-d23.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-rock-onthult-de-trailer-voor-moana-2-op-d23.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-rock-onthult-de-trailer-voor-moana-2-op-d23.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
