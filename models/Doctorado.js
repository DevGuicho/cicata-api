const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Doctorado = sequelize.define(
  'Doctorado',
  {
    institucionPrevia: {
      type: Sequelize.STRING,
    },
    paisInst: {
      type: Sequelize.STRING,
    },
    graduado: {
      type: Sequelize.STRING,
    },
    posgrado: {
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

module.exports = Doctorado;
