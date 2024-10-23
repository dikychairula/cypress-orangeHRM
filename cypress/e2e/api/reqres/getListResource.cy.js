describe('Reqest API testing', () => {
  it('Get API testing', () =>{
    cy.request('GET', 'https://reqres.in/api/unknown')
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.to.be.null
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});