
describe('My First Test', () => {
  beforeEach(() => {
    cy.login('rahul', 'rahul@2021');
  });

  it('Visits Jobs Page', () => {
    cy.visit('http://localhost:5173/jobs');

    cy.intercept(
      'GET',
      'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=',
      { fixture: 'jobsStubResponse.json' }
    ).as('fetchJobs');

    cy.intercept('GET', 'https://apis.ccbp.in/profile', {
      fixture: 'profileStubResponse.json',
    }).as('fetchProfile');

    cy.wait('@fetchProfile');
    cy.wait('@fetchJobs');

    cy.contains('Frontend Developer').should('exist');
    cy.contains('Ram').should('exist');

    cy.get('input[placeholder="search jobs"]').type('dev');
    cy.intercept(
      'GET',
      'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=dev',
      { fixture: 'searchResultsStubResponse.json' }
    ).as('fetchSearchJobs');
    cy.get('button[data-testid="searchjobs"]').click();
    cy.wait('@fetchSearchJobs');

    cy.intercept(
      'GET',
      'https://apis.ccbp.in/jobs?employment_type=PARTTIME&minimum_package=&search=',
      { fixture: 'parttimeStubResponse.json' }
    ).as('fetchPartTime');
    cy.contains('Part Time').click();
    cy.wait('@fetchPartTime');

    cy.intercept(
      'GET',
      'https://apis.ccbp.in/jobs?employment_type=PARTTIME,INTERNSHIP&minimum_package=&search=',
      { fixture: 'parttimeStubResponse.json' }
    ).as('fetchInternship');
    cy.contains('Internship').click();
    cy.wait('@fetchInternship');

    cy.intercept(
      'GET',
      'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=Time',
      { fixture: 'search-filterResponse.json' }
    ).as('fetchFiltered');
    cy.get('input[placeholder="search jobs"]').clear().type('Time');
    cy.get('button[data-testid="searchjobs"]').click();
    cy.wait('@fetchFiltered');
  });
});
