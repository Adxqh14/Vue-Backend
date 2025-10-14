


const express = require('express');
const sequelize = require('./db');
require('dotenv').config();
const cors =require('cors');


const app = express();
app.use(express.json());

// Probar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a PostgreSQL (onepiece)'))
  .catch(err => console.error('❌ Error DB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor conectado a la DB onepiece 🏴‍☠️');
});

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));



// const xhr = new XMLHttpRequest();
const url = "http://127.0.0.1:5500/FRONTEND/sunny/index.html";

// xhr= open;
// xhr= onreadystatechange = someHandler;
// xhr= send();
