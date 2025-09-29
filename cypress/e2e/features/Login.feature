
Feature: Autenticação de Usuário
  Como um usuário cadastrado
  Eu quero acessar minha conta
  Para poder utilizar as funcionalidades do site

  Background:
    Given que um usuário foi criado com dados válidos
    And eu estou na página de login

  @sucesso
  Scenario: Realizar login com credenciais válidas
    When eu preencho o e-mail e a senha deste usuário
    And eu clico no botão de login
    Then eu devo ser autenticado com sucesso e ver meu nome na tela

  @erro
  Scenario: Tentar realizar login com senha incorreta
    When eu preencho o e-mail deste usuário e uma senha incorreta
    And eu clico no botão de login
    Then eu devo ver a mensagem de erro de login