import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Good Luck, Have Fun, Don't Die Verbinski's comeback met AI-angst",
  "date": "2025-11-12T14:19:38.086Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762949354.jpg",
  "trailer": "CaSxNAZUKsM",
  "slug": "good-luck-have-fun-dont-die-verbinskis-comeback-met-aiangst",
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
      children: "Gore Verbinski, de regisseur bekend van “Pirates of the Caribbean” en “The\nRing”, maakt zijn comeback na meer dan tien jaar afwezigheid met de nieuwe film\n“Good Luck, Have Fun, Don’t Die”. De sciencefiction komedie komt op 13 februari\n2026 in de bioscoop."
    }), "\n", createVNode(_components.p, {
      children: "Sam Rockwell speelt de hoofdrol als een man die claimt uit de toekomst te komen.\nHij verschijnt in een restaurant in Los Angeles, gekleed in vuilnisachtige\nkleding, en smeekt een groep mensen om hulp. Volgens hem is de toekomst verwoest\ndoor een kwaadaardige kunstmatige intelligentie die voorkomen moet worden\nvoordat ze online gaat."
    }), "\n", createVNode(_components.p, {
      children: "De groep die hem moet helpen bestaat uit Haley Lu Richardson, Michael Peña,\nZazie Beetz en Juno Temple. Samen moeten ze vechten tegen door AI aangestuurde\nzombies, enge poppenachtige robots en iets met hoeven dat groot genoeg is om een\nauto te pletten."
    }), "\n", createVNode(_components.p, {
      children: "Het script komt van Matthew Robinson, die ook “Love and Monsters” schreef.\nVerbinski produceert de film samen met Robert Kulzer en Erwin Stoff. De film had\nzijn première op Fantastic Fest in 2025, het festival voor fantasy en\nsciencefiction."
    }), "\n", createVNode(_components.p, {
      children: "Verbinski’s carrière begon met reclames en muziekvideo’s, gevolgd door zijn\ndebuut “Mouse Hunt” in 1997. Na “The Mexican” met Brad Pitt en Julia Roberts\nbrak hij door met “The Ring” en de “Pirates of the Caribbean” films. Zijn\nlaatste film was “A Cure for Wellness” in 2016."
    }), "\n", createVNode(_components.p, {
      children: "AI als bedreiging is geen nieuw thema in films - we kennen het al van de\n“Terminator” reeks - maar wordt steeds relevanter nu kunstmatige intelligentie\nook in ons dagelijks leven opduikt. “Good Luck, Have Fun, Don’t Die” toont wat\ner mis kan gaan wanneer AI te machtig wordt."
    }), "\n", createVNode(_components.p, {
      children: "De trailer belooft een mix van actie en humor, waarbij de personages\nverschillende challenges moeten voltooien die de AI voor hen heeft klaargezet.\nWe kijken uit naar deze terugkeer van Verbinski en zijn visie op AI-angst in\n2026."
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

const url = "src/content/nieuws/good-luck-have-fun-dont-die-verbinskis-comeback-met-aiangst.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/good-luck-have-fun-dont-die-verbinskis-comeback-met-aiangst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/good-luck-have-fun-dont-die-verbinskis-comeback-met-aiangst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
