import { emailAddress } from '../../../src/client/static/data/app.json'

const emailForm = '[data-test="emailForm"]'
const emailFormField = '[data-test="emailFormField"]'

describe('App menu', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.server()
    cy.route({
      method: 'POST',
      url: `https://formspree.io/${ emailAddress }`,
      response: {
        redirect: '/en/features/'
      }
    })
  })

  it('Test', () => {
    cy.get(emailFormField).type('test@voorhoede.nl')
    cy.get(emailForm).submit()
  })
})
