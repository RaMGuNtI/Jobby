import {
  stubJobs,
  stubProfile,
  stubSearchJobs,
  stubPartTime,
  stubInternFilter,
  stubCombineFil,
  stubJobDetail,
} from '../stubs/stubs';

describe('My First Test', () => {
  beforeEach(() => {
    stubJobs();
    stubProfile();
    stubSearchJobs();
    stubPartTime();
    stubInternFilter();
    stubCombineFil();
    stubJobDetail();
    cy.login('rahul', 'rahul@2021');
  });

  it('Visits Jobs Page', () => {
    cy.visit('http://localhost:5173/jobs');

    cy.wait('@fetchProfile');

    cy.wait('@fetchJobs');

    cy.verifyTextExists('Frontend Developer');
 
    cy.verifyTextExists('Ram');

    cy.searchJobs('dev');

    cy.wait('@fetchSearchJobs');

    cy.clickWithText('Part Time');

    cy.wait('@fetchPartTime');

    cy.clickWithText('Internship');

    cy.wait('@fetchInternship');

    cy.searchJobs('Time');

    cy.wait('@fetchFiltered');

    cy.clickWithBtn('logout');

    cy.checkURL('/login');

    cy.visit('http://localhost:5173/');

    cy.checkURL('/login');
    cy.login('rahul', 'rahul@2021');
    stubJobs();
    stubProfile();
    stubSearchJobs();
    stubPartTime();
    stubInternFilter();
    stubCombineFil();
    stubJobDetail();

    cy.visitWithPath('jobs');
    cy.wait('@fetchJobs');

  
    
    cy.clickWithText('Frontend Developer');

    cy.wait('@fetchJobDetail');
  });
});
