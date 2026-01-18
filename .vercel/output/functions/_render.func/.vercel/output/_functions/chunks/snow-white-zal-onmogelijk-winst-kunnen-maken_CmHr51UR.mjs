import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Snow White zal onmogelijk winst kunnen maken",
  "date": "2025-04-01T07:08:08.291Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1743454384.jpg",
  "trailer": "",
  "slug": "snow-white-zal-onmogelijk-winst-kunnen-maken",
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
      children: "Disney’s nieuwe film “Snow White” is een live-action versie van het bekende\nsprookje. De film is gemaakt met behulp van veel geld, maar heeft het moeilijk\ngehad in de bioscopen. Tijdens het openingsweekend, dat was van 21 tot 23 maart,\nverdiende de film iets meer dan 42 miljoen dollar in de Verenigde Staten. Dit\nwas veel minder dan verwacht, en het bleek dat de totale kosten om de film te\nmaken meer dan 270 miljoen dollar waren en dat is zonder de kosten voor\nmarketing, als je die erbij zou tellen komen de schattingen zelfs op 350 tot 400\nmiljoen dollar."
    }), "\n", createVNode(_components.p, {
      children: "Rachel Zegler speelt de hoofdrol van Sneeuwwitje en Gal Gadot speelt de boze\nkoningin. De film had een moeilijke start met een daling van 66% in de verkoop\nvan kaartjes in het tweede weekend. Hierdoor belandde “Snow White” op de tweede\nplaats in de top van de bioscopen. Het werd ingehaald door de actie-thriller “A\nWorking Man”, die een veel lager budget had."
    }), "\n", createVNode(_components.p, {
      children: "Er is veel gebeurd rond de film en de acteurs. Rachel Zegler heeft enkele\ncontroversiële dingen gezegd over het originele verhaal van Sneeuwwitje en ook\nover de rol van de prins, die ze als problematisch heeft beschreven. In de\nmaanden voor de release plaatste ze ook een bericht op sociale media waarin ze\nhet belang van “een vrije Palestina” benadrukte, wat zorgde voor nog meer ophef."
    }), "\n", createVNode(_components.p, {
      children: "Door al deze publiciteit werd er gediscussieerd over Zegler’s invloed op de\nfilm. Sommige mensen vinden het onterecht om de schuld voor de slechte\nprestaties van de film op haar of op Gadot te leggen. Het probleem is eigenlijk\ndat de film extreem veel geld heeft gekost om te maken, en daar kwamen ook\nproblemen met de productie en heropnames bij."
    }), "\n", createVNode(_components.p, {
      children: "De schattingen zeggen dat de film uiteindelijk wereldwijd zo ongeveer 225\nmiljoen dollar kan verdienen. Sterker nog, Disney zal naar verwachting slechts\nongeveer 100 miljoen dollar aan de ticketverkoop overhouden, omdat bioscopen\ndoorgaans de helft van de opbrengst houden. De algemene regel is dus dat een\nfilm 2 keer zijn budget moet binnenhalen om dan pas winst te maken, wat zou\nwillen zeggen dat Snow White al 700 tot 800 miljoen dollar moet verdienen aan de\nticketverkoop. Wat ons niet echt haalbaar lijkt…"
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

const url = "src/content/nieuws/snow-white-zal-onmogelijk-winst-kunnen-maken.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/snow-white-zal-onmogelijk-winst-kunnen-maken.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/snow-white-zal-onmogelijk-winst-kunnen-maken.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
