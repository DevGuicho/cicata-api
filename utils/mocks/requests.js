const requestsMock = [
  //FORMATO PARA SOLICITUD DE MAESTRIA

  {
    typeRegistro: 'Maestria',
    apellidoPaterno: 'Vazquez',
    apellidoMaterno: 'Padilla',
    nombres: 'Luis',
    fechaNacimiento: '2000-09-03',
    lugarNacimiento: 'Ciudad de México',
    nacionalidad: 'Mexicana',
    estadoCivil: 'Soltero',
    calle: 'Calle 3',
    noExterior: '140',
    colonia: 'El sol',
    CP: 57200,
    municipio: 'Nezahualcoyotl',
    estado: 'Mexico',
    telefono: '5519038167',
    email: 'luvazpa@gmail.com',
    fechaSolicitud: '2021-08-01',
    status: 'No validada',
    isSubmited: false,
    observaciones: 'lorem ipsum dolo',
    maestria: {
      institucionPrevia: 'CONACyT',
      paisInst: 'Mexico',
      titulo: 'Maestro en Ciencias',
      carrera: 'Ingeniero telematico',
      expProfesional: 'Citibanamex',
      expDocente: 'UPIITA',
      cursoPropedeutico: true,
      year: '2015',
      motivacion: 'Mejor salario',
    },
  },

  //FORMATO PARA SOLICITUD DE DOCTORADO

  {
    typeRegistro: 'Doctorado',
    apellidoPaterno: 'Vazquez',
    apellidoMaterno: 'Padilla',
    nombres: 'Luis',
    fechaNacimiento: '2000-09-03',
    lugarNacimiento: 'Ciudad de México',
    nacionalidad: 'Mexicana',
    estadoCivil: 'Soltero',
    calle: 'Calle 3',
    noExterior: '140',
    colonia: 'El sol',
    CP: 57200,
    municipio: 'Nezahualcoyotl',
    estado: 'Mexico',
    telefono: '5519038167',
    email: 'luvazpa@gmail.com',
    fechaSolicitud: '2021-08-01',
    status: 'No validada',
    isSubmited: false,
    observaciones: 'lorem ipsum dolo',
    doctorado: {
      institucionPrevia: 'CONACyT',
      paisInst: 'Mexico',
      graduado: 'Maestro en Ciencias',
      posgrado: 'Ingeniero telematico',
      expProfesional: 'Citibanamex',
      expDocente: 'UPIITA',
      cursoPropedeutico: true,
      year: '2015',
      motivacion: 'Mejor salario',
    },
  },
];

module.exports = requestsMock;
