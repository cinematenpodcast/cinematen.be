import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Agatha All Along probeert horror te brengen in trailer",
  "date": "2024-07-09T15:45:50.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/agatha-all-along-is-arriving-in-time-for-halloween-1720456703.jpg",
  "trailer": "ARulRbzM7Jw",
  "slug": "agatha-all-along-brengt-horror-in-trailer",
  "tags": ["tv", "trailer", "comics"]
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
      children: "Marvel-fans over de hele wereld hebben reikhalzend uitgekeken naar de beloofde “angstaanjagende” show die Marvel had aangekondigd. Met hoge verwachtingen van een duistere en enge serie, was de onthulling van de trailer voor “Agatha All Along” niet echt wat velen hadden gehoopt."
    }), "\n", createVNode(_components.p, {
      children: "In de wereld van superhelden en bovennatuurlijke krachten was Kathryn Hahn’s vertolking van Agatha Harkness in “WandaVision” een absoluut hoogtepunt. De belofte van meer sinisterie van deze kwaadaardige tovenares deed veel fans hopen op een duik in het echte bovennatuurlijke horror-genre. Echter, na het zien van de eerste beelden van “Agatha All Along”, lijkt het erop dat de show misschien niet aan die verwachtingen zal voldoen."
    }), "\n", createVNode(_components.p, {
      children: "De trailer biedt weinig bewijs van echte horror, afgezien van een kort shot van een vleermuis-achtig wezen halverwege. Het enige andere fragment dat potentieel angstaanjagend zou kunnen zijn, wordt ondermijnd door flauwe grappen, wat de angstfactor tenietdoet."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel dit slechts de eerste trailer is en Marvel waarschijnlijk iets heeft vrijgegeven dat geschikt is voor alle leeftijden, kan het gebrek aan impact een teleurstelling zijn voor fans die op zoek waren naar een serieuze duistere en huiveringwekkende verhaallijn."
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt alsof “Agatha All Along” voorlopig gewoon een gemiddelde Marvel-show is, met voornamelijk CGI-zware actiescènes en vage hints naar een niet al te inspirerende plot. Het is begrijpelijk dat Marvel een breed publiek wil aanspreken, maar voor degenen die op zoek waren naar echte horror, kan deze eerste indruk tegenvallend zijn."
    }), "\n", createVNode(_components.p, {
      children: "In “Agatha All Along” vindt de beruchte Agatha Harkness zichzelf machteloos en zonder krachten nadat een verdachte goth tiener haar bevrijdt uit haar vloek. Haar interesse wordt gewekt wanneer hij Agatha smeekt hem mee te nemen op de legendarische Witches’ Road, een magisch parcours van beproevingen dat, indien overleefd, een heks beloont met datgene wat ze missen."
    }), "\n", createVNode(_components.p, {
      children: "Naast Hahn spelen Joe Locke, Sasheer Zamata, Ali Ahn, Maria Dizzia, Paul Adelstein, Miles Gutierrez-Riley en Okwui Okpokwasili, met Debra Jo Rupp, Patti LuPone en Aubrey Plaza. De serie wordt geproduceerd door Kevin Feige, Louis D’Esposito, Brad Winderbaum, Mary Livanos en Schaeffer, waarbij de regie in handen is van Schaeffer, Rachel Goldberg en Gandja Monteiro."
    }), "\n", createVNode(_components.p, {
      children: "“Marvel Television’s Agatha All Along” gaat in première op woensdag 18 september op Disney+."
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

const url = "src/content/nieuws/agatha-all-along-probeert-horror-te-brengen-in-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/agatha-all-along-probeert-horror-te-brengen-in-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/agatha-all-along-probeert-horror-te-brengen-in-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
