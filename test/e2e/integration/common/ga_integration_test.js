describe('Using google analytics', () => {
    it('is initialized to be used by the page', () => {
        cy.visit('/')

        cy.get('[data-test="ga"]').should('exist')
    });
});