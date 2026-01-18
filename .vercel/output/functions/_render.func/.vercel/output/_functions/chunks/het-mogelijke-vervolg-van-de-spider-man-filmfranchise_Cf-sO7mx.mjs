import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Komt er nu eigenlijk een vervolg op de OG Spider-Man franchise?",
  "date": "2024-04-03T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1712078115.jpg",
  "trailer": "",
  "slug": "komt-er-nu-eigenlijk-een-vervolg-op-de-og-spider-man-franchise",
  "draft": false,
  "tags": []
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "de-toekomst-van-het-maguire-spider-man-universum",
    "text": "De toekomst van het Maguire “Spider-Man” universum"
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
      children: "De geruchtenmolen draait op volle toeren over een mogelijke terugkeer van Sam Raimi en Tobey Maguire voor een vierde “Spider-Man” film. Deze twee filmmakers hebben met hun werk aan de originele trilogie een ware revolutie teweeggebracht in het tijdperk van superheldenfilms, waarbij vooral “Spider-Man 2” uit 2004 zich onderscheidde als een van de meest geprezen films binnen het genre. Ondanks dat “Spider-Man 3” uit 2007 niet goed werd ontvangen door critici, wist de film toch $895 miljoen wereldwijd binnen te halen, waarmee het de meest succesvolle film was van Raimi en Maguire."
    }), "\n", createVNode(_components.p, {
      children: "Er was een tijd dat Raimi bezig was met de ontwikkeling van “Spider-Man 4” bij Sony, met Tobey Maguire terug in de hoofdrol. Echter werd dit project uiteindelijk geschrapt ten gunste van een reboot van de webslingeraar op het witte doek met Andrew Garfield in de hoofdrol. Sinds Maguire zijn rol als Spider-Man opnieuw vertolkte in “Spider-Man: No Way Home” uit 2021, smachten fans van stripboekfilms naar een waardige “Spider-Man 4” van Raimi en zijn ster."
    }), "\n", createVNode(_components.p, {
      children: "Raimi heeft aangegeven open te staan voor een samenwerking met Maguire voor een vierde film, mocht de kans zich voordoen. Hij prijst ook de recente “Spider-Man” films, vooral “Spider-Man: No Way Home,” waarin hij het krachtig vond om Tobey Maguire weer in actie te zien. De kans op een vierde film lijkt echter nog niet concreet te zijn, aangezien Tom Holland momenteel de rol van Spider-Man vertolkt bij Sony en Marvel, en er wordt gewerkt aan een vierde film voor zijn versie van de superheld."
    }), "\n", createVNode(_components.h2, {
      id: "de-toekomst-van-het-maguire-spider-man-universum",
      children: "De toekomst van het Maguire “Spider-Man” universum"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel er nog geen officiële aankondigingen zijn gedaan over een nieuwe samenwerking tussen Raimi, Maguire en de “Spider-Man” franchise, tonen alle belangrijke betrokken partijen uit de oorspronkelijke trilogie interesse in een vierde film. Zowel Maguire als Kirsten Dunst, die Mary Jane Watson speelde in Raimi’s trilogie, hebben aangegeven bereid te zijn om terug te keren naar hun rollen als de gelegenheid zich voordoet."
    }), "\n", createVNode(_components.p, {
      children: "In een interview met Marvel na de release van “No Way Home” zei Maguire: “Ik houd van deze films en ik houd van alle verschillende series. Als deze jongens me zouden bellen en zeggen: ‘Wil je vanavond langskomen om rond te hangen en gek te doen?’ of ‘Wil je langskomen om deze film te maken of een scène te lezen of iets met Spider-Man te doen?’ dan zou mijn antwoord ‘ja!’ zijn. Want waarom zou ik dat niet willen doen?”"
    }), "\n", createVNode(_components.p, {
      children: "Dunst heeft ook laten doorschemeren dat ze openstaat voor een terugkeer naar het comic-filmuniversum vanwege financiële en persoonlijke redenen. Ze heeft aangegeven dat ze graag weer Mary Jane zou spelen, zelfs als dat betekent dat ze nu de oudere versie van het personage is met kleine Spider-kinderen."
    }), "\n", createVNode(_components.p, {
      children: "Al met al zijn de mogelijkheden voor een vervolg op de “Spider-Man” franchise nog steeds in beweging. Met Marvel’s voortdurende exploratie van het multiversum, zou het kunnen betekenen dat er ruimte is voor Raimi om terug te keren en een vierde film te maken. Hoewel er nog vele vragen onbeantwoord zijn en geen concrete plannen zijn aangekondigd, blijft de hoop onder fans hoog dat er ooit een nieuw hoofdstuk zal komen in het verhaal van de iconische webslingeraar."
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

const url = "src/content/nieuws/het-mogelijke-vervolg-van-de-spider-man-filmfranchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-mogelijke-vervolg-van-de-spider-man-filmfranchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-mogelijke-vervolg-van-de-spider-man-filmfranchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
