const identityLink = '[data-test="appHeaderIdentity"]'

describe('App menu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should always show the logo', () => {
    cy.get(identityLink).should('be.visible')
  })
})
