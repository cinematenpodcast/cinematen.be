import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Steven Yeun niet langer te zien in Marvel's Thunderbolts",
  "date": "2024-01-03T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704249530.jpg",
  "trailer": "",
  "slug": "steven-yeun-niet-langer-te-zien-in-marvels-thunderbolts",
  "draft": false,
  "tags": ["film", "casting", "comics"]
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
      children: "Deze week kwam het nieuws naar buiten dat acteur Steven Yeun niet langer te zien zal zijn in Marvel’s Thunderbolts. Het nieuws werd bevestigd nadat de productie van de film werd uitgesteld als gevolg van de stakingen van WGA en SAG-AFTRA, zo meldt Deadline."
    }), "\n", createVNode(_components.p, {
      children: "Eerder werd gemeld dat Yeun een rol zou spelen in de film, hoewel Marvel dit nooit officieel heeft bevestigd. Hij werd verwacht samen te spelen met acteurs als Florence Pugh, David Harbour, Sebastian Stan en Wyatt Russell, die  wel al tijdens de D23-presentatie in 2022 als hoofdcast waren aangekondigd. Vanwege de stakingen werd de productie van Thunderbolts een maand uitgesteld, en met de staking van SAG-AFTRA die tot november duurde, zal de productie nu plaatsvinden in 2024. Dit heeft uiteindelijk geleid tot het vertrek van Yeun van het project vanwege een conflict in zijn planning."
    }), "\n", createVNode(_components.p, {
      children: "De regie van Thunderbolts ligt in handen van Jake Schreier, bekend van films als “Robot & Frank” en “Paper Towns”. Het script wordt geschreven door Eric Pearson, de schrijver van onder andere “Thor: Ragnarok” en “Black Widow”. Marvel Studios-president Kevin Feige zal de film produceren. Hoewel er nog weinig bekend is over het plot van de film, draait het in de comics om een groep schurken die op missies worden gestuurd in opdracht van de overheid."
    }), "\n", createVNode(_components.p, {
      children: "De releasedatum van Thunderbolts staat gepland voor juli 2025. Door het vertrek van Yeun zal Marvel nu op zoek moeten gaan naar een nieuwe acteur om zijn rol in te vullen. De keuze van de juiste acteur zal van cruciaal belang zijn, gezien de hoge verwachtingen rondom het personage en de populariteit van Yeun na zijn succesvolle optreden in de Netflix-serie “Beef”. Het zal interessant zijn om te zien welke acteur uiteindelijk de rol op zich zal nemen en hoe dit het dynamische ensemble van de film zal beïnvloeden."
    }), "\n", createVNode(_components.p, {
      children: "Toch hoeven fans van Yeun zich geen zorgen te maken, want de acteur heeft nog genoeg projecten op zijn bord. Zo is hij te horen in de prime video-superheldenserie “Invincible” en zal hij binnenkort te zien zijn in films als “Mickey 17” van regisseur Bong Joon-ho en “Love Me” met Kristen Stewart. Bovendien maakt Yeun kans op de Emmy Award voor beste hoofdrolspeler in een beperkte serie of film voor zijn rol in “Beef”."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel het vertrek van Steven Yeun uit Marvel’s Thunderbolts teleurstellend is voor fans, biedt het ook nieuwe mogelijkheden voor andere acteurs om zich bij dit spannende project aan te sluiten. Met nog enkele jaren te gaan tot de release, is er nog genoeg tijd voor Marvel om de cast opnieuw samen te stellen en het beste uit deze veelbelovende film te halen."
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

const url = "src/content/nieuws/steven-yeun-niet-langer-te-zien-in-marvels-thunderbolts.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/steven-yeun-niet-langer-te-zien-in-marvels-thunderbolts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/steven-yeun-niet-langer-te-zien-in-marvels-thunderbolts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
