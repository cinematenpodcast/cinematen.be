import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Wheel of Time stopt en wij zijn er kapot van",
  "date": "2025-10-10T17:16:08.220Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1760113050.jpg",
  "trailer": "",
  "slug": "the-wheel-of-time-stopt-en-wij-zijn-er-kapot-van",
  "tags": ["TV"]
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
      children: "Prime Video heeft besloten om te stoppen met de serie ‘The Wheel of Time’. De\nshow gaat niet door na seizoen drie. Dit nieuws maakt ons verdrietig. De serie\nis gebaseerd op de boeken van Robert Jordan en volgt Moiraine, een vrouw met\nmagische krachten die met een groep jonge mensen op reis gaat om een slechte\nvijand te verslaan."
    }), "\n", createVNode(_components.p, {
      children: "Wij reageerden boos op het nieuws. Op sociale media schreven we dat we het erg\nvinden. Een fan met de naam @Mrbeh237 zei dat hij bijna moet huilen als hij\neraan denkt. Anderen vonden dat de serie net heel goed begon te worden en dat\nseizoen drie het beste was. Het is jammer dat de show nu stopt."
    }), "\n", createVNode(_components.p, {
      children: "Brandon Sanderson, de schrijver die de boeken van Robert Jordan heeft afgemaakt,\nis ook niet blij. Hij zei dat hij niet veel te maken had met de serie. De makers\nwilden zijn naam erbij hebben, maar luisterden niet echt naar hem. Hij hoorde\nhet nieuws pas toen het op internet stond, net als wij. Sanderson vindt het\nspijtig voor ons, omdat de show steeds beter werd."
    }), "\n", createVNode(_components.p, {
      children: "Waarom stopte de serie dan? De makers vonden het te duur worden. Het kostte veel\ngeld om elke aflevering te maken. Amazon, het bedrijf achter Prime Video, geeft\nwel veel geld uit aan een andere fantasy-serie: ‘The Lord of the Rings: The\nRings of Power’. Het eerste seizoen van ‘The Wheel of Time’ kostte ongeveer 80\nmiljoen dollar, terwijl de andere serie 465 miljoen dollar kostte voor het\neerste seizoen. Wij vragen ons af waarom ze niet allebei kunnen blijven."
    }), "\n", createVNode(_components.p, {
      children: "Er waren plannen voor acht seizoenen van ‘The Wheel of Time’. Er zijn veertien\nboeken, dus er was genoeg verhaal. De serie had nog lang door kunnen gaan.\nSommigen vonden dat de show trouwer bleef aan de boeken dan de andere serie. Nu\nkunnen we niet zien hoe het verhaal verder gaat."
    }), "\n", createVNode(_components.p, {
      children: "Meer dan 120.000 van ons hebben een brief op internet getekend. We vragen of de\nserie alsnog gered kan worden en willen dat het verhaal een goed einde krijgt.\nHelaas is er weinig hoop. Er wordt gezegd dat de serie niet naar andere\nstreamingdiensten gaat. Bedrijven zoals Apple, die ook dure series maken, lijken\nde show niet over te nemen. De kans is klein dat ‘The Wheel of Time’ terugkomt."
    }), "\n", createVNode(_components.p, {
      children: "De serie had een grote groep fans en kreeg goede reacties op het derde seizoen.\nToch was dat niet genoeg om door te gaan. Voor de makers woog het geld zwaarder\ndan de populariteit. De show blijft wel te zien op Prime Video, maar er komen\ngeen nieuwe afleveringen meer bij. Voor ons is dat een groot verlies. We moeten\nafscheid nemen van een serie waar we veel van hielden."
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

const url = "src/content/nieuws/the-wheel-of-time-stopt-en-wij-zijn-er-kapot-van.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-wheel-of-time-stopt-en-wij-zijn-er-kapot-van.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-wheel-of-time-stopt-en-wij-zijn-er-kapot-van.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
