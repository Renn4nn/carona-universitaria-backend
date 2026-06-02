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

export default router;