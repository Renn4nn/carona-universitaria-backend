# 🚗 Planejamento do Projeto - Carona Universitária Inteligente

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

## 🧠 Considerações
O projeto foi planejado para entregar valor incremental em cada sprint, garantindo evolução contínua e validação do sistema até a entrega do MVP funcional.
