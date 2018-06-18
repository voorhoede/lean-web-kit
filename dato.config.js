const dotenv = require('dotenv-safe')
const { pick, omit } = require('lodash')
const slugify = require('slugify')

dotenv.config()

const dataDir = `src/client/static/data`
let locales = []

module.exports = (dato, root, i18n) => {
  locales = i18n.availableLocales

  root.createDataFile(`${dataDir}/locales.json`, 'json', locales)
  root.createDataFile(`${dataDir}/menu.json`, 'json', menuToJson(dato, i18n))
  root.createDataFile(`${dataDir}/pages.json`, 'json', pageSlugMap(dato, i18n))

  locales.forEach(locale => {
    i18n.locale = locale
    dato.pages.forEach(page => {
      root.createDataFile(`${dataDir}/${locale}/pages/${page.slug}.json`, 'json', pageToJson(page, i18n))
    })
    root.createDataFile(`${dataDir}/${locale}/messages.json`, 'json', translationsToJson(dato.translations))
  })
}

function pageSlugMap (dato, i18n) {
  i18n.locale = 'en'
  return dato.pages.reduce((list, page) => {
    i18n.locale = 'en'
    list[page.slug] = locales.reduce((out, locale) => {
      i18n.locale = locale
      out[locale] = page.slug
      return out
    }, {})
    return list
  }, {})
}

function pageToJson (page, i18n) {
  const { title, slug, hasToc } = page
  const sections = page.sections.map(({ title, items }) => ({
    title,
    slug: slugify(title, { lower: true }),
    items: items.toMap()
      .map(item => ({ ...item, type: item.itemType }))
      .map(item => omit(item, ['id', 'itemType', 'createdAt', 'updatedAt']))
  }))
  const seo = page.seo.toMap()
  const slugI18n = locales.reduce((out, locale) => {
    i18n.withLocale(locale, () => out[locale] = page.slug)
    return out
  }, {})
  const tocItems = sections.map(section => pick(section, ['title', 'slug']))

  return { title, slug, slugI18n, seo, sections, hasToc, tocItems }
}

function menuToJson (dato, i18n) {
  return locales.reduce((menu, locale) => {
    i18n.locale = locale
    const { title, items } = dato.menu
    menu[locale] = {
      title,
      items: items.map(item => pick(item.page, ['title', 'slug'])),
    }
    return menu
  }, {})
}

function translationsToJson (translations) {
  return translations.reduce((out, item) => {
    out[item.key] = item.value
    return out
  }, {})
}
