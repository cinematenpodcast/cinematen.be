import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adam Sandler bevestigd de komst van Happy Gilmore 2 met NFL legende in de cast",
  "date": "2024-08-22T08:49:18.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1724259221.jpg",
  "trailer": "",
  "slug": "travis-kelce-krijgt-wens-vervuld-in-happy-gilmore-2",
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
      children: "Adam Sandler heeft aangekondigd dat NFL-ster Travis Kelce een rol zal spelen in de langverwachte sequel van de geliefde komedie “Happy Gilmore.” Netflix bevestigde eerder dit jaar dat Sandler, bekend om zijn rol als Gilmore, een ijshockeyspeler met woedebeheersingsproblemen die zijn agressie kanaliseert naar grote golfoverwinningen, terugkeert in het vervolg op de hitfilm uit 1996."
    }), "\n", createVNode(_components.p, {
      children: "Travis Kelce, een fervent golfspeler en fan van de originele film, had eerder in mei tijdens zijn podcast New Heights laten weten dat hij “alles zou doen” om betrokken te worden bij het project. Hij bleek vastberaden om zijn naam ook buiten het voetbalveld en voor de camera te vestigen. Kelce zal niet alleen in “Happy Gilmore 2” verschijnen, maar maakt ook zijn acteerdebuut in Ryan Murphy’s aankomende horrorserie “Grotesquerie.” Zijn personage in de show is nog gehuld in mysterie, maar hij wordt verwacht in elke aflevering van de 10-delige serie te verschijnen."
    }), "\n", createVNode(_components.p, {
      children: "In een recent interview op The Tonight Show met Jimmy Fallon bevestigde Sandler dat de productie van de sportkomedie-sequel binnen “een paar weken” van start zal gaan. Samen met scenarioschrijver Tim Herlihy, die ook medeverantwoordelijk was voor het script van de oorspronkelijke film, zet Sandler zich in om een film te maken die het publiek zal aanspreken."
    }), "\n", createVNode(_components.p, {
      children: "Het originele “Happy Gilmore” bracht wereldwijd $41 miljoen op bij een productiebudget van $12 miljoen en blijft een van Sandler’s meest populaire films."
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

const url = "src/content/nieuws/adam-sandler-bevestigd-de-komst-van-happy-gilmore-2-met-nfl-legende-in-de-cast.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adam-sandler-bevestigd-de-komst-van-happy-gilmore-2-met-nfl-legende-in-de-cast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adam-sandler-bevestigd-de-komst-van-happy-gilmore-2-met-nfl-legende-in-de-cast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
