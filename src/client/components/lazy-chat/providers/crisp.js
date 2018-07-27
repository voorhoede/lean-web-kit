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
}

/**
 * Hooks to execute after script has been loaded
 *
 */
export function onLoaded () {}

export default {
  onAccepted,
  onLoaded,
  script,
}
