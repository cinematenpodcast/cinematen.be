import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marvel Zombies komt naar Disney+ en het ziet er gruwelijk goed uit!",
  "date": "2025-09-02T18:20:38.702Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1756835481.jpg",
  "trailer": "",
  "slug": "marvel-zombies-komt-naar-disney-en-het-ziet-er-gruwelijk-goed-uit",
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
      children: "Binnenkort kunnen we op Disney+ de nieuwe tekenfilmserie “Marvel Zombies”\nbekijken. De serie speelt zich af in een wereld waar bijna alle superhelden en\nslechteriken in zombies zijn veranderd. Slechts een handvol personages is nog\nnormaal en moet zien te overleven in deze chaotische realiteit."
    }), "\n", createVNode(_components.p, {
      children: "We zullen bekende gezichten tegenkomen zoals Shang-Chi, Ms. Marvel en een\nbijzondere versie van Blade. Normaal gesproken is Blade een vampierjager, maar\nin deze serie ziet hij eruit alsof hij elementen van Moon Knight heeft\novergenomen – hij draagt een wit pak en zijn ogen gloeien wit. Best opvallend,\nzeker omdat de echte live-action Blade-film al jaren wordt uitgesteld."
    }), "\n", createVNode(_components.p, {
      children: "De zombies in deze serie zijn niet zomaar de standaard variant. Het zijn\nsuperhelden mét superkrachten die nu ook nog eens zombies zijn, wat alles een\npak gevaarlijker maakt. In de strips zijn deze zombies zelfs zo sterk geworden\ndat ze Galactus hebben opgegeten, een van de machtigste wezens in het\nMarvel-universum."
    }), "\n", createVNode(_components.p, {
      children: "Als dit soort zombies ooit in het hoofduniversum van Marvel (aarde-616) zouden\nterechtkomen, zou dat catastrofale gevolgen hebben. Meestal zorgen de schrijvers\ner gelukkig voor dat de zombies uiteindelijk verliezen, al duikt er af en toe\neentje op in andere universums – zoals Zombie Deadpool die ooit in het\nhoofduniversum verscheen."
    }), "\n", createVNode(_components.p, {
      children: "“Marvel Zombies” is een vervolg op een aflevering van “What If…?” waar de\nzombie-uitbraak voor het eerst werd getoond. In die aflevering waren onder\nandere Doctor Strange en andere helden al omgetoverd tot zombies. De nieuwe\nserie volgt het verhaal van de weinige overlevenden die nog niet zijn\ngeïnfecteerd."
    }), "\n", createVNode(_components.p, {
      children: "We kunnen de serie bekijken vanaf 24 september 2025 op Disney+. Het wordt een\naparte reeks naast de andere Marvel-shows. Voor ons die van zombies en\nsuperhelden houden, belooft dit een bloedstollende combo te worden."
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

const url = "src/content/nieuws/marvel-zombies-komt-naar-disney-en-het-ziet-er-gruwelijk-goed-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-zombies-komt-naar-disney-en-het-ziet-er-gruwelijk-goed-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-zombies-komt-naar-disney-en-het-ziet-er-gruwelijk-goed-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
