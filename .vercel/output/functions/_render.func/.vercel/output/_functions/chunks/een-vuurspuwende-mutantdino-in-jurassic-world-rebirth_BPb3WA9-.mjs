import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een vuurspuwende mutant-dino in Jurassic World Rebirth",
  "date": "2025-04-03T18:27:59.826Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1743693319.jpg",
  "trailer": "",
  "slug": "een-vuurspuwende-mutantdino-in-jurassic-world-rebirth",
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
      children: "Deze zomer komt er een nieuwe film in de wereld van Jurassic Park en Jurassic\nWorld. De film heet “Jurassic World Rebirth” en wordt geregisseerd door Gareth\nEdwards. In deze nieuwe film zien we een compleet nieuwe cast en een nieuwe\nlocatie. En recent is vrijgegeven dat de film een vuurspuwende mutant-dinosaurus\nzal bevatten."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens een presentatie van Universal Pictures op CinemaCon in Las Vegas, werd\nde regisseur Gareth Edwards samen met de sterren Scarlett Johansson en\nMahershala Ali op het podium gebracht. Ze hebben nieuw beeldmateriaal van\n“Rebirth” getoond. In deze beelden was een vuurspuwende dinosaurus te zien."
    }), "\n", createVNode(_components.p, {
      children: "De eerste trailer van “Jurassic World Rebirth” liet een paar korte momenten zien\nvan een bijzondere mutant-dinosaurussen. Het is nog niet bevestigd, maar het\nlijkt erop dat deze vuurspuwende dinosaurussen een mutant is. Dit zou betekenen\ndat het een mislukte poging is om een draakdino te creëren tijdens de\nontwikkeling van de eerste Jurassic Park film."
    }), "\n", createVNode(_components.p, {
      children: "Universal en Edwards hebben wel enkele hints gegeven over deze\nmutant-dinosaurus, maar ze houden de meeste details geheim. Dit lijkt erop te\nwijzen dat ze deze geheimen willen bewaren tot de film uitkomt. Wat lijkt is dat\nze echt proberen om iets nieuws te doen in de franchise, ook al kan dat\nrisicovol zijn."
    }), "\n", createVNode(_components.p, {
      children: "David Koepp, die ook het script schreef voor de eerste Jurassic Park film, is\nweer terug om het script voor “Rebirth” te schrijven. Hij ziet deze nieuwe film\nals een kans om weer “opnieuw” te beginnen. De vuurspuwende dinosaurus is\ninderdaad een opvallende manier om dat te doen."
    }), "\n", createVNode(_components.p, {
      children: "Wat ook interessant is, is dat “Rebirth” zich afspeelt op de originele Jurassic\nPark-onderzoeks locatie. Dit is een gebied dat we nog niet eerder in de films\nhebben bezocht. Het is niet het eiland Isla Nublar, waar het eerste park was,\nnoch Isla Sorna, dat we hebben gezien in “The Lost World: Jurassic Park” en\n“Jurassic Park III”."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de presentatie vertelde Scarlett Johansson dat ze al heel lang in een\nJurassic-film wil spelen. Ze ging zelfs rechtstreeks naar Steven Spielberg om\nhem te vertellen dat ze elke rol wilde, zelfs als ze in de eerste vijf minuten\nzou worden opgegeten. Haar doel met deze film is om de “Jurassic” franchise weer\nspannend en eng te maken, iets wat het al een tijd niet meer is geweest."
    }), "\n", createVNode(_components.p, {
      children: "De film “Jurassic World Rebirth” komt op 2 juli 2025 uit in de bioscoop. Wij\nkijken er al naar uit om te zien welke verrassingen en spannende momenten de\nfilm ons zal tonen."
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

const url = "src/content/nieuws/een-vuurspuwende-mutantdino-in-jurassic-world-rebirth.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-vuurspuwende-mutantdino-in-jurassic-world-rebirth.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-vuurspuwende-mutantdino-in-jurassic-world-rebirth.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
