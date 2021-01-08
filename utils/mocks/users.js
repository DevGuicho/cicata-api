const usersMock = [
  //USUARIO ALUMNO
  {
    curp: 'VAPL000903HMZSDA5',
    nombre: 'Luis',
    apellidos: 'Vazquez Padilla',
    email: 'luvazpa@gmail.com',
    tipoUsuario: 'Alumno',
    password: '123456789',
    pregunta1: 'Marca de mi primer auto',
    pregunta2: 'Nombre de mi primer mascota',
    respuesta1: 'Ford',
    respuesta2: 'Kevin',
    alumno: {
      fechaIngreso: '2020-01-01',
      tesis: 'Tesis 1',
    },
  },

  //USUARIO PROFESOR

  {
    curp: 'VAPL000903HMZSDA17',
    nombre: 'Luis',
    apellidos: 'Vazquez Vazquez',
    email: 'luvazpa10@gmail.com',
    tipoUsuario: 'Profesor',
    password: '123456789',
    pregunta1: 'Marca de mi primer auto',
    pregunta2: 'Nombre de mi primer mascota',
    respuesta1: 'Ford',
    respuesta2: 'Kevin',
    profesor: {
      lineaInvestigacion: '2020-01-01',
    },
  },
];

module.exports = usersMock;
