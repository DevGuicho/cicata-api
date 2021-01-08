const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');
const Doctorado = require('./Doctorado');
const Maestria = require('./Maestria');

const Solicitud = sequelize.define(
  'Solicitud',
  {
    typeRegistro: {
      type: Sequelize.STRING,
      /* primaryKey: true, */
    },
    apellidoPaterno: {
      type: Sequelize.STRING,
    },
    apellidoMaterno: {
      type: Sequelize.STRING,
    },
    nombres: {
      type: Sequelize.STRING,
    },
    fechaNacimiento: {
      type: Sequelize.DATE,
    },
    lugarNacimiento: {
      type: Sequelize.STRING,
    },
    nacionalidad: {
      type: Sequelize.STRING,
    },
    estadoCivil: {
      type: Sequelize.STRING,
    },
    calle: {
      type: Sequelize.STRING,
    },
    noExterior: {
      type: Sequelize.INTEGER,
    },
    noInterior: {
      type: Sequelize.INTEGER,
    },
    colonia: {
      type: Sequelize.STRING,
    },
    CP: {
      type: Sequelize.INTEGER,
    },
    municipio: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    cv: {
      type: Sequelize.STRING,
    },
    fechaSolicitud: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
    },
    isSubmited: {
      type: Sequelize.BOOLEAN,
    },
    observaciones: {
      type: Sequelize.TEXT,
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
