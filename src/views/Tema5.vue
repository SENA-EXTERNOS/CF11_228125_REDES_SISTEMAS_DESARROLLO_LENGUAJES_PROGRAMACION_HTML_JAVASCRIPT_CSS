<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Manejo de herramientas de desarrollo de <em>software</em>: IDEs
      
            
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/imagen-IDE-tema5.png')})`}"
        )
        .bloque-texto-g__texto.p-4.bgb1.text-white
          p.mb-0 Las herramientas de desarrollo de <i>software</i> son las que hacen posible la construcción de las aplicaciones informáticas que manejamos a diario y son un tipo de <i>software</i> que permite la codificación y ensamble de dichos aplicativos. Ahora nos vamos a concentrar en los IDEs, lo que significa Entorno de desarrollo integrado; estos <i>software</i> permiten integrar tanto el <i>Front-end</i> como <i>Back-end</i>, es decir, permiten realizar las vistas o diseño del aplicativo, como también la codificación del mismo y, a su vez, la integración de estos; un ejemplo podría ser Visual Studio Code, que solo permite la codificación de lo que denominamos <i>Back-end</i>, pero no tiene un diseñador para la construcción de interfaz y es ahí donde encontramos las primeras diferencias significativas. Un entorno de desarrollo integrado es una herramienta que tiene todos los componentes para desarrollar una aplicación desde su creación, diseño, codificación y pruebas.             

          
      br
      br

      .row.justify-content-around.align-items-center.color-fondo-netbeans-tema5


        .row
    
          .col-lg-6
            p.texto-netbeans-tema5.p-3 En la imagen a continuación, se observa la creación de un <i>front-end</i> de un <i>software</i> desarrollado en un aplicativo llamado Netbeans, el cual es un IDE que trabaja con el lenguaje de programación JAVA y mediante un diseñador, se pueden agregar los componentes requeridos para que el usuario pueda interactuar con el sistema.
            
          .col-lg-6
          
            figure
                img(src='@/assets/curso/temas/imagen-netbeans-tema5.png', alt='Texto que describa la imagen').imagen-netbeans-tema5
            br
            br

      br
      br
      br

      .row.justify-content-around.align-items-center
          .col-lg-9
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 10
              br
              span <em>Front-end</em>
            figure
              img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-ej-facturacion-tema5.png', alt='')
      .row.justify-content-center.mt-5
        .col-lg-10
          .cajon.color-primario.cajon-color-direccion-ip.p-4
            p En la siguiente imagen, vemos el proceso de codificación del aplicativo, el cual se conectará con el <em>front-end</em> para recibir todas las instrucciones que el usuario desea que realice el programa, recordemos que el <em>back-end</em> depende de las funciones que el programador puso en el mismo y que de acuerdo a lo que el usuario realice así será la respuesta a entregar.
        
      br
      br
      br

      .row.justify-content-around.align-items-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11
            br
            span <em>Back-end</em>
          figure
            img(data-aos="zoom-in")(src='@/assets/curso/temas/imgs/cf11-6.png', alt='')
      
      br
      br
      br
      br
      

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/imagen-tarjeta-final-tema5.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los entornos de desarrollo integrados son muy utilizados, debido a que permiten de una manera sencilla y eficiente, realizar todo el proceso de la construcción del <em>software</em> sin instalar una gran cantidad de elementos, que es lo que sucede en el caso de los editores de código, los cuales solo permiten trabajar con la codificación y luego toca realizar el diseño con otra herramienta y en algunas ocasiones se tienen problemas de compatibilidad entre las mismas, mientras que con el entorno de desarrollo integrado se garantiza la compatibilidad tanto de la codificación como del diseño e implementación del sistema. 
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
