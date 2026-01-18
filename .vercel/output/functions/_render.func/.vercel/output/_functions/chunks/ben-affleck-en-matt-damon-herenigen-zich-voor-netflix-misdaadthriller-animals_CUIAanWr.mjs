import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ben Affleck en Matt Damon herenigen zich voor Netflix misdaadthriller \"Animals\"",
  "date": "2024-01-26T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1706207288.jpg",
  "trailer": "",
  "slug": "ben-affleck-en-matt-damon-herenigen-zich-voor-netflix-misdaadthriller-animals",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-verhaal-van-animals",
    "text": "Het verhaal van “Animals”"
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
      children: "Ben Affleck en Matt Damon, het befaamde duo dat in 1997 een Oscar won voor het beste originele scenario met “Good Will Hunting”, slaan opnieuw de handen ineen voor een nieuwe misdaadthriller genaamd “Animals”. De film, geregisseerd door Ben Affleck en met Matt Damon in de hoofdrol, is recentelijk overgenomen door Netflix."
    }), "\n", createVNode(_components.p, {
      children: "Na hun succesvolle samenwerking aan “Good Will Hunting” hebben Ben Affleck en Matt Damon verschillende keren zij aan zij gestaan, zij het voornamelijk in films van regisseur Kevin Smith, zoals “Dogma” uit 1999 en “Jay and Silent Bob Strike Back” uit 2001. Echter, het duurde tot de historische dramafilm “The Last Duel” van Ridley Scott in 2021 voordat ze weer samenkwamen als creatieve partners. Nu kijken fans reikhalzend uit naar hun volgende project: “Animals”."
    }), "\n", createVNode(_components.h2, {
      id: "het-verhaal-van-animals",
      children: "Het verhaal van “Animals”"
    }), "\n", createVNode(_components.p, {
      children: "Details over het plot van “Animals” zijn nog schaars, maar de film zal zich richten op een ontvoering. De thriller belooft spanning en sensatie, waarbij een burgemeesterskandidaat en zijn vrouw geconfronteerd worden met de ontvoering van hun zoon. Om hun zoon te redden, moeten ze zich mengen in een wereld vol vijanden, zowel politiek als anderszins, en bereid zijn om vuile handen te maken."
    }), "\n", createVNode(_components.p, {
      children: "“Animals” markeert de tweede keer dat Ben Affleck achter de camera staat terwijl Matt Damon de hoofdrol op zich neemt. Eerder werkten ze samen aan “Air”, een film geproduceerd door Amazon Studios waarin Damon schitterde als Nike-executive Sonny Vaccaro, met Affleck in een ondersteunende rol als mede-oprichter van Nike, Phil Knight. Deze keer zijn ze echter niet alleen acteurs, maar ook producenten via hun bedrijf Artists Equity, opgericht in 2022 met de intentie om niet alleen acteurs, maar ook crewleden te laten delen in de winst."
    }), "\n", createVNode(_components.p, {
      children: "Na het succes van zijn eerste twee regieprojecten, “Gone Baby Gone” en “The Town”, keert Ben Affleck met “Animals” terug naar het misdaadthrillergenre. Na wat tegenslagen met zijn misdaaddrama uit de tijd van de drooglegging, “Live By Night”, en de problemen rondom “Justice League” bij Warner Bros., waarbij zijn oorspronkelijke versie van “The Batman” werd geannuleerd, vond Affleck weer zijn draai met de ontroerende film “Air” in 2021."
    }), "\n", createVNode(_components.p, {
      children: "Affleck zit niet stil in 2024. Naast zijn betrokkenheid bij “Animals”, heeft hij recentelijk ook hulp geboden aan zijn vrouw Jennifer Lopez bij haar aankomende muzikale film “This Is Me … Now: A Love Story”. Bovendien hoopt Affleck later dit jaar te beginnen met de opnames van de langverwachte sequel van de actie-thriller “The Accountant” uit 2016, geregisseerd door Gavin O’Connor. Het is duidelijk dat Affleck vastberaden is om zijn carrière als regisseur voort te zetten."
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

const url = "src/content/nieuws/ben-affleck-en-matt-damon-herenigen-zich-voor-netflix-misdaadthriller-animals.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ben-affleck-en-matt-damon-herenigen-zich-voor-netflix-misdaadthriller-animals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ben-affleck-en-matt-damon-herenigen-zich-voor-netflix-misdaadthriller-animals.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
