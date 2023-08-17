import { BarComponent } from './bar.component';

it('custom component should have hello header', () => {
  cy.mount('<cypress-component-testing-bar-component />', {
    imports: [BarComponent],
  });
  cy.get('h1').should('contains.text', 'Hello!');
});
