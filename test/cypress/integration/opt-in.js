import { script as chatScriptUrl }from '../../../src/client/components/lazy-chat/providers/crisp'

describe('Opt in', function() {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="optInAccept"]').should('be.visible');
  });

  it('should show opt-in again if declined', function() {
    cy.get('[data-test="optInDecline"]').click();
    cy.reload();
    cy.get('[data-test="optInDecline"]').should('be.visible');
  });
});


describe('Chat', function() {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="optInDecline"]').should('be.visible');
    cy.get('[data-test="optInDecline"]').click();
  });

  it('should let me type 3 times aapje', function() {
    cy.get('[data-test="chatButton"]').click();
    cy.get('[data-test="optInAccept"]').click();
    cy.get('textarea[name="message"]').type('aapje');
    cy.get('textarea[name="message"]').type('aapje');
    cy.get('textarea[name="message"]').type('aapje');
    cy.get('textarea[name="message"]').should('have.value', 'aapjeaapjeaapje')
  })
});
