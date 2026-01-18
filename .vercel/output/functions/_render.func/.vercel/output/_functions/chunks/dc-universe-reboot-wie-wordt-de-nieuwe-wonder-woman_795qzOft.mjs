import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "DC Universe reboot Wie wordt de nieuwe Wonder Woman?",
  "date": "2025-06-11T14:33:00.900Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749651051.jpg",
  "trailer": "",
  "slug": "dc-universe-reboot-wie-wordt-de-nieuwe-wonder-woman",
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
      children: "Wonder Woman is een van ’s werelds populairste superheldinnen. Gal Gadot bracht\nde rol tot leven sinds 2017, maar met de nieuwe DC Universe onder leiding van\nJames Gunn komt er een frisse start. Gal Gadot keert waarschijnlijk niet terug,\nwant de geplande Wonder Woman-film is een reboot, geen vervolg."
    }), "\n", createVNode(_components.p, {
      children: "James Gunn bevestigde al dat er een nieuw Wonder Woman-project komt, maar\ndetails over casting of verhaal bleven tot nu toe geheim. Dat zorgt voor flink\nwat speculatie over wie Diana Prince nu mag vertolken. Wij zien enkele sterke\nkandidaten:"
    }), "\n", createVNode(_components.p, {
      children: "Monica Barbaro, bekend van “Top Gun: Maverick”, heeft bewezen dat ze fysiek\nuitdagende rollen aankan. Haar acteerwerk in “A Complete Unknown” maakt haar een\nserieuze optie. Alexandra Daddario, die Lois Lane al eens insprak voor DC, heeft\nhet iconische uiterlijk en ervaring uit “Percy Jackson” en “The White Lotus”."
    }), "\n", createVNode(_components.p, {
      children: "Ook Katy O’Brian wordt genoemd. Haar achtergrond in vechtsporten en rol in\n“Ant-Man and the Wasp: Quantumania” passen perfect bij de superheldin. Élodie\nYung, die Elektra speelde in “Daredevil”, kan met haar actie-ervaring zeker\npubliek boeien. Adria Arjona uit “Star Wars: Andor” heeft zelfs al met James\nGunn samengewerkt, wat haar kansen vergroot."
    }), "\n", createVNode(_components.p, {
      children: "Andere namen zoals Natasha Liu Bordizzo en Alexandra Shipp blijven ook\nrondzingen. Bordizzo’s eerdere rollen zijn veelbelovend, terwijl Shipp al\nsuperheldenervaring heeft. De keuze voor de nieuwe Wonder Woman wordt cruciaal\nvoor het succes van de vernieuwde DC Universe. Wij kijken uit naar de\naankondiging en de nieuwe richting die James Gunn inslaat."
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

const url = "src/content/nieuws/dc-universe-reboot-wie-wordt-de-nieuwe-wonder-woman.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dc-universe-reboot-wie-wordt-de-nieuwe-wonder-woman.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dc-universe-reboot-wie-wordt-de-nieuwe-wonder-woman.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
