describe('Cover page navigation test', () => {
  beforeEach(()=> {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/cover-11/');
  })
  it('Should be able to navigate through button in the middle of screen', () => {
    cy.getChildFromClass('button').click();
  });

  it('Should be able to navigate through all the tutorial process', () => {
    cy.scrollTo('bottom');
    cy.getChildFromClass('next-link').click({force:true});
    cy.contains('Configure a tela do seu terminal AGILE')
    cy.scrollTo('bottom');
    cy.getChildFromClass('next-link').click({force:true});
    cy.contains('www.TKELEVATOR.BR')
  });
});

describe('Back cover page navigation test', () => {
  beforeEach(() => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/back-cover-7/');
  })
  it('Should be able to return a tutorial process step', () => {
    cy.scrollTo('bottom');
    cy.getChildFromClass('prev-link').click({force:true});
    cy.contains('Configure a tela do seu terminal AGILE')
    cy.scrollTo('bottom');
    cy.getChildFromClass('prev-link').click({force:true});
    cy.contains('AGILE Tutorial de configuração')
  });
});

describe('Navbar navigation test', () => {
  beforeEach(() => {
    cy.visit('/tke/pt-br/brochure/agile-tutorial-flyer-tke-global-pt-br/configuration-steps-2/');
  })

  it('Should be able to close the navbar', () => {
    cy.get('#menu-container').should('have.css', 'display', 'none')
    cy.get('#menu-btn').click();
    cy.get('#menu-container').should('have.css', 'display', 'block')
    cy.get('#menu-btn').click();
    cy.get('#menu-container').should('have.css', 'display', 'none')
  });

  it('Should be able to use the navbar to access any step of the tutorial', () => {
    cy.get('#menu-btn').click();
    cy.getByClass('flat-list').children().filter('.active').children().eq(0).contains('Etapas de configuração')
    cy.getByClass('flat-list').children().eq(0).click();
    cy.contains('AGILE Tutorial de configuração')
    cy.get('#menu-btn').click();
    cy.getByClass('flat-list').children().filter('.active').children().eq(0).contains('Página inicial')
    cy.getByClass('flat-list').children().eq(1).click();
    cy.contains('Configure a tela do seu terminal AGILE')
    cy.get('#menu-btn').click();
    cy.getByClass('flat-list').children().filter('.active').children().eq(0).contains('Etapas de configuração')
    cy.getByClass('flat-list').children().eq(2).click();
    cy.contains('www.TKELEVATOR.BR')
    cy.get('#menu-btn').click();
    cy.getByClass('flat-list').children().filter('.active').children().eq(0).contains('Contracapa')
  });
});