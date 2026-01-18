import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Waar is Marty McFly's iconische gitaar gebleven?",
  "date": "2025-06-03T18:33:25.627Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1748973625.jpg",
  "trailer": "",
  "slug": "waar-is-marty-mcflys-iconische-gitaar-gebleven",
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
      children: "In de film Back to the Future staat een moment dat voor altijd in ons geheugen\ngegrift blijft: wanneer Marty McFly, gespeeld door Michael J. Fox, “Johnny B.\nGoode” speelt op zijn felrode Gibson ES-345 gitaar. Onvoorstelbaar maar waar:\ndeze legendarische gitaar is al tientallen jaren spoorloos. Gibson Guitars is nu\nsamen met Michael J. Fox en Bob Gale, de schrijver en producer van de film, een\ndocumentaire gestart genaamd Lost to the Future om de gitaar terug te vinden."
    }), "\n", createVNode(_components.p, {
      children: "Filmmaker Doc Crotzer leidt het team dat op zoek gaat naar de verdwenen gitaar.\nDe zoektocht blijkt moeilijk omdat het instrument al veertig jaar vermist is en\nherinneringen vervagen. Oorspronkelijk werd de gitaar gehuurd bij Norman’s Rare\nGuitars in Los Angeles. Het vermoeden bestaat dat hij na teruggave aan de\nverhuurzaak is verkocht, maar aan wie blijft onduidelijk. Geruchten spreken over\neen vriendin van Norman of een Japanse koper."
    }), "\n", createVNode(_components.p, {
      children: "Er is geen serienummer dat kan helpen, maar wel een uniek kenmerk: op de 12e\nfret zit een enkele gouden marker in plaats van de normale split inlays. Dit\nnoemt het team hun “smoking gun” om de echte gitaar te identificeren."
    }), "\n", createVNode(_components.p, {
      children: "Wij weten hoe iconisch deze scène is. Muzikanten zoals John Mayer en Chris\nMartin van Coldplay gaven aan dat Marty McFly’s optreden hen inspireerde om\nmuziek te maken. Gibson hoopt dat de huidige eigenaar zich meldt, misschien om\nde gitaar te verkopen of te delen. Een vintage model kan tussen de $25.000 en\n$50.000 waard zijn. Dit is meer dan een zoektocht naar een instrument; het is\neen jacht op een stuk filmgeschiedenis dat ons allemaal raakt."
    }), "\n", createVNode(_components.p, {
      children: "Heb je tips? Bel of stuur een bericht naar 1-855-345-1955 of ga naar\nLosttoTheFuture.com. Wij hopen dat de gitaar ooit weer in de schijnwerpers\nstaat, net als Marty op dat podium."
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

const url = "src/content/nieuws/waar-is-marty-mcflys-iconische-gitaar-gebleven.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/waar-is-marty-mcflys-iconische-gitaar-gebleven.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/waar-is-marty-mcflys-iconische-gitaar-gebleven.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
