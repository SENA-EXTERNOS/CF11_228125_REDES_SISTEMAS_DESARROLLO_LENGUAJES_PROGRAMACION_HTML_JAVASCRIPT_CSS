<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Redes 

    .row.justify-content-around.align-items-center.color-columna-tarjeta1-tema1.mb-5
        .col-6
          p.texto-tarjeta1-tema1.p-3 Comencemos hablando de las redes de datos, las cuales surgen, inicialmente, como una necesidad para procesos de estrategia militar, donde era necesario transportar información de manera rápida y eficiente, aunque en sus inicios, el proceso de la seguridad de la información no se consideraba como una necesidad prioritaria, pero a lo largo de la historia fue tomando mucha fuerza debido a la confidencialidad de la información que estas manejan. Hoy en día, las redes se han convertido en uno de los servicios que hacen posible el transporte de información y datos a nivel mundial, y es utilizado por millones de usuarios todos los días; cada vez que abrimos nuestro correo electrónico o publicamos en nuestras redes sociales, estamos utilizando los servicios de la red más grande del mundo llamada Internet, la cual hace posible la comunicación a nivel mundial.

        .col-6
          figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/Imagen-tarjeta1-tema1.png").imagen-tarjeta1-tema1
        


    p.mb-5 Ahora, la configuración de una red depende de su tipología y las necesidades que se requieran para la comunicación de la información. Existen redes inalámbricas y redes cableadas y, para estos casos particulares, su configuración puede variar, de acuerdo con la implementación. 

    TabsC.color-primario.bloque-pestanas-horizontales.mb-5
      .p-3.p-md-4(titulo="Redes cableadas")
        .row.justify-content-around
          .col-md-5
            figure
              img(src='@/assets/curso/temas/imagen-redes-cableadas.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Utilizan diferentes tipos de filamentos en los cables, para el transporte de la información.
            p Como podemos observar en la imagen, la conexión que se da entre cada dispositivo que pertenece a la red, se lleva a cabo a través de un cable conductor, el cual transporta los datos y la información que puede ser compartida con otros dispositivos. Es una de las redes más utilizadas, porque ofrece como ventaja, la seguridad, estabilidad y velocidad en el transporte de la información; estas requieren, para su configuración, dispositivos tales como <i>routers</i>, los cuales se encargan de darle transporte a la información y las solicitudes realizadas por el cliente.
      .p-3.p-md-4(titulo="Redes inalámbricas")
        .row.justify-content-around
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/imagen-redes-inalambricas.png', alt='Texto que describa la imagen')
          .col-md-6
            p Las redes inalámbricas o más conocidas como WIFI, no utilizan un medio físico como las redes cableadas, sino que hacen uso del aire para la transmisión de información. Estas redes se han vuelto populares en muchos lugares del mundo puesto que su mantenimiento, uso e implementación son mucho más sencillos que el de la red cableada teniendo una ventaja, no requieren que el dispositivo esté conectado físicamente a un cable o medio para interactuar con los servicios requeridos, pero debemos tener en cuenta que este tipo de redes pueden llegar a ser vulnerables sino se realiza una correcta instalación o implementación, donde se utiliza una clave compartida en el dispositivo que despliega la señal de la red y luego esa misma clave se debe colocar en los dispositivos que requieren conectarse al mismo para realizar un proceso de autenticación y así poder utilizar los servicios de la red de manera adecuada y segura.
        
    p.mb-5 A continuación, veremos las diferentes configuraciones que se hacen en cada una de estas redes; esto implica utilizar una nomenclatura llamada dirección IP, formada por un número que se le asigna a cada equipo, para poder ser identificado dentro de la red de datos; así como en una ciudad existen nomenclaturas para las casas y de esa manera identificar a cada una de ellas, en las redes de datos, se utiliza la dirección IP para poder encontrar cada dispositivo en la misma. La siguiente imagen presenta un ejemplo de dirección IP.

      
    .row.justify-content-center.my-5
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1
          br
          span.fst-italic Ejemplo dirección IP      
        figure
          img(src='@/assets/curso/temas/Imagen-direccion-ip.png', alt='Texto que describa la imagen')
    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-primario.cajon-color-direccion-ip.p-4
          p.mb-0 Enmarcada con color amarillo, se muestra la configuración de la dirección IP de un equipo en la red; cada número que se refleja en la misma, indica el tipo de red, número del dispositivo y segmento donde se encuentra; adicional a esto, la máscara de red y puerta de enlace de comunicación.
  
    


    h3 Roles y usuarios
    
    p Es importante identificar qué es un rol y qué es un usuario.
    p.mb-5 Conozcamos cada uno de ellos.
    
    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5        
          .tarjeta.fondo-tarjetas-tabs-rolesyusuarios.clr-paleYellow.p-4(titulo="Usuario")
            h4 Usuario
            p Usuario es el nombre que recibe el individuo que utiliza, de manera habitual, un producto o un servicio y, también se identifica como usuario, al que un sistema reconoce, para que pueda utilizarlo; es decir, existe una separación entre la persona que utiliza un sistema y el <b>nombre o usuario</b> que se utiliza, para identificarse en un sistema y poder acceder a él.
            p Un ejemplo de esto se presenta en los servidores de videojuegos; en ellos, la persona tiene un nombre de pila para poder ser identificado por los otros usuarios del sistema; por ejemplo: Dulfran Montaño es el usuario: yoyito1984. Este es un claro ejemplo del uso de esta característica para la identificación de una persona, dentro de un conjunto de usuarios.
            p Los usuarios son los que reciben los roles y también las restricciones para el ingreso al sistema; es decir, no se bloquea a quien está sentado en la computadora, sino al usuario o credenciales que este tiene para ingresar al sistema, como tal; esto en teoría, se considera algo muy sencillo, pero en la práctica suele ser un poco más complejo de lo que parece y, por esta razón, es importante que antes de la creación de un sistema de información, determinar cuáles son los mecanismos que se utilizarán para que los diferentes usuarios puedan utilizar los servicios ofrecidos por la aplicación misma.


          .tarjeta.fondo-tarjetas-tabs-rolesyusuarios.clr-paleYellow.p-4(titulo="Rol")
            h4 Rol
            p Los usuarios, para conectarse a un sistema de información, representan un estatus y las funciones que pueden realizar dentro de ese sistema; el rol representa la distinción de cada persona dentro del sistema. Dentro de los roles, podemos destacar los siguientes: 
            .row.mb-5
              .col-md.mb-5.mb-sm-0
                
                ul.lista-ul
                  li 
                    i.fas.fa-circle
                    | Usuario registrado: se refiere a las personas que ingresan su información a un sistema para utilizar sus funciones, almacenar información y procesar la misma, de alguna manera; en algunos casos, como en las redes sociales o servidores de correo electrónico, son usados para diferentes funciones.
                  li 
                    i.fas.fa-circle
                    | Administrador o gestor de información: se encarga del mantenimiento y gestión de la información; sus funciones van desde bloquear usuarios, a realizar copias de seguridad de los sistemas de almacenamiento, entre otros; adicional a esto, se puede decir que los roles permiten también determinar a qué lugares del sistema tienen acceso los usuarios; por ejemplo, si un usuario tiene acceso solo a los módulos del sistema, se le conceden los permisos, pero el usuario administrador, regularmente, tiene acceso a todas las funciones del sistema, incluyendo las que son de configuración.


      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(data-aos="zoom-out-right")(src="@/assets/curso/temas/imagen-pestanas-verticales-tema1.png", alt="alt", style="width:450px;").m-auto

    
    br

    .row.justify-content-around.align-items-center

      h3 Comandos de red

        
      .row.fondo-color-tarjeta1-rolesyusuarios
        .col-6
          p(data-aos="fade-left").texto-tarjeta1-rolesyusuarios.p-3 Son instrucciones que permiten controlar y verificar la información que se tiene, como configuraciones o estados de la red que se ha implementado. Existen muchos comandos de red, pero, en este componente formativo, abordaremos aquellos que permiten determinar el estado de la misma, si existe comunicación entre los diferentes dispositivos que se encuentran instalados en la red, y se realizará una verificación de la conectividad y qué tan estable se encuentra la misma.

        .col-6
          figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen-tarjeta1-comandos-de-red.png").imagen-tarjeta1-rolesyusuarios
        
    br
    br

    .row.justify-content-around.align-items-center

      .row
        .col-5
          figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen2-comandos-red.png").imagen2-comandos-red

        .col-7
          p(data-aos="fade-left").p-3 Por ejemplo, el comando #[em ping] se utiliza para verificar si existe conectividad de extremo a extremo entre dos computadoras en una red de datos; el comando realiza 4 verificaciones, las cuales deben ser comprobadas de manera correcta por el sistema, retornando como respuesta, paquetes enviados = 4, recibidos = 4 y perdidos = 0; esto indica que no se registró ninguna pérdida de información y que la conexión de los dos dispositivos es estable y no tiene interrupciones; pero si en algún momento se detecta que los paquetes recibidos disminuyen, se puede llegar a la conclusión que existen problemas de conexión en los dos extremos de la conexión. En algunas ocasiones esto se debe a una mala ponchada de los cables que conforman el conector #[em RJ45] que se conecta al dispositivo o computadora y también se presenta cuando se invierten algunos cables en el orden normal, existen otras posibilidades como deficiencia en la señal en caso de las redes inalámbricas o interrupción en la comunicación de los mismos. La siguiente imagen nos muestra un comando #[em ping].

    br
    br

    .row.justify-content-center.my-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2
          br
          span.fst-italic Comando ping
        figure
          img(src='@/assets/curso/temas/imgs/CF11-1.png', alt='')

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-primario.cajon-color-direccion-ip.p-4
          p.mb-0 Y un comando ping – t es un derivado del comando anterior, con la particularidad que este realiza un conjunto de más de 4 peticiones para realizar una estadística de las respuestas y los tiempos que le toma al dispositivo entregar las diferentes respuestas a las solicitudes que hace a los diferentes nodos o equipos que se encuentran en la red; esto se realiza para obtener información detallada de la interacción de este equipo con los otros en la red. La siguiente imagen nos presenta un ejemplo de este comando.

    .row.justify-content-center.my-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3
          br
          span.fst-italic Comando ping - t
        figure
          img(src='@/assets/curso/temas/imgs/CF11-2.png', alt='')

      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-acento-botones.cajon-color-comando-ping-t.p-4
            p.mb-0 En la siguiente tabla veremos los principales comandos utilizados y su especificación:

    
    .row.justify-content-center.my-5
      .col-auto
        .titulo-sexto.color-acento-botones.mb-3
          h5 Tabla 1
          br
          span.fst-italic Comandos de red

        .tabla-a
          table
            //caption Leyenda de la tabla
            thead
              tr
                th.separacion-columna-tabla-tema1 Comando
                th.texto-tabla-tema1 Especificación
                
            tbody
              
              tr.color-fila-tabla
                td.separacion-columna-tabla-tema1 -a
                td.texto-tabla-tema1 Resolver direcciones en <em>nombres de host.</em>

              tr
                td.separacion-columna-tabla-tema1 <em>-n count</em>
                td.texto-tabla-tema1 Número de solicitudes de eco para enviar.

              tr.color-fila-tabla
                td.separacion-columna-tabla-tema1 <em>-l size</em>
                td.texto-tabla-tema1 Enviar tamaño de búfer.

              tr
                td.separacion-columna-tabla-tema1 <em>-f</em>
                td.texto-tabla-tema1 Establecer marca, no fragmentar en paquetes (solo <em>IPv4</em>).

              tr.color-fila-tabla
                td.separacion-columna-tabla-tema1 <em>-v TOS</em>
                td.texto-tabla-tema1 Tipo de servicio (solo <em>IPv4</em>. Esta opción está desusada y no tiene ningún efecto sobre el campo de tipo de servicio del encabezado <em>IP</em>).

              tr
                td.separacion-columna-tabla-tema1 <em>-r count</em>
                td.texto-tabla-tema1 Registrar la ruta de saltos de cuenta (solo <em>IPv4</em>).
              
              tr.color-fila-tabla
                td.separacion-columna-tabla-tema1 <em>-j host-list</em>
                td.texto-tabla-tema1 Ruta de origen no estricta para lista-<em>host</em> (solo <em>IPv4</em>).

              tr
                td.separacion-columna-tabla-tema1 -4
                td.texto-tabla-tema1 Forzar el uso de <em>IPv4.</em>

              tr.color-fila-tabla
                td.separacion-columna-tabla-tema1 -6
                td.texto-tabla-tema1 Forzar el uso de <em>IPv6.</em>





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
