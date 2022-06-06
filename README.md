# Resume Online Api

> API para o [Resume-online](https://github.com/CarlosAndre02/resume-online-frontend) usando NodeJs.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js v16
- Express
- Postgres
- Docker
- JWT
- Amazon S3

## Como rodar o projeto

1. Configure as variáveis de ambiente. Crie uma cópia do arquivo `.env.example` chamada `.env`.

2. Instale todos os pacotes do projeto
```bash
npm install
```

3. Suba o serviço do postgres
```bash
npm run docker:up
```
4. Rode as migrations do banco de dados
```bash
npm run migration
```
5. Rode as seeds do banco de dados
```bash
npm run seed
```

6. Rode o projeto.
```bash
npm run dev
```

7. Ao terminar, encerre o servidor pressionando `Ctrl + c` e o docker rodando:
```bash
npm run docker:down
```
