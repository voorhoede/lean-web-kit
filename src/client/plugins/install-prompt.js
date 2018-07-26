window.addEventListener('beforeinstallprompt', (event) => {
  // Read this to get a better understanding of install prompts:
  // https://developers.google.com/web/fundamentals/app-install-banners/
  ga('send', 'event', 'install', 'available')
  event.preventDefault()
})
window.addEventListener('appinstalled', () => {
  ga('send', 'event', 'install', 'installed')
})
