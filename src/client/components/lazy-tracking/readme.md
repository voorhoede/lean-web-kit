# Lazy tracking

Lazy tracking adds a button to the page to trigger a third-party tracking script asynchronously.

### Supported tracking scripts

Currently only [Hotjar](https://hotjar.com) is supported. Take a look at the separate module, it ought to be easy to write a similar module for other providers.

### Supressing recording of sensitive data

In the `hotjar.js` provider the data attribute to obfuscate sensitive data is defined. For more info, take a look at the [Hotjar documentation of this functionality](https://help.hotjar.com/hc/en-us/articles/115012439167-Suppressing-Text-in-Recordings)

### Lifecycle

1. Page is flagged for tracking.
1. If user does not have DoNotTrack === "1" `isRequested = true`
1. User is asked to accept Terms & Conditions
1. a. User declines: `isRequested = false`
1. b. User accepts: `isAccepted = true` and provider `onAccepted()` hook is executed
1. Script loads
1. Script is loaded: `isLoaded = true` and provider `onLoaded()` hook is executed
1. User navigates to page without tracking:  provider `onDestroyed()` hook is executed
