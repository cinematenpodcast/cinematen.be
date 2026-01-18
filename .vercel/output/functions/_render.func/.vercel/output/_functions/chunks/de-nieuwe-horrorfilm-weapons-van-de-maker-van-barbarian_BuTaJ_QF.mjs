import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Nieuwe Horrorfilm \"Weapons\" van de maker van Barbarian",
  "date": "2025-04-30T19:31:00.308Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1745934001.jpg",
  "trailer": "",
  "slug": "de-nieuwe-horrorfilm-weapons-van-de-maker-van-barbarian",
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
  return createVNode(_components.p, {
    children: "Zach Cregger heeft een nieuwe griezelfilm gemaakt die “Weapons” heet. Dit is\nzijn volgende film na “Barbarian”, die in 2022 heel populair was. Die film\nkostte maar 4,5 miljoen dollar om te maken, maar bracht wel 45,4 miljoen dollar\nop. Omdat “Barbarian” zo’n succes was, wilden veel filmstudio’s graag met\nCregger samenwerken. Uiteindelijk heeft New Line Cinema de strijd gewonnen om de\nfilm “Weapons” te mogen maken. De film gaat over iets raars dat gebeurt in een\nklein plaatsje in Pennsylvania. Op een nacht, precies om 2:17 uur, verdwijnen er\nzomaar 17 kinderen uit hun huizen. Ze komen nooit meer terug. Dit is natuurlijk\nverschrikkelijk voor de ouders en de mensen in het stadje. Julia Garner speelt\nJustine Gandy, de juf van de verdwenen kinderen. Josh Brolin is Archer Graff,\neen van de vaders die probeert te begrijpen wat er gebeurd is. We weten nog niet\nveel over de film. De reclamecampagne geeft expres veel geheimen weg. Er is een\nwebsite die “Maybrook Missing” heet, die laat zien hoe moeilijk de zoektocht\nnaar de kinderen is voor de mensen daar. De film laat zien hoe bang en onrustig\niedereen is. In de trailer zie je enge dingen, zoals mensen die gek worden en\nrare wezens. Zach Cregger heeft gezegd dat “Weapons” groter en ingewikkelder is\ndan “Barbarian”. Hij vertelde dat er meer acteurs meedoen, de plekken waar\ngefilmd is groter zijn en dat het moeilijker was om deze film te bedenken. Dit\nbetekent dat de film anders zal zijn dan je misschien verwacht. Het mysterie van\nde verdwenen kinderen is belangrijk, maar er gebeuren ook veel andere\nonverwachte dingen in het verhaal. Cregger heeft ervoor gezorgd dat de film past\nbij wat we van hem verwachten. “Barbarian” was al verrassend met zijn\nonvoorspelbare wendingen, en “Weapons” lijkt die stijl voort te zetten.\n“Weapons” komt op 8 augustus 2025 in de bioscoop."
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
const url = "src/content/nieuws/de-nieuwe-horrorfilm-weapons-van-de-maker-van-barbarian.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-horrorfilm-weapons-van-de-maker-van-barbarian.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-horrorfilm-weapons-van-de-maker-van-barbarian.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
