<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Instalación y configuración de servidores
      
      
      .row.justify-content-around.align-items-center

        .row.color-columna-izq-tarjeta1-tema3
          .col-lg-6
            p.texto-tarjeta1-tema3.p-3 Para iniciar este proceso de exploración en instalación de servidores, debemos entender qué es un servidor, encontrando como definición que, es una computadora con unas características especiales en cuanto a rendimiento y almacenamiento, tiene como función principal ofrecer servicios a las diferentes computadoras que se encuentran conectadas a una <em>red</em>, estos servicios pueden ser almacenamiento de información, subida de archivos, bajada de archivos, procesamiento de información, correo electrónico, entre otras. Gracias a estas máquinas, es posible realizar el intercambio de información y utilizar los servicios que ahora usamos, tales como redes sociales, correo electrónico, entre otros. Los servidores son instalados en lugares donde el acceso a ellos es restringido y en algunas ocasiones con medidas de seguridad extrema porque la información que almacenan suele ser personal y no puede ser divulgada por terceros debido a que se generarían problemas con dicha información.

          .col-lg-6
            
            figure
                img(src='@/assets/curso/temas/imagen1-tema4.png', alt='Texto que describa la imagen').imagen-tarjeta1-tema3
      separador

      .row.justify-content-around.align-items-center

        #contenedor_web
        .titulo-segundo.color-acento-contenido
          h2 Contenedor web


        p Ahora bien, los contenedores son una forma de virtualización del sistema operativo. Un solo contenedor se puede usar para ejecutar cualquier cosa, desde un microservicio a un proceso de <em>software</em> en una aplicación de mayor tamaño. Dentro de un contenedor se encuentran todos los ejecutables, el código binario, las bibliotecas y los archivos de configuración necesarios. Sin embargo, en comparación con los métodos de virtualización de máquinas o servidores, los contenedores no llevan imágenes del sistema operativo, esto los hace más ligeros y portátiles, con una sobrecarga significativamente menor. En implementaciones de aplicaciones de mayor tamaño, se pueden poner en marcha varios contenedores como uno o varios <em>clústeres</em> de contenedores. Estos <em>clústeres</em> se pueden gestionar mediante un orquestador de contenedores, como <em>Kubernetes</em>.

        .row.fondo-tarjeta2-tema3
          .col-lg-10
            .tarjeta.imagen2-tarjeta2-tema3
              figure
                img(src='@/assets/curso/temas/imagen-contenedor-web.png', alt='Texto que describa la imagen')
          p.texto-invisible-tema4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam veritatis eum nihil dolorum laborum sequi repellat? Consequuntur veritatis corrupti quasi eos veniam, assumenda, recusandae dolore illum ipsa, cumque harum.

      br
      br

      
      .row.justify-content-around.align-items-center
        .row
          .col-lg-10
            .cajon.color-primario.cajon-color-direccion-ip.p-4
              p Este tipo de tecnologías son muy utilizadas por la mayoría de programadores y empresas que se dedican a la programación de aplicaciones, porque permiten la implementación de muchos servicios mediante la virtualización de los mismos. Si lo vemos desde un punto de vista de seguridad y practicidad es mucho mejor, ahora bien, si lo vemos desde el punto de vista de tiempos de respuesta son mucho más rápidos y permiten realizar un despliegue en máquinas que no tienen grandes recursos tecnológicos, lo cual se vuelve un punto a favor para empresas que no cuentan con equipos o servidores con gran potencia, es mucho más accesible y económico.
      
      br
      br
      br
      br
      
      .row.justify-content-around.align-items-center

        p #[strong Los beneficios de estos contenedores son:]
        
        .row
          .col-lg-8.order-2.order-lg-1
            TabsA.color-acento-botones.pestanas-verticales-izquierda.mb-5        
              .tarjeta.tarjeta-pestanas-verticales.clr-paleYellow.p-4(titulo="Menos sobrecarga").bloque-texto-pestanas-verticales-tema4
                h4 Menos sobrecarga
                p Los contenedores requieren menos recursos del sistema que los entornos de máquinas virtuales tradicionales o de <em>hardware</em>, porque no incluyen imágenes del sistema operativo.
                

              .tarjeta.tarjeta-pestanas-verticales.clr-paleYellow.p-4(titulo="Mayor portabilidad").bloque-texto-pestanas-verticales-tema4
                h4 Mayor portabilidad
                p Las aplicaciones que se ejecutan en contenedores se pueden poner en marcha fácilmente en sistemas operativos y plataformas de <em>hardware</em> diferentes.


              .tarjeta.tarjeta-pestanas-verticales.clr-paleYellow.p-4(titulo="Funcionamiento más constante").bloque-texto-pestanas-verticales-tema4
                h4 Funcionamiento más constante
                p Los equipos de <em>DevOps</em> saben que las aplicaciones en contenedores van a ejecutarse igual, independientemente de donde se pongan en marcha.
              
              
              .tarjeta.tarjeta-pestanas-verticales.clr-paleYellow.p-4(titulo="Mayor eficiencia").bloque-texto-pestanas-verticales-tema4
                h4 Mayor eficiencia
                p Los contenedores permiten poner en marcha, aplicar parches o escalar las aplicaciones con mayor rapidez.

              
              .tarjeta.tarjeta-pestanas-verticales.clr-paleYellow.p-4(titulo="Mejor desarrollo de aplicaciones").bloque-texto-pestanas-verticales-tema4
                h4 Mejor desarrollo de aplicaciones
                p Los contenedores respaldan los esfuerzos ágiles y de <em>DevOps</em> para acelerar los ciclos de desarrollo, prueba y producción.


          .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(data-aos="zoom-out-right")(src="@/assets/curso/temas/imagen-docker-tema4.png", alt="alt", style="width:450px;").m-auto


      .row.justify-content-around.align-items-center
        .row
          .col-lg-10
            .cajon.color-acento-botones.cajon-color-comando-ping-t.p-4
              p Para tener mayor compresión sobre la instalación de este servicio, lo invitamos a ver el video <em>Docker</em> y <em>kubernetes</em> sobre <em>Windows 10 wls</em>, el cual se encuentra en el material complementario.
      
      separador
      br
      br
      br

      .row.justify-content-around.align-items-center

        #base_de_datos
        .titulo-segundo.color-acento-contenido
          h2 Base de datos

        .row
          .col-lg-6
            
            p(data-aos="fade-left") #[strong  Las bases de datos son sistemas de almacenamiento que permiten resguardar la información de una manera organizada y segura, una característica es la velocidad de respuesta al momento de solicitar la búsqueda a realizar pero en este momento nos concentramos en los servidores de bases de datos, los cuales son utilizados para el despliegue de bases de datos que prestan servicios a millones de usuarios en la <em>red</em>.] Uno de los aspectos a tener en cuenta al momento de realizar la instalación de un servidor de bases de datos, son los requerimientos de infraestructura que se necesitan para poder atender a la cantidad de usuarios que requieren de dicho servicio, esto se puede ver en la cantidad de estos o de conexiones simultáneas que pueda soportar el servicio. Como bien se sabe, existen muchos motores de bases de datos que actualmente son utilizados para el almacenamiento de información pero nos concentraremos en <em>MySQL</em>.

          .col-lg-6
            
            figure
                img(data-aos="fade-down-right")(src='@/assets/curso/temas/imagen-base-datos-tema4.png', alt='Texto que describa la imagen')

      br
      br
      br

      .row.justify-content-around.align-items-center

        .row.fondo-color-tarjeta-mysql
          .col-lg-6
            figure
                img(data-aos="fade-down-right")(src='@/assets/curso/temas/imagen-mysql-tema4.png', alt='Texto que describa la imagen').imagen-base-datos-tema4

          .col-lg-6(data-aos="fade-left").p-3
            p.texto-tarjeta-mysql El servidor de bases de datos <em>MySQL</em> es un <em>software</em> que se encarga del almacenamiento y procesamiento de información. Este servidor puede ser ejecutado de manera local o de manera remota, instalado en unos servicios de alojamiento llamados <em>hosting</em>, los cuales son servicios que se ofrecen a través de <em>internet</em> y que se tiene que adquirir un plan para usarlos. Una de las cosas a tener presente en un servidor de bases de datos es la configuración de acceso teniendo en cuenta la cantidad de conexiones y usuarios autorizados para acceder a la información almacenada, otro aspecto son los permisos que se les da a esos usuarios para modificar la información, un ejemplo puede ser un usuario administrador y un usuario de consulta, el usuario administrador tendrá permisos de actualizar y modificar ciertas funciones e información del sistema mientras que el usuario de consulta solo podrá acceder a información almacenada pero no podrá modificar la que ya se encuentra almacenada a continuación veremos estas dos opciones.
            p.texto-tarjeta-mysql La siguiente imagen nos presenta un servidor de bases de datos <em>MySQL</em>.
            br
            
      
      br
      br
      br

      .row.justify-content-around.align-items-center
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span <em>Servidor de bases de datos MySQL</em>
          br

          .row
            .col-10
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-servidor-mysql.png', alt='Texto que describa la imagen').imagen-servidor-mysql-tema4

      br
      br
      br

      .row.justify-content-around.align-items-center
          .row(data-aos="flip-up")
            .col-lg-10
              .cajon.color-primario.cajon-color-direccion-ip.p-4
                p Como se puede apreciar en la siguiente imagen, tenemos varias cuentas de usuarios creadas en nuestro servidor de bases de datos, pero no todas tienen la misma configuración en cuanto a los privilegios y permisos que poseen. Por ejemplo, la cuenta llamada <em>localhost</em> tiene configurados todos los privilegios, es decir, puede realizar la modificación de todas las configuraciones del sistema, de hecho, tiene permisos para crear otros usuarios, pero en el caso de la cuenta llamada <em>yoyito</em>, solo tiene configurados algunos permisos como consultar, inserción, entre otros, esto quiere decir que en una base de datos, se deben configurar los usuarios para permitirles ciertos accesos para la manipulación y administración de los datos allí almacenados.
    
      br
      br
      br
      br

      .row.justify-content-around.align-items-center
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5.
            span <em>Configuración de cuentas de usuario</em>
          br

          .row
            .col-10
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-configuracion-usuarios-mysql.png', alt='Texto que describa la imagen').imagen-servidor-mysql-tema4

      br
      br
      br
      br

      .row.justify-content-around.align-items-center
        .row(data-aos="flip-up")
          .col-lg-10
            .cajon.color-acento-botones.cajon-color-comando-ping-t.p-4
              p Y en la siguiente imagen se encuentran, seleccionados con color amarillo, los límites de recursos para asignar a los usuarios para la utilización de estos. En este caso, se debe colocar el máximo de consultas, máximo de actualizaciones, máximo de conexiones por hora y cantidad de usuarios conectados. Estos límites se deben establecer de acuerdo con las necesidades de la organización que la implementa, pero existe algo particular en esta imagen y es que todos los números se encuentran en 0, esto quiere decir que no existe límite de conexiones sino que el sistema de bases de datos, de acuerdo con los recursos que tenga disponibles la computadora, se usarán para cumplir la entrega y procesamiento de la información que requieren. Ahora bien, esto es una mala práctica desde el punto de vista real, es decir, esta configuración se puede utilizar en una computadora local para aprovechar todo el potencial del motor de la base de datos, pero al momento de instalar y configurar en un ambiente real, se deben tener en cuenta los límites establecidos y mencionados anteriormente.
      
      
      br
      br
      br
      br

      
      .row.justify-content-around.align-items-center
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 6.
            span <em>Configuración de límite de recursos</em>
          br

          .row
            .col-10
              figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/imagen-configuracion-limite-recursos-tema4.png', alt='Texto que describa la imagen').imagen-servidor-mysql-tema4
          
      br
      br
      br




  

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
