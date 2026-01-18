import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Daniel Day-Lewis keert terug in de krachtige familiefilm Anemone",
  "date": "2025-10-05T14:46:33.720Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1759536998.jpg",
  "trailer": "",
  "slug": "daniel-daylewis-keert-terug-in-de-krachtige-familiefilm-anemone",
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
      children: "Anemone is een nieuw project waar wij als filmfans al lang naar uitkijken. De\nfilm verscheen op 3 oktober 2025 en betekent het regiedebuut van Ronan\nDay-Lewis. Het scenario werd geschreven door Ronan en zijn vader Daniel\nDay-Lewis, die na zijn pensioen in 2017 nu terugkeert voor een hoofdrol. Sean\nBean, Samuel Bottomley, Samantha Morton en Safia Oakley-Green completeren de\ncast in deze 121 minuten durende film."
    }), "\n", createVNode(_components.p, {
      children: "We volgen de familie Stoker, een gezin dat kampt met diepgewortelde problemen.\nJem Stoker (Sean Bean) is getrouwd met Nessa (Samantha Morton) en samen zorgen\nze voor tiener Brian (Samuel Bottomley), die eigenlijk de biologische zoon is\nvan Jems broer Ray (Daniel Day-Lewis). Ray verliet Nessa toen ze zwanger was en\ntrok zich terug in de wildernis, zonder contact met zijn familie."
    }), "\n", createVNode(_components.p, {
      children: "De situatie escaleert wanneer Brian betrokken raakt bij een bijna-dodelijk\ngevecht en deserteert uit het leger. Jem reist naar Rays afgezonderde woning in\nde hoop dat zijn broer eindelijk zijn zoon wil ontmoeten. Ray verzet zich\naanvankelijk, maar na dagen van gesprekken onthult hij een militair geheim dat\nzijn vertrek verklaart."
    }), "\n", createVNode(_components.p, {
      children: "Daniel Day-Lewis bewijst opnieuw zijn acteerkunst in lange monologen waarin Ray\nzijn verleden ontvouwt. Sean Beans Jem reageert vooral non-verbaal, waarbij zijn\ngezichtsuitdrukkingen de emotionele lading perfect overbrengen. In de kernscène\nbiecht Ray op dat hij tijdens het conflict in Ierland een gewonde Ierse jongen\neuthanaseerde, een daad die hem sindsdien achtervolgt."
    }), "\n", createVNode(_components.p, {
      children: "Ook de andere personages dragen bij aan de complexe familiedynamiek. Brian\nworstelt met woede en afwijzing, terwijl Nessa tussen liefde voor haar zoon en\nangst voor zijn gedrag balanceert."
    }), "\n", createVNode(_components.p, {
      children: "Met slechts twee hoofdlocaties - het familiehuis en Rays wildernis - ontvouwt\nzich een steeds gelaagder verhaal over familiegeheimen. De visueel prachtige\nnatuuropnames van Ben Fordesman versterken de emotionele intensiteit. Anemone is\neen serieus drama over vaders en zonen, vol emotie en met sterk taalgebruik dat\nde R-rating rechtvaardigt. De film draait momenteel in de bioscopen."
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

const url = "src/content/nieuws/daniel-daylewis-keert-terug-in-de-krachtige-familiefilm-anemone.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-daylewis-keert-terug-in-de-krachtige-familiefilm-anemone.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-daylewis-keert-terug-in-de-krachtige-familiefilm-anemone.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
