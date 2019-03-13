const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const dotenv = require('dotenv-safe')
const { pick, omit } = require('lodash')
const slugify = require('slugify')

const { input, static, data} = require('./config/dir')

dotenv.config()

const { URL } = process.env
const staticDir = path.join(input, static)
const dataDir = path.join(input, data)
let defaultLocale
let locales = []

module.exports = (dato, root, i18n) => {
  locales = i18n.availableLocales
  defaultLocale = locales[0]

  fs.writeFileSync(`${__dirname}/${staticDir}/_redirects`, redirectsToText(dato.redirects), 'utf8')

  root.createDataFile(`${dataDir}/app.json`, 'json', appSettingsToJson(dato.app))
  root.createDataFile(`${dataDir}/locales.json`, 'json', locales)
  root.createDataFile(`${dataDir}/menu.json`, 'json', menuToJson(dato, i18n))
  root.createDataFile(`${dataDir}/404.json`, 'json', notfoundToJson(dato, i18n))
  root.createDataFile(`${dataDir}/pages.json`, 'json', pageSlugMap(dato, i18n))

  locales.forEach(locale => {
    i18n.locale = locale
    root.createDataFile(`${dataDir}/${locale}/pages/home.json`, 'json', pageToJson(dato.home, i18n))

    dato.pages
      .filter(page => page && page.slug)
      .forEach(page => {
      root.createDataFile(`${dataDir}/${locale}/pages/${page.slug}.json`, 'json', pageToJson(page, i18n))
    })
    root.createDataFile(`${dataDir}/${locale}/messages.json`, 'json', translationsToJson(dato.translations))
  })
}

function appSettingsToJson(app) {
  const socialLinks = app.socialLinks.toMap().map(item => pick(item, ['id', 'platform', 'url']))
  return { socialLinks, ...pick(app, ['title', 'contact', 'googleAnalyticsTrackingId', 'crispWebsiteId', 'hotjarId', 'emailAddress', 'experimentId'])}
}

/**
 * Write redirects to text with 1 redirect per line
 * @see https://www.netlify.com/docs/redirects/
 */
function redirectsToText (redirects) {
  const redirectToDefaultLocale = `/ /${defaultLocale}/ 301`
  const redirectRulesFromCms = redirects
    .map(redirect => `${redirect.from} ${redirect.to} ${redirect.statusCode}`)
  const redirectRules404s = locales.map(locale => `/${locale}/* /${locale}/404/ 404`)
  return [redirectToDefaultLocale, ...redirectRulesFromCms, ...redirectRules404s].join("\n")
}

function pageSlugMap (dato, i18n) {
  i18n.locale = defaultLocale
  return dato.pages.reduce((list, page) => {
    i18n.locale = defaultLocale
    list[page.slug] = locales.reduce((out, locale) => {
      i18n.locale = locale
      if (page && page.slug) {
        out[locale] = page.slug
      }
      return out
    }, {})
    return list
  }, {})
}

function transformItem(item) {
  if (item.type === 'link_list' || item.type === 'button_group') {
    item.links = item.links.map(formatLink)
  }
  else if (item.type === 'form') {
    item.form = Object.assign({}, item.form, {
      type: item.form.itemType,
    })
    delete item.form.itemType
  }
  else if (item.type === 'text') {
    const $ = cheerio.load(item.body)
    const outboundLinkRegExp = new RegExp(`^https?:\/\/(?:(?!${URL.replace('.', '\.')}).)+$`)
    $('img').remove()
    $('a').each((i, a) => {
      const $a = $(a)
      if (outboundLinkRegExp.test($a.attr('href'))) {
        $a.attr('data-outbound', 'true').attr('target', '_blank')
      }
      if ($a.attr('target') === '_blank') {
        $a.attr('rel', 'noopener')
      }
    })

    item.body = $('body').html()
  }
  else if (item.type === 'video') {
    if (item.video && item.title) {
      item.video.title = item.title
    }
  }
  return item
}

function pageToJson (page, i18n) {
  const { title, subtitle, hasToc, hasShareButton, hasHotjar } = page

  const coverImage = page.coverImage ? page.coverImage.toMap() : undefined

  const sections = page.sections
  .filter(({ title, items }) => (typeof title === 'string' && items.length > 0))
  .map(({ title, items }) => ({
    title,
    slug: title && slugify(title, { lower: true }),
    items: items.toMap()
      .map(item => ({ ...item, type: item.itemType }))
      .map(item => omit(item, ['id', 'itemType', 'createdAt', 'updatedAt']))
      .map(transformItem)
  }))

  const slug = page.slug ? `${page.slug}/` : '' // makes sure there's always a trailing slash ending each route so we don't get different versions of same page
  const url = `${URL}/${i18n.locale}/${slug}`
  const seo = page.seo && { ...page.seo.toMap(), url }
  const slugI18n = locales.reduce((out, locale) => {
    i18n.withLocale(locale, () => out[locale] = page.slug || '')
    return out
  }, {})
  const tocItems = sections.map(section => pick(section, ['title', 'slug']))

  return { title, subtitle, slug, slugI18n, seo, sections, hasToc, tocItems, coverImage, url, hasShareButton, hasHotjar }
}

function formatLink (link) {
  const { page, theme, title, url } = link
  if (page) {
    return {
      type: 'page',
      title: title || page.title,
      slug: page.slug,
      theme,
    }
  } else {
    return {
      type: 'url',
      title,
      url,
      theme,
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

function notfoundToJson(dato, i18n) {
  return locales.reduce((out, locale) => {
    i18n.locale = locale
    out[locale] = pageToJson(dato['404Page'], i18n)
    return out
  }, {})
}
