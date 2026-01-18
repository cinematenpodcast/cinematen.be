import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Netflix wil Warner Bros. kopen en dat maakt bioscopen nerveus",
  "date": "2025-12-05T18:18:13.130Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1764953116.jpg",
  "trailer": "",
  "slug": "netflix-wil-warner-bros-kopen-en-dat-maakt-bioscopen-nerveus",
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
      children: "Netflix, de streamingreus, heeft zijn zinnen gezet op Warner Bros. Discovery. De\ndienst zou ongeveer 83 miljard dollar willen neertellen voor de grote\nfilmstudio. Dit nieuws jaagt een schokgolf door de filmindustrie en wij, als\nliefhebbers van de bioscoap, vragen ons af wat dit betekent."
    }), "\n", createVNode(_components.p, {
      children: "Warner Bros. is een van de oudste en bekendste studios, verantwoordelijk voor\nreeksen als Harry Potter en Superman. Jaarlijks brengen zij zo’n 15 films in de\nbioscoop, films die voor veel bezoekers zorgen. Maar Netflix staat bekend om\nzijn thuis-kijk-model. Zij brengen hun eigen films zelden of maar heel kort in\nde bioscoop, vaak enkel om in aanmerking te komen voor prijzen. Daarom vrezen\nbioscopen dat Netflix minder Warner-films naar de zaal zal brengen of de\nexclusieve periode sterk zal inkorten."
    }), "\n", createVNode(_components.p, {
      children: "Ted Sarandos, de topman van Netflix, probeert de zorgen te sussen. Hij stelt dat\nfilms die voor de bioscoop gepland zijn, daar ook gewoon zullen draaien. Wel\nsprak hij over de ‘theatrical window’ – de tijd dat een film alleen in de\nbioscoop te zien is. Die periode is al gekrompen van 70-90 dagen naar 30-45\ndagen. Volgens Sarandos zullen deze windows nog korter worden, omdat dat beter\nzou zijn voor ons als kijker."
    }), "\n", createVNode(_components.p, {
      children: "Voor bioscopen is dat een ramp. Als een film maar twee weken exclusief is, gaan\nminder mensen misschien de deur uit. De belangenorganisatie Cinema United, met\nbaas Michael O’Leary, slaat alarm. Zij zien de overname als een groot gevaar dat\nwereldwijd wel 25 procent van het bioscoopbezoek in Amerika kan wegnemen.\nKleinere zalen zouden hierdoor kunnen sluiten."
    }), "\n", createVNode(_components.p, {
      children: "Ook andere studios, zoals Paramount, uiten hun bezorgdheid. Zij vrezen dat\nNetflix niet dezelfde drijfveer heeft om films in zalen uit te brengen; hun doel\nis vooral abonnees werven voor hun streamingdienst."
    }), "\n", createVNode(_components.p, {
      children: "Netflix heeft beloofd de bestaande afspraken van Warner Bros., die films gepland\nhebben staan tot 2029, na te komen. Toch gebruiken zij in hun communicatie het\nwoord ‘verwacht’ in plaats van een harde garantie. Wat er na 2029 gebeurt, is\nvoor iedereen een vraagteken."
    }), "\n", createVNode(_components.p, {
      children: "Bioscopen staan voorlopig met lege handen. Zij moeten Netflix op zijn woord\ngeloven. De deal is nog niet rond; regelgevers moeten de overname eerst nog\ngoedkeuren. Groepen als Cinema United gaan proberen de aankoop tegen te houden\nof extra voorwaarden te bedingen om bioscopen te beschermen."
    }), "\n", createVNode(_components.p, {
      children: "Het is een onzekere tijd. Aan de ene kant kunnen nieuwe films sneller bij ons\nthuis verschijnen. Aan de andere kant kan de magische ervaring van de bioscoop\nin gevaar komen, en dat is voor velen van ons een essentieel onderdeel van het\nfilm kijken."
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

const url = "src/content/nieuws/netflix-wil-warner-bros-kopen-en-dat-maakt-bioscopen-nerveus.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-wil-warner-bros-kopen-en-dat-maakt-bioscopen-nerveus.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-wil-warner-bros-kopen-en-dat-maakt-bioscopen-nerveus.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
