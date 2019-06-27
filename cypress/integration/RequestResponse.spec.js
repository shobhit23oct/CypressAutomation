/// <reference types="Cypress" />

context('GET => Users API Testing', () => {
  const getItems = () =>
    cy
      .request('GET', '/api/users')
      .its('body')
      .its('data');

  it('GET Users - Status Validate', () => {
    cy.request('GET', '/api/users')
      .its('status')
      .should('eq', 200);
  });

  it('GET Users - Page Validate', () => {
    cy.request('GET', '/api/users')
      .its('body')
      .its('page')
      .should('eq', 1);
  });

  it('GET Users - users list validate', () => {
    getItems().should('have.length', 3);
  });

  it('GET Users - Per Page Data Validate', () => {
    cy.request('GET', '/api/users')
      .its('body')
      .its('per_page')
      .should('eq', 3);
  });

  it('GET Users - Check each user object should have following keys [id, email, first_name, last_name, avatar]', () => {
    getItems().each(value => expect(value).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar'));
  });
});

const randomId = Cypress._.random(0, 10000);

context('POST => Users Create Testing', () => {
  it('POST - Create New User', () => {
    cy.request('POST', '/api/users', { id: randomId, first_name: 'morpheus' })
      .its('status')
      .should('eq', 201);
  });
});

context('PUT => Update users Info', () => {
  it('PUT - Update User', () => {
    cy.request('PUT', `/api/user/${randomId}`, {
      name: 'morpheus',
      job: 'zion resident',
    })
      .its('body')
      .its('updatedAt');
  });
});

context('DELETE => Delete users with id 2', () => {
  it('DELETE - Delete User', () => {
    cy.request('DELETE', '/api/user/2')
      .its('status')
      .should('eq', 204);
  });
});
