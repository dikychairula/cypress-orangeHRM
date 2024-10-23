describe('User Update API', () => {
  it('PATCH data user testing', () => {
    const userData = {
      email: "dea.delfina@reqres.in",
      first_name: "Dea",
      last_name: "Delfina",
      avatar: "https://reqres.in/img/faces/20-image.jpg"
    };

    cy.request('PATCH','https://reqres.in/api/users/980',userData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body.last_name).to.eql("Delfina");
      expect(response.body).to.have.property('updatedAt');
    });
  });
});
