let newCreatedUser = null
describe('User', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('new user-validation test ', () => {
    cy.get('a[name=user]').click()
    cy.get('button[name=new-user-button]').click()
    cy.location('pathname').should('equal', '/user/new')

    const random = new Date().getMilliseconds()
    cy.get('input[id=first_name]').type(`autoTestName${random}`)
    cy.get('.v-messages__message')
      .contains('The First Name field may only contain alphabetic characters')
      .should('be.visible')
    cy.get('input[id=last_name]').type(`autoTestLastname${random}`)
    cy.get('.v-messages__message')
      .contains('The Last Name field may only contain alphabetic characters')
      .should('be.visible')
    cy.get('input[id=email]').type(`autotest@test${random}`)
    cy.get('.v-messages__message')
      .contains('The Email field must be a valid email')
      .should('be.visible')

    cy.get('button[name=save-button]').click()
  })

  it('successful new user', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXusers/bulk-create`).as(
      'apiRequest'
    )
    cy.location('pathname').should('equal', '/user/new')
    let random = ''
    const asciiLow = 65
    const asciiHigh = 90
    for (let i = 0; i < 5; i++) {
      const randomAscii = Math.floor(
        Math.random() * (asciiHigh - asciiLow) + asciiLow
      )
      random += String.fromCharCode(randomAscii)
    }
    cy.get('input[id=first_name]').clear().type(`autoTestName${random}`)
    cy.get('input[id=last_name]').clear().type(`autoTestLastname${random}`)
    cy.get('input[id=email]').clear().type(`autotest@test${random}.com`)
    cy.get('button[name=save-button]').click()
    let response = null
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      response = responseBody
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div').contains(response.message).should('be.visible')
      newCreatedUser = responseBody.data[0]
    })
  })
  it('check last created user in datatable', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXusers/list`).as(
      'apiRequest'
    )
    cy.get('a[name=user]').click()
    cy.location('pathname').should('equal', '/user')
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.data.some((d) => d.id === newCreatedUser.id)).to.eq(
        true
      )
    })
    cy.get('.v-data-table').then(($table) => {
      // synchronously query to find length of elements
      expect($table.find('tr').length).to.be.greaterThan(2)
    })
  })
  it('edit user', () => {
    const id = newCreatedUser.id
    cy.get('a[name=user]').click()
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXusers/bulk-update`).as(
      'updateRequest'
    )
    cy.route('GET', `${Cypress.env('api_url')}XXXusers/get?id=${id}`).as(
      'getRequest'
    )
    cy.get(`button[data-testid=edit-button-${id}]`).click()
    cy.location('pathname').should('equal', `/user/${id}`)
    cy.wait('@getRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.data.id).to.eq(id)
    })
    cy.get('input[data-testid=first_name]').should(
      'have.value',
      newCreatedUser.first_name
    )
    cy.get('input[data-testid=last_name]').should(
      'have.value',
      newCreatedUser.last_name
    )
    cy.get('input[data-testid=email]').should(
      'have.value',
      newCreatedUser.email
    )
    cy.get('input[data-testid=first_name]').clear().type('testnameedit')
    // cy.get('input[data-testid=last_name]').type('testlastname')
    cy.get('input[data-testid=email]').clear().type('test1edit@test.com')
    cy.get('button[name=save-button]').click()
    cy.wait('@updateRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
  })
  it.skip('user score', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXusers/bulk-update`).as(
      'apiRequest'
    )
    const id = 1
    cy.get('button[name=edit-button]').click()
    cy.location('pathname').should('equal', `/user/${id}`)
    cy.get('input[id=first_name]').type('testname')
    cy.get('input[id=last_name]').type('testlastname')
    cy.get('input[id=email]').type('test1@test.com')
    cy.get('button[name=save-button]').click()
    cy.wait('@apiRequest')
  })
  it('can export user list', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXusers/list`).as(
      'apiRequest'
    )
    cy.get('a[name=user]').click()
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
    cy.get('button[data-testid=export-button]').click()
  })
})
