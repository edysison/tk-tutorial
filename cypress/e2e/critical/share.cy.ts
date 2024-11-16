// Could be replace this file with a component test file as soon as possible.
describe('User tutorial verify share links', () => {
  it('Should be able to share at cover page', () => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11/');
    cy.getByClass('w-sublinks').click()
    cy.socialMediaShare(0, 'https://www.linkedin.com/sharing/share-offsite/?url=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(1, 'https://www.facebook.com/share.php?u=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(2, 'https://twitter.com/intent/tweet?https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.getByClass('sub-links-in').children().eq(3).should('have.attr', 'data-link').and('include', 'https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br');
    cy.socialMediaShare(4, 'mailto:?body=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
  });

  it('Should be able to share at configuration page', () => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/configuration-steps-2/');
    cy.getByClass('w-sublinks').click()
    cy.socialMediaShare(0, 'https://www.linkedin.com/sharing/share-offsite/?url=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(1, 'https://www.facebook.com/share.php?u=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(2, 'https://twitter.com/intent/tweet?https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.getByClass('sub-links-in').children().eq(3).should('have.attr', 'data-link').and('include', 'https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br');
    cy.socialMediaShare(4, 'mailto:?body=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
  });

  it('Should be able to share at back cover page', () => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/back-cover-7/');
    cy.getByClass('w-sublinks').click()
    cy.socialMediaShare(0, 'https://www.linkedin.com/sharing/share-offsite/?url=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(1, 'https://www.facebook.com/share.php?u=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.socialMediaShare(2, 'https://twitter.com/intent/tweet?https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
    cy.getByClass('sub-links-in').children().eq(3).should('have.attr', 'data-link').and('include', 'https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br');
    cy.socialMediaShare(4, 'mailto:?body=https://brochure.tkelevator.com/pt_BR/agile-tutorial-flyer-tke-global-pt-br')
  });
});
