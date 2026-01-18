import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hoe lang zal Max in coma blijven in Stranger Things 5?",
  "date": "2024-08-09T12:48:52.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1723137378.jpg",
  "trailer": "",
  "slug": "stranger-things-seizoen-5-wat-kunnen-we-verwachten",
  "tags": ["tv"]
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
      children: "Na vier succesvolle seizoenen van de hitserie “Stranger Things,” zijn fans over de hele wereld reikhalzend uit aan het kijken naar wat het vijfde en laatste seizoen te bieden heeft. Met teasers en behind-the-scenes beelden die langzaam worden vrijgegeven, groeit de anticipatie rondom de terugkeer van geliefde personages en de onthulling van nieuwe verhaallijnen."
    }), "\n", createVNode(_components.p, {
      children: "Een van de centrale figuren waar fans zich zorgen over maken is Max Mayfield, vertolkt door Sadie Sink. Na de gebeurtenissen aan het einde van het vierde seizoen, waarin Max in een coma belandt na een intense confrontatie met Vecna, blijft haar lot onzeker. Terwijl setfoto’s de actrice en haar co-ster Caleb McLaughlin laten zien, suggereren de posts van showrunner Ross Duffer dat Max nog steeds in een comateuze toestand verkeert."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl eerdere speculaties suggereerden dat Max mogelijk vroeg in het seizoen ontwaakt, lijkt het er nu op dat kijkers geduld moeten uitoefenen en pas later in het verhaal antwoorden zullen krijgen over haar situatie. De spanning neemt toe naarmate fans zich afvragen of Max ooit zal herstellen of mogelijk een tragisch lot zal ondergaan in de strijd tegen het kwaad dat Hawkins bedreigt."
    }), "\n", createVNode(_components.p, {
      children: "In de aanloop naar het spannende slotseizoen van “Stranger Things” beloven de makers een reeks verrassingen en onthullingen die de kijkers op het puntje van hun stoel zullen houden. Met de schijnbaar onvoorspelbare aard van de Upside Down en de voortdurende dreiging van Vecna, staat ons een epische confrontatie te wachten die het lot van onze geliefde personages zal bepalen."
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

const url = "src/content/nieuws/hoe-lang-zal-max-in-coma-blijven-in-stranger-things-5.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hoe-lang-zal-max-in-coma-blijven-in-stranger-things-5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hoe-lang-zal-max-in-coma-blijven-in-stranger-things-5.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
