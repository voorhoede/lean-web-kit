import { crispWebsiteId } from '../../../src/client/static/data/app.json'

const chatButton = '[data-test="lazyChatButton"]'
const optInDialog = '[data-test="lazyChatOpt"]'
const optInAgreeButton = '[data-test="optInAgreeButton"]'
const optInDeclineButton = '[data-test="optInDeclineButton"]'
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
      cy.focused().should('have.attr', 'data-test', 'optInAgreeButton')
    })

    it('If I have already accepted the T&C, I should not be asked again when I hit the chat button.', () => {
      localStorage.setItem('terms_conditions', true);
      cy.get(chatButton).click()
      cy.get(optInDialog).should('not.exist')
    })

    it('If I decline the T&C, the opt-in dialog should disapear.', () => {
      cy.clearLocalStorage('terms_conditions')
      cy.get(chatButton).click()
      cy.get(optInDeclineButton).click()
      cy.get(optInDialog).should('not.exist')
      cy.focused().should('have.attr', 'data-test', 'lazyChatButton')
    })

    it('The Crisp client is only present if the T&C is accepted.', () => {
      // Can't make a variable out of "cy.get('.crisp-client')"
      // because it does not exists until "cy.get(optInAgreeButton).click()" is ran.

      // The two "cy.get('.crisp-client').should('not.exist')" tests are simply there to
      // make sure that the chat is not rendered before the user accepts the T&C.

      cy.clearLocalStorage('terms_conditions')
      cy.get('.crisp-client').should('not.exist')
      cy.get(chatButton).click()
      cy.get('.crisp-client').should('not.exist')
      cy.get(optInAgreeButton).click()
      cy.get('.crisp-client').should('exist')
    })

    it('Sets the focus on the message input when opening the Crisp client.', () => {
      cy.clearLocalStorage('terms_conditions')
      cy.get(chatButton).click()
      cy.get(optInAgreeButton).click()
      cy.focused().should('have.attr', 'name', 'message')
    })
  }
})
