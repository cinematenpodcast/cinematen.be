import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Pitt is terug en alles is veranderd",
  "date": "2026-01-09T13:08:16.257Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1767905384.jpg",
  "trailer": "",
  "slug": "the-pitt-is-terug-en-alles-is-veranderd",
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
      children: "Het tweede seizoen van The Pitt is van start gegaan en wij hebben de eerste\naflevering gezien. Het speelt zich af op 4 juli, precies tien maanden na de\nverschrikkelijke schietpartij bij Pittfest uit het eerste seizoen."
    }), "\n", createVNode(_components.p, {
      children: "We zien dokter Michael Robby Robinavitch terug, rijdend op zijn motor naar het\nziekenhuis. Opvallend: hij draagt geen helm, wat vreemd is voor een dokter die\nde risico’s maar al te goed kent. In het ziekenhuis heeft hij een nieuw ritueel;\nhij kijkt niet meer naar een foto van zijn oude baas, maar naar een plaquette\nvoor de slachtoffers van de aanslag."
    }), "\n", createVNode(_components.p, {
      children: "Er is veel veranderd. Robby gaat binnenkort drie maanden met verlof en wordt\nvervangen door een nieuwe dokter, Baran Al-Hashimi. Zij is het tegenovergestelde\nvan Robby: een regelvaste planner, terwijl hij op gevoel werkt. Hun samenwerking\nverloopt stroef, zeker omdat zij al begint voordat hij er is."
    }), "\n", createVNode(_components.p, {
      children: "Ook zien we nieuwe gezichten, zoals student-artsen Joy Kwon en James Ogilvie.\nVerpleegster Dana Evans is terug en neemt de nieuwe verpleegkundige Emma Nolan\nonder haar hoede. Een grote terugkeer is die van dokter Frank Langdon, na tien\nmaanden afkicken van zijn verslaving. Zijn comeback is emotioneel, want Robby is\nnog steeds boos op hem en stuurt hem meteen naar de triage, tot groot verdriet\nvan Langdon."
    }), "\n", createVNode(_components.p, {
      children: "De studenten van vorig seizoen zijn flink gegroeid. Victoria Javadi is zekerder\ngeworden en Dennis Whitaker is nu eerstejaars arts. Zijn ontwikkeling blijkt\nwanneer een patiënt overlijdt en hij de nieuwe studenten het ritueel van een\nmoment stilte uitlegt, iets wat hij in seizoen één nog verstoorde. Robby kijkt\ntoe en is stilletjes trots. Whitaker lijkt nu zijn nieuwe favoriet, een plek die\neerst voor Langdon was bestemd."
    }), "\n", createVNode(_components.p, {
      children: "Naast de werkvloer zijn er persoonlijke problemen. Dokter Samira Mohan heeft\nissues met haar bemoeizuchtige moeder, en ook student Victoria heeft spanning\nmet haar moeder, dokter Shamsi, die haar carrière probeert te sturen."
    }), "\n", createVNode(_components.p, {
      children: "De aflevering zet ook nieuwe mysteries op. Er wordt een baby gevonden in een\ntoilet, een dove patiënt en een mogelijk mishandeld kind duiken op, en de\nbekende dronken man Louie Cloverfield is terug. Dokter Al-Hashimi ontdekt aan\nhet eind iets belangrijks over de baby, maar wat dat is, blijft nog een raadsel."
    }), "\n", createVNode(_components.p, {
      children: "De sfeer is anders dan in de allereerste aflevering. Het voelt als thuiskomen\nbij oude bekenden, maar de spanning is er nog steeds. Wij maken ons wel wat\nzorgen om Robby, die zonder helm rijdt, en zijn moeizame relatie met de nieuwe\ndokter. De terugkeer van Langdon is pijnlijk en de groei van Whitaker is mooi om\nte zien. Deze eerste aflevering beantwoordt enkele vragen, maar opent meteen\nweer een hoop nieuwe."
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

const url = "src/content/nieuws/the-pitt-is-terug-en-alles-is-veranderd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-pitt-is-terug-en-alles-is-veranderd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-pitt-is-terug-en-alles-is-veranderd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
