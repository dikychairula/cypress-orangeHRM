export default class AboutPage {
  static veriftAboutPage() {
    return cy.get('h6').contains('About');
  }
  static menuItem() {
    return cy.get('a[role="menuitem"]').contains('About');
  }
  
  static saveButton() {
    return cy.get('button[type="submit"]').contains('Save');
  }
}