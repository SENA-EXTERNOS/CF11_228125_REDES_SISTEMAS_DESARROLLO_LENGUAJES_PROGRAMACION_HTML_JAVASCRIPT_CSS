export default {
  global: {
    componenteFormativo:
      'Redes, sistemas de desarrollo y lenguajes de programación',
    descripcionCurso:
      'Este componente formativo está diseñado para comprender los conceptos de entornos de desarrollo de programación, redes de datos, manejo de archivos <em>JavaScript</em> y los diferentes repositorios de códigos tales como <em>github</em> y <em>git</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/triangulos-superiores.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-lapiz.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/linea-de-puntos-inferior.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/llave-herramientas.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/Engrane.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/triangulos-verticales-derecha.svg'),
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
        titulo: 'Redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Roles y usuarios',
            hash: 'roles_y_usuarios',
          },
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Comandos de red',
            hash: 'comandos_de_red',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas operativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tecnologías de versionamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Instalación y configuración de servidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Contenedor web',
            hash: 'contenedor_web',
          },
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Base de datos',
            hash: 'base_de_datos',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Manejo de herramientas de desarrollo de software: IDEs',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estrategia DevOps',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Automatización',
            hash: 'automatizacion',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Técnicas de codificación y manejo de los servicios en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            //numero: '1.1',
            titulo: 'Automatización',
            hash: 'automatizacion',
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
      tema: 'Sistemas operativos',
      referencia:
        'TecnoMáticas. (2020). Sistemas Operativos ¿Qué es? Características, tipos, función, TODO sobre S.O. (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1C8x3nn-u_w',
    },
    {
      tema: 'Instalación y configuración de servidores',
      referencia:
        'Digitalthinking with sotobotero. (2021). Docker y kubernetes sobre Windows 10 wls2 ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OGtLAMUyDrc',
    },
    {
      tema: 'Manejo de herramientas de desarrollo de software: IDEs',
      referencia:
        'OS Infor. (2019). Metodologías del desarrollo software – Análisis y diseño (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5tyU_h69F-s&t=310s',
    },
    {
      tema: 'Técnicas de codificación y manejo de servicios en la nube',
      referencia:
        'Païola, P. (2021). Microsoft Azure : Gestione su Sistema de Información en la Nube. Ediciones ENI.',
      tipo: 'Video',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_biblioteca_eniEPT3AZWIN&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
  ],
  glosario: [
    {
      termino: '<em>Amazon Web Service</em>',
      significado:
        'es una plataforma que ofrece servicios de computación en la nube para alojar aplicaciones informáticas desarrollada y gestionada por <em>Amazon.</em>',
    },
    {
      termino: '<em>Azure</em>',
      significado:
        'es una plataforma que pertenece a los servicios de computación en la nube para alojar aplicaciones informáticas y es desarrollada por la empresa <em>Microsoft.</em>',
    },
    {
      termino: 'Base de datos',
      significado:
        'es un <em>software</em> que permite almacenar información de manera permanente y organizada es considerado uno de los mejores modelos de almacenamiento de información.',
    },
    {
      termino: '<em>CaaS</em>',
      significado:
        'son un servicio de nube que permite gestionar e implementar aplicaciones usando el aislamiento en contenedores, y que se puede implementar en las instalaciones o en la nube.',
    },
    {
      termino: '<em>GIT</em>',
      significado:
        'es una plataforma de versionamiento de código que permite controlar los cambios realizados en la misma.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es un <em>software</em> que permite almacenar información de manera permanente y organizada es considerado uno de los mejores modelos de almacenamiento de información.',
    },
    {
      termino: '<em>GITHUB</em>',
      significado:
        'es una plataforma de repositorio de código para trabajar de manera colaborativa entre equipos de desarrollo de <em>software.</em>',
    },
    {
      termino: '<em>IaaS</em>',
      significado:
        'en este tipo de servicios estamos hablando de infraestructuras como servicio. Las empresas contratan la infraestructura de hardware a un tercero a cambio de una cuota o alquiler. La contratación de este hardware permite elegir la capacidad de proceso (procesadores), la memoria a utilizar (memoria <em>RAM</em>) y el espacio de almacenamiento (disco duro).',
    },
    {
      termino: '<em>LINUX</em>',
      significado:
        'es un sistema operativo desarrollado por <em>Linus torvalds</em> y es considerado uno de los más seguros del mundo utilizado para gestionar grandes volúmenes de información.',
    },
    {
      termino: '<em>MAC OS</em>',
      significado:
        'es un sistema operativo desarrollado por la empresa <em>Apple</em> y está presente en muchos dispositivos tales como: tablets, celulares, computadores personales, servidores entre otros.',
    },
    {
      termino: '<em>PaaS</em>',
      significado:
        'el servicio <em>PaaS</em> ofrece plataformas como servicios. En estas plataformas se pueden lanzar aplicaciones como bases de datos, middleware, herramientas de desarrollo, servicios de inteligencia empresarial, etc.',
    },
    {
      termino: 'Roles',
      significado:
        'es un nivel que recibe un usuario en un sistema informático con el cual tendrá los permisos necesarios para hacer uso de una aplicación informática.',
    },
    {
      termino: '<em>SaaS</em>',
      significado:
        'es una forma de poner a disposición <em>software</em> y soluciones de tecnología por medio de la internet, como un servicio. Con este modelo, la empresa no necesita instalar, mantener y actualizar <em>hardware</em> y <em>software.</em>',
    },
    {
      termino: '<em>TDD</em>',
      significado:
        'es una técnica que se utiliza para realizar pruebas unitarias al código de una aplicación informática.',
    },
    {
      termino: 'Usuario',
      significado:
        'es el nombre que recibe una persona para hacer uso de un sistema informático.',
    },
    {
      termino: '<em>Windows</em>',
      significado:
        'es un sistema operativo desarrollado por la empresa <em>Microsoft</em> y es considerado el más popular de todos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dauzon, S. (2022). Git : Controle la gestión de sus versiones (conceptos, utilización y casos prácticos) (2ª edición). Ediciones ENI.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniEPT3GIT',
    },
    {
      referencia: 'Khtan66. (2016). Kubernetes',
      link: 'https://commons.wikimedia.org/wiki/File:Kubernetes.png',
    },
    {
      referencia:
        'Ramírez, R., Pellecchia, Á., Saa, A., Santos, A., González, H de J. & Bonilla-Morales, B. (2022). Prácticas orientadas por pruebas para el desarrollo de software, una revisión sistemática. Revista De Iniciación Científica, 8(2), 50-56.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_ba44f4c2c32a4970b1573271c3f1b5b7',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
        nombre: 'Nombre',
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
