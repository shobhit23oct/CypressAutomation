describe('DEMO', function() {
  it('Login', function() {
    cy.visit('https://www.cleartrip.com/')

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  cy.wait(5000);
  cy.get('#FromTag').type('Bangalore, IN - Kempegowda International Airport (BLR)', {force: true})
cy.wait(2000)
cy.get('#FromTag').type('{enter}');
cy.get('#ToTag').type('Mumbai, IN - Chatrapati Shivaji Airport (BOM)', {force: true})
    cy.wait(2000);
  cy.get('#ToTag').type('{enter}');

 const todaysDate = Cypress.moment().add(15, 'days').format('ddd, MMM D YYYY');


cy.get('#DepartDate').type(`${todaysDate}`, { force: true });
cy.get('#DepartDate').type('{enter}');

cy.get('#Adults').select('2').should('have.value','2');
cy.get('#SearchBtn').click()

cy.wait(5000)
cy.get('.price > .current').click()

 cy.wait(5000)
 cy.get('.showTabs > .resultUnit > .segment > :nth-child(2) > .price > .booking').click()
 cy.wait(5000)

  })
})
