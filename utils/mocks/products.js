const productsMock = [
  //PRODUCTO ARTICULO DE CONGRESO
  {
    titulo:
      'Las profesiones, las lenguas y el español. Una mirada hacia el futuro',
    autor: 'Autor Principal',
    url:
      'http://www.educacionyfp.gob.es/paisesbajos/dam/jcr:6741f1ec-7200-4d64-b36d-5cbaae68641f/actas.vi.ciefe.def.pdf',
    tesis: 'No Relacionado con Tesis',
    type: 'articuloCongreso',
    congreso: {
      nombre:
        'Congreso Internacional de Español para Fines Específicos (CIEFE)',
      fecha: '2018-01-12',
    },
  },

  //PRODUCTO ARTICULO DE REVISTA
  {
    titulo: 'Técnicas, materiales y aplicaciones en nanotecnología',
    autor: 'Coautor',
    url: 'https://www.redalyc.org/pdf/535/53541201.pdf',
    tesis: 'No Relaciodo con Tesis',
    type: 'articuloRevista',
    revista: {
      nombre: 'Acta Bioquímica Clínica Latinoamericana',
      tipo: 'No Arbitrada',
      indice: 'CONACyT',
      isnn: '0325-2957',
      doi: '10.1145/1067268.1067287',
    },
  },

  //PRODUCTO CAPITULO DE LIBRO
  {
    titulo: 'Additions to the Olefinic C=C Double Bond',
    autor: 'Autor Principal',
    url:
      'http://www.sciencedirect.com/science/article/pii/B9780121381103500064',
    tesis: 'No Relaciodo con Tesis',
    type: 'capituloLibro',
    libro: {
      titulo: 'Advanced organic chemistry : reaction mechanisms',
      editorial: 'Limusa',
      edicion: 'En Linea',
      fecha: '2002',
      isbn: 'ISBN 9780121381103',
    },
  },

  //PRODUCTO LIBRO
  {
    titulo: 'Advanced organic chemistry : reaction mechanisms',
    autor: 'Principal',
    url: 'http://www.sciencedirect.com/science/book/9780121381103',
    tesis: 'No Relaciodo con Tesis',
    type: 'Libro',
    libro: {
      editorial: 'Prentice Hall',
      edicion: 'En Linea',
      fecha: '2002',
      isbn: 'ISBN 9780121381103',
    },
  },

  //PRODUCTO DESARROLLO
  {
    titulo:
      'The Design and Implementation of Database Interface for Logic Language',
    autor: 'Coautor',
    url: 'http://www.iceis.org/iceis2005/abstracts_2005.htm',
    type: 'Desarrollo',
    tesis: 'Relaciodo con tesis',
    desarrollo: {
      detalles:
        'Mobile Agent system creates a new way for sharing distributed resources and providing multi-located services. With the idea of moving calculation towards resources, generally it occupies less network traffics than the traditional Client/Server model and achieves more flexibilities than the Remote Procedure Call (RPC) architecture. In order to endow agents with the ability of accessing remote data resources, in this paper we discuss the design strategies of Database Interface between a logic programming language (such as Prolog) based Mobile Agent system and a remote DBMS.',
      licencia: 'MIT',
      fecha: 'Enero 2005',
    },
  },
];

module.exports = productsMock;
