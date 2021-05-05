describe('Email', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('list email configs ', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXemail-config/list`).as(
      'apiRequest'
    )
    cy.get('a[name=Email]').click()
    cy.wait('@apiRequest')
    cy.get('.v-data-table').then(($table) => {
      // synchronously query to find length of elements
      expect($table.find('tr').length).to.be.greaterThan(4)
    })
  })
  it('can export email list', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXemail-config/list`).as(
      'apiRequest'
    )
    cy.get('a[name=Email]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
    cy.get('button[data-testid=export-button]').click()
  })
})
