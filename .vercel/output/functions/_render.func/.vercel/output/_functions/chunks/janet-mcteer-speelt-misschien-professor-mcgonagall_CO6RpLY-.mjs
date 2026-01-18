import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Janet McTeer speelt (misschien) Professor McGonagall",
  "date": "2025-03-08T09:17:13.018Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1741366063.jpg",
  "trailer": "",
  "slug": "janet-mcteer-speelt-misschien-professor-mcgonagall",
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
      children: "De aankomende “Harry Potter” TV-serie van HBO heeft mogelijk zijn nieuwe\nProfessor Minerva McGonagall gevonden. Janet McTeer, een bekende actrice die\neerder in films en series heeft gespeeld zoals “Ozark” en “The Old Man,” is\nmomenteel in onderhandeling om deze rol te vervullen. Dit personage werd\nvoorheen gespeeld door de overleden actrice Maggie Smith in de “Harry Potter”\nfilms."
    }), "\n", createVNode(_components.p, {
      children: "HBO heeft nog niets officieel bevestigd maar heeft wel aangegeven dat er veel\nbelangstelling en speculatie is rondom de casting. De serie is bedoeld om een\ntrouwe aanpassing van de boeken van J.K. Rowling te zijn en zal zich proberen\nrichten op de echte leeftijden van de personages. Dit betekent dat Snape\nbijvoorbeeld maar 31 jaar oud zal zijn in de serie."
    }), "\n", createVNode(_components.p, {
      children: "Janet McTeer is een zeer ervaren actrice die al sinds de jaren 80 actief is. Ze\nheeft verschillende prijzen gewonnen, waaronder twee Oscar-nominaties. Ze is ook\nbekend van haar rollen in de films “Albert Nobbs” en “Tumbleweeds.” McTeer’s\nervaring komt goed van pas, daar ze ook op het podium heeft gewerkt, waar ze een\nTony Award won voor haar rol in “A Doll’s House.”"
    }), "\n", createVNode(_components.p, {
      children: "Nu we toch bezig zijn met geruchten: Phoebe Waller Bridge zou in de running zijn\nom Petunia Dursley te spelen en oscarwinnaar Cillian Murphy zou in gesprek zijn\nom misschien de rol van Quirrel te spelen. Deze geruchten zijn nog heel vers,\nhet zal dus afwachten worden wat hiervan bevestigd wordt door HBO."
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

const url = "src/content/nieuws/janet-mcteer-speelt-misschien-professor-mcgonagall.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/janet-mcteer-speelt-misschien-professor-mcgonagall.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/janet-mcteer-speelt-misschien-professor-mcgonagall.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
