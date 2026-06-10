import connection from '../database/connection.js';

export const listarCaronas = (callback) => {
    connection.query('SELECT * FROM caronas', callback);
};

export const buscarCaronaPorId = (id, callback) => {
    connection.query(
        'SELECT * FROM caronas WHERE id = ?',
        [id],
        callback
    );
};

export const criarCarona = (dados, callback) => {
    connection.query(
        'INSERT INTO caronas SET ?',
        dados,
        callback
    );
};

export const atualizarCarona = (id, dados, callback) => {
    connection.query(
        'UPDATE caronas SET ? WHERE id = ?',
        [dados, id],
        callback
    );
};

export const deletarCarona = (id, callback) => {
    connection.query(
        'DELETE FROM caronas WHERE id = ?',
        [id],
        callback
    );
};