import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Disney onthult release data voor grote aankomende films",
  "date": "2024-04-06T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1712343580.jpg",
  "trailer": "",
  "slug": "disney-onthult-release-data-voor-grote-aankomende-films",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sequels-en-remakes",
    "text": "Sequels en remakes"
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
      children: "Disney heeft recentelijk de releasedata aangekondigd voor enkele van zijn grootste aankomende films, volgens rapporten van The Hollywood Reporter. Deze aankondigingen omvatten onder andere nieuwe data voor populaire franchises zoals “Tron: Ares” en “The Mandalorian & Grogu,” die zeker de aandacht trekken van fans wereldwijd."
    }), "\n", createVNode(_components.p, {
      children: "Het langverwachte vervolg in het Tron-universum, “Tron: Ares,” zal op 10 oktober 2025 de bioscopen bereiken. Dit markeert een belangrijk moment voor fans, aangezien het de eerste Tron-film in 15 jaar zal zijn. Tegelijkertijd zal “The Mandalorian & Grogu” op 22 mei 2026 zijn debuut maken als een theatrale film die voortbouwt op het succes van de gelijknamige streamingserie. Voor Star Wars-liefhebbers is dit bijzonder opwindend, aangezien het de eerste Star Wars-film is sinds “The Rise of Skywalker” in 2019."
    }), "\n", createVNode(_components.h2, {
      id: "sequels-en-remakes",
      children: "Sequels en remakes"
    }), "\n", createVNode(_components.p, {
      children: "Naast deze spannende aankondigingen heeft Disney ook de releasedata vastgesteld voor andere langverwachte sequels en remakes. “Toy Story 5” staat gepland voor 19 juni 2026, wat betekent dat fans zich kunnen verheugen op nog meer avonturen met geliefde personages zoals Woody en Buzz Lightyear. Verder is de live-action remake van “Moana” een jaar uitgesteld naar 10 juli 2026, terwijl het geanimeerde vervolg “Moana 2” nog steeds op schema ligt voor release later dit jaar in november."
    }), "\n", createVNode(_components.p, {
      children: "Deze aankondigingen komen kort na CEO Bob Iger’s geruststellende woorden tijdens de jaarlijkse aandeelhoudersvergadering van Disney, waarbij hij investeerders verzekerde dat “onze plannen ambitieus zijn, onze strategie werkt, en onze toekomst er rooskleurig uitziet.” Het is duidelijk dat Disney blijft investeren in zowel traditionele bioscoopervaringen als in de groeiende streamingruimte."
    }), "\n", createVNode(_components.p, {
      children: "Als we kijken naar de opwindende toekomst van Disney’s filmuniversum, belooft het komende decennium een ware traktatie te worden voor filmliefhebbers over de hele wereld. Met iconische franchises die terugkeren naar het grote scherm en nieuwe verhalen die zich ontvouwen, is er geen tekort aan avontuur en magie in het verschiet."
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

const url = "src/content/nieuws/disney-onthult-release-data-voor-grote-aankomende-films.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/disney-onthult-release-data-voor-grote-aankomende-films.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/disney-onthult-release-data-voor-grote-aankomende-films.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
