describe('About Menu Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Acess menu About', () => {
    //klik dropdown
    cy.get('p.oxd-userdropdown-name').click().should('be.visible');
    //mencari elemen role "menuitem" dan teks "About"
    cy.get('a[role="menuitem"]').contains('About').should('be.visible').click();
    //validasi teks "About" muncul
    cy.get('h6').contains('About').should('be.visible');
  });
});