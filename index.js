const express = require('express');
const sequelize = require('./db');
require('dotenv').config();
const cors =require('cors');
const thousandsunny = require('./thousandsunny.js'); 

const app = express();
app.use(express.json());
app.use(cors());

// Probar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a PostgreSQL (onepiece)'))
  .catch(err => console.error('❌ Error DB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor conectado a la DB onepiece 🏴‍☠️');
});

app.get('/thousandsunny', async (req, res) => {
  try {
    const registros = await thousandsunny.findAll();
    res.json(registros);
  } catch (error) {
    console.error('Error al obtener registros:', error);
    res.status(500).json({ error: 'Error al obtener los registros', details: error.message });
  }
});

app.post('/thousandsunny', async (req, res) => {
  try {
    const { nombre, puesto, bounty } = req.body;

    if (!nombre || !puesto || !bounty) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const nuevouser = await thousandsunny.create({
      nombre,
      puesto,
      bounty
    });

    res.status(201).json({
      message: '✅ Registro creado correctamente',
      data: nuevouser
    });

  } catch (error) {
    console.error('❌ Error al crear registro:', error);
    res.status(500).json({
      error: 'Error al crear el registro',
      details: error.message
    });
  }
});


const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));



// const xhr = new XMLHttpRequest();
const url = "http://127.0.0.1:5500/FRONTEND/sunny/index.html";

// xhr= open;
// xhr= onreadystatechange = someHandler;
// xhr= send();
