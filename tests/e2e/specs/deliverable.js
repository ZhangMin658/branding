describe('Deliverable', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('list deliverables', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXdeliverables/list`).as(
      'apiRequest'
    )
    cy.get('a[name=deliverable]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
    })
    cy.get('.v-data-table').then(($table) => {
      // synchronously query to find length of elements
      expect($table.find('tr').length).to.be.greaterThan(4)
    })
  })
})
