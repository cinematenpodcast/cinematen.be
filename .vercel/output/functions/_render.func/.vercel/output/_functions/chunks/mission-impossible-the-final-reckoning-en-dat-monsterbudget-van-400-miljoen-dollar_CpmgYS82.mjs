import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Mission Impossible The Final Reckoning en dat monsterbudget van 400 miljoen dollar",
  "date": "2025-05-30T16:55:53.390Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-05-30T16-53-34-019Z.jpg",
  "trailer": "",
  "slug": "mission-impossible-the-final-reckoning-en-dat-monsterbudget-van-400-miljoen-dollar",
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
      children: "Mission: Impossible - The Final Reckoning is nu te zien in de bioscoop, met Tom\nCruise opnieuw als Ethan Hunt. Christopher McQuarrie regisseert dit laatste deel\nvan de franchise, waarin Hunt het opneemt tegen de schurk Gabriel (Esai Morales)\nen de mysterieuze tegenstander The Entity."
    }), "\n", createVNode(_components.p, {
      children: "Het openingsweekend bracht een indrukwekkende 64 miljoen dollar op in de VS, een\nrecord voor de reeks. Wereldwijd staat de teller na enkele dagen al op meer dan\n220 miljoen dollar, waarvan 86,2 miljoen uit de VS en 136,1 miljoen uit andere\nlanden. Samen met Disney’s Lilo & Stitch zorgde dit voor een historisch Memorial\nDay weekend met 341 miljoen dollar aan ticketverkoop."
    }), "\n", createVNode(_components.p, {
      children: "Tom Cruise deelde een dankbericht op sociale media waarin hij dit weekend “een\nbelangrijk moment in de filmgeschiedenis” noemde. Hij bedankte de crew, studio\nParamount én ons, het publiek."
    }), "\n", createVNode(_components.p, {
      children: "Maar er is een groot probleem: de film kostte maar liefst 400 miljoen dollar om\nte maken. We weten dat een film minstens het dubbele van zijn budget moet\nverdienen om winst te maken. Dat betekent dat The Final Reckoning richting de\n800 miljoen dollar moet gaan – een enorme uitdaging."
    }), "\n", createVNode(_components.p, {
      children: "De vorige film, Dead Reckoning, werd al als teleurstellend beschouwd ondanks\nhoge inkomsten. Nu zijn de verwachtingen lager en zijn de recensies minder\nlovend. De terugkeer van Simon Pegg, Ving Rhames, Hayley Atwell en Henry Czerny\nzorgt wel voor herkenbare actie en spanning. Cruise’s beroemde eigen stuntwerk\nblijft een troef, maar of dat genoeg is?"
    }), "\n", createVNode(_components.p, {
      children: "We zien deze film als een belangrijk hoofdstuk in Cruise’s carrière, maar de\nfinanciële berg is hoog. Of The Final Reckoning die kan beklimmen, blijft\nkoffiedik kijken."
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

const url = "src/content/nieuws/mission-impossible-the-final-reckoning-en-dat-monsterbudget-van-400-miljoen-dollar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mission-impossible-the-final-reckoning-en-dat-monsterbudget-van-400-miljoen-dollar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mission-impossible-the-final-reckoning-en-dat-monsterbudget-van-400-miljoen-dollar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
