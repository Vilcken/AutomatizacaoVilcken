import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";

const nome = faker.person.firstName();
const sobrenome = faker.person.lastName();
const email = faker.internet.email();
const telefone = faker.phone.number("#########");
const Endereco = faker.location.streetAddress();

beforeEach(() => {
  cy.visit("https://automationexercise.com/login");
});

Given("que eu esteja na página de cadastro de usuário", () => {
  cy.get("h2").contains("New User Signup!");
});

When("eu preencho meu nome e email", () => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(nome + "@qa.com");
});

And("eu clico no botão cadastro", () => {
  cy.get('[data-qa="signup-button"]').click();
});

Then(
  "eu devo ser redirecionado para a página de finalização de cadastro",
  () => {
    cy.contains("Enter Account Information");
  }
);

When("eu preencho os seguintes dados complementares", () => {
  cy.contains("Enter Account Information");
  cy.get("#id_gender1").click();
  cy.get('[data-qa="password"]').type("TESTE@123");
  cy.get('[data-qa="days"]').select("15");
  cy.get('[data-qa="months"]').select("8");
  cy.get('[data-qa="years"]').select("2003");
  cy.get('[data-qa="first_name"]').type(nome);
  cy.get('[data-qa="last_name"]').type(sobrenome);
  cy.get('[data-qa="address"]').type(Endereco);
  cy.get('[data-qa="country"]').select("United States");
  cy.get('[data-qa="state"]').type("California");
  cy.get('[data-qa="city"]').type("Los Angeles");
  cy.get('[data-qa="zipcode"]').type("90001");
  cy.get('[data-qa="mobile_number"]').type(telefone);
});

And("eu clico no botão de criar e devo ver a mensagem de sucesso", () => {
  cy.get('[data-qa="create-account"]').click();
  cy.contains("Account Created!");
});

Then(
  "eu clico no botão de continuar e sou redirecionado logado para a home page",
  () => {
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("Logged in as").find("b").contains(nome);
  }
);

When("eu preencho meu nome e um e-mail que já foi cadastrado", () => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(nome + "@qa.com");
});

Then("eu devo ver a mensagem de erro", () => {
  cy.get("body").contains("Email Address already exist!");
});
