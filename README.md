# Teste técnico para candidatos desenvolvedores - Next


Este projeto atua na criação de uma API Restful de cadastro de usuários. Cadastros de dados armazenados em um banco de dados relacional MYSQL.

## Sumário
* 1 Pré-requisitos
* 2 Ambiente de desenvolvimento da API
	* 2.1 Instalação
    * 2.2 Instalação da base de dados do MySQL
    * 2.3 Execução da API

## 1 Pré-requisitos
- [Node.js](https://nodejs.org/en/download/);
- [MYSQL](https://sourceforge.net/projects/wampserver/postdownload);

## 2 Ambiente de desenvolvimento da API

Essa seção mostra como fazer a instalação da API.

### 2.1 Instalação do projeto
`npm install`

### 2.2 Instalação da base de dados do MYSQL

Após baixar o banco de dados do MYSQL é necessário criar o banco de dados. Para este projeto o usuario do banco de dados esta como **root** e **sem senha** é recomendado que o banco de dados esteja na mesma configuração.

Para tal, executar o comando 
# ---------------
`CREATE DATABASE usuarios_db;
use usuarios_db;
create table usuario(
id int primary key auto_increment, 
nome varchar(30), email varchar(50), usuariologin varchar(50), senha varchar(50),
created_at datetime default now(),
updated_at datetime
);`
# ---------------

### 2.3 Execução da aplicação
Após criação do banco, basta executar o comando informado abaixo, ou rodar a aplicação.

 `npm run dev`

Esta API roda na porta 3030. Ela possui quatros endpoints válidos.

### Os endpoints encontram-se:
* http://localhost:3030/users/create
	* Cadastrar um usuario
* http://localhost:3030/users/list
	* Listar um Usuario
* http://localhost:3030//users/findById/:id
	* Busca por um id especifico
* http://localhost:3030//users/delete/:id
	* Deletar por um id especifico

Abaixo segue um exemplo de uma requisição a ser passada atraves do body.

Exemplo.:

`{
	"nome":"Diego",
	"email":"diego@diego",
	"usuariologin":"dihcodigo",
	"senha":"@dih1234"
}`