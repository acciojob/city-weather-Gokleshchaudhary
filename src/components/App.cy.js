// cypress/component/App.cy.js
import React from 'react';
import App from '../../src/App'; // ✅ App.js src folder में है

describe('App', () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  it('should display the search input', () => {
    cy.get('input.search').should('exist');
  });
});

