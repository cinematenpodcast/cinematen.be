import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jurassic World Rebirth is een grimmige nieuwe start",
  "date": "2025-06-30T16:33:21.254Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751290144.jpg",
  "trailer": "",
  "slug": "jurassic-world-rebirth-is-een-grimmige-nieuwe-start",
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
      children: "“Jurassic World: Rebirth” komt op 2 juli 2025 in de bioscoop als nieuwste deel\nvan de Jurassic Park-reeks. Gareth Edwards, bekend van “Godzilla” en “Rogue\nOne”, regisseert deze film met een script van David Koepp - dezelfde man die het\noriginele “Jurassic Park” schreef. De hoofdrollen worden vertolkt door Scarlett\nJohansson, Mahershala Ali, Jonathan Bailey, Rupert Friend en Manuel\nGarcia-Rulfo."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich vijf jaar na “Jurassic World Dominion” af. Dinosaurussen\noverleven nu vooral op afgelegen eilanden met een prehistorisch klimaat. Drie\ngigantische dinosaurussen staan centraal, wiens DNA mogelijk een levensreddend\nmedicijn voor mensen bevat. We volgen een groep nieuwe personages die met deze\nsituatie moeten omgaan."
    }), "\n", createVNode(_components.p, {
      children: "De film kiest bewust voor meer horror-elementen in plaats van pure actie, wat\neen duisterder sfeer creëert dan voorgangerfilms. Nieuwe dinosaurussen zoals de\nmutant D-rex dragen hieraan bij. Opvallend: er is géén extra scène na de\neindcredits, wat suggereert dat de makers nu geen direct vervolg voorbereiden."
    }), "\n", createVNode(_components.p, {
      children: "Gareth Edwards’ visuele stijl - bekend om indrukwekkende beelden - versterkt de\nspanning. De muziek en dino-uitbeeldingen zijn speciaal ontworpen om ons als\nkijker dieper in het verhaal te zuigen. De frisse cast combinatie geeft een\nnieuw perspectief op de vertrouwde thema’s."
    }), "\n", createVNode(_components.p, {
      children: "“Rebirth” markeert een nieuw begin voor de franchise, met een sterke focus op\nnatuurbehoud en ethisch omgaan met wetenschap. De film onderzoekt hoe mensen\nzich aanpassen aan een veranderende wereld vol dinosauriërs. Wij zien dit als\neen veelbelovende reset die ons zeker naar de bioscoap zal lokken."
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

const url = "src/content/nieuws/jurassic-world-rebirth-is-een-grimmige-nieuwe-start.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-rebirth-is-een-grimmige-nieuwe-start.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jurassic-world-rebirth-is-een-grimmige-nieuwe-start.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
