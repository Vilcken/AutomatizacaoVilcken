Feature: Gerenciamento do Carrinho de Compras

  Background:
    Given que eu sou um usuário válido e estou logado

  @carrinho
  Scenario: Adicionar múltiplos produtos ao carrinho e remover um deles
    Given que eu estou na página de produtos
    When eu adiciono o produto "Blue Top" no carrinho
    And eu clico em "Continue Shopping"
    And eu adiciono o produto "Men TShirt" no carrinho
    And eu clico em "View Cart"
    Then eu devo ver os dois produtos, "Blue Top" e "Men TShirt", na lista do carrinho
    When eu clico para remover o "Blue Top" do carrinho
    Then o produto "Blue Top" não deve mais estar na lista
    And o produto "Men TShirt" deve continuar no carrinho