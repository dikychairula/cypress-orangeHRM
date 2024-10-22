import SupportPage from "../../../pom/support/support.cy";

describe('Support Menu Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Acess menu Support', () => {
    cy.get('p.oxd-userdropdown-name').click().should('be.visible');

    //klik "Support"
    SupportPage.menuItem().should('be.visible').click();

    //validasi masuk ke support melalui url
    SupportPage.verifySupportPage();
  });
});