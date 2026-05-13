# 🚗 Planejamento do Projeto - Carona Universitária Inteligente.

## 📄 Modelo de Processo Escolhido
O modelo adotado foi o Scrum, uma metodologia ágil baseada em ciclos iterativos e incrementais (sprints), com foco na entrega contínua de valor.

---

## 📌 Justificativa
O Scrum foi escolhido por permitir:
- Entregas rápidas e contínuas
- Adaptação a mudanças
- Organização da equipe
- Validação contínua do MVP

---

## ⚙️ Estrutura do Processo
- Iterações: 5 sprints  
- Duração: 2 semanas cada  
- Estratégia: cada sprint entrega uma funcionalidade completa (frontend + backend + testes)

---

## 🚀 Sprints

### 🟢 Sprint 1 — Autenticação e Base
- Cadastro de usuário (API + tela)
- Login (API + tela)
- Estrutura inicial do banco
- Validação de dados
- Testes básicos

### 🟢 Sprint 2 — Caronas
- Criar carona
- Listar caronas
- Integração frontend + backend
- Testes

### 🟢 Sprint 3 — Participação
- Entrar na carona
- Sair da carona
- Controle de vagas
- Testes

### 🟢 Sprint 4 — Avaliações e Perfil
- Avaliar usuários
- Visualizar perfil
- Média de avaliações
- Testes

### 🟢 Sprint 5 — Finalização
- Histórico de caronas
- Correção de bugs
- Ajustes de UI
- Deploy

---

## 👥 Papéis da Equipe
- Alisson — Scrum Master / Product Owner
- Renan — Desenvolvedor Backend
- Luhan — Desenvolvedor Frontend
- Virgilio — QA (Testes) e Documentação 

---

## 📋 Backlog Inicial

| ID | Funcionalidade        | Prioridade |
|----|----------------------|------------|
| 1  | Cadastro usuário     | Alta       |
| 2  | Login                | Alta       |
| 3  | Criar carona         | Alta       |
| 4  | Listar caronas       | Alta       |
| 5  | Entrar na carona     | Alta       |
| 6  | Avaliação            | Média      |
| 7  | Perfil               | Média      |
| 8  | Histórico            | Baixa      |

---

## 🔌 Rotas e JSON

### 1 - Cadastro
**POST /usuarios**
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456",
  "telefone": "44999999999",
  "rgm": "123"
}
```

---

### 2 - Login
**POST /auth/login**
```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

---

### 3 - Criar Carona
**POST /caronas**
```json
{
  "motorista_id": "uuid",
  "rota_inicio": "Casa",
  "rota_final": "Faculdade",
  "horario_partida": "2026-06-01T18:00:00",
  "valor_total": 20,
  "vagas": 3
}
```

---

### 4 - Entrar na Carona
**POST /caronas/:id/entrar**
```json
{
  "estudante_id": "uuid"
}
```

---

### 5 - Avaliação
**POST /avaliacoes**
```json
{
  "avaliador_id": "uuid",
  "avaliado_id": "uuid",
  "carona_id": "uuid",
  "nota": 5,
  "comentario": "Muito bom"
}
```

---

## 📅 Cronograma

| Semana | Sprint | Atividade |
|--------|--------|----------|
| 1-2    | 1      | Autenticação |
| 3-4    | 2      | Caronas |
| 5-6    | 3      | Participação |
| 7-8    | 4      | Avaliações |
| 9-10   | 5      | Finalização |

---

## 🛠️ Ferramentas
- GitHub  
- Trello  
- Figma  


---

## 🎨 Desenvolvimento Frontend — Landing Page

Foi desenvolvida a landing page inicial do projeto **Carona Universitária Inteligente**, com o objetivo de apresentar a proposta da plataforma, seus benefícios e funcionalidades principais aos usuários.

A interface foi construída utilizando tecnologias modernas de desenvolvimento web, com foco em responsividade, experiência do usuário e organização visual.

### ✅ Funcionalidades da Landing Page
- Apresentação do projeto
- Seção de benefícios
- Navegação responsiva
- Botões de ação
- Estrutura adaptada para dispositivos móveis
- Identidade visual do sistema

### 💻 Tecnologias Utilizadas
- React
- JavaScript
- HTML5
- CSS3
- Git e GitHub

