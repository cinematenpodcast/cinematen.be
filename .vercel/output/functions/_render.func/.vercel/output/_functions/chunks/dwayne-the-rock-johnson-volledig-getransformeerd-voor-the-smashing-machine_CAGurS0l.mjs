import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dwayne The Rock Johnson volledig getransformeerd voor The Smashing Machine",
  "date": "2024-05-21T22:31:37.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/will-benny-safdie-be-able-to-transform-johnsons-career-1716300031.webp",
  "trailer": "",
  "slug": "dwayne-johnsons-transformatie-in-the-smashing-machine",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-nieuwe-uitdaging-voor-the-rock",
    "text": "Een nieuwe uitdaging voor The Rock"
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
      children: "Dwayne “The Rock” Johnson, bekend om zijn imposante verschijning en actievolle rollen in Hollywood, ondergaat een opmerkelijke transformatie in de aankomende film “The Smashing Machine.” Deze biografische film, geregisseerd door Benny Safdie en geproduceerd door A24, werpt Johnson in de rol van de legendarische MMA- en UFC-kampioen Mark Kerr."
    }), "\n", createVNode(_components.h2, {
      id: "een-nieuwe-uitdaging-voor-the-rock",
      children: "Een nieuwe uitdaging voor The Rock"
    }), "\n", createVNode(_components.p, {
      children: "In de eerste beelden die zijn vrijgegeven, is Johnson vrijwel onherkenbaar als hij gekarakteriseerd wordt als Kerr. Zittend op een kruk in de hoek van de ring, ontvangt Johnson instructies terwijl hij sportkleding draagt die typisch is voor een vechtsporter. Hoewel zijn gespierde lichaam nog steeds duidelijk zichtbaar is, valt vooral zijn totaal andere uiterlijk vanaf de nek op, met Kerr’s kenmerkende zwarte haarlokken en lange bakkebaarden."
    }), "\n", createVNode(_components.p, {
      children: "Mark Kerr, wiens verhaal de basis vormt voor de film, was een succesvolle MMA-vechter uit het tijdperk van de UFC zonder regels. Tijdens zijn carrière van 1997 tot 2009 was hij tweemaal kampioen in het zwaargewichttoernooi van de UFC. Het leven van Kerr, inclusief zijn overwinningen, liefde, vriendschap en worstelingen met verslaving, wordt belicht in deze dramatische vertelling."
    }), "\n", createVNode(_components.p, {
      children: "Emily Blunt schittert naast Johnson in de rol van Kerr’s vrouw, Dawn Staples, die worstelt om haar plek te vinden binnen Mark’s turbulente wereld. De film belooft een diepgaande blik te werpen op de persoonlijke gevechten van deze legendarische vechter en zijn geliefden."
    }), "\n", createVNode(_components.p, {
      children: "Johnson heeft zich publiekelijk uitgelaten over de uitdagingen van zijn rol als Kerr en hoe deze hem op fysiek en emotioneel niveau uitdaagt. Van intensieve trainingssessies tot het bestuderen van Kerr’s vechtstijl, The Rock duikt diep in de wereld van MMA om de essentie van deze iconische vechter vast te leggen. Een video van Johnson tijdens zijn eerste dag van MMA-trainingskamp voor de film toont zijn toewijding aan het perfectioneren van zijn vaardigheden en fysieke transformatie voor deze rol."
    }), "\n", createVNode(_components.p, {
      children: "“The Smashing Machine” belooft niet alleen een visueel meeslepende ervaring te worden, maar ook een eerbetoon aan de moed en veerkracht van Mark Kerr en degenen die hem omringen. Met de sterrencast en het getalenteerde team achter de schermen heeft deze film alle ingrediënten om een gedenkwaardig verhaal te vertellen dat fans zal inspireren en ontroeren."
    }), "\n", createVNode(_components.p, {
      children: "De release van “The Smashing Machine” in 2025 zal naar verwachting een keerpunt markeren in Dwayne Johnson’s carrière, waarbij hij zijn grenzen verlegt en zijn veelzijdigheid als acteur demonstreert. Het belooft een boeiende reis te worden die zowel fans van The Rock als liefhebbers van MMA en biografische films zal aanspreken."
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

const url = "src/content/nieuws/dwayne-the-rock-johnson-volledig-getransformeerd-voor-the-smashing-machine.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-the-rock-johnson-volledig-getransformeerd-voor-the-smashing-machine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-the-rock-johnson-volledig-getransformeerd-voor-the-smashing-machine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
