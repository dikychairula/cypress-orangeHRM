describe('User Login API Successfully', () => {
  it('POST Login user testing with valid email and password', () => {
    const userData = {
      email: "george.bluth@reqres.in",
      password: "Kurupuk!23"
    };

    cy.request('POST','https://reqres.in/api/login',userData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body).to.have.property('token');
    });
  });
});
