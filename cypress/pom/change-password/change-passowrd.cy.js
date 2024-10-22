export default class ChangePasswordPage {
  static veriftChangePasswordPage() {
    return cy.get('h6').contains('Update Password');
  }
  static menuItem() {
    return cy.get('a[role="menuitem"]').contains('Change Password');
  }
  static currentPasswordField() {
    return cy.get('input[type="password"]').eq(0);
  }
  static newPasswordField() {
    return cy.get('input[type="password"]').eq(1);
  }
  static confirmPasswordField() {
    return cy.get('input[type="password"]').eq(2);
  }
  static saveButton() {
    return cy.get('button[type="submit"]').contains('Save');
  }
}