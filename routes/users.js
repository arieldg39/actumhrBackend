const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Ruta para validar un usuario
router.post('/login', UserController.login);

module.exports = router;
