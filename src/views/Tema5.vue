<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Manejo de herramientas de desarrollo de <em>software: IDEs</em>
      
            
      .row.justify-content-around.align-items-center

        .row
  
          .col-lg-6.color-columna-izq-tarjeta1-tema5
            figure
                img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen-IDE-tema5.png', alt='Texto que describa la imagen').imagen-tarjeta1-tema5
            
          .col-lg-6.color-columna-der-tarjeta1-tema5
            p(data-aos="fade-right").texto-tarjeta1-tema5.p-3 Las herramientas de desarrollo de <em>software</em> son las que hacen posible la construcción de las aplicaciones informáticas que manejamos a diario, son un tipo de <em>software</em> que permite la codificación y ensamble de dichos aplicativos. Ahora nos vamos a concentrar en los <em>IDEs</em>, lo que significa Entorno de desarrollo integrado, estos <em>software</em> permiten integrar tanto el <em>Front-end</em> como Back-end, es decir, permiten realizar las vistas o diseño del aplicativo como también la codificación del mismo y a su vez la integración de estos, un ejemplo podría ser <em>Visual Studio Code</em>, que solo permite la codificación de lo que denominamos <em>Back-end</em> pero no tiene un diseñador para la construcción de interface, es allí donde encontramos las primeras diferencias significativas. Un entorno de desarrollo integrado es una herramienta que tiene todos los componentes para desarrollar una aplicación desde su creación, diseño, codificación y pruebas.
            br
            br
            br
          
      br
      br

      .row.justify-content-around.align-items-center.color-fondo-netbeans-tema5


        .row
    
          .col-lg-6
            p.texto-netbeans-tema5.p-3 En la imagen a continuación, se observa la creación de un front-end de un software desarrollado en un aplicativo llamado Netbeans, el cual es un IDE que trabaja con el lenguaje de programación <em>JAVA</em> y mediante un diseñador, se pueden agregar los componentes requeridos para que el usuario pueda interactuar con el sistema.
            
          .col-lg-6
          
            figure
                img(src='@/assets/curso/temas/imagen-netbeans-tema5.png', alt='Texto que describa la imagen').imagen-netbeans-tema5
            br
            br

      br
      br
      br

      .row.justify-content-around.align-items-center

            
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7.
          span <em>Front-end</em>


        .row
          .col-10
            figure
              img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-ej-facturacion-tema5.png', alt='Texto que describa la imagen').imagen-direccion-ip-tema1
        .row
          .col-lg-10
            .cajon.color-primario.cajon-color-direccion-ip.p-4
              p En la siguiente imagen, vemos el proceso de codificación del aplicativo, el cual se conectará con el front-end para recibir todas las instrucciones que el usuario desea que realice el programa, recordemos que el back-end depende de las funciones que el programador puso en el mismo y que de acuerdo a lo que el usuario realice así será la respuesta a entregar.
        
      br
      br
      br

      .row.justify-content-around.align-items-center

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8.
          span <em>Back-end</em>


        .row
          .col-10
            figure
              img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-codigo-back-end-tema5.png', alt='Texto que describa la imagen').imagen-direccion-ip-tema1
      
      br
      br
      br
      br
      
      .row.justify-content-around.align-items-center

        .row.color-columna-izq-tarjeta-final-tema5
      
          .col-lg-6
            p(data-aos="fade-left").texto-tarjeta-final-tema5.p-3 Los entornos de desarrollo integrados son muy utilizados, debido a que permiten de una manera sencilla y eficiente, realizar todo el proceso de la construcción del <em>software</em> sin instalar una gran cantidad de elementos, que es lo que sucede en el caso de los editores de código, los cuales solo permiten trabajar con la codificación y luego toca realizar el diseño con otra herramienta y en algunas ocasiones se tienen problemas de compatibilidad entre las mismas, mientras que con el entorno de desarrollo integrado se garantiza la compatibilidad tanto de la codificación como del diseño e implementación del sistema.
            
          .col-lg-6
          
            figure
                img(data-aos="fade-down-right")(src='@/assets/curso/temas/imagen-tarjeta-final-tema5.png', alt='Texto que describa la imagen').imagen-tarjeta-final-tema5
    
  


  
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
