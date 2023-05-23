# api-biblioteca

## Como rodar

### 1. Clone o repositório

~~~
$ git clone https://github.com/adelsonsljunior/api-biblioteca.git
~~~

### 2. Entre no diretório do projeto e abra na sua IDE

~~~
$ cd api-biblioteca/
~~~

### 3. Crie o arquivo de variáveis de ambiente

Crie uma cópia do arquivo `.env.example` com o nome de `.env`.

No arquivo `.env`, coloque no campo `PG_PASSWORD` a senha que deseja para o banco de dados.

### 4. Inicie o contêiner com o banco de dados e as migrations

~~~
$ docker compose up -d
$ node ace migration:run
~~~

### 5. Instale as dependências e execute a api

+ npm
~~~
$ npm i
$ npm run dev
~~~

<br>

![AdonisJS](https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
