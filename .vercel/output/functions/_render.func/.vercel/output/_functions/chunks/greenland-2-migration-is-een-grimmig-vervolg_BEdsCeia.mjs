import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Greenland 2 Migration is een grimmig vervolg",
  "date": "2026-01-08T15:27:12.867Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767881987.jpg",
  "trailer": "",
  "slug": "greenland-2-migration-is-een-grimmig-vervolg",
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
      children: "Greenland 2: Migration is het vervolg op de film Greenland uit 2020. We volgen\nopnieuw de familie Garrity, die in de eerste film een komeetinslag overleefde in\neen bunker op Groenland. Vijf jaar later is de wereld verwoest. De lucht is\nvergiftigd en er zijn nog steeds restanten van de komeet die neerdalen, samen\nmet hevige stormen en aardbevingen."
    }), "\n", createVNode(_components.p, {
      children: "De familie woont nog steeds in de bunker met andere overlevenden. Nathan is nu\neen tiener en wil naar buiten, terwijl zijn vader John (Gerard Butler) de\ngevaren vreest. Wanneer een storm de bunker vernielt, moeten ze op drift. Samen\nmet anderen beginnen ze aan een gevaarlijke reis naar een krater in Frankrijk\nwaar schone lucht zou zijn."
    }), "\n", createVNode(_components.p, {
      children: "Onderweg moeten ze door een kapot landschap, over wankele bruggen en\ntouwconstructies. Ze worden bedreigd door gewelddadige groepen, maar ontmoeten\nook hulpvaardige mensen. Helaas overleven niet alle reisgenoten de ontberingen."
    }), "\n", createVNode(_components.p, {
      children: "Deze film verschilt van de eerste, die draaide om de dreiging van de inslag.\nMigration gaat over overleven in een post-apocalyptische wereld. Het is een\nsombere film zonder veel lichtheid, waarin angst en verdriet centraal staan."
    }), "\n", createVNode(_components.p, {
      children: "Gerard Butler en Morena Baccarin keren terug als John en Allison. Nathan wordt\nnu gespeeld door Roman Griffin Davis. Regisseur Ric Roman Waugh gebruikt vaak\neen wijde camera, waardoor wij de actie soms moeilijk kunnen volgen."
    }), "\n", createVNode(_components.p, {
      children: "Het thema migratie is actueel: de familie is op zoek naar een veilig thuis, net\nals velen in de realiteit. De film duurt 98 minuten en bevat naast actie ook\nstille momenten. Hoewel de dreiging minder acuut is dan in deel één, gaat het om\ndoorzettingsvermogen en hoop. Het toont aan dat er zelfs in duistere tijden\ngoedheid bestaat."
    }), "\n", createVNode(_components.p, {
      children: "Greenland 2: Migration komt op 9 januari 2026 in de bioscoop. De eerste film\nverscheen tijdens de coronapandemie en werd vooral online bekeken, maar dit\nvervolg gaat eerst naar de bioscoop."
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

const url = "src/content/nieuws/greenland-2-migration-is-een-grimmig-vervolg.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/greenland-2-migration-is-een-grimmig-vervolg.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/greenland-2-migration-is-een-grimmig-vervolg.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
