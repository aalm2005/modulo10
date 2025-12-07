const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. Configuración de la conexión
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Tu usuario de SQL
    password: '',      // Tu contraseña de SQL
    database: 'videojuegos_db'
});

db.connect(err => {
    if (err) console.log('Error conectando a BD:', err);
    else console.log('Conectado a MySQL');
});

// 2. Ruta de Registro
app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, password], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Usuario registrado', id: result.insertId });
    });
});

// 3. Ruta de Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json(err);
        
        if (result.length > 0) {
            // Login exitoso
            res.json({ success: true, message: 'Bienvenido', usuario: result[0].nombre });
        } else {
            // Credenciales incorrectas
            res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});