export { renderers } from '../renderers.mjs';

function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>
        // Immediately redirect
        window.location.replace("https://cinematen.be/nieuws/pages/1/");
    </script>
</head>
<body>
    <noscript>
        If you are not redirected, <a href="https://cinematen.be/nieuws/pages/1/">click here</a>.
    </noscript>
</body>
</html>
`
	}
render["astro:html"] = true;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: render
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
