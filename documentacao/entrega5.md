# Atividade 5 - Implementacao

## Link do Repositorio

GitHub: [Renn4nn/carona-universitaria-backend](https://github.com/Renn4nn/carona-universitaria-backend)

---

## Descricao da Implementacao

Nesta etapa, o backend foi descrito com **Node.js**, **Express** e conexao com banco **MySQL**. A API contempla CRUD completo para estudantes, caronas, participantes de caronas e avaliacoes, alem de autenticacao com JWT. A estrutura permite organizar o fluxo completo do sistema: cadastro de estudantes, criacao de caronas, entrada de passageiros e avaliacao dos usuarios apos a viagem.

---

## Estrutura do Backend

### Controllers

Os controllers sao responsaveis por receber as requisicoes, validar os dados principais, chamar os services e retornar as respostas da API.

- `EstudanteController`: responsavel pelo CRUD de estudantes.
- `CaronaController`: responsavel pelo CRUD de caronas.
- `CaronaParticipanteController`: responsavel pelo CRUD de participantes vinculados as caronas.
- `AvaliacaoController`: responsavel pelo CRUD de avaliacoes.
- `AuthController`: responsavel pelo login e geracao do token JWT.

### Services

A camada de services concentra as regras de negocio e a comunicacao com o banco de dados.

- `EstudanteService`: cria, lista, busca, atualiza e remove estudantes.
- `CaronaService`: cria, lista, busca, atualiza e remove caronas, controlando motorista, origem, destino, horario e vagas.
- `CaronaParticipanteService`: controla cadastro, listagem, atualizacao de status e remocao de participantes em uma carona.
- `AvaliacaoService`: registra, consulta, atualiza e remove avaliacoes entre estudantes.
- `AuthService`: valida credenciais e prepara os dados para geracao do token JWT.

### Models

- `estudantes`
- `caronas`
- `avaliacoes`
- `caronas_participantes`

Essas tabelas representam os principais dados do sistema: usuarios da plataforma, caronas cadastradas, passageiros vinculados as caronas e avaliacoes apos as viagens.

### Routes

As rotas da API foram organizadas para cobrir todas as operacoes principais do sistema.

#### Autenticacao

- `POST /api/auth/login`: realiza login e retorna token JWT.

#### Estudantes

- `GET /api/estudantes`: lista todos os estudantes.
- `GET /api/estudantes/:id`: busca um estudante pelo id.
- `POST /api/estudantes`: cadastra um novo estudante.
- `PUT /api/estudantes/:id`: atualiza os dados de um estudante.
- `DELETE /api/estudantes/:id`: remove um estudante.

#### Caronas

- `GET /api/caronas`: lista todas as caronas.
- `GET /api/caronas/:id`: busca uma carona pelo id.
- `POST /api/caronas`: cadastra uma nova carona.
- `PUT /api/caronas/:id`: atualiza os dados de uma carona.
- `DELETE /api/caronas/:id`: remove uma carona.

#### Caronas Participantes

- `GET /api/caronas-participantes`: lista todos os participantes de caronas.
- `GET /api/caronas-participantes/:id`: busca uma participacao pelo id.
- `POST /api/caronas-participantes`: cadastra um estudante como participante de uma carona.
- `PUT /api/caronas-participantes/:id`: atualiza status, valor ou confirmacao da participacao.
- `DELETE /api/caronas-participantes/:id`: remove uma participacao.

#### Avaliacoes

- `GET /api/avaliacoes`: lista todas as avaliacoes.
- `GET /api/avaliacoes/:id`: busca uma avaliacao pelo id.
- `POST /api/avaliacoes`: cadastra uma nova avaliacao.
- `PUT /api/avaliacoes/:id`: atualiza nota ou comentario de uma avaliacao.
- `DELETE /api/avaliacoes/:id`: remove uma avaliacao.

O arquivo `src/index.js` configura o servidor Express, habilita CORS, leitura de JSON e registra as rotas principais da API.

---

## CRUDs Desenvolvidos


| Integrante | Entidade              | Operacoes                    |
| ---------- | --------------------- | ---------------------------- |
| Renan      | Estudantes            | CREATE, READ, UPDATE, DELETE |
| Alisson    | Caronas               | CREATE, READ, UPDATE, DELETE |
| Luhan      | Avaliacoes            | CREATE, READ, UPDATE, DELETE |
| Virgilio   | Caronas Participantes | CREATE, READ, UPDATE, DELETE |


Foram desenvolvidos os CRUDs das quatro entidades principais do sistema. Com isso, a API permite gerenciar estudantes, cadastrar e atualizar caronas, controlar passageiros participantes e registrar avaliacoes.

---

## Funcionalidades Implementadas

### Funcionalidade 1: Cadastro e gerenciamento de estudantes

Foi implementado o CRUD de estudantes, permitindo listar todos os estudantes, buscar por id, cadastrar, atualizar e remover registros. Os dados utilizados incluem nome, telefone, CPF, RGM, e-mail, senha, instituicao, curso, periodo, verificacao e status ativo.

### Funcionalidade 2: Cadastro e gerenciamento de caronas

Foi implementado o CRUD de caronas, permitindo que motoristas criem viagens informando origem, destino, horario e quantidade de vagas. Tambem e possivel listar caronas disponiveis, consultar uma carona especifica, atualizar informacoes e remover uma carona quando necessario.

### Funcionalidade 3: Controle de participantes nas caronas

Foi implementado o CRUD de participantes de caronas. Essa funcionalidade permite vincular estudantes a uma carona, registrar valor individual, status da solicitacao e data de confirmacao. Dessa forma, o sistema controla quais passageiros estao pendentes ou confirmados em cada viagem.

### Funcionalidade 4: Avaliacoes entre estudantes

Foi implementado o CRUD de avaliacoes. Apos uma carona, estudantes podem registrar nota e comentario para outro usuario, vinculando a avaliacao a uma carona especifica. Isso contribui para a confiabilidade e reputacao dos participantes da plataforma.

### Funcionalidade 5: Autenticacao com JWT

Foi implementada uma rota de login que recebe `email` e `senha`, consulta o banco de dados e, caso as credenciais sejam validas, retorna um token JWT. Esse token e usado para proteger rotas sensiveis, como cadastro, atualizacao e remocao de dados.pit

---

## Banco de Dados

### Tipo

O backend utiliza **MySQL**, configurado para o banco `carona_universitaria`.

### Estrutura

O banco possui as seguintes tabelas principais:

- `estudantes`: armazena os dados dos usuarios, incluindo identificacao academica, contato, curso, periodo, status de verificacao e status ativo.
- `caronas`: armazena caronas criadas por motoristas, com origem, destino, horario e quantidade de vagas.
- `caronas_participantes`: relaciona estudantes com caronas, registrando valor, status e data de confirmacao.
- `avaliacoes`: registra notas e comentarios entre estudantes apos uma carona.

---

## Autenticacao

### Tipo

A autenticacao foi implementada com **JWT (JSON Web Token)**.

### Funcionamento

O usuario realiza login pela rota `POST /api/auth/login`, enviando `email` e `senha`. O backend consulta a tabela `estudantes`; se encontrar um registro correspondente, gera um token JWT com `id`, `nome` e `email` do estudante. O token expira em 1 hora.

As rotas protegidas utilizam middleware de autenticacao. Dessa forma, operacoes de criacao, atualizacao e remocao exigem token valido para garantir maior seguranca no uso da API.

---

## Testes Realizados

Todos os testes foram realizados manualmente no **Postman**, validando as requisicoes HTTP, os corpos JSON, os retornos da API e o comportamento das rotas protegidas por token JWT.

Foram testados os seguintes fluxos:

- teste de login com `POST /api/auth/login` e retorno do token JWT;
- teste de rotas protegidas utilizando o token no header da requisicao;
- teste do CRUD de estudantes: CREATE, READ, UPDATE e DELETE;
- teste do CRUD de caronas: CREATE, READ, UPDATE e DELETE;
- teste do CRUD de caronas participantes: CREATE, READ, UPDATE e DELETE;
- teste do CRUD de avaliacoes: CREATE, READ, UPDATE e DELETE;
- teste de criacao das tabelas `estudantes`, `caronas`, `caronas_participantes` e `avaliacoes`;

Os testes no Postman confirmaram o funcionamento dos quatro CRUDs, da autenticacao e das relacoes principais entre estudantes, caronas, participantes e avaliacoes.

---

## Dificuldades Encontradas

### Dificuldade 1: Organizacao das camadas do backend

Uma dificuldade foi estruturar o backend separando responsabilidades entre routes, controllers e services. A separacao dessas camadas ajuda na manutencao, evita repeticao de codigo e deixa o projeto mais facil de evoluir.

### Dificuldade 2: Integracao entre autenticacao e rotas protegidas

Outra dificuldade foi configurar a autenticacao JWT para proteger operacoes sensiveis. Foi necessario criar uma regra de validacao de token e aplicar essa protecao nas rotas que alteram dados.

### Dificuldade 3: Modelagem das relacoes do sistema

O sistema possui relacoes entre estudantes, caronas, participantes e avaliacoes. A modelagem exigiu cuidado para representar corretamente motoristas, passageiros, status da participacao e avaliacoes vinculadas a uma carona.

---

## Consideracoes

A implementacao atual representa a base funcional do backend do **Carona Universitaria Inteligente**. O sistema possui servidor Express configurado, conexao com MySQL, CRUD completo das quatro entidades principais e autenticacao com JWT.

O banco de dados foi planejado para as principais funcionalidades apresentadas no pitch: conectar estudantes da mesma instituicao, organizar caronas, controlar participantes e permitir avaliacoes. Como proximos passos, o projeto pode evoluir com melhorias de seguranca, criptografia de senha, validacoes mais completas e deploy da API para uso integrado com o aplicativo mobile.

### Tabelas em um .txt
[ver tabelas](/documentacao/arquivos/tabelas.txt)