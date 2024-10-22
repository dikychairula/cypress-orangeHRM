import AboutPage from "../../../pom/about/about.cy";

describe('About Menu Test', () => {
  before(() => {
    //command login
    cy.login('Admin', 'admin123');
  });

  it('User Acess menu About', () => {
    //klik dropdown
    cy.get('p.oxd-userdropdown-name').click().should('be.visible');

    cy.intercept('GET','**/about').as('about');
    //klik teks "About"
    AboutPage.menuItem().should('be.visible').click();
    cy.wait('@about').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    //validasi teks "About" muncul
    AboutPage.veriftAboutPage().should('be.visible');
  });
});