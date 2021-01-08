const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Maestria = sequelize.define(
  'Maestria',
  {
    institucionPrevia: {
      type: Sequelize.STRING,
    },
    paisInst: {
      type: Sequelize.STRING,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    carrera: {
      type: Sequelize.STRING,
    },
    expProfesional: {
      type: Sequelize.STRING,
    },
    expDocente: {
      type: Sequelize.STRING,
    },
    cursoPropedeutico: {
      type: Sequelize.BOOLEAN,
    },
    year: {
      type: Sequelize.STRING,
    },
    motivacion: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Maestria;
