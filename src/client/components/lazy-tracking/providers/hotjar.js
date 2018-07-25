import { hotjarId } from '../../../static/data/app.json'

const hotjarSnippetVersion = 6

export const script = `https://static.hotjar.com/c/hotjar-${hotjarId}.js?sv=${hotjarSnippetVersion}`

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
export function onDestroyed () {
  window.hj = {}
}

export default {
  onAccepted,
  onLoaded,
  onDestroyed,
  script,
}
