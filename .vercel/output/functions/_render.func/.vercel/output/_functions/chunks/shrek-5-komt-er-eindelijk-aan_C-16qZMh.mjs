import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Shrek 5 komt er eindelijk aan",
  "date": "2024-07-10T14:21:07.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1720558871.jpg",
  "trailer": "",
  "slug": "shrek-5-terugkeer-naar-het-moeras",
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
      children: "Na een lange afwezigheid van 14 jaar kondigt DreamWorks Animation de terugkeer aan van de geliefde “Shrek” franchise met “Shrek 5”. Het vijfde deel van deze iconische serie staat gepland voor release op 1 juli 2026, met de originele sterrencast bestaande uit Mike Myers, Eddie Murphy en Cameron Diaz die allemaal hun rollen opnieuw zullen vervullen."
    }), "\n", createVNode(_components.p, {
      children: "Het eerste “Shrek” filmavontuur betrad het witte doek in mei 2001, gebaseerd op William Steig’s gelijknamige prentenboek. Met Myers als de titulaire oger, Murphy als zijn trouwe vriend Donkey en Diaz als Prinses Fiona, bleek de film zowel commercieel succesvol als invloedrijk. Het won zelfs de allereerste Academy Award voor Beste Animatiefilm tijdens de 74e Oscars in 2002."
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van “Shrek 5” werd vergezeld door een korte teaserclip, waarbij Smash Mouth’s onvergetelijke hit “All Star” de openingscredits van de eerste “Shrek” film begeleidde. De tagline “The All-Star Returns” siert de film, nadat een groot, groen cijfer vijf - met daaromheen Shrek-oren - over het scherm sprong."
    }), "\n", createVNode(_components.p, {
      children: "Na het enorme succes van de originele “Shrek” film volgden drie vervolgfilms: “Shrek 2” in 2004, “Shrek the Third” in 2007 en “Shrek Forever After” in 2010. Naast de films waren er ook diverse videospellen, een Broadway-musical en twee spin-off films rond het personage van Antonio Banderas, Puss in Boots."
    }), "\n", createVNode(_components.p, {
      children: "De speculatie over een vijfde film heeft jarenlang geduurd, met geruchten die zelfs circuleerden dat een film al in 2019 zou verschijnen (wat natuurlijk niet gebeurde). Vorig jaar april kwam het nieuws naar buiten dat gesprekken gaande waren met de originele cast om terug te keren voor “Shrek 5”. En slechts een maand geleden liet Murphy doorschemeren dat ze al begonnen waren met het opnemen van dialogen voor de film, en dat hij zelfs zijn eigen Donkey-film zou krijgen."
    }), "\n", createVNode(_components.p, {
      children: "DreamWorks Animation lijkt klaar te zijn om opnieuw de harten van fans te veroveren met een reis terug naar het moeras. Met een gezelschap van talentvolle acteurs en een rijke geschiedenis van succes achter zich, belooft “Shrek 5” een film te worden die nostalgie combineert met frisse avonturen."
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

const url = "src/content/nieuws/shrek-5-komt-er-eindelijk-aan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/shrek-5-komt-er-eindelijk-aan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/shrek-5-komt-er-eindelijk-aan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
