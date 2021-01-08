const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Alumno = sequelize.define(
  'alumno',
  {
    
    fechaIngreso: {
      type: Sequelize.DATE,
    },
    tesis: {
      type: Sequelize.STRING,
    },
    asesor: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Alumno;
