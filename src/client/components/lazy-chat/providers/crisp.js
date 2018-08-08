import { crispWebsiteId } from '../../../static/data/app.json'

export const script = 'https://client.crisp.chat/l.js'

/**
 * Hooks to prepare for loading of script
 *
 */
export function onAccepted () {
  window.CRISP_WEBSITE_ID = crispWebsiteId
  window.$crisp = []
  $crisp.push(['do', 'chat:open'])
  $crisp.push(['on', 'chat:opened', onOpened])
  $crisp.push(['on', 'chat:closed', onClosed])
}

/**
 * Hooks to execute after script has been loaded
 *
 */
export function onLoaded () {}

function onOpened () {
  ga('send', 'event', { eventCategory: 'chat', eventAction: 'click', eventLabel: 'opened' })
}

function onClosed () {
  ga('send', 'event', { eventCategory: 'chat', eventAction: 'click', eventLabel: 'closed' })
}

export default {
  onAccepted,
  onLoaded,
  script,
}
