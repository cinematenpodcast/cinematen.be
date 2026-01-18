import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Godzilla x Kong: The New Empire is serieus aan het knallen op de box office",
  "date": "2024-03-29T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1711727864.jpg",
  "trailer": "",
  "slug": "godzilla-x-kong-the-new-empire-is-serieus-aan-het-knallen-op-de-box-office",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "sociale-media-buzz-en-toekomstverwachtingen",
    "text": "Sociale Media Buzz en Toekomstverwachtingen"
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
      children: "Godzilla x Kong: The New Empire heeft een indrukwekkende start gemaakt aan de box office en vestigt een nieuw record voor Legendary’s Monsterverse-franchise. Met $10 miljoen aan preview-verdiensten overtrof de film het vorige record van 2014’s Godzilla, die destijds $9,3 miljoen verdiende. Dit belooft veel goeds voor de opening van het weekend."
    }), "\n", createVNode(_components.p, {
      children: "Het succes van Godzilla x Kong: The New Empire is des te opmerkelijker gezien de ontvangst door het publiek. Met een hoge score op PostTrak van 5 sterren en lovende reacties over de mix van plezier en oprechte emotie, lijkt deze film zelfs beter te presteren dan Jurassic World: Dominion. De film wordt geprezen als een ware ‘creature feature’ met een hart, waarbij fans van kaiju en monsterfilms ongetwijfeld aan hun trekken zullen komen."
    }), "\n", createVNode(_components.p, {
      children: "Quorum, een toonaangevend trackingbureau, heeft recentelijk zijn voorspellingen voor de film verhoogd naar een openingsweekend tussen $66 miljoen en $74 miljoen. Als de enige nieuwe grootschalige release dit weekend, heeft Godzilla x Kong alle ogen gericht op zich gericht."
    }), "\n", createVNode(_components.h2, {
      id: "sociale-media-buzz-en-toekomstverwachtingen",
      children: "Sociale Media Buzz en Toekomstverwachtingen"
    }), "\n", createVNode(_components.p, {
      children: "Op sociale media is de buzz rond Godzilla x Kong ook significant. Met een totaal bereik van 508,8 miljoen in platforms zoals TikTok, Facebook, YouTube en Instagram, ligt de film 39% voor op de gebruikelijke normen voor sciencefictionfilms. Deze cijfers benaderen zelfs die van Legendary/Warner Bros’ eigen Dune: Part Two, die een bereik van 575,7 miljoen had."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel er aanvankelijk gemengde reacties waren op de film, lijkt de fanbase enthousiast en heeft het trailers vol fantheorieën. De absurditeit van het concept wordt omarmd door fans, wat resulteert in opmerkingen als ‘Het is zo’n goede tijd om een Kaiju-fan te zijn’ en ‘Ik kan niet wachten om dit te zien’. Deze positieve reacties voorspellen mogelijk een gunstige mond-tot-mondreclame die de initiële twijfels kan wegnemen."
    }), "\n", createVNode(_components.p, {
      children: "Verwachtingen voor de opening van Godzilla x Kong werden eerder geschat op $50 miljoen. Ondanks gemengde kritieken van critici op Rotten Tomatoes, waar de film een score van 56% behaalde, geven het publiek op het platform de film momenteel een waardering van 92%. Dit illustreert de vaak voorkomende kloof tussen criticus- en publieksreacties op films."
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

const url = "src/content/nieuws/het-succes-van-godzilla-x-kong-the-new-empire-in-de-monsterverse-franchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-succes-van-godzilla-x-kong-the-new-empire-in-de-monsterverse-franchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-succes-van-godzilla-x-kong-the-new-empire-in-de-monsterverse-franchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
