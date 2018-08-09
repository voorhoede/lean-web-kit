import { crispWebsiteId } from '../../../static/data/app.json'

export const script = 'https://client.crisp.chat/l.js'

/**
 * Hooks to prepare for loading of script
 *
 */
export function onAccepted (cb) {
  window.CRISP_WEBSITE_ID = crispWebsiteId
  window.$crisp = []
  $crisp.push(['do', 'chat:open'])
}

export function listenToOpener (cb) {
  $crisp.push(['on', 'session:loaded', cb])
}

export default {
  onAccepted,
  listenToOpener,
  script,
}
