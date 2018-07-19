export const isSupported = (() => {
  if (process.server || !'localStorage' in window) {
    return false
  }
  try {
    // Check if localStorage is supported
    const uid = new Date()
    localStorage.setItem(uid, uid)
    const success = localStorage.getItem(uid) == uid

    // Clean up localStorage
    localStorage.removeItem(uid)

    return success
  }
  catch (exception) {
    return false
  }
})()

export default {
  isSupported
}
