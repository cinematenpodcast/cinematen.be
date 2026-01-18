import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier is de trailer van Francis Ford Coppola 40-jarige passieproject Megalopolis",
  "date": "2024-05-14T16:32:19.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-return-of-francis-ford-coppola-1715685218.jpg",
  "trailer": "RU1QyAYa60g",
  "slug": "francis-ford-coppola-en-zijn-40-jarige-passieproject-megalopolis",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "wtf-is-megalopolis",
    "text": "WTF is Megalopolis?"
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
      children: "Na een decennialange reis vol obstakels en valse starts, is het eindelijk zover. Francis Ford Coppola onthult zijn langverwachte meesterwerk, “Megalopolis.” Dit epische drama, geworteld in de visie van de legendarische regisseur, belooft een verhaal te vertellen dat teruggaat tot de tijd van de making of “Apocalypse Now” in 1978."
    }), "\n", createVNode(_components.h2, {
      id: "wtf-is-megalopolis",
      children: "WTF is Megalopolis?"
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van “Megalopolis” neemt ons mee naar een speculatief Amerika na een vernietigende ramp. In het hart van deze chaos zien we Adam Driver schitteren als Caesar Catalina, een architect met visionaire dromen om een utopische stad te bouwen bovenop de ruïnes van een vervallen metropool, geïnspireerd op New York. Tegenover Catalina staat Giancarlo Esposito, die de rol van de corrupte burgemeester vertolkt, en Nathalie Emmanuel als zijn mondaine dochter."
    }), "\n", createVNode(_components.p, {
      children: "In een wereld van glamourvolle gala’s, psychedelische feesten, protesten en wagenrennen, wordt de grandeur van Coppola’s visie tastbaar. De cast, met namen als Aubrey Plaza, Jason Schwartzman, Shia LaBeouf, Dustin Hoffman en Laurence Fishburne, draagt bij aan de magie van deze cinematografische creatie."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de grootsheid van “Megalopolis” en de indrukwekkende cast, blijft de film nog op zoek naar distributie in aanloop naar de première op 17 mei tijdens het Cannes Film Festival. Na een screening voor potentiële kopers, waaronder Netflix, Universal en Sony, bleef twijfel bestaan over de financiële haalbaarheid, met een distributeur die verklaarde: “Er is gewoon geen manier om deze film te positioneren.”"
    }), "\n", createVNode(_components.p, {
      children: "Deze onzekerheid voedt echter enkel de nieuwsgierigheid van vele Coppola-fans rondom dit 40 jaar lange passieproject. Terwijl de wereld zich opmaakt om kennis te maken met “Megalopolis,” blijft de vraag hangen of deze film de verwachtingen zal overtreffen en een nieuwe mijlpaal zal worden in het oeuvre van Francis Ford Coppola."
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

const url = "src/content/nieuws/hier-is-de-trailer-van-francis-ford-coppola-40-jarige-passieproject-megalopolis.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-van-francis-ford-coppola-40-jarige-passieproject-megalopolis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-van-francis-ford-coppola-40-jarige-passieproject-megalopolis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
