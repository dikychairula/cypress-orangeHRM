import ForgotPasswordPage from "../../pom/forgot-password/forgot-password.cy";

describe('Forgot Password Test', () => {

  it('User access Forgot Password', () => {
    //akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //User klik link "Forgot your password?"
    cy.contains('Forgot your password?').click();
    //validasi user ada di halaman Forgot Password
    ForgotPasswordPage.verifyForgotPasswordPage().should('have.text', 'Reset Password');
    //input username untuk reset password
    ForgotPasswordPage.inputUsername().type('Admin');
    
    ForgotPasswordPage.buttonSubmit().click(); //klik tombol reset password

    //validasi reset sukses
    ForgotPasswordPage.verifyResetPasswordSuccessMessage().should('be.visible');

  });

  
});