describe('Forgot Password Test', () => {

  it('User access Forgot Password', () => {
    //akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //User klik link "Forgot your password?"
    cy.contains('Forgot your password?').click();

    //validasi user ada di halaman Forgot Password
    cy.get('h6').contains('Reset Password').should('be.visible');

    //input username untuk reset password
    cy.get('[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click(); //klik tombol reset password

    //validasi reset sukses
    cy.get('h6').contains('Reset Password link sent successfully').should('be.visible');

  });

  
});