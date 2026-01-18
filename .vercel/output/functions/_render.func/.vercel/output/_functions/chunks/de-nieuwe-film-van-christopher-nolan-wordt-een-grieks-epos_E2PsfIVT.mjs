import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De nieuwe film van Christopher Nolan wordt een Grieks Epos?",
  "date": "2024-12-24T09:07:05.101Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734996528.jpg",
  "trailer": "",
  "slug": "de-nieuwe-film-van-christopher-nolan-wordt-een-grieks-epos",
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
      children: "Regisseur Christopher Nolan komt met een klein kerstcadeautje: zijn nieuwe film\nheet “The Odyssey” en is gebaseerd op een oud Griekse gedicht van Homerus. Het\nverhaal draait om Odysseus, die een lange en spannende reis maakt om thuis te\nkomen na de Trojaanse Oorlog. Deze reis duurt maar liefst tien jaar en zit vol\navonturen."
    }), "\n", createVNode(_components.p, {
      children: "Nolan heeft naam gemaakt met andere grote films, zoals “Oppenheimer”, die\nbekroond werd met Academy Awards voor Beste Film en Beste Regisseur. Mensen\nhebben al een tijdje geraden wat zijn volgende film zou zijn, en nu weten we het\neindelijk. De cast van “The Odyssey” is ook indrukwekkend. Grote sterren zoals\nMatt Damon, Zendaya, Tom Holland, Robert Pattinson, Lupita Nyong’o, Anne\nHathaway en Charlize Theron spelen allemaal mee."
    }), "\n", createVNode(_components.p, {
      children: "Het enthousiasme rondom deze film is begrijpelijk. Nolan maakt films die vaak\nbijzonder en uitdagend zijn. Het verhaal van Odysseus heeft ook veel diepgang en\navonturen, wat het perfect maakt voor een film van deze meester regisseur. We\nzijn heel benieuwd hoe dit verhaal uiteindelijk vertaald zal worden naar het\nwitte doek."
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

const url = "src/content/nieuws/de-nieuwe-film-van-christopher-nolan-wordt-een-grieks-epos.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-film-van-christopher-nolan-wordt-een-grieks-epos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-film-van-christopher-nolan-wordt-een-grieks-epos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
