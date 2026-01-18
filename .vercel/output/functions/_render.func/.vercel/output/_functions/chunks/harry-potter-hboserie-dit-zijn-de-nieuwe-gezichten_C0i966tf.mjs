import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Harry Potter HBO-serie Dit zijn de nieuwe gezichten!",
  "date": "2025-06-11T18:07:50.484Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/2025-06-11T18-06-21-811Z.jpg",
  "trailer": "",
  "slug": "harry-potter-hboserie-dit-zijn-de-nieuwe-gezichten",
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
      children: "De nieuwe Harry Potter-serie van HBO zit volop in ontwikkeling en de casting is\neindelijk bekend. Deze serie wil trouw blijven aan J.K. Rowlings populaire\nboekenreeks, met elk seizoen gewijd aan één boek. Dat betekent dat wij het\nverhaal over tien jaar zien ontvouwen. De opnames starten binnenkort in Warner\nBros. Studios in het Verenigd Koninkrijk."
    }), "\n", createVNode(_components.p, {
      children: "Lox Pratt gaat onze iconische blonde Slytherin-rivaal Draco Malfoy vertolken.\nJohnny Flynn neemt de rol van zijn vader Lucius Malfoy over. Katherine Parkinson\nverschijnt als Molly Weasley, Ron’s moeder. Voor de Dursleys - Harry’s tante\nPetunia en oom Vernon - zijn Bel Powley en Daniel Rigby gecast. Opvallend: zij\nzullen jonger zijn dan in de films."
    }), "\n", createVNode(_components.p, {
      children: "De jonge klasgenoten krijgen nieuwe gezichten: Leo Earley als Seamus Finnigan,\nAlessia Leoni als Parvati Patil en Sienna Moosah als Lavender Brown. Bij de\nvolwassen rollen zien we John Lithgow als Albus Perkamentus, Janet McTeer als\nMinerva McGonagall, Paapa Essiedu als Severus Snape en Nick Frost als Rubeus\nHagrid."
    }), "\n", createVNode(_components.p, {
      children: "De hoofdtrio is al langer bekend: Dominic McLaughlin als Harry, Alastair Stout\nals Ron en Arabella Stanton als Hermione. HBO benadrukt trouw te blijven aan het\nbronmateriaal, met J.K. Rowling betrokken bij de productie en ervaren crew."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar deze frisse kijk op Zweinstein, verwacht in late 2026 of\nbegin 2027."
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

const url = "src/content/nieuws/harry-potter-hboserie-dit-zijn-de-nieuwe-gezichten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/harry-potter-hboserie-dit-zijn-de-nieuwe-gezichten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/harry-potter-hboserie-dit-zijn-de-nieuwe-gezichten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
