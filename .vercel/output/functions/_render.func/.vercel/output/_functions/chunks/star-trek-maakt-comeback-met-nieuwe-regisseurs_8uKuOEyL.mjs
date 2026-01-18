import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Trek maakt comeback met nieuwe regisseurs",
  "date": "2025-11-14T19:38:20.132Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1763147941.jpg",
  "trailer": "",
  "slug": "star-trek-maakt-comeback-met-nieuwe-regisseurs",
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
      children: "Er komt eindelijk een nieuwe Star Trek film! Het is bijna tien jaar geleden\nsinds Star Trek Beyond in 2016 in de bioscoop verscheen. John Francis Daley en\nJonathan Goldstein nemen de regie, het script en de productie voor hun rekening."
    }), "\n", createVNode(_components.p, {
      children: "We kennen Daley en Goldstein van hun eerdere werk zoals Dungeons & Dragons:\nHonor Among Thieves, Game Night en hun bijdrage aan Spider-Man: Homecoming. Al\ndeze projecten kregen positieve reacties van zowel kijkers als recensenten."
    }), "\n", createVNode(_components.p, {
      children: "Deze Star Trek film wordt een compleet nieuwe start met een origineel verhaal\ndat niet verbonden is met eerdere films of series. We zullen nieuwe personages\nzien, want de bekende acteurs zoals Chris Pine, Zoe Saldana en Zachary Quinto\nkeren niet terug."
    }), "\n", createVNode(_components.p, {
      children: "Paramount wil sterk inzetten op nieuwe Star Trek films sinds de overname door\nSkydance. Eerdere plannen voor films met Chris Hemsworth of Quentin Tarantino\nzijn nooit doorgegaan, maar nu lijkt het serieus te worden."
    }), "\n", createVNode(_components.p, {
      children: "Daley en Goldstein werken vaak samen onder hun bedrijf GoldDay. Momenteel werken\nze ook aan Mayday met Ryan Reynolds en Kenneth Branagh, die volgend jaar op\nApple TV+ verschijnt."
    }), "\n", createVNode(_components.p, {
      children: "Beide regisseurs begonnen hun carrière als acteurs - Daley was te zien in Freaks\nand Geeks - waarna ze de overstap maakten naar het schrijven en regisseren van\nfilms zoals Vacation, Game Night en Dungeons & Dragons: Honor Among Thieves."
    }), "\n", createVNode(_components.p, {
      children: "We zijn benieuwd naar het verhaal van de nieuwe Star Trek film, maar de makers\nhouden de details nog geheim. Wat we wel weten is dat het een volledig nieuwe\nstart wordt met nieuwe acteurs en avonturen."
    }), "\n", createVNode(_components.p, {
      children: "Het filmproces duurt altijd even, dus we moeten nog wat geduld hebben voordat we\nde film in de bioscoop kunnen zien. Maar na bijna tien jaar wachten, kijken we\nenorm uit naar deze frisse aanpak van het Star Trek universum."
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

const url = "src/content/nieuws/star-trek-maakt-comeback-met-nieuwe-regisseurs.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-maakt-comeback-met-nieuwe-regisseurs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-maakt-comeback-met-nieuwe-regisseurs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
