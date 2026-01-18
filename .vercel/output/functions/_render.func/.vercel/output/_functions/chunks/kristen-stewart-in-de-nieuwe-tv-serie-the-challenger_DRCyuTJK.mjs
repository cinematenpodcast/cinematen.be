import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kristen Stewart in de nieuwe TV Serie \"The Challenger\"",
  "date": "2024-06-09T18:18:38.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1717795316.jpg",
  "trailer": "",
  "slug": "de-invloedrijke-rol-van-kristen-stewart-in-de-nieuwe-tv-serie-the-challenger",
  "tags": ["tv", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-verhaal-van-the-challenger-shuttle",
    "text": "Het verhaal van The Challenger shuttle"
  }, {
    "depth": 2,
    "slug": "kristen-stewarts-opkomst-tot-bekendheid",
    "text": "Kristen Stewart’s Opkomst tot Bekendheid"
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
      children: "In de aankomende tv-serie “The Challenger” zal actrice Kristen Stewart de rol van astronaut Sally Ride op zich nemen. Ride was een baanbrekende wetenschapper en astronaut die in 1978 geschiedenis schreef door de eerste Amerikaanse vrouw te worden die de ruimte in vloog. Dit gebeurde als onderdeel van een NASA astronautenklas uit 1978 die voor het eerst gediversifieerd was en niet uitsluitend bestond uit blanke mannen."
    }), "\n", createVNode(_components.h2, {
      id: "het-verhaal-van-the-challenger-shuttle",
      children: "Het verhaal van The Challenger shuttle"
    }), "\n", createVNode(_components.p, {
      children: "De serie belicht niet alleen de prestaties van Ride en haar collega-astronauten, maar ook de tragische gebeurtenissen rondom de ramp met de spaceshuttle Challenger. Slechts 73 seconden na de lancering explodeerde de shuttle voor de kust van Florida, waarbij alle zeven bemanningsleden omkwamen, waaronder de Amerikaanse lerares Christa McAuliffe."
    }), "\n", createVNode(_components.p, {
      children: "Ride, die ook fysicus was, overleed op 23 juli 2012 op 61-jarige leeftijd aan alvleesklierkanker. Naast haar vlucht aan boord van de Challenger werd Ride geselecteerd als het enige lid van de Rogers Commission, een presidentiële commissie die de oorzaak van de ramp onderzocht en uiteindelijk de defecte O-ringen van de shuttle aanwees als de schuldigen."
    }), "\n", createVNode(_components.h2, {
      id: "kristen-stewarts-opkomst-tot-bekendheid",
      children: "Kristen Stewart’s Opkomst tot Bekendheid"
    }), "\n", createVNode(_components.p, {
      children: "Kristen Stewart is vooral bekend geworden door haar rol als Bella Swan in de Twilight films tegenover Robert Pattinson, die begonnen in 2008. Haar veelzijdigheid als actrice is verder getoond in films zoals Charlie’s Angels, Snow White and Huntsman en Spencer, waarvoor ze een Oscar-nominatie ontving voor Beste Actrice voor haar rol als Lady Diana Spencer."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk schitterde Stewart in de misdaadthriller Love Lies Bleeding uit 2024. Haar betrokkenheid bij “The Challenger” markeert een nieuwe fase in haar carrière, waar ze haar talent en passie voor acteren inzet om het verhaal van een ware Amerikaanse heldin te vertellen: Sally Ride."
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

const url = "src/content/nieuws/kristen-stewart-in-de-nieuwe-tv-serie-the-challenger.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kristen-stewart-in-de-nieuwe-tv-serie-the-challenger.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kristen-stewart-in-de-nieuwe-tv-serie-the-challenger.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
