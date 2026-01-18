import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Predator-film 'Badlands' met Elle Fanning in de hoofdrol",
  "date": "2024-06-05T15:33:32.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1717440879.jpg",
  "trailer": "",
  "slug": "nieuwe-predator-film-badlands-met-elle-fanning-in-de-hoofdrol",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "elle-fanning-gecast-in-de-hoofdrol",
    "text": "Elle Fanning gecast in de hoofdrol"
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
      children: "De legendarische Predator-franchise staat op het punt om een nieuwe impuls te krijgen met de aankomende film “Badlands”. Na het succes van 2022’s “Prey” is regisseur Dan Trachtenberg terug om deze nieuwe toevoeging aan de reeks te leiden. De film, waarvan de opnames naar verwachting in juli zullen beginnen, belooft een frisse kijk op het bekende verhaal."
    }), "\n", createVNode(_components.h2, {
      id: "elle-fanning-gecast-in-de-hoofdrol",
      children: "Elle Fanning gecast in de hoofdrol"
    }), "\n", createVNode(_components.p, {
      children: "Elle Fanning, bekend van haar veelgeprezen optredens in films als “The Neon Demon” en “Maleficent”, wordt naar verluidt overwogen voor de hoofdrol in “Badlands”. Met een carrière die begon op jonge leeftijd en een veelzijdigheid die haar tot nu toe heeft onderscheiden in verschillende genres, lijkt ze de perfecte keuze voor deze iconische rol."
    }), "\n", createVNode(_components.p, {
      children: "In “Prey”, een prequel die zich afspeelt in het Comanche Nation in 1719, werd het verhaal van een vaardige krijger verteld, gespeeld door Amber Midthunder, die haar stam beschermt tegen buitenaardse roofdieren. Het succes van deze film heeft de verwachtingen hooggespannen voor wat nog komen gaat in de Predator-reeks."
    }), "\n", createVNode(_components.p, {
      children: "Na eerdere vervolgen zoals “Predator 2” met Danny Glover en recentere toevoegingen als “Predators” en “The Predator”, blijft de franchise evolueren. Met crossover-films zoals “Alien vs. Predator”, heeft de wereld van Predator en zijn rivalen steeds meer uitgediept."
    }), "\n", createVNode(_components.p, {
      children: "Wat de toekomst brengt voor “Badlands” blijft nog in nevelen gehuld. Er wordt gespeculeerd dat de film zich in de toekomst zal afspelen, waardoor er ruimte is voor nieuwe verhaallijnen en ontwikkelingen binnen dit geliefde universum. Of de film rechtstreeks naar streamingplatforms zal gaan of een bioscooprelease krijgt, is nog niet duidelijk."
    }), "\n", createVNode(_components.p, {
      children: "De Predator-franchise herdefinieert zichzelf voortdurend, en met “Badlands” op komst, kunnen fans zich opmaken voor een nieuwe dosis actie en spanning in een universum dat steeds verder uitbreidt."
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

const url = "src/content/nieuws/nieuwe-predator-film-badlands-met-elle-fanning-in-de-hoofdrol.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-predator-film-badlands-met-elle-fanning-in-de-hoofdrol.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-predator-film-badlands-met-elle-fanning-in-de-hoofdrol.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
