describe('User Delete API', () => {
  it('Delete data user testing', () => {
    cy.request('DELETE','https://reqres.in/api/users/980')
    .then((response) => {
      expect(response.status).to.eq(204);
      expect(response.duration).to.be.lessThan(1000);
      expect(response.body).to.be.empty;
    });
  });
});
