describe('Group', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('new parent group', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXgroups/create`).as(
      'apiRequest'
    )
    cy.get('a[name=group]').click()
    cy.get('button[id=new-button]').click()
    cy.get('input[data-testid=name]').type('autotest parent group')
    cy.get('button[data-testid=save-button]').click()

    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
    })
  })
  it('new default parent group', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXgroups/create`).as(
      'apiRequest'
    )
    cy.get('a[name=group]').click()
    cy.get('button[id=new-button]').click()
    cy.get('input[data-testid=name]').type('autotest parent group')
    cy.get('input[data-testid=default-group-switch]').check({ force: true })
    cy.get('button[data-testid=save-button]').click()

    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
    })
  })
  it('can delete group', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXgroups/delete`).as(
      'apiRequest'
    )
    const id = 3
    cy.get('a[name=group]').click()
    cy.get(`button[data-testid=delete-group-${id}]`).click()
    cy.get('input[data-testid=name]').type('autotest parent group')
    cy.get('button[data-testid=save-button]').click()
    cy.get('button[data-testid=delete-save-button]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
    })
  })
})
