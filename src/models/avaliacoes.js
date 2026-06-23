import connection from '../database/connection.js';

class AvaliacoesModel {
  findAll(callback) {
    const sql = 'SELECT * FROM avaliacoes';
    connection.query(sql, callback);
  }

  findById(id, callback) {
    const sql = 'SELECT * FROM avaliacoes WHERE id = ?';
    connection.query(sql, [id], callback);
  }

  create(dados, callback) {
    const { avaliador_id, avaliado_id, carona_id, nota, comentario } = dados;
    const sql = `
      INSERT INTO avaliacoes
      (avaliador_id, avaliado_id, carona_id, nota, comentario)
      VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
      sql,
      [avaliador_id, avaliado_id, carona_id, nota, comentario ?? null],
      callback
    );
  }

  update(id, dados, callback) {
    const { nota, comentario } = dados;
    const sql = `
      UPDATE avaliacoes
      SET nota = ?, comentario = ?
      WHERE id = ?
    `;

    connection.query(sql, [nota, comentario ?? null, id], callback);
  }

  delete(id, callback) {
    const sql = 'DELETE FROM avaliacoes WHERE id = ?';
    connection.query(sql, [id], callback);
  }
}

export default new AvaliacoesModel();
