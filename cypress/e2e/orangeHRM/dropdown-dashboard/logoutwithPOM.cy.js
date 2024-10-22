import LogoutPage from "../../../pom/logout/logout.cy";

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
    LogoutPage.menuItem().click();
    
    // Verifikasi bahwa pengguna diarahkan kembali ke halaman login
    LogoutPage.verifyLoginPage();
  });
});
