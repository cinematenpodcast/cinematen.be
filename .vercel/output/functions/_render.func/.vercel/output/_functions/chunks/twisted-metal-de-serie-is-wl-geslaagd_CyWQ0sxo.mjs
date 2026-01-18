import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Twisted Metal De Serie is wél geslaagd",
  "date": "2025-07-09T15:44:21.498Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1752075367.jpg",
  "trailer": "SFMG1gBtOtI",
  "slug": "twisted-metal-de-serie-is-wl-geslaagd",
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
      children: "Twisted Metal is een iconische game-reeks die in de jaren ‘90 op de PlayStation\nverscheen. Wij fans werden meteen getrokken door de intense voertuiggevechten en\nunieke personages met hun eigen wapens en speciale voertuigen. De originele\nformule sloeg aan, maar de reboot uit 2012 op PlayStation 3 stelde teleur. De\nonline modus zat vol technische problemen, waardoor multiplayer amper speelbaar\nwas. Nog verwarrender: personages werden losgekoppeld van hun iconische\nvoertuigen, waardoor iedereen zomaar elk karretje kon gebruiken. De\nverhaallijnen voelden vlak en misten de magie van de klassieke games. De\ngameplay sloot ook niet meer aan bij onze verwachtingen, vooral omdat het\ngewelddadige genre tegen 2012 veel meer concurrentie kreeg."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig doet de Twisted Metal-serie op Peacock het veel beter. Het eerste\nseizoen speelt zich af in een post-apocalyptische wereld en volgt John Doe\n(Anthony Mackie) en Quiet (Stephanie Beatriz) die meedoen aan een dodelijk\ntoernooi. De combinatie van explosieve actie en humor werkt verfrissend. Nu het\ntweede seizoen eraan komt, staat het toernooi centraal – net zoals in de games.\nCalypso, de mysterieuze organisator, belooft de winnaar een wens, maar wij weten\nuit ervaring dat er altijd een verraderlijke twist volgt."
    }), "\n", createVNode(_components.p, {
      children: "Herkenbare personages en voertuigen uit de games komen terug, wat zorgt voor een\nfijne nostalgische knipoog. Wij kijken uit naar de nieuwe afleveringen, of je nu\neen game-fan bent of nieuw bent in deze chaotische wereld. Twisted Metal bewijst\nzo dat het van games naar tv kan springen zonder zijn ziel te verliezen."
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

const url = "src/content/nieuws/twisted-metal-de-serie-is-wl-geslaagd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/twisted-metal-de-serie-is-wl-geslaagd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/twisted-metal-de-serie-is-wl-geslaagd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
