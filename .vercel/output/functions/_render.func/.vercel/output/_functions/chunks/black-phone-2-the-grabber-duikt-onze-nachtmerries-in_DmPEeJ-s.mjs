import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Black Phone 2 The Grabber duikt onze nachtmerries in",
  "date": "2025-06-02T13:34:04.743Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1748870410.jpg",
  "trailer": "v0kqkRZHqk4",
  "slug": "black-phone-2-the-grabber-duikt-onze-nachtmerries-in",
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
      children: "“The Black Phone” was een enorme verrassing die ons als horrorfans compleet\nmeesleepte. Deze spannende film uit 2022, gebaseerd op Joe Hills kortverhaal,\nkwam van regisseur Scott Derrickson en scenarioschrijver C. Robert Cargill -\nhetzelfde duo achter “Sinister”. We volgden de jonge Finney Blake (Mason Thames)\ndie werd ontvoerd door seriemoordenaar The Grabber (Ethan Hawke). Tijdens zijn\ngevangenschap vond hij een mysterieuze zwarte telefoon waarmee hij contact\nmaakte met de geesten van The Grabbers eerdere slachtoffers."
    }), "\n", createVNode(_components.p, {
      children: "De sequel “Black Phone 2” komt op 17 oktober 2025 uit. Ethan Hawke keert terug\nals The Grabber, samen met Mason Thames als Finney en Madeleine McGraw als zijn\nzus Gwen. Er komen ook nieuwe gezichten bij zoals Demián Bichir en Anna Lore."
    }), "\n", createVNode(_components.p, {
      children: "De net verschenen trailer onthult dat The Grabber terugkomt met de dreigende\nwoorden: “Dacht je dat ons verhaal afgelopen was?“. Deze keer lijkt hij een\nnieuwe tactiek te gebruiken: hij dringt binnen in kinder dromen, vergelijkbaar\nmet Freddy Krueger uit “A Nightmare on Elm Street”. Zo transformeert de film\nnaar een nachtmerrieachtige ervaring waarin The Grabber ons in onze slaap\nachtervolgt."
    }), "\n", createVNode(_components.p, {
      children: "Derrickson en Cargill geven aan dat ze bewust minder uitleg geven over de\nmonsters deze keer, zodat we dieper in het verhaal kunnen duiken. Net zoals in\nde eerste film, die horror combineerde met coming-of-age elementen, zien we\nFinney niet alleen vechten voor zijn leven maar ook groeien als persoon. We zijn\nbenieuwd hoe dit doorzet nu Finney ouder is en nieuwe uitdagingen tegemoet gaat."
    }), "\n", createVNode(_components.p, {
      children: "Met het enorme succes van de eerste film - $161 miljoen opbrengst tegen een\nbudget van $18 miljoen - verwachten we dat “Black Phone 2” opnieuw indruk maakt.\nWij kijken uit naar de volgende stap in Finneys strijd tegen The Grabber en deze\nnieuwe, griezelige wending in het verhaal."
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

const url = "src/content/nieuws/black-phone-2-the-grabber-duikt-onze-nachtmerries-in.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/black-phone-2-the-grabber-duikt-onze-nachtmerries-in.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/black-phone-2-the-grabber-duikt-onze-nachtmerries-in.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
