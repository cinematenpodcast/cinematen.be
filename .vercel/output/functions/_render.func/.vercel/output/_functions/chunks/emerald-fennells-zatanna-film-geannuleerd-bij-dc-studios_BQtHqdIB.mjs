import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Emerald Fennells Zatanna film geannuleerd bij DC Studios",
  "date": "2023-12-23T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1703261505.jpg",
  "trailer": "",
  "slug": "emerald-fennells-zatanna-film-geannuleerd-bij-dc-studios",
  "draft": false,
  "tags": ["film", "comics"]
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
      children: "Emerald Fennell heeft bevestigd dat haar geplande Zatanna-film voor DC Studios is geannuleerd. Fennell, bekend van haar werk aan “Promising Young Woman”, werd in 2021 aangekondigd als scenarioschrijver voor het project. Echter, met de grote veranderingen in het leiderschap bij DC Studios en de herstructurering van plannen door James Gunn en Peter Safran, is het project geschrapt. Fennell gaf haar interesse in het superheldengenre toe, maar benadrukte dat het niet haar natuurlijke voorkeur heeft. Terwijl de Zatanna-film niet doorgaat, is Fennell’s nieuwe film “Saltburn” nu beschikbaar om te streamen op Prime Video."
    }), "\n", createVNode(_components.p, {
      children: "Het was enkele weken voordat Warner Bros. James Gunn en Peter Safran aanstelde als hoofden van DC Studios en een franchise-reboot. Emerald Fennell werd gekozen om het scenario te schrijven voor een solofilm gebaseerd op Zatanna, een magiër uit de strips van DC Comics met echte magische krachten. Nu Aquaman and the Lost Kingdom, de laatste film van het voormalige DCEU, uitkomt en fans uitkijken naar de release van Chapter 1: Gods and Monsters, heeft Emerald Fennell de toekomst van haar eigen DC-film bevestigd."
    }), "\n", createVNode(_components.p, {
      children: "Toen haar werd gevraagd naar de status van haar Zatanna-film en of deze een plaats heeft onder het nieuwe regime van Gunn en Safran bij DC Studios, vertelde Emerald Fennell aan Josh Horowitz: “Nee. Nee, het gaat niet door.” Fennell ging verder om de reden te verklaren:"
    }), "\n", createVNode(_components.p, {
      children: "“Dit was allemaal vóór ‘Promising Young Woman’, eigenlijk. Dus dit was iets waar ik aan werkte vóór ‘Promising Young Woman’, toen J.J. Abrams net bij Warner Bros. aankwam en de Dark Universe opnieuw zou opstarten. Ze waren van plan deze nieuwe donkere, soort villain universe, of held/schurk universe te creëren. En ik dacht dat hij geweldig was. Zijn team bij Bad Robot, Hannah, zijn producent bij Bad Robot, was zo cool en interessant.”"
    }), "\n", createVNode(_components.p, {
      children: "Ondanks dat Zatanna een superheldin uit de stripboeken is, gaf Fennell toe dat ze aanvankelijk niet veel wist “over het superheldengenre” en benaderde ze de film vanuit het perspectief van “hoe maak je een film als die voor mensen zoals ik?”:"
    }), "\n", createVNode(_components.p, {
      children: "“En omdat ik dol ben op allerlei soorten genres… Veel van ‘Promising Young Woman’ en ‘Saltburn’ zijn gericht op een specifiek genre waar ik zeker interesse in heb, zoals ‘Okay, ik weet niet veel over het superheldengenre. Het is niet een genre waar ik van nature naartoe neig.’ Dus ik dacht, ‘Oké, nou, ik zou graag willen weten… hoe maak je een film als die voor mensen zoals ik, die misschien niet veel weten en de eerste keer niet per se een kaartje zouden kopen.’ Dus dat was het idee. Ik dacht, ‘Oké, dit is interessant.’ En Zatanna is gewoon een heel, heel cool personage.”"
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

const url = "src/content/nieuws/emerald-fennells-zatanna-film-geannuleerd-bij-dc-studios.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/emerald-fennells-zatanna-film-geannuleerd-bij-dc-studios.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/emerald-fennells-zatanna-film-geannuleerd-bij-dc-studios.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
