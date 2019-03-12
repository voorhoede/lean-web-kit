# No script

Nests content inside a `<noscript>` tag.

By default `<noscript>` tags cause issues when used in Nuxt:

> [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.

This component overrides the default `render` method and solves this issue.
