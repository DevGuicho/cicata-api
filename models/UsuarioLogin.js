const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');
const UsuarioDG = require('./UsuarioDG');

const UsuarioLogin = sequelize.define(
  'UsuarioLogin',
  {
    password: {
      type: Sequelize.STRING,
    },
    pregunta1: {
      type: Sequelize.STRING,
    },
    pregunta2: {
      type: Sequelize.STRING,
    },
    respuesta1: {
      type: Sequelize.STRING,
    },
    respuesta2: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
//UsuarioLogin-UsuarioDG
UsuarioDG.hasOne(UsuarioLogin, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
UsuarioLogin.belongsTo(UsuarioDG, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = UsuarioLogin;
