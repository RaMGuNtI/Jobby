Cypress.Commands.add('login', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[placeholder="Enter Username"]').type(username);
    cy.get('input[placeholder="Enter Password"]').type(password);
    cy.get('button').click();
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('verifyTextExists', (title: string) => {
  cy.contains(title).should('exist');
});

Cypress.Commands.add('searchJobs', (query: string) => {
  cy.get('input[placeholder="search jobs"]').clear().type(query);
  cy.get('button[data-testid="searchjobs"]').click();
});

Cypress.Commands.add('clickWithText', (text: string) => {
  cy.contains(text).click();
});

Cypress.Commands.add('clickWithBtn', (id: string) => {
  cy.get(`button[data-testid="${id}"]`).click();
});

Cypress.Commands.add('checkURL', (url: string) => {
  cy.url().should('include', url);
});

Cypress.Commands.add('visitWithPath', (path: string) => {
  cy.visit(`http://localhost:5173/${path}`);
});
