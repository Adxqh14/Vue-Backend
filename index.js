const express = require('express');
const sequelize = require('./db');
require('dotenv').config();

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
