const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('Deve renderizar um modal de criação de conta ao clicar no botão de cta', () => {
    cy.visit(APP_URL)

    cy.get('#cta-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Deve renderizar um modal de criação de conta ao clicar no botão criar conta do header', () => {
    cy.visit(APP_URL)

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('Deve renderizar um modal de login de conta ao clicar no botão login do header', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')
  })

  it('Deve logar com email e senha', () => {
    cy.visit(APP_URL)
    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('joao@gmail.com')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
  })

  it('Deve mostrar erro ao inserir email invalido', () => {
    cy.visit(APP_URL)
    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('emailInvalido.com')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.get('#email-error')
  })

  it('Deve sair do sistema corretamente', () => {
    cy.visit(APP_URL)
    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('joao@gmail.com')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')

    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
