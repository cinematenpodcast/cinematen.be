import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kathleen Kennedy stopt er eind dit jaar mee",
  "date": "2025-02-25T19:20:05.766Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1740495087.jpg",
  "trailer": "",
  "slug": "kathleen-kennedy-stopt-er-eind-dit-jaar-mee",
  "tags": ["film"]
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
      children: "Kathleen Kennedy, de president van Lucasfilm, heeft aangekondigd dat ze tegen\nhet einde van 2025 met pensioen gaat op 71 jarige leeftijd. Ze werkt sinds 2012\nbij Lucasfilm en heeft het bedrijf geleid na de overname door Disney. Kennedy\nwas betrokken bij bekende films zoals de “Star Wars” en “Indiana Jones” series.\nOnder haar leiding heeft “Star Wars” enkele van de grootste kaskrakers ooit,\nzoals “The Force Awakens,” geproduceerd, die meer dan 2 miljard dollar\nwereldwijd heeft opgebracht."
    }), "\n", createVNode(_components.p, {
      children: "Haar periode bij Lucasfilm is echter niet zonder problemen geweest. Ze beleefde\nzowel succes als tegenslagen. Er was veel discussie over de sequel-trilogie van\n“Star Wars,” waarvan “The Rise of Skywalker” de laatste film was. Deze film\nkreeg gemengde reacties. Tijdens haar leiding werden ook verschillende\nregisseurs ontslagen of vervangen tijdens het maken van films, zoals met “Solo:\nA Star Wars Story.”"
    }), "\n", createVNode(_components.p, {
      children: "Kennedy is ook bekend vanwege haar samenwerking met regisseur Steven Spielberg.\nZe heeft meegewerkt aan veel klassieke films, zoals “E.T. de Extra-Terrestrial,”\n“Jurassic Park,” en de “Back to the Future” trilogie. In totaal heeft ze aan\nmeer dan 70 films gewerkt en is ze genomineerd voor acht Oscars."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de bioscoopfilms van “Star Wars” met enige uitdagingen te maken hebben\ngehad, heeft de franchise een nieuwe boost gekregen via Disney+. De serie “The\nMandalorian” werd goed ontvangen en leidde tot meerdere spin-offs."
    }), "\n", createVNode(_components.p, {
      children: "Als Kathleen Kennedy vertrekt, komt er een leegte in het leiderschap van\nLucasfilm. Dave Filoni, de huidige Chief Creative Officer, en Jon Favreau zijn\nenkele mogelijke kandidaten om haar rol over te nemen. Het zal interessant zijn\nom te zien wie de leiding over deze iconische filmstudio op zich neemt en hoe\nzij de toekomst van deze geliefde franchises verder vormgeven."
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

const url = "src/content/nieuws/kathleen-kennedy-stopt-er-eind-dit-jaar-mee.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathleen-kennedy-stopt-er-eind-dit-jaar-mee.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathleen-kennedy-stopt-er-eind-dit-jaar-mee.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
