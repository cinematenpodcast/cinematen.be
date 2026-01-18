import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dogma 2 is na 25 jaar eindelijk in de maak!",
  "date": "2025-12-09T22:44:49.710Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1765313558.jpg",
  "trailer": "",
  "slug": "dogma-2-is-na-25-jaar-eindelijk-in-de-maak",
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
      children: "Kevin Smith is bezig met een nieuw deel van zijn film ‘Dogma’. De eerste film\nkwam uit in 1999, en nu, meer dan 25 jaar later, werkt hij aan ‘Dogma 2’. Dit\nnieuws deelde hij onlangs op een festival."
    }), "\n", createVNode(_components.p, {
      children: "Lange tijd kon Smith geen vervolg maken omdat de rechten bij de oude\nfilmmaatschappij Miramax lagen, met Harvey Weinstein aan het hoofd. Maar nu\nheeft Kevin Smith de rechten terug, waardoor hij vrij is om te doen wat hij wil.\nHij brengt de originele film meteen opnieuw uit in een scherpe 4K-versie en voor\nhet eerst ook op streamingdiensten."
    }), "\n", createVNode(_components.p, {
      children: "Het script voor ‘Dogma 2’ is nog in de maak, maar Smith heeft al ideeën voor de\nacteurs. Hij wil Matt Damon en Ben Affleck terug, die in de eerste film\nspeelden. Smith grapt dat ze het aan hem verplicht zijn omdat hij hen hielp met\n‘Good Will Hunting’ lang geleden. Zonder hen maakt hij de sequel niet."
    }), "\n", createVNode(_components.p, {
      children: "Ook wil Smith een nieuwe acteur voor een groot deel: Austin Butler als de\nDuivel. Butler is nu heel bekend door zijn rol als Elvis Presley en in ‘Dune:\nPart Two’. Smith werkte eerder met hem in ‘Yoga Hosers’. De Duivel in de film\nwordt een soort grunge rocker, en Smith denkt dat Butler dat goed kan."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film ‘Dogma’ gaat over twee engelen die uit de hemel zijn gestuurd en\neen truc vinden om terug te gaan, maar als ze dat doen, gaat alles op aarde\nkapot. Bethany moet dat stoppen. De film had sterren als Chris Rock, Salma Hayek\nen Alanis Morissette als God. Hoewel sommigen boos waren omdat ze de film\nrespectloos vonden, was hij populair en verdiende hij goed."
    }), "\n", createVNode(_components.p, {
      children: "Smith heeft grote plannen: niet alleen een tweede film, maar misschien zelfs\nmeer delen of een televisieserie. Hij is blij dat hij nu vrij is om te doen wat\nhij wil. Alle oude acteurs kunnen weer meedoen. Smith grapt dat sommigen van ons\nboos zullen zijn en denken dat hij de film kapotmaakt, maar hij vindt dat\ngrappig en heeft een goed idee voor het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "We kunnen binnenkort meer nieuws verwachten. Eerst moet het script af zijn en de\nacteurs tekenen, maar Kevin Smith is er zeker van: hij gaat ‘Dogma 2’ maken met\noude en nieuwe sterren."
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

const url = "src/content/nieuws/dogma-2-is-na-25-jaar-eindelijk-in-de-maak.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dogma-2-is-na-25-jaar-eindelijk-in-de-maak.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dogma-2-is-na-25-jaar-eindelijk-in-de-maak.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
