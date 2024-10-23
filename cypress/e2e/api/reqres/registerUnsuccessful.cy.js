describe('User Registration API Unsuccessfully', () => {
  it('POST register user testing with empty email', () => {
    const userData = {
      password: "Kurupuk!23"
    };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: userData,
      failOnStatusCode: false // Prevent Cypress from failing the test on 400 status
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body).to.not.have.property('id');
      expect(response.body).to.not.have.property('token');
      expect(response.body).to.have.property('error');
    });
  });
});
