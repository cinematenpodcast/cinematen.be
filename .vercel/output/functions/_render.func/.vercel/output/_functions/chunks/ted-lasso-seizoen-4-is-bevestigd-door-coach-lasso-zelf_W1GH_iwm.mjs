import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ted Lasso Seizoen 4 is bevestigd door Coach Lasso zelf",
  "date": "2025-03-14T14:23:44.225Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1741960037.jpg",
  "trailer": "",
  "slug": "ted-lasso-seizoen-4-is-bevestigd-door-coach-lasso-zelf",
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
      children: "Ted Lasso, de populaire serie op Apple TV+, krijgt een vierde seizoen. Jason\nSudeikis, de acteur die Ted Lasso speelt en ook mede-bedenker van de show is,\nmaakte de aankondiging tijdens de New Heights podcast van NFL-spelers Travis en\nJason Kelce. Tijdens deze aflevering zei Sudeikis dat ze momenteel aan het\nschrijven zijn voor seizoen 4."
    }), "\n", createVNode(_components.p, {
      children: "In dit nieuwe seizoen gaat Ted Lasso een vrouwenvoetbalteam coachen. Sudeikis\nvertelde dat de personages in seizoen 4 zullen leren om “te denken voor ze\nspringen”. Dit betekent dat ze vertrouwen moeten hebben, ongeacht waar ze\nlanden."
    }), "\n", createVNode(_components.p, {
      children: "Apple TV+ bevestigde het nieuws over seizoen 4 en liet weten dat ze blij zijn\nmet de samenwerking met Sudeikis en het creatieve team achter de show. Matt\nCherniss, de programmadirecteur van Apple TV+, zei dat de serie veel fans over\nde hele wereld heeft en dat deze vreugde en vriendelijkheid verspreidt."
    }), "\n", createVNode(_components.p, {
      children: "Seizoen 3 van Ted Lasso eindigde met een fijne conclusie voor veel personages,\nmaar het verhaal lijkt verder te gaan. Aan het eind van dat seizoen benadrukte\neen personage, Keeley, het belang van een vrouwenvoetbalteam, wat de basis legde\nvoor de nieuwe richting van het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "Of andere favoriete personages zoals Keeley, Rebecca en Roy Kent zullen\nterugkeren in seizoen 4, is nog niet duidelijk."
    }), "\n", createVNode(_components.p, {
      children: "Wij wachten af hoe de verhalen van de geliefde personages zich zullen\nontwikkelen in deze nieuwe omgeving. Seizoen 1 tot 3 van Ted Lasso zijn\nmomenteel beschikbaar om te streamen op Apple TV+."
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

const url = "src/content/nieuws/ted-lasso-seizoen-4-is-bevestigd-door-coach-lasso-zelf.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ted-lasso-seizoen-4-is-bevestigd-door-coach-lasso-zelf.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ted-lasso-seizoen-4-is-bevestigd-door-coach-lasso-zelf.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
