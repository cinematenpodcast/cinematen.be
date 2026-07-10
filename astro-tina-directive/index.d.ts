// An `import` of the module being augmented is required here — without it,
// TypeScript treats this `declare module 'astro'` as a brand-new ambient
// module declaration instead of an augmentation of the real one, which was
// shadowing every real export from "astro" (e.g. `APIContext`) repo-wide.
import 'astro';

declare module 'astro' {
	interface AstroClientDirectives {
		'client:tina'?: boolean
	}
}
