<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Redes 

    //Tarjeta 1 color en la derecha
    .row.justify-content-around.align-items-center.color-columna-tarjeta1-tema1
        .col-6
          p.texto-tarjeta1-tema1.p-3 Comencemos hablando de las redes de datos, las cuales surgen inicialmente como una necesidad para procesos de estrategia militar, donde era necesario transportar información de manera rápida y eficiente, aunque en sus inicios el proceso de la seguridad de la información no se mantenía como una necesidad prioritaria, pero a lo largo de la historia fue tomando mucha fuerza debido a la confidencialidad de la información que estas manejan. Hoy en día, las redes se han convertido en uno de los servicios que hace posible el transporte de información y datos a nivel mundial y es utilizado por millones de usuarios todos los días, cada vez que abrimos nuestro correo electrónico o publicamos en nuestras redes sociales, estamos utilizando los servicios de la <em>red</em> más grande del mundo llamada <em>internet</em>, la cual hace posible la comunicación a nivel mundial.

        .col-6
          figure
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/Imagen-tarjeta1-tema1.png").imagen-tarjeta1-tema1
        
    br
    br
    //Tabs horizontales sencillas

    .row.justify-content-around.align-items-center

        p #[strong Ahora, la configuración de una red depende de su tipología y necesidades que se requieran para la comunicación de la información. Existen redes inalámbricas y redes cableadas y para estos casos particulares, su configuración puede variar de acuerdo a la implementación.]

        br
        br

        TabsC.color-primario.bloque-pestanas-horizontales
          .py-3.py-md-4(titulo="Redes cableadas")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/imagen-redes-cableadas.png', alt='Texto que describa la imagen').imagen-pestanas-horizontales
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                //h4 Celebrate your failures 1
                p Utilizan diferentes tipos de filamentos en cables para el transporte de la información.
                p Como podemos observar en la imagen, la conexión que se da entre cada dispositivo que pertenece a la red se hace a través de un cable conductor el cual transporta los datos e información y que puede ser compartida con otros dispositivos que se encuentran en ella. Es una de las más utilizadas porque ofrece como ventaja la seguridad, estabilidad y velocidad en el transporte de información, estas requieren para su configuración dispositivos tales como <em>routers</em>, los cuales se encargan de darle transporte a la información y solicitudes realizadas por el cliente.


          .py-3.py-md-4(titulo="Redes inalámbricas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/imagen-redes-inalambricas.png', alt='Texto que describa la imagen').imagen-pestanas-horizontales
                  //figcaption Leyenda de la imagen
              .col-md-6
                //h4 Celebrate your failures 2
                p Las redes inalámbricas o más conocidas como <em>WIFI</em>, no utilizan un medio físico como las redes cableadas, sino que hacen uso del aire para la transmisión de información. Estas redes se han vuelto populares en muchos lugares del mundo puesto que su mantenimiento, uso e implementación son mucho más sencillos que el de la <em>red</em> cableada teniendo una ventaja, no requieren que el dispositivo esté conectado físicamente a un cable o medio para interactuar con los servicios requeridos, pero debemos tener en cuenta que este tipo de redes pueden llegar a ser vulnerables sino se realiza una correcta instalación o implementación, donde se utiliza una clave compartida en el dispositivo que despliega la señal de la <em>red</em> y luego esa misma clave se debe colocar en los dispositivos que requieren conectarse al mismo para realizar un proceso de autenticación y así poder utilizar los servicios de la <em>red</em> de manera adecuada y segura.

        br
        br
        br
        br
        
        p.textofinal-pestanas-horizontales A continuación, veremos las diferentes configuraciones que se hacen en cada una de ellas, esto implica utilizar una nomenclatura llamada <em>dirección IP</em>, la cual es un número que se le asigna a cada equipo para poder ser identificado dentro de la <em>red</em> de datos, así como en un barrio existen nomenclaturas para las casas y de esa manera identificar cada una de ellas, en las redes de datos se utiliza la <em>dirección IP</em> para poder encontrar cada dispositivo en la misma. La siguiente imagen presenta un ejemplo de <em>dirección IP</em>.

    br
    br
    br

    .row.justify-content-around.align-items-center.fondo-tarjeta-direccion-ip

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1.
        span Ejemplo <em>dirección IP</em>
      
      .row
        .col-10
          figure
            img(src='@/assets/curso/temas/Imagen-direccion-ip.png', alt='Texto que describa la imagen').imagen-direccion-ip-tema1
      .row
        .col-lg-10
          .cajon.color-primario.cajon-color-direccion-ip.p-4
            p Señalado con color amarillo, se muestra la configuración de la <em>dirección IP</em> de un equipo en la <em>red</em>, cada número que se refleja en la misma indica el tipo de <em>red</em>, número del dispositivo y segmento donde se encuentra, adicional a ello la máscara de <em>red</em> y puerta de enlace de comunicación.
    
    separador

    .row.justify-content-around.align-items-center

        #roles_y_usuarios
        .titulo-segundo.color-acento-contenido
          h2 Roles y usuarios
        
        p #[strong  Es importante identificar qué es un rol y qué es un usuario.]
        p #[strong Conozcamos cada uno de ellos.]
        
        br
        br

        .row
          .col-lg-8.order-2.order-lg-1
            TabsA.color-acento-botones.mb-5        
              .tarjeta.fondo-tarjetas-tabs-rolesyusuarios.clr-paleYellow.p-4(titulo="Usuario")
                h4 Usuario
                p Usuario es el nombre que recibimos y que un sistema identifica para poder hacer uso del mismo, es decir, existe una separación entre la persona que utiliza el sistema y el nombre o usuario que utilizamos para identificarnos en el sistema.
                p Un ejemplo, es en los servidores de videojuegos, en ellos la persona tiene un nombre de pila para poder ser identificado por los otros usuarios del sistema, ejemplo: Dulfran Montaño, usuario: yoyito1984. Este es un claro ejemplo del uso de esta característica para la identificación de una persona dentro de un conjunto de usuarios.
                p Los usuarios son los que reciben los roles y también las restricciones para el ingreso al sistema, es decir, no se bloquea a quien está sentado en la computadora sino al usuario o credenciales que este tiene para ingresar al sistema como tal, esto en teoría se considera algo muy sencillo pero en la práctica suele ser un poco más complejo de lo que parece, por eso es importante, antes de la creación de un sistema de información, determinar cuáles son los mecanismos que se utilizarán para que los diferentes usuarios puedan utilizar los servicios ofrecidos por la aplicación.


              .tarjeta.fondo-tarjetas-tabs-rolesyusuarios.clr-paleYellow.p-4(titulo="Rol")
                h4 Rol
                p Son nombres que reciben los usuarios para conectarse a un sistema de información, representan un estatus y las funciones que pueden realizar dentro de un sistema informático, representa la distinción de cada persona dentro del sistema. Dentro de los roles podemos encontrar los siguientes: 
                .row.mb-5
                  .col-md.mb-5.mb-sm-0
                    
                    ul.lista-ul
                      li 
                        i.fas.fa-circle
                        | Usuario registrado: son aquellas personas que ingresan su información a un sistema para utilizar sus funciones, almacenar información y procesar la misma de alguna manera, en otros casos por ejemplo, las redes sociales o servidores de correo electrónico son usados para diferentes funciones.
                      li 
                        i.fas.fa-circle
                        | Administrador o gestor de información: se encargan del mantenimiento y gestión de la información, van desde bloquear usuarios, realizar copias de seguridad de los sistemas de almacenamiento, entre otros, adicional a ello, podemos decir que los roles permiten también determinar a qué lugares del sistema tienen acceso los usuarios, por ejemplo, si un usuario tiene acceso solo a los módulos del sistema, se le conceden los permisos, pero el usuario administrador regularmente tiene acceso a todas las funciones del sistema, incluyendo las que son de configuración.


          .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(data-aos="zoom-out-right")(src="@/assets/curso/temas/imagen-pestanas-verticales-tema1.png", alt="alt", style="width:450px;").m-auto

    separador
    br

    .row.justify-content-around.align-items-center

      #comandos_de_red
      .titulo-segundo.color-acento-contenido
        h2 Comandos de red

        
      .row.fondo-color-tarjeta1-rolesyusuarios
        .col-6
          p(data-aos="fade-left").texto-tarjeta1-rolesyusuarios.p-3 Son instrucciones que permiten controlar y verificar la información que se tiene, como configuraciones o estados de la <em>red</em> que se ha implementado. Existen muchos comandos de <em>red</em>, pero, en este componente formativo, abordaremos aquellos que permiten determinar el estado de la <em>red</em>, si existe comunicación entre los diferentes dispositivos que se encuentran instalados en la <em>red</em>, y se realizará una verificación de la conectividad y qué tan estable se encuentra la misma.

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
          p(data-aos="fade-left").p-3 Por ejemplo, el comando <em>ping</em> se utiliza para verificar si existe conectividad de extremo a extremo entre dos computadoras en una <em>red</em> de datos, el comando realiza 4 verificaciones, las cuales deben ser verificadas de manera correcta por el sistema, devolviendo como respuesta paquetes enviados = 4, recibidos = 4 y perdidos = 0, esto indica que no se registró ninguna pérdida de información y que la conexión de los dos dispositivos es estable y no tiene interrupciones, pero si en algún momento se detecta que los paquetes recibidos disminuyen, se puede llegar a la conclusión que existen problemas de conexión en los dos extremos de la conexión. En algunas ocasiones esto se debe a una mala ponchada de los cables que conforman el conector RJ45 que se conecta al dispositivo o computadora y también se presenta cuando se invierten algunos cables en el orden normal, existen otras posibilidades como deficiencia en la señal en caso de las redes inalámbricas o interrupción en la comunicación de los mismos. La siguiente imagen nos muestra un comando <em>ping</em>.

    br
    br
    .row.justify-content-around.align-items-center.fondo-tarjeta-direccion-ip

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2.
        span Comando <em>ping</em>

      .row
        .col-10
          figure
            img(src='@/assets/curso/temas/imagen-comando-ping-tema1.png', alt='Texto que describa la imagen').imagen-comando-ping
      .row
        .col-lg-10
          .cajon.color-primario.cajon-color-direccion-ip.p-4
            p Y un comando ping – t es un derivado del comando anterior, con la particularidad que este realiza un conjunto de más de 4 peticiones para realizar una estadística de las respuestas y los tiempos que le toma al dispositivo entregar las diferentes respuestas a las solicitudes que hace a los diferentes nodos o equipos que se encuentran en la <em>red</em>, esto se realiza para obtener información detallada de la interacción de este equipo con los otros en la <em>red</em>. La siguiente imagen nos presenta un ejemplo de este comando.

    br
    br
    br
    br

    .row.justify-content-around.align-items-center.fondo-tarjeta-direccion-ip

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 3.
        span Comando <em>ping - t</em>

      .row
        .col-10
          figure
            img(src='@/assets/curso/temas/imagen-comando-ping-t.png', alt='Texto que describa la imagen').imagen-comando-ping
      .row
        .col-lg-10
          .cajon.color-acento-botones.cajon-color-comando-ping-t.p-4
            p En la siguiente tabla veremos los principales comandos utilizados y su especificación.

    br
    br
    br
    br

    //Tabla comandos, corregir lineas izquierdas y tamaño
    
    .row.justify-content-around.align-items-center.fondo-tarjeta-direccion-ip

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Comandos de<em> red</em>

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
              td.texto-tabla-tema1 Resolver direcciones en nombres de host.

            tr
              td.separacion-columna-tabla-tema1 -n count
              td.texto-tabla-tema1 Número de solicitudes de eco para enviar.

            tr.color-fila-tabla
              td.separacion-columna-tabla-tema1 -l size
              td.texto-tabla-tema1 Enviar tamaño de búfer.

            tr
              td.separacion-columna-tabla-tema1 -f
              td.texto-tabla-tema1 Establecer marca, no fragmentar en paquetes (solo IPv4).

            tr.color-fila-tabla
              td.separacion-columna-tabla-tema1 -v TOS
              td.texto-tabla-tema1 Tipo de servicio (solo IPv4. Esta opción está desusada y no tiene ningún efecto sobre el campo de tipo de servicio del encabezado IP).

            tr
              td.separacion-columna-tabla-tema1 -r count
              td.texto-tabla-tema1 Registrar la ruta de saltos de cuenta (solo IPv4).
            
            tr.color-fila-tabla
              td.separacion-columna-tabla-tema1 -j host-list
              td.texto-tabla-tema1 Ruta de origen no estricta para lista-host (solo IPv4).

            tr
              td.separacion-columna-tabla-tema1 -4
              td.texto-tabla-tema1 Forzar el uso de IPv4.

            tr.color-fila-tabla
              td.separacion-columna-tabla-tema1 -6
              td.texto-tabla-tema1 Forzar el uso de IPv6.





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
