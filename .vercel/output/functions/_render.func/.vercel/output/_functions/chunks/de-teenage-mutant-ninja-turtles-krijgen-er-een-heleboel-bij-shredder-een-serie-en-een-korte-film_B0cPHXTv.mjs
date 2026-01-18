import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Teenage Mutant Ninja Turtles krijgen er een heleboel bij Shredder, een serie en een korte film",
  "date": "2025-12-05T17:19:32.157Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1764887436.jpg",
  "trailer": "",
  "slug": "de-teenage-mutant-ninja-turtles-krijgen-er-een-heleboel-bij-shredder-een-serie-en-een-korte-film",
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
      children: "Teenage Mutant Ninja Turtles: Mutant Mayhem was een groot succes in 2023. De\nfilm kreeg goede reviews en verdiende flink wat geld, dus Paramount maakt een\nsequel. Teenage Mutant Ninja Turtles: Mutant Mayhem 2 komt waarschijnlijk in de\nzomer van 2026."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film viel op door zijn unieke, kladderige tekenstijl. De Turtles zagen\ner ook anders uit: Raphael was groter, Donatello had een bril en Michelangelo\neen beugel, wat hen meer op echte tieners deed lijken. In het tweede deel krijgt\nDonatello een groeispurt, omdat de stemacteurs ook ouder worden."
    }), "\n", createVNode(_components.p, {
      children: "Voordat de tweede film er is, kunnen we eerst een korte film verwachten: Teenage\nMutant Ninja Turtles: Chrome Alone 2 — Lost in New Jersey. Die draait vanaf 19\ndecember 2025 in de bioscoop, samen met de nieuwe SpongeBob film. In de korte\nfilm ontdekken de Turtles een vreemde live-action reclame voor hun eigen\nspeelgoed. De makers laten de reclame er opzettelijk nep uitzien, alsof hij door\nAI is gemaakt, om grappen te maken over AI. Ze tekenden zelfs extra vingers aan\nde kinderen, omdat AI dat vaak fout doet."
    }), "\n", createVNode(_components.p, {
      children: "In de post-credits scene van Mutant Mayhem zien we de Turtles naar school gaan.\nLeonardo en April maken een filmpje waarin ze aankondigen het bedrijf TCRI te\nonderzoeken. Vervolgens zien we Cynthia Utrom, de baas van TCRI, die naar het\nfilmpje kijkt en zegt dat het nu makkelijker is om de Turtles te vinden. In haar\nlab staat een vlieg in een potje, wat mogelijk verwijst naar Superfly of Baxter\nStockman. Ze noemt de Turtles een gevaar en zegt: “Breng me de Shredder”. Dan\nzien we het silhouet van Shredder in New York."
    }), "\n", createVNode(_components.p, {
      children: "Dit is een duidelijke hint dat Shredder de grote vijand in de sequel wordt. Wie\nzijn stem gaat doen, is nog niet bekend, maar mogelijk een bekende stemacteur\nzoals Kevin Michael Richardson, die Shredder eerder stemde."
    }), "\n", createVNode(_components.p, {
      children: "Er komt ook een nieuwe tekenfilmserie, Tales of the Teenage Mutant Ninja\nTurtles, met twee seizoenen op Paramount+ in 2024. De serie speelt zich af\ntussen de twee films in en volgt de avonturen van de Turtles op school."
    }), "\n", createVNode(_components.p, {
      children: "Voor de tweede film keren waarschijnlijk de meeste key mensen terug: regisseur\nJeff Rowe, de stemacteurs voor de Turtles (Micah Abbey, Shamon Brown Jr.,\nNicolas Cantu en Brady Noon), en Jackie Chan als Splinter. De animatie wordt\nopnieuw gedaan door Mikros Animation en mogelijk Cinesite."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, er wacht veel mutantenplezier: een korte film over AI, een nieuwe serie,\nen een tweede film met Shredder. Voor ons is dit een spannende tijd."
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

const url = "src/content/nieuws/de-teenage-mutant-ninja-turtles-krijgen-er-een-heleboel-bij-shredder-een-serie-en-een-korte-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-teenage-mutant-ninja-turtles-krijgen-er-een-heleboel-bij-shredder-een-serie-en-een-korte-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-teenage-mutant-ninja-turtles-krijgen-er-een-heleboel-bij-shredder-een-serie-en-een-korte-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
