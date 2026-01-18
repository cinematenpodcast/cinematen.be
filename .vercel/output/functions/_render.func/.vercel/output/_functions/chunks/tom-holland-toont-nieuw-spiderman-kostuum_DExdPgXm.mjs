import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tom Holland toont nieuw Spider-Man kostuum",
  "date": "2025-08-02T14:32:23.056Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754143250.jpg",
  "trailer": "",
  "slug": "tom-holland-toont-nieuw-spiderman-kostuum",
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
      children: "Tom Holland heeft zijn nieuwe Spider-Man kostuum onthuld voor de film\n“Spider-Man: Brand New Day”. Dat deed hij op Spider-Man Dag met een video op\nInstagram. Hij komt het licht in en vraagt: “We ready?” Het kostuum heeft helder\nrood en blauw, met een grotere spin op de borst dan in vorige films."
    }), "\n", createVNode(_components.p, {
      children: "Dit nieuwe ontwerp lijkt sterker op de originele strips dan de kostuums uit\n“Spider-Man: Homecoming” en “Far From Home”. “Brand New Day” wordt de vierde\nSpider-Man film in de Marvel Cinematic Universe (MCU) en verschijnt op 31 juli\n2026."
    }), "\n", createVNode(_components.p, {
      children: "In “Spider-Man: No Way Home” onthulde Mysterio (Jake Gyllenhaal) Peters\nidentiteit. Peter liet Doctor Strange (Benedict Cumberbatch) daarop een spreuk\nuitspreken waardoor iedereen vergat dat hij Spider-Man is. Dit bracht andere\nSpider-Mannen en schurken uit verschillende dimensies naar de aarde. Peter\nofferde uiteindelijk zijn identiteit op, waardoor zelfs vrienden en familie hem\nniet meer herkenden."
    }), "\n", createVNode(_components.p, {
      children: "“Brand New Day” is gebaseerd op een stripverhaal waarin Peter een deal sluit om\nzijn identiteit geheim te houden en tante May terug tot leven te brengen, ten\nkoste van zijn huwelijk met Mary Jane."
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Destin Daniel Cretton brengt bekende gezichten terug:"
    }), "\n", createVNode(_components.p, {
      children: "Het is onduidelijk hoe vaak we Zendaya (MJ) en Jacob Batalon (Ned) zullen zien,\naangezien hun herinneringen aan Peter gewist zijn."
    }), "\n", createVNode(_components.p, {
      children: "Sinds de eerste film met Tobey Maguire in 2002 evolueert Spider-Man steeds\nverder. Dit nieuwe kostuum is weer een volgende stap. Wij kunnen ons opmaken\nvoor een nieuw hoofdstuk in het leven van Peter Parker."
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

const url = "src/content/nieuws/tom-holland-toont-nieuw-spiderman-kostuum.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-holland-toont-nieuw-spiderman-kostuum.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-holland-toont-nieuw-spiderman-kostuum.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
