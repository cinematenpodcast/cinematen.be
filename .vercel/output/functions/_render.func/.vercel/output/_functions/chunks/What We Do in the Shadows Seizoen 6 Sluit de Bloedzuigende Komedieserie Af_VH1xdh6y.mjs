import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "What We Do in the Shadows Seizoen 6 zal de serie afsluiten",
  "date": "2023-12-20T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1703021786.jpg",
  "trailer": "",
  "slug": "what-we-do-in-the-shadows-seizoen-6-zal-de-serie-afsluiten",
  "draft": false,
  "tags": ["tv"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "De populaire bovennatuurlijke horror-komedie mockumentary-serie “What We Do in the Shadows” nadert zijn einde, waarbij de bevestiging van het zesde seizoen tevens de aankondiging is van het laatste. De serie, voortgekomen uit een cultfilm met dezelfde naam, is bekend om zijn excentrieke en vaak bloederige humor en volgt een huishouden van vampiers en hun assistent in het moderne Staten Island."
    }), "\n", createVNode(_components.p, {
      children: "De serie is een creatie van Jemaine Clement, met Taika Waititi als uitvoerend producent. Met dit laatste seizoen nemen we afscheid van de geliefde personages Nandor (Kayvan Novak), Laszlo (Matt Berry), Nadja (Natasia Demetriou), de energie-vampier Colin Robinson (Mark Proksch) en Guillermo (Harvey Guillén), Nandor’s assistent. Kenmerkend voor de serie zijn bizarre plotwendingen, zoals Colin die een babyversie van zichzelf baart en Laszlo die mens-dier-hybriden creëert."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de unieke charme en populariteit van de show, is het misschien tijd voor een waardig einde. Zoals de serie zelf illustreert, is het soms beter om op het hoogtepunt te stoppen dan te lang door te gaan."
    }), "\n", createVNode(_components.p, {
      children: "De productie van het laatste seizoen werd vertraagd door de industrie-wijde stilstand in de Amerikaanse film- en tv-industrie, veroorzaakt door de stakingen in Hollywood. Desondanks staan de opnames voor het zesde seizoen gepland om in januari 2024 te beginnen, met de release later dat jaar op Disney+."
    }), "\n", createVNode(_components.p, {
      children: "Fans kunnen zich troosten met de gedachte dat er nog een seizoen van “What We Do in the Shadows” te wachten staat, vol met de kenmerkende vreemde en bloederige avonturen van Nandor, Guillermo en de rest, voordat de serie definitief afsluit."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://cinematen.be/posts/what-we-do-in-the-shadows/",
        children: "Als je benieuwd bent wat Yorrick van deze serie tot dusver al vond, lees dan hier de review!"
      })
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

const url = "src/content/nieuws/What%20We%20Do%20in%20the%20Shadows%20Seizoen%206%20Sluit%20de%20Bloedzuigende%20Komedieserie%20Af.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/What We Do in the Shadows Seizoen 6 Sluit de Bloedzuigende Komedieserie Af.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/What We Do in the Shadows Seizoen 6 Sluit de Bloedzuigende Komedieserie Af.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
