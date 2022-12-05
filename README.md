
# Desafio Técnico - Backend

> Desafio técnico com Node.js


## Tech

**Client:** Angular, Bootstrap

**Server:** Node, Nest, TypeOrm

**Database:** SQLite


## Para Rodar

### Front

1) Abra a pasta do Front
```bash
cd FRONT
```

2) Instale os arquivos
```bash
npm i
```

3) Rode o servidor
```bash
npm start
```

### Back

1) Abra a pasta do BACK
```bash
cd BACK
```

2) Instale os arquivos
```bash
npm i
```

3) Rode o servidor
```bash
npm start
```

### ATENÇÃO!

- O back e o front precisam estar rodando ao mesmo tempo. Utilize 2 terminais
- O Back deve estar rodando na porta 3000. Caso utilize outra, modifique o arquivo **proxy.conf.json** na pasta FRONT
## Desafio


### Instruções

- Utilizar o GIT para gerenciar o Projeto
- Subir o código fonte para seu repository GITHUB
- opcional - Recomendamos utilzar o Docker para cada aplicação (dockerfiles separados)

### Backend - Exercícios

1. Utilize um banco de dados Relacional ou NoSQL e crie uma tabela/collection no Banco de Dados com os seguintes campos: Id, Nome, CPFm Email, Telefone, Sexo, DataNascimento

2. Expor um conjunto d eWeb APIs (REST/Json) utilizando ASP .NET ou NodeJS que possibilite a manutenção do Cadastro de Usuários, com base na tabela criada no exercício. Estas APIs deverão possibilitar a Consulta, Inclusão, Atualização e Exclusão dos dados (CRUD).

3. Criar uma interface (orientação à objetos) e implementá-la no código, utilizando-a em pelo menos 2 clases diferentes.
Exemplo: interface representando as ações descritas no exercício 2, com implementação para retorno do banco de dados e implementação para retorno de dados em memória.

**Frontend - Atividade Opcional (diferencial)**

Construir um front-end para o cadastro de usuários consumindo as APIs do exercício 2
PS: Recomendadmos utilizar Angular 2+, porém, utilize a linguagem de sua preferência

## Referências da API 

#### Lista de usuários cadastrados

```http
  GET /usuários
```
#### Ver usuário

```http
  GET /usuarios/:id
```

#### Criar usuário

```http
  POST /usuarios
```

#### Update do usuário

```http
  PATCH /usuarios/:id
```

#### Deletar usuário

```http
  DELETE /usuarios/:id
```

**Parametro**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário |

