# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat.

## Propósito do Projeto
O NLW Agents é uma API Node.js para gerenciamento de salas e agentes, utilizando PostgreSQL com extensão pgvector para recursos de IA e busca vetorial.

## Tecnologias e Bibliotecas Utilizadas
- **Node.js**
- **TypeScript**
- **Express** (servidor HTTP)
- **PostgreSQL** (banco de dados)
- **pgvector** (extensão para busca vetorial)
- **Drizzle ORM** (mapeamento objeto-relacional)
- **Docker** e **Docker Compose** (containerização)

## Estrutura do Projeto
- `src/` - Código-fonte da aplicação
  - `db/` - Conexão, seed, migrations e schemas do banco
  - `http/routes/` - Rotas HTTP
  - `server.ts` - Inicialização do servidor
- `docker/` - Scripts de setup do banco
- `docker-compose.yml` - Orquestração dos containers

## Instruções de Uso

### 1. Clonar o repositório
```sh
git clone <url-do-repo>
cd server
```

### 2. Subir o banco de dados com Docker
```sh
docker compose up -d
```

### 3. Instalar dependências
```sh
npm install
```

### 4. Rodar as migrations e seeds (se aplicável)

### 5. Iniciar o servidor
```sh
npm run dev
```

A API estará disponível em `http://localhost:3333`.

---

> Projeto criado para fins educacionais durante o NLW da Rocketseat.
