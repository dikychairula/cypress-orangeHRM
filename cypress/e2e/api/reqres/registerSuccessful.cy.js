describe('User Registration API Successfully', () => {
  it('POST register user testing', () => {
    const userData = {
      email: "george.bluth@reqres.in",
      password: "Kurupuk!23"
    };

    cy.request('POST','https://reqres.in/api/register',userData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
    });
  });
});
