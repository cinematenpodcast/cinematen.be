import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cristin Milioti wint Emmy maar komt niet terug in The Batman Part II",
  "date": "2025-09-16T18:16:58.856Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758044967.jpg",
  "trailer": "",
  "slug": "cristin-milioti-wint-emmy-maar-komt-niet-terug-in-the-batman-part-ii",
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
      children: "Cristin Milioti heeft een Emmy Award gewonnen voor haar rol als Sofia Falcone in\nde serie The Penguin. Ze kreeg de prijs voor beste actrice in een beperkte\nserie. Sofia is een slecht persoon in de serie, maar Milioti liet ook de\nverdrietige kant van haar personage goed zien met haar acteertalent."
    }), "\n", createVNode(_components.p, {
      children: "Helaas is er minder goed nieuws voor wie hoopte om haar terug te zien in het\nvolgende Batman-film. Matt Reeves, de regisseur van The Batman, heeft bevestigd\ndat Sofia niet in The Batman Part II zal verschijnen. Het script voor de film\nwas al klaar voordat de serie The Penguin werd gemaakt, waardoor Sofia niet in\nhet verhaal past. Reeves vindt het jammer, want hij noemt Milioti een geweldige\nactrice."
    }), "\n", createVNode(_components.p, {
      children: "Aan het einde van The Penguin serie zit Sofia vast in Arkham Asylum. Ze krijgt\neen brief van Selina Kyle, wat sommigen zagen als een opening voor de volgende\nfilm, maar dat is dus niet het geval. Wel denkt Reeves na over een tweede\nseizoen van The Penguin. Als dat er komt, zal Sofia waarschijnlijk weer meedoen."
    }), "\n", createVNode(_components.p, {
      children: "The Batman Part II wordt nu voorbereid. Het script is af en sommige acteurs\nhebben het al gelezen. Opnames beginnen in het voorjaar van 2026 en de film komt\nin 2027 in de bioscoop."
    }), "\n", createVNode(_components.p, {
      children: "In de serie The Penguin is Batman niet te zien. Reeves legt uit dat de serie\nzich afspeelt vlak na de gebeurtenissen van de film The Batman. Gotham City is\neen puinhoop door de overstroming die de Riddler heeft veroorzaakt. Batman is\ndruk met het helpen van de stad en denkt na over wat er is gebeurd."
    }), "\n", createVNode(_components.p, {
      children: "The Penguin serie gaat over Oz Cobb, die de baas wil worden van de misdaad in\nGotham. De serie was erg populair. Reeves en showrunner Lauren LeFranc overwegen\neen tweede seizoen, maar alleen als ze iets nog beters kunnen bedenken."
    }), "\n", createVNode(_components.p, {
      children: "The Batman film eindigde met Batman die een symbool van hoop wordt. In het\nvervolg zal hij een andere Batman zijn. De Penguin serie is te kijken op Max en\nalle acht afleveringen zijn nu beschikbaar. Wij hopen op meer avonturen van Oz\nCobb in de toekomst."
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

const url = "src/content/nieuws/cristin-milioti-wint-emmy-maar-komt-niet-terug-in-the-batman-part-ii.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cristin-milioti-wint-emmy-maar-komt-niet-terug-in-the-batman-part-ii.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cristin-milioti-wint-emmy-maar-komt-niet-terug-in-the-batman-part-ii.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
