import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adil en Bilall maken een vlaamse film over Sanda Dia",
  "date": "2025-02-20T11:49:03.885Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/Adil_%26_Bilall.jpg",
  "trailer": "",
  "slug": "adil-en-bilall-maken-een-vlaamse-film-over-sanda-dia",
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
      children: "Regisseurs Adil El Arbi en Bilall Fallah werken aan een nieuwe film over het\nverhaal van Sanda Dia, een student die in 2018 overleed na een gevaarlijke\nstudentendoop van de vereniging Reuzegom. De film wordt gemaakt in samenwerking\nmet het Brusselse productiehuis Komoko."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van Sanda Dia is gebaseerd op twee belangrijke boeken. Het eerste\nboek is geschreven door zijn vader, Ousmane Dia, met de titel “Ze hebben mijn\nzoon vermoord”. Het tweede boek is “De doop die leidde tot de dood” van\njournalist Pieter Huyberechts. Beide boeken vertellen over de tragische\ngebeurtenis en de schok die het in België veroorzaakte."
    }), "\n", createVNode(_components.p, {
      children: "Adil en Bilall, die eerder al succesvolle films maakten zoals Patser, Patsers en\nBad Boys 3 & 4, zeggen dat ze erg onder de indruk zijn van de kracht en moed van\nSanda’s vader. Ze beschrijven de film als een liefdesbrief van Papis Dia aan\nzijn zoon. De regisseurs hebben al langer de wens om dit verhaal te vertellen."
    }), "\n", createVNode(_components.p, {
      children: "Voor de film wordt het scenario geschreven door Raf Njotea. Hij is bekend van de\nserie ‘Dertigers’. Het productiehuis Komoko heeft als doel om gedurfde en\nmaatschappelijk relevante films te maken. De dood van Sanda Dia heeft een groot\ngesprek op gang gebracht in België over racisme, rechtvaardigheid en\nverantwoordelijkheid. Dus dat valt wel mooi in dit lijstje."
    }), "\n", createVNode(_components.p, {
      children: "De regisseurs zijn zich bewust van de belangrijkheid van het verhaal. Ze willen\ndat de film de verschillende kanten van deze zaak toont. Dit project bevindt\nzich nog in een vroeg stadium. De opnames en de releasedatum zijn nog niet\nbekend. Er zijn al wel ideeën voor de cast, met mogelijke bekende acteurs zoals\nMatthias Schoenaerts en Omar Sy."
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

const url = "src/content/nieuws/adil-en-bilall-maken-een-vlaamse-film-over-sanda-dia.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adil-en-bilall-maken-een-vlaamse-film-over-sanda-dia.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adil-en-bilall-maken-een-vlaamse-film-over-sanda-dia.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
