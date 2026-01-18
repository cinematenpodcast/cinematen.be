import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Superman Kan deze nieuwe DC film de bioscoop redden?",
  "date": "2025-06-20T12:12:34.401Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1750353479.jpg",
  "trailer": "",
  "slug": "superman-kan-deze-nieuwe-dc-film-de-bioscoop-redden",
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
      children: "James Gunn brengt binnenkort zijn nieuwe Superman-film uit, de start van een\ngloednieuwe DC Universe. Wij kijken er enorm naar uit, en de filmindustrie is\nook al volop in de ban van de openingscijfers. De eerste box office\nvoorspellingen liegen er niet om: experts schatten dat de film tussen de $90 en\n$145 miljoen kan binnenhalen tijdens dat eerste weekend. De National Research\nGroup durft zelfs $135 miljoen voorspellen, wat meteen een pak hoger ligt dan\nMan of Steel met z’n $116 miljoen."
    }), "\n", createVNode(_components.p, {
      children: "David Corenswet neemt de rol van Superman voor zijn rekening, met Rachel\nBrosnahan als Lois Lane en Nicholas Hoult als Lex Luthor. Ook Isabela Merced\n(Hawkgirl) en Edi Gathegi (Mister Terrific) maken deel uit van de cast. Het\nverhaal wordt een frisse take, géén herhaling van die bekende origin-verhalen.\nJammer genoeg blijft de plot voorlopig nog goed verborgen."
    }), "\n", createVNode(_components.p, {
      children: "Met een productiebudget van $225 miljoen moet Superman wereldwijd minstens $700\nmiljoen binnenhalen om winst te maken. Een openingsweekend van $135 miljoen zou\nalvast een sterke basis leggen. Als dat lukt, komt het in de buurt van Batman v\nSuperman ($166 miljoen) en Marvel’s Black Panther: Wakanda Forever ($181\nmiljoen). Alles hangt af van hoe het publiek en de critici reageren. Positieve\nreacties kunnen zorgen voor een stevige doorloop in de weken na release."
    }), "\n", createVNode(_components.p, {
      children: "Warner Bros. trekt nu al flink de marketingkar tot aan de release in juli 2025.\nAls deze film slaagt, zet het de deur wijd open voor de geplande DC-projecten\nzoals Supergirl en Creature Commandos. Voor ons voelt dit als een cruciaal\nmoment: een sterke cast, een origineel verhaal en die doordachte promotie kunnen\nhet startschot zijn voor een heel nieuw DC-tijdperk."
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

const url = "src/content/nieuws/superman-kan-deze-nieuwe-dc-film-de-bioscoop-redden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-kan-deze-nieuwe-dc-film-de-bioscoop-redden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-kan-deze-nieuwe-dc-film-de-bioscoop-redden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
