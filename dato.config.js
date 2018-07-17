const fs = require('fs')
const cheerio = require('cheerio')
const dotenv = require('dotenv-safe')
const { pick, omit } = require('lodash')
const slugify = require('slugify')

dotenv.config()

const staticDir = `src/client/static`
const dataDir = `${staticDir}/data`
let defaultLocale
let locales = []

module.exports = (dato, root, i18n) => {
  locales = i18n.availableLocales
  defaultLocale = locales[0]

  fs.writeFileSync(`${__dirname}/${staticDir}/_redirects`, redirectsToText(dato.redirects), 'utf8')

  root.createDataFile(`${dataDir}/app.json`, 'json', appSettingsToJson(dato.app))
  root.createDataFile(`${dataDir}/contact.json`, 'json', contactToJson(dato.contact))
  root.createDataFile(`${dataDir}/social.json`, 'json', contactToJson(dato.social))
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

function appSettingsToJson(app) {
  return pick(app, ['title', 'googleAnalyticsTrackingId'])
}

/**
 * Write redirects to text with 1 redirect per line
 * @see https://www.netlify.com/docs/redirects/
 */
function redirectsToText (redirects) {
  return redirects
    .map(redirect => `${redirect.from} ${redirect.to} ${redirect.statusCode}`)
    .join("\n")
}

function pageSlugMap (dato, i18n) {
  i18n.locale = defaultLocale
  return dato.pages.reduce((list, page) => {
    i18n.locale = defaultLocale
    list[page.slug] = locales.reduce((out, locale) => {
      i18n.locale = locale
      out[locale] = page.slug
      return out
    }, {})
    return list
  }, {})
}

function transformItem(item) {
  if (item.type === 'text') {
    const $ = cheerio.load(item.body)
    $('img').remove()
    item.body = $('body').html()
  }
  return item
}

function pageToJson (page, i18n) {
  const { title, slug, hasToc } = page
  const sections = page.sections.map(({ title, items }) => ({
    title,
    slug: slugify(title, { lower: true }),
    items: items.toMap()
      .map(item => ({ ...item, type: item.itemType }))
      .map(item => omit(item, ['id', 'itemType', 'createdAt', 'updatedAt']))
      .map(transformItem)
  }))
  const image = page.coverImage
  let coverImage = null

  if (image !== null) {
    coverImage = {
      src: image.imgixHost + image.upload.path,
      width: image.upload.width,
      height: image.upload.height,
    }
  }

  const seo = page.seo.toMap()
  const slugI18n = locales.reduce((out, locale) => {
    i18n.withLocale(locale, () => out[locale] = page.slug)
    return out
  }, {})
  const tocItems = sections.map(section => pick(section, ['title', 'slug']))

  return { title, slug, slugI18n, seo, sections, hasToc, tocItems, coverImage }
}

function formatLink (link) {
  const { page, title, url } = link
  if (page) {
    return {
      type: 'page',
      title: title || page.title,
      slug: page.slug,
    }
  } else {
    return {
      type: 'url',
      title,
      url,
    }
  }
}

function menuToJson (dato, i18n) {
  return locales.reduce((menu, locale) => {
    i18n.locale = locale
    const { title, callToAction, isSticky, links } = dato.menu
    menu[locale] = {
      title,
      isSticky,
      callToAction: callToAction && formatLink(callToAction),
      items: links.map(link => formatLink(link)),
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

function contactToJson (page) {
  return [page.toMap()].pop()
}
