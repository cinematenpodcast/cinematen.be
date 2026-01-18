import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De nieuwe Wolf Man ziet er niet super uit",
  "date": "2024-09-07T16:13:35.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/will-the-real-wolf-man-please-step-forward-1725546044.webp",
  "trailer": "",
  "slug": "wolf-man-film-een-nieuwe-kijk-op-een-klassieke-weerwolf",
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
      children: "De langverwachte reboot van Universal’s klassieke Wolf Man-serie is onderweg, maar recente onthullingen hebben gemengde reacties opgeroepen bij fans. De eerste blik op het ontwerp van de Wolfman tijdens Universal Orlando’s Halloween Horror Nights heeft een golf van kritiek veroorzaakt, waarbij velen twijfels uitten over de nieuwe look van de iconische weerwolf."
    }), "\n", createVNode(_components.p, {
      children: "Fans en critici waren snel om hun ontevredenheid te uiten over de onthulde afbeeldingen, waarbij velen de weergave van de Wolfman vergeleken met een mutant heuvelbewoner uit films als Wrong Turn in plaats van een angstaanjagende weerwolf. Ondanks speculaties dat dit slechts een tijdelijke outfit was en niet representatief voor het definitieve ontwerp, gelooft een interne bron, Daniel Richtman, dat dit wel degelijk de beeltenis van het wezen zal zijn in de film - zij het met verbeteringen in de film zelf ten opzichte van de getoonde versie."
    }), "\n", createVNode(_components.p, {
      children: "De originele ster Ryan Gosling verliet het project in december, waarna Christopher Abbott zijn rol overnam als hoofdrolspeler. Regisseur Leigh Whannell, eerder geassocieerd met het project, keerde terug nadat Derek Cianfrance hem verving en ook vertrok. Hoewel er geen specifieke redenen zijn gegeven voor deze wijzigingen, lijkt het erop dat het creatieve proces en mogelijke meningsverschillen een rol hebben gespeeld."
    }), "\n", createVNode(_components.p, {
      children: "Oorspronkelijk bedoeld als een moderne hervertelling van het klassieke verhaal, verschuift de focus nu naar “een man wiens familie wordt geterroriseerd door een dodelijke roofdier.” Met een cast die Julia Garner als vrouwelijke hoofdrolspeler bevat, blijven scenaristen werken aan het script dat initieel was ontworpen door Whannell, Corbett Tuck, Lauren Schuker Blum en Rebecca Angelo, hoewel enkele verhaalaanpassingen zijn doorgevoerd."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl het ‘Dark Universe’-project misschien tot stilstand is gekomen, hoopt Universal nog steeds op succes vergelijkbaar met The Invisible Man door een reeks films te ontwikkelen gebaseerd op klassieke monsters. Naast Wolf Man worden ook projecten zoals Elizabeth Banks’ The Invisible Woman, Karyn Kusama’s Dracula en Paul Feig’s Dark Army geruchten toegekend."
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

const url = "src/content/nieuws/de-nieuwe-wolf-man-ziet-er-niet-super-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-wolf-man-ziet-er-niet-super-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-wolf-man-ziet-er-niet-super-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
