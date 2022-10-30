<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Técnicas de codificación y manejo de los servicios en la nube

    .row.justify-content-around.align-items-center

      .row
        .col-lg-5.columna-der-tarjeta1-tema7
          figure
              img(data-aos="fade-down-left")(src='@/assets/curso/temas/imagen1-tema7.png', alt='Texto que describa la imagen').imagen-tarjeta1-tema7

        .col-lg-7.columna-izq-tarjeta1-tema7
          p.texto-tarjeta1-tema7.p-3 Llegamos al final con el estudio de las técnicas de codificación de <em>software</em> es la manera en como un programador coloca las líneas que hacen funcional al sistema en sí, este proceso debe ser elaborado de manera organizada y tratando siempre que cada línea sea consecutiva del problema a resolver, otra de las apreciaciones que se deben tener en cuenta en este proceso, es realizarse con un lenguaje técnico comprensible, en el cual se deje la puerta abierta en caso de que otro programador lea el código, de este modo, pueda comprender cuáles fueron las funciones y procesos que se realizan en el <em>software</em>, además, en muchas ocasiones se utilizan ciertas nomenclaturas para dar a entender que controles o componentes se están utilizando en el sistema.

    br
    br
    br

    .row.justify-content-around.align-items-center
  
      p #[strong En las técnicas de codificación encontramos:]

      .col-lg-8
          
      
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris").tarjeta.fondo-tarjetas-acordeon-tema7
              .row(titulo="<em>TDD (Test Development Drive)</em>")
                .col-8
                  p <em>TDD</em> es una técnica utilizada para el desarrollo de aplicaciones informáticas, que consiste en escribir los escenarios de pruebas y las pruebas en sí para obtener los resultados favorables que debe arrojar la aplicación una vez esta sea construida, de esta manera se garantiza que los resultados obtenidos al momento de realizar las pruebas del <em>software</em> sean de manera satisfactoria, aunque se debe tener en cuenta que la mayoría de veces los programadores prefieren realizar la codificación del sistema y después realizar las respectivas pruebas, esto no es que sea una mala práctica sino que los datos que se utilizan en dichas pruebas no logran satisfacer todas las necesidades de validaciones requeridas y en muchas ocasiones quedan procesos sin evaluar de manera correcta lo que se puede convertir en un defecto en el <em>software</em>.

              .row(titulo="<em>no TDD</em>")
                .col-8
                  p Es una técnica que involucra un concepto opuesto a lo reflejado por <em>TDD</em>, donde las pruebas juegan un papel importante para la correcta codificación del aplicativo, aunque en muchas ocasiones se opta por un desarrollo más tradicional, donde primero se construye el código y luego se realizan las respectivas pruebas para obtener los criterios de aceptación que requiere el sistema para operar de manera correcta, aunque se podría llegar a pensar que es una desventaja también involucra muchos aspectos favorables uno de ellos es la independencia del código es decir, se le confiere la libertad al desarrollador en la construcción del código y no se está amarrado al resultado esperado es como cuando ya conoces el resultado de algo y solo trabajas para ello muchas veces se deja a un lado la creatividad y muchos aspectos que en muchas ocasiones se convierten en el alma del proyecto.

      .col-lg-4.d-none.d-lg-flex
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/imagen1-acordeon-tema7.png", alt="alt").m-auto

    br
    br
    br

    .row.justify-content-around.align-items-center

      p Ahora bien, si nos concentramos en las ventajas que el <em>TDD</em> puede ofrecer al momento de generar código robusto y estable, es la mejor manera de realizarlo, puesto que, al tener unos datos de prueba ya establecidos y los casos o condiciones que debe ejecutar dicho código se evidencia un mejor desempeño del mismo, porque sabemos qué estamos buscando y cuáles serían las excepciones a controlar dentro del aplicativo. 


      .row
        .col-lg-6(data-aos="fade-left")
          .cajon.color-acento-botones.cajon1-color-tema7.p-4
            p Aunque podemos decir que es una excelente práctica, reiteramos que no muchas personas suelen aplicarlas, muchas de estas técnicas provienen de los movimientos de desarrollo ágil tales como Scrum, XP entre otros, debido a que se pretende realizar una constante revisión de los resultados arrojados por el <em>software</em> y los arrojados por las pruebas realizadas de manera previa, esto garantiza ya la obtención de los resultados correctos de hecho antes de la construcción del código a esto se le denomina criterio de aceptación que es cuando decimos la prueba tuvo éxito o no, ahora bien, es importante tener en cuenta que el código escrito es un código básico que no contempla grandes particularidades luego que se verifica que pasa la prueba se refactoriza y se agregan todos los componentes necesarios.

        .col-lg-6
          figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/imagen-tarjeta3-tema7.png", alt="alt").m-auto

    separador      
    br      
    
    .row.justify-content-around.align-items-center

      #automatizacion
      .titulo-segundo.color-acento-contenido
        h2 Automatización
      
      .tarjeta.tarjeta-tarjeta1-automatizacion-tema7
        .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/imagen-tarjeta-final-tema2.png', alt='Texto que describa la imagen').imagen-tarjeta1-autmatizacion-tema7

            .col-lg-6.p-3
              h4.texto-tarjeta-final-tema2 Manejo de los servicios en la nube
              p.texto-tarjeta-final-tema2 Los servicios en la nube son una alternativa bastante favorable no solo por la facilidad y seguridad al momento de realizar el despliegue de aplicaciones y servicios en internet, sino que ofrecen un bajo costo para quienes utilizan estos servicios.
              p.texto-tarjeta-final-tema2 Para conocer cada uno de estos servicios, lo invitamos a leer el documento “Manejo de los servicios en la nube”.


            .col-lg-4
              a.boton.color-acento-botones.boton-tarjeta-final-tema2.texto-blanco(:href="obtenerLink('/downloads/2ANEXO Manejo_de_los_servicios_en_la_nube.pdf')" target="_blank")
                .texto-boton-descargar
                  span Descargar
                  i.fas.fa-file-download

    br
    br
    br
    
    .row.justify-content-around.align-items-center

      p A continuación, presentamos un resumen de estos servicios:

      .row  
        .col-lg-10
            figure
              img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-tarjeta6-tema6.png', alt='Texto que describa la imagen').imagen-tarjeta6-autmatizacion-tema7
                
    br
    br
    br
    
    .row.justify-content-around.align-items-center
      .row
          .col-lg-10
            .cajon.color-primario.cajon-color-automatizacion-tema7.p-4
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.



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
