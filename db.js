const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_ONEPIECE,   // nombre de tu DB, ej: onepiece
  process.env.DB_USER,   // tu usuario de PostgreSQL
  process.env.DB_PASS,   // tu contraseña
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
);

module.exports = sequelize;
