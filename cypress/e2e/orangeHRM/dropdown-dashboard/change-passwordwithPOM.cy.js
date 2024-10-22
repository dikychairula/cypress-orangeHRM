import ChangePasswordPage from "../../../pom/change-password/change-passowrd.cy";

describe('Change Password Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Change Password Successfully ', () => {

    //klik dropdown
    cy.get('p.oxd-userdropdown-name').click().should('be.visible');
    //mencari elemen role "menuitem" dan teks "Change Password"
    ChangePasswordPage.menuItem().should('be.visible').click();
    
    ChangePasswordPage.veriftChangePasswordPage().should('have.text', 'Update Password');
    ChangePasswordPage.currentPasswordField().type('admin123');
    ChangePasswordPage.newPasswordField().type('user123');
    ChangePasswordPage.confirmPasswordField().type('user123');
    
    cy.intercept('POST', '**/validation/password').as('updatePassword');

    ChangePasswordPage.saveButton().click();

    cy.wait('@updatePassword').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });

  });

});