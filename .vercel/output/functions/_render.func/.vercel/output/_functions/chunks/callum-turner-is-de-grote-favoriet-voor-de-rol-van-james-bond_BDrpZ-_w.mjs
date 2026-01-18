import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Callum Turner is de grote favoriet voor de rol van James Bond",
  "date": "2025-12-05T07:13:25.798Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/d8bc43c9-1f08-4016-8c87-047c70916c4c",
  "trailer": "",
  "slug": "callum-turner-is-de-grote-favoriet-voor-de-rol-van-james-bond"
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
      children: "Het is al bijna vijf jaar geleden dat Daniel Craig stopte als James Bond.\nSindsdien speculeren we over wie hem gaat opvolgen. Veel namen zijn al voorbij\ngekomen, maar de laatste favoriet bij de bookmakers is Callum Turner."
    }), "\n", createVNode(_components.p, {
      children: "Callum Turner is een Britse acteur van 35 jaar. We kennen hem van rollen in\n‘Fantastic Beasts’ als Theseus Scamander, de broer van Newt, en van de\noorlogsserie ‘Masters of the Air’ en de film ‘The Boys in the Boat’. Hij is\nverloofd met zangeres Dua Lipa."
    }), "\n", createVNode(_components.p, {
      children: "Volgens het Nederlandse tijdschrift Privé heeft Turner het contract al getekend\nen zou hij snel officieel worden aangekondigd door MGM en Amazon. Andere bronnen\nzeggen dat dit niet zeker is, wat logisch is omdat zo’n groot nieuws meestal\nniet eerst in een roddelblad verschijnt."
    }), "\n", createVNode(_components.p, {
      children: "Bookmakers zoals Coral zeggen dat Turner nu de “grote favoriet” is met kansen\nvan 7-4. Een andere bookmaker gaf hem zelfs odds van 11-10, maar deze kansen\nkunnen snel veranderen."
    }), "\n", createVNode(_components.p, {
      children: "Eerder zagen we andere acteurs als favoriet, zoals Aaron Taylor-Johnson die lang\nop nummer één stond. Ook Henry Cavill, Idris Elba en Tom Holland werden vaak\ngenoemd. Dit zijn allemaal bekende en dure sterren, terwijl Callum Turner voor\nhet grote publiek minder bekend is. Dat zou een voordeel kunnen zijn, omdat hij\ngoedkoper is."
    }), "\n", createVNode(_components.p, {
      children: "De geruchten over Turner werden sterker na twee belangrijk nieuwsberichten. Ten\neerste wordt de film geregisseerd door Denis Villeneuve, die we kennen van\n‘Dune’ en ‘Arrival’. Ten tweede schrijft Steven Knight het script, de bedenker\nvan ‘Peaky Blinders’."
    }), "\n", createVNode(_components.p, {
      children: "Sommigen denken dat zijn vakantie de geruchten heeft aangewakkerd. Turner was op\nvakantie met Dua Lipa in Jamaica, waar ze verbleven in Goldeneye, het voormalige\nhuis van Ian Fleming, de schrijver van de James Bond boeken."
    }), "\n", createVNode(_components.p, {
      children: "Het maken van de film kan nog even duren. Eerst moet Denis Villeneuve klaar zijn\nmet ‘Dune: Part Three’, pas daarna kan de casting echt beginnen. Het script is\nook nog in ontwikkeling. De planning is om in 2027 te beginnen met filmen, voor\neen bioscooprelease in 2028."
    }), "\n", createVNode(_components.p, {
      children: "Dit wordt de eerste James Bond film die volledig onder controle van Amazon wordt\ngemaakt. Amazon heeft de rechten en wil graag een nieuw gezicht voor de rol,\niemand die de serie een nieuw tijdperk in kan loodsen."
    }), "\n", createVNode(_components.p, {
      children: "Naast de film is er ook een nieuw James Bond spel in ontwikkeling bij IO\nInteractive. Op Gamescom was er al een eerste preview te zien."
    }), "\n", createVNode(_components.p, {
      children: "We moeten dus nog even wachten op het officiële woord. Tot die tijd zullen de\ngeruchten en de gokkansen blijven veranderen. Callum Turner is nu de naam die\nhet meest genoemd wordt, maar dat kan volgende week alweer anders zijn."
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

const url = "src/content/nieuws/callum-turner-is-de-grote-favoriet-voor-de-rol-van-james-bond.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/callum-turner-is-de-grote-favoriet-voor-de-rol-van-james-bond.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/callum-turner-is-de-grote-favoriet-voor-de-rol-van-james-bond.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
