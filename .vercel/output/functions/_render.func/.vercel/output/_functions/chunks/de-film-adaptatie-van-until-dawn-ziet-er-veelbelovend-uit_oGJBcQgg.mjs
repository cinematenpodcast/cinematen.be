import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De film adaptatie van Until Dawn ziet er veelbelovend uit",
  "date": "2025-01-14T16:55:47.199Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/until-dawn-movie.jpg",
  "trailer": "",
  "slug": "de-film-adaptatie-van-until-dawn-ziet-er-veelbelovend-uit",
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
      children: "De filmadaptatie van het populaire videospel Until Dawn komt eraan, en we hebben\nal een voorproefje gekregen van wat ons te wachten staat. In de game maakten\nspelers keuzes die invloed hebben op het lot van de personages. De film probeert\ndeze unieke vertelstijl na te volgen, maar op een andere originele manier."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur David F. Sandberg gaf aan dat de film op een slimme manier met het\nverhaal zal omgaan. Net als in de game zullen de personages elke keer dat ze\nsterven weer opnieuw tot leven komen. Dit zorgt ervoor dat de film telkens het\nverhaal verder kan zetten. Dit herhalende element doet denken aan de film\nGroundhog Day, maar dan met een horror twist, dus eigenlijk meer als zoals de\nHappy Death Day films."
    }), "\n", createVNode(_components.p, {
      children: "In de film ontmoeten we een nieuwe groep tieners die naar een afgelegen plek\ngaan. Dit is wel anders dan het verhaal van de game, dat zich afspeelde in een\nsneeuwachtige bergomgeving. Monsters, zoals de wendigo’s, lijken niet in de film\nvoor te komen. Maar Peter Stormare, die de rol van Dr. Hill uit de game speelt,\nzal wel in de film te zien zijn. Hierdoor blijft er wel een kleine link met de\noriginele game, maar de rest van het verhaal lijkt heel anders."
    }), "\n", createVNode(_components.p, {
      children: "De film komt op 25 april uit en binnenkort kunnen we ook een trailer verwachten."
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

const url = "src/content/nieuws/de-film-adaptatie-van-until-dawn-ziet-er-veelbelovend-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-film-adaptatie-van-until-dawn-ziet-er-veelbelovend-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-film-adaptatie-van-until-dawn-ziet-er-veelbelovend-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
