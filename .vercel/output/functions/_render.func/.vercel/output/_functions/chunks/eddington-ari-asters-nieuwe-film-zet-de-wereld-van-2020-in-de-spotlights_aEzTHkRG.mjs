import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Eddington Ari Aster's nieuwe film zet de wereld van 2020 in de spotlights",
  "date": "2025-07-01T17:13:22.319Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751382504.jpg",
  "trailer": "",
  "slug": "eddington-ari-asters-nieuwe-film-zet-de-wereld-van-2020-in-de-spotlights",
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
      children: "Ari Aster, de regisseur achter “Hereditary” en “Midsommar”, komt nu met\n“Eddington”. Deze film speelt zich af in 2020 tijdens de wereldwijde pandemie en\nsociale onrust. We volgen het verhaal in het fictieve stadje Eddington, New\nMexico, waar inwoners worstelen met lockdowns en protesten."
    }), "\n", createVNode(_components.p, {
      children: "Joaquin Phoenix speelt sheriff Joe Cross, een aftastende figuur die zijn\nautoriteitsrol probeert te vervullen terwijl hij een complexe relatie onderhoudt\nmet burgemeester Ted Garcia (Pedro Pascal). De spanning loopt op wanneer Joe\nbesluit tegen Garcia te strijden voor het burgemeesterschap. Tegelijkertijd zien\nwe hoe Joe’s vrouw Louise kampt met de mentale problemen van haar moeder, wat\nhun gezinsleven zwaar belast."
    }), "\n", createVNode(_components.p, {
      children: "De komst van de Black Lives Matter-beweging naar Eddington leidt tot felle\nconflicten tussen demonstranten en autoriteiten. Aster mixt hier komedie, drama\nen sociale kritiek tot een geheel dat soms verwarrend overkomt door zijn\nsatirische opmerkingen over hedendaagse problemen. De karakters zijn stuk voor\nstuk complex, met Joe’s innerlijke strijd tussen principes en beschermdrang als\ncentraal thema."
    }), "\n", createVNode(_components.p, {
      children: "Visueel valt de film op door de samenwerking met cameraman Darius Khondji. Zijn\nstrakke cinematografie versterkt de emoties van de personages en de gespannen\nsfeer in het stadje. We zien hoe Aster thema’s als macht en verantwoordelijkheid\nverkent, waarbij individuele problemen botsen met grotere maatschappelijke\nkwesties."
    }), "\n", createVNode(_components.p, {
      children: "Anders dan Aster’s eerdere horrorwerken biedt “Eddington” vooral sociale\nkritiek, afgewisseld met absurde humor en enkele angstaanjagende momenten. De\nfilm daagt ons uit na te denken over onze rol in tijden van crisis, met een\neerlijke blik op de emotionele last die mensen dragen. “Eddington” komt op 18\njuli 2025 in de bioscoop en zal naar verwachting flink wat discussie ontketenen."
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

const url = "src/content/nieuws/eddington-ari-asters-nieuwe-film-zet-de-wereld-van-2020-in-de-spotlights.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eddington-ari-asters-nieuwe-film-zet-de-wereld-van-2020-in-de-spotlights.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eddington-ari-asters-nieuwe-film-zet-de-wereld-van-2020-in-de-spotlights.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
