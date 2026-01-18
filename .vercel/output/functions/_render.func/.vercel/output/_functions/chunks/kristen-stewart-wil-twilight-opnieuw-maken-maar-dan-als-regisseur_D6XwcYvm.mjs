import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kristen Stewart wil Twilight opnieuw maken, maar dan als regisseur",
  "date": "2026-01-06T21:45:07.765Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767734179.jpg",
  "trailer": "",
  "slug": "kristen-stewart-wil-twilight-opnieuw-maken-maar-dan-als-regisseur",
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
      children: "Kristen Stewart heeft aangegeven dat ze graag een nieuwe versie van de\nTwilight-films wil maken. Niet als actrice deze keer, maar als regisseur. In een\ninterview met Entertainment Tonight vertelde ze over haar recent geregisseerde\nfilm ‘The Chronology of Water’ en zei dat ze klaar is voor een Twilight-remake,\nmits er voldoende budget is en iedereen erachter staat."
    }), "\n", createVNode(_components.p, {
      children: "Twilight is een immens populaire filmreeks die startte in 2008. We volgden het\nliefdesverhaal tussen het gewone meisje Bella Swan en de vampier Edward Cullen.\nDe reeks bestaat uit vijf films, met de laatste die uitkwam in 2012. Kristen\nStewart speelde Bella, Robert Pattinson was Edward en Taylor Lautner vertolkte\nde weerwolf Jacob Black. De films zijn gebaseerd op de boeken van Stephenie\nMeyer en we keken er massaal naar. Meyer heeft al laten weten dat ze nog meer\nverhalen over de personages in haar hoofd heeft, maar of ze die ooit zal\nopschrijven, is onduidelijk."
    }), "\n", createVNode(_components.p, {
      children: "Kristen Stewart was al actrice voor Twilight, met een rol in ‘Panic Room’ op\njonge leeftijd. Na Twilight brak ze door en speelde ze in vele andere films. Ze\nwon zelfs een César in Frankrijk als eerste Amerikaanse actrice en werd\ngenomineerd voor een Oscar voor haar rol als prinses Diana in ‘Spencer’. Nu ze\nook regisseert, vindt ze het een perfect moment om Twilight opnieuw te maken."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de productie van de originele films waren er opmerkelijke momenten. Zo\nprobeerden meer dan 5000 acteurs de rol van Edward te krijgen, en Robert\nPattinson, die bijna stopte met acteren, kreeg hem uiteindelijk. Voor Bella werd\nonder andere gekeken naar Emily Browning, Michelle Trachtenberg, Lily Collins en\nJennifer Lawrence, maar regisseur Catherine Hardwicke koos voor Kristen Stewart.\nOp de set verrekte Pattinson een bilspier op de eerste dag, moest Taylor Lautner\n30 pond aankomen voor zijn rol en droeg Stewart een pruik in de derde film omdat\nze haar haar had gekort. Bella’s trouwjurk, ontworpen door Carolina Herrera,\nontsnapte maar net aan regenschade, en de baby Renesmee werd gespeeld door de\n10-jarige Mackenzie Foy, die door iedereen werd vertroeteld."
    }), "\n", createVNode(_components.p, {
      children: "Of er daadwerkelijk een nieuwe Twilight film komt, is nog onzeker. Stewart heeft\nhaar interesse getoond, maar concrete plannen zijn er nog niet. In afwachting\nkunnen we de originele reeks herbekijken op HBO Max."
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

const url = "src/content/nieuws/kristen-stewart-wil-twilight-opnieuw-maken-maar-dan-als-regisseur.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kristen-stewart-wil-twilight-opnieuw-maken-maar-dan-als-regisseur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kristen-stewart-wil-twilight-opnieuw-maken-maar-dan-als-regisseur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
