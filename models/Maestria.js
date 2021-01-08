const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');

const Maestria = sequelize.define(
  'Maestria',
  {
    institutoMaestria: {
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

module.exports = Maestria;
