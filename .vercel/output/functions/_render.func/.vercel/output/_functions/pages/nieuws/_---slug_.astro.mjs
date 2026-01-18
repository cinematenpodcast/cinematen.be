import { c as createComponent, d as createAstro, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import $$NieuwsLayout from '../../chunks/NieuwsLayout_Cr_3Kiaz.mjs';
import { c as client } from '../../chunks/client_D9q0-Dzd.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'react';
import { useTina, tinaField } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
export { renderers } from '../../renderers.mjs';

function AdminNieuws(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });
  const nieuws = data.nieuws;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { "data-tina-field": tinaField(nieuws, "body"), children: /* @__PURE__ */ jsx(TinaMarkdown, { content: nieuws.body }) }),
    nieuws.trailer && /* @__PURE__ */ jsxs("div", { id: "trailer", "data-tina-field": tinaField(nieuws, "trailer"), children: [
      /* @__PURE__ */ jsx("h2", { style: { textAlign: "center", marginTop: "20px" }, children: "Bekijk hier de trailer:" }),
      /* @__PURE__ */ jsx("div", { className: "video-container", children: /* @__PURE__ */ jsx("div", { className: "video-wrapper", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: `https://www.youtube-nocookie.com/embed/${nieuws.trailer}`,
          title: "YouTube video player",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerPolicy: "strict-origin-when-cross-origin",
          allowFullScreen: true
        }
      ) }) })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  let tinaProps;
  try {
    tinaProps = await client.queries.nieuws({
      relativePath: `${slug}.mdx`
    });
  } catch (e) {
    console.error(`Error fetching updated content for slug: ${slug}`, e);
    return Astro2.redirect("/404");
  }
  const frontmatter = tinaProps.data.nieuws;
  Astro2.response.headers.set("Cache-Control", "public, max-age=60, s-maxage=60");
  return renderTemplate`${renderComponent($$result, "NieuwsLayout", $$NieuwsLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminNieuws", AdminNieuws, { ...tinaProps, "client:tina": true, "client:component-hydration": "tina", "client:component-path": "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/tina/pages/AdminNieuws", "client:component-export": "default" })} ` })}`;
}, "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/[...slug].astro", void 0);

const $$file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/[...slug].astro";
const $$url = "/nieuws/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