### 🎯 Objetivo
A landing page serve como protótipo funcional inicial do sistema, permitindo validar a interface e a experiência do usuário antes da integração completa com o backend.

### 🔗 Repositórios e Deploy
- Frontend: https://github.com/Renn4nn/carona-universitaria-frontend
- Backend: https://github.com/Renn4nn/carona-universitaria-backend
- Deploy: https://carona-universitaria-landing-page.vercel.app/

---

## Requisitos e Modelagem

## ✅ Requisitos Funcionais

RF01: O sistema deve permitir o cadastro de usuários estudantes e motoristas.

RF02: O sistema deve permitir login e autenticação de usuários.

RF03: O sistema deve permitir que motoristas criem ofertas de carona.

RF04: O sistema deve listar caronas disponíveis para os usuários.

RF05: O sistema deve permitir entrada e saída de passageiros nas caronas.

RF06: O sistema deve controlar automaticamente a quantidade de vagas disponíveis.

RF07: O sistema deve permitir avaliação entre usuários após a realização da carona.

## ✅ Requisitos Não Funcionais

RNF01: O sistema deve possuir interface responsiva para dispositivos móveis e desktops.

RNF02: O sistema deve garantir segurança e proteção dos dados dos usuários.

RNF03: O sistema deve apresentar boa performance nas requisições da API.

RNF04: O sistema deve possuir fácil usabilidade e navegação intuitiva.

## 📌 Casos de Uso
Caso 1 — Cadastro de Usuário

O estudante realiza cadastro informando nome, e-mail, telefone, RGM e senha para acessar o sistema.

Caso 2 — Login no Sistema

O usuário informa e-mail e senha para autenticação.

Caso 3 — Criar Carona

O motorista cadastra uma nova carona com origem, destino, horário e quantidade de vagas.

Caso 4 — Participar da Carona

O estudante seleciona uma carona disponível e solicita participação.

Caso 5 — Avaliação

Após a conclusão da carona, os usuários podem realizar avaliações entre si.

## 🗂️ Entidades do Sistema

| Entidade     | Atributos                                                               |
| ------------ | ----------------------------------------------------------------------- |
| Usuário      | id, nome, email, senha, telefone, rgm                                   |
| Motorista    | id_motorista, CNH, veículo, placa                                       |
| Passageiro   | id_passageiro, preferência                                              |
| Carona       | id_carona, rota_inicio, rota_final, horario_partida, vagas, valor_total |
| Participação | id_participacao, status                                                 |
| Avaliação    | id_avaliacao, nota, comentario                                          |

## 🧩 DER (Diagrama Entidade-Relacionamento)

USUÁRIO
- id
- nome
- email
- senha
- telefone
- rgm

        |
        | 1:N
        |

CARONA
- id_carona
- rota_inicio
- rota_final
- horario_partida
- vagas
- valor_total

        |
        | 1:N
        |

PARTICIPAÇÃO
- id_participacao
- status

        |
        | N:1
        |

AVALIAÇÃO
- id_avaliacao
- nota
- comentario

 ## 📏 Regras de Negócio

Regra 1: Apenas usuários cadastrados poderão criar ou participar de caronas.

Regra 2: Uma carona não poderá exceder o número máximo de vagas disponíveis.

Regra 3: Apenas usuários participantes da carona poderão realizar avaliações.

Regra 4: O motorista responsável poderá cancelar a carona antes do horário de partida.

## 🧠 Considerações

O projeto Carona Universitária Inteligente foi modelado utilizando conceitos de desenvolvimento ágil e arquitetura web moderna, visando oferecer uma solução prática, segura e acessível para estudantes universitários.

A modelagem contempla funcionalidades essenciais como autenticação, gerenciamento de caronas, controle de participação e avaliações entre usuários. O sistema foi estruturado para permitir crescimento escalável e futuras melhorias, garantindo organização, manutenção e evolução contínua do software.

O projeto também proporciona experiência prática em desenvolvimento full stack, integração frontend/backend, modelagem de banco de dados e utilização de metodologias ágeis no processo de desenvolvimento.

## 🧠 Considerações Finais
O projeto foi planejado para entregar valor incremental em cada sprint, garantindo evolução contínua e validação do sistema até a entrega do MVP funcional.

