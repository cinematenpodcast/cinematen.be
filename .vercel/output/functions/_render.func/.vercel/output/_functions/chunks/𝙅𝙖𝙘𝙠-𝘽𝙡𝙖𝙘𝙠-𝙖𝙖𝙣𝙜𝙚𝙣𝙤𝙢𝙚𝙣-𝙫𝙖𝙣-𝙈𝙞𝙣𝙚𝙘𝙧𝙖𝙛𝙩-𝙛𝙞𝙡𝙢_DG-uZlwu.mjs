import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jack Black gecast in Minecraft film",
  "date": "2024-01-03T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704224745.jpg",
  "trailer": "",
  "slug": "jack-black-gecast-in-minecraft-film",
  "draft": false,
  "tags": ["film", "casting"]
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
      children: "Jack Black heeft zich officieel aangesloten bij de cast van de live-action film “Minecraft”. De verfilming van de populaire videospelserie zal ook sterren als Jason Momoa, Emma Myers en Danielle Brooks bevatten. Onder regie van Jared Hess zal de productie binnenkort van start gaan in Nieuw-Zeeland. De film wordt geproduceerd door Warner Bros. en Legendary met een release op 4 april 2025."
    }), "\n", createVNode(_components.p, {
      children: "“Minecraft”, dat debuteerde in 2011, is een van de bestverkopende videospellen aller tijden en heeft meer dan 140 miljoen maandelijkse gebruikers. Het spel biedt spelers de mogelijkheid om kleurrijke blokken te gebruiken om 3D-werelden te creëren. Mojang Studios, de Zweedse ontwikkelaar achter het spel, werd in 2014 overgenomen door Microsoft en zal optreden als producent van de film."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de plot van de “Minecraft” film nog niet bekend is gemaakt, is er veel anticipatie onder fans van het spel. Het is nog onduidelijk hoe de unieke visuele stijl van het spel wordt vertaald naar het grote scherm. Shawn Levy, Rob McElhenney en Peter Sollett waren op verschillende momenten in gesprek om de film te regisseren, maar het is nog niet bekend wie daadwerkelijk het scenario zal schrijven."
    }), "\n", createVNode(_components.p, {
      children: "Met de toevoeging van Jack Black aan de cast en de intensieve productie die binnenkort van start gaat, kunnen fans van “Minecraft” uitkijken naar een spannende en creatieve interpretatie van het populaire videospel op het witte doek."
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

const url = "src/content/nieuws/%F0%9D%99%85%F0%9D%99%96%F0%9D%99%98%F0%9D%99%A0-%F0%9D%98%BD%F0%9D%99%A1%F0%9D%99%96%F0%9D%99%98%F0%9D%99%A0-%F0%9D%99%96%F0%9D%99%96%F0%9D%99%A3%F0%9D%99%9C%F0%9D%99%9A%F0%9D%99%A3%F0%9D%99%A4%F0%9D%99%A2%F0%9D%99%9A%F0%9D%99%A3-%F0%9D%99%AB%F0%9D%99%96%F0%9D%99%A3-%F0%9D%99%88%F0%9D%99%9E%F0%9D%99%A3%F0%9D%99%9A%F0%9D%99%98%F0%9D%99%A7%F0%9D%99%96%F0%9D%99%9B%F0%9D%99%A9-%F0%9D%99%9B%F0%9D%99%9E%F0%9D%99%A1%F0%9D%99%A2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/𝙅𝙖𝙘𝙠-𝘽𝙡𝙖𝙘𝙠-𝙖𝙖𝙣𝙜𝙚𝙣𝙤𝙢𝙚𝙣-𝙫𝙖𝙣-𝙈𝙞𝙣𝙚𝙘𝙧𝙖𝙛𝙩-𝙛𝙞𝙡𝙢.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/𝙅𝙖𝙘𝙠-𝘽𝙡𝙖𝙘𝙠-𝙖𝙖𝙣𝙜𝙚𝙣𝙤𝙢𝙚𝙣-𝙫𝙖𝙣-𝙈𝙞𝙣𝙚𝙘𝙧𝙖𝙛𝙩-𝙛𝙞𝙡𝙢.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
