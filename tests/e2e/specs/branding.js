describe('Branding', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('input validation branding', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXbranding/update`).as(
      'apiRequest'
    )
    cy.get('a[name=Branding]').click()
    cy.get('button[id=save-button]').click()
    cy.get('.v-messages__message')
      .contains('The Term Link field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Company Address field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Logo field is required')
      .should('be.visible')
    cy.shouldBeCalled('@apiRequest', 0)
  })
  it('can update branding', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXbranding/update`).as(
      'apiRequest'
    )
    cy.get('input[data-testid=privacy_url]')
      .clear()
      .type('autotest_privacy_url')
    cy.get('input[id=term_url]').clear().type('autotest_term_url')
    cy.get('textarea[id=address]').clear().type('autotest_address')
    cy.get('input[id=support_email]').clear().type('autosupport_email@test.com')
    const fixtureFile = 'vuetify-logo.png'
    cy.get('input[data-testid="file-input"]').attachFile(fixtureFile)
    // cy.get('input[data-testid=primary-color]').clear().type('#BA68C8')
    cy.get('.v-messages__message').should('not.be.visible')
    cy.get('button[id=save-button]').click()
    cy.shouldBeCalled('@apiRequest', 1)
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
    })
  })
})
