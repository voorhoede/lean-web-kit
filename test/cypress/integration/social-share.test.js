const socialShareButton = '[data-test="socialShareButton"]'
const socialShareLinks = '[data-test="socialShareLinks"]'
const socialShareSnackbar = '[data-test="socialShareSnackbar"]'

describe('Social share', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Social share expands on click and collapse on click.', () => {
    cy.get(socialShareButton).click()
    cy.get(socialShareLinks).children().each(link => {
      cy.wrap(link).should('be.visible')
    })
    cy.get(socialShareButton).click()
    cy.get(socialShareLinks).children().each(link => {
      cy.wrap(link).should('not.be.visible')
    })
  })

  it('Social share expands on enter and collapse on enter.', () => {
    cy.get(socialShareButton).focus()
    cy.get(socialShareButton).trigger('click')
    cy.get(socialShareLinks).children().each(link => {
      cy.wrap(link).should('be.visible')
    })
    cy.get(socialShareButton).trigger('click')
    cy.get(socialShareLinks).children().each(link => {
      cy.wrap(link).should('not.be.visible')
    })
  })

  it('Social share links should collapse when a link is clicked.', () => {
    cy.get(socialShareButton).click()
    cy.get(`${socialShareButton}:first-child`).click()
    cy.get(socialShareLinks).children().each(link => {
      cy.wrap(link).should('not.be.visible')
    })
  })

  it('Social share sets focus on its button after collapse.', () => {
    cy.get(socialShareButton).click()
    cy.get(socialShareButton).click()
    cy.focused().should('have.attr', 'data-test', 'socialShareButton')
  })

  it('Shows a message (snackbar) after selecting "Copy to Clipboard".', () => {
    cy.get(socialShareButton).click()
    cy.get('button.copy-to-clipboard').click()
    cy.get(socialShareSnackbar).should('be.visible')
  })
})