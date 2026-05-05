# 🚗 Carona Universitária Inteligente

## 📚 Entregas Juliana
- [Entrega 2](documentacao/entrega2.md)

---

## 🚀 Tutorial de instalação do projeto


## 📥 1. Clonar o repositório

```bash
git clone https://github.com/Renn4nn/carona-universitaria-backend.git
cd carona-universitaria-backend
```

---

## 📦 2. Instalar dependências

```bash
npm install
```

---

## ⚙️ 3. Configurar variáveis de ambiente

Existe um arquivo `.env.example` no projeto com o seguinte modelo:

```env
# DATABASE_URL="postgresql://postgres:1234@localhost:5432/teste"
DATABASE_URL=
```

### Passos:

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione a string de conexão do seu banco de dados PostgreSQL:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"
```

### Exemplo:

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/teste"
```

⚠️ Certifique-se de que o PostgreSQL está rodando e que o banco já foi criado.

---

## 🐳 Opcional: Rodar PostgreSQL com Docker

Caso não tenha o PostgreSQL instalado:

```bash
docker run \
  --name postgres-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=1234 \
  -e POSTGRES_DB=teste \
  -p 5432:5432 \
  -d postgres
```

---

## 🧬 4. Configurar o Prisma ORM

### Gerar o client do Prisma:

```bash
npx prisma generate
```

### Rodar as migrations:

```bash
npx prisma migrate dev
```

> Isso irá criar as tabelas no banco com base no schema Prisma.

---

## ▶️ 5. Iniciar o servidor

```bash
npm start
```

---

## ✅ Pronto!

O servidor estará rodando e pronto para uso 🚀