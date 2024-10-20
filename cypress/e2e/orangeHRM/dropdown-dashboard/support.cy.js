describe('Support Menu Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Acess menu Support', () => {
    cy.get('p.oxd-userdropdown-name').click().should('be.visible');

    //mencari elemen role "menuitem" dan teks "Support"
    cy.get('a[role="menuitem"]').contains('Support').should('be.visible').click();

    //validasi masuk ke support melalui url
    cy.url().should('include', '/support');
  });
});