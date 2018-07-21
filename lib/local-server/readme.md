# Server

This server is **only for testing the production build locally**.

Netlify will do the actual build and host the generated client app and server functions (in `/dist/`).
This server aims to replicate the behaviour of the Netlify server, including:

* Make Netlify functions available on `/.netlify/functions/:function-name`.
* Serve static dist files for all GET requests to `/**`.
