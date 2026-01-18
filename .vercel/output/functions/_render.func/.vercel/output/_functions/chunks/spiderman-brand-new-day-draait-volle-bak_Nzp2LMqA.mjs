import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Spider-Man Brand New Day draait volle bak!",
  "date": "2025-08-07T16:42:49.043Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754584109.jpg",
  "trailer": "",
  "slug": "spiderman-brand-new-day-draait-volle-bak",
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
      children: "De opnames van “Spider-Man: Brand New Day” zijn in Glasgow van start gegaan. Tom\nHolland kruipt opnieuw in het pak van Spider-Man, terwijl Zendaya terugkeert als\nMJ. De film pikt de draad op na “Spider-Man: No Way Home”, waar Peter Parker\nzijn geliefden liet vergeten wie hij werkelijk is. Dit biedt hem een nieuwe\nstart."
    }), "\n", createVNode(_components.p, {
      children: "Setfoto’s en video’s tonen Holland en Zendaya bij het graf van Aunt May. Dit\nlijkt erop te wijzen dat MJ mogelijk haar herinneringen aan Peter terugkrijgt.\nWij zijn benieuwd hoe dit uitpakt. Stuntteams filmden spectaculaire actiescènes\nmet achtervolgingen tussen Spider-Man, de politie en een tank. Geruchten gaan\ndat Jon Bernthal als The Punisher in die tank zit en het opneemt tegen The\nScorpion."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Spider-Man vaak samenwerkt met de Avengers, lijkt hij nu meer op zichzelf\naangewezen. Peter moet zijn weg vinden zonder hulp van oude vrienden. De film\nput inspiratie uit de gelijknamige stripreeks waar Peter een nieuw leven begint,\nmaar dan met nieuwe personages en uitdagingen. Naast Holland en Zendaya spelen\nook Mark Ruffalo (Hulk) en Sadie Sink mee."
    }), "\n", createVNode(_components.p, {
      children: "Destin Daniel Cretton (“Shang-Chi”) regisseert, terwijl Chris McKenna en Erik\nSommers het script schrijven. De film staat gepland voor release op 31 juli\n2026. Wij zijn enthousiast over de eerste beelden en kijken uit naar meer\nupdates over dit nieuwe hoofdstuk in Spider-Mans verhaal."
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

const url = "src/content/nieuws/spiderman-brand-new-day-draait-volle-bak.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spiderman-brand-new-day-draait-volle-bak.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/spiderman-brand-new-day-draait-volle-bak.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
