<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Desarrollo de aplicaciones web <em>full stack</em>
      p.texto-titulo-sintesis Síntesis: Redes, sistemas de desarrollo y lenguajes de programación

    br

    p El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.

    br
    br

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/imagen-sintesis (2).png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
