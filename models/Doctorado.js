const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Doctorado = sequelize.define(
  'Doctorado',
  {
    carrera: {
      type: Sequelize.STRING,
    },
    institutoPais: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Doctorado;
