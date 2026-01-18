import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Robert Eggers gaat de sequel op Labyrinth maken",
  "date": "2025-01-23T21:58:20.809Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1737663255.jpg",
  "trailer": "",
  "slug": "robert-eggers-gaat-de-sequel-op-labyrinth-maken",
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
      children: "Robert Eggers, de regisseur die veel aandacht krijgt na het succes van zijn film\n“Nosferatu”, heeft bekendgemaakt dat zijn volgende project een sequel op de\nberoemde film “Labyrinth” uit 1986 zal zijn. Eggers is niet alleen de schrijver\nvan dit nieuwe project, maar hij zal ook de regie op zich nemen."
    }), "\n", createVNode(_components.p, {
      children: "De originele “Labyrinth” vertelde het verhaal van Sarah, gespeeld door Jennifer\nConnelly, die haar babybroertje moest redden van Jareth, de Goblin King,\ngespeeld door de legendarische David Bowie. De film was een combinatie van een\nfantasyverhaal met muziek en kleurrijke poppenwezens. Hoewel de film bij zijn\nrelease niet zo populair was, is “Labyrinth” in de loop der jaren een\ncultklassieker geworden."
    }), "\n", createVNode(_components.p, {
      children: "Eggers werkt samen met zijn schrijver-vriend Sjón aan het script van de sequel.\nHet nieuwe verhaal zal dus geen remake zijn, maar echt een vervolg op het\nverhaal van de eerste film. We zijn wel al benieuwd wie in de voetsporen zal\ntreden van David Bowie als de antagonist."
    }), "\n", createVNode(_components.p, {
      children: "Naast “Labyrinth” is Eggers ook bezig met een ander project, een film genaamd\n“Werwulf”. Dit gaat over een weerwolf in de 13e eeuw. Hij blijft dus druk bezig.\nGood for him!"
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen exacte datum bekend voor de release van de nieuwe “Labyrinth”\nfilm. We kijken ernaar uit om te zien hoe deze nieuwe versie van “Labyrinth”\neruit zal zien en welke bloederig en creatieve keuzes Eggers zal maken in deze\nbetoverende wereld."
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

const url = "src/content/nieuws/robert-eggers-gaat-de-sequel-op-labyrinth-maken.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-eggers-gaat-de-sequel-op-labyrinth-maken.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-eggers-gaat-de-sequel-op-labyrinth-maken.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
