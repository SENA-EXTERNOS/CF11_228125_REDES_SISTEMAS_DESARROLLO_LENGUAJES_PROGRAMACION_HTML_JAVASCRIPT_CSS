<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estrategia DevOps

    .row.justify-content-around.align-items-center

      .row
        .col-lg-6.color-col-izq-tarjeta1-tema6
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-devops-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta1-tema6
          br
          br

        .col-lg-6.color-col-der-tarjeta1-tema6
          p(data-aos="fade-left").texto-tarjeta1-tema6.p-3 DevOps (<i>software development “Dev” e IT operations “Ops”</i>) es una de las últimas tendencias en el mundo del <i>software</i>. Pero, ¿qué son las DevOps? Los equipos DevOps son los intermediarios en la fase de implementación de un proyecto, conectando a los desarrolladores con las necesidades de operaciones y asegurándose que todo funcione de la manera más rápida y estable posible. 

    br
    br
    br

    .row.justify-content-around.align-items-center
      
      .row
        .bloque-color-verde-tema6
        .col-lg-7
          p.texto-tarjeta2-tema6 Así, los equipos DevOps se están convirtiendo en una parte fundamental de casi todas las empresas de <i>software</i> de la actualidad. 
          p.texto-tarjeta2-tema6 Para comprender el origen de DevOps, hay que hacer referencia a dos expertos en este campo: John Arundel y Justin Domingus, coautores de “Cloud Native DevOps with Kubernetes”. Si bien el enfoque principal del libro es <i>Kubernetes</i>, el sistema de <i>software</i> libre que también es conocido como K8s, habla sobre algunos de los principios claves de DevOps y sobre su creación. Antes de DevOps, el desarrollo y la operación de <i>software</i> eran esencialmente dos trabajos separados, realizados por dos grupos diferentes de personas.
        
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
            p La implementación exitosa de las prácticas de DevOps en una organización puede tener un impacto significativo a través de una mayor eficiencia, mayor seguridad y colaboración organizacional.
    br
    br
    br

    .row.justify-content-around.align-items-center
      
      .row.fondo-tarjeta5-tema6
        .col-lg-6.p-3
          p.texto-superior-tarjeta5-tema6.p-2 Las organizaciones que adoptan DevOps, pueden evolucionar y mejorar los productos de <i>software</i> mucho más rápido, en comparación con aquellas que utilizan procesos de desarrollo de <i>software</i> tradicionales.
          p.texto-superior-tarjeta5-tema6.p-2 DevOps es un puente entre el desarrollo y las operaciones en una organización y tiene como objetivo, mejorar la productividad en su conjunto.
          p.texto-inferior-tarjeta5-tema6.p-3 Es así como las empresas que han empleado prácticas de DevOps, dedican un 21 % menos de tiempo al trabajo no planificado y al retrabajo, y un 44 % más de tiempo al trabajo nuevo, que conduce a una mayor eficiencia. Los tipos de metodología que implementan este tipo de estrategias, son metodologías ágiles tales como Scrum y Kanban, porque requieren de un control constante de cada uno de los procesos que se realizan en los proyectos.

        .col-lg-6
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-tarjeta5-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta5-tema6
    
    br
    br
    br

    .row.justify-content-around.align-items-center

      p En DevOps, debemos hablar de dos temas importantes:

      AcordionA(tipo="a" clase-tarjeta="tarjeta ").tarjeta.fondo-tarjetas-acordeon-tema6
      
        .row(titulo="CI/CD Integracionistas Continua")
          .col-md-6.mb-4.mb-md-0
            p La integración continua CI/CD (<i>continuous integration</i>) es una práctica donde los desarrolladores combinan el código en un repositorio común, facilitando la realización de test o pruebas para detectar y resolver posibles errores. Con la CI se impide que se desarrollen distintas divisiones de una aplicación que luego puedan tener conflictos entre sí.
            p Los desarrolladores integran periódicamente su código en el repositorio central (como GitHub) en lugar de realizarlo de forma aislada al final del ciclo de producción (como se realizaba de forma tradicional). De esta manera, se descubren antes los conflictos entre los nuevos códigos y los existentes, haciendo que la resolución de los mismos sea más sencilla y acarree un menor costo.
            p En la integración continua, los <em>test</em> son fundamentales para poder garantizar que el código es confiable y será necesario contar con un sistema automatizado para poder realizar todo el proceso de integración de código y <em>test</em> (pruebas unitarias o <em>testing</em> de resolución, por ejemplo).
            p En el desarrollo moderno de aplicaciones, los equipos están compuestos por distintos desarrolladores que trabajan de forma simultánea en distintas funciones del programa. Con la integración continua estos desarrolladores podrán ir integrando o probando sus cambios y comprobando que funcionen de forma correcta y no entren en conflicto con los cambios de otros desarrolladores.
            p En el desarrollo de <i>software</i>, la integración continua es uno de los pilares en los que se basan metodologías como DevOps, para conseguir reducir costos, a la vez que se incrementan la calidad y la agilidad en el desarrollo.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-ci-id-acordeon-tema6.png', alt='Texto que describa la imagen').imagen1-acordeon-tema6
              //figcaption Leyenda de la imagen

        
        .row(titulo="Entrega continua")
          .col-md-6.mb-4.mb-md-0
            p La integración continua, está relacionada con la entrega continua, la cual consiste en la automatización del proceso de entrega del <i>software</i>, permitiendo que pueda ser implementado en producción de forma confiable y sencilla. Una manera práctica, para entender la CD, es la entrega de actualizaciones de <i>software</i> a los usuarios o clientes, de forma sólida y continua.
            p La entrega continua en DevOps automatiza todo este proceso, desde que se integra el código en el repositorio único, se realizan las pruebas y se comprueban los cambios hasta la entrega al usuario.
            p La entrega continua se conoce como el siguiente paso o extensión de la integración continua. Tiene como objetivo principal conseguir que la entrega de los nuevos cambios o actualizaciones del <em>software</em> a los clientes se realicen de forma ágil y fiable.
            p Aunque la automatización es una de las características de la entrega continua, esta fase del desarrollo del <i>software</i>, tiene un componente de intervención humana; en la entrega continua, los desarrolladores controlan cuándo y cuántas veces se realiza la entrega del programa; la entrega continua acelera su entrega a los usuarios y puede ser realizada varias veces al día, a la semana, o según las necesidades o características de cada proyecto de desarrollo.
            
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen-entrega-continua-tema6.png', alt='Texto que describa la imagen').imagen1-acordeon-tema6
              //figcaption Leyenda de la imagen

    h3.my-5 Automatización
        
    .row.fondo-tarjeta-automatizacion-tema6
      .row.fondo-imagen-automatizacion-tema6
        .col-lg-12
          figure
              img(data-aos="fade-down-up")(src='@/assets/curso/temas/imagen-automatizacion-tema6.png', alt='Texto que describa la imagen').imagen-automatizacion-tema6
        p.texto-invisible-tema4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus quisquam incidunt? Voluptatem esse, dolorem rerum pariatur doloribus laborum atque natus, quasi odio deserunt amet exercitationem repellendus dolor facilis ducimus.
    
    .row.justify-content-around.align-items-center
    
        .row.fondo-tarjeta-automatizacion-tema6
          .col-lg-12
            p(data-aos="fade-left").texto-final-tema6.p-3 Finalizamos el tema con la automatización de DevOps, que consiste en incorporar las tecnologías que ejecutan tareas con poca intervención humana, en los procesos que facilitan los ciclos de retroalimentación, entre los equipos de operaciones y los de desarrollo, para implementar las actualizaciones constantes de las aplicaciones en la producción con mayor rapidez; dicho de otra manera, es la forma de implementar herramientas que permitan alejar en algunos momentos, la intervención humana en los procesos de construcción de aplicaciones informáticas; por ejemplo, el proceso de elaboración de pruebas y casos de prueba para verificar el correcto funcionamiento de un sistema de información, se puede automatizar mediante el uso de algoritmos e inteligencia artificial, para que pueda encontrar huecos de seguridad en la codificación y que estos puedan ocasionar, de alguna manera, problemas en el futuro. 
            p(data-aos="fade-left").texto-final-tema6.p-3 En la actualidad, por ejemplo, los entornos de desarrollo integrados incorporan herramientas de análisis de código y, de hecho, hasta entregan sugerencias para hacer que el código sea más eficiente, eliminando líneas de código innecesarias o que utilizan librerías viejas y entregan sugerencias para mejorarlo; todo esto va acompañado por inteligencia artificial y machine learning, que permiten conectar nuestra aplicación a estos servicios realizando, en tiempo real, este análisis y ayudando a mejorar la codificación de nuestras aplicaciones; otro proceso de automatización es el que implementa las bases de datos para realizar los procesos de copias de seguridad o backups de la información, con el fin de evitar, que esta se pueda perder o dañar; en este caso, también podemos ver un proceso de automatización.




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
