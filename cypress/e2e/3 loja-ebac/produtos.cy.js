/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
        
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        
    });

    it('Deve buscar um produco com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', 'produto')
        
    });

    it('Deve visitar a página de um produto específico', () => {
        produtosPage.visitarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')

        
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Arcadio Gym Short')
        cy.get('.post-3528 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        produtosPage.addProduroCarrinho(33, 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar produto ao carrinho - massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProduroCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
        
        
    });
});