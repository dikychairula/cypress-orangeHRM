describe('Login Test', () => {

  it('User Login with valid credentials', () => {
    //akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    //validasi masuk ke dashboard
    cy.get('h5').contains('Login').should('have.text', 'Login');
  
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click(); 
    
    cy.url().should('include', '/dashboard');
  });

  it('User Login with invalid password', () => {
    //Akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('user123');
    cy.get('[type="submit"]').click();

    //Validasi pesan invalid credentials
    cy.get('.oxd-alert').should('be.visible').and('contain.text', 'Invalid credentials');
  });

  it('User Login with invalid username', () => {
    //Akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('user');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();

    //Validasi pesan invalid credentials
    cy.get('.oxd-alert').should('be.visible').and('contain.text', 'Invalid credentials');
  });

  it('User Login with invalid username and password', () => {
    //Akses halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('user');
    cy.get('[name="password"]').type('user123');
    cy.get('[type="submit"]').click();

    //Validasi pesan invalid credentials
    cy.get('.oxd-alert').should('be.visible').and('contain.text', 'Invalid credentials');
  });
  
});