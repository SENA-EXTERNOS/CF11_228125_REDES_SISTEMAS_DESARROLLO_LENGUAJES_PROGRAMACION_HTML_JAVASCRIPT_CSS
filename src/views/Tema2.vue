<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas operativos

    //Tarjeta1 color izquierda
    .row.justify-content-around.align-items-center

      .row
        .col-lg-6.fondo-col-izq-tarjeta1-tema2
          p(data-aos="fade-left").texto-tarjeta1-tema2.p-3 Con respecto a los sistemas operativos, son un tipo de <em>software</em> que permite que los periféricos y el <em>hardware</em> de la computadora pueda recibir las órdenes que el usuario le entrega al computador, dicho de otra manera, es un <em>software</em> que se encarga de controlar todas las funciones que realiza el usuario a través de la computadora y que estas se cumplan de acuerdo a lo solicitado, otra de las funciones que tiene el sistema operativo es realizar la comunicación entre los diferentes equipos, esto es a lo que llamamos protocolos de comunicación, los cuales permiten crear las reglas de comunicación entre los computadores que se encuentran conectados a una <em>red</em> informática, sea para compartir información o archivos en general. La gestión del sistema operativo es fundamental para el correcto funcionamiento de todos los otros programas instalados en una computadora, porque cuando hablamos de la ejecución de un programa nos estamos refiriendo a la asignación de memoria <em>RAM</em> para que estos funcionen y es el sistema operativo el encargado de asignar los espacios de memoria <em>RAM</em> requeridos para la operación de dicho <em>software</em>, por esta razón toda computadora debe contar con un sistema operativo para su operación y puesta en marcha. 
        
        .col-lg-6
          figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen1-tartjeta-tema2.png")

    br
    br

    //Infografia punto caliente

    .row.justify-content-around.align-items-center.fondo-tarjeta-punto-caliente

      br

      p.texto-intro-so-tema2 #[strong  Existen varios sistemas operativos, pero mencionaremos los más utilizados actualmente.]


      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/imagen-punto-caliente-tema2.png', alt='Texto que describa la imagen')
            //figcaption Leyenda de la imagen

        .tarjeta.color-acento-contenido.p-3(x="30.5%" y="4%" numero="+")
          .h5.mb-2 Linux
          p Es un sistema desarrollado bajo la filosofía de software libre, el cual tiene un concepto de manejo de libertades en el uso del <em>software</em>; este sistema operativo está más relacionado con los equipos que prestan servicios llamados servidores, los cuales permiten instalar programas que pueden ser utilizados por millones de usuarios en <em>internet</em>.

        .tarjeta.color-acento-contenido.p-3(x="59%" y="4%" numero="+")
          .h5.mb-2 MAC OS
          p Es un sistema operativo desarrollado por la empresa <em>Apple</em>, el cual permite realizar el control y administración de los equipos de dicha marca. Este sistema operativo es muy versátil y utilizado por muchos usuarios a nivel mundial por su gran capacidad de adaptación al usuario final y su seguridad, es importante mencionar que este sistema operativo se distribuye también para dispositivos móviles tales como tabletas y teléfonos celulares.

        .tarjeta.color-acento-contenido.p-3(x="87.5%" y="4%" numero="+")
          .h5.mb-2 Windows
          p Es un sistema operativo desarrollado por la empresa <em>Microsoft</em>, el cual se ha convertido a lo largo de los años en el principal sistema operativo utilizado en el mundo por su sencillez y facilidad. Adicional a ello, tiene una gran compatibilidad con los diferentes dispositivos y fabricantes actuales, para el tema de videojuegos e integración de multimedia, es la mejor alternativa para diseñadores y programadores de computadoras, porque es un sistema operativo muy versátil y utilizado.

    br
    br
    br

    .row.justify-content-around.align-items-center
      .cuadro-color-superior-tarjeta3-tema1
      p.texto--intro-configuracion-sistema-operativo.p-3 Ahora, la configuración del sistema operativo inició desde el proceso de instalación del mismo, lo cual integra diferentes fases, las cuales inician desde el proceso de preparación del dispositivo de instalación hasta la instalación de los archivos de ejecución del mismo, ahora bien, parte de la configuración también consiste en verificar ciertos puntos fundamentales del sistema operativo para poder instalar o colocar en marcha ciertos programas que son fundamentales para el correcto funcionamiento de la computadora.

      .row
        .cuadro-color-inferior-tarjeta3-tema1
        .col-lg-5
          figure
            img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-tarjeta3-tema2.png', alt='Texto que describa la imagen')
        
        .col-lg-7
          p(data-aos="fade-right").texto-configuracion-sistema-operativo Unos de los puntos importantes de la configuración del sistema operativo consiste en los periféricos principales, por ejemplo, tarjeta de <em>red</em>, teclado y dimensiones de la pantalla, debido a que estos dispositivos son fundamentales para que el usuario del sistema pueda acceder a los recursos de la <em>red</em> tales como <em>internet</em>. La configuración de la tarjeta de <em>red</em> debe tener como finalidad la conectividad correcta del equipo como vimos anteriormente.
    
    
    br
    br
    br

    .row.justify-content-around.align-items-center
      //problema con la etiqueta de red
      p #[strong A continuación, veremos algunas configuraciones de <em>red</em>, pantalla y teclado, para el ejemplo nos enfocaremos en el sistema operativo Windows, porque es el más utilizado, como mencionamos anteriormente.]

      figure
          img(src='@/assets/curso/temas/imagen-fondo-slider-tema2 .png', alt='Texto que describa la imagen').imagen-fondo-tarjetas-slider-tema1
      SlyderA(tipo="b").tarjeta.fondo-tarjetas-slider-tema1
        
        .row
          .col-md-6.mb-4.mb-md-0
            p.texto-tarjetas-slider-tema1 En la imagen podemos observar la configuración de pantalla, constituye muchas configuraciones, las cuales permiten al usuario hacer un uso adecuado de los elementos que se tiene en la pantalla, adicional a ello, se puede controlar el brillo de la pantalla, resolución y tamaño de los objetos.
            br
            br
            br
            br
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen1-slider-tema2.png', alt='Texto que describa la imagen').imagen-tarjetas-slider-tema1
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4
  
          .col-md-6.mb-4.mb-md-0
              p.texto-tarjetas-slider-tema1 Continuemos con la configuración de la tarjeta de <em>red</em>, la cual es fundamental y hace parte de la configuración del sistema operativo. Permite que un dispositivo pueda ser configurado para acceder a ciertos recursos de <em>red</em>, en el caso de los servidores estos requieren utilizar muchas veces <em>VPN</em> que son redes virtuales privadas para el manejo de la seguridad y conexión de los mismos, todo esto se realiza a través de la configuración de <em>red</em>, por ello es importante tener en cuenta este proceso. La siguiente imagen nos presenta la configuración de la tarjeta de <em>red</em>.
              br
              br

          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen2-slider-tema2.png', alt='Texto que describa la imagen').imagen-tarjetas-slider-tema1
              //figcaption Leyenda de la imagen          

        
        .row.justify-content-center.align-items-center.my-lg-4
  
          .col-md-6.mb-4.mb-md-0
              p.texto-tarjetas-slider-tema1 En la última imagen vemos cómo se establece la configuración del teclado, idioma y formato de hora y fecha del sistema. Este proceso es muy importante, debido a que muchas aplicaciones informáticas requieren que el formato de hora y fecha tenga unas características especiales y en este espacio se puede realizar la configuración del mismo, adicional a ello se pueden configurar las preferencias del idioma que requiera utilizar el usuario lo cual puede ser muy importante en un momento indicado.
              br
              br
          .col-md-6
            figure
              img(src='@/assets/curso/temas/imagen3-slider-tema2.png', alt='Texto que describa la imagen').imagen-tarjetas-slider-tema1
              //figcaption Leyenda de la imagen         
    br
    br

    .row.justify-content-center.align-items-center.my-lg-4


      .tarjeta.tarjeta-final-tema2
        .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/imagen-tarjeta-final-tema2.png', alt='Texto que describa la imagen').imagen-tarjeta-final-tema2

            .col-lg-6.p-3
              h4.texto-tarjeta-final-tema2 Sistemas operativos y sus comandos
              p.texto-tarjeta-final-tema2 Para finalizar, lo invitamos a ver el documento Sistemas operativos y sus comandos, donde encontrará los diferentes comandos que se utilizan en los diferentes sistemas operativos.

            .col-lg-4
              a.boton.color-acento-botones.boton-tarjeta-final-tema2.texto-blanco(:href="obtenerLink('/downloads/ANEXOS Sistemas_operativos_y_sus_comandos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema2',
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
