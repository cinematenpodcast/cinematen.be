import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Russell Crowe keert terug op zijn brommerke in The Pope's Exorcist sequel",
  "date": "2024-05-02T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714656331.jpg",
  "trailer": "",
  "slug": "het-vervolg-van-the-popes-exorcist-en-de-opkomst-van-een-nieuwe-franchise",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "crowe-onthulde-al-dat-het-een-trilogie-wordt",
    "text": "Crowe onthulde al dat het een trilogie wordt"
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
      children: "Leuk nieuws voor de (weinige) fans van de 2023 horrorhit, “The Pope’s Exorcist,” met niemand minder dan Russell Crowe in de hoofdrol. Fans over de hele wereld hebben reikhalzend uitgekeken naar het nieuws over deze voortzetting van het verhaal rond de welbekende exorcist."
    }), "\n", createVNode(_components.p, {
      children: "Producent Jeff Katz bracht via sociale media het verlossende woord aan alle trouwe fans van “The Pope’s Exorcist.” Na een periode van onzekerheid en stilte, kwam eindelijk het langverwachte bericht dat er groen licht was voor een vervolgfilm in de franchise. Met de kenmerkende humor die we van hem gewend zijn, maakte Katz niet alleen de terugkeer van de film bekend, maar riep hij de fans ook op om zich voor te bereiden op een nieuwe rit vol spanning en demonische confrontaties."
    }), "\n", createVNode(_components.p, {
      children: "In reactie op een suggestie van een fan over de titel van de aankomende sequel, liet Katz doorschemeren dat hij geïnspireerd was door de structuur van de “Planet of the Apes”-films. Hij hintte naar mogelijke titels zoals “Pray for the Pope’s Exorcist” en “Heaven Help the Pope’s Exorcist,” waardoor de fans alvast kunnen speculeren over wat hen te wachten staat."
    }), "\n", createVNode(_components.h2, {
      id: "crowe-onthulde-al-dat-het-een-trilogie-wordt",
      children: "Crowe onthulde al dat het een trilogie wordt"
    }), "\n", createVNode(_components.p, {
      children: "Eerder dit jaar sprak Russell Crowe zelf over de mogelijke toekomst van de “The Pope’s Exorcist”-franchise. Hij onthulde dat er oorspronkelijk niet één, maar zelfs twee vervolgfilms gepland waren, getuige van het vertrouwen van de studio in de potentie van de verhalen rond Father Gabriele Amorth. Hoewel er wat strubbelingen waren door veranderingen aan de top bij de studio, lijkt het erop dat de plannen voor verdere uitbreiding van het universum steeds concreter worden."
    }), "\n", createVNode(_components.p, {
      children: "Met een schat aan bronmateriaal door de vele boeken van de inspiratie achter het personage, Gabriele Amorth, belooft de toekomst van de franchise nog meer duistere avonturen en angstaanjagende situaties. De mogelijkheid van een heuse trilogie hangt als een zwaard van Damocles boven de fans, waardoor de anticipatie en opwinding alleen maar toenemen. Wij hopen alvast op een scooter achtervolgingscene met Crowe op een kleine Vespa!"
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

const url = "src/content/nieuws/russell-crowe-keert-terug-op-zijn-brommerke-in-the-pope.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/russell-crowe-keert-terug-op-zijn-brommerke-in-the-pope.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/russell-crowe-keert-terug-op-zijn-brommerke-in-the-pope.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
