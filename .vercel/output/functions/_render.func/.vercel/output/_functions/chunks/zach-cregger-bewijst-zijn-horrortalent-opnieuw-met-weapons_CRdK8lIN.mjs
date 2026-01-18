import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zach Cregger bewijst zijn horrortalent opnieuw met Weapons",
  "date": "2025-08-12T18:54:54.109Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755019651.jpg",
  "trailer": "",
  "slug": "zach-cregger-bewijst-zijn-horrortalent-opnieuw-met-weapons",
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
      children: "Zach Cregger heeft zich razendsnel opgeworpen als een belangrijke naam in de\nmoderne horrorfilm. Na zijn veelgeprezen debuut “Barbarian” in 2022, komt hij nu\naanzetten met “Weapons”. Deze nieuwe film speelt zich af in een klein stadje\nwaar een hele klas kinderen op mysterieuze wijze verdwijnt, wat de gemeenschap\nin totale verwarring achterlaat."
    }), "\n", createVNode(_components.p, {
      children: "De casting van “Weapons” kende flink wat obstakels. Pedro Pascal, bekend van\n“The Mandalorian”, moest zijn hoofdrol om persoonlijke redenen afzeggen. Dit\nleidde tot een domino-effect waarbij de oorspronkelijke cast - inclusief Brian\nTyree Henry en Renate Reinsve - volledig moest worden vervangen. Alleen Austin\nAbrams (“Euphoria”) hield stand door zijn rol actief te verdedigen bij Cregger."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig werd er een sterke nieuwe cast samengesteld. Josh Brolin (“No Country\nfor Old Men”) nam Pascal’s rol over als Archer, de vader van een verdwenen kind.\nJulia Garner speelt Justine, de lerares van de vermiste klas. Het scenario van\n“Weapons” was overigens zo overtuigend dat er een heuse studio-oorlog uitbrak\nvoordat Warner Bros. de rechten verwierf."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn blij dat de film nu in de bioscoop draait en al flink wat positieve\nreacties oogst. Cregger’s groei in Hollywood zet duidelijk door, zeker nu hij\nook een “Resident Evil”-reboot mag regisseren - wederom met Abrams in de cast."
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

const url = "src/content/nieuws/zach-cregger-bewijst-zijn-horrortalent-opnieuw-met-weapons.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zach-cregger-bewijst-zijn-horrortalent-opnieuw-met-weapons.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zach-cregger-bewijst-zijn-horrortalent-opnieuw-met-weapons.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
