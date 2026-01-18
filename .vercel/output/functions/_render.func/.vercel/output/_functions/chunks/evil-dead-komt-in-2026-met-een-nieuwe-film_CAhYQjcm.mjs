import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Evil Dead komt in 2026 met een nieuwe film",
  "date": "2024-12-09T22:11:00.118Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1733776829.jpg",
  "trailer": "",
  "slug": "evil-dead-komt-in-2026-met-een-nieuwe-film",
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
      children: "We hebben spannend nieuws over de “Evil Dead” films gekregen! Na een lange\nstilte van tien jaar was de franchise weer terug in de bioscoop dankzij de film\n“Evil Dead Rise,” die in 2023 uitkwam. Veel mensen vonden deze nieuwe film\ngeweldig, en daardoor hebben de makers besloten om meer films te maken over\n“Evil Dead.”"
    }), "\n", createVNode(_components.p, {
      children: "Het lijkt erop dat de makers van de film heel druk zijn en al werken aan\nmeerdere nieuwe films. We kunnen in 2026 weer een nieuwe film verwachten, maar\ner is nog niet veel bekend over de verhalen of de personages die we zullen zien.\nWat we wel al hebben meegekregen is de titel: “Evil Dead Burn”. De film is een\nspin-off en zal dus hoogstwaarschijnlijk het verhaal van Evil Dead Rise niet\nverder zetten."
    }), "\n", createVNode(_components.p, {
      children: "Omdat ook de filmwereld steeds verandert, betekent het ook dat we nieuwe ideeën\nen nieuwe acteurs kunnen zien. Laat ons hopen dat de nieuwe films ons blijven\nverrassen en vermaken, net zoals de eerdere films dat deden. Dus, als je een fan\nbent van “Evil Dead,” kan je alvast beginnen aftellen naar 2026 voor meer\nbloederige deadites pret!"
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

const url = "src/content/nieuws/evil-dead-komt-in-2026-met-een-nieuwe-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/evil-dead-komt-in-2026-met-een-nieuwe-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/evil-dead-komt-in-2026-met-een-nieuwe-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
