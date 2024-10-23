describe('User Retrieval API', () => {
  it('should retrieve user data and validate the response', () => {
    const baseUrl = 'https://reqres.in'; // Define your base URL

    cy.request('GET','https://reqres.in/api/users?delay=3')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.greaterThan(3000);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
        expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
});
