/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe("Funcionalidade: Login", () => {

    beforeEach(() => {

        cy.visit('minha-conta/')
        
    });

    afterEach(() => {
        
        cy.screenshot()
        
    });

    it("Deve fazer login com sucesso", () => {

        
        cy.get('#username').type("vitor.teste@teste.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vitor.teste (não é vitor.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {

        
        cy.get('#username').type("victor.teste@teste.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        
        cy.get('#username').type("vitor.teste@teste.br")
        cy.get('#password').type("teste@000")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail vitor.teste@teste')
        
        
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vitor.teste (não é vitor.teste? Sair)')
        
    });

    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()        
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vitor.teste (não é vitor.teste? Sair)')          
        })
        
    });
})


