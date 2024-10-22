export default class SupportPage {
  
  static menuItem() {
    return cy.get('a[role="menuitem"]').contains('Support');
  }
  
  static verifySupportPage() {
    cy.url().should('include', '/support');
  }
}