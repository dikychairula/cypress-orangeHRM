export default class LogoutPage {
  
  static menuItem() {
    return cy.get('a[role="menuitem"]').contains('Logout');
  }
  
  static verifyLoginPage() {
    cy.url().should('include', '/auth/login'); // Memeriksa URL halaman login
  }
}