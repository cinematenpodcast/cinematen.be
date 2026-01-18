import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "In 2028 hebben we een Oscar voor beste stunt",
  "date": "2025-04-11T06:32:36.454Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1744320806.jpg",
  "trailer": "",
  "slug": "in-2028-hebben-we-een-oscar-voor-beste-stunt",
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
      children: "De Academy Awards, die elk jaar de beste films en talenten van de filmindustrie\nvieren, hebben aangekondigd dat er een prijs komt voor stunts. Deze prijs,\nofficieel de “Academy Award for Achievement in Stunt Design”, zal voor het eerst\nworden uitgereikt tijdens de 100e Academy Awards, die in 2028 plaatsvinden. Deze\nprijs zal films belonen die in 2027 zijn uitgebracht."
    }), "\n", createVNode(_components.p, {
      children: "Stuntwerk is al lang een belangrijk onderdeel van films. Het voegt opwindende\nactie en spektakel toe aan veel verschillende filmgenres. De CEO van de Academy,\nBill Kramer, en president Janet Yang hebben in een verklaring gezegd dat ze\ntrots zijn om het innovatieve werk van stuntprofessionals te gaan erkennen. Deze\ngroep omvat stuntdesigners, coördinatoren en performers, die allemaal bijdragen\naan het maken van spannende scènes."
    }), "\n", createVNode(_components.p, {
      children: "Tot nu toe hebben slechts twee stuntperformers, Yakima Canutt en Hal Needham,\neen ere-Oscar ontvangen. Met meer dan 100 stunt professionals die lid zijn van\nde Production and Technology Branch van de Academy, is deze nieuwe prijs een\ngrote stap in de richting van erkenning voor hun vaardigheden en talenten. De\nregels rondom de categorie en wie precies in aanmerking komt, zullen in 2027\nbekendgemaakt worden."
    }), "\n", createVNode(_components.p, {
      children: "De oorsprong van deze prijs gaat terug tot eerdere jaren waarin stuntwerk werd\ngepromoot. Films zoals “Once Upon a Time in Hollywood”, waarin Brad Pitt een\nstuntman speelde, hebben bijgedragen aan de groeiende aandacht voor stunts in de\nfilmindustrie. Tevens heeft de “Stand Up for Stunts”-campagne in 2019 ook veel\ngehoor gekregen en heeft ervoor gezorgd dat de stunt gemeenschap meer werd\nerkend en gewaardeerd."
    }), "\n", createVNode(_components.p, {
      children: "David Leitch, een voormalige stuntman en nu directeur, heeft hard gelobbyd voor\nhet waarmaken van deze prijs. Hij heeft samen met stuntcoördinator Chris O’Hara\npresentaties gedaan aan de Academy’s bestuursleden. Leitch zei dat stunts een\nessentieel onderdeel zijn van elke filmgenre en dat deze erkenning al lang op\nzich laat wachten."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de 97e Academy Awards was er al een eerbetoon aan stuntperformers in de\nvorm van een video, gepresenteerd door de sterren van “The Fall Guy”, Emily\nBlunt en Ryan Gosling. Dit liet zien hoe belangrijk stuntwerk is voor de\nfilmindustrie en dat wij het ook waarderen."
    }), "\n", createVNode(_components.p, {
      children: "De komst van de stuntontwerp Oscar kan ook inhouden dat meer blockbusterfilms\ndie normaal gesproken niet in andere categorieën worden genomineerd, nu wel de\nkans krijgen om even in de schijnwerpers te staan."
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

const url = "src/content/nieuws/in-2028-hebben-we-een-oscar-voor-beste-stunt.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/in-2028-hebben-we-een-oscar-voor-beste-stunt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/in-2028-hebben-we-een-oscar-voor-beste-stunt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
