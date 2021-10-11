export default {
  global: {
    componenteFormativo: 'Materiales e insumos para vestuario',
    descripcionCurso:
      'Reconocer y seleccionar los materiales e insumos adecuados para cada producto diseñado ayuda a garantizar la calidad y el éxito de la prenda confeccionada cuando esta llegue al consumidor final. El mercado tiene variedad de opciones como tipos de prendas, por lo tanto, el aprendiz debe identificar elementos básicos a cada tipo de prenda según uso y ocasión.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Materiales textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fibras e hilos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de tejidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'No tejidos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Calidad textil',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acabados textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de estampación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bordados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Lavandería',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Angel’s. (2017). Moldes de moda. ',
      link:
        'https://moldesdemoda.wordpress.com/2017/10/06/procesos-del-indigo/',
    },
    {
      referencia:
        'Borrero, Á. (1979). Desengomado, descrudado y mercerizado. Servicio Nacional de Aprendizaje SENA - Asociación Nacional de Industriales ANDI.',
    },
    {
      referencia: 'Coats Group Plc. (2020). Lavado de mezclilla. ',
      link: 'https://www.coats.com/es/Information-Hub/Denim-Wash#types',
    },
    {
      referencia:
        'Halstead, B. (1979). Acabado de las telas. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Hill, B. (1978). Fibras e hilos textiles. Servicio Nacional de Aprendizaje SENA - Asociación Nacional de Industriales ANDI.',
    },
    {
      referencia:
        'Lafayette. (s.f.). Todo lo que debes saber sobre tipos de acabados textiles. ',
      link:
        'https://www.lafayettesports.com.co/noticias/confeccion-deportiva/todo-lo-que-debes-saber-sobre-tipos-de-acabados-textiles/',
    },
    {
      referencia:
        'Peñafiel, C., J. (2018). Diseño y construcción de un foulard automatizado para desarrollar prácticas de laboratorio. [Tesis de ingeniería industrial]. Universidad Técnica del Norte. ',
    },
  ],
  glosario: [
    {
      termino: 'Calandrado',
      significado:
        'acabado mecánico que se realiza en conjuntos de rodillos a través de los cuales pasa la tela.',
    },
    {
      termino: 'Carbonizado',
      significado:
        'tratamiento de telas e hilos de lana con ácido sulfúrico, elimina la materia vegetal de la tela. Se hace también con la lana regenerada para eliminar cualquier celulosa que haya sido empleada en la tela original. El carbonizado da mayor textura a las telas de lana.',
    },
    {
      termino: 'Filamento',
      significado: 'elemento con forma de hilo continuo.',
    },
    {
      termino: 'Jersey',
      significado:
        'género de punto fino para prendas exteriores. Puede fabricarse por trama y urdimbre en máquinas circulares o rectilíneas, a base de las diversas materias textiles.',
    },
    {
      termino: 'Mercerizado',
      significado:
        'es la acción de la soda cáustica sobre la tela, se usa en el lino y algodón, y resulta en un aumento del lustre, el brillo y la suavidad. Provoca un encogimiento del tejido de hasta 25%, aumenta la resistencia y genera una mayor afinidad a los colorantes.',
    },
    {
      termino: 'Piqué',
      significado:
        'del francés “pique” (picado). Tejido generalmente de algodón, formando dibujos geométricos (nido de abejas) o de canutillo continuo (piqué de canutillo) en relieve. Estos tejidos se emplean generalmente para vestidos de niño, señora y adornos, entre otros.',
    },
    {
      termino: 'Tejer',
      significado:
        'entrelazar hilos o fibras, mecánicamente o a mano, para formar un tejido o hacer un objeto determinado.',
    },
    {
      termino: 'Trama',
      significado:
        'es la denominación general de todos los hilos que debiendo entrelazarse en ángulo recto, o sea a lo ancho, atraviesan y enlazan los hilos longitudinales de la urdimbre.',
    },
    {
      termino: 'Urdimbre',
      significado:
        'denominación con la que se distingue al conjunto de los hilos dispuestos en cantidad y longitud previamente establecidos y sobre las cuales descansan la mayoría de las lazadas, disposiciones técnicas y las de ejecución mecánicas.',
    },
  ],
  complementario: [
    {
      texto:
        'Halstead, B. (1979). Acabado de las telas. Servicio Nacional de Aprendizaje SENA.',
      tipo: 'Cartilla',
      link: 'https://hdl.handle.net/11404/6002',
    },
    {
      texto:
        'La Finca de Hoy. (13 de agosto de 2018). Paso a paso en la obtención de la seda. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Q-Ddcb3Fb94&t=3s',
    },
    {
      texto:
        'Letelier, J. (19 de febrero de 2015). Así se hace el hilo de poliéster 2013. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YYeJJ9ah4ew&t=35s',
    },
    {
      texto:
        'Martin, C. (31 de enero de 2018). Así se hace el hilo de algodón. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gUfjXa-if2A&t=6s',
    },
    {
      texto: 'www.telas.com. (s.f.). Glosario textil.',
      tipo: 'Página web',
      link: 'https://telas.com/glosario-textil/de-la-m-a-la-p/',
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
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
