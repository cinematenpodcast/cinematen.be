import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Devil Wears Prada 2 is officieel in de maak!",
  "date": "2025-11-12T17:56:22.258Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762969104.jpg",
  "trailer": "9c-DrMe8o5Q",
  "slug": "the-devil-wears-prada-2-is-officieel-in-de-maak",
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
      children: "Er is een eerste korte video uitgekomen voor de nieuwe film The Devil Wears\nPrada 2, het vervolg op de populaire film uit 2006. De film komt in de bioscoop\nop 1 mei 2026."
    }), "\n", createVNode(_components.p, {
      children: "In de video van 52 seconden zie je Miranda Priestly, gespeeld door Meryl Streep,\ndoor de gangen van het modeblad Runway lopen met rode hoge hakken aan. Ze stapt\neen lift binnen, waar haar vroegere hulp Andy Sachs, gespeeld door Anne\nHathaway, ook instapt. Miranda zegt tegen Andy: “Je hebt er lang over gedaan.”\nAndy lacht een beetje en zet een zonnebril op."
    }), "\n", createVNode(_components.p, {
      children: "Veel acteurs uit de eerste film keren terug voor dit tweede deel. Meryl Streep\nen Anne Hathaway spelen opnieuw de hoofdrollen, samen met Emily Blunt als Emily\nCharlton en Stanley Tucci als Nigel. Ook Tracie Thoms en Tibor Feldman zijn weer\nvan de partij."
    }), "\n", createVNode(_components.p, {
      children: "Er komen ook nieuwe gezichten bij. Kenneth Branagh speelt de man van Miranda,\nLucy Liu, Justin Theroux, B.J. Novak en Pauline Chalamet doen mee. Patrick\nBrammall speelt de nieuwe vriend van Andy, en Caleb Hearon, Helen J. Shen en\nConrad Ricamora vervolledigen de cast."
    }), "\n", createVNode(_components.p, {
      children: "Lucy Liu vertelde dat ze het fantastisch vond om mee te doen aan een project\nwaar mensen zo blij van worden, vooral omdat de film met mode te maken heeft."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van het tweede deel gaat verder waar de eerste film stopte. Miranda\nPriestly moet haar werk doen nu tijdschriften op papier minder populair worden.\nZe krijgt te maken met Emily Charlton, die vroeger voor haar werkte maar nu een\nbelangrijke baan heeft bij een groep van dure merken. Miranda heeft het geld van\ndie groep nodig voor haar tijdschrift."
    }), "\n", createVNode(_components.p, {
      children: "David Frankel, de regisseur van de eerste film, regisseert ook dit vervolg. De\nfilm wordt gemaakt door 20th Century Studios. Sommige acteurs uit de eerste\nfilm, zoals Adrian Grenier die Andy’s vriend speelde, keren niet terug."
    }), "\n", createVNode(_components.p, {
      children: "De film is gebaseerd op het boek van Lauren Weisberger. De eerste film was een\nwereldwijd succes en wij hebben heel lang gewacht op een tweede deel. Met zoveel\nterugkerende acteurs en nieuwe gezichten wordt dit vast een film die we niet\nmogen missen. Over iets meer dan een jaar kunnen we eindelijk gaan kijken."
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

const url = "src/content/nieuws/the-devil-wears-prada-2-is-officieel-in-de-maak.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-devil-wears-prada-2-is-officieel-in-de-maak.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-devil-wears-prada-2-is-officieel-in-de-maak.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
