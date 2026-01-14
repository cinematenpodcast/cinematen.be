/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:tina",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "tina",
        entrypoint: new URL("./tina.js", import.meta.url).pathname,
      });
    },
  },
});
