import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Horrorlegende Tony Todd gestorven op 69 jaar",
  "date": "2024-11-09T07:23:58.078Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1731121429.jpg",
  "trailer": "",
  "slug": "horrorlegende-tony-todd-gestorven-op-69-jaar",
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
      children: "Tony Todd, de beroemde acteur die de rol van Candyman speelde, is op 69-jarige\nleeftijd overleden. Hij stierf in zijn huis in Californië. Todd was een bekend\ngezicht in de film- en televisiewereld, met meer dan 240 rollen in een carrière\ndie meer dan veertig jaar duurde."
    }), "\n", createVNode(_components.p, {
      children: "Todd werd geboren in Washington D.C. en groeide op in Connecticut. Hij begon met\nacteren bij een culturele organisatie die jongeren hielp om beter te worden. Hij\nstudeerde ook aan de Universiteit van Connecticut en leerde verder acteren bij\nverschillende theatergroepen. Zijn lange postuur en krachtige stem maakten hem\neen opvallende acteur."
    }), "\n", createVNode(_components.p, {
      children: "Hij kreeg zijn eerste grote rol in de film “Platoon” van Oliver Stone. Maar het\nwas zijn rol in “Candyman” in 1992 die hem echt beroemd maakte. In deze film\nspeelde hij de geest van een moordenaar die jarenlang angst verspreidde. Todd\nbesloot zelfs om met echte bijen te werken voor een scène, wat mooie dedication\ntoont."
    }), "\n", createVNode(_components.p, {
      children: "Naast “Candyman” speelde Todd ook in de “Final Destination” films, waar hij de\nrol had van William Bludworth. Veel fans hebben hem als een belangrijke en\nmysterieuze figuur in deze films beschouwd. Ik denk nog steeds dat hij de\nverpersoonlijking van de dood zelf was!"
    }), "\n", createVNode(_components.p, {
      children: "Todd was ook te zien in populaire series zoals “Star Trek: The Next Generation”\nen “The X-Files”."
    }), "\n", createVNode(_components.p, {
      children: "Tony Todd zal zeker gemist worden. Hij was niet alleen een geweldige acteur,\nmaar ook een inspirerend persoon. Zijn liefde voor het vak en zijn sterke\nkarakter maakten hem een legende. Fans van horror en films in het algemeen\nzullen altijd zijn werk herinneren."
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

const url = "src/content/nieuws/horrorlegende-tony-todd-gestorven-op-69-jaar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/horrorlegende-tony-todd-gestorven-op-69-jaar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/horrorlegende-tony-todd-gestorven-op-69-jaar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
