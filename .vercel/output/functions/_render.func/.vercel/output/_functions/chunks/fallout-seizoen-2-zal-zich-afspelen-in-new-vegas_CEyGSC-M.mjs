import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Fallout seizoen 2 zal zich afspelen in New Vegas!",
  "date": "2025-08-20T08:31:28.563Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1755635703.jpg",
  "trailer": "7TsP09cZA7o",
  "slug": "fallout-seizoen-2-zal-zich-afspelen-in-new-vegas",
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
      children: "Het tweede seizoen van de “Fallout” serie komt op 17 december 2025 naar Prime\nVideo. Wij hebben lang moeten wachten op meer nieuws, maar tijdens de Opening\nNight Live van Gamescom kregen we eindelijk een teaser trailer te zien. Daarin\nzagen we alvast wat we mogen verwachten van het nieuwe seizoen."
    }), "\n", createVNode(_components.p, {
      children: "De serie is gebaseerd op de populaire videospellen die zich afspelen in een\npost-apocalyptische wereld. We volgen vooral Lucy MacLean, gespeeld door Ella\nPurnell, en haar avonturen in de gevaarlijke Wasteland. In het eerste seizoen\nverloor Lucy haar vader, die werd uitgebuit door Vault-Tec, en begon ze aan een\nzoektocht naar hem. Onderweg vormde ze een onwaarschijnlijke bondgenootschap met\nde Ghoul, gespeeld door Walton Goggins. Die Ghoul was ooit een beroemde acteur,\nmaar veranderde door straling in een monsterlijke versie van zichzelf."
    }), "\n", createVNode(_components.p, {
      children: "Het einde van seizoen één liet veel vragen open. Lucy ontdekte niet alleen de\nlocatie van haar vader, maar ook de verschrikkelijke geheimen van de Vault. Een\nvan die geheimen was dat de bewoners gebruikt werden om “super managers” te\ncreëren door hen te koppelen aan herstelde junior leidinggevenden van Vault-Tec.\nHet seizoen eindigde met een hint naar New Vegas, een iconische locatie uit de\ngames."
    }), "\n", createVNode(_components.p, {
      children: "Seizoen 2 van “Fallout” zal dichter bij de verhaallijnen van de games komen. De\nteaser trailer toonde beelden van Lucy en de Ghoul die hun reis voortzetten. We\nzagen ook Maximus in zijn nieuwe rol als Knight en flashbacks van de Ghoul toen\nhij nog een Vault-Tec woordvoerder was voor de catastrofe."
    }), "\n", createVNode(_components.p, {
      children: "De trailer hintte ook naar de komst van Caesar’s Legion, een beruchte vijand uit\nde games. Wij speculeren al volop of de serie verhaallijnen uit “Fallout: New\nVegas” zal overnemen. Daarnaast duikt een belangrijk personage uit het spel op:\nRobert Edwin House, gespeeld door Justin Theroux. Dat maakt ons nieuwsgierig\nnaar hoe trouw de serie blijft aan de games en welke nieuwe wendingen ze zal\nintroduceren."
    }), "\n", createVNode(_components.p, {
      children: "Wie geïnteresseerd is in de “Fallout” serie, kan zich opmaken voor het nieuwe\nseizoen dat op 17 december van start gaat. Nieuwe afleveringen zullen wekelijks\nverschijnen na de première. Het is duidelijk dat “Fallout” blijft groeien en\nzowel nieuwe kijkers als trouwe fans van de games weet te boeien."
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

const url = "src/content/nieuws/fallout-seizoen-2-zal-zich-afspelen-in-new-vegas.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fallout-seizoen-2-zal-zich-afspelen-in-new-vegas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fallout-seizoen-2-zal-zich-afspelen-in-new-vegas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
