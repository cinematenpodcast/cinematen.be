import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tron Ares is een financiële teleurstelling geworden",
  "date": "2025-10-15T17:08:42.513Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1760546576.jpg",
  "trailer": "",
  "slug": "tron-ares-is-een-financile-teleurstelling-geworden",
  "tags": ["Film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "De derde film in de Tron-reeks, “Tron: Ares”, is nu te zien in de bioscoop.\nVijftien jaar na “Tron: Legacy” uit 2010 en meer dan veertig jaar na de\noriginele film uit 1982, pakt regisseur Joachim Rønning de draad weer op."
    }), "\n", createVNode(_components.p, {
      children: "De productie verliep niet van een leien dakje. Door een staking in de filmwereld\nmoesten de opnames tijdelijk worden stopgezet, wat meer dan 150 crewleden trof.\nDe staking ging over het gebruik van computers om acteurs en schrijvers te\nvervangen, wat ironisch genoeg perfect aansluit bij het thema van de film over\nde gevaren van kunstmatige intelligentie."
    }), "\n", createVNode(_components.p, {
      children: "In tegenstelling tot de vorige films speelt “Tron: Ares” zich niet alleen af in\nde digitale wereld. We volgen het computerprogramma Ares, gespeeld door Jared\nLeto, dat de echte wereld betreedt en daar menselijke emoties begint te\nontwikkelen. Andere personages zijn Athena (Jodie Turner-Smith), Julian (Evan\nPeters) en Eve Kim (Greta Lee). Julian stuurt Ares en Athena eropuit om de\nPermanence Code te stelen bij Eve Kim, een code die programma’s permanent in de\nechte wereld kan houden. Dit leidt tot spectaculaire achtervolgingen met\nlichtmotoren die speciaal zijn ontworpen voor 3D-beleving."
    }), "\n", createVNode(_components.p, {
      children: "Waar “Tron: Legacy” nog iconische muziek van Daft Punk had, zorgt Nine Inch\nNails deze keer voor een zwaardere rocksound bij de actiescènes."
    }), "\n", createVNode(_components.p, {
      children: "Helaas kon de film de hoge verwachtingen niet waarmaken. Met een budget van 180\nmiljoen dollar bracht “Tron: Ares” wereldwijd slechts 60,2 miljoen dollar op,\nwaarvan 33,2 miljoen dollar in Amerika. Wij geven de film gemiddeld een B+ score"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "oké, maar niet geweldig."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "De kritieken zijn niet mals. Het verhaal zou niet diep genoeg zijn en Jared\nLeto’s acteerprestaties vallen tegen. Greta Lee en Jodie Turner-Smith krijgen\nwel betere reviews. Sommigen vragen zich af of een andere hoofdrolspeler de film\nhad kunnen redden, maar een derde Tron-film was altijd al een moeilijke verkoop\nvoor wie de vorige films niet kende."
    }), "\n", createVNode(_components.p, {
      children: "Jared Leto was al in 2017 betrokken bij het project, toen zijn carrière nog op\neen hoogtepunt was. Sindsdien kampt hij met tegenvallende films en negatief\nnieuws over zijn gedrag, wat niet heeft geholpen."
    }), "\n", createVNode(_components.p, {
      children: "Na de aftiteling is er weliswaar een scène die naar een vervolg hint, maar\ngezien de teleurstellende opbrengsten lijkt een vierde Tron-film erg\nonwaarschijnlijk. Voor ons voelt dit als het einde van Tron als groot\nbioscoopavontuur."
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

const url = "src/content/nieuws/tron-ares-is-een-financile-teleurstelling-geworden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tron-ares-is-een-financile-teleurstelling-geworden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tron-ares-is-een-financile-teleurstelling-geworden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
