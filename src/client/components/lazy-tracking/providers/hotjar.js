import { hotjarId } from '../../../static/data/app.json'

const hotjarSnippetVersion = 6

export const script = `https://static.hotjar.com/c/hotjar-${hotjarId}.js?sv=${hotjarSnippetVersion}`

// https://help.hotjar.com/hc/en-us/articles/115012439167-Suppressing-Text-in-Recordings
export const obfuscateAttribute = 'data-hj-suppress=""'

/**
 * Hooks to prepare for loading of script
 *
 */
export function onAccepted () {
  window.hj = window.hj || function () {
    window.hj.q = window.hj.q || []
    window.hj.q.push(arguments)
  }
  window._hjSettings = {
    hjid: hotjarId,
    hjsv: hotjarSnippetVersion
  }
}

/**
 * Hooks to execute after script has been loaded
 *
 */
export function onLoaded () {}

/**
 * Hooks to execute after script is destroyed
 *
 */
export function onDestroyed () {}

export default {
  obfuscateAttribute,
  onAccepted,
  onLoaded,
  onDestroyed,
  script,
}
