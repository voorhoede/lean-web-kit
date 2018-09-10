import { crispWebsiteId } from '../../../static/data/app.json'

export const script = 'https://client.crisp.chat/l.js'

/**
 * By default Crisp only accepts a single callback on an event, like on `chat:closed`.
 * If you push another callback on the same event, the previous callback is removed.
 * This allows multiple listeners per event and calls them all when the event is fired.
 */
const listeners = {
  'chat:opened': [],
  'chat:closed': [focusOnChatButton],
}
function addListener(eventName, listener) {
  listeners[eventName].push(listener)
}
function callListeners(eventName) {
  return () => listeners[eventName].forEach(listener => listener())
}

/**
 * By default Crisp causes focus loss when chat is closed.
 * This puts focus on the chat button.
 */
let focusInterval
function focusOnChatButton () {
  function focusOnInterval () {
    const chatButton = document.querySelector('#crisp-chatbox a[data-maximized="false"]')
    const isVisisble = (window.getComputedStyle(chatButton).display !== 'none')
    if (isVisisble) {
      chatButton.focus()
      window.clearInterval(focusInterval)
    }
  }
  focusInterval = window.setInterval(focusOnInterval, 500)
}

/**
 * Hooks to prepare for loading of script
 *
 */
export function onAccepted () {
  window.CRISP_WEBSITE_ID = crispWebsiteId
  window.$crisp = []
  $crisp.push(['safe', true]) // ignore shims of native JS methods
  $crisp.push(['do', 'chat:open'])
  $crisp.push(['on', 'chat:opened', callListeners('chat:opened')])
  $crisp.push(['on', 'chat:closed', callListeners('chat:closed')])
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
  addListener('chat:opened', cb)
}

export function onChatClosed (cb) {
  addListener('chat:closed', cb)
}

export default {
  onAccepted,
  onSessionLoaded,
  onLoaded,
  onChatOpened,
  onChatClosed,
  script,
}
