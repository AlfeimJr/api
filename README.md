<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
Description
Nest framework TypeScript starter repository.

Installation
bash
Copiar código
$ npm install
Running the app
bash
Copiar código

# development

$ npm run start

# watch mode

$ npm run start:dev

# production mode

$ npm run start:prod
Test
bash
Copiar código

# unit tests

$ npm run test

# e2e tests

$ npm run test:e2e

# test coverage

$ npm run test:cov
Running the app with Docker
Pré-requisitos
Docker instalado. Para instruções de instalação, consulte a documentação oficial do Docker.
Passos para configurar e executar a API
Clone o repositório

bash
Copiar código
git clone <URL do repositório>
cd alfa-api
Crie e configure o arquivo .env

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Aqui está um exemplo:

env
Copiar código
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=alfa_user
DATABASE_PASSWORD=password
DATABASE_NAME=alfa_api
Construa e inicie os contêineres

Utilize o Docker Compose para construir e iniciar os contêineres definidos no docker-compose.yml.

bash
Copiar código
docker-compose up --build
Isso irá:

Baixar e configurar a imagem do PostgreSQL.
Construir a imagem Docker da aplicação NestJS.
Iniciar ambos os contêineres e o PgAdmin.
Acesse a API

A API estará disponível em http://localhost:3000.

Acesse o PgAdmin

PgAdmin estará disponível em http://localhost:5050. Utilize as credenciais definidas no docker-compose.yml para fazer login:

Email: admin@admin.com
Senha: admin
Verificar os logs

Para verificar os logs dos contêineres, utilize:

bash
Copiar código
docker-compose logs -f
Parar e remover os contêineres

Para parar e remover os contêineres, utilize:

bash
Copiar código
docker-compose down
Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

Stay in touch
Author - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
License
Nest is MIT licensed.
