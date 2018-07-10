/**
 * Image URL constructor for Imgix
 *
 * Based on https://github.com/datocms/js-datocms-client/blob/68344d5/src/local/fields/Image.js
 * See image URL reference for available params: https://docs.imgix.com/apis/url
 */
import { stringify } from 'query-string'

const defaults = {
  auto: ['compress', 'quality'],
}

/**
 * Format image URL
 *
 * @param {string} imagePath    - Image base url. Must end with with `?`.
 * @param {Object} [params]     - Imgix manipulation parameters, see https://docs.imgix.com/apis/url
 */
const imageUrl = (imagePath, params) => {
  return `${imagePath}?${stringify(Object.assign({}, defaults, params))}`
}

export default imageUrl
