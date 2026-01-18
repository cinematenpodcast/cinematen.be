import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Social Network 2 komt eraan dit weten we al",
  "date": "2025-06-27T07:39:25.638Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-06-27T07-36-44-069Z.jpg",
  "trailer": "",
  "slug": "the-social-network-2-komt-eraan-dit-weten-we-al",
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
      children: "Na meer dan vijftien jaar wachten is het officieel: er komt een vervolg op “The\nSocial Network”. Aaron Sorkin, die het originele script schreef en een Oscar\nwon, neemt nu zowel de regie als het script voor zijn rekening. Het nieuwe\nproject heet “The Social Network Part II” en komt tot stand met Sony Pictures."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film uit 2010 draaide rond Mark Zuckerberg, gespeeld door Jesse\nEisenberg, en toonde hoe Facebook ontstond tijdens zijn studietijd aan Harvard.\nWe zagen ook de rechtszaken tegen medestudenten en medeoprichter Eduardo\nSaverin. De film was een kaskraker met 226 miljoen dollar opbrengst tegen een\nbudget van 40 miljoen dollar. Hij kreeg acht Oscarnominaties en won er drie,\nwaaronder die voor beste bewerkte scenario."
    }), "\n", createVNode(_components.p, {
      children: "Voor het vervolg put Sorkin inspiratie uit “The Facebook Files”, een reeks Wall\nStreet Journal-artikelen uit 2021 over de schaduwkanten van Facebook. De film\nlinkt het platform aan gebeurtenissen zoals de bestorming van het Capitool in\n2021, maar dat wordt niet het enige focuspunt. Wel ligt de nadruk op hoe\nFacebook tieners en pre-tieners beïnvloedt, plus de internationale impact. De\nalgoritmes die verdeeldheid en geweld verspreiden komen centraal te staan."
    }), "\n", createVNode(_components.p, {
      children: "Over de cast is nog niets bekend. We weten niet of Jesse Eisenberg terugkeert\nals Zuckerberg, hoewel dat logisch zou zijn. Sorkin is actief bezig met het\nsamenstellen van de acteurs en benadrukt dat dit cruciaal is. David Fincher, de\nregisseur van het eerste deel, doet deze keer niet mee. Sorkin regisseerde\neerder al “Molly’s Game” en “The Trial of the Chicago 7”, dus hij pakt dit zelf\naan."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen productiedatum, maar door gesloten deals kan het casten nu\nbeginnen. Wij hebben hoge verwachtingen, zeker na het succes van deel één. De\nfilm belooft niet zomaar een vervolg te worden, maar een diepe duik in de\nproblemen van sociale media en hun impact op onze toekomst."
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

const url = "src/content/nieuws/the-social-network-2-komt-eraan-dit-weten-we-al.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-social-network-2-komt-eraan-dit-weten-we-al.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-social-network-2-komt-eraan-dit-weten-we-al.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
