import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Real life koppel Dave Franco en Allison Brie together in horrorfilm Together",
  "date": "2025-05-07T09:09:33.264Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/maxresdefault.jpg",
  "trailer": "aSR8mOPBa0I",
  "slug": "real-life-koppel-dave-franco-en-allison-brie-together-in-horrorfilm-together",
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
      children: "Together, geregisseerd door Michael Shanks, is een aankomende horrorfilm. De\nfilm draait om het koppel Tim en Millie, gespeeld door het echte celebrity\nkoppel Alison Brie en Dave Franco, dat in de problemen zit, zowel met hun\nrelatie als met een mysterieuze kracht die hen bedreigt."
    }), "\n", createVNode(_components.p, {
      children: "In de film zijn Tim en Millie al een tijd samen. Ze besluiten om naar het\nplatteland te verhuizen, weg van de drukte van de stad, maar dit brengt\nproblemen met zich mee. Hun relatie staat op het spel en de spanning tussen hen\nneemt toe. Millie vertelt een therapeut dat zij en Tim niet echt op dezelfde\ngolflengte zitten. Volgens haar zijn ze gewoon tevreden, maar dat is niet genoeg\nvoor de liefde die ze willen voelen."
    }), "\n", createVNode(_components.p, {
      children: "De trailer begint met het koppel dat worstelt met hun gevoelens. Terwijl ze in\nhun nieuwe huis zijn, komt er een onbekend en angstaanjagend wezen in hun leven.\nHet koppel probeert hun problemen op te lossen, maar hun situatie verslechtert\nsteeds meer. In een griezelig moment worden hun lippen aan elkaar gekleefd na\neen pijnlijke kus."
    }), "\n", createVNode(_components.p, {
      children: "Together is een voorbeeld van body horror, een genre dat recent nog een knaller\nkreeg met The Substance."
    }), "\n", createVNode(_components.p, {
      children: "De muziek van de trailer is een cover van het nummer “Happy Together” van The\nTurtles, een griezelige versie die goed gepaard gaat met de horrorbeelden op het\nscherm."
    }), "\n", createVNode(_components.p, {
      children: "De film is momenteel al goed ontvangen door de reviewers en critici en heeft een\nrating van 100% op Rotten Tomatoes.\u000b\u000bDe film komt uit op 30 juli."
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

const url = "src/content/nieuws/real-life-koppel-dave-franco-en-allison-brie-together-in-horrorfilm-together.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/real-life-koppel-dave-franco-en-allison-brie-together-in-horrorfilm-together.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/real-life-koppel-dave-franco-en-allison-brie-together-in-horrorfilm-together.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
