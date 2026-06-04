import connection from '../database/connection.js';

class CaronasParticipantesModel {
  findAll(callback) {
    const sql = 'SELECT * FROM caronas_participantes';
    connection.query(sql, callback);
  }

  findByCarona(carona_id, callback) {
    const sql = 'SELECT * FROM caronas_participantes WHERE carona_id = ?';
    connection.query(sql, [carona_id], callback);
  }

  findByEstudante(estudante_id, callback) {
    const sql = 'SELECT * FROM caronas_participantes WHERE estudante_id = ?';
    connection.query(sql, [estudante_id], callback);
  }

  findById(id, callback) {
    const sql = 'SELECT * FROM caronas_participantes WHERE id = ?';
    connection.query(sql, [id], callback);
  }

  create(dados, callback) {
    const { carona_id, estudante_id, valor, status } = dados;
    const sql = `
      INSERT INTO caronas_participantes
      (carona_id, estudante_id, valor, status)
      VALUES (?, ?, ?, ?)
    `;

    connection.query(
      sql,
      [carona_id, estudante_id, valor, status],
      callback
    );
  }

  updateStatus(id, status, callback) {
    let sql =
      'UPDATE caronas_participantes SET status = ? WHERE id = ?';

    if (status === 'confirmado') {
      sql =
        'UPDATE caronas_participantes SET status = ?, confirmado_em = NOW() WHERE id = ?';
    }

    connection.query(sql, [status, id], callback);
  }

  delete(id, callback) {
    const sql =
      'DELETE FROM caronas_participantes WHERE id = ?';

    connection.query(sql, [id], callback);
  }
}

export default new CaronasParticipantesModel();