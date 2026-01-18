import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Oude bekenden komen terug naar Star Wars",
  "date": "2025-04-20T10:15:42.016Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1745087091.jpg",
  "trailer": "",
  "slug": "oude-bekenden-komen-terug-naar-star-wars",
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
      children: "De wereld van Star Wars breidt zich steeds verder uit met nieuwe series en\nfilms. Recent zijn er interessante feitjes aangekondigd over Ahsoka seizoen 2 en\nde animatieserie Tales of the Empire. Beide projecten zijn verbonden met eerdere\ngebeurtenissen in het Star Wars-universum en brengen geliefde personages terug,\nzoals Ahsoka Tano en Admiral Ackbar."
    }), "\n", createVNode(_components.p, {
      children: "In Tales of the Empire, dat vanaf 4 mei 2024 te zien zal zijn op Disney+, kunnen\nwij ons voorbereiden op de terugkeer van Barriss Offee. Dit is bijzonder omdat\nBarriss voor het laatst in 2013 in de serie The Clone Wars te zien was. Barriss\nwas vroeger een Jedi en was bevriend met Ahsoka tijdens de Clone Wars. Hun\nrelatie verslechterde toen Barriss Ahsoka verraadde door haar onterecht te\nbeschuldigen van een aanslag op de Jedi-tempel. In deze nieuwe serie zal Barriss\nnu als Inquisitor terugkeren."
    }), "\n", createVNode(_components.p, {
      children: "Ahsoka seizoen 2, dat momenteel in productie is, zal ook de terugkeer van\nAdmiral Ackbar bevatten. Deze legendarische militaire leider van de Rebel\nAlliance is niet alleen bekend vanwege zijn iconische zin “It’s a trap!” in\nReturn of the Jedi, maar speelt nu ook een grotere rol in de strijd tegen\nThrawn. Dave Filoni, de maker van de serie, heeft aangekondigd dat de\nschermutselingen tussen Admiral Ackbar en Thrawn, die een belangrijke slechterik\nis in het universum, een significant deel van het verhaal zullen vormen. Thrawn\nis bekend om zijn strategisch denkvermogen en superhoge intelligentie."
    }), "\n", createVNode(_components.p, {
      children: "Het Star Wars-universum blijft zich uitbreiden, en de toekomst ziet er\nveelbelovend uit met deze nieuwe verhalen."
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

const url = "src/content/nieuws/oude-bekenden-komen-terug-naar-star-wars.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/oude-bekenden-komen-terug-naar-star-wars.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/oude-bekenden-komen-terug-naar-star-wars.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
