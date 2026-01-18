import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Captain America: Brave New World onthult (nu al) de Red Hulk",
  "date": "2024-07-12T20:16:19.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/welcome-to-a-brave-new-world-1720790256.jpg",
  "trailer": "O_A8HdCDaWM",
  "slug": "het-nieuwe-tijdperk-van-captain-america-een-diepgaande-analyse",
  "tags": ["film", "trailer", "comics"]
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
      children: "De laatste maanden heeft is het Marvel Cinematic Universe opmerkelijk stilte geworden, wat voor velen als een welkome afwisseling voelt na de voorgaande jaren. Het tempo is vertraagd sinds de tegenvallende vertoning van vorig jaar, waardoor Kevin Feige, de baas van Marvel Studios, en zijn team de kans hebben gehad om hun zaken op orde te brengen en hopelijk deze franchise in een spannendere richting te sturen."
    }), "\n", createVNode(_components.p, {
      children: "In het komende jaar is “Captain America: Brave New World” mogelijk een goeie stap in de toekomst van deze franchise. Ondanks verontrustende signalen tot nu toe, met recente meldingen van uitgebreide heropnames die een compleet nieuwe schurk aan de film toevoegen gespeeld door de altijd welkome Giancarlo Esposito, lijkt het team rond Feige en vrienden zich bewust te zijn van de uitdaging die voor hen ligt."
    }), "\n", createVNode(_components.p, {
      children: "Na het bekijken van de officiële trailer van de film, valt op dat deze redelijk goed in elkaar steekt, vooral gezien de uitgebreide heropnames. Hoewel de trailer weinig prijsgeeft over het verhaal en vooral gericht is op actie doet het wat het moet doen. Harrison Ford geeft een interessante draai aan de rol van Thaddeus “Thunderbolt” Ross, en het lijkt er sterk op dat Ford op een gegeven moment in de film verandert in Red Hulk."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal draait om de ontmoeting tussen de zojuist gekozen Amerikaanse president Thaddeus Ross en Sam Wilson, die verwikkeld raakt in een internationaal incident. Hij moet de reden achter een kwaadaardig mondiaal complot ontdekken voordat de ware meesterbrein de hele wereld rood doet zien."
    }), "\n", createVNode(_components.p, {
      children: "In “Captain America: Brave New World”  zien we Anthony Mackie, Danny Ramirez, Shira Haas, Xosha Roquemore, Carl Lumbly, met Giancarlo Esposito, Liv Tyler, Tim Blake Nelson en Harrison Ford. De film is geregisseerd door Julius Onah, geproduceerd door Kevin Feige en Nate Moore, terwijl Louis D’Esposito en Charles Newirth dienen als uitvoerend producenten."
    }), "\n", createVNode(_components.p, {
      children: "We kunnen gaan genieten van het nieuwe hoofdstuk van deze nieuwe Cap in de bioscopen op 14 februari 2025."
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

const url = "src/content/nieuws/captain-america-brave-new-world-onthult-nu-al-de-red-hulk.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/captain-america-brave-new-world-onthult-nu-al-de-red-hulk.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/captain-america-brave-new-world-onthult-nu-al-de-red-hulk.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
