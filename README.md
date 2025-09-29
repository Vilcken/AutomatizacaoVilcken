Prova de QA - Vilcken Andrade
Observação Importante:
O site originalmente proposto para o teste estava indisponível. Para demonstrar um pouco das habilidades em Cypress com linguagem interpretada em Gherkin, tomei a iniciativa de realizar os testes na plataforma https://automationexercise.com/, que é um ambiente preparado para a automação de testes de software.

Escopo dos Testes:

1.  Cadastro de Usuário:
    Cenário de sucesso com dados dinâmicos.
    Cenário de erro ao tentar cadastrar um e-mail já existente.

2.  Login de Usuário:
    Cenário de sucesso com um usuário fixo pré-cadastrado.
    Cenário de erro com senha incorreta.

3.  Gerenciamento do Carrinho de Compras:
    Cenário de ponta a ponta que inclui: fazer login, adicionar múltiplos itens ao carrinho e remover um item, verificando o estado do carrinho em cada etapa.

Foram criados cenários de teste em Gherkin para cobrir fluxos positivos e negativos, que podem ser encontrados na pasta cypress/features.
