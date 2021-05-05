function login(username, password) {
  cy.visit('http://localhost:3000/login')
  cy.get('input[name=username]').clear().type(username)
  cy.get('input[type=password]').clear().type(password)
  return cy.get('button[name=login-button]').click()
}

function logout() {
  cy.get('button[name=profile-button]').click()
  return cy.get('div[name=logout]').click()
}

describe('Login', () => {
  it('fails to access protected resource', () => {
    cy.request({
      url: `${Cypress.env('api_url')}XXXusers/list`,
      failOnStatusCode: false,
    })
      .its('status')
      .should('equal', 401)
  })
  it('Does not log in with invalid user', () => {
    cy.visit('http://localhost:3000/user')
    cy.location('pathname').should('equal', '/login')

    login('username', 'wrong-pass')

    // still on /login page plus an error is displayed
    cy.location('pathname').should('equal', '/login')
    // cy.contains('.error', 'Password not match!').should('be.visible')
    cy.get('div').contains('User Not Found!').should('be.visible')
  })
  it('Does not log in with invalid password', () => {
    cy.visit('http://localhost:3000/user')
    cy.location('pathname').should('equal', '/login')

    login('admin', 'wrong-pass')

    // still on /login page plus an error is displayed
    cy.location('pathname').should('equal', '/login')
    // cy.contains('.error', 'Password not match!').should('be.visible')
    cy.get('.error > div').contains('Password not match!').should('be.visible')
  })
  it('can log in', () => {
    login('admin', '123').should(() => {
      expect(localStorage.getItem('access_token').length).to.be.greaterThan(0)
      expect(localStorage.getItem('user_data')).to.be.not.eq(null)
    })
    cy.location('pathname').should('equal', '/dashboard')
  })
  it('can logout ', () => {
    logout().should(() => {
      expect(localStorage.getItem('access_token')).to.be.eq(null)
      expect(localStorage.getItem('user_data')).to.be.eq(null)
    })
  })
})
