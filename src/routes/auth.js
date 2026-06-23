import express from 'express';
import jwt from 'jsonwebtoken';
import connection from '../database/connection.js';
import { segredo } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', (req, res) => {

  const { email, senha } = req.body;

  const sql = 'SELECT * FROM estudantes WHERE email = ? AND senha = ?';

  connection.query(sql, [email, senha], (erro, resultados) => {

    if (erro) {
      return res.status(500).json({
        erro: 'Erro ao autenticar estudante'
      });
    }

    if (resultados.length === 0) {
      return res.status(401).json({
        erro: 'E-mail ou senha inválidos'
      });
    }

    const usuario = resultados[0];

    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      segredo,
      {
        expiresIn: '1h'
      }
    );

    res.json({
      mensagem: 'Login realizado com sucesso',
      token: token
    });

  });

});

router.post('/register', (req, res) => {
  const {
    nome,
    telefone,
    cpf,
    rgm,
    email,
    senha,
    instituicao,
    curso,
    periodo,
    verificado = false,
    ativo = true
  } = req.body;

  const sql = `
    INSERT INTO estudantes (
      nome,
      telefone,
      cpf,
      rgm,
      email,
      senha,
      instituicao,
      curso,
      periodo,
      verificado,
      ativo
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [
      nome,
      telefone,
      cpf,
      rgm,
      email,
      senha,
      instituicao,
      curso,
      periodo,
      verificado,
      ativo
    ],
    (erro, resultado) => {
      if (erro) {
        return res.status(500).json({
          erro: 'Erro ao cadastrar estudante'
        });
      }

      res.status(201).json({
        mensagem: 'Estudante cadastrado com sucesso',
        id: resultado.insertId
      });
    }
  );
});

router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.replace('Bearer ', '')
    : null;

  if (!token) {
    return res.status(401).json({
      erro: 'Token nao informado'
    });
  }

  jwt.verify(token, segredo, (erro, usuarioToken) => {
    if (erro) {
      return res.status(401).json({
        erro: 'Token invalido'
      });
    }

    const sql = 'SELECT * FROM estudantes WHERE id = ?';

    connection.query(sql, [usuarioToken.id], (erroBusca, resultados) => {
      if (erroBusca) {
        return res.status(500).json({
          erro: 'Erro ao buscar estudante autenticado'
        });
      }

      if (resultados.length === 0) {
        return res.status(404).json({
          erro: 'Estudante nao encontrado'
        });
      }

      res.status(200).json(resultados[0]);
    });
  });
});

export default router;
