import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Wonka Opent met Solide $38 Miljoen Opening Weekend",
  "date": "2023-12-17T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1702746437.jpg",
  "trailer": "",
  "slug": "wonka-opent-met-solide-38-miljoen-opening-weekend",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "competitie-tijdens-de-feestdagen",
    "text": "Competitie tijdens de feestdagen"
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
      children: "Warner Bros.’ nieuwste film, “Wonka”, is goed van start gegaan aan de box office met een totaal van $14,4 miljoen op vrijdag, inclusief $3,5 miljoen van donderdagvond voorstellingen. Het openingsweekend wordt geschat op $38 miljoen, wat binnen het verwachte bereik van $35-40 miljoen valt."
    }), "\n", createVNode(_components.p, {
      children: "De musical-prequel van regisseur Paul King, bekend van de “Paddington” films, brengt het verhaal van de iconische Willy Wonka tot leven met een charmante twist. Ondanks dat musicals altijd een risico vormen aan de box office, heeft “Wonka” de zang en dans elementen subtiel gehouden in de marketingcampagne, waarbij de focus vooral ligt op de eigenzinnige hoofdrolspeler, Timothée Chalamet."
    }), "\n", createVNode(_components.p, {
      children: "Met een budget van $125 miljoen moet “Wonka” wereldwijd minstens $300 miljoen opbrengen om winstgevend te zijn. Dit lijkt een haalbaar doel, gezien het succes van King’s eerdere films. Zo behaalde het eerste deel van “Paddington” een openingsweekend van $18 miljoen in Noord-Amerika en brutoverdiende het uiteindelijk meer dan $282 miljoen wereldwijd, waarvan $64,9 miljoen uit het Verenigd Koninkrijk."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel “Wonka” gebaseerd is op het Britse boek “Charlie and the Chocolate Factory” van Roald Dahl, is het Amerikaanse karakter van de film mogelijk niet even sterk in het Verenigd Koninkrijk, waar de oorspronkelijke film uit 1971 erg geliefd is. Desondanks zal “Wonka” zich goed kunnen meten aan andere films tijdens de kerstperiode, aangezien het een perfecte keuze is voor families en chocolade liefhebbers."
    }), "\n", createVNode(_components.h2, {
      id: "competitie-tijdens-de-feestdagen",
      children: "Competitie tijdens de feestdagen"
    }), "\n", createVNode(_components.p, {
      children: "“Wonka” zal concurreren met films als “Migration”, een geanimeerde familiekomedie/avonturenfilm van Illumination Entertainment. Hoewel er weinig bekendheid is rondom die film, kan de positieve mond-tot-mondreclame “Wonka” in het voordeel spelen."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast wordt “Wonka” uitgedaagd door de superheldenfilm “Aquaman and the Lost Kingdom”. De opvolger van “Aquaman” wordt verwacht een opening van $50-60 miljoen te realiseren tijdens het lange kerstweekend. Echter, gezien de teleurstellende prestaties van bijna alle DC-superheldenfilms dit jaar, kan het zijn dat de film last heeft van superheldenmoeheid bij het publiek. Het tegengestelde kan echter waar zijn vanwege de aanwezigheid van een drummende octopus in de film."
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

const url = "src/content/nieuws/wonka-opent-met-solide-38-miljoen-opening-weekend.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wonka-opent-met-solide-38-miljoen-opening-weekend.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wonka-opent-met-solide-38-miljoen-opening-weekend.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
