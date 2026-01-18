import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Thanksgiving",
  "date": "2023-12-26T00:00:00.000Z",
  "soort": "Film review",
  "schrijver": "Yorrick",
  "thumbnail": "https://images.bauerhosting.com/empire/2023/11/thanksgiving-2.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
  "poster": "https://m.media-amazon.com/images/M/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_FMjpg_UX1000_.jpg",
  "trailer": "KbU50SdL8zA",
  "summary": "Een typische slasherfilm met amusante kills met hier en daar een verrasende verschijning. Het plot laat wel wat te wensen over en is lichtjes voorspelbaar maar de spanning en humor doet denken aan de Scream franchise. Misschien kan Thanksgiving de Scream-fakkel van jaarlijkse slasherreleases overnemen.",
  "slug": "thanksgiving-review",
  "draft": false,
  "rating": 2.5,
  "tags": ["horror", "Film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "bedankt-voor-een-leuke-tijd",
    "text": "Bedankt voor een leuke tijd"
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
    children: [createVNode(_components.h2, {
      id: "bedankt-voor-een-leuke-tijd",
      children: "Bedankt voor een leuke tijd"
    }), "\n", createVNode(_components.p, {
      children: "Als fan van slasher horrorfilms was ik benieuwd naar Thanksgiving, vooral na zelf wat positieve reviews te hebben gehoord. Met gematigde verwachtingen begon ik er aan, onwetend van de semi-bekende namen in de cast zoals Patrick Dempsey en Rick Hoffman, een aangename verrassing."
    }), "\n", createVNode(_components.p, {
      children: "De film is gesitueerd in een klein Amerikaans dorpje, waar een tragische Black Friday rel plaatsvindt, resulterend in meerdere doden. Een jaar later duikt er een moordenaar op die systematisch de vermeende schuldigen van die Black Friday tragedie uitschakelt. Het plot is eenvoudig met een duidelijke “whodunit” draad en, hoewel enigszins voorspelbaar, biedt het toch enkele verrassende wendingen."
    }), "\n", createVNode(_components.p, {
      children: "Een storend element was de manier waarop de moordenaar zijn daden en boodschappen via Instagram deelt, wat ongeloofwaardig overkomt gezien zulke inhoud normaal snel verwijderd zou worden door Meta. Afgezien van deze en andere ongeloofwaardige momenten, biedt de film gruwelijke, soms humoristische moorden en een goede dosis spanning die fans van het genre zullen waarderen."
    }), "\n", createVNode(_components.p, {
      children: "De acteerprestaties zijn oké, niet goed, niet slecht, maar passend binnen de verwachtingen van een slasherfilm. De speciale effecten zijn deftig genoeg, en de film draagt duidelijk de stempel van Eli Roth, een gevestigde naam in de horrorwereld bekend om zijn werk aan films als “Hostel”. “Thanksgiving” is typisch voor het genre: niet gericht op grote prijzen, maar een solide, vermakelijk stuk binnen zijn niche."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de film niet geheel voldeed aan mijn hoogste verwachtingen, is het duidelijk dat Roth dit project met plezier heeft aangepakt. Het is boeiend dat “Thanksgiving” een uitgebreide versie is van een korte parodie die hij in 2007 maakte, een neptrailer die de spot dreef met Holiday Slasher Movies. Hoewel ik dus misschien meer verwachtte, waardeer ik de passie en toewijding achter het project. Het resultaat is een film die misschien kort is, maar toch een leuke watch is."
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

const url = "src/content/reviews/thanksgiving.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/thanksgiving.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/thanksgiving.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
