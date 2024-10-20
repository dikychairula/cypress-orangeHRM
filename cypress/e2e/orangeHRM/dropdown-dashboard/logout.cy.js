describe('Logout Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Logout', () => {
    // Klik dropdown user untuk logout
    cy.get('p.oxd-userdropdown-name').click();
    //tunggu 2 detik
    cy.wait(2000);

    // Klik tombol Logout
    cy.get('a[role="menuitem"]').contains('Logout').click();
    
    // Verifikasi bahwa pengguna diarahkan kembali ke halaman login
    cy.url().should('include', '/auth/login');
    cy.get('h5').contains('Login').should('have.text', 'Login'); // Validasi halaman login muncul
  });
});
