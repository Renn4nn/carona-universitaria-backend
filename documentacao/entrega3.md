# Atividade 3 — Requisitos e Modelagem

## Requisitos Funcionais

[Ver tabela completa de requisitos](arquivos/requisitos/Requisitos.html)

### RF01
O sistema deve permitir o cadastro de usuários utilizando e-mail institucional e senha.

### RF02
O sistema deve permitir login seguro utilizando autenticação JWT.

### RF03
O motorista deve conseguir cadastrar caronas informando origem, destino, horário e quantidade de vagas.

### RF04
O passageiro deve conseguir buscar caronas disponíveis utilizando filtros de origem e horário.

### RF05
O sistema deve permitir que passageiros solicitem participação em uma carona.

### RF06
O motorista deve conseguir aceitar ou recusar solicitações de passageiros.

### RF07
O sistema deve possuir chat interno entre motorista e passageiros confirmados.

### RF08
O sistema deve permitir avaliações entre motoristas e passageiros após a finalização da carona.

---

## Requisitos Não Funcionais

[Ver tabela completa de requisitos](arquivos/requisitos/Requisitos.html)

### RNF01
O sistema deve possuir tempo de resposta inferior a 3 segundos para buscas de caronas.

### RNF02
O sistema deve utilizar criptografia para armazenamento seguro das senhas.

### RNF03
O sistema deve ser compatível com dispositivos Android e iOS.

### RNF04
O sistema deve possuir interface responsiva e intuitiva para facilitar a usabilidade.

### RNF05
O sistema deve garantir disponibilidade mínima de 99% durante o período letivo.

### RNF06
O sistema deve seguir as diretrizes da LGPD para proteção de dados dos usuários.

### RNF07
O sistema deve registrar logs de auditoria das principais ações realizadas na plataforma.

### RNF08
O sistema deve suportar múltiplos usuários acessando simultaneamente sem perda de desempenho.

---

# Casos de Uso

## Caso 1 — Cadastro de Usuário

### Objetivo
Permitir que estudantes realizem cadastro na plataforma.

### Atores
Usuário

### Fluxo Principal
1. O usuário acessa a tela de cadastro.
2. O usuário informa nome, e-mail institucional, telefone e senha.
3. O sistema valida os dados.
4. O sistema envia e-mail de confirmação.
5. O usuário confirma o cadastro.
6. O sistema ativa a conta.

---

## Caso 2 — Solicitação de Carona

### Objetivo
Permitir que passageiros solicitem participação em uma carona.

### Atores
Passageiro e Motorista

### Fluxo Principal
1. O passageiro pesquisa caronas disponíveis.
2. O sistema exibe as opções compatíveis.
3. O passageiro seleciona uma carona.
4. O passageiro envia solicitação.
5. O motorista recebe a solicitação.
6. O motorista aceita ou recusa o pedido.
7. O sistema notifica o passageiro sobre a decisão.

---

## Caso 3 — Avaliação de Usuários

### Objetivo
Permitir avaliações após a conclusão da carona.

### Atores
Motorista e Passageiro

### Fluxo Principal
1. A carona é finalizada.
2. O sistema libera a tela de avaliação.
3. O usuário atribui nota e comentário.
4. O sistema salva a avaliação.
5. A reputação do usuário é atualizada.

---

## Caso 4 — Cadastro de Carona

### Objetivo
Permitir que motoristas publiquem novas caronas.

### Atores
Motorista

### Fluxo Principal
1. O motorista acessa a área de cadastro de caronas.
2. O motorista informa origem, destino, horário e vagas.
3. O sistema valida os dados.
4. O sistema publica a carona.
5. A carona fica disponível para busca dos passageiros.

# Entidades do Sistema

| Entidade | Atributos |
|---|---|
| Estudantes | id, nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo, verificado, created_at, updated_at |
| Caronas | id, motorista_id, endereco_inicio, endereco_destino, horario_partida, valor_total, vagas, status, recorrente, observacoes, created_at, updated_at, finalizada_em |
| Caronas_Participantes | id, carona_id, estudante_id, valor, confirmado_em, status, created_at |
| Pagamentos | id, carona_id, pagador_id, recebedor_id, valor, pago, metodo, pago_em, created_at |
| Avaliacoes | id, avaliador_id, avaliado_id, carona_id, nota, comentario, created_at |

---

# DER (Diagrama Entidade-Relacionamento)

![DER](imagens/carona_universitaria.drawio.png)

## Principais Relacionamentos

- Um estudante pode criar várias caronas.
- Uma carona pertence a apenas um motorista.
- Uma carona pode possuir vários participantes.
- Um estudante pode participar de várias caronas.
- Uma carona pode possuir vários pagamentos.
- Um estudante pode avaliar outros estudantes após a finalização da carona.

---

# Regras de Negócio

## Regra 1
Somente estudantes verificados com e-mail institucional válido podem cadastrar ou participar de caronas.

## Regra 2
Uma carona não pode ultrapassar a quantidade máxima de vagas definidas pelo motorista.

## Regra 3
O passageiro só poderá avaliar o motorista após a carona ser finalizada.

## Regra 4
O sistema deve impedir pagamentos duplicados para a mesma participação em carona.

## Regra 5
O motorista pode aceitar ou recusar solicitações de participação antes da confirmação da vaga.

## Regra 6
Uma carona finalizada não poderá ser editada ou cancelada.

## Regra 7
O sistema deve calcular automaticamente o valor individual da carona entre os participantes.

## Regra 8
Usuários com muitas avaliações negativas podem ter a conta suspensa pela plataforma.

---

# Considerações

A modelagem foi desenvolvida com foco em um sistema de caronas universitárias seguro e organizado. O DER contempla as principais funcionalidades da aplicação, incluindo cadastro de estudantes, gerenciamento de caronas, controle de participantes, pagamentos e avaliações entre usuários.

A entidade `Estudantes` centraliza os dados dos usuários da plataforma. A entidade `Caronas` representa as viagens criadas pelos motoristas. O relacionamento muitos-para-muitos entre estudantes e caronas foi resolvido através da tabela `Caronas_Participantes`, permitindo controlar confirmações e status de participação.

As entidades `Pagamentos` e `Avaliacoes` foram adicionadas para garantir controle financeiro e reputação dos usuários, aumentando a confiabilidade e segurança da plataforma.