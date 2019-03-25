/// <reference types="cypress" />
beforeEach(() => {
  cy.visit(Cypress.config('baseUrl'))
})

it('loads', () => {
  // application should be running at port 3000
  cy.contains('h1', 'todos')
})

it('starts with zero items', () => {
  // check if the list is empty initially
  //   find the selector for the individual TODO items
  //   in the list
  //   use cy.get(...) and it should have length of 0
  //   https://on.cypress.io/get
  cy.get('li.todo').should('have.length', 0)
})

const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('adds two items', () => {
  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  addItem('one')
  cy.contains('li.todo', 'one').should('be.visible')
  addItem('two')
  cy.contains('li.todo', 'two').should('be.visible')
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // add an item
    // probably want to have a reusable function to add an item!
    addItem('${k}')
  }
  // check number of items
  cy.get('li.todo').should('have.length', 5)
})

it('can mark items as completed', () => {
  // add a few items
  // mark items as completed
  // select completed items and confirm their number
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
