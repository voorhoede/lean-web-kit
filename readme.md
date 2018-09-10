# Lean Web Kit

**Lean Web Kit to kick-start your web project.**

The Lean Web Kit is a universal [Vue.js](https://vuejs.org/) app made with [Nuxt.js](https://nuxtjs.org/). The app is connected to a hosted headless CMS called [Dato CMS](https://www.datocms.com/). The app is deployed on [Netlify](https://www.netlify.com/) and is configured to use [Netlify cloud functions](https://www.netlify.com/docs/functions/) to connect back-end services.

To use it for your project, [download a copy](https://github.com/voorhoede/lean-web-kit/archive/master.zip) or run `npx degit voorhoede/lean-web-kit` using [degit](https://github.com/Rich-Harris/degit).

## Development

### Getting started

Read our complete [getting started guide](https://leanwebkit.voorhoede.nl/en/getting-started/) here. This guide will help you with the CMS setup, cloning the repository and deploying your project using [Netlify](https://www.netlify.com/). In case all you need is a copy of the repository, proceed by following the steps below.

* Clone the repository.
* Copy `.env.example` to `.env` and set the environment variables. Copy them from the [Netlify build configuration](https://app.netlify.com/sites/leanwebkit/settings/deploys#build-environment-variables) or ask your tech lead. 
* Run app in development mode (`npm run dev`), see [scripts](#scripts).
* Changes on master and content publishing from the CMS trigger a new build and deploy to the [live environment](http://leanwebkit.voorhoede.nl).

### Structure

```
dist/             <- generated app
  client/         <- generated client-side app
  server/         <- generated server-side app

src/              <- source files
  client/         <- Nuxt app
    assets/       <- core files, not public
    components/   <- Vue components
    layouts/      <- base layout for pages
    pages/        <- view per route
    static/       <- public assets
  server/
    functions/    <- Netlify cloud functions
    lib/          <- shared cloud function helpers

test/             <- end-to-end tests and helpers

.env              <- local environment variables
cypress.json      <- end-to-end test configuration
dato.config.js    <- data dump configuration
netlify.toml      <- Netlify build & function config
nuxt.config.js    <- Nuxt app config
```

### Scripts

This project requires [Node.js](http://nodejs.org/) (>= v8) and [npm](https://npmjs.org/) (comes with Node).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`analyze` | Analyze the bundles created during build.
`build` | Builds client, guide and server for production to `dist/`.
`data` | Download data from Dato CMS to `src/static/data/`.
`dev` | Serves client app on [`http://localhost:5326`](http://localhost:5326) ("lean" in T9) with hot reloading.
`guide` | Serves guide on [`http://localhost:5327`](http://localhost:5327) for local development.
`proxy` | Exposes app on localhost to world wide web for testing on other devices.
`start` | Serves production version of client app from (`/dist/`) on [`http://localhost:5326`](http://localhost:5326).
`test` | Runs tests on production build of the app.
`watch` | Runs tests on app during development.
