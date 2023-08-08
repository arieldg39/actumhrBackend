const mysql = require('mysql');
require('dotenv').config();

const dbConfig = {
    host: process.env.MSSQL_HOST,     
    user: process.env.MSSQL_USER,    
    password: process.env.MSSQL_PASSWORD, 
    database: process.env.MSSQL_DATABASE
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
    } else {
        console.log('Conexión a MySQL establecida');
    }
});

module.exports = connection;
