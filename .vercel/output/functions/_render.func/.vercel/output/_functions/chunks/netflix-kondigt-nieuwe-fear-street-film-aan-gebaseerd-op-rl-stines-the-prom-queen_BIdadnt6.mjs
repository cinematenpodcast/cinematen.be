import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Netflix kondigt nieuwe Fear Street-film aan gebaseerd op R.L. Stine's The Prom Queen",
  "date": "2024-01-14T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1705251147.jpg",
  "trailer": "",
  "slug": "netflix-kondigt-nieuwe-fear-street-film-aan-gebaseerd-op-rl-stines-the-prom-queen",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-dodelijke-prom-night-in-shadyside",
    "text": "Een dodelijke prom night in Shadyside"
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
      children: "Netflix blijft het populaire Fear Street-universum van R.L. Stine verkennen met een nieuwe film. Na het succes van de “Cheerleaders”-trilogie in 2021 kondigde Stine zelf aan dat er een nieuwe standalone film wordt ontwikkeld gebaseerd op zijn boek “The Prom Queen”. Fans van Stine en de Fear Street-serie werden verheugd door deze aankondiging, die hij deelde via X/Twitter."
    }), "\n", createVNode(_components.h2, {
      id: "een-dodelijke-prom-night-in-shadyside",
      children: "Een dodelijke prom night in Shadyside"
    }), "\n", createVNode(_components.p, {
      children: "“The Prom Queen” uit 1992 speelt zich opnieuw af in het toepasselijk genaamde stadje Shadyside. De plaatselijke middelbare school bereidt zich voor op het jaarlijkse schoolbal, waarbij vijf kandidaten strijden om de titel van prom queen. Echter, al snel worden de meisjes één voor één vermoord, en het is aan hoofdpersoon Lizzie McVay om de waarheid te achterhalen voordat zijzelf het volgende slachtoffer wordt. Hoewel details over de cast en regisseur nog niet bekend zijn, werd eerder gemeld dat Chloe Okuno (bekend van “Watcher” en “Slut”) betrokken zou zijn bij de regie van deze Fear Street-film."
    }), "\n", createVNode(_components.p, {
      children: "De vorige “Fear Street”-trilogie, bestaande uit “Fear Street Part One: 1994,” “Fear Street Part Two: 1978,” en “Fear Street Part Three: 1666,” werd met veel lof ontvangen. Deze films werden geregisseerd door Leigh Janiak en werden in juli 2021 gedurende drie opeenvolgende weken op Netflix uitgebracht. Ze volgden een groep tieners in Shadyside, Ohio, die geconfronteerd worden met angstaanjagende gebeurtenissen die hun stad teisteren. Hoewel “The Prom Queen” een nieuwe cast van personages zal introduceren, is het nog onbekend of Netflix deze film als een op zichzelf staande productie beschouwt of als het begin van een nieuwe serie. Gezien het succes van de eerdere films lijkt een vervolgreeks echter onvermijdelijk."
    }), "\n", createVNode(_components.p, {
      children: "“The Prom Queen” is een van de populairste boeken uit de Fear Street-serie. Het boek blinkt uit in duistere spanning en bevat unieke personages die R.L. Stine ooit heeft geschreven. Het neemt de lezer mee in een wereld van middelbare schoolintriges en wreedheden, waarin Stine op meesterlijke wijze de achterbaksheid en wreedheden van tienerjaren weet te belichten. Voor fans van Stephen King’s “Carrie” en liefhebbers van tiener-slashers is dit zeker een aanrader om te lezen én hopelijk binnenkort ook te bekijken op Netflix."
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

const url = "src/content/nieuws/netflix-kondigt-nieuwe-fear-street-film-aan-gebaseerd-op-rl-stines-the-prom-queen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-kondigt-nieuwe-fear-street-film-aan-gebaseerd-op-rl-stines-the-prom-queen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/netflix-kondigt-nieuwe-fear-street-film-aan-gebaseerd-op-rl-stines-the-prom-queen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
