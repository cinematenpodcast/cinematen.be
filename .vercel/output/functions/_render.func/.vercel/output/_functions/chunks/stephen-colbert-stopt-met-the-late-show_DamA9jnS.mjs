import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stephen Colbert stopt met The Late Show",
  "date": "2025-07-18T16:45:51.143Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1752856073.jpg",
  "trailer": "",
  "slug": "stephen-colbert-stopt-met-the-late-show",
  "tags": ["TV"]
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
      children: "Stephen Colbert, de presentator van “The Late Show” op CBS, heeft bekendgemaakt\ndat zijn show volgend jaar stopt. Dit nieuws kwam op 17 juli 2025 naar buiten.\nDe laatste aflevering zal in mei 2026 te zien zijn. Colbert, die nu 61 jaar oud\nis, vertelde dat de show niet vervangen wordt en dat dit het einde betekent van\neen belangrijk tijdperk in de late-night televisie."
    }), "\n", createVNode(_components.p, {
      children: "De “Late Show” loopt al sinds 1993, toen David Letterman ermee begon. Het\nstoppen van zo’n iconische show zorgt voor grote opschudding in de\nentertainmentwereld. Wij zijn gewend aan late-night shows zoals die van Colbert\nen Jimmy Fallon, en het idee dat ze zouden verdwijnen leek ondenkbaar."
    }), "\n", createVNode(_components.p, {
      children: "Helaas is de populariteit van deze shows de laatste jaren gedaald. De\nproductiekosten zijn hoog en het aantal kijkers neemt af. Veel jongeren kijken\nliever korte video’s op TikTok dan live tv. Hierdoor zijn adverteerders minder\ngeïnteresseerd. Colbert’s politieke commentaar, vooral over Donald Trump, heeft\nook invloed gehad op de kijkcijfers."
    }), "\n", createVNode(_components.p, {
      children: "CBS, het netwerk achter de show, zegt dat de beslissing puur financieel is. Het\nmoederbedrijf Paramount is bovendien bezig met een grote fusie ter waarde van\n$8,4 miljard met Skydance Media, wat goedkeuring van de overheid vereist."
    }), "\n", createVNode(_components.p, {
      children: "Colbert is niet de enige die met verandering te maken heeft. Andere late-night\nshows worden aangepast of stopgezet. Zo is “After Midnight” op CBS na een jaar\nal beëindigd en heeft “Late Night with Seth Meyers” de live band geschrapt. De\nconcurrentie is groot en hosts zoals Jimmy Kimmel en Conan O’Brien denken ook na\nover hun toekomst."
    }), "\n", createVNode(_components.p, {
      children: "Colbert stond bekend om zijn energieke openings, humor en balans tussen\npolitieke grappen en interviews met beroemdheden en politici. Hoewel er geen\naanwijzingen waren dat hij zelf wilde stoppen, heeft CBS de stekker eruit\ngetrokken."
    }), "\n", createVNode(_components.p, {
      children: "Wat Colbert daarna gaat doen, is nog onduidelijk. Misschien gaat hij podcasten,\nzoals anderen in het vak. Hij is dankbaar voor de kans en wil in zijn laatste\nmaanden zijn team nog in de schijnwerpers zetten."
    }), "\n", createVNode(_components.p, {
      children: "De komende maanden tot mei 2026 brengen veel verandering in de late-night tv.\nWij kijken uit naar Colbert’s laatste optredens."
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

const url = "src/content/nieuws/stephen-colbert-stopt-met-the-late-show.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stephen-colbert-stopt-met-the-late-show.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stephen-colbert-stopt-met-the-late-show.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
