# Test

This project uses [Cypress](https://www.cypress.io/) for end-to-end integration testing.

## Structure

The files are organised using the default [Cypress folder structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure):

```
cypress/
  fixtures/
  integration/
  plugins/
  support/
```

## Test directive

If you need a selector to address a specific DOM element, you can use the `v-test` directive:

```vue
<ANY v-test:myTestSelector>
```

This adds a `data-test="myTestSelector"` attribute to the element in the dev and test environment, which you can use in your tests:

```js
// integration/my-something.test.js
cy.get('[data-test="myTestSelector"]').should('be.visible')
```
