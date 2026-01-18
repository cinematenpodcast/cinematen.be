import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Fallout is Prime Videos kijkcijferkanon",
  "date": "2024-05-01T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1714492408.jpg",
  "trailer": "",
  "slug": "de-impact-van-prime-videos-fallout-serie-op-het-streaminglandschap",
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "explosieve-start-met-een-levendige-toekomst",
    "text": "Explosieve start met een levendige toekomst"
  }, {
    "depth": 2,
    "slug": "een-internationaal-succes",
    "text": "Een internationaal succes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Prime Video’s Fallout serie heeft de streamingwereld in vuur en vlam gezet sinds de release op 10 april. Met indrukwekkende kijkcijfers heeft de serie zich al snel gevestigd als de op één na populairste Amazon show aller tijden. In slechts twee weken hebben 65 miljoen kijkers de serie gestreamd, waarmee het succes van andere bekende Prime Video shows zoals The Boys en Invincible overtroffen wordt."
    }), "\n", createVNode(_components.h2, {
      id: "explosieve-start-met-een-levendige-toekomst",
      children: "Explosieve start met een levendige toekomst"
    }), "\n", createVNode(_components.p, {
      children: "De snelle groei van Fallout als een van de meest gestreamde Amazon TV Originals is te danken aan verschillende factoren. De authenticiteit aan het bronmateriaal, de mix van genres, de cast, de crew en de toegankelijkheid voor zowel fans van de game als nieuwe kijkers hebben allemaal bijgedragen aan het succes. Het feit dat de serie nieuwe elementen toevoegt aan het Fallout universum, zelfs dingen die in de games niet mogelijk waren volgens Todd Howard van Bethesda, draagt bij aan de originaliteit en aantrekkingskracht van de show."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Fallout nog niet het record heeft verbroken van de meest bekeken Prime Video show ooit - dat is momenteel in handen van The Rings of Power - lijkt het met zijn explosieve start en groeiende populariteit een geduchte concurrent te zijn. De bevestiging van een tweede seizoen kort na de release van het eerste onderstreept de geloofwaardigheid en potentie van de serie voor de toekomst."
    }), "\n", createVNode(_components.h2, {
      id: "een-internationaal-succes",
      children: "Een internationaal succes"
    }), "\n", createVNode(_components.p, {
      children: "Met 65 miljoen kijkers in de eerste 16 dagen na de release heeft Fallout een breed internationaal publiek weten te bereiken. Vooral in landen als Brazilië, Frankrijk en het Verenigd Koninkrijk kon de serie rekenen op een sterke aanhang. Het feit dat 60% van de kijkers buiten de VS kwam, opent interessante mogelijkheden voor adverteerders die hun producten willen promoten aan jongere doelgroepen in deze regio’s."
    }), "\n", createVNode(_components.p, {
      children: "Het exacte meetproces van kijkcijfers op streamingdiensten blijft echter vaak een mysterie. Verschillende platforms hanteren diverse methoden om ‘views’ te registreren, wat de vergelijking tussen series bemoeilijkt. Desondanks is het duidelijk dat de populariteit van Fallout heeft geleid tot groen licht voor een tweede seizoen, een teken van het sterke fundament waarop de serie rust."
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

const url = "src/content/nieuws/fallout-is-prime-videos-kijkcijferkanon.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fallout-is-prime-videos-kijkcijferkanon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fallout-is-prime-videos-kijkcijferkanon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
