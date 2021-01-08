const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const DireccionesTesis = sequelize.define(
  'DireccionesTesis',
  {
    fechaInicio: {
      type: Sequelize.DATE,
    },
    fechaFin: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = DireccionesTesis;
