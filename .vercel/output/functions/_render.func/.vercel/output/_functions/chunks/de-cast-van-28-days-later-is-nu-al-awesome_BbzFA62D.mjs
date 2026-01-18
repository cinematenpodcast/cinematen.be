import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De cast van 28 Days Later is nu al awesome",
  "date": "2024-04-25T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1713996138.jpg",
  "trailer": "",
  "slug": "de-evolutie-van-de-28-days-later-franchise",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-nieuw-hoofdstuk-met-top-acteurs",
    "text": "Een nieuw hoofdstuk met top acteurs"
  }, {
    "depth": 2,
    "slug": "een-nieuw-tijdperk-voor-de-zombiehorror",
    "text": "Een nieuw tijdperk voor de zombiehorror?"
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
      children: "Sinds de release van Danny Boyle’s huiveringwekkende horrorfilm “28 Days Later” in 2002 heeft de franchise een opmerkelijke groei doorgemaakt. Met zijn kenmerkende lo-fi esthetiek en snelle zombies, die een nieuw tijdperk inluidden voor het genre, wist de originele film zowel het publiek als critici te fascineren."
    }), "\n", createVNode(_components.h2, {
      id: "een-nieuw-hoofdstuk-met-top-acteurs",
      children: "Een nieuw hoofdstuk met top acteurs"
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van “28 Years Later,” de nieuwste toevoeging aan de reeks, belooft een intrigerend vervolg te worden onder leiding van regisseur Danny Boyle en schrijver Alex Garland. Terwijl het verhaal nog geheim blijft, wakkert de bevestiging van sterren zoals Jodie Comer, Aaron Taylor-Johnson en Ralph Fiennes de opwinding van de fans nu al wel aan."
    }), "\n", createVNode(_components.p, {
      children: "De oorspronkelijke film introduceerde de wereld aan Cillian Murphy, die schitterde als de protagonist in een post-apocalyptisch Verenigd Koninkrijk overspoeld door razende zombies. Met een bescheiden budget slaagde “28 Days Later” erin een cultklassieker te worden, prijzenswaardig vanwege zijn energieke vertelstijl en vernieuwende benadering van het horrorgenre."
    }), "\n", createVNode(_components.h2, {
      id: "een-nieuw-tijdperk-voor-de-zombiehorror",
      children: "Een nieuw tijdperk voor de zombiehorror?"
    }), "\n", createVNode(_components.p, {
      children: "Na het succes van de initiële films, waarbij “28 Weeks Later” de verwoesting uitbreidde naar het Europese vasteland, bevindt de franchise zich nu op het punt om een nieuwe trilogie van verhalen te lanceren. Met een aanzienlijk hoger budget en gevestigde acteurs aan boord, markeert dit een opwindende evolutie in de saga die begon met een handjevol overlevenden in een dystopisch Engeland."
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

const url = "src/content/nieuws/de-cast-van-28-days-later-is-nu-al-awesome.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-cast-van-28-days-later-is-nu-al-awesome.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-cast-van-28-days-later-is-nu-al-awesome.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
