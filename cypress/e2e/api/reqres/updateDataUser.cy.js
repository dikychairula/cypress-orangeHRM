describe('User Update API', () => {
  it('PUT data user Testing', () => {
    const userData = {
      email: "dea.danianti@reqres.in",
      first_name: "Dea",
      last_name: "Danianti",
      avatar: "https://reqres.in/img/faces/20-image.jpg"
    };

    cy.request('PUT', 'https://reqres.in/api/users/980', userData)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body.last_name).to.eql("Danianti");
      expect(response.body).to.have.property('updatedAt');
    });
  });
});
