import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cillian Murphy is niet de nieuwe Voldemort, helaas",
  "date": "2025-09-12T00:46:57.277Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1757637025.jpg",
  "trailer": "",
  "slug": "cillian-murphy-is-niet-de-nieuwe-voldemort-helaas",
  "tags": ["TV"]
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
      children: "Wij hebben al een tijdje geruchten gehoord dat Cillian Murphy de rol van\nVoldemort zou spelen in de nieuwe Harry Potter-serie, maar de acteur zelf heeft\nnu duidelijk gemaakt dat dit niet waar is. Tijdens een podcast vertelde Murphy\ndat zijn kinderen hem wel eens laten zien wat mensen online zeggen, maar dat hij\nzelf niets weet over de rol."
    }), "\n", createVNode(_components.p, {
      children: "Hij gaf ook aan dat het heel moeilijk zou zijn om Ralph Fiennes na te doen, die\nVoldemort speelde in alle acht de films. Murphy noemde Fiennes een echte\nacteerlegende en wenste de volgende acteur veel succes. Fiennes had eerder zelf\ngezegd dat hij het een goed idee vond als Murphy de rol zou overnemen, maar het\nlijkt er dus niet van te komen."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe Harry Potter-serie wordt gemaakt voor HBO en zal waarschijnlijk wel\ntien jaar duren, wat betekent dat de acteurs er heel lang mee bezig zijn. De\nopnames zijn al begonnen en de serie start in 2026. De hoofdrollen zijn al\nverdeeld: Dominic McLaughlin speelt Harry Potter, Alastair Stout is Ron Wijsneus\nen Arabella Stanton speelt Hermelien Griffel. Andere bekende namen zijn John\nLithgow als Perkamentus, Janet McTeer als Professor Anderling, Paapa Essiedu als\nProfessor Sneep en Nick Frost als Hagrid."
    }), "\n", createVNode(_components.p, {
      children: "Er is ook veel te doen geweest rond J.K. Rowling, de schrijfster van de boeken,\nvanwege haar uitspraken over transgender mensen. Hierdoor moeten acteurs in de\nserie soms vragen beantwoorden over wat ze daarvan vinden. John Lithgow, die\nPerkamentus speelt, zei dat hij toch meedoet omdat het waarschijnlijk zijn\nlaatste grote rol is."
    }), "\n", createVNode(_components.p, {
      children: "De serie wordt gemaakt door mensen die ook meewerkten aan Succession en Game of\nThrones, met Francesca Gardiner als showrunner en Mark Mylod als één van de\nregisseurs. Omdat de jonge acteurs snel ouder worden, is het belangrijk dat de\nopnames volgens plan verlopen. Voldemort komt pas echt in beeld in het vierde\nboek, dus er is nog even tijd om iemand te vinden."
    }), "\n", createVNode(_components.p, {
      children: "Cillian Murphy is net klaar met de populaire film Oppenheimer en heeft nu veel\nkeuze in rollen. Het is logisch dat hij misschien nee zou zeggen, zelfs als ze\nhem zouden vragen. Wij moeten dus nog even wachten op het echte nieuws over wie\nde nieuwe Voldemort wordt."
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

const url = "src/content/nieuws/cillian-murphy-is-niet-de-nieuwe-voldemort-helaas.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-is-niet-de-nieuwe-voldemort-helaas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-is-niet-de-nieuwe-voldemort-helaas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
