import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bill Skarsgård keert terug als Pennywise in de Welcome To Derry serie",
  "date": "2024-05-31T13:42:25.000Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/intro-1717114926.jpg",
  "trailer": "",
  "slug": "het-griezelige-universum-van-pennywise-een-blik-op-de-aankomende-it-prequel-serie",
  "tags": ["tv", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pennywise-the-dancing-clown",
    "text": "Pennywise the dancing clown"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Bill Skarsgård keert terug naar zijn iconische rol als Pennywise in de aankomende prequel serie “Welcome to Derry,” gepland voor release op het Max streaming platform. De acteur zal niet alleen schitteren als de angstaanjagende clown, maar zal ook dienen als uitvoerend producent van de serie. Samen met regisseur Andy Muschietti en producenten Barbara Muschietti en Jason Fuchs is Skarsgård van plan om het publiek op het kleine scherm de stuipen op het lijf te jagen."
    }), "\n", createVNode(_components.h2, {
      id: "pennywise-the-dancing-clown",
      children: "Pennywise the dancing clown"
    }), "\n", createVNode(_components.p, {
      children: "De rol van Pennywise bracht Skarsgård voor het eerst tot leven in de succesvolle filmadaptaties van Stephen King’s klassieke horrorroman in 2017 en 2019. Beide films waren enorme kaskrakers, waarbij het eerste deel zelfs de best verdienende horrorfilm aller tijden werd. Hoewel Skarsgård aanvankelijk aangaf niet betrokken te zijn bij de aankomende prequel, heeft hij zich toch opnieuw verbonden om zijn rol voort te zetten."
    }), "\n", createVNode(_components.p, {
      children: "Details over de plot van de prequel serie zijn schaars, zelfs de werktitel “Welcome to Derry” staat nog ter discussie. Met negen afleveringen, waarvan Andy Muschietti er vier zal regisseren, zal de wereld van Stephen King’s “IT” universum verder worden uitgebreid. Naast Skarsgård fungeren Andy Muschietti, Barbara Muschietti, Jason Fuchs, Brad Caleb Kane, David Coatsworth, Shelley Meals, Roy Lee en Dan Lin als uitvoerend producenten van de serie."
    }), "\n", createVNode(_components.p, {
      children: "De serie was oorspronkelijk gepland voor release deze Halloween, maar HBO en Max voorzitter/CEO Casey Bloys heeft aangegeven dat 2025 nu waarschijnlijker is. Ondanks het gebrek aan exacte plotdetails wordt verwacht dat de serie zich zal afspelen in de jaren ‘60 en zich zal richten op Pennywise’s achtergrond voorafgaand aan de gebeurtenissen in IT, met elementen uit het boek die niet in de film zijn verwerkt."
    }), "\n", createVNode(_components.p, {
      children: "Eerdere aangekondigde castleden voor de show zijn Taylour Paige, Jovan Adepo, Chris Chalk, James Remar en Madeleine Stowe, met een terugkerende rol voor laatstgenoemde. Het belooft een duik te nemen in de diepten van King’s roman, met alle emotie, humor, menselijkheid en horror die daarbij horen."
    }), "\n", createVNode(_components.p, {
      children: "King zelf reageerde enthousiast op de aankondiging van de serie in 2023, terwijl Andy en Barbara Muschietti teasden dat de show de “diepten van Steve’s roman” zou verkennen. Productie begon oorspronkelijk in mei vorig jaar, maar werd onderbroken door stakingen, wat resulteerde in een uitstel van de oorspronkelijke 2024 releasedatum naar 2025."
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

const url = "src/content/nieuws/bill-skarsg%C3%A5rd-keert-terug-als-pennywise-in-de-welcome-to-derry-serie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bill-skarsgård-keert-terug-als-pennywise-in-de-welcome-to-derry-serie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bill-skarsgård-keert-terug-als-pennywise-in-de-welcome-to-derry-serie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
