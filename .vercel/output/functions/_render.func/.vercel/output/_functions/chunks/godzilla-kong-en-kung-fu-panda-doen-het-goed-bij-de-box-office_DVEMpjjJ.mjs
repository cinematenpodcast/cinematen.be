import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Godzilla, Kong en Kung Fu Panda doen het goed bij de box office",
  "date": "2024-04-30T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714427752.jpg",
  "trailer": "",
  "slug": "het-cinemalandschap-van-gigantische-monsters-tot-geliefde-pandas",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "godzilla-x-kong-een-monsterlijk-succes",
    "text": "Godzilla x Kong: Een monsterlijk succes"
  }, {
    "depth": 2,
    "slug": "een-triomf-voor-kung-fu-panda-4",
    "text": "Een triomf voor Kung Fu Panda 4"
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
      children: "In de wereld van recente bioscoopreleases hebben zowel gigantische monsters als geliefde animatiefiguren zichzelf op de voorgrond geplaatst. De film “Godzilla x Kong: The New Empire” en “Kung Fu Panda 4” hebben beiden significante mijlpalen bereikt in termen van kassaopbrengsten en publieksacceptatie."
    }), "\n", createVNode(_components.h2, {
      id: "godzilla-x-kong-een-monsterlijk-succes",
      children: "Godzilla x Kong: Een monsterlijk succes"
    }), "\n", createVNode(_components.p, {
      children: "Regisseur Adam Wingard’s monsterlijke spektakel “Godzilla x Kong: The New Empire” heeft zijn kracht laten zien door een indrukwekkende $521,3 miljoen aan wereldwijde opbrengsten te genereren. De film, een voortzetting van de succesvolle MonsterVerse-franchise dat begon in 2014, heeft bewezen dat langzaam maar gestaag de weg naar succes kan zijn. Ondanks een budget van $135 miljoen heeft de film aanzienlijke winsten behaald en lijkt het pad vrij te maken voor meer toekomstige teamups tussen Godzilla en Kong."
    }), "\n", createVNode(_components.h2, {
      id: "een-triomf-voor-kung-fu-panda-4",
      children: "Een triomf voor Kung Fu Panda 4"
    }), "\n", createVNode(_components.p, {
      children: "Aan de andere kant van het spectrum heeft “Kung Fu Panda 4” met een opening van $58,3 miljoen in eigen land, de US, toch de harten van het publiek veroverd of allesinds de centen. Met een productiebudget van $85 miljoen heeft de film bewezen dat succes niet altijd afhankelijk is van een hoog prijskaartje."
    }), "\n", createVNode(_components.p, {
      children: "Deze twee films vormen slechts een deel van de bredere context van de huidige box office, waarbij het succes van “Dune: Part Two” en de veelbelovende vooruitzichten van aankomende releases tonen dat het publiek nog steeds klaar staat om terug te keren naar de bioscoop."
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

const url = "src/content/nieuws/godzilla-kong-en-kung-fu-panda-doen-het-goed-bij-de-box-office.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/godzilla-kong-en-kung-fu-panda-doen-het-goed-bij-de-box-office.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/godzilla-kong-en-kung-fu-panda-doen-het-goed-bij-de-box-office.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
