import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Apple TV+ heeft het moeilijk ondanks grote hits",
  "date": "2025-03-20T20:32:01.154Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1742498960.jpg",
  "trailer": "",
  "slug": "apple-tv-heeft-het-moeilijk-ondanks-grote-hits",
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
      children: "Apple TV+ is de streamingdienst van Apple die in 2019 is gestart. Sinds de\nlancering heeft de dienst meer dan $1 miljard per jaar verloren. Ondanks dat het\naantal abonnees is gegroeid tot ongeveer 45 miljoen, blijven de financiële\nproblemen bestaan. Het is de enige abonnementsdienst van Apple die niet\nwinstgevend is. Apple heeft meer dan $5 miljard per jaar uitgegeven aan het\nmaken van films en series, maar dit bedrag werd in 2024 verlaagd met $500\nmiljoen. Dit deed Apple CEO Tim Cook na het opnieuw bekijken van de uitgaven."
    }), "\n", createVNode(_components.p, {
      children: "Een van de redenen voor de verliezen is uiteraard dat de kijkersaantallen voor\nApple TV+ laag blijven. Minder dan 1% van de totale streaming-kijkersaantallen\nin de VS gaat naar Apple TV+. Ter vergelijking, Netflix en Amazon hebben veel\nhogere kijkcijfers. Ondanks populaire shows zoals “Severance”, “Silo”,\n“Shrinking” en “Ted Lasso” lukt het Apple niet om een aanzienlijk aantal nieuwe\nkijkers aan te trekken."
    }), "\n", createVNode(_components.p, {
      children: "Apple TV+ begon met de bedoeling om een unieke bron van originele content te\nzijn. Ze wilden geen afhankelijkheid van andere bedrijven, maar het kost tijd om\neen grote bibliotheek met films en series op te bouwen. In de loop der tijd\nbesloot Apple ook oude, populaire shows aan te bieden om meer kijkers aan te\ntrekken. De concurrentie met andere diensten, zoals Paramount+ en Netflix, maakt\nhet voor Apple heel moeilijk om een groot publiek te bereiken."
    }), "\n", createVNode(_components.p, {
      children: "Onder leiding van Tim Cook heeft Apple strengere controles ingesteld om kosten\nte besparen. Hierbij kwamen de uitgaven voor zaken zoals privéjetreizen voor\ntalent onder de loep te liggen. Apple kijkt ook naar films die veel kosten,\nzoals “Argylle” met Henry Cavill en Dua Lipa, die $200 miljoen heeft gekost. De\nCEO vroeg zich af of zulke films genoeg kijkers opleveren om de kosten te\nrechtvaardigen."
    }), "\n", createVNode(_components.p, {
      children: "De algehele winst van Apple is hoog genoeg om de verliezen van Apple TV+ te\ndekken. De diensten van Apple, zoals iCloud en Apple Music, doen het over het\nalgemeen goed, maar Apple TV+ heeft moeite om hetzelfde niveau van populariteit\nte bereiken. Voor nu blijft het een raadsel waarom Apple TV+ nog steeds in de\nrode cijfers staat terwijl ze veel prijswinnende content maken."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de verliezen en de uitdagingen, blijft Apple films en series produceren\nmet bekende acteurs, zoals Jennifer Aniston en Reese Witherspoon. In de toekomst\nwil Apple meer inhoud uitbrengen om zo meer kijkers te trekken. Totdat er echter\nsignificante veranderingen plaatsvinden in hoe wij Apple TV+ gebruiken, zullen\nde financiële verliezen waarschijnlijk aanhouden."
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

const url = "src/content/nieuws/apple-tv-heeft-het-moeilijk-ondanks-grote-hits.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-tv-heeft-het-moeilijk-ondanks-grote-hits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-tv-heeft-het-moeilijk-ondanks-grote-hits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
