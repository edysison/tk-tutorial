
describe('Smoke test', () => {
  it('Visits the TKE website', () => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11/');
    cy.contains('AGILE Tutorial de configuração').should('be.visible');
  });
});
