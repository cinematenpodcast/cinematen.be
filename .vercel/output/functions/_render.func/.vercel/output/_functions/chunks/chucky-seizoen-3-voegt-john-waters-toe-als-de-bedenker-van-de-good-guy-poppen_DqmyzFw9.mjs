import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Chucky seizoen 3 voegt John Waters toe als de bedenker van de Good Guy-poppen",
  "date": "2023-12-16T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1702590595.jpg",
  "trailer": "",
  "slug": "chucky-seizoen-3-voegt-john-waters-toe-als-de-bedenker-van-de-good-guy-poppen",
  "draft": false,
  "tags": ["tv", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "legendarische-filmmaker-john-waters-heeft-een-rol-gekregen-in-seizoen-3-van-chucky-als-een-ander-personage-dan-degene-die-hij-speelde-in-seed-of-chucky",
    "text": "Legendarische filmmaker John Waters heeft een rol gekregen in seizoen 3 van Chucky als een ander personage dan degene die hij speelde in Seed of Chucky."
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
      id: "legendarische-filmmaker-john-waters-heeft-een-rol-gekregen-in-seizoen-3-van-chucky-als-een-ander-personage-dan-degene-die-hij-speelde-in-seed-of-chucky",
      children: "Legendarische filmmaker John Waters heeft een rol gekregen in seizoen 3 van Chucky als een ander personage dan degene die hij speelde in Seed of Chucky."
    }), "\n", createVNode(_components.p, {
      children: "Don Mancini, de schrijver van elke film in de Child’s Play / Chucky-franchise (behalve de remake) en ook enkele van de regisseurs, heeft de televisieserie Chucky ontwikkeld in samenwerking met producent David Kirschner. Mancini staat erom bekend acteurs meerdere rollen te laten spelen in de serie. Zo heeft Devon Sawa al vier verschillende personages gespeeld in de drie seizoenen van de televisieshow. Entertainment Weekly heeft nu bekendgemaakt dat de legendarische filmmaker John Waters de nieuwste toevoeging is aan de lijst van acteurs die twee verschillende rollen spelen in deze franchise. Waters, die eerder de rol van Pete Peters vertolkte, een paparazzi-fotograaf die in 2004’s Seed of Chucky in aanraking komt met een gevaarlijke situatie waarbij zuur zijn gezicht gedeeltelijk wegsmelt, maakt nu deel uit van de cast van Chucky seizoen 3. Hierin speelt hij Wendell Wilkins, “de teruggetrokken bedenker van de Good Guy-poppen, die verstrikt raakt in het psychopathische web van Chucky”."
    }), "\n", createVNode(_components.p, {
      children: "Chucky is een vervolg op alle Child’s Play-films (de remake niet meegerekend) en pakt het verhaal op waar Cult of Chucky is gebleven. Mancini en Kirschner zijn uitvoerend producenten van Chucky, samen met Harley Peyton, Alex Hedlund en Nick Antosca. In het eerste seizoen terroriseerde Chucky Hackensack, New Jersey en in het tweede seizoen werd hij naar een katholieke kostschool gestuurd. Nu is het de beurt aan Washington D.C. om wat problemen met Chucky te ervaren."
    }), "\n", createVNode(_components.p, {
      children: "Dit is de synopsis van seizoen 3: In zijn eindeloze dorst naar macht bevindt Chucky zich nu bij de machtigste familie ter wereld - de Eerste Familie van Amerika, binnen de beruchte muren van het Wit"
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

const url = "src/content/nieuws/chucky-seizoen-3-voegt-john-waters-toe-als-de-bedenker-van-de-good-guy-poppen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/chucky-seizoen-3-voegt-john-waters-toe-als-de-bedenker-van-de-good-guy-poppen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/chucky-seizoen-3-voegt-john-waters-toe-als-de-bedenker-van-de-good-guy-poppen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
