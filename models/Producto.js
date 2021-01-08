const Sequelize = require('sequelize');
const { sequelize } = require('../database/index');
const UsuarioDG = require('./UsuarioDG');

const Producto = sequelize.define(
  'Producto',
  {
    titulo: {
      type: Sequelize.STRING,
    },
    autor: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    tesis: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
const artCongreso = sequelize.define(
  'artCongreso',
  {
    nombre: {
      type: Sequelize.STRING,
    },
    fecha: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);
const artRevista = sequelize.define(
  'artRevista',
  {
    nombre: {
      type: Sequelize.STRING,
    },
    tipo: {
      type: Sequelize.STRING,
    },
    fecha: {
      type: Sequelize.STRING,
    },
    indice: {
      type: Sequelize.STRING,
    },
    isnn: {
      type: Sequelize.STRING,
    },
    doi: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
const capLibro = sequelize.define(
  'capLibro',
  {
    titulo: {
      type: Sequelize.STRING,
    },
    editorial: {
      type: Sequelize.STRING,
    },
    edicion: {
      type: Sequelize.STRING,
    },
    fecha: {
      type: Sequelize.STRING,
    },
    isbn: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
const Libro = sequelize.define(
  'Libro',
  {
    editorial: {
      type: Sequelize.STRING,
    },
    edicion: {
      type: Sequelize.STRING,
    },
    fecha: {
      type: Sequelize.STRING,
    },
    isbn: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
const Desarrollo = sequelize.define(
  'Desarrollo',
  {
    detalles: {
      type: Sequelize.TEXT,
    },
    licencia: {
      type: Sequelize.STRING,
    },
    fecha: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
UsuarioDG.hasMany(Producto, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
});
Producto.belongsTo(UsuarioDG, {
  foreignKey: {
    name: 'curp',
    type: Sequelize.STRING(18),
  },
});

artCongreso.belongsTo(Producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
artRevista.belongsTo(Producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
capLibro.belongsTo(Producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Libro.belongsTo(Producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Desarrollo.belongsTo(Producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Producto.hasOne(artCongreso, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Producto.hasOne(artRevista, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Producto.hasOne(capLibro, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Producto.hasOne(Libro, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Producto.hasOne(Desarrollo, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = {
  Producto,
  artCongreso,
  artRevista,
  capLibro,
  Libro,
  Desarrollo,
};
