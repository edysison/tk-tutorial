describe('Drawer component interaction', () => {
  beforeEach('Example Test', () => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/configuration-steps-2/');
  });
  it('User should be able to interact with all drawers', () => {
    for (let i = 1; i < 9; i++) {
      cy.drawerInteraction(i)
    }
    cy.drawerInteraction(0)
  });
});
