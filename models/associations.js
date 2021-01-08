const Sequelize = require('sequelize');

const Alumno = require('./Alumno');
const DireccionesTesis = require('./DireccionesTesis');
const Doctorado = require('./Doctorado');
const Maestria = require('./Maestria');
const Producto = require('./Producto');
const Profesor = require('./Profesor');
const Solicitud = require('./Solicitud');
const UsuarioDG = require('./UsuarioDG');
const UsuarioLogin = require('./UsuarioLogin');

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
Alumno.belongsTo(UsuarioDG);

//Profesor-UsuarioDG
UsuarioDG.hasOne(Profesor, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Profesor.belongsTo(UsuarioDG);

//UsuarioLogin-UsuarioDG
UsuarioDG.hasOne(UsuarioLogin, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
UsuarioLogin.belongsTo(UsuarioDG);

UsuarioDG.hasMany(Producto);
Producto.belongsTo(UsuarioDG);

//Alumno-DireccionesTesis
Alumno.hasMany(DireccionesTesis, {
  foreignKey: {
    name: 'alumnoCurp',
    type: Sequelize.STRING(18),
  },
});
DireccionesTesis.belongsTo(Alumno);

//Profesor-DireccionesTesis
Profesor.hasMany(DireccionesTesis, {
  foreignKey: {
    name: 'profesorCurp',
    type: Sequelize.STRING(18),
  },
});
DireccionesTesis.belongsTo(Profesor);

//UsuarioDG-Solicitud
UsuarioDG.hasMany(Solicitud, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
});

//Solicitud-Mestría
Solicitud.hasOne(Maestria, {
  foreignKey: {
    name: 'solicitudConvocatoria',
    type: Sequelize.DATE,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Maestria.belongsTo(Solicitud);

////Solicitud-Doctorado
Solicitud.hasOne(Doctorado, {
  foreignKey: {
    name: 'solicitudConvocatoria',
    type: Sequelize.DATE,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Doctorado.belongsTo(Solicitud);
