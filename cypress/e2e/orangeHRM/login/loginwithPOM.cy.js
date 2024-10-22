import LoginPage from "../../../pom/login/login.cy";

describe('Login Test', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginPage.verifyLoginPage().should('have.text', 'Login'); // Validasi halaman login
  });

  it('User Login with valid credentials', () => {
    
    //validasi masuk ke Login
    LoginPage.verifyLoginPage().should('have.text', 'Login');
    LoginPage.inputUsername().type('Admin');
    LoginPage.inputPassword().type('admin123');

    cy.intercept('GET', '**action-summary').as('actionSummary');
    LoginPage.buttonSubmit().click(); 
    cy.wait('@actionSummary').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    LoginPage.verifyDashboardPage().should('have.text', 'Dashboard');
  });

  //tidak ada respon API status code 401
  it('User Login with invalid password', () => {
    
    LoginPage.verifyLoginPage().should('have.text', 'Login');
    LoginPage.inputUsername().type('Admin');
    LoginPage.inputPassword().type('user123');
    LoginPage.buttonSubmit().click(); 

    //Validasi pesan invalid credentials
    LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
  });

  it('User Login with invalid username', () => {
   
    LoginPage.verifyLoginPage().should('have.text', 'Login');
    LoginPage.inputUsername().type('user');
    LoginPage.inputPassword().type('admin123');
    LoginPage.buttonSubmit().click(); 

    //Validasi pesan invalid credentials
    LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
  });

  it('User Login with invalid username and password', () => {
    
     LoginPage.verifyLoginPage().should('have.text', 'Login');
     LoginPage.inputUsername().type('user');
     LoginPage.inputPassword().type('user123');
     LoginPage.buttonSubmit().click(); 

     //Validasi pesan invalid credentials
     LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
  });
  
});