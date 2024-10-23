describe('User Login API Unsuccessfully', () => {
  it('POST Login user testing with valid email and empty password', () => {
    const userData = {
      email: "george.bluth@reqres.in",
    };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: userData,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body).to.not.have.property('token');
      expect(response.body).to.have.property('error');
    });
  });
});
