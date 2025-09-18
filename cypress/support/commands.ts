
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[placeholder="Enter Username"]').type(username);
    cy.get('input[placeholder="Enter Password"]').type(password);
    cy.get('button').click();
    cy.url().should('not.include', '/login');
  });
});
