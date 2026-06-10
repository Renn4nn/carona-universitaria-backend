import connection from '../database/connection.js';

const EstudanteModel = {

  findAll(callback) {
    const sql = 'SELECT * FROM estudantes';

    connection.query(sql, callback);
  },

  findById(id, callback) {
    const sql = 'SELECT * FROM estudantes WHERE id = ?';

    connection.query(sql, [id], callback);
  },

  create(estudante, callback) {
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

    connection.query(sql, [
      estudante.nome,
      estudante.telefone,
      estudante.cpf,
      estudante.rgm,
      estudante.email,
      estudante.senha,
      estudante.instituicao,
      estudante.curso,
      estudante.periodo,
      estudante.verificado,
      estudante.ativo
    ], callback);
  },

  update(id, estudante, callback) {
    const sql = `
            UPDATE estudantes
            SET
                nome = ?,
                telefone = ?,
                cpf = ?,
                rgm = ?,
                email = ?,
                senha = ?,
                instituicao = ?,
                curso = ?,
                periodo = ?,
                verificado = ?,
                ativo = ?
            WHERE id = ?
        `;

    connection.query(sql, [
      estudante.nome,
      estudante.telefone,
      estudante.cpf,
      estudante.rgm,
      estudante.email,
      estudante.senha,
      estudante.instituicao,
      estudante.curso,
      estudante.periodo,
      estudante.verificado,
      estudante.ativo,
      id
    ], callback);
  },

  delete(id, callback) {
    const sql = 'DELETE FROM estudantes WHERE id = ?';

    connection.query(sql, [id], callback);
  }

};

export default EstudanteModel;