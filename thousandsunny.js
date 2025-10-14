const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // misma carpeta que db.js

const thousandsunny = sequelize.define('thousandsunny', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  puesto: { type: DataTypes.STRING, allowNull: false },
  bounty: { type: DataTypes.FLOAT, allowNull: false }
}, {
  tableName: 'thousandsunny',
  timestamps: false
});

module.exports = thousandsunny;
