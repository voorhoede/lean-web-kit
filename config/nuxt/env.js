require('dotenv-safe').config() // load env variables from .env file into process.env

/**
 * Use Netlify's URL variable:
 * @see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
 *
 * We take variables from the Node process.env context
 * and make them available on Nuxt's process.env context.
 * For example `process.env.URL` from the Node context
 * becomes `process.env.baseUrl` in the Nuxt context.
 */
module.exports = {
  baseUrl: process.env.URL,
  branch: process.env.BRANCH,
}
