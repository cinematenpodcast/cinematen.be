import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De Jetsons komen terug, maar deze keer met echte acteurs!",
  "date": "2025-10-15T20:10:30.376Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1760557420.jpg",
  "trailer": "",
  "slug": "de-jetsons-komen-terug-maar-deze-keer-met-echte-acteurs",
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
      children: "Warner Bros. plant een nieuwe film over The Jetsons, de klassieke tekenfilmserie\nover een familie in de toekomst. In tegenstelling tot het origineel wordt dit\ngeen animatiefilm, maar een live-action versie met echte acteurs."
    }), "\n", createVNode(_components.p, {
      children: "Colin Trevorrow, bekend van Jurassic World, wordt gevraagd om regie te voeren en\nzou mogelijk ook meehelpen met het schrijven van het script. Voor de rol van\nGeorge Jetson wordt Jim Carrey overwogen, de bekende acteur uit films zoals Ace\nVentura en Sonic the Hedgehog."
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment is er nog weinig concreet. De plannen zijn pas net in ontwikkeling\nen voor de andere familieleden - moeder Jane, kinderen Judy en Elroy, de robot\nRosie en hond Astro - zijn nog geen acteurs gekozen. De niet-menselijke\npersonages zullen waarschijnlijk met CGI worden gemaakt."
    }), "\n", createVNode(_components.p, {
      children: "Dit is niet de eerste keer dat er geprobeerd wordt The Jetsons nieuw leven in te\nblazen. In 2012 kondigde Kanye West zijn betrokkenheid bij een Jetsons-film aan,\nmaar dat project ging niet door. In 2017 probeerde ABC een live-action serie te\nmaken, maar ook die is nooit van de grond gekomen."
    }), "\n", createVNode(_components.p, {
      children: "We vinden Colin Trevorrow een logische keuze gezien zijn succes met Jurassic\nWorld, waar hij bewees een klassieke franchise succesvol te kunnen vernieuwen.\nJim Carrey brengt met zijn trackrecord van films die wereldwijd meer dan 6\nmiljard dollar opbrachten de nodige sterrenkracht."
    }), "\n", createVNode(_components.p, {
      children: "The Jetsons begon als televisieserie die van 1962 tot 1963 liep, met in totaal\n75 afleveringen. Sindsdien zijn de personages iconisch gebleven en verschenen ze\nin games, strips en een animatiefilm uit 1990. We zijn benieuwd of Warner Bros.\nerin slaagt deze futuristische familie opnieuw relevant te maken voor een nieuw\npubliek."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen releasedatum bekend voor wanneer we de film in de bioscoop kunnen\nverwachten."
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

const url = "src/content/nieuws/de-jetsons-komen-terug-maar-deze-keer-met-echte-acteurs.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-jetsons-komen-terug-maar-deze-keer-met-echte-acteurs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-jetsons-komen-terug-maar-deze-keer-met-echte-acteurs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
