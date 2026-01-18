import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Opzij Boomers! Hier zijn (misschien) de Young Avengers van het MCU",
  "date": "2024-11-21T18:04:35.174Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1732207768.jpg",
  "trailer": "",
  "slug": "opzij-boomers-hier-zijn-misschien-de-young-avengers-van-het-mcu",
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
      children: "Het lijkt erop dat de Young Avengers binnenkort hun kans krijgen in de Marvel\nCinematic Universe (MCU). Sinds de gebeurtenissen in de films en series van\nMarvel zien we steeds meer jongere superhelden opduiken. Dit laat ons denken dat\neen team van jonge helden zoals de Young Avengers misschien werkelijkheid gaat\nworden."
    }), "\n", createVNode(_components.p, {
      children: "In de film “The Marvels” zagen we Kamala Khan, ook wel bekend als Ms. Marvel,\ndie Kate Bishop, de nieuwe Hawkeye, uitnodigt om bij een team te komen. Recent\nis er een clip opgedoken waarin Cassandra Lang, Riri Williams, en America Chavez\nsamen te zien zijn in een show op een Disney-Cruise."
    }), "\n", createVNode(_components.p, {
      children: "Bovendien zijn er aanwijzingen dat andere jonge helden zoals Wiccan en Speed ook\nsnel kunnen verschijnen in de MCU. Wiccan is al gezien in de show “Agatha All\nAlong”."
    }), "\n", createVNode(_components.p, {
      children: "Binnenkort verschijnt de serie “Ironheart,” waarin Riri Williams haar eigen\navontuur beleeft. Deze serie kan ons misschien meer vertellen over de rol die\nzij en andere jonge helden gaan spelen in de toekomst van het MCU."
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

const url = "src/content/nieuws/opzij-boomers-hier-zijn-misschien-de-young-avengers-van-het-mcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/opzij-boomers-hier-zijn-misschien-de-young-avengers-van-het-mcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/opzij-boomers-hier-zijn-misschien-de-young-avengers-van-het-mcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
