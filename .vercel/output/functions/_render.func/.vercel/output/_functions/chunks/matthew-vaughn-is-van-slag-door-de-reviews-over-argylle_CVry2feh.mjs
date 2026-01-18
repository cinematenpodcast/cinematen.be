import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Matthew Vaughn is van slag door de reviews over Argylle",
  "date": "2024-06-10T15:57:34.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1717716065.jpg",
  "trailer": "",
  "slug": "het-lot-van-argylle-een-blik-op-de-kritische-ontvangst-en-toekomstige-mogelijkheden",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "kritische-reacties-en-zware-teleurstelling",
    "text": "Kritische reacties en zware teleurstelling"
  }, {
    "depth": 2,
    "slug": "vaughn-laat-zijn-hoofd-niet-hangen",
    "text": "Vaughn laat zijn hoofd niet hangen"
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
    children: [createVNode(_components.p, {
      children: "In het begin van 2024 maakte de film ‘Argylle’ zijn entree, geregisseerd door Matthew Vaughn. Het spionnenavontuur, waarin Bryce Dallas Howard’s personage Elly Conway, een auteur van spionageverhalen, verwikkeld raakt in een echte spionagezaak, vertegenwoordigde voor Vaughn een nieuwe benadering van het actie-avontuurgengre. Ondanks dat sommige kijkers de film omarmden, ontving deze ook scherpe kritiek en behaalde slechts $96,2 miljoen aan de box office voordat hij zijn weg vond naar Apple TV+."
    }), "\n", createVNode(_components.h2, {
      id: "kritische-reacties-en-zware-teleurstelling",
      children: "Kritische reacties en zware teleurstelling"
    }), "\n", createVNode(_components.p, {
      children: "Vaughn was onthutst over de negatieve ontvangst van ‘Argylle’. Hij legde uit dat hij niet voorbereid was op de terugslag die volgde: “Ik liet mijn guard zakken bij Argylle.” Ondanks positieve testvertoningen en een geslaagde première kwam de kritiek als een schok. De film, met zijn lichte en speelse toon, werd door Vaughn beschouwd als een feelgood-film. De regisseur was verbijsterd door de vitriol in de recensies en de vraag “wat heb ik gedaan om deze mensen te beledigen?” kwam al snel op bij hem."
    }), "\n", createVNode(_components.p, {
      children: "Na de publicatie van de reviews, ging Vaughn actief op zoek naar wat er mogelijk verkeerd begrepen kon zijn: “Ik ging zelfs langs bij bioscopen omdat ik dacht, ‘Misschien ben ik de draad kwijt.‘” Hij erkent dat de reacties hem van streek brachten en hij zegt: “Ik krab echt aan mijn hoofd, want je kunt het niet negeren. Het waren niet slechts een paar slechte recensies.”"
    }), "\n", createVNode(_components.h2, {
      id: "vaughn-laat-zijn-hoofd-niet-hangen",
      children: "Vaughn laat zijn hoofd niet hangen"
    }), "\n", createVNode(_components.p, {
      children: "Desondanks blijft Vaughn filosofisch over de ontvangst van ‘Argylle’: “Het is zoals het is. Je leert van dit soort dingen.” Mocht het publiek zich alsnog tot de film aangetrokken voelen, dan bestaat de mogelijkheid dat we op een dag de extra avonturen van Argylle zullen zien die de filmmaker voor ogen had. “We doen het erg goed op streaming,” merkt Vaughn op. “Mensen vinden het leuk. Niets zou me gelukkiger maken dan nog een te maken. Ik krijg berichten waarin staat, ‘Wow, die recensies waren behoorlijk hard!’ Hoe meer mensen ‘Argylle’ kijken, hoe groter de kans dat er nog een komt. Ik zou graag nog een willen maken, we hebben het gepland.” Dat geldt ook voor de aangekondigde prequel ‘Young Argylle’. “Het zal een goede kleine film worden. We zullen zien,” aldus Vaughn. “Zeg nooit nooit.” Nog een missie, iemand?"
    }), "\n", createVNode(_components.p, {
      children: "‘Argylle’ is nu te zien op Apple TV+."
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

const url = "src/content/nieuws/matthew-vaughn-is-van-slag-door-de-reviews-over-argylle.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/matthew-vaughn-is-van-slag-door-de-reviews-over-argylle.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/matthew-vaughn-is-van-slag-door-de-reviews-over-argylle.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
