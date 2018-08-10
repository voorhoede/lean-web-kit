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

export function onSessionLoaded (cb) {
  $crisp.push(['on', 'session:loaded', cb])
}

/**
 * Hooks to execute after script has been loaded
 *
 */
export function onLoaded () {}

export function onChatOpened (cb) {
  $crisp.push(['on', 'chat:opened', cb])
}

export function onChatClosed (cb) {
  $crisp.push(['on', 'chat:closed', cb])
}

export default {
  onAccepted,
  onSessionLoaded,
  onLoaded,
  onChatOpened,
  onChatClosed,
  script,
}
