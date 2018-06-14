const { pick, omit } = require('lodash')
const slugify = require('slugify')

const dataDir = `src/client/static/data`

module.exports = (dato, root, i18n) => {
  const locales = i18n.availableLocales
  i18n.locale = locales[0]
  root.createDataFile(`${dataDir}/locales.json`, 'json', locales)
  root.createDataFile(`${dataDir}/menu.json`, 'json', menuToJson(dato.menu))
  root.createDataFile(`${dataDir}/pages.json`, 'json', pageListJson(dato.pages))
  dato.pages.forEach(page => {
    root.createDataFile(`${dataDir}/pages/${page.slug}.json`, 'json', pageToJson(page))
  })
}

function pageListJson (pages = []) {
  return pages.map(page => pick(page, ['title', 'slug']))
}

function pageToJson ({ title, slug, seo, sections }) {
  return {
    title,
    slug,
    seo: seo.toMap(),
    sections: sections
      .map(({ title, items }) => ({
        title,
        slug: slugify(title, { lower: true }),
        items: items.toMap()
          .map(item => ({ ...item, type: item.itemType }))
          .map(item => omit(item, ['id', 'itemType', 'createdAt', 'updatedAt']))
      }))
  }
}

function menuToJson ({ title, items }) {
  return {
    title,
    items: items.map(item => pick(item.page, ['title', 'slug'])),
  }
}
