<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center
    
          p.p-2 Apreciado aprendiz, bienvenido a este componente formativo, donde abordaremos las temáticas referentes a la configuración de redes y los diferentes servicios que se utilizan a nivel de despliegue para las diferentes aplicaciones que se desarrollan en una empresa. Se estudiará el uso de repositorios de código a nivel mundial, la configuración de servidores para el manejo y despliegue de aplicaciones y bases de datos como servicios y componentes funcionales dentro de un proyecto de <em> software.</em> Además, como aprendizaje final, la configuración y despliegue de servicios en la nube.
          p.p-2 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

        figure
          .video
            iframe(data-aos="zoom-out")(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
