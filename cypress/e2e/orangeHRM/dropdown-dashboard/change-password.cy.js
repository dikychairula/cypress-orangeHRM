describe('Change Password Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Acess menu Change Password', () => {

    cy.get('p.oxd-userdropdown-name').click().should('be.visible');
    //mencari elemen role "menuitem" dan teks "Change Password"
    cy.get('a[role="menuitem"]').contains('Change Password').should('be.visible').click();
    cy.get('h6').contains('Update Password').should('be.visible');

    cy.get('input[type="password"]').eq(0).type('admin123'); // Current password
    cy.get('input[type="password"]').eq(1).type('newPassword123'); // New password
    cy.get('input[type="password"]').eq(2).type('newPassword123'); // Confirm new password
    
    cy.get('button[type="submit"]').contains('Save').click();

  });
});