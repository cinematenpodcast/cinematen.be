import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jurassic World keert terug met een achtste film",
  "date": "2025-11-07T22:18:22.298Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762536591.jpg",
  "trailer": "",
  "slug": "jurassic-world-keert-terug-met-een-achtste-film",
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
      children: "Universal Pictures kondigt een nieuwe Jurassic World film aan, de achtste in de\nreeks sinds de originele Jurassic Park in 1993. Regisseur Gareth Edwards, die\nook verantwoordelijk was voor de vorige film, lijkt opnieuw de leiding te nemen.\nDe hoofdrolspelers keren terug: Scarlett Johansson als Zora Bennett, Jonathan\nBailey als Henry Loomis en Mahershala Ali als Duncan Kincaid."
    }), "\n", createVNode(_components.p, {
      children: "Jurassic World Rebirth, de vorige film die in de zomer van 2025 uitkwam, was een\nfinancieel succes met een wereldwijde opbrengst van bijna 870 miljoen dollar. In\neen periode waarin bioscoopbezoek sinds de coronapandemie achterblijft – oktober\n2025 was zelfs de slechtste oktobermaand in bijna 30 jaar – was Rebirth een van\nde weinige kaskrakers, samen met A Minecraft Movie, Lilo & Stitch en Ne Zha 2."
    }), "\n", createVNode(_components.p, {
      children: "De Jurassic-franchise heeft in totaal bijna 7 miljard dollar opgebracht, wat een\nnieuwe film voor Universal een logische keuze maakt. Over het verhaal van de\nnieuwe film is nog niets bekend. In Rebirth werden de dinosaurussen\ngeïntroduceerd op het nieuwe eiland Ile Saint-Hubert, waar ze in afgesloten\ngebieden leven. Dit was een verschuiving ten opzichte van de vorige film,\nDominion, waarin ze vrij over de hele wereld rondliepen."
    }), "\n", createVNode(_components.p, {
      children: "Edwards kreeg voor Rebirth weinig productietijd omdat Universal snel een\nblockbuster nodig had. Voor de nieuwe film heeft hij meer tijd, wat mogelijk\nbetekent dat er meer praktische effecten gebruikt worden in plaats van alleen\ncomputeranimatie. In Rebirth waren er namelijk geen echte dinosauruseffecten."
    }), "\n", createVNode(_components.p, {
      children: "In eerdere Jurassic World films zaten veel verwijzingen naar de originele\nJurassic Park, zoals oude jeeps, hergebruikte dialoog en vergelijkbare scènes.\nSommige mensen vonden dit leuk, anderen vonden elementen zoals Claire die op\nhoge hakken rende, minder geslaagd."
    }), "\n", createVNode(_components.p, {
      children: "Rebirth is momenteel te streamen op Peacock en andere diensten. Het verhaal\nbegint zeventien jaar geleden op Ile Saint-Hubert, waar wetenschappers hybride\ndinosaurussen creëren. Een ongeluk met een snoepwikkel leidt tot de ontsnapping\nvan een gemuteerde D-Rex. In het heden, 32 jaar na de terugkeer van de\ndinosaurussen, zijn mensen aan ze gewend. We volgen Zora Bennett, een\nveiligheidsexpert die wordt ingehuurd om dna te verzamelen van de grootste\ndinosaurussen, samen met wetenschapper Henry Loomis en de crew van Duncan\nKincaid. Een aparte verhaallijn volgt een familie op vakantie wier boot wordt\naangevallen door een Mosasaurus."
    }), "\n", createVNode(_components.p, {
      children: "De film bevat geen seks of naaktheid en de acteerprestaties, vooral die van\nScarlett Johansson, worden als goed ervaren. Rebirth kostte 200 miljoen dollar\nom te maken en bracht 760 miljoen dollar op – minder dan eerdere Jurassic World\nfilms, maar nog steeds een aanzienlijk bedrag."
    }), "\n", createVNode(_components.p, {
      children: "Critici vragen zich af waarom dinosaurussen altijd achter mensen aanzitten, wat\nenergetisch onlogisch is, maar zonder dit gevaar zouden de films minder spannend\nzijn. Rebirth volgt bekende formules: grote bedrijven zijn slecht, mensen helpen\nis goed en dinosaurussen zijn hongerig. Desalniettemin zijn de actiescènes goed\ngemaakt, met ontmoetingen op land, in zee en in de lucht. Het kleine meisje in\nde film krijgt een schattige mini-dinosaurus als vriendje."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar meer nieuws over het vervolg, dat nog geen releasedatum\nheeft. De vorige films zijn te streamen voor wie ze nog niet heeft gezien."
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

const url = "src/content/nieuws/jurassic-world-keert-terug-met-een-achtste-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-keert-terug-met-een-achtste-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-keert-terug-met-een-achtste-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
