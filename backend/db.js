const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Pooja12*',
  database: 'studtask',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

module.exports = connection;
