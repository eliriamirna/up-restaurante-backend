# Backend - UP Restaurante

## O que é este projeto?

Este projeto é uma aplicação em Node - express que atua como servidor da [aplicação](https://github.com/eliriamirna/up-restaurante-frontend).

## O que ele faz?

Este projeto possui quatro rotas:

- `GET /product`: retorna a lista de todos os produtos cadastrados no restaurante.
- `GET /order`: retorna todos os pedidos realizados pelo cliente com status "enviado".
- `POST /order`: cria um pedido de um cliente.
- `PUT /order/:id`: altera propriedades de um pedido do cliente.

# Resumo

Para a parte de backend foi utilizado o padrão de projeto MVC, porém as "views" não estão isoladas em sua própria pasta devido a simplicidade dos objetos. Outras tecnologias utilizadas foram babel para utilizar código ES6, banco de dados Sqlite3 com TypeORM para compatibilizar os diferentes tipos de banco de dados e o cors para o que possa permitir que o frontend faça requisições.

## Organização das pastas do projeto

- public: Arquivos estáticos.
- controllers: responsável por controlar as rotas (chamar serviços e retornar código).
- database: Armazena tudo relacionado ao banco de dados inclusive as migrations que versiona o banco de dados.
- entities: entidades do TypeORM para que ele entenda o banco de dados.
- models: armazenam classes que ajudam a criar as entidades.
- repositories: são recursos para interagir com o banco de dados.
- services: contém a funcionalidade da aplicação.

## Como executar?

Abra um terminal na pasta projeto e execute:

```bash
$ yarn install
$ yarn dev
```
