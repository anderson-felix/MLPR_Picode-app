# MLPR - Melhor livro para relembrar

Este é um app desenvolvido em react usando antd como base principal de componentes

# Boas vindas

Seja bem vindo, este é uma aplicação para armazenamento de registros sobre livros em uma base de dados.

Use o comando `yarn start` para executar o app.

<br>

## Criando um novo livro

O controller `Create.ts` fica encarregado por registrar os valores dos <i>inputs</i> na base de dados.\
O componente `ModalCreateBook` exibe um modal na <i>HomePage</i> para a inserção dos dados.\
Após o registro ser criado, sobe automaticamente para a primeira posição na lista de livros da `HomePage`.

<br>

## Busca por tags

No <i>Header</i> da página temos um <i>input</i> para a inserção das <i>tags</i> para realizar a busca, que é exibida em seguida no topo da página ordenada por criação.

<br>

## Remover um livro

Em cada livro na `HomePage` existe um botão "remover" para deletar da base de dados aquele registro.\
Após uma confirmação, o registro é deletado e não será mais exibido na página principal.

<br>

### [Linter]()

Esse projeto usa o `prettier` com `eslint` (padrão airbnb) para estilo de código.\
Por incompatibilidade de versão do `eslint` com o `react` e `typescript`, foram usadas <i>keywords</i> entre as linhas do código.

<br>

# Colaboração

Contei com o apoio do [the invensi](https://github.com/theinvensi) na implementação da função `React.forwardRef` em `ModalCreateBook` para executar de forma precisa o modal a cada vez que ele for chamado.
