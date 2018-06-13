const { pick, omit } = require('lodash')
const slugify = require('slugify')

const dataDir = `src/client/static/data`

module.exports = (dato, root, i18n) => {
  root.createDataFile(`${dataDir}/menu.json`, 'json', menuToJson(dato.menu))
  root.createDataFile(`${dataDir}/pages.json`, 'json', pageListJson(dato.pages))
  dato.pages.forEach(page => {
    root.createDataFile(`${dataDir}/pages/${page.slug}.json`, 'json', pageToJson(page))
  })
}

function pageListJson (pages = []) {
  return pages.map(page => pick(page, ['title', 'slug']))
}

function pageToJson ({ title, slug, seo, content }) {
  return {
    title,
    slug,
    seo: seo.toMap(),
    content: content
      .map(item => item.toMap())
      .map(item => ({
        ...item,
        slug: slugify(item.title, { lower: true }),
        type: item.itemType,
      }))
      .map(item => omit(item, ['id', 'itemType', 'createdAt', 'updatedAt']))
  }
}

function menuToJson ({ title, items }) {
  return {
    title,
    items: items.map(item => pick(item.page, ['title', 'slug'])),
  }
}
