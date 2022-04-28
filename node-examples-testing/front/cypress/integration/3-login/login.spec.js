/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Login', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/login');
  });


  it('displays form', () => {
    cy.get('#username').type('mv-garcia');
    cy.get('#password').type('isis3710');

    cy.get('.btn.btn-primary').click();
    //TODO expect here
    cy.request('POST', 'http://localhost:3000/api/auth/login', { username: 'mv-garcia', password: 'isis3710' }).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.body).to.have.property('token') // true
  }
)

  });

  it('error login', () => {
    cy.get('#username').type('login');
    cy.get('#password').type('isis3710');

    cy.get('.btn.btn-primary').click();
    //TODO expect here
    cy.request({method:'POST', url:'http://localhost:3000/api/auth/login', failOnStatusCode: false}, { username: 'login', password: 'isis3710' }).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.status).to.eq(401)
    expect(response.body).to.have.property('success', false) // true
    expect(response.body).to.have.property('msg', "Incorrect username and/or password") // true
  }
)

  });

  //Documentacion expect https://docs.cypress.io/api/commands/request#Options
});
