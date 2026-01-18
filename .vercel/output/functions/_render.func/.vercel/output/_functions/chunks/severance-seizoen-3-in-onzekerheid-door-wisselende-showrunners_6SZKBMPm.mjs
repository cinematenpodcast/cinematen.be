import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Severance seizoen 3 in onzekerheid door wisselende showrunners",
  "date": "2025-08-18T19:44:23.821Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1755543507.jpg",
  "trailer": "",
  "slug": "severance-seizoen-3-in-onzekerheid-door-wisselende-showrunners",
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
      children: "De populaire Apple TV+ serie ‘Severance’ krijgt te maken met grote\nverschuivingen achter de schermen. In de show volgen we werknemers van het\nmysterieuze Lumon Industries, die via een “severance”-procedure hun werk- en\nprivéherinneren gescheiden houden. Op het einde van seizoen één ontdekt\nhoofdpersonage Mark Scout (Adam Scott) dat zijn overleden vrouw Gemma (Dichen\nLachman) eigenlijk de wellnessadviseur is op de verdieping waar de procedure\nwordt toegepast. Zijn pogingen om haar te bevrijden vormen de kern van het\nvervolg."
    }), "\n", createVNode(_components.p, {
      children: "Met de seizoenfinale van het tweede seizoen in zicht op 21 maart, zijn er al\ngeruchten over een derde seizoen. Chris Black en Mark J. Friedman, die de eerste\ntwee seizoenen leidden, keren echter niet terug. Dit zorgt bij ons voor vragen\nover de toekomst van de serie. Mary Laws en Eli Jorne nemen het stokje over,\nbekend van series zoals ‘Succession’ en ‘The Walking Dead’."
    }), "\n", createVNode(_components.p, {
      children: "Wij uitten onze bezorgdheid op sociale media, vooral omdat er al drie jaar zat\ntussen seizoen één en twee. Sommigen onder ons vrezen dat het nieuwe seizoen\nhierdoor nog langer op zich zal laten wachten. We vragen ons af waarom deze\nbeslissingen niet eerder genomen zijn en waarom het schrijfproces niet sneller\nopgestart werd."
    }), "\n", createVNode(_components.p, {
      children: "Toch blijft de kern van het creatieve team intact. Dan Erickson blijft\nshowrunner en Ben Stiller is nog steeds uitvoerend producent en regisseur. Deze\ncontinuïteit stelt ons enigszins gerust. Seizoen twee trok bovendien veel\nkijkers en staat bij Apple TV+ in de top, wat de kans op een derde seizoen\nvergroot ondanks de veranderingen."
    }), "\n", createVNode(_components.p, {
      children: "Nu we naar de finale van seizoen twee toeleven, blijven we in spanning afwachten\nhoe de nieuwe showrunners de toekomst van Severance vormgeven. We hopen op snel\nnieuws over seizoen drie na de finale van 21 maart."
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

const url = "src/content/nieuws/severance-seizoen-3-in-onzekerheid-door-wisselende-showrunners.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/severance-seizoen-3-in-onzekerheid-door-wisselende-showrunners.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/severance-seizoen-3-in-onzekerheid-door-wisselende-showrunners.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
