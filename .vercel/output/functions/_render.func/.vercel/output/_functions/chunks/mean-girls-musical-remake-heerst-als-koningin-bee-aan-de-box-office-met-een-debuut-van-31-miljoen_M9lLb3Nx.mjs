import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Mean Girls musical remake heerst als populaire tiener in de Box Office met een openingsweekend van $31 miljoen",
  "date": "2024-01-14T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1705165508.jpg",
  "trailer": "",
  "slug": "mean-girls-musical-remake-heerst-als-populaire-tiener-in-de-box-office-met-een-openingsweekend-van-31-miljoen",
  "draft": false,
  "tags": ["film"]
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
      children: "Bijna 20 jaar nadat de originele “Mean Girls” in de bioscoop verscheen, zijn de Plastic Girls weer terug om opnieuw de box office te domineren. De 2024 editie van “Mean Girls” heeft nieuwe castleden die in de originele rollen spelen, maar dit keer zingen ze meer dan alleen “Jingle Bell Rock”, aangezien de film specifiek een bewerking is van de “Mean Girls” toneelmusical uit 2017."
    }), "\n", createVNode(_components.p, {
      children: "“Mean Girls” zal met afstand de eerste plaats innemen, met een geschatte opbrengst van $31,5 miljoen tijdens het vierdaagse Martin Luther King Jr. Day weekend (volgens Deadline). De film is sterk begonnen met $11,65 miljoen op de openingsdag (inclusief voorvertoningen) en gedurende het traditionele driedaagse weekend zal naar verwachting een opbrengst van $27,5 miljoen behalen. De film uit 2004 bracht $24,4 miljoen op in het openingsweekend, wat neerkomt op ongeveer $39 miljoen wanneer gecorrigeerd wordt voor inflatie."
    }), "\n", createVNode(_components.p, {
      children: "Januari is doorgaans een rustige maand voor bioscopen, dus “Mean Girls” brengt een welkome boost met zich mee, nu vrouwen massaal naar de bioscoop gaan om de film te zien. Volgens PostTrak-gegevens (via Deadline) was 73% van het publiek op de openingsdag vrouwelijk, waarbij ongeveer 30% van de vrouwen de film met twee tot vier vrienden zag. Echter lijken bioscoopgangers teleurgesteld te zijn in deze remake, aangezien het publiek de film slechts een B CinemaScore heeft gegeven in vergelijking met een A- voor de originele film. Ook critici zijn niet erg onder de indruk; “Mean Girls” heeft een score van 70% op Rotten Tomatoes, maar bij nader inzien zijn de meeste positieve beoordelingen gematigd enthousiast in plaats van uitzinnig positief."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel het openingsweekend van “Mean Girls” in 2024 qua opbrengst niet kan tippen aan die van de originele film na correctie voor inflatie, belooft de remake nog steeds winstgevend te worden. Volgens Variety had de film een relatief bescheiden budget van slechts $36 miljoen, waardoor het break-even punt rond de $100 miljoen ligt - een doel dat het na een binnenlandse opening van meer dan $30 miljoen zonder problemen kan behalen. “Mean Girls” is ook in verschillende grote internationale markten geopend, waaronder Australië, Mexico en Brazilië, maar het zal pas volgende week uitkomen in het Verenigd Koninkrijk en Ierland."
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

const url = "src/content/nieuws/mean-girls-musical-remake-heerst-als-koningin-bee-aan-de-box-office-met-een-debuut-van-31-miljoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mean-girls-musical-remake-heerst-als-koningin-bee-aan-de-box-office-met-een-debuut-van-31-miljoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mean-girls-musical-remake-heerst-als-koningin-bee-aan-de-box-office-met-een-debuut-van-31-miljoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
