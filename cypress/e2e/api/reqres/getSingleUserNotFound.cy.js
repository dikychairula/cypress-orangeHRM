describe('Reqest API testing', () => {
  it('Get API testing', () =>{
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/50',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.be.empty
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});