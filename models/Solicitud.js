const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');
const Doctorado = require('./Doctorado');
const Maestria = require('./Maestria');

const Solicitud = sequelize.define(
  'Solicitud',
  {
    convocatoria: {
      type: Sequelize.DATE,
      /* primaryKey: true, */
    },
    fechaSolicitud: {
      type: Sequelize.DATE,
    },
    isSubmmited: {
      type: Sequelize.BOOLEAN,
    },
    state: {
      type: Sequelize.STRING,
    },
    observaciones: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

//Solicitud-Mestría
Solicitud.hasOne(Maestria, {
  foreignKey: {
    name: 'solicitudId',
    type: Sequelize.INTEGER,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Maestria.belongsTo(Solicitud, {
  foreignKey: {
    name: 'solicitudId',
    type: Sequelize.INTEGER,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

////Solicitud-Doctorado
Solicitud.hasOne(Doctorado, {
  foreignKey: {
    name: 'solicitudId',
    type: Sequelize.INTEGER,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Doctorado.belongsTo(Solicitud, {
  foreignKey: {
    name: 'solicitudId',
    type: Sequelize.INTEGER,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Solicitud;
