/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains("Apollo Running Short")
            .click()
            cy.get('#tab-description > :nth-child(1)').should('exist')
            cy.get('#tab-description > :nth-child(1)').should('contain' , 'Fleet of foot or slow and steady, you’ll be in complete comfort with the Apollo Running Short')
    });
});