import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Duik samen met ons het verleden in op Netflix",
  "date": "2025-12-17T22:15:44.892Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1766007623.jpg",
  "trailer": "",
  "slug": "duik-samen-met-ons-het-verleden-in-op-netflix",
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
      children: "Soms willen we even ontsnappen aan het heden. Gelukkig staat Netflix vol met\nseries en films die ons terugvoeren naar andere tijden, van het oude Rome tot\nhet Engeland van de jaren 1810. Wij hebben een aantal titels voor je op een rij\ngezet."
    }), "\n", createVNode(_components.p, {
      children: "Voor ons fans van ‘Downton Abbey’ is er goed nieuws. De eerste film uit 2019\nstaat al op Netflix en het vervolg, ‘Downton Abbey: A New Era’ uit 2022, komt er\nop 24 december bij. Zo kunnen we beide films achter elkaar kijken. In de tweede\nfilm komt een filmploeg naar het landhuis en reist een deel van de familie naar\nZuid-Frankrijk voor een familiegeheim. Julian Fellowes, de bedenker van de\nserie, schreef het script. Een derde film, ‘Downton Abbey: The Grand Finale’,\nbracht afgelopen jaar het hele verhaal na vijftien jaar tot een einde."
    }), "\n", createVNode(_components.p, {
      children: "Naast Downton Abbey heeft Netflix nog een hoop andere historische parels. ‘The\nCrown’ volgt het leven van koningin Elizabeth II, gespeeld door drie\nverschillende actrices. Voor romantiek duiken we in ‘Bridgerton’, de kleurrijke\nserie over de rijke familie Bridgerton in het Engeland van de jaren 1810. Het\nvierde seizoen komt er binnenkort aan."
    }), "\n", createVNode(_components.p, {
      children: "Wie van echte geschiedenis houdt, kan terecht bij ‘All the Light We Cannot See’,\nover een blind Frans meisje en een Duitse jongen aan het eind van de Tweede\nWereldoorlog. ‘Call the Midwife’ toont het leven van vroedvrouwen in het\nnaoorlogse Londen en is al elf seizoenen sterk. ‘The Empress’ gaat over het\nleven van keizerin Sisi van Oostenrijk in de 19e eeuw."
    }), "\n", createVNode(_components.p, {
      children: "Voor spanning en avontuur zijn er series zoals ‘Outlander’, waar Claire vanuit\n1945 terugreist naar het Schotland van 1743. ‘Peaky Blinders’ volgt de beruchte\nShelby bende in het Birmingham van na de Eerste Wereldoorlog. En ‘Vikings:\nValhalla’ neemt ons mee naar het leven van de Vikingen, meer dan duizend jaar\ngeleden."
    }), "\n", createVNode(_components.p, {
      children: "Ook zijn er boeiende verhalen gebaseerd op waargebeurde feiten. ‘The Law\nAccording to Lidia Poët’ vertelt het verhaal van de eerste vrouwelijke advocaat\nin Italië. ‘Self Made’ gaat over Madam C.J. Walker, de eerste vrouwelijke zwarte\nmiljonair. ‘The Andy Warhol Diaries’ duikt via zijn dagboek in de kunstscene van\nNew York in de jaren zeventig en tachtig."
    }), "\n", createVNode(_components.p, {
      children: "Andere titels die de moeite waard zijn, zijn ‘House of Guinness’ over de strijd\nom de beroemde brouwerij, de Koreaanse serie ‘The King’s Affection’ over een\ngeheime tweeling, en de docu-serie ‘Roman Empire’ over keizers zoals Julius\nCaesar."
    }), "\n", createVNode(_components.p, {
      children: "Of we nu houden van romantiek, avontuur of echte geschiedenis, met deze titels\nvervelen we ons geen moment."
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

const url = "src/content/nieuws/duik-samen-met-ons-het-verleden-in-op-netflix.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/duik-samen-met-ons-het-verleden-in-op-netflix.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/duik-samen-met-ons-het-verleden-in-op-netflix.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
