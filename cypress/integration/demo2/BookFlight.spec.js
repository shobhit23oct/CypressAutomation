describe('DEMO', function() {
  it('Login', function() {

//Launching the site
  cy.visit('https://www.cleartrip.com/')

//Handling the Exception
  cy.on('uncaught:exception', (err, runnable) => {
  return false;
  });
  cy.wait(5000);

//Searching for the airport to depart
  cy.get('#FromTag').type('Bangalore, IN - Kempegowda International Airport (BLR)', {force: true})
  cy.wait(2000)
  cy.get('#FromTag').type('{enter}');

//Searching for the airport to arrive
  cy.get('#ToTag').type('Mumbai, IN - Chatrapati Shivaji Airport (BOM)', {force: true})
  cy.wait(2000);
  cy.get('#ToTag').type('{enter}');

//Selecting the depart date 15 days after the current date
 const todaysDate = Cypress.moment().add(15, 'days').format('ddd, MMM D YYYY');
 cy.get('#DepartDate').type(`${todaysDate}`, { force: true });
 cy.get('#DepartDate').type('{enter}');

//Selecting two adults from the dropdown
 cy.get('#Adults').select('2').should('have.value','2');

//Searching for the flight
 cy.get('#SearchBtn').click()
 cy.wait(5000)

//Sorting the flight as per the price in decreasing order
 cy.get('.price > .current').click()
 cy.wait(5000)
 cy.get('.showTabs > .resultUnit > .segment > :nth-child(2) > .price > .booking').click()
 cy.wait(5000)

  })
})
