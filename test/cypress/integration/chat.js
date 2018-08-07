const OPT_IN_DECLINE_BUTTON = '[data-test="optInDecline"]';
const OPT_IN_ACCEPT_BUTTON = '[data-test="optInAccept"]';
const LAZY_CHAT_BUTTON = '[data-test="lazyChatButton"]';
const LAZY_CHAT_TEXTAREA = 'textarea[name="message"]';

describe('Chat', function() {
  beforeEach(() => {
    cy.visit('/');
    cy.get(OPT_IN_DECLINE_BUTTON).should('be.visible');
  });

  it('should ask me to accept tos if I hit the chat button, without accepting it earlier', function() {
    cy.get(OPT_IN_DECLINE_BUTTON).click();
    cy.get(LAZY_CHAT_BUTTON).click();
    cy.get(OPT_IN_ACCEPT_BUTTON).should('be.visible');
  });

  it('should let me chat if I accept tos', function() {
    cy.get(OPT_IN_ACCEPT_BUTTON).click();
    cy.get(LAZY_CHAT_BUTTON).click();
    cy.get(OPT_IN_ACCEPT_BUTTON).should('not.be.visible');
    cy.get(LAZY_CHAT_TEXTAREA).should('be.visible')
  });

  it('should let me type 3 times aapje', function() {
    cy.get(OPT_IN_ACCEPT_BUTTON).click();
    cy.get(LAZY_CHAT_BUTTON).click();
    cy.get(LAZY_CHAT_TEXTAREA).type('aapje');
    cy.get(LAZY_CHAT_TEXTAREA).type('aapje');
    cy.get(LAZY_CHAT_TEXTAREA).type('aapje');
    cy.get(LAZY_CHAT_TEXTAREA).should('have.value', 'aapjeaapjeaapje')
  })
});
