import { googleAnalyticsTrackingId } from '../static/data/app.json'

function trackInstalledEvent(eventName) {
  if (googleAnalyticsTrackingId) {
    ga('send', 'event', 'install', eventName)
  }
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Read this to get a better understanding of install prompts:
  // https://developers.google.com/web/fundamentals/app-install-banners/
  trackInstalledEvent('available')
  event.preventDefault()
})
window.addEventListener('appinstalled', () => trackInstalledEvent('installed'))
