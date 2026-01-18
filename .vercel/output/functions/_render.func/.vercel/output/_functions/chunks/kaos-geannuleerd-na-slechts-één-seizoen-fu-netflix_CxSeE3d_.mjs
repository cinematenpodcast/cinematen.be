import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kaos geannuleerd na slechts één seizoen, FU Netflix!",
  "date": "2024-10-09T11:15:09.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/KAOS_Netflix_Image_169.jpg",
  "trailer": "",
  "slug": "netflix-annuleert-de-komische-serie-kaos-na-slechts-eén-seizoen",
  "tags": ["tv"]
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
      children: "Netflix heeft besloten om de serie “Kaos” met Jeff Goldblum in de hoofdrol te annuleren na slechts één seizoen. De serie, gebaseerd op Griekse mythologie, maakte zijn debuut op de streamingdienst en werd ongeveer zes weken later stopgezet. Ondanks dat “Kaos” gedurende de eerste vier weken in de top 10-lijst van Netflix voor Engelstalige series stond, bereikte het slechts de derde plaats in de week van 2 tot 8 september."
    }), "\n", createVNode(_components.p, {
      children: "“Kaos” was een nieuwe benadering van de verhalen uit de Griekse mythologie, waarbij Zeus, gespeeld door Jeff Goldblum, werd afgebeeld als een meer grillige en onzekere versie van zichzelf. De moderne setting van de serie plaatste Zeus in een conflict met Prometheus, wat resulteerde in een poging tot omverwerping met de hulp van drie mensen: Eurydice, Ariadne en Caeneus. Charlie Covell, bekend van “The End of the F***ing World”, was verantwoordelijk voor het schrijven van alle acht afleveringen van de serie."
    }), "\n", createVNode(_components.p, {
      children: "De cast omvatte ook Janet McTeer als Hera, Aurora Perrineau als Eurydice, Cliff Curtis als Poseidon, David Thewlis als Hades, Rakie Ayola als Persephone, Killian Scott als Orpheus, Leila Farzad als Ariadne, Nabhaan Rizwan als Dionysus, Debi Mazar als Medusa, Stephen Dillane als Prometheus, Misia Butler als Caeneus, Mat Fraser als Daedalus en vele anderen."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel “Kaos” vier weken lang in de top 10-lijsten van Netflix stond, slaagde de serie er niet in om een significant publiek aan te trekken. Het hoogtepunt lag op de derde plaats in de Engelstalige tv-lijst in de tweede week van release, met een piek van slechts 5,9 miljoen kijkers. Netflix definieert een kijkerservaring als de totale speeltijd gedeeld door het aantal bekeken uren."
    }), "\n", createVNode(_components.p, {
      children: "Aurora Perrineau bracht via een inmiddels verwijderde Instagram-post het nieuws naar buiten dat “Kaos” geannuleerd was. Ze deelde haar trots over de ervaring en de samenwerking met de getalenteerde cast en crew, en benadrukte hoe deze kans haar perspectief had veranderd."
    }), "\n", createVNode(_components.p, {
      children: "De Cinematen zijn in rouw en nemen de volgende podcast aflevering volledig in het zwart gekleed op. Dat Netflix soms pareltjes wegneemt voordat ze de kans krijgen om volledig uit te bloeien tot een wereldwijd succes is niet nieuw, maar er zijn grenzen Netflix!"
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

const url = "src/content/nieuws/kaos-geannuleerd-na-slechts-%C3%A9%C3%A9n-seizoen-fu-netflix.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kaos-geannuleerd-na-slechts-één-seizoen-fu-netflix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kaos-geannuleerd-na-slechts-één-seizoen-fu-netflix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
