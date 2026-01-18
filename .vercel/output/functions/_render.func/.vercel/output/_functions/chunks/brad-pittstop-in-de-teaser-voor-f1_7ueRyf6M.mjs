import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brad Pittstop in de teaser voor F1",
  "date": "2024-07-08T10:34:23.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-f1-teaser-doesnt-give-the-game-away-1720370469.jpg",
  "trailer": "R2Psqs0roW4",
  "slug": "de-opkomst-van-f1-brad-pitt-in-de-coulissen-van-de-formule-1",
  "tags": ["film", "trailer"]
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
      children: "Brad Pitt maakt zich op voor een nieuwe uitdaging. In een samenwerking tussen Apple Original Films en Warner Bros. Pictures wordt hij de ster in een aankomende film die de adrenaline en snelheid van de Formule 1-wereld belooft vast te leggen op het witte doek. Geregisseerd door Joseph Kosinski, bekend van “Top Gun: Maverick,” en geproduceerd door Jerry Bruckheimer, lijkt deze combinatie van talenten voorbestemd om een spektakel vol snelheid neer te zetten."
    }), "\n", createVNode(_components.p, {
      children: "In de film, simpelweg getiteld “F1” schittert Pitt als Sonny Hayes, een voormalig Formule 1-coureur die terugkeert naar de sport met een missie. Zijn personage wordt gekenmerkt door een drang naar competitie en het verlangen naar heropleving in een wereld waar snelheid en risico hand in hand gaan. Samen met zijn jonge teamgenoot Joshua Pearce, gespeeld door Damson Idris, stapt hij in de arena van de fictieve APXGP-racestal, klaar om de top te bestormen."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal belooft een mix van actie, drama en opoffering, waarbij Pitts personage worstelt met zijn verleden, zijn demonen onder ogen ziet en uiteindelijk de kans krijgt om opnieuw te schitteren in de meedogenloze wereld van de Formule 1. Met een cast van getalenteerde medespelers zoals Kerry Condon, Javier Bardem, Tobias Menzies, Sarah Niles, Kim Bodnia en Samson Kayo, belooft “F1” een ensemble van talent te presenteren dat het publiek zal boeien en inspireren."
    }), "\n", createVNode(_components.p, {
      children: "De teasertrailer voor “F1” geeft ons een voorproefje van wat komen gaat: snelheid, spanning en een vleugje gevaar. Met echte racescènes gefilmd tijdens Formule 1-evenementen, wordt de authenticiteit en de rauwe energie van de sport mooi vertaald naar het grote scherm. Queen’s “We Will Rock You” begeleidt de kijker door een wereld van rivaliteit, passie en allesbepalende momenten die alleen in de Formule 1 kunnen plaatsvinden."
    }), "\n", createVNode(_components.p, {
      children: "Op 25 juni 2025 kunnen we gaan genieten van deze spannende rit in de cinemazalen."
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

const url = "src/content/nieuws/brad-pittstop-in-de-teaser-voor-f1.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brad-pittstop-in-de-teaser-voor-f1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brad-pittstop-in-de-teaser-voor-f1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
