// cypress/component/App.cy.js
import React from 'react';
import App from '../../src/components/App'; // ✅ यही लाइन

describe('App', () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  it('should display the search input', () => {
    cy.get('input.search').should('exist');
  });
});
