import { Router } from 'express';
import connection from '../database/connection.js';
import { protegerRota } from '../middleware/auth.js';

const router = Router();

router.get('/estudantes', (req, res) => {
  const sql = 'SELECT * FROM estudantes';
  connection.query(sql, (erro, resultados) => {
    if (erro) {
      res.status(500).json(
        { erro: "Erros aos buscar estudantes" });
    }
    res.status(200).json(resultados);
  });
});

router.get('/estudantes/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM estudantes WHERE id = ?';
  connection.query(sql, [id], (erro, resultados) => {
    if (erro) {
      res.status(500).json(
        { erro: "Erros aos buscar estudantes" });
    }
    if (resultados.length === 0) {
      return res.status(404).json({ erro: "Estudante não encontrado" });
    }
    res.status(200).json(resultados[0]);
  });
});

router.post('/estudantes', protegerRota, (req, res) => {
  const { nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo } = req.body;
  const sql = `INSERT INTO estudantes (nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo) VALUES (?,?,?,?,?,?,?,?,?)`;

  connection.query(sql, [nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo], (erro, resultados) => {
    if (erro) {
      return res.status(500).json(
        { erro: "Erro ao insrir estudante" }
      )
    }
    res.status(201).json({
      mensagem: "Estudante inserido com sucesso",
      idInserido: resultados.insertId
    });
  })
});

router.put('/estudantes/:id', protegerRota, (req, res) => {
  const id = req.params.id;
  const { nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo } = req.body;
  const sql = `UPDATE estudantes SET nome = ?, telefone = ?, cpf = ?, rgm = ?, email = ?, senha = ?, instituicao = ?, curso = ?, periodo = ? WHERE id = ?`;

  connection.query(sql, [nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo, id], (erro, resultados) => {
    if (erro) {
      return res.status(500).json(
        { erro: "Erro ao insrir estudante" }
      )
    }
    res.status(201).json({
      mensagem: "Estudante atualizado com sucesso"
    });
  })
});

router.delete('/estudantes/:id', protegerRota, (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM estudantes WHERE id = ?';
  connection.query(sql, [id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({
        erro: 'Erro ao remover estudante'
      });
    }
    res.json({
      mensagem: 'Estudante removido com sucesso'
    });
  });
});

export default router;