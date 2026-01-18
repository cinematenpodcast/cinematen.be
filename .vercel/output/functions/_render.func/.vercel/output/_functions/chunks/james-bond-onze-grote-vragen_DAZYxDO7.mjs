import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "James Bond Onze Grote Vragen",
  "date": "2025-06-27T17:54:03.195Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751046259.jpg",
  "trailer": "",
  "slug": "james-bond-onze-grote-vragen",
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
      children: "James Bond is al ruim 60 jaar een filmicoon, maar recente veranderingen zetten\nalles op zijn kop. Sinds Amazon MGM Studios de franchise overnam, hebben Barbara\nBroccoli en Michael G. Wilson hun creatieve rol overgedragen. Dit betekent een\nhistorische verschuiving voor de reeks."
    }), "\n", createVNode(_components.p, {
      children: "Denis Villeneuve, bekend van “Dune” en “Arrival”, is de nieuwe regisseur. Hij\nnoemt het een grote eer, maar wij vragen ons af of zijn rustige vertelstijl past\nbij Bonds actievolle wereld. Sommigen van ons zijn enthousiast, anderen blijven\ntwijfelen."
    }), "\n", createVNode(_components.p, {
      children: "Over de nieuwe Bond-acteur doen hardnekkige geruchten de ronde. Tom Holland\n(Spider-Man) en Jacob Elordi zijn populaire namen, maar veel van ons twijfelen\naan hun geschiktheid. Harris Dickinson lijkt voor anderen een betere keuze –\nminder bekend, maar daarom misschien wel verfrissend. De voorkeur gaat duidelijk\nuit naar een Brit onder de 30."
    }), "\n", createVNode(_components.p, {
      children: "Officiële castingsgesprekken zijn er nog niet, en wij verwachten de film pas\ntegen 2028. Die lange productietijd geeft ruimte om zorgvuldig een script en\nacteurs te selecteren."
    }), "\n", createVNode(_components.p, {
      children: "Wij hebben uiteenlopende verwachtingen. Sommigen hopen op een speelduur onder\n150 minuten, terwijl anderen zich zorgen maken over de actie-inhoud. Na de\nkritiek op Daniel Craigs laatste films willen velen onder ons een terugkeer naar\nklassieke avonturen. Voor ons is het cruciaal dat Villeneuve de balans vindt\ntussen vernieuwing en de essentie van Bond."
    }), "\n", createVNode(_components.p, {
      children: "De toekomst blijft onzeker, maar één ding is duidelijk: de discussie over 007’s\nvolgende stap houdt ons stevig in zijn greep."
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

const url = "src/content/nieuws/james-bond-onze-grote-vragen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/james-bond-onze-grote-vragen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/james-bond-onze-grote-vragen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
