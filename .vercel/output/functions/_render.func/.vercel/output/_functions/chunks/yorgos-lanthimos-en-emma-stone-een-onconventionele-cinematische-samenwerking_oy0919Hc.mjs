import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Yorgos Lanthimos en Emma Stone: Een Onconventionele Cinematische Samenwerking",
  "date": "2024-03-27T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/theres-no-party-like-a-lanthimos-party-1711544748.jpg",
  "trailer": "8fYtuE_ZJ4E",
  "slug": "yorgos-lanthimos-en-emma-stone-een-onconventionele-cinematische-samenwerking",
  "draft": false,
  "tags": ["film", "trailer", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "speciaal-heel-speciaal",
    "text": "Speciaal, heel speciaal"
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
      children: "Het filmuniversum wordt vaak gedomineerd door voorspelbare verhalen en bekende formules, maar af en toe verschijnen er kunstwerken die de conventionele grenzen overschrijden. Eén dergelijke samenwerking die constant verrast en intrigeert, is die tussen regisseur Yorgos Lanthimos en actrice Emma Stone."
    }), "\n", createVNode(_components.h2, {
      id: "speciaal-heel-speciaal",
      children: "Speciaal, heel speciaal"
    }), "\n", createVNode(_components.p, {
      children: "In een tijd waarin Hollywood zich vaak vastklampt aan veilige keuzes, hebben Lanthimos en Stone zich onderscheiden door hun unieke benadering van cinema. Hun nieuwste film “Kinds of Kindness” belooft opnieuw een duik te nemen in het onbekende, met een verhaal dat bestaat uit drie afzonderlijke vertellingen die samenkomen in een aangrijpende mix van emoties en thema’s."
    }), "\n", createVNode(_components.p, {
      children: "Lanthimos, bekend om zijn onconventionele vertelstijl en duistere humor, onthult steeds weer nieuwe lagen van menselijke complexiteit in zijn werk. Stone, die haar veelzijdigheid en diepgang als actrice heeft bewezen, lijkt perfect op haar plaats in de wereld die Lanthimos creëert, waar absurditeit en realiteit naadloos samensmelten."
    }), "\n", createVNode(_components.p, {
      children: "“Kinds of Kindness” belooft een diepgaande verkenning te worden van menselijke interacties, keuzes en de aard van wreedheid. Met een cast die barst van talent, waaronder Willem Dafoe, Margaret Qualley, Jesse Plemons en meer, is de film een verzameling van unieke verhalen die ons dwingen om na te denken over onze eigen moraliteit en empathie."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat Lanthimos en Stone niet bang zijn om het publiek uit te dagen en te confronteren met ongemakkelijke waarheden en vragen. Door hun samenwerking blijven ze de grenzen van cinema verleggen en ons uitnodigen om mee te reizen naar werelden die zowel verontrustend als fascinerend zijn."
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

const url = "src/content/nieuws/yorgos-lanthimos-en-emma-stone-een-onconventionele-cinematische-samenwerking.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/yorgos-lanthimos-en-emma-stone-een-onconventionele-cinematische-samenwerking.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/yorgos-lanthimos-en-emma-stone-een-onconventionele-cinematische-samenwerking.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
