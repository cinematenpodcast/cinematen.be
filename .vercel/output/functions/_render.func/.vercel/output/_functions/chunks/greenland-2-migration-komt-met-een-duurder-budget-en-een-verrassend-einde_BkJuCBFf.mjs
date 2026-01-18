import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Greenland 2 Migration komt met een duurder budget en een verrassend einde",
  "date": "2026-01-09T16:26:50.091Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767796107.jpg",
  "trailer": "",
  "slug": "greenland-2-migration-komt-met-een-duurder-budget-en-een-verrassend-einde",
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
      children: "Greenland 2: Migration komt op 9 januari 2026 in de bioscoop. Het is het vervolg\nop Greenland uit 2020, waar we de familie Garrity volgden tijdens hun zoektocht\nnaar veiligheid na een komeetinslag."
    }), "\n", createVNode(_components.p, {
      children: "Vijf jaar later is de aarde nog steeds in gevaar, met stormen, aardbevingen en\ngiftige wolken. De familie verlaat hun schuilplaats in Groenland om naar een\nkrater in Frankrijk te reizen, waar een nieuwe samenleving zou worden opgebouwd.\nDe reis is gevaarlijk door natuurrampen en groepen mensen die vechten om te\noverleven."
    }), "\n", createVNode(_components.p, {
      children: "Gerard Butler en Morena Baccarin keren terug als John en Allison Garrity, met\nRoman Griffin Davis als hun zoon Nathan. Andere acteurs zijn Amber Rose Revah,\nSophie Thompson, Trond Fausa Aurvåg en William Abadie. Regisseur Ric Roman Waugh\nis terug en werkte samen met de schrijvers Chris Sparling en Mitchell LaFortune."
    }), "\n", createVNode(_components.p, {
      children: "Het budget voor deze film is 90 miljoen dollar, meer dan voor de eerste.\nHierdoor zijn de actiescènes en natuurrampen groter, met onder meer hoge golven,\nstralingsstormen en gevechten."
    }), "\n", createVNode(_components.p, {
      children: "In een interview vertelde Waugh dat ze niet alles wetenschappelijk kloppend\nmaken, maar inspiratie halen uit echte rampen zoals bosbranden en\nstralingsincidenten. De eerste film werd goed ontvangen vanwege de focus op\nfamilie en hoop, een lijn die ze in het vervolg doorzetten. Het centrale thema\nis de keuze tussen alleen overleven of echt leven."
    }), "\n", createVNode(_components.p, {
      children: "Een verrassende wending is dat John Garrity, gespeeld door Gerard Butler, aan\nhet einde van de film sterft. Toch zijn er plannen voor een derde film.\nProducent Sébastien Raybaud zei dat ze nadenken over een vervolg, dat mogelijk\nover de rest van de familie in Frankrijk gaat of over nieuwe personages."
    }), "\n", createVNode(_components.p, {
      children: "De film toont een wereld in problemen, met chaos in Engeland, oorlog in\nFrankrijk en onveiligheid in Afrika en andere regio’s. Volgens Waugh gaan de\nfilms over hoop, samenwerking en zorg. Hij prijst Butler omdat hij een gewoon\npersoon speelt met fouten en angsten."
    }), "\n", createVNode(_components.p, {
      children: "Greenland 2: Migration komt op 9 januari 2026 in de bioscoop. De eerste film is\nte zien op HBO Max."
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

const url = "src/content/nieuws/greenland-2-migration-komt-met-een-duurder-budget-en-een-verrassend-einde.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/greenland-2-migration-komt-met-een-duurder-budget-en-een-verrassend-einde.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/greenland-2-migration-komt-met-een-duurder-budget-en-een-verrassend-einde.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
