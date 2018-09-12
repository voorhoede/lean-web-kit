import { crispWebsiteId } from '../../../src/client/static/data/app.json'

const lazyChatButtonIdentity = '[data-test="lazyChatButtonIdentity"]'
const lazyChatOptInIdentity = '[data-test="lazyChatOptInIdentity"]'

describe('Lazy chat', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is only present if Crisp ID is set', () => {
    if (!!crispWebsiteId) {
      cy.get(lazyChatButtonIdentity).should('be.visible')
    } else {
      cy.get(lazyChatButtonIdentity).should('not.exist')
    }
  })

  it('asked me to accept the T&C when I hit the chat button ("terms_conditions" === false)', () => {
    cy.clearLocalStorage()
    cy.get(lazyChatButtonIdentity).click()
    cy.get(lazyChatOptInIdentity).should('be.visible')
  })

  it('dit not ask me to accept the T&C when I hit the chat button ("terms_conditions" === true)', () => {
    localStorage.setItem('terms_conditions', true);
    cy.get(lazyChatButtonIdentity).click()
    cy.get(lazyChatOptInIdentity).should('not.exist')
  })

  it('is only present if T&C is accepted', () => {
    cy.get(lazyChatButtonIdentity).click()
    cy.get(`${lazyChatOptInIdentity} .opt-in__buttons`)
      .children('button.button--primary')
      .click()
    cy.get('.crisp-client').should('exist')
  })

  it('setted the focus correctly', () => {
    cy.get(lazyChatButtonIdentity).click()
    cy.get(`${lazyChatOptInIdentity} .opt-in__buttons`)
      .children('button.button--primary')
      .click()
      cy.focused().should('have.attr', 'name', 'message')
  })
})
