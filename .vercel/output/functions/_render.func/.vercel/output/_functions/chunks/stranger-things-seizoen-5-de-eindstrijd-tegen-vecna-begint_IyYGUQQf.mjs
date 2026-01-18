import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stranger Things Seizoen 5 De Eindstrijd Tegen Vecna Begint",
  "date": "2025-06-01T07:52:28.790Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/2025-06-01T07-49-44-945Z.jpg",
  "trailer": "QlYrNC_1Xmk",
  "slug": "stranger-things-seizoen-5-de-eindstrijd-tegen-vecna-begint",
  "tags": ["TV"]
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
      children: "Netflix heeft aangekondigd dat het vijfde en laatste seizoen van Stranger Things\nop 26 november 2025 begint. Het seizoen wordt verdeeld in drie volumes: Volume 1\nbevat vier afleveringen, Volume 2 drie afleveringen en de finale is een speciale\naflevering. Alle afleveringen verschijnen wereldwijd om 17:00 uur Pacific Time."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich af in het najaar van 1987, meer dan een jaar na de\ngebeurtenissen van seizoen vier. Hawkins, Indiana, is zwaar getekend door\neerdere gebeurtenissen. Onze helden willen Vecna vinden en verslaan, maar hij is\nverdwenen en niemand kent zijn plannen. De situatie verslechtert omdat de\nregering Hawkins onder militaire quarantaine plaatst en naar Eleven op zoek\ngaat."
    }), "\n", createVNode(_components.p, {
      children: "De makers Matt en Ross Duffer hebben eerder een document geschreven over de\nmythe van het ‘Upside Down’ en beloven dat we in dit laatste seizoen antwoorden\nkrijgen op onze vragen over deze duistere krachten. De officiële samenvatting\nonthult dat de ontvoering van Will Byers belangrijk blijft, vooral met de\njaarlijkse herdenking van zijn verdwijning. De spanning loopt op en de sfeer in\nHawkins wordt dreigender. Alle hoofdpersonen moeten samenkomen voor de laatste\nstrijd tegen Vecna en het opkomende duister."
    }), "\n", createVNode(_components.p, {
      children: "De cast keert grotendeels terug met Millie Bobby Brown als Eleven, Finn Wolfhard\nals Mike en David Harbour als Jim Hopper. Nieuwe gezichten zijn Linda Hamilton\nen Nell Fisher. We kijken uit naar de terugkeer van deze geliefde personages."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe afleveringen verschijnen ruim drie jaar na de finale van seizoen vier.\nVolume 1 komt uit op 26 november 2025, Volume 2 op 25 december 2025 en de finale\nop 31 december 2025. We hebben dus niet veel tijd om te wachten tussen de\nvolumes."
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

const url = "src/content/nieuws/stranger-things-seizoen-5-de-eindstrijd-tegen-vecna-begint.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-seizoen-5-de-eindstrijd-tegen-vecna-begint.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-seizoen-5-de-eindstrijd-tegen-vecna-begint.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
