import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Look voor Daniel Craig's Benoit Blanc in Knives Out 3",
  "date": "2024-06-11T11:44:06.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1718033117.jpg",
  "trailer": "",
  "slug": "nieuwe-look-voor-daniel-craigs-benoit-blanc-in-knives-out-3",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nieuwe-titel-en-intrigerende-cast",
    "text": "Nieuwe titel en intrigerende cast"
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
      children: "De langverwachte film “Wake Up Dead Man: A Knives Out Mystery” is officieel van start gegaan, met regisseur Rian Johnson die onthulde dat de opnames zijn begonnen. Een opvallende verandering die fans niet kunnen ontgaan, is het nieuwe uiterlijk van hoofdrolspeler Daniel Craig als Benoit Blanc."
    }), "\n", createVNode(_components.p, {
      children: "In een recent gepubliceerde foto zien we Craig zoals we hem nog niet eerder hebben gezien in de voorgaande Knives Out films. Zijn kenmerkende korte haar heeft plaatsgemaakt voor een weelderige haardos en hij lijkt ook wat stoppels te hebben laten groeien. Deze transformatie werpt onmiddellijk vragen op over de mogelijke evolutie van Blanc’s personage en wellicht zelfs een geheel nieuwe benadering van de rol."
    }), "\n", createVNode(_components.h2, {
      id: "nieuwe-titel-en-intrigerende-cast",
      children: "Nieuwe titel en intrigerende cast"
    }), "\n", createVNode(_components.p, {
      children: "De titel “Wake Up Dead Man” roept nieuwsgierigheid op en doet vermoeden dat deze derde film mogelijk een andere toon zal aanslaan dan zijn voorgangers. De keuze voor een U2-nummer als titel hint naar mogelijk diepere betekenissen die de film zou kunnen verkennen."
    }), "\n", createVNode(_components.p, {
      children: "Naast Daniel Craig zullen ook enkele bekende gezichten de cast vervoegen, waaronder Kerry Washington, Mila Kunis, Jeremy Renner, Josh O’Connor, Glenn Close en Cailee Spaeny. Deze toevoegingen beloven een intrigerende dynamiek tussen de personages en voorspellen een boeiende filmervaring."
    }), "\n", createVNode(_components.p, {
      children: "De releasedatum van “Wake Up Dead Man: A Knives Out Mystery” staat gepland voor 2025 en zal exclusief te zien zijn op Netflix. Met een geschatte deal van $400 miljoen voor de rechten van de twee sequels, belooft deze filmreeks veel goeds voor fans van het mysteriegenre."
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

const url = "src/content/nieuws/nieuwe-look-voor-daniel-craigs-benoit-blanc-in-knives-out-3.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-look-voor-daniel-craigs-benoit-blanc-in-knives-out-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-look-voor-daniel-craigs-benoit-blanc-in-knives-out-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
