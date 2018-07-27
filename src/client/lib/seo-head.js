/**
 * Generate document head object for Nuxt based on SEO field from Dato CMS.
 *
 * @see https://nuxtjs.org/api/pages-head
 * @see https://www.datocms.com/docs/other/fields/#seo-meta-tags-fields
 *
 * @param {Object} seo
 * @param {String} seo.title
 * @param {String} seo.description
 * @param {Object} [seo.image]
 * @param {String} [seo.image.url]
 * @param {Number} [seo.image.width]
 * @param {Number} [seo.image.height]
 */
export default function seoHead ({ title, description, image, url }) {
  return {
    title,
    link: [
      url && { rel: 'canonical', href: url },
    ].filter(Boolean), // only pass valid <link> objects to template
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      image && { hid: 'og:image', name: 'og:image', content: `${image.url}?auto=format&fm=jpg&auto=quality` },
      image && { hid: 'og:image:width', name: 'og:image:width', content: image.width },
      image && { hid: 'og:image:height', name: 'og:image:height', content: image.height },
    ].filter(Boolean),
  }
}
