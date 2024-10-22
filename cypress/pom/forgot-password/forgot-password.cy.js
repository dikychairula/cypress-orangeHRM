export default class ForgotPasswordPage {

  static verifyForgotPasswordPage() {
    return cy.get('h6').contains('Reset Password');
  }
  static inputUsername(){
    return cy.get('[name="username"]');
  }
  static buttonSubmit(){
    return cy.get('[type = "submit"]');
  }
  static verifyResetPasswordSuccessMessage() {
    return cy.get('h6').contains('Reset Password link sent successfully');
  }
}