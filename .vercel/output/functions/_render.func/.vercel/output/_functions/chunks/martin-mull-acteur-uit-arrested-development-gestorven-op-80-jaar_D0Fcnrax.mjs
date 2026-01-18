import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Martin Mull, acteur uit Arrested Development gestorven op 80 jaar",
  "date": "2024-06-29T08:37:23.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1719623027.jpg",
  "trailer": "",
  "slug": "martin-mull-een-veelzijdig-talent-verloren",
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
      children: "Martin Mull, de veelzijdige komiek en acteur die bekend stond om zijn droge humor en excentrieke optredens, is op 80-jarige leeftijd overleden. Zijn dochter, Maggie Mull, een televisieschrijver en striptekenaar, kondigde zijn overlijden aan op vrijdag. Hij stierf thuis na een moedige strijd tegen een langdurige ziekte."
    }), "\n", createVNode(_components.p, {
      children: "Geboren in Chicago en opgegroeid in Ohio en Connecticut, was Martin Mull niet alleen een acteur, maar ook een begaafd gitarist en schilder. Zijn nationale bekendheid kwam met zijn rollen in de satirische soapserie “Mary Hartman, Mary Hartman” en de spin-off “Fernwood 2 Night”, waarin hij de gastheer van een satirische talkshow vertolkte."
    }), "\n", createVNode(_components.p, {
      children: "In de jaren 80 speelde Mull in films als “Mr. Mom” en “Clue”, en in de jaren 90 had hij een terugkerende rol in “Roseanne”. Later werd hij geliefd bij het publiek voor zijn hilarische rol als privédetective Gene Parmesan in “Arrested Development”, en hij werd zelfs genomineerd voor een Emmy voor zijn gastoptreden in “Veep” in 2016."
    }), "\n", createVNode(_components.p, {
      children: "Mull combineerde muziek en comedy in de hippe Hollywoodclubs van de jaren 70, waarmee hij een brede fanbase opbouwde. Verschillende collega’s uit de entertainmentindustrie hebben hun medeleven geuit en herinneringen gedeeld aan hun samenwerking met Martin Mull. Melissa Joan Hart, bekend van de serie “Sabrina the Teenage Witch”, beschreef hem als een geweldige man en prees zijn indrukwekkende oeuvre. Actrice Caroline Rhea, eveneens bekend van “Sabrina”, noemde Mull briljant grappig en vriendelijk, en benadrukte de blijvende impact die hij heeft achtergelaten."
    }), "\n", createVNode(_components.p, {
      children: "Martin Mull liet telkens een onuitwisbare indruk achter op zijn collega’s en fans. Zijn unieke humor en veelzijdig talent zullen gemist worden door velen."
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

const url = "src/content/nieuws/martin-mull-acteur-uit-arrested-development-gestorven-op-80-jaar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/martin-mull-acteur-uit-arrested-development-gestorven-op-80-jaar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/martin-mull-acteur-uit-arrested-development-gestorven-op-80-jaar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
