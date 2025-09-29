import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu sou um usuário válido e estou logado", () => {
  cy.visit("https://automationexercise.com/login");
  cy.get('[data-qa="login-email"]').type("TesteQA@teste.com");
  cy.get('[data-qa="login-password"]').type("Teste@12345");
  cy.get('[data-qa="login-button"]').click();
  cy.contains("Logged in as").should("be.visible");
});

Given("que eu estou na página de produtos", () => {
  cy.visit("https://automationexercise.com/products");
  cy.contains("All Products").should("be.visible");
});

When('eu adiciono o produto "Blue Top" no carrinho', () => {
  cy.get('[data-product-id="1"]').contains("Add to cart").click();
});

And('eu clico em "Continue Shopping"', () => {
  cy.get(".modal-content").should("be.visible");
  cy.get(".modal-footer button").contains("Continue Shopping").click();
});

And('eu adiciono o produto "Men TShirt" no carrinho', () => {
  cy.get('[data-product-id="2"]').contains("Add to cart").click();
});

And('eu clico em "View Cart"', () => {
  cy.get(".modal-content").should("be.visible");
  cy.get('p a[href="/view_cart"]').click();
});

Then(
  'eu devo ver os dois produtos, "Blue Top" e "Men TShirt", na lista do carrinho',
  () => {
    cy.get("#product-1");
    cy.get("#product-2");
  }
);

When('eu clico para remover o "Blue Top" do carrinho', () => {
  cy.get("#product-1 > .cart_delete > .cart_quantity_delete").click();
});

Then('o produto "Blue Top" não deve mais estar na lista', () => {
  cy.contains("Blue Top").should("not.exist");
});

And('o produto "Men TShirt" deve continuar no carrinho', () => {
  cy.get("#product-2");
});
