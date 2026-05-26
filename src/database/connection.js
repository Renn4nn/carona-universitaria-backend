import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'carona_universitaria'
});

connection.connect((erro) => {

  if (erro) {
    console.error('Erro ao conectar no banco:', erro);
    return;
  }

  console.log('Conectado ao MySQL');

});

export default connection;