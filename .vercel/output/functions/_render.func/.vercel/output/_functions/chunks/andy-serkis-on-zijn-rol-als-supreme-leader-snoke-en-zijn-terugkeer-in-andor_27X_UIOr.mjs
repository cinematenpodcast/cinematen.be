import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Andy Serkis over zijn rol als Supreme Leader Snoke en zijn terugkeer in Andor",
  "date": "2023-12-19T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/Andor-Andy-Serkis-110822_1-622f83452e454d868e81d1282b726d32.jpg",
  "trailer": "",
  "slug": "andy-serkis-over-zijn-rol-als-supreme-leader-snoke-en-zijn-terugkeer-in-andor",
  "draft": false,
  "tags": ["tv", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-teleurstellend-verhaal",
    "text": "Een teleurstellend verhaal"
  }, {
    "depth": 2,
    "slug": "een-kans-op-herstel",
    "text": "Een kans op herstel"
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
      children: "Andy Serkis staat bekend om zijn meesterlijke motion capture performances, waaronder zijn iconische rol als Gollum in de “Lord of the Rings” trilogie. In de Star Wars sequel trilogie vertolkte Serkis de rol van Supreme Leader Snoke, een personage waar veel fans teleurgesteld over waren. Maar nu heeft Serkis de kans gekregen op een comeback in de Disney+ serie Andor, waarin hij de rol van de meedogenloze gevangenisbewaker Kino Loy speelt."
    }), "\n", createVNode(_components.h2, {
      id: "een-teleurstellend-verhaal",
      children: "Een teleurstellend verhaal"
    }), "\n", createVNode(_components.p, {
      children: "Veel fans beschouwen de sequel trilogie als het zwarte schaap van de Star Wars Saga, met inconsistente verhaallijnen en personages die niet goed werden ontvangen. Een van de meest teleurstellende aspecten was het verhaal van Supreme Leader Snoke, gespeeld door de wereldberoemde acteur Andy Serkis."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal van Snoke bleef onafgewerkt, waardoor er veel speculatie ontstond over zijn achtergrond, oorsprong en identiteit. Serkis onthulde in een interview dat hij in het duister werd gehouden over de achtergrond van Snoke en dat hij nooit te horen kreeg dat het personage oorspronkelijk gecreëerd was door Palpatine, zoals later onthuld werd in Rise of Skywalker."
    }), "\n", createVNode(_components.h2, {
      id: "een-kans-op-herstel",
      children: "Een kans op herstel"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Serkis enigszins gefrustreerd was met waar het personage Snoke naartoe ging, kreeg hij enkele jaren later een nieuwe kans van Lucasfilm. Deze keer om een koude, gewetensvolle gevangenisbewaker genaamd Kino Loy te spelen in de Disney+ mini-serie, Andor. Serkis nam uiteindelijk deze rol aan en zijn optreden werd zeer geprezen."
    }), "\n", createVNode(_components.p, {
      children: "Hij had echter niet gemakkelijk besloten om terug te keren. Serkis was zich bewust van de verwarring rondom Snoke en de theorieën die daarbij horen. Hij was bang dat mensen zouden speculeren over een link tussen de personages. Maar showrunner Tony Gilroy wist hem te overtuigen om de rol van Kino Loy te accepteren."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Andor een compleet losstaand project is dat geen verband houdt met de sequel trilogie en Supreme Leader Snoke, zag Serkis dit als een kans op persoonlijk herstel. Hij voelde dat hij als Snoke, een personage gemaakt met behulp van CGI, niet zijn fysieke zelf kon laten zien in Star Wars. Nu had hij de mogelijkheid om dat wel te doen."
    }), "\n", createVNode(_components.p, {
      children: "Het verleden heeft laten zien dat Serkis uitblinkt in het vertolken van personages via motion capture, maar Loy bood hem de kans om zijn echte ik te laten zien in de Star Wars wereld. Hij vermeldde echter dat hij geen problemen heeft gehad met enige CGI-personages die hij in het verleden heeft gespeeld."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Serkis op dit punt in zijn carrière geen boost meer nodig heeft, is er momenteel sprake van een tweede seizoen van Andor en zou het publiek graag zien dat Serkis terugkeert als Kino Loy. Wat er met Loy gebeurt na de ontsnapping uit de gevangenis in het eerste seizoen blijft vooralsnog een mysterie, maar de fans kunnen niet wachten om te ontdekken waar het verhaal hen mee naartoe neemt."
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

const url = "src/content/nieuws/andy-serkis-on-zijn-rol-als-supreme-leader-snoke-en-zijn-terugkeer-in-andor.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andy-serkis-on-zijn-rol-als-supreme-leader-snoke-en-zijn-terugkeer-in-andor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andy-serkis-on-zijn-rol-als-supreme-leader-snoke-en-zijn-terugkeer-in-andor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
