# Lazy chat

Lazy chat adds a button to the page to trigger a third-party chat script asynchronously.

### Supported chat scripts

Currently only [Crisp.chat](https://crisp.chat) is supported. Take a look at the separate module, it ought to be easy to write a similar module for other providers.

## Features

This feature list is based on [Crisp.chat](https://crisp.chat), in case you choose to use a different chat provider please refer to their documentation.

- Advanced messaging options with support for emoji's, gifs and file transfer.
- Contact history, email integration, live chat & much more.

### Lifecycle

1. User clicks chat: `isRequested = true`
1. User is asked to accept Terms & Conditions
1. a. User declines: `isRequested = false`
1. b. User accepts: `isAccepted = true` and provider `onAccepted()` hook is executed
1. Script loads
1. Script is loaded: `isLoaded = true` and provider `onLoaded()` hook is executed
