// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
    it('Visits the homepage', () => {
        cy.visit('/')
        cy.contains('h1', 'Welcome to your one stop shop for the latest and greatest crypto coin prices')
    })
})

describe('Favorites', () => {
    it('Visits the favorites', () => {
        cy.visit('/favorites')
        cy.contains('h1', 'Favorites')
        cy.contains('h1', 'Vuelidate Form verification')

    })
})

describe('etherium', () => {
  /// <reference types="Cypress" />
  it('shows bar chart', () => {
  cy.visit('/etherium')
  cy.get('#line-chart')
    .should('be.visible')
    .and(canvas => {
      // we can assert anything about the chart really
      expect(canvas.height()).to.be.greaterThan(200)
    })
  })
})

describe('Litecoin', () => {
  /// <reference types="Cypress" />
  it('shows bar chart', () => {
  cy.visit('/litecoin')
  cy.get('#line-chart')
    .should('be.visible')
    .and(canvas => {
      // we can assert anything about the chart really
      expect(canvas.height()).to.be.greaterThan(200)
    })
  })
})

describe('bitcoincash', () => {
  /// <reference types="Cypress" />
  it('shows bar chart', () => {
  cy.visit('/bitcoincash')
  cy.get('#line-chart')
    .should('be.visible')
    .and(canvas => {
      // we can assert anything about the chart really
      expect(canvas.height()).to.be.greaterThan(200)
    })
  })
})

describe('bitcoin', () => {
  /// <reference types="Cypress" />
  it('shows bar chart', () => {
  cy.visit('/bitcoin')
  cy.get('#line-chart')
    .should('be.visible')
    .and(canvas => {
      // we can assert anything about the chart really
      expect(canvas.height()).to.be.greaterThan(200)
    })
  })
})
