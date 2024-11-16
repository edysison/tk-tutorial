/// <reference types="cypress" />

// Replace for getByData command once we get access to the project code.
Cypress.Commands.add('getByClass', (className) => { 
  return cy.get(`.${className}`);
});

// Remove after replacing getByClass with getByData
Cypress.Commands.add('getChildFromClass', (className, order = 0) => { 
  return cy.getByClass(className).children().eq(order)
});

// Cypress.Commands.add('getByData', (dataId: string) => {
//   return cy.get(`[data-testid="${dataId}"]`);
// });

Cypress.Commands.add('socialMediaShare', (order, shareUrl) => {
  cy.getChildFromClass('sub-links-in', order).should('have.attr', 'href')
    .and('include', shareUrl);
})

Cypress.Commands.add("drawerInteraction", (nextDrawer) => {
  // check if base drawer is active
  cy.getByClass('tabs-buttons').children().filter('.active').children().filter(`.text`).children().filter(`.tab-title`)
    .should('have.css', 'color', 'rgb(112, 0, 189)')
    .and('have.css', 'opacity', '1');
  cy.getByClass('tabs-buttons').children().filter('.active').children().filter(`.text`).children().filter(`.tab-text`)
    .should('have.css', 'display', 'block');

  // change drawer
  cy.getChildFromClass('tabs-buttons', nextDrawer).click();

  cy.getByClass('tabs-buttons').children().each(($el, index) => {
    if (index === nextDrawer) {
      //  verify if style got added for specific drawer
      cy.getChildFromClass('tabs-buttons', nextDrawer).children().filter('.text').children().filter(`.tab-title`)
        .should('have.css', 'color', 'rgb(112, 0, 189)')
        .and('have.css', 'opacity', '1');
      cy.getChildFromClass('tabs-buttons', nextDrawer).children().filter('.text').children().filter('.tab-text')
        .should('have.css', 'display', 'block');
    } else {
      // verify if style got reseted for each other drawer
      cy.wrap($el).children().filter('.text').children().filter(`.tab-title`)
        .should('have.css', 'color', 'rgb(38, 38, 38)')
        .and('have.css', 'opacity', '0.2');
      cy.wrap($el).children().filter('.text').children().filter('.tab-text')
        .should('have.css', 'display', 'none');
    }
  });
  
})

declare namespace Cypress {
  interface Chainable {
    getByClass(className: string): Chainable<JQuery<HTMLElement>>;
    getChildFromClass(component: string, order?: number): Chainable<JQuery<HTMLElement>>;
    // getByData(dataId: string): Chainable<JQuery<HTMLElement>>;
    socialMediaShare(order: number, ShareUrl: string): Chainable<void>;
    drawerInteraction(nextDrawer: number): Chainable<void>;
  }
}