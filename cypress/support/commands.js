import { faker } from "@faker-js/faker";

Cypress.Commands.add("UsuarioCriado", (email, senha, firstName) => {
  cy.visit("https://automationexercise.com/login");
  cy.get('[data-qa="signup-name"]').type(firstName);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.contains("Enter Account Information").should("be.visible");

  cy.get("#id_gender1").click();
  cy.get('[data-qa="password"]').type(senha);
  cy.get('[data-qa="days"]').select("15");
  cy.get('[data-qa="months"]').select("8");
  cy.get('[data-qa="years"]').select("2003");
  cy.get('[data-qa="first_name"]').type(firstName);
  cy.get('[data-qa="last_name"]').type(faker.person.lastName());
  cy.get('[data-qa="address"]').type(faker.location.streetAddress());
  cy.get('[data-qa="country"]').select("United States");
  cy.get('[data-qa="state"]').type("California");
  cy.get('[data-qa="city"]').type("Los Angeles");
  cy.get('[data-qa="zipcode"]').type("90001");
  cy.get('[data-qa="mobile_number"]').type(faker.phone.number("#########"));

  cy.get('[data-qa="create-account"]').click();
  cy.contains("Account Created!");

  cy.get('[data-qa="continue-button"]').click();
  cy.get('a[href="/logout"]').click();
});
