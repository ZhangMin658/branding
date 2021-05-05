import 'cypress-file-upload'
// ***********************************************
// This example index.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('shouldBeCalled', (alias, timesCalled) => {
  const aliasname = alias.substring(1)
  const requests = cy.state('requests') || []

  expect(
    requests.filter((call) => call.alias === aliasname),
    `${aliasname} should have been called ${timesCalled} times`
  ).to.have.length(timesCalled)
})

Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:3000/login')
  cy.get('input[name=username]').clear().type(Cypress.env('username'))
  cy.get('input[type=password]').clear().type(Cypress.env('password'))
  cy.get('button[name=login-button]')
    .click()
    .should(() => {
      expect(localStorage.getItem('access_token').length).to.be.greaterThan(0)
      expect(localStorage.getItem('user_data')).to.be.not.eq(null)
    })
  cy.location('pathname').should('equal', '/dashboard')
})

Cypress.Commands.add('logout', () => {
  cy.get('button[name=profile-button]').click()
  cy.get('div[name=logout]')
    .click()
    .should(() => {
      expect(localStorage.getItem('access_token')).to.be.eq(null)
      expect(localStorage.getItem('user_data')).to.be.eq(null)
    })
})
