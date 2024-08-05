# Rodar a api com docker

## Pré-requisitos

Docker instalado. Para instruções de instalação, consulte a documentação oficial do Docker.

## Passos para configurar e executar a API

### 1. Clone o repositório

```typescript
git clone https://github.com/AlfeimJr/api.git
cd alfa-api
```

### 2. Crie e configure o arquivo .env

#### Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Aqui está um exemplo:

```typescript
DATABASE_HOST = db;
DATABASE_PORT = 5432;
DATABASE_USER = alfa_user;
DATABASE_PASSWORD = password;
DATABASE_NAME = alfa_api;
```

### 3. Construa e inicie os contêineres

#### Utilize o Docker Compose para construir e iniciar os contêineres definidos no docker-compose.yml.

```typescript
docker-compose up --build
```

#### Isso irá:

Baixar e configurar a imagem do PostgreSQL.
Construir a imagem Docker da aplicação NestJS.
Iniciar ambos os contêineres e o PgAdmin.

### 4.Acesse a API

A API estará disponível em http://localhost:3000.

### 5.Acesse o PgAdmin

PgAdmin estará disponível em http://localhost:5050. Utilize as credenciais definidas no docker-compose.yml para fazer login:

Email: admin@admin.com
Senha: admin

### 6.Verificar os logs

Para verificar os logs dos contêineres, utilize:

```typescript
docker-compose logs -f
```

### 7.Parar e remover os contêineres

Para parar e remover os contêineres, utilize:

```typescript
docker-compose down
```
