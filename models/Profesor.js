const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Profesor = sequelize.define(
  'profesor',
  {
    
    lineaInvestigacion: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Profesor;
