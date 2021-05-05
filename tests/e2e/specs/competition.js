let newCreatedCompetition = null
describe('Competition', () => {
  before(() => {
    cy.login()
  })
  after(() => {
    cy.logout()
  })
  it('new competition-validation test', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXcompetitions/create`).as(
      'apiRequest'
    )
    cy.get('a[name=competition]').click()
    cy.get('button[name=new-button]').click()
    cy.location('pathname').should('equal', '/competition/new')

    cy.get('input[data-testid=name]').clear()
    cy.get('input[data-testid=space_count]').clear()
    cy.get('input[data-testid=score_threshold]').clear()
    cy.get('button[name=save-button]').click()

    cy.get('.v-messages__message')
      .contains('The Name field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Spaces field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Score field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Image field is required')
      .should('be.visible')
    cy.get('.v-messages__message')
      .contains('The Start Date/Time field is required')
      .should('be.visible')
    cy.shouldBeCalled('@apiRequest', 0)
  })
  it('new competition-successful test', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXcompetitions/create`).as(
      'apiRequest'
    )
    cy.location('pathname').should('equal', '/competition/new')

    cy.get('input[data-testid=name]').clear().type('autotest-name')
    cy.get('input[data-testid=space_count]').clear().type('3')
    cy.get('input[data-testid=score_threshold]').clear().type('10')

    cy.get('[data-testid=type]').parent().click()
    cy.get('.v-menu__content').contains('Fixed').click()

    cy.get('[data-testid=Period]').parent().click()
    cy.get('.v-menu__content').contains('Weekly').click()

    cy.get('input[data-testid=startdate-input]').click()
    const currentDate = new Date()
    currentDate.setMinutes(
      currentDate.getMinutes() + (10 - (currentDate.getMinutes() % 10))
    )
    cy.get('.v-btn__content').contains(currentDate.getDate()).parent().click()
    cy.get('.v-time-picker-clock__item')
      .contains(currentDate.getHours())
      .parent()
      .click()

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get('[data-testid=time-picker]').within(($timepicker) => {
      cy.get('.v-time-picker-clock__item')
        .contains(currentDate.getMinutes())
        .parent()
        .click()
    })
    cy.get('button').contains('OK').click()
    const fixtureFile = 'vuetify-logo.png'
    cy.get('input[data-testid="file-input"]').attachFile(fixtureFile)
    cy.get('button[name=save-button]').click()

    cy.get('.v-messages__message').should('not.be.visible')
    cy.shouldBeCalled('@apiRequest', 1)
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.status).to.eq('success')
      cy.get('.success > div')
        .contains(responseBody.message)
        .should('be.visible')
      newCreatedCompetition = responseBody.data
    })
  })
  it('list competitions ', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXcompetitions/list`).as(
      'apiRequest'
    )
    cy.get('a[name=competition]').click()
    cy.shouldBeCalled('@apiRequest', 1)
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(
        responseBody.data.some((d) => d.id === newCreatedCompetition.id)
      ).to.eq(true)
    })
    cy.get('.v-data-table').then(($table) => {
      // synchronously query to find length of elements
      expect($table.find('tr').length).to.be.greaterThan(2)
    })
  })
  it('can edit competition', () => {
    const id = newCreatedCompetition.id
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXcompetitions/update`).as(
      'updateRequest'
    )
    cy.route('GET', `https://xxx/get?id=${id}`).as('getRequest')
    cy.get(`button[data-testid=edit-button-${id}]`).click()
    cy.location('pathname').should('equal', `/competition/${id}`)
    cy.wait('@getRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
      expect(responseBody.data.id).to.eq(id)
    })
    cy.get('input[data-testid=name]').type('testname')
    cy.get('textarea[data-testid=description]').type('test description')
    cy.get('button[name=save-button]').click()
    cy.wait('@updateRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
  })
  it('can create new prize', () => {
    cy.server()
    cy.route('POST', `${Cypress.env('api_url')}XXXprizes/create`).as(
      'createRequest'
    )

    cy.location('pathname').should(
      'equal',
      `/competition/${newCreatedCompetition.id}`
    )
    cy.get('button[data-testid=new-prize-button]').click()

    cy.wait('@createRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
  })
  it('can export competition list', () => {
    cy.server()
    cy.route('GET', `${Cypress.env('api_url')}XXXcompetitions/list`).as(
      'apiRequest'
    )
    cy.get('a[name=competition]').click()
    cy.location('pathname').should('equal', `/competition`)
    cy.wait('@apiRequest').then(({ requestBody, responseBody, status }) => {
      expect(status).to.eq(200)
    })
    cy.get('button[data-testid=export-button]').click()
  })
})
