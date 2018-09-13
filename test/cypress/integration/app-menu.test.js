const appHeaderMenu = '[data-test="appHeaderMenu"]'
const appHeaderMenuButton = '[data-test="appHeaderMenuButton"]'
const appHeaderActionButton = '[data-test="appHeaderActionButton"]'

describe('App menu', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport('ipad-mini')
  })

  it('When I hit the menu button, the navigation should toggle on/off.', () => {
    cy.get(appHeaderMenuButton).click()
    cy.get(appHeaderMenu).should('be.visible')
    cy.get(appHeaderMenuButton).click()
    cy.get(appHeaderMenu).should('be.hidden')
  })

  it('When I press enter on the menu button, the navigation should toggle on/off.', () => {
    cy.get(appHeaderMenuButton).focus()
    cy.get(appHeaderMenuButton).trigger('click')
    cy.get(appHeaderMenu).should('be.visible')
    cy.get(appHeaderMenuButton).focus()
    cy.get(appHeaderMenuButton).trigger('click')
    cy.get(appHeaderMenu).should('be.hidden')
  })

  it('The mobile navigation should not contain a primary action button.', () => {
    cy.get(appHeaderMenuButton).click()
    cy.get(appHeaderActionButton).should('not.exist')
  })
})
