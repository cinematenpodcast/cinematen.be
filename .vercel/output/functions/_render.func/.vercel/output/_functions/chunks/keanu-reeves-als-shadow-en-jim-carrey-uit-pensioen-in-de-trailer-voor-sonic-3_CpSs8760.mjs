import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Keanu Reeves als Shadow en Jim Carrey uit pensioen in de trailer voor Sonic 3",
  "date": "2024-08-29T12:49:17.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/shadow-makes-for-a-great-antagonist-1724765124.jpg",
  "trailer": "qSu6i2iFMO0",
  "slug": "sonic-the-hedgehog-3-keanu-reeves-als-shadow-in-episch-slot-van-de-trilogie",
  "tags": ["film", "trailer"]
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
      children: "Paramount Pictures heeft onlangs de langverwachte trailer onthuld voor “Sonic the Hedgehog 3,” waarin de iconische figuur Shadow the Hedgehog, vertolkt door niemand minder dan Keanu Reeves, zijn intrede maakt. Deze nieuwe toevoeging aan de Sonic-franchise belooft een episch slot te worden en staat gepland voor release op 20 december."
    }), "\n", createVNode(_components.p, {
      children: "In deze derde film van de Sega-videogames bundelt Sonic (vertolkt door Ben Schwartz) opnieuw de krachten met vrienden Knuckles (gespeeld door Idris Elba) en Tails (stem door Colleen O’Shaughnessey) om de strijd aan te gaan met hun geduchte tegenstander, Shadow. Dit mysterieuze personage met ongekende krachten vormt een bedreiging die Team Sonic nog nooit eerder heeft ervaren. Met hun vaardigheden tot het uiterste getest, moeten ze een onwaarschijnlijke alliantie aangaan om Shadow te stoppen en de planeet te beschermen."
    }), "\n", createVNode(_components.p, {
      children: "De film, die volgt na twee eerdere kaskrakers die wereldwijd meer dan $319 miljoen aan bioscoopopbrengsten hebben gegenereerd, belooft een visueel spektakel te worden onder leiding van regisseur Jeff Fowler. Het script, geschreven door Pat Casey & Josh Miller en John Whittington, is gebaseerd op een verhaal van Casey & Miller."
    }), "\n", createVNode(_components.p, {
      children: "De cast wordt uitgebreid met Krysten Ritter en bestaande leden zoals Natasha Rothwell, Shemar Moore, Tika Sumpter, Idris Elba en Lee Majdoub keren terug voor het derde deel. De productie wordt verzorgd door Neal H. Moritz, Toby Ascher, Toru Nakahara en Hitoshi Okuno, samen met uitvoerende producenten Haruki Satomi, Shuji Utsumi, Yukio Sugino, Fowler, Tommy Gormley en Tim Miller."
    }), "\n", createVNode(_components.p, {
      children: "Shadow, voor het eerst geïntroduceerd in het videospel “Sonic Adventure 2” uit 2001, is een creatie van Professor Gerald Robotnik, de grootvader van Sonic’s aartsrivaal, Dr. Robotnik (opnieuw gespeeld door Jim Carrey!). Met buitengewone snelheid en het vermogen tot Chaos Control, waarmee hij ruimte en tijd kan manipuleren, begon Shadow als tegenstander van Sonic. In de videospellen van Sega, waarop de filmfranchise is gebaseerd, groeit hij echter uit tot een bondgenoot."
    }), "\n", createVNode(_components.p, {
      children: "“Sonic the Hedgehog 3” belooft een spannend hoofdstuk te worden in de Sonic-saga, waarbij fans over de hele wereld zich kunnen verheugen op een adembenemende confrontatie tussen onze held en een geduchte nieuwe tegenstander."
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

const url = "src/content/nieuws/keanu-reeves-als-shadow-en-jim-carrey-uit-pensioen-in-de-trailer-voor-sonic-3.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/keanu-reeves-als-shadow-en-jim-carrey-uit-pensioen-in-de-trailer-voor-sonic-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/keanu-reeves-als-shadow-en-jim-carrey-uit-pensioen-in-de-trailer-voor-sonic-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
