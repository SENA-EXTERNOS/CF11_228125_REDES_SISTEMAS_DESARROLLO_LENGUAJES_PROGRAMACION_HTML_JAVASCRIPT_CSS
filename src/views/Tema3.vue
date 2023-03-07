<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías de versionamiento

    .row.justify-content-around.align-items-center

        .row
          .col-lg-6
            p(data-aos="fade-left").p-3 Ahora veamos las tecnologías de versionamiento, estas son una serie de <em>software</em> que permite el control del código fuente de aplicaciones, las cuales mantienen un control sobre los cambios que se realizan en las mismas. #[strong  Estas tecnologías son muy utilizadas para el control de proyectos de <em>software</em>, en muchas ocasiones las versiones del <em>software</em> y la codificación se realizan en la computadora del desarrollador, lo cual puede poner el código elaborado en riesgo de seguridad y también en pérdida del mismo.] Cuando se utilizan herramientas de versionamiento y repositorio de código, estos quedan almacenados en la nube evitando que se pueda perder información, permitiendo que todos los miembros del equipo puedan realizar modificaciones y trabajar de manera colaborativa, siendo esto una ventaja competitiva para todos los equipos de desarrollo que utilizan estos servicios a nivel mundial. Otro servicio que ofrecen es el versionamiento, este permite la verificación de las versiones del <em>software</em> que se está desarrollando y así poder tener un control mayor sobre las modificaciones que sufre el <em>software</em> en cada versión.
          
          .col-lg-6
            figure
                img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen-tarjeta1-tema3.png")
    br
    br

    .row.justify-content-around.align-items-center

      p.mb-5 #[strong Conozcamos los sistemas de control de versiones más utilizados:]

      br
      br

      TabsC.fondo-pestanas-horizontales-tema2
        .py-3.py-md-4(titulo="GIT")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/imagen-git-tema2.png', alt='Texto que describa la imagen').imagen-pestanas-horizontales
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              //h4 Celebrate your failures 1
              p.texto-pestanas-horizontales-tema2 Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo. Es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds, el famoso creador del Kernel del sistema operativo Linux en el 2005. Este sistema funciona a la perfección en una amplia variedad de sistemas operativos y en IDE (Entorno de Desarrollo Integrado).
              p.texto-pestanas-horizontales-tema2 Las características básicas del rendimiento de Git, son muy sólidas en comparación con muchas otras alternativas. Los algoritmos implementados en Git aprovechan el profundo conocimiento sobre los atributos comunes de los auténticos árboles de archivos de código fuente, cómo suelen modificarse con el paso del tiempo y cuáles son los patrones de acceso. Su arquitectura distribuida, también permite disfrutar de importantes ventajas en términos de rendimiento.


        .py-3.py-md-4(titulo="GITHUB")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/imagen-github-tema2.png', alt='Texto que describa la imagen').imagen-pestanas-horizontales
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-pestanas-horizontales-tema2 GitHub es un sitio “<i>social coding</i>”. Permite subir repositorios de código para almacenarlo en el sistema de control de versiones Git. El sistema es código abierto por defecto, lo que significa que cualquiera en el mundo puede encontrar su código en GitHub, usarlo, aprender de él, y mejorarlo.
              p.texto-pestanas-horizontales-tema2 Es considerado hasta el momento como uno de los mejores gestores de código fuente del mundo, debido a que permite realizar actualizaciones en tiempo real del mismo y también controlar mediante permisos qué personas pueden realizar cambios en el código fuente.
              p.texto-pestanas-horizontales-tema2 GitHub es una forja para alojar proyectos, utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El <i>software</i> que opera GitHub fue escrito en <i>Ruby on Rails</i>. 
        
        .py-3.py-md-4(titulo="GITLAB")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/imagen-gitlab-tema2.png', alt='Texto que describa la imagen').imagen-pestanas-horizontales
                //figcaption Leyenda de la imagen
            .col-md-6
              //h4 Celebrate your failures 2
              p.texto-pestanas-horizontales-tema2 GitLab es una <i>suite</i> completa que permite gestionar, administrar, crear y conectar los repositorios con diferentes aplicaciones y hacer todo tipo de integraciones con ellas, ofreciendo un ambiente y una plataforma en la cual se pueden realizar varias etapas de SDLC/ADLC y DevOps.
              p.texto-pestanas-horizontales-tema2 Esta <em>suite</em>, gestiona cualquier tipo de repositorio de códigos y establece las integraciones de los diferentes códigos que esta pueda contener, en otras palabras, podríamos decir que <em>GITLAB</em> es una plataforma que contiene un ambiente para integrar varios códigos de proyectos al mismo tiempo, esto con los desafíos que tienen las infraestructuras actuales en desarrollo de <em>software</em>, ofrece una gran ventaja porque en los equipos de desarrollo no es necesario que implementen varias herramientas sino que tienen todo lo que requieren en un mismo ambiente de trabajo, adicional a esto, se pueden manejar todas las etapas del desarrollo de un proyecto de <em>software</em> desde la creación del proyecto, codificación y despliegue de la misma.

    br
    br

    .row.justify-content-around.align-items-center

      .row
        .col-lg-5.color-columna-izq-ultima-tarjeta-color-tema2
          figure
                img(data-aos="fade-down-right")(src='@/assets/curso/temas/imagen-tarjeta-color-tema3.png', alt='Texto que describa la imagen')
        
        .col-lg-7.color-columna-der-ultima-tarjeta-color-tema2
          p(data-aos="fade-left").texto-ultima-tarjeta-color-tema2.p-3 A diferencia de algunos programas de <i>software</i> para control de versiones, Git no se deja engañar por los nombres de los archivos a la hora de determinar cuál debería ser el almacenamiento y el historial de versiones del árbol de archivos; en lugar de esto, se centra en el contenido del propio archivo. En definitiva, los archivos de código fuente cambian de nombre, se dividen y se reorganizan con frecuencia. El formato de objeto de los archivos del repositorio de Git, emplea una combinación de codificación delta (que almacena las diferencias de contenido) y compresión, guardando explícitamente el contenido de los directorios y los objetos de metadatos de las versiones.

    br
    br

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.cajon-color-comando-ping-t.p-4
          p.mb-0 Siguiendo con el tema de las tecnologías, el siguiente video nos brinda una explicación sobre las herramientas de control de código.
    br
    br
    br


    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      p #[strong Herramientas de control de código.]

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
