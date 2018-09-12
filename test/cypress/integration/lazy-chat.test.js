import { crispWebsiteId } from '../../../src/client/static/data/app.json'

const chatButton = '[data-test="lazyChatButton"]'
const optInDialog = '[data-test="lazyChatOpt"]'
const optInAgreeButton = '[data-test="optInAgreeButton"]'
const chatIsEnabled = !!crispWebsiteId

describe('Lazy chat', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('The Lazy Chat button is only present if a Crisp ID is set.', () => {
    const button = cy.get(chatButton)
    if (chatIsEnabled) {
      button.should('be.visible')
    } else {
      button.should('not.exist')
    }
  })

  if (chatIsEnabled) {
    it("When I haven't accepted the T&C yet, I'm prompt to accept the T&C when I hit the chat button.", () => {
      cy.clearLocalStorage('terms_conditions')
      cy.get(chatButton).click()
      cy.get(optInDialog).should('be.visible')
    })

    it('If I have already accepted the T&C, I should not be asked again when I hit the chat button.', () => {
      localStorage.setItem('terms_conditions', true);
      cy.get(chatButton).click()
      cy.get(optInDialog).should('not.exist')
    })

    it('The Crisp client is only present if the T&C is accepted.', () => {
      cy.get(chatButton).click()
      cy.get(optInAgreeButton).click()
      cy.get('.crisp-client').should('exist')
    })

    it('Sets the focus on the message input when opening the Crisp client.', () => {
      cy.get(chatButton).click()
      cy.get(optInAgreeButton).click()
      cy.focused().should('have.attr', 'name', 'message')
    })
  }
})
