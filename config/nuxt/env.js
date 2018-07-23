/**
 * Use Netlify's URL variable:
 * @see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
 */
const baseUrl = process.env.URL

module.exports = {
  baseUrl
}
