describe('DEMO', function() {
  it('Login', function() {
    cy.visit('https://www.cleartrip.com/')

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('.withArrows > .hotelApp > [href="/hotels"]').click()
    cy.get('#Tags').type('Jayanagar, Bangalore', {force: true})
    .should('have.value', 'Jayanagar, Bangalore');

    cy.wait(5000);

    cy.get('#Tags').type('{enter}');

const inDate = Cypress.moment().add(3, 'days').format('ddd, MMM D YYYY');
cy.get('#CheckInDate').type(`${inDate}`, { force: true });

cy.wait(2000)

const outDate = Cypress.moment().add(5, 'days').format('ddd, MMM D YYYY');
     cy.get('#CheckOutDate').type(`${outDate}`, { force: true });
cy.wait(2000);

cy.get('#SearchHotelsButton').click({ force: true });
cy.wait(5000)
cy.get('.clearFix.flex > .right-content-section > .tools > .fRight > .booking').click()
  })
})
