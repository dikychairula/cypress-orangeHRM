// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  // akses halaman login
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Memvalidasi halaman login
  cy.get('h5').contains('Login').should('have.text', 'Login');

  // Mengisi username dan password
  cy.get('[name="username"]').type(username);  
  cy.get('[name="password"]').type(password); 

  // Klik tombol login
  cy.get('[type="submit"]').click(); 

  // Memverifikasi berhasil login dengan mengecek URL
  cy.url().should('include', '/dashboard');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })