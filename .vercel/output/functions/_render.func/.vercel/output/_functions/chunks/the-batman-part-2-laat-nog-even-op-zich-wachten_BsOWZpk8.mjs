import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Batman Part 2 laat nog even op zich wachten",
  "date": "2025-01-09T19:35:51.350Z",
  "soort": "Film",
  "thumbnail": "https://i.ytimg.com/vi/NpkrYZgn5Gg/maxresdefault.jpg ",
  "trailer": "",
  "slug": "the-batman-part-2-laat-nog-even-op-zich-wachten",
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
      children: "De opvolger van “The Batman”, geregisseerd door Matt Reeves, is uitgesteld. De\nfilm staat nu gepland om op 1 oktober 2027 in de bioscoop te komen. Dit is een\njaar later dan het oorspronkelijke plan, dat oktober 2026 was. We zijn\nteleurgesteld dat we nu nog langer moeten wachten om weer naar Gotham City te\nkunnen gaan."
    }), "\n", createVNode(_components.p, {
      children: "Matt Reeves heeft in interviews verteld dat ze nog bezig zijn met het afmaken\nvan het script. Ondanks deze vertraging is er goed nieuws. Reeves vertelde dat\nde opnames dit jaar beginnen en dat ze er allemaal erg naar uitkijken. Hij hoopt\ndat het verhaal mensen zal verrassen. Dit klinkt al veelbelovend."
    }), "\n", createVNode(_components.p, {
      children: "Deze nieuwe Batman-film is de tweede in een trilogie die Reeves plant af te\nwerken. De eerste film, “The Batman”, kwam uit in 2022 en was een groot succes.\nVoor nu kunnen we nog genieten van de HBO-spin-off “The Penguin”, met Colin\nFarrell. Deze serie dook dieper in de wereld van Gotham en is nu beschikbaar om\nte kijken op Max."
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

const url = "src/content/nieuws/the-batman-part-2-laat-nog-even-op-zich-wachten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-batman-part-2-laat-nog-even-op-zich-wachten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-batman-part-2-laat-nog-even-op-zich-wachten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
