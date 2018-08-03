/**
 * Use Netlify's URL variable:
 * @see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
 */
const baseUrl = process.env.URL
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  baseUrl,
  NODE_ENV
}
