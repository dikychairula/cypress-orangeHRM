describe('Resource Not Found API Testing', () => {
  it('Get API testing return 404 Not found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/50',
      failOnStatusCode: false // mencegah Cypress di status code 404
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});
