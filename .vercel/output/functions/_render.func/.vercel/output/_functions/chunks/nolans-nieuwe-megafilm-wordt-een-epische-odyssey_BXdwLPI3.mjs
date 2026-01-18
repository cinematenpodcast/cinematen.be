import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nolan’s nieuwe megafilm wordt een epische Odyssey",
  "date": "2025-12-22T14:19:37.262Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1766412183.jpg",
  "trailer": "Mzw2ttJD2qQ",
  "slug": "nolans-nieuwe-megafilm-wordt-een-epische-odyssey",
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
      children: "Christopher Nolan, de regisseur die net een hoop prijzen won voor ‘Oppenheimer’,\ngaat een van de oudste verhalen ter wereld verfilmen: ‘The Odyssey’. Dit epische\ngedicht uit het oude Griekenland vertelt het verhaal van koning Odysseus, die na\nde Trojaanse Oorlog tien jaar lang probeert thuis te komen en daarbij monsters,\ngoden en allerlei gevaren moet trotseren."
    }), "\n", createVNode(_components.p, {
      children: "Voor deze enorme productie heeft Nolan een sterrencast bij elkaar gebracht. Matt\nDamon neemt de hoofdrol voor zijn rekening als koning Odysseus. Anne Hathaway\nspeelt zijn trouwe vrouw Penelope, die thuis op hem wacht, en Tom Holland is hun\nzoon Telemachus, die op zoek gaat naar zijn verdwenen vader. Verder zien we\nonder andere Robert Pattinson als een van de vrijers van Penelope, Zendaya als\nde godin Athena, Charlize Theron als de heks Circe en Jon Bernthal als koning\nMenelaus. Ook Lupita Nyong’o, Benny Safdie, Elliot Page, John Leguizamo, Himesh\nPatel en Mia Goth maken deel uit van de cast."
    }), "\n", createVNode(_components.p, {
      children: "Nolan koos voor een ambachtelijke en grootschalige aanpak. Hij filmde met grote\nIMAX-filmcamera’s die met echte filmrollen werken, en deed dat op locaties over\nde hele wereld. De scènes op zee werden op echte boten en in echte zeeën\ngefilmd, zodat de barre reis van Odysseus zo authentiek mogelijk overkomt."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal is een aaneenschakeling van legendarische avonturen: een\nconfrontatie met de eenogige Cycloop, de verleidelijke maar dodelijke Sirenen,\nen de heks Circe die manschappen in varkens verandert. Ondertussen houdt\nPenelope op Ithaca met slimme listen de opdringerige vrijers op afstand."
    }), "\n", createVNode(_components.p, {
      children: "Nolan gaf aan dat hij met de moderne filmtechnieken van nu eindelijk zo’n\ntijdloos, klassiek epos wilde maken, in de traditie van de spektakelfilms van\nweleer. Matt Damon sloot zich daarbij aan en noemde het project een groot zomers\nspektakel."
    }), "\n", createVNode(_components.p, {
      children: "De eerste trailer, die de omvang en visuele pracht van de film al duidelijk\nmaakt, is inmiddels vrijgegeven. Wij kunnen de epische reis over het scherm zien\nrollen en de gevaren ontdekken die Odysseus te wachten staan."
    }), "\n", createVNode(_components.p, {
      children: "‘The Odyssey’ komt op 17 juli 2026 in de bioscoop. Het belooft een van de\ngrootste films van dat jaar te worden, en wij kijken er nu al naar uit om dit\noude verhaal in Nolans handen op het grote doek te beleven."
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

const url = "src/content/nieuws/nolans-nieuwe-megafilm-wordt-een-epische-odyssey.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nolans-nieuwe-megafilm-wordt-een-epische-odyssey.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nolans-nieuwe-megafilm-wordt-een-epische-odyssey.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
