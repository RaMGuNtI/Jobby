export const stubJobs = () => {
  cy.intercept(
    'GET',
    'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=',
    { fixture: 'jobsStubResponse.json' }
  ).as('fetchJobs');
};

export const stubProfile = () => {
  cy.intercept('GET', 'https://apis.ccbp.in/profile', {
    fixture: 'profileStubResponse.json',
  }).as('fetchProfile');
};

export const stubSearchJobs = () => {
  cy.intercept(
    'GET',
    'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=dev',
    { fixture: 'searchResultsStubResponse.json' }
  ).as('fetchSearchJobs');
};

export const stubPartTime = () => {
  cy.intercept(
    'GET',
    'https://apis.ccbp.in/jobs?employment_type=PARTTIME&minimum_package=&search=',
    { fixture: 'parttimeStubResponse.json' }
  ).as('fetchPartTime');
};

export const stubInternFilter = () => {
  cy.intercept(
    'GET',
    'https://apis.ccbp.in/jobs?employment_type=PARTTIME,INTERNSHIP&minimum_package=&search=',
    { fixture: 'parttimeStubResponse.json' }
  ).as('fetchInternship');
};

export const stubCombineFil = () => {
  cy.intercept(
    'GET',
    'https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=Time',
    { fixture: 'search-filterResponse.json' }
  ).as('fetchFiltered');
};

export const stubJobDetail = () => {
  cy.intercept('GET', 'https://apis.ccbp.in/jobs/1', {
    fixture: 'jobDetailStubResponse.json',
  }).as('fetchJobDetail');
};
