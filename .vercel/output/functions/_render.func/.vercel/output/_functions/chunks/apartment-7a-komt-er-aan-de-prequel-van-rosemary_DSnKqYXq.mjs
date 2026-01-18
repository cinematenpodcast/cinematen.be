import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Apartment 7A komt er aan, de prequel van Rosemarys Baby",
  "date": "2024-04-28T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714148551.jpg",
  "trailer": "",
  "slug": "het-ontstaan-van-apartment-7a---een-opkomende-prequel-van-rosemarys-baby",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "huiveringwekkende-start-van-het-halloweenseizoen",
    "text": "Huiveringwekkende start van het Halloweenseizoen"
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
      children: "In de duistere wereld van horrorcinema heeft “Rosemary’s Baby” uit 1968 een blijvende impact achtergelaten, met fans die nog steeds geobsedeerd zijn door dit culturele fenomeen. Deze obsessie heeft geleid tot een langverwachte prequelfilm genaamd “Apartment 7A.” Eindelijk is er nu een releasedatum in zicht voor deze film die het verhaal vertelt van het beruchte appartement voordat Rosemary Woodhouse (gespeeld door Mia Farrow) haar intrek nam en de vreselijke gebeurtenissen meemaakte."
    }), "\n", createVNode(_components.p, {
      children: "Het idee voor “Apartment 7A” dook voor het eerst op in 2022 en belooft het verhaal te onthullen van het appartement voordat Rosemary er woonde en de afschuwelijke gebeurtenissen beleefde die we kennen. Dit oude, griezelig ogende gebouw aan Central Park West, oorspronkelijk beschreven in auteur Ira Levin’s bestseller, behoort tot de iconische horrorlocaties zoals het Overlook Hotel uit “The Shining” en de Nostromo uit “Alien.”"
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk heeft Paramount+ aangekondigd dat de veelbelovende actrice Julia Garner zich zal aansluiten bij regisseur Natalie Erika James voor “Apartment 7A.” Deze psychologische thriller, die wordt omschreven als een “volledig nieuwe originele film,” speelt zich af in het New York van 1965 en introduceert kijkers aan de gebeurtenissen die plaatsvonden in dat noodlottige appartement voor “Rosemary’s Baby.”"
    }), "\n", createVNode(_components.h2, {
      id: "huiveringwekkende-start-van-het-halloweenseizoen",
      children: "Huiveringwekkende start van het Halloweenseizoen"
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat “Apartment 7A” een definitieve interpretatie zal bieden van wat leidde tot de huiveringwekkende gebeurtenissen die culmineerden in een jonge, zwangere bruid die vermoedt dat haar sektarische buren kwaadaardige plannen hebben voor haar ongeboren kind. Naast Julia Garner zullen ook Dianne Wiest, Jim Sturgess, en andere getalenteerde acteurs deel uitmaken van deze prequel, die is gebaseerd op een script van Natalie Erika James, samen met Christian White en Skylar James."
    }), "\n", createVNode(_components.p, {
      children: "Paramount+ Executive Vice President Jeff Grossman noemde “Apartment 7A” de perfecte manier om het Halloween-seizoen te starten, lovenswaardig voor de kille en slimme toevoeging aan het genre."
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

const url = "src/content/nieuws/apartment-7a-komt-er-aan-de-prequel-van-rosemary.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apartment-7a-komt-er-aan-de-prequel-van-rosemary.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apartment-7a-komt-er-aan-de-prequel-van-rosemary.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
