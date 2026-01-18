import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Aquaman and the Lost Kingdom teleurstellend bij de box office",
  "date": "2023-12-24T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1703351806.jpg",
  "trailer": "FV3bqvOHRQo",
  "slug": "aquaman-and-the-lost-kingdom-teleurstellend-bij-de-box-office",
  "draft": false,
  "tags": ["film", "comics"]
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
      children: "Het langverwachte vervolg op de DC Universe-film “Aquaman,” genaamd “Aquaman and the Lost Kingdom” is helaas niet met een knal van start gegaan aan de box office. De film, die het laatste deel markeert voordat de DC Universe wordt gereboot door de nieuwe leiding van DC Studios, James Gunn en Peter Safran, lijkt in lijn te liggen met andere recente teleurstellingen zoals “The Flash,” “Blue Beetle,” en “Shazam! Fury of the Gods.” “Aquaman and the Lost Kingdom” heeft in de donderdag-seizoenvoorstellingen slechts $4,5 miljoen opgebracht aan de binnenlandse box office. Deze cijfers vallen lager uit dan verwacht en duiden op opnieuw een mogelijke tegenvaller voor het DC Universe. Prognoses wijzen op een opbrengst van slechts $35 miljoen tot $40 miljoen tijdens het vierdaagse kerstweekend, wat aanzienlijk lager is dan de openingsopbrengst van de originele “Aquaman”-film."
    }), "\n", createVNode(_components.p, {
      children: "Ter vergelijking: de originele “Aquaman”-film behaalde in de donderdag-previews $9 miljoen. Voor de DC-films van dit jaar, “The Flash,” “Blue Beetle,” en “Shazam: Fury of the Gods,” waren de donderdag-previewcijfers respectievelijk $9,7 miljoen, $3,3 miljoen en $3,4 miljoen. De meest recente release van Marvel, “The Marvels,” behaalde $6,6 miljoen aan donderdag-previews voor een opening van $47 miljoen."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de undersea-held Aquaman terugkeert in deze nieuwe film en samenwerkt met zijn hervormde broer Orm (gespeeld door Patrick Wilson) om de schurkachtige Black Manta (gespeeld door Yahya Abdul-Mateen II) te verslaan, kunnen fans van Jason Momoa’s Aquaman-vertolking teleurgesteld zijn. Het is namelijk bevestigd dat hij niet zal verschijnen in de nieuwe richting die James Gunn en Peter Safran nemen met het DC Universe. Vanaf “Superman: Legacy” in 2025 zal de hele DC Comics-wereld worden vernieuwd met een nieuwe cast van personages. Tijdens hetzelfde weekend zijn er diverse andere films uitgebracht, waaronder de geanimeerde film “Migration” van Universal en Illumination, de romantische komedie “Anyone but You” met Sydney Sweeney en Glen Powell van Sony, en de sportbiografie “The Iron Claw” met Zac Efron en Jeremy Allen White van A24. Daarnaast is er ook de film “Wonka,” met Timothée Chalamet in de hoofdrol, die in het tweede weekend naar verwachting $21 miljoen tot $23 miljoen zal opbrengen."
    }), "\n", createVNode(_components.p, {
      children: "Helaas lijkt “Aquaman and the Lost Kingdom” een teleurstellende start te hebben gemaakt aan de box office. De donderdag-previews en projecties voor het openingsweekend vallen lager uit dan gehoopt. Toch blijft de vraag of de nieuwe koers die wordt ingeslagen in het DC Universe onder leiding van James Gunn en Peter Safran succesvol zal zijn. Met de concurrentie van andere films tijdens het openingsweekend zal het interessant zijn om te zien hoe ”"
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

const url = "src/content/nieuws/aquaman-en-het-verloren-koninkrijk-teleurstellend-in-premi%C3%A8re.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/aquaman-en-het-verloren-koninkrijk-teleurstellend-in-première.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/aquaman-en-het-verloren-koninkrijk-teleurstellend-in-première.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
