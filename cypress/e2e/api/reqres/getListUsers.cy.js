describe('Reqest API testing', () => {
  it('Get API testing', () =>{
    cy.request('GET', 'https://reqres.in/api/users?page=2')
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).not.to.be.null
      expect(response.duration).to.be.lessThan(200);
    });
  });
});