

Feature: Cadastro de novo usuário
  Para ter acesso exclusivo à plataforma,
  Como um visitante,
  Eu quero poder me cadastrar. 

  Background:
    Given que eu esteja na página de cadastro de usuário


     @positivo
  Scenario: Cadastro de um novo usuário com sucesso
    When eu preencho meu nome e email
    And eu clico no botão cadastro
    Then eu devo ser redirecionado para a página de finalização de cadastro
    When eu preencho os seguintes dados complementares
    And eu clico no botão de criar e devo ver a mensagem de sucesso
    Then eu clico no botão de continuar e sou redirecionado logado para a home page


     @negativo @email_existente
  Scenario: Tentar realizar um cadastro utilizando um e-mail já existente
    When eu preencho meu nome e um e-mail que já foi cadastrado
    And eu clico no botão cadastro
    Then eu devo ver a mensagem de erro