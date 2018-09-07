window.addEventListener('beforeinstallprompt', (event) => {
  // Read this to get a better understanding of install prompts:
  // https://developers.google.com/web/fundamentals/app-install-banners/
  typeof window.ga !== 'undefined'
    ? ga('send', 'event', 'install', 'available')
    : window.ga = function () {}
  event.preventDefault()
})
window.addEventListener('appinstalled', () => {
  typeof window.ga !== 'undefined'
  ? ga('send', 'event', 'install', 'installed')
  : window.ga = function () {}
})
