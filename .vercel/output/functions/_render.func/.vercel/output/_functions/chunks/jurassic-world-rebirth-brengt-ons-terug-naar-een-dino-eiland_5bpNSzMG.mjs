import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jurassic World Rebirth brengt ons terug naar een dino-eiland",
  "date": "2024-08-30T12:35:15.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1724949904.jpg",
  "trailer": "",
  "slug": "jurassic-world-rebirth-een-nieuw-tijdperk-in-de-iconische-dino-saga",
  "tags": ["film"]
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
      children: "De nieuwste toevoeging aan de iconische dino-saga, Jurassic World Rebirth, staat gepland om de bioscopen te bestormen in juli 2025. Na bevestiging van Universal Pictures en Amblin Entertainment over een nieuwe Jurassic World-film in ontwikkeling, hebben we nu niet alleen een officiële titel, maar ook vroegtijdige plotdetails en een paar eerste beelden."
    }), "\n", createVNode(_components.p, {
      children: "Geschreven door David Koepp, bekend van Jurassic Park en The Lost World, wordt de film geregisseerd door Gareth Edwards, die ervaring heeft met gigantische reptielen na zijn werk aan Godzilla voor het Amerikaanse publiek. Met een sterrencast bestaande uit Scarlett Johansson, Mahershala Ali, Jonathan Bailey, Rupert Friend, Manuel Garcia-Rulfo, Luna Blaise, David Iacono, en meer, belooft Jurassic World Rebirth een episch vervolg te worden."
    }), "\n", createVNode(_components.p, {
      children: "In een wereld waar mensen en dinosaurussen zij aan zij leven, speelt Rebirth zich af vijf jaar na de gebeurtenissen in Dominion. Met aangepaste ecologieën en geïsoleerde omgevingen voor de reuzenhagedissen, onthult de synopsis dat de drie grootste wezens cruciale genetische informatie bevatten voor een levensreddend medicijn voor de mensheid. De hoofdrol van Scarlett Johansson als Zora Bennett, een expert in geheime CIA achtige operaties, zou een intrigerende verhaallijn met onverwachte wendingen krijgen."
    }), "\n", createVNode(_components.p, {
      children: "Na een succesvolle afronding van de opnames en de release van de eerste officiële beelden, waarbij de focus ligt op de personages gespeeld door Johansson, Jonathan Bailey, en Mahershala Ali, is de anticipatie rondom deze nieuwe toevoeging aan de franchise alleen maar toegenomen. Met regisseur Gareth Edwards aan het roer en nog steeds Steven Spielberg als uitvoerend producent, belooft Jurassic World Rebirth misschien een frisse kijk te bieden op het bestaan met dinosaurussen en de uitdagingen die daarmee gepaard gaan."
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

const url = "src/content/nieuws/jurassic-world-rebirth-brengt-ons-terug-naar-een-dino-eiland.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-rebirth-brengt-ons-terug-naar-een-dino-eiland.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-rebirth-brengt-ons-terug-naar-een-dino-eiland.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
