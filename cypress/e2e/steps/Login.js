import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";

let NomeDoUsuario;
let EmailDoUsuario;
let SenhaDoUsuario;

Given("que um usuário foi criado com dados válidos", () => {
  NomeDoUsuario = faker.person.firstName();
  EmailDoUsuario = faker.internet.email();
  SenhaDoUsuario = "SenhaForte@123";

  cy.UsuarioCriado(EmailDoUsuario, SenhaDoUsuario, NomeDoUsuario);
});

Given("eu estou na página de login", () => {
  cy.visit("https://automationexercise.com/login");
  cy.get("h2").contains("Login to your account");
});

When("eu preencho o e-mail e a senha deste usuário", () => {
  cy.get('[data-qa="login-email"]').type(EmailDoUsuario);
  cy.get('[data-qa="login-password"]').type(SenhaDoUsuario);
});

And("eu clico no botão de login", () => {
  cy.get('[data-qa="login-button"]').click();
});

Then("eu devo ser autenticado com sucesso e ver meu nome na tela", () => {
  cy.contains("Logged in as").find("b").contains(NomeDoUsuario);
});

When("eu preencho o e-mail deste usuário e uma senha incorreta", () => {
  cy.get('[data-qa="login-email"]').type(EmailDoUsuario);
  cy.get('[data-qa="login-password"]').type("TESTE@12345");
});

Then("eu devo ver a mensagem de erro de login", () => {
  cy.contains("Your email or password is incorrect!");
});
