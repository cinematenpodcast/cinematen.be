import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het is een Brand New Day voor Spider-Man",
  "date": "2025-04-01T15:32:22.794Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1743509746.jpg",
  "trailer": "",
  "slug": "het-is-een-brand-new-day-voor-spiderman",
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
      children: "De langverwachte vierde film over Spider-Man met Tom Holland in de hoofdrol heet\nofficieel “Spider-Man: Brand New Day”. Dit werd aangekondigd tijdens CinemaCon\n2025. Tom Holland kon niet persoonlijk aanwezig zijn, maar hij maakte gebruik\nvan video om het nieuws te delen. In de aankondiging werd duidelijk dat deze\nfilm een frisse start betekent voor de geliefde superheld."
    }), "\n", createVNode(_components.p, {
      children: "Na de gebeurtenissen in “Spider-Man: No Way Home” heeft Peter Parker, ook wel\nbekend als Spider-Man, een grote verandering ondergaan. In deze film gebruikte\nPeter een krachtige spreuk van Doctor Strange, waardoor de wereld vergat wie hij\nwas, inclusief zijn vrienden en familie. Aan het einde van de film was hij\nalleen in New York, klaar om aan een nieuw hoofdstuk in zijn leven te beginnen\nmet nieuwe uitdagingen en misschien nieuwe vrienden."
    }), "\n", createVNode(_components.p, {
      children: "De titel “Brand New Day” is ontleend aan een controversiële verhaallijn uit de\nSpider-Man-strips. Deze stripverhaal volgde na het verhaal “One More Day”,\nwaarin Peter Parker en zijn vrouw Mary Jane een ongelukkige deal maakten met de\ndemon Mephisto. In ruil voor de levensreddende behandeling van zijn tante May,\nbesloot Peter zijn huwelijk met Mary Jane op te geven. Dit leidde tot grote\nveranderingen in Spider-Mans leven en zijn relaties met vrienden en familie."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn nieuwsgierig naar welke personages er in “Spider-Man: Brand New Day”\nzullen opduiken. Zendaya, die de rol van MJ speelt, en Jacob Batalon, die Ned\nLeeds speelt, zullen naar verluidt terugkeren. Ook is er nog veel speculatie\nover Sadie Sink, bekend van “Stranger Things”. Men denkt dat zij misschien de\nrol van de superheld, Jackpot, zou spelen, die een belangrijke rol heeft in het\n“Brand New Day”-verhaal."
    }), "\n", createVNode(_components.p, {
      children: "De film komt uit op 31 juli 2026 en aangezien “Brand New Day” plaatsvindt tussen\n“Avengers: Doomsday” en “Secret Wars”, is het mogelijk dat deze film ook zou\nkunnen voortbouwen op de algemene verhaallijn van het MCU."
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

const url = "src/content/nieuws/het-is-een-brand-new-day-voor-spiderman.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-is-een-brand-new-day-voor-spiderman.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-is-een-brand-new-day-voor-spiderman.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
