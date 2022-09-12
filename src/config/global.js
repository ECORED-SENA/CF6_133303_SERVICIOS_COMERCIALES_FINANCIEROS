export default {
  global: {
    componenteFormativo:
      'Identificación de recursos para análisis de información',
    descripcionCurso:
      'La comprensión de la interpretación de los datos es preponderante para la organización; por ello, se orienta el presente componente formativo con los conceptos sobre la organización, el manejo estadístico, los modelos matemáticos, las fuentes de información, el uso de la tabulación y la realización de gráficas de datos e indicadores, para ir concluyendo con herramientas de análisis de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/float-6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/float-7.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de organización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reglas y políticas de negocio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Políticas de gestión del cambio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Población',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Muestra',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Determinación de la muestra',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Parámetros estadísticos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes y técnicas de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fuentes de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de recolección',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modelos matemáticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tabulación y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Variables',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Frecuencias',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Gráficos estadísticos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Indicadores',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Análisis de datos',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estadística',
      referencia:
        'Universidad Nacional - Sede Manizales. (2017). 0.1 <em>Video introductorio: antecedentes de la estadística.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-NutZ7n-Exg',
    },
    {
      tema: 'Variables',
      referencia:
        'Gómez, A. (2018). <em>Tipos de variables estadísticas | cuantitativas cualitativas.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/nCszHELuwxk',
    },
    {
      tema: 'Frecuencias',
      referencia:
        'Gómez, A. (2017). Tablas de frecuencia | Ejemplo 1. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cyXenZEbGz4',
    },
    {
      tema: 'Gráficos estadísticos',
      referencia:
        'Gómez, A. (2021). <em>Tipos de gráficos estadísticos.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/9G4HPNVA5w4',
    },
  ],
  glosario: [
    {
      termino: 'Gráfica',
      significado: 'representación de los datos bajo un esquema.',
    },
    {
      termino: 'Instrumento',
      significado:
        'elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Método',
      significado:
        'secuencia de procesos, procedimientos o actividades, ordenada para el desarrollo de un ejercicio ejecutando un protocolo establecido.',
    },
    {
      termino: 'Parámetros de centralización',
      significado:
        'indican en torno a qué valor o criterio central se distribuyen en los datos obtenidos, para lo cual se establecen la media aritmética, mediana y moda.',
    },
    {
      termino: 'Parámetros de dispersión',
      significado:
        'es la representación de los datos que se alejan de la parte central de los valores de distribución generales.',
    },
    {
      termino: 'Parámetros de posición',
      significado:
        'son los datos que se organizan en criterios conocidos como cuantiles, los cuales son variables de intervalos en los que se dividen los datos.',
    },
    {
      termino: 'Proceso',
      significado:
        'secuencia de actividades que requieren ser desarrolladas bajo mecanismos controlados.',
    },
    {
      termino: 'Técnica',
      significado:
        'características para el desarrollo de una actividad específica que parte de la pericia y la secuencia para adelantar actividades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias-Gómez, J., Villasís-Keever, M., y Miranda-Novales, M. (2016). El protocolo de investigación III: la población de estudio. <em>Revista Alergia México.</em> 63. 201.',
      link:
        'https://www.researchgate.net/publication/322345752_El_protocolo_de_investigacion_III_la_poblacion_de_estudio',
    },
    {
      referencia:
        'Presidencia de Colombia. (2019). Decreto 957 de 2019. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015. Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Hernández-Sampieri, R., Fernández-Collado, C., y Baptista-Lucio, P. (2006). <em>Análisis de los datos cuantitativos. Metodología de la investigación.</em>',
      link:
        'http://tsmetodologiainvestigaciondos.sociales.uba.ar/wp-content/uploads/sites/175/2021/05/U5-Ampliatoria-Hernadnez-Sampieri-Cap-10.pdf',
    },
    {
      referencia:
        'Hernández Sampieri, et al. (2014). <em>Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta.</em> McGraw Hill México.',
      link: '',
    },
    {
      referencia:
        'Kotter, J. (1995). Liderando el cambio: Por qué los esfuerzos de transformación fracasan. <em>Harvard Business Review,</em> 73(2), 59-67.',
      link:
        'https://www.ecotec.edu.ec/material/material_2017D1_SIG301_11_74780.pdf',
    },
    {
      referencia:
        'Real Academia Española (s.f.). <em>Significado de modelo.</em>',
      link: 'https://dle.rae.es/modelo',
    },
    {
      referencia:
        'Rivera, M. M., y Fernández, M. E. (2015). <em>Fuentes de información.</em>',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
    },
    {
      referencia:
        'Tamayo, C., y Siesquén, I. S. (s.f.). <em>Técnicas e instrumentos de recolección de datos.</em>',
      link:
        'https://www.postgradoune.edu.pe/pdf/documentos-academicos/ciencias-de-la-educacion/22.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Wilmar Eduardo Amaya Ávila',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
