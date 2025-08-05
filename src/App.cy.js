// App.cy.js
import React from 'react'
import App from '../App'
import { mount } from 'cypress/react'

describe('App', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('should display the search input', () => {
    cy.get('.search').should('exist')
  })
})

