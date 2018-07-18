# Lazy chat

Lazy chat adds a button to the page to trigger a third-party chat script asynchronously.

## Supported chat scripts

Currently only [Crisp.chat](https://crisp.chat) is supported

## Lifecycle

1. User clicks chat: `isRequested = true`
1. User is asked to accept Terms & Conditions
1. a. User declines: `isRequested = false`
1. b. User accepts: `isAccepted = true`
1. Script loads
1. Script is loaded: `isLoaded = true`
