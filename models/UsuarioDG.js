const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');
const Alumno = require('./Alumno');
const Profesor = require('./Profesor');
const Solicitud = require('./Solicitud');

const UsuarioDG = sequelize.define(
  'users',
  {
    curp: {
      type: Sequelize.STRING(18),
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    apellidos: {
      type: Sequelize.STRING,
    },
    tipoUsuario: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

//Relaciones uno a uno
//Alumno-UsuarioDG
UsuarioDG.hasOne(Alumno, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Alumno.belongsTo(UsuarioDG, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
//UsuarioDG-Solicitud
UsuarioDG.hasMany(Solicitud, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
});
//Profesor-UsuarioDG
UsuarioDG.hasOne(Profesor, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Profesor.belongsTo(UsuarioDG, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = UsuarioDG;
