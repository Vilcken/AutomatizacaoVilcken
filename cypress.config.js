const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { faker } = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      on("task", {
        generateUser() {
          const generateCpf = () => {
            let cpf = "";
            for (let i = 0; i < 11; i++) {
              cpf += Math.floor(Math.random() * 10);
            }
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
          };
        },
      });
    },
  },
});
