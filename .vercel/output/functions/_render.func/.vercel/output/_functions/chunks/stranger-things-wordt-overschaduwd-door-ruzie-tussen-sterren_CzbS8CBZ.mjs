import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stranger Things wordt overschaduwd door ruzie tussen sterren",
  "date": "2025-11-06T14:20:09.673Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/david-harbour-millie-bobby-brown-fd10ec7709db4bc989718dc4bc35d1ea.jpg",
  "trailer": "",
  "slug": "stranger-things-wordt-overschaduwd-door-ruzie-tussen-sterren",
  "tags": ["TV"]
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
      children: "Volgens berichten in de media zou Millie Bobby Brown een officiële klacht hebben\ningediend tegen haar tegenspeler David Harbour wegens pesten en lastigvallen.\nBeide acteurs spelen samen in Stranger Things, waar Harbour de adoptievader Jim\nHopper speelt van Browns personage Eleven."
    }), "\n", createVNode(_components.p, {
      children: "Er zouden pagina’s vol beschuldigingen zijn geweest, die geen seksuele aard\nzouden hebben gehad. Netflix zou hierna een intern onderzoek zijn gestart dat\nmaanden heeft geduurd, maar de uitkomst is niet bekendgemaakt. Tijdens de\nopnames voor het vijfde en laatste seizoen, die liepen van januari tot december\n2024, zou Brown een persoonlijke vertegenwoordiger bij zich hebben gehad op de\nset."
    }), "\n", createVNode(_components.p, {
      children: "Eerder gaf Brown al hints over een moeizame verstandhouding. In een interview in\nmaart 2024 reageerde ze terughoudend toen werd gesuggereerd dat Harbour haar\nbruiloft zou leiden. Ze stelde voor dat hun andere tegenspeler Matthew Modine\ndeze rol op zich zou nemen, wat uiteindelijk ook gebeurde bij haar bruiloft met\nJake Bongiovi in mei 2024."
    }), "\n", createVNode(_components.p, {
      children: "Dit staat in contrast met Harbours eerdere uitspraken over een bijzondere band\nmet Brown. Hij noemde haar in 2021 nog “als een dochter” en zei dat hij een\nbeschermend gevoel voor haar had sinds ze elf jaar was. In 2018 vertelde Brown\ndat ze net als in de serie soms boos op elkaar werden, zowel op als naast de\nset, wat hun scènes extra echt zou laten aanvoelen."
    }), "\n", createVNode(_components.p, {
      children: "Naast de problemen op de set maakt Harbour ook een moeilijke tijd door in zijn\nprivéleven. Hij is gescheiden van zangeres Lily Allen, die in haar nieuwe album\nzingt over vermeend bedrog tijdens hun huwelijk. Het paar heeft hun huis in New\nYork te koop gezet."
    }), "\n", createVNode(_components.p, {
      children: "Het laatste seizoen van Stranger Things wordt in delen uitgezonden. Het eerste\ndeel komt uit op 26 november 2025, het tweede deel op eerste kerstdag. De\nallerlaatste aflevering is op oudejaarsavond zowel in de bioscoop als op Netflix\nte zien."
    }), "\n", createVNode(_components.p, {
      children: "Brown richt zich tegenwoordig ook op andere projecten. Ze runt een opvangcentrum\nvoor dieren in Georgia samen met haar man en het paar heeft recentelijk een\nbabymeisje geadopteerd."
    }), "\n", createVNode(_components.p, {
      children: "Vertegenwoordigers van zowel Brown, Harbour als Netflix hebben niet gereageerd\nop verzoeken om commentaar. Ook de makers van Stranger Things, de gebroeders\nDuffer, hebben geen antwoord gegeven op vragen over deze kwestie."
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

const url = "src/content/nieuws/stranger-things-wordt-overschaduwd-door-ruzie-tussen-sterren.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-wordt-overschaduwd-door-ruzie-tussen-sterren.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-wordt-overschaduwd-door-ruzie-tussen-sterren.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
