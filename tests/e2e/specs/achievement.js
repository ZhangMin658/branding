let newCreatedAchievement = null
describe('Achievement', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('new achievement ', () => {
    cy.get('a[name=achievement]').click()
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXachievements/create`).as(
      'apiRequest'
    )
    cy.get('button[name=new-button]').click()
    cy.location('pathname').should('equal', '/achievement/new')
    cy.get('input[data-testid=name]').type('testname')
    cy.get('textarea[data-testid=description]').type('test description')
    cy.get('button[name=save-button]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
      newCreatedAchievement = responseBody.data
    })
  })
  it('check last created achievement in datatable', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXachievements/list`).as(
      'apiRequest'
    )
    cy.get('a[name=achievement]').click()
    cy.location('pathname').should('equal', '/achievement')
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(
        responseBody.data.some((d) => d.id === newCreatedAchievement.id)
      ).to.eq(true)
    })
    cy.get('.v-data-table').then(($table) => {
      // synchronously query to find length of elements
      expect($table.find('tr')).to.be.greaterThan(2)
    })
  })
  it('edit achievement', () => {
    const id = newCreatedAchievement ? newCreatedAchievement.id : 1
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXachievements/update`).as(
      'apiRequest'
    )
    cy.route(
      'GET',
      `${Cypress.env('api_url')}XXXachievements/get?id=${id}`
    ).as('getRequest')
    cy.get(`button[data-testid=edit-button-${id}]`).click()
    cy.location('pathname').should('equal', `/achievement/${id}`)
    cy.wait('@getRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
    cy.get('input[data-testid=name]').type('testname')
    cy.get('textarea[data-testid=description]').type('test description')
    cy.get('button[name=save-button]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
  })
  it('can export achievement list', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXachievements/list`).as(
      'apiRequest'
    )
    cy.get('a[name=achievement]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
    cy.get('button[data-testid=export-button]').click()
  })
  it('can delete achievement', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXachievements/delete`).as(
      'apiRequest'
    )
    const id = newCreatedAchievement ? newCreatedAchievement.id : 1
    cy.get(`button[data-testid=delete-button-${id}]`).click()
    cy.get('body').then(($el) => {
      cy.wrap($el).get('.v-dialog--active').should('be.visible')
      cy.wrap($el).get('button[data-testid=ok-button]').click()
    })
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
    })
  })
})
