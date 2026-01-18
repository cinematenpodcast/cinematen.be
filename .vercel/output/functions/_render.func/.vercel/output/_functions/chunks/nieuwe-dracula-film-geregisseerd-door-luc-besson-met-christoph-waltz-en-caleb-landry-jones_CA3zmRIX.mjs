import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Dracula-film geregisseerd door Luc Besson, met Christoph Waltz en Caleb Landry Jones op de planning",
  "date": "2024-02-18T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708200350.jpg",
  "trailer": "",
  "slug": "nieuwe-dracula-film-geregisseerd-door-luc-besson-met-christoph-waltz-en-caleb-landry-jones-op-de-planning",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-frisse-blik-op-het-klassieke-verhaal-van-bram-stoker",
    "text": "Een Frisse Blik op het Klassieke Verhaal van Bram Stoker"
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
      children: "De legendarische vampier Dracula zal weer tot leven komen op het witte doek in een nieuwe film die wordt geregisseerd door de getalenteerde filmmaker Luc Besson. Volgens bronnen van Deadline zijn de twee keer met een Oscar bekroonde Christoph Waltz en Caleb Landry-Jones, die eerder samenwerkten aan Besson’s laatste project “Dogman,” momenteel in gesprek om de hoofdrollen te vertolken."
    }), "\n", createVNode(_components.h2, {
      id: "een-frisse-blik-op-het-klassieke-verhaal-van-bram-stoker",
      children: "Een Frisse Blik op het Klassieke Verhaal van Bram Stoker"
    }), "\n", createVNode(_components.p, {
      children: "Deze nieuwe interpretatie van het iconische verhaal van Bram Stoker’s Dracula belooft een grootschalige productie te worden, waarbij de focus ligt op het begin van het leven van Dracula en zijn relatie met zijn vrouw. Het oorspronkelijke verhaal uit de jaren 1890 vertelt over Prins Vladimir uit de 15e eeuw, die God vervloekt na de dood van zijn geliefde vrouw en uiteindelijk verandert in een vampier. Later, in het Londen van de 19e eeuw, ontdekt hij de dubbelganger van zijn vrouw en veroordeelt zichzelf door haar na te jagen."
    }), "\n", createVNode(_components.p, {
      children: "Veel gerenommeerde regisseurs hebben hun eigen versie van de beruchte schurk gemaakt, waaronder Francis Ford Coppola met zijn film uit 1992, “Bram Stoker’s Dracula.” Recentelijk ontwikkelde de BBC samen met Netflix een driedelige miniserie getiteld “Dracula,” met Claes Bang in de titelrol."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film zal worden geproduceerd door Luc Besson Productions, in samenwerking met EuropaCorp. De productie van de film staat gepland om later dit jaar van start te gaan. Fans van het genre kunnen reikhalzend uitkijken naar deze frisse kijk op het tijdloze verhaal van Dracula."
    }), "\n", createVNode(_components.p, {
      children: "Dit artikel biedt een kijkje achter de schermen van de aankomende Dracula-film, inclusief details over de casting, de verwachte release en de visie van regisseur Luc Besson op dit klassieke verhaal."
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

const url = "src/content/nieuws/nieuwe-dracula-film-geregisseerd-door-luc-besson-met-christoph-waltz-en-caleb-landry-jones.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-dracula-film-geregisseerd-door-luc-besson-met-christoph-waltz-en-caleb-landry-jones.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-dracula-film-geregisseerd-door-luc-besson-met-christoph-waltz-en-caleb-landry-jones.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
