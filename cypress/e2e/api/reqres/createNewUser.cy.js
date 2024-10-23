describe('User Creation API', () => {
  it('POST testing create user', () => {
    const userData = {
      email: "dea.defina@reqres.in",
      first_name: "Dea",
      last_name: "Defina",
      avatar: "https://reqres.in/img/faces/20-image.jpg"
    };

    cy.request('POST', 'https://reqres.in/api/users', userData)
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(1500);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});