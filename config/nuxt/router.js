/**
 * @see https://nuxtjs.org/api/configuration-router
 */
module.exports = {
  scrollBehavior,
}

/**
 * Behavior to scroll page on load, in order of priority:
 * - Scrolls to element matching hash in URL.
 * - Scrolls to last "saved position".
 * - Scrolls to top if `scrollToTop` is set to true.
 * - Retains current scroll position.
 *
 * Directly stolen from the Nuxt documentation:
 * @see https://nuxtjs.org/api/configuration-router/#scrollbehavior
 */
function scrollBehavior (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}
