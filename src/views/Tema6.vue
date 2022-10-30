<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estrategia <em>DevOps</em>

    .row.justify-content-around.align-items-center

      .row
        .col-lg-6.color-col-izq-tarjeta1-tema6
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-devops-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta1-tema6
          br
          br

        .col-lg-6.color-col-der-tarjeta1-tema6
          p(data-aos="fade-left").texto-tarjeta1-tema6.p-3 <em>DevOps</em> (<em>software development “Dev” e IT operations “Ops”</em>) es una de las últimas tendencias en el mundo del <em>software</em>. Pero, ¿qué son las <em>DevOps</em>? Los equipos de <em>DevOps</em> son los intermediarios en la fase de implementación de un proyecto, conectando a los desarrolladores con las necesidades de operaciones y asegurándose que todo funcione de la manera más rápida y estable posible. 

    br
    br
    br

    .row.justify-content-around.align-items-center
      
      .row
        .bloque-color-verde-tema6
        .col-lg-7
          p.texto-tarjeta2-tema6 Así, los equipos de <em>DevOps</em> se están convirtiendo en una parte fundamental de casi todas las empresas de <em>software</em> de la actualidad. 
          p.texto-tarjeta2-tema6 Para comprender el origen de <em>DevOps</em> hay que hacer referencia a dos expertos en este campo, John Arundel y Justin Domingus, coautores de <em>“Cloud Native DevOps with Kubernetes”</em>. Si bien el enfoque principal del libro es <em>Kubernetes</em>, el sistema de <em>software</em> libre que también es conocido como K8s; este habla sobre algunos de los principios clave de <em>DevOps</em> y sobre su creación. Antes de <em>DevOps</em>, el desarrollo y la operación de <em>software</em> eran esencialmente dos trabajos separados, realizados por dos grupos diferentes de personas.
        
        .col-lg-5  
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-tarjeta2-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta2-tema6
        
    
    br          
    br          
    br          
    
    .row.justify-content-around.align-items-center

      .row
        
        .col-lg-6
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen3-tarjeta3-tema6.png', alt='Texto que describa la imagen')

        .col-lg-6
          .bloque-color-amarillo-tema6  
          p.texto-tarjeta3-tema6 Los desarrolladores escriben el <em>software</em> y se lo pasan al personal de operaciones, quienes ejecutan y mantienen el <em>software</em>. Entre estas dos áreas existía muy poca alineación, de hecho, los dos departamentos tenían objetivos e incentivos bastante diferentes, que a menudo entraban en conflicto entre sí. Los desarrolladores tienden a concentrarse y recompensar el envío rápido de nuevas funciones o versiones, mientras que los equipos de operaciones se preocupan por hacer que los servicios sean estables y confiables a largo plazo.
          p.texto-tarjeta3-tema6 Con estos objetivos en conflicto, tiende a existir mucha discordia entre los roles de desarrollador y de operaciones, desafortunadamente, esta situación puede ser un obstáculo importante para las organizaciones que buscan innovar y superar a la competencia. Las personas que desarrollan el <em>software</em> deben comprender cómo este se relaciona con el resto del sistema y las personas que operan el sistema deben comprender cómo funciona o falla el <em>software</em>.

    
    br
    br

    .row.justify-content-around.align-items-center
      .row
        .col-lg-10
          .cajon.color-acento-contenido.cajon-color-tema6.p-4
            p La implementación exitosa de las prácticas de <em>DevOps</em> en su organización puede tener un impacto significativo a través de una mayor eficiencia, mayor seguridad y colaboración organizacional.
    br
    br
    br

    .row.justify-content-around.align-items-center
      
      .row.fondo-tarjeta5-tema6
        .col-lg-6.p-3
          p.texto-superior-tarjeta5-tema6.p-2 Las organizaciones que adoptan <em>DevOps</em> pueden evolucionar y mejorar los productos de <em>software</em> mucho más rápido en comparación con aquellas que utilizan procesos de desarrollo de <em>software</em> tradicionales.
          p.texto-superior-tarjeta5-tema6.p-2 DevOps es un puente entre el desarrollo y las operaciones en una organización y tiene como objetivo mejorar la productividad en su conjunto.
          p.texto-inferior-tarjeta5-tema6.p-3 Así, las empresas que han empleado prácticas de <em>DevOps</em> dedican un 21% menos de tiempo al trabajo no planificado y al retrabajo, y un 44% más de tiempo al trabajo nuevo que conduce a una mayor eficiencia. Los tipos de metodología que implementan este tipo de estrategias son metodologías ágiles tales como Scrum y Kanban, porque requieren de un control constante de cada uno de los procesos que se realizan en los proyectos.

        .col-lg-6
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-tarjeta5-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta5-tema6
    
    br
    br
    br

    .row.justify-content-around.align-items-center

      p #[strong En DevOps, debemos hablar de dos temas importantes:]

      AcordionA(tipo="a" clase-tarjeta="tarjeta ").tarjeta.fondo-tarjetas-acordeon-tema6
      
        .row(titulo="CI/CD Integracionistas Continua")
          .col-md-6.mb-4.mb-md-0
            p La integración continua <em>CI/CD</em> (<em>continuous integration</em>) es una práctica donde los desarrolladores combinan el código en un repositorio común, facilitando la realización de test o pruebas para detectar y resolver posibles errores. Con la CI se impide que se desarrollen distintas divisiones de una aplicación que luego puedan tener conflictos entre sí.
            p Los desarrolladores integran periódicamente su código en el repositorio central (como <em>GitHub</em>) en lugar de realizarlo de forma aislada al final del ciclo de producción (como se realizaba de forma tradicional). De esta manera, se descubren antes los conflictos entre los nuevos códigos y los existentes, haciendo que la resolución de los mismos sea más sencilla y acarree un menor coste.
            p En la integración continua, los test son fundamentales para poder garantizar que el código es confiable y será necesario contar con un sistema automatizado para poder realizar todo el proceso de integración de código y test (pruebas unitarias o testing de resolución, por ejemplo).
            p En el desarrollo moderno de aplicaciones, los equipos están compuestos por distintos desarrolladores que trabajan de forma simultánea en distintas funciones del programa. Con la integración continua estos desarrolladores podrán ir integrando o probando sus cambios y comprobando que funcionen de forma correcta y no entren en conflicto con los cambios de otros desarrolladores.
            p En el desarrollo de <em>software</em>, la integración continua es uno de los pilares en los que se basan metodologías como <em>DevOps</em> para conseguir reducir costos a la vez que se incrementa la calidad y agilidad en el desarrollo.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-ci-id-acordeon-tema6.png', alt='Texto que describa la imagen').imagen1-acordeon-tema6
              //figcaption Leyenda de la imagen

        
        .row(titulo="Entrega continua")
          .col-md-6.mb-4.mb-md-0
            p La entrega continua está relacionada con la integración continua que consiste en la automatización del proceso de entrega del <em>software</em>, permitiendo que pueda ser implementado en producción de forma confiable y sencilla. De forma práctica se puede entender la CD como la entrega de actualizaciones de <em>software</em> a los usuarios o clientes de forma sólida y continua.
            p La entrega continua en <em>DevOps</em> automatiza todo este proceso, desde que se integra el código en el repositorio único, se realizan las pruebas y comprueban los cambios hasta la entrega al usuario.
            p La entrega continua se conoce como el siguiente paso o extensión de la integración continua. Tiene como objetivo principal conseguir que la entrega de los nuevos cambios o actualizaciones del <em>software</em> a los clientes se realicen de forma ágil y fiable.
            p A pesar que la automatización es una de las características de la entrega continua, esta fase del desarrollo del software tiene un componente de intervención humana, en la entrega continua los desarrolladores controlan cuándo y cuántas veces se realiza la entrega de <em>software</em>, la entrega continua acelera la entrega de <em>software</em> a los usuarios y puede ser realizada varias veces al día, a la semana, o según las necesidades o características de cada proyecto de desarrollo.
            
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-entrega-continua-tema6.png', alt='Texto que describa la imagen').imagen1-acordeon-tema6
              //figcaption Leyenda de la imagen

    separador
    br


    .row.justify-content-around.align-items-center

      #automatizacion
      .titulo-segundo.color-acento-contenido
        h2 Automatización
        
      .row.fondo-tarjeta-automatizacion-tema6
        .row.fondo-imagen-automatizacion-tema6
          .col-lg-12
            figure
                img(data-aos="fade-down-up")(src='@/assets/curso/temas/imagen-automatizacion-tema6.png', alt='Texto que describa la imagen').imagen-automatizacion-tema6
          p.texto-invisible-tema4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus quisquam incidunt? Voluptatem esse, dolorem rerum pariatur doloribus laborum atque natus, quasi odio deserunt amet exercitationem repellendus dolor facilis ducimus.
    
    .row.justify-content-around.align-items-center
    
        .row.fondo-tarjeta-automatizacion-tema6
          .col-lg-12
            p(data-aos="fade-left").p-4 Finalizamos el tema con la automatización de <em>DevOps</em>, que consiste en incorporar las tecnologías que ejecutan tareas con poca intervención humana en los procesos que facilitan los ciclos de retroalimentación entre los equipos de operaciones y los de desarrollo, para implementar las actualizaciones constantes de las aplicaciones en la producción con mayor rapidez, dicho de otra manera, es la forma de implementar herramientas que permitan alejar en algunos momentos la intervención humana en los procesos de construcción de aplicaciones informáticas, por ejemplo, el proceso de elaboración de pruebas y casos de prueba para verificar el correcto funcionamiento de un sistema de información, este proceso se puede automatizar mediante el uso de algoritmos e inteligencia artificial para que pueda encontrar huecos de seguridad en la codificación y que estos puedan ocasionar de alguna manera problemas en el futuro, en la actualidad #[strong  por ejemplo, los entornos de desarrollo integrados incorporan herramientas de análisis de código y de hecho hasta te entregan sugerencias para hacer que tu código sea más eficiente eliminando líneas de código innecesarias o que utilizan librerías viejas y te entrega de sugerencias para mejorarlo esto va acompañado por su puesto de inteligencia artificial y <em>machine learning</em>, que permiten conectar nuestra aplicación a estos servicios que en tiempo, realizando en tiempo real este análisis y ayudan a mejorar la codificación de nuestras aplicaciones,] otro proceso de automatización es el que implementa las bases de datos para realizar los procesos de copias de seguridad o <em>backups</em> de la información, con el fin de evitar que esta se pueda perder o dañar en este caso también podemos ver un proceso de automatización.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
