import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Y2K: een nostalgisch zalige horrorkomedie",
  "date": "2024-08-21T17:37:16.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/y2k-goes-back-to-the-90s-for-some-nostalgic-laughs-and-kills-1724104054.jpg",
  "trailer": "P4f9gCTLhYs",
  "slug": "y2k-een-nostalgische-rampzalige-komedie",
  "tags": ["film", "trailer"]
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
      children: "Op 31 december 1999, terwijl de wereld zich klaarmaakte om het nieuwe millennium te verwelkomen, speelde zich een onverwachte nacht af die twee middelbare scholieren in de hoofdrol plaatste. Dit is het uitgangspunt van de nieuwste film van regisseur Kyle Mooney, ‘Y2K’, een mix van horrorscenario’s en comedy, doordrenkt met nostalgische elementen uit de jaren 90."
    }), "\n", createVNode(_components.p, {
      children: "In ‘Y2K’ storten twee tieners een chaotisch Oudjaarsfeest binnen en worden ze getuige van het begin van een wereldwijde apocalyps. De beruchte Y2K-bug keert zich tegen iedereen als alle technologieën in moordlustige entiteiten veranderen. Van killer VHS-tapes tot op hol geslagen Tamagotchis, de retro tech uit het verleden wordt hun grootste vijand."
    }), "\n", createVNode(_components.p, {
      children: "De film schittert met een getalenteerde cast, onder andere Rachel Zegler, Jaeden Martell, Julian Dennison, The Kid Laroi, Fred Durst, Mason Gooding, Alicia Silverstone en regisseur Kyle Mooney zelf. Een opvallend moment in de trailer toont een karakter dat geschokt reageert wanneer een Tamagotchi aanzienlijke schade aanricht met de uitroep: “Een Tamagotchi heeft zojuist door iemands hoofd geboord!”"
    }), "\n", createVNode(_components.p, {
      children: "Martell’s personage probeert temidden van de chaos een lichtpuntje te vinden en benadrukt tegen Zegler: “Dit is de ellendigste nacht van mijn leven geweest. Maar het is cool dat we tenminste samen zijn geweest.”"
    }), "\n", createVNode(_components.p, {
      children: "‘Y2K’ maakte zijn debuut tijdens South by Southwest eerder dit jaar en ontving overwegend positieve recensies. Met een release gepland op 6 december, belooft de film een mix van humor, actie en nostalgie te bieden. Kyle Mooney maakt met deze film zijn regiedebuut, waarbij hij het script samen met Evan Winter schreef."
    }), "\n", createVNode(_components.p, {
      children: "Naast haar rol in ‘The Hunger Games: The Ballad of SongbirdsSnakes’, zal Rachel Zegler ook te horen zijn in Netflix’s animatiefilm ‘Spellbound’ en schitteren als Sneeuwwitje in Disney’s live-action remake van het klassieke sprookje."
    }), "\n", createVNode(_components.p, {
      children: "‘Y2K’ lijkt een unieke ervaring te beloven, waarin kijkers worden meegenomen op een wilde rit vol actie, humor en jeugdige avonturen uit de tumultueuze overgang van de jaren 90 naar het nieuwe millennium."
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

const url = "src/content/nieuws/y2k-een-nostalgisch-zalige-horrorkomedie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/y2k-een-nostalgisch-zalige-horrorkomedie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/y2k-een-nostalgisch-zalige-horrorkomedie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
