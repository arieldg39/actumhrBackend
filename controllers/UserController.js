const dbConnection = require('../db/db');

const UserController = {};

UserController.login = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM tb_user_account WHERE email = ? AND password = ?';

    dbConnection.query(query, [username, password], (error, results) => {
        if (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en el servidor' });
        } else {
        if (results.length === 1) {
            res.json({ message: 'Usuario válido' });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
        }
    });
};

UserController.altaUser = (req, res) =>{

};

module.exports = UserController;
