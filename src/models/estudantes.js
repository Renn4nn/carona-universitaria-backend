import connection from '../database/connection.js';

class EstudantesModel {
  findAll() {
    const sql = 'SELECT * FROM estudantes';
    connection.query(sql);
  }

  findById(id) {
    const sql = 'SELECT * FROM estudantes WHERE id = ?';
    connection.query(sql, [id]);
  }

  create(dados) {
    const { nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo } = dados;
    const sql = 'INSERT INTO estudantes (nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo]);
  }

  update(id, dados) {
    const { nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo } = dados;
    const sql = 'UPDATE estudantes SET nome = ?, telefone = ?, cpf = ?, rgm = ?, email = ?, senha = ?, instituicao = ?, curso = ?, periodo = ? WHERE id = ?';
    connection.query(sql, [nome, telefone, cpf, rgm, email, senha, instituicao, curso, periodo, id]);
  }

  delete(id) {
    const sql = 'DELETE FROM estudantes WHERE id = ?';
    connection.query(sql, [id]);
  }
}

export default new EstudantesModel();